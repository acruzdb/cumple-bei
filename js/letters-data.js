// ============================================================
// CARTAS DE BEI — datos editables
// ============================================================
// Cada año, el día del cumpleaños de Bei (28 de agosto),
// añade aquí la carta correspondiente a ese año:
//
//   1. Busca abajo el objeto que tenga el "year" de ese cumpleaños.
//   2. Cambia  unlocked: false   por   unlocked: true
//   3. Escribe el texto dentro de "body": cada línea entre comillas
//      es un párrafo. Puedes añadir tantas líneas como quieras,
//      la carta admite texto largo sin problema.
//   4. Si quieres, cambia "title" (por defecto es la edad que cumple).
//   5. "orientation": pon "horizontal" o "vertical" según la foto
//      que subas ese año a assets/photos/ — la postal se adapta sola.
//   6. Guarda el archivo y sube los cambios a GitHub. Ya está.
//
// No hace falta tocar ningún otro archivo para añadir una carta nueva.
// ============================================================

const LETTERS = [
  {
    year: 2026,
    age: 22,
    unlocked: true,
    title: "Feliz cumpleaños princesa",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: [
	  "Feliz cumpleaños princesa. 22 años... parecía ayer cuando todavía te metías el pulgar en la boca (literalmente sigues haciéndolo).",
	  "Hoy es un día especial, tanto para tí, como para los que te rodean. Gracias por hacerme un huequito en tu vida, en tu familia, en tu grupo de amigos.",
	  "Eres realmente especial, y no hace falta mucho tiempo para darse cuenta de ello. Me recogiste como siempre dices 'Del cubo de la basura', nada más lejos de la realidad porque realmente no estaba bien. Gracias a esto:",
	  "    - Me has ayudado a entender, que la vida es mucho más bonita cuando le sonríes en vez de ponerle malas caras.",
	  "    - Me has ayudado a levantarme cuando peor he estado, cuando ni yo mismo creía en mí.",
	  "    - Me has recordado que todos somos importantes para alguien, y que pese al tiempo que puedas estar solo, siempre acabará llegando esa persona que te dé el cariño que todos buscamos.",
	  "    - Me has enseñado que nunca es tarde para cambiar, solo hay que querer y ponerle ganas.",
	  "	   - Me has recordado lo bonito que es tener un familia que te quiere, con el propio ejemplo de la tuya.",
	  "    - Y también me has recordado, que todavía quedan personas buenas y bonitas, como TU.",
	  "Estoy super agradecido de que la vida te haya puesto en mi camino, porque de verdad, que has cambiado la mía. Me has devuelto la ilusión por las cosas, me siento apoyado en cualquier cosa que quiera poder hacer, me das una inmensidad de cariño que hace que me sienta como en casa... no sé, más que feliz de poder crecer contigo.",
	  "Y bueno, como no todo van a ser cosas bonitas, vengo a recordarte que a partir del 1 de Septiembre seremos pobres, y aunque felices, tendremos que pensar en nuevos objetivos para nuestro plan de rateo máximo, que sino me veo comiendo botellas de plástico en vez de llevarlas al mercadona para que nos den un paquete de chicles y una bolsa de doritos.",
	  "Una vez más, gracias por ser tan tú, por cuidarme tanto como puedes, y por quererme tan bien. Brillas de forma diferente, te lo garantizo.",
      "Feliz vida, y Feliz cumpleaños preciosa,",
	  "TE QUIERO.",
    ]
  },
  {
    year: 2027,
    age: 23,
    unlocked: false,
    title: "23",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2028,
    age: 24,
    unlocked: false,
    title: "24",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2029,
    age: 25,
    unlocked: false,
    title: "25",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2030,
    age: 26,
    unlocked: false,
    title: "26",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2031,
    age: 27,
    unlocked: false,
    title: "27",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2032,
    age: 28,
    unlocked: false,
    title: "28",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2033,
    age: 29,
    unlocked: false,
    title: "29",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2034,
    age: 30,
    unlocked: false,
    title: "30",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2035,
    age: 31,
    unlocked: false,
    title: "31",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2036,
    age: 32,
    unlocked: false,
    title: "32",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2037,
    age: 33,
    unlocked: false,
    title: "33",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2038,
    age: 34,
    unlocked: false,
    title: "34",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2039,
    age: 35,
    unlocked: false,
    title: "35",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2040,
    age: 36,
    unlocked: false,
    title: "36",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2041,
    age: 37,
    unlocked: false,
    title: "37",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2042,
    age: 38,
    unlocked: false,
    title: "38",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2043,
    age: 39,
    unlocked: false,
    title: "39",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2044,
    age: 40,
    unlocked: false,
    title: "40",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2045,
    age: 41,
    unlocked: false,
    title: "41",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2046,
    age: 42,
    unlocked: false,
    title: "42",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2047,
    age: 43,
    unlocked: false,
    title: "43",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2048,
    age: 44,
    unlocked: false,
    title: "44",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2049,
    age: 45,
    unlocked: false,
    title: "45",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2050,
    age: 46,
    unlocked: false,
    title: "46",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2051,
    age: 47,
    unlocked: false,
    title: "47",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2052,
    age: 48,
    unlocked: false,
    title: "48",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2053,
    age: 49,
    unlocked: false,
    title: "49",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2054,
    age: 50,
    unlocked: false,
    title: "50",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2055,
    age: 51,
    unlocked: false,
    title: "51",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2056,
    age: 52,
    unlocked: false,
    title: "52",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2057,
    age: 53,
    unlocked: false,
    title: "53",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2058,
    age: 54,
    unlocked: false,
    title: "54",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2059,
    age: 55,
    unlocked: false,
    title: "55",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2060,
    age: 56,
    unlocked: false,
    title: "56",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2061,
    age: 57,
    unlocked: false,
    title: "57",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2062,
    age: 58,
    unlocked: false,
    title: "58",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2063,
    age: 59,
    unlocked: false,
    title: "59",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2064,
    age: 60,
    unlocked: false,
    title: "60",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2065,
    age: 61,
    unlocked: false,
    title: "61",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2066,
    age: 62,
    unlocked: false,
    title: "62",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2067,
    age: 63,
    unlocked: false,
    title: "63",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2068,
    age: 64,
    unlocked: false,
    title: "64",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2069,
    age: 65,
    unlocked: false,
    title: "65",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2070,
    age: 66,
    unlocked: false,
    title: "66",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2071,
    age: 67,
    unlocked: false,
    title: "67",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2072,
    age: 68,
    unlocked: false,
    title: "68",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2073,
    age: 69,
    unlocked: false,
    title: "69",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2074,
    age: 70,
    unlocked: false,
    title: "70",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2075,
    age: 71,
    unlocked: false,
    title: "71",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2076,
    age: 72,
    unlocked: false,
    title: "72",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2077,
    age: 73,
    unlocked: false,
    title: "73",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2078,
    age: 74,
    unlocked: false,
    title: "74",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2079,
    age: 75,
    unlocked: false,
    title: "75",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2080,
    age: 76,
    unlocked: false,
    title: "76",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2081,
    age: 77,
    unlocked: false,
    title: "77",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2082,
    age: 78,
    unlocked: false,
    title: "78",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2083,
    age: 79,
    unlocked: false,
    title: "79",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2084,
    age: 80,
    unlocked: false,
    title: "80",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2085,
    age: 81,
    unlocked: false,
    title: "81",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2086,
    age: 82,
    unlocked: false,
    title: "82",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2087,
    age: 83,
    unlocked: false,
    title: "83",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2088,
    age: 84,
    unlocked: false,
    title: "84",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2089,
    age: 85,
    unlocked: false,
    title: "85",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2090,
    age: 86,
    unlocked: false,
    title: "86",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2091,
    age: 87,
    unlocked: false,
    title: "87",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2092,
    age: 88,
    unlocked: false,
    title: "88",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2093,
    age: 89,
    unlocked: false,
    title: "89",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2094,
    age: 90,
    unlocked: false,
    title: "90",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2095,
    age: 91,
    unlocked: false,
    title: "91",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2096,
    age: 92,
    unlocked: false,
    title: "92",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2097,
    age: 93,
    unlocked: false,
    title: "93",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2098,
    age: 94,
    unlocked: false,
    title: "94",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2099,
    age: 95,
    unlocked: false,
    title: "95",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2100,
    age: 96,
    unlocked: false,
    title: "96",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2101,
    age: 97,
    unlocked: false,
    title: "97",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2102,
    age: 98,
    unlocked: false,
    title: "98",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2103,
    age: 99,
    unlocked: false,
    title: "99",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
  {
    year: 2104,
    age: 100,
    unlocked: false,
    title: "100",
    orientation: "horizontal", // "horizontal" o "vertical"
    body: []
  },
];

// Datos de referencia usados por script.js (no hace falta tocarlos)
const BIRTH_YEAR = 2004;
const BIRTHDAY_DAY = 28;
const BIRTHDAY_MONTH = 8; // agosto
