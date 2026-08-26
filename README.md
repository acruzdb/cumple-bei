# El correo de Bei 💌

Página web de cumpleaños: un buzón con un casillero por cada año (de los 22 a
los 100), cada uno con una postal (foto + mensaje) y una carta dentro de un
sobre lacrado.

## Estructura de carpetas

```
bei-carta/
├── index.html              ← la página (no hace falta tocarla)
├── css/
│   └── style.css           ← estilos (colores, tipografía, animaciones)
├── js/
│   ├── letters-data.js     ← ✏️ AQUÍ AÑADES LA CARTA DE CADA AÑO
│   └── script.js           ← lógica de la página (no hace falta tocarla)
└── assets/
    ├── favicon.svg          ← icono de la pestaña del navegador
    └── photos/               ← 🖼️ AQUÍ SUBES LA FOTO DE CADA AÑO
```

## Cómo publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado o público).
2. Sube todo el contenido de esta carpeta (`index.html`, `css/`, `js/`,
   `assets/`) a la raíz del repositorio.
3. Ve a **Settings → Pages**, y en "Source" elige la rama `main` y la
   carpeta `/ (root)`.
4. Espera un par de minutos y tu página estará en
   `https://tu-usuario.github.io/nombre-del-repositorio/`.

## Cómo añadir la carta de un nuevo cumpleaños

Abre `js/letters-data.js`. Verás un array con un objeto por cada año, desde
2026 (22 años) hasta 2104 (100 años). Busca el año que corresponda y:

1. Cambia `unlocked: false` por `unlocked: true`.
2. Escribe el texto dentro de `body`: cada línea entre comillas es un
   párrafo. Puedes añadir tantas líneas/párrafos como quieras, la carta
   admite texto largo sin ningún problema (tiene scroll interno).
3. Guarda y sube el cambio a GitHub.

```js
{
  year: 2027,
  age: 23,
  unlocked: true,          // ← antes false
  title: "23",
  orientation: "horizontal", // o "vertical", según la foto de ese año
  body: [
    "Primer párrafo de la carta...",
    "Segundo párrafo...",
    "Feliz cumpleaños, Bei."
  ]
}
```

No hace falta tocar ningún otro archivo.

## Cómo añadir la foto de un nuevo cumpleaños

Sube una foto a `assets/photos/` con el año como nombre de archivo, por
ejemplo:

```
assets/photos/2026.jpg
assets/photos/2027.jpg
```

Admite `.jpg`, `.jpeg`, `.png` o `.webp` (prueba esas extensiones en ese
orden automáticamente). Si no subes ninguna foto para un año, la postal
mostrará un aviso indicando exactamente el nombre de archivo que espera, así
que nunca se rompe visualmente si te olvidas de subirla a tiempo.

### Fotos verticales (retrato)

Si la foto de un año es vertical en vez de horizontal, cambia ese año en
`js/letters-data.js` de `orientation: "horizontal"` a
`orientation: "vertical"`. La postal (delante y detrás) se adapta sola a un
formato más alto y estrecho, tanto en el casillero como al abrirla.

## Personalización

- **Colores**: están todos definidos como variables al principio de
  `css/style.css` (bloque `:root`), así que puedes cambiar el naranja
  dominante o cualquier otro tono desde un único sitio.
- **Tipografía**: se usan tres fuentes de Google Fonts (Cinzel, EB Garamond
  y Dancing Script), enlazadas en `index.html`. Se pueden cambiar por
  cualquier otra fuente de Google Fonts actualizando ese enlace y las
  variables `--font-*` en `style.css`.
- **Icono de la pestaña**: es `assets/favicon.svg` (un corazón). Puedes
  sustituirlo por cualquier otro SVG con el mismo nombre de archivo.
