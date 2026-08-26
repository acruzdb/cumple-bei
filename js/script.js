// =========================================================
// LÓGICA — no hace falta tocar este archivo para añadir cartas
// o fotos nuevas cada año; eso se hace en js/letters-data.js
// y subiendo la foto a assets/photos/
// =========================================================

const MONTHS_ES = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre"
];
const PHOTO_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const mailboxView = document.getElementById('mailbox-view');
const letterView  = document.getElementById('letter-view');
const slotsGrid   = document.getElementById('slots-grid');
const toastEl     = document.getElementById('toast');
const closeBtn    = document.getElementById('close-btn');

const postcardEl      = document.getElementById('postcard');
const postcardFlipEl  = document.getElementById('postcard-flip');
const postcardPhotoEl = document.getElementById('postcard-photo');
const postcardFallback= document.getElementById('postcard-fallback');
const fallbackPathEl  = document.getElementById('fallback-path');
const postcardHintEl  = document.getElementById('postcard-hint');
const postcardStampYearEl = document.getElementById('postcard-stamp-year');

const envelopeEl    = document.getElementById('envelope');
const sealEl        = document.getElementById('seal');

const letterPaperEl    = document.getElementById('letter-paper');
const letterScrollEl   = document.getElementById('letter-scroll');
const letterTitleEl    = document.getElementById('letter-title');
const letterBodyEl     = document.getElementById('letter-body');
const letterPostmarkEl = document.getElementById('letter-postmark');

let toastTimer = null;
const STEP_FADE_MS = 500;

/* ---------------- Construir los casilleros ---------------- */
function buildSlots(){
  const unlockedYears = LETTERS.filter(l => l.unlocked).map(l => l.year);
  const currentYear = unlockedYears.length ? Math.max(...unlockedYears) : null;

  const frag = document.createDocumentFragment();

  LETTERS.forEach((letter) => {
    const btn = document.createElement('button');
    btn.className = 'slot';
    btn.type = 'button';
    if (letter.unlocked) btn.classList.add('is-unlocked');
    if (letter.year === currentYear) btn.classList.add('is-current');

    btn.setAttribute('aria-label',
      letter.unlocked
        ? `Postal y carta del cumpleaños número ${letter.age} (${letter.year})`
        : `Casillero ${letter.year}, todavía sin abrir`
    );

    btn.innerHTML = `
      <span class="slot-preview" aria-hidden="true"></span>
      <span class="slot-plate">
        <span class="plate-age">${letter.age}</span>
        <span class="plate-year">${letter.year}</span>
      </span>
    `;

    if (letter.unlocked){
      const preview = btn.querySelector('.slot-preview');
      preview.style.setProperty('--slot-photo', `url('${photoBasePath(letter.year)}.jpg')`);
    }

    btn.addEventListener('click', () => onSlotClick(letter, btn));
    frag.appendChild(btn);
  });

  slotsGrid.appendChild(frag);
  observeSlots();
}

function photoBasePath(year){
  return `assets/photos/${year}`;
}

/* ---------------- Animación de aparición al hacer scroll ---------------- */
function observeSlots(){
  const slots = document.querySelectorAll('.slot');
  if (!('IntersectionObserver' in window)){
    slots.forEach(s => s.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  slots.forEach(s => io.observe(s));
}

/* ---------------- Click en un casillero ---------------- */
function onSlotClick(letter, btn){
  if (!letter.unlocked){
    showToast(`Esta carta llegará el 28 de agosto de ${letter.year} 🖋️`);
    btn.animate(
      [{ transform:'translateX(0)' }, { transform:'translateX(-4px)' },
       { transform:'translateX(4px)' }, { transform:'translateX(0)' }],
      { duration: 260, easing: 'ease-in-out' }
    );
    return;
  }
  openLetterFlow(letter);
}

/* ---------------- Toast ---------------- */
function showToast(msg){
  clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.classList.add('is-visible');
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2600);
}

/* ---------------- Cargar la foto con extensiones de reserva ---------------- */
function loadPhoto(year){
  postcardEl.classList.remove('photo-missing');
  let i = 0;
  postcardPhotoEl.onerror = () => {
    i++;
    if (i < PHOTO_EXTENSIONS.length){
      postcardPhotoEl.src = `${photoBasePath(year)}.${PHOTO_EXTENSIONS[i]}`;
    } else {
      postcardEl.classList.add('photo-missing');
    }
  };
  postcardPhotoEl.alt = `Foto de Bei, cumpleaños ${year}`;
  postcardPhotoEl.src = `${photoBasePath(year)}.${PHOTO_EXTENSIONS[0]}`;
  fallbackPathEl.textContent = `assets/photos/${year}.jpg`;
}

/* ---------------- Estado de los pasos (postal → sobre → carta) ---------------- */
function setStep(activeEl){
  [postcardEl, envelopeEl, letterPaperEl].forEach(el => {
    el.classList.toggle('is-active', el === activeEl);
  });
}

function resetFlow(){
  postcardFlipEl.classList.remove('is-flipped');
  postcardEl.classList.remove('is-leaving');
  envelopeEl.classList.remove('is-open');
  letterPaperEl.classList.remove('is-active');
  postcardHintEl.textContent = 'Toca la postal para darle la vuelta';
}

/* ---------------- Abrir el flujo completo para un año ---------------- */
function openLetterFlow(letter){
  resetFlow();
  loadPhoto(letter.year);
  postcardEl.classList.toggle('is-vertical', letter.orientation === 'vertical');
  postcardStampYearEl.textContent = letter.year;

  letterPostmarkEl.textContent = `28 de ${MONTHS_ES[7]} de ${letter.year}`;
  letterTitleEl.textContent = `${letter.age} años`;
  letterBodyEl.innerHTML = letter.body.map(p => `<p>${p}</p>`).join('');

  setStep(postcardEl);

  mailboxView.classList.remove('is-active');
  letterView.classList.add('is-active');
  letterView.setAttribute('aria-hidden', 'false');

  sealEl.onclick = breakSeal;
}

/* ---------------- Interacción con la postal ---------------- */
postcardFlipEl.addEventListener('click', () => {
  if (postcardEl.classList.contains('is-leaving')) return;

  if (!postcardFlipEl.classList.contains('is-flipped')){
    postcardFlipEl.classList.add('is-flipped');
    postcardHintEl.textContent = 'Tócala de nuevo para ver la carta';
    return;
  }

  // segunda pulsación: transición sutil de la postal al sobre
  postcardEl.classList.add('is-leaving');
  setTimeout(() => {
    setStep(envelopeEl);
  }, STEP_FADE_MS * 0.6);
});

/* ---------------- Romper el sello ---------------- */
function breakSeal(){
  envelopeEl.classList.add('is-open');
  setTimeout(() => {
    setStep(letterPaperEl);
    letterScrollEl.scrollTop = 0;
    letterScrollEl.focus({ preventScroll: true });
  }, 550);
}

/* ---------------- Volver al buzón ---------------- */
closeBtn.addEventListener('click', () => {
  letterView.classList.remove('is-active');
  letterView.setAttribute('aria-hidden', 'true');
  mailboxView.classList.add('is-active');
});

/* ---------------- Init ---------------- */
buildSlots();
