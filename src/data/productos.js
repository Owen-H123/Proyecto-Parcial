import card1 from "../assets/img/card1.webp";
import card2 from "../assets/img/card2.webp";
import card3 from "../assets/img/card3.webp";
import card4 from "../assets/img/card4.webp";
import card5 from "../assets/img/card-5.webp";
import card6 from "../assets/img/card6.webp";
import card7 from "../assets/img/card7.webp";
import card8 from "../assets/img/card8.webp";
import monitor1 from "../assets/img/monitor1.webp";
import monitor2 from "../assets/img/monitor2.webp";
import monitor3 from "../assets/img/monitor3.webp";
import monitor4 from "../assets/img/monitor4.webp";

const productos = [
  {
    id: "1",
    nombre: "Adaptador Ugreen 5 en 1",
    precio: 626,
    imagen: card1,
    descripcion: "Un adaptador compacto y versátil.",
  },
  {
    id: "2",
    nombre: "Tablet Lenovo Idea Pro 12,7 + Teclado Y Lápiz",
    precio: 1719,
    imagen: card2,
    descripcion: "Tablet profesional ideal para productividad.",
  },
  {
    id: "3",
    nombre: "Parlante 2.1 bluetooth creative Stage",
    precio: 626,
    imagen: card3,
    descripcion: "Sonido potente con conectividad Bluetooth.",
  },
  {
    id: "4",
    nombre: 'Monitor LG 27GS60QC-B 27" QHd+',
    precio: 829,
    imagen: card4,
    descripcion: "Monitor con excelente resolución para gaming.",
  },
  {
    id: "5",
    nombre: "Mouse Logitech Signature M650 Silent Inalámbrico Rosa",
    precio: 149,
    imagen: card5,
    descripcion: "Mouse ergonómico, silencioso y cómodo, ideal para uso diario.",
  },
  {
    id:"6",
    nombre:"Teclado Mecánico Redragon Kumara K552",
    precio:120,
    imagen: card6,
    descripcion:"Teclado compacto con switches rojos",
  },
  {
    id:"7",
    nombre:"Audífonos Gamer HyperX Cloud II",
    precio: 300,
    imagen:card7,
    descripcion:"Sonido envolvente con micrófono incluido.",
  },
  {
    id:"8",
    nombre:"Mac book air chip M1",
    precio:3800,
    imagen:card8,
    descripcion:"Su innovador chip M1 ofrece un rendimiento y una duración de batería excepcionales.",
  }
  

];

export default productos;


export const monitores = [
  {
    id: 101,
    nombre: "Monitor Teros Plano Te2128s 21.5",
    precio: 220,
    imagen: monitor1,
    descripcion:"eleva tu experiencia de juego al siguiente nivel"
  },
  {
    id:102,
    nombre:"Monitor Gamer Teros con pantalla de 21.45 y resolución Full HD",
    precio:274,
    imagen:monitor2,
    descripcion:"Con resolución Full HD (1920 px x 1080 px)"
  },
  {
    id:103,
    nombre:"Monitor Gamer KTC con pantalla de 24 y resolución Full HD",
    precio:270,
    imagen:monitor3,
    descripcion:"colores más precisos y mejores ángulos de visión gracias a la tecnología IPS."
  },
  {
    id:104,
    nombre:"Monitor Teros Te-2415s 24 Ips Full Hd 120hz 1ms Amd Freesync Color Negro",
    precio:270,
    imagen:monitor4,
    descripcion:"experiencia visual avanzada"
  }
];