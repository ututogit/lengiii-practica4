let productos = [
  {
    id: 1,
    titulo: "Volkswagen Gol",
    precio: "$15,000",
    condicion: "Usado",
    imagen: "img/vw_gol.jpg"
  },
  {
    id: 2,
    titulo: "Toyota Hilux",
    precio: "$17,500",
    condicion: "Usado",
    imagen: "img/toyota_hilux.jpg"
  },
  {
    id: 3,
    titulo: "Chevrolet Corsa",
    precio: "$25,000",
    condicion: "Nuevo",
    imagen: "img/chevrolet_corsa.jpg"
  },
  {
    id: 4,
    titulo: "Renault Clio",
    precio: "$27,000",
    condicion: "Nuevo",
    imagen: "img/renault_clio.jpg"
  },
  {
    id: 5,
    titulo: "Fiat Argo",
    precio: "$13,000",
    condicion: "Usado",
    imagen: "img/fiat_argo.jpg"
  },
  {
    id: 6,
    titulo: "Volkswagen Amarok",
    precio: "$14,500",
    condicion: "Usado",
    imagen: "img/vw_amarok.png"
  },
  {
    id: 7,
    titulo: "Fiat Cronos",
    precio: "$35,000",
    condicion: "Nuevo",
    imagen: "img/fiat_cronos.png"
  },
  {
    id: 8,
    titulo: "Toyota Corolla",
    precio: "$30,000",
    condicion: "Nuevo",
    imagen: "img/toyota_corolla.png"
  },
  {
    id: 9,
    titulo: "Audi A4",
    precio: "$32,000",
    condicion: "Nuevo",
    imagen: "img/audi_a4.jpg"
  },
  {
    id: 10,
    titulo: "Ford Focus",
    precio: "$12,000",
    condicion: "Usado",
    imagen: "img/ford_focus.jpg"
  },
  {
    id: 11,
    titulo: "Ford EcoSport",
    precio: "$14,000",
    condicion: "Usado",
    imagen: "img/ford_ecosport.jpg"
  },
  {
    id: 12,
    titulo: "Volkswagen Golf",
    precio: "$16,000",
    condicion: "Usado",
    imagen: "img/vw_golf.jpg"
  }
];


const contenedor = document.getElementById("contenedor");

productos.map(producto => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML = `
    <img src="${producto.imagen}">
    <h3>${producto.titulo}</h3>
    <p>Precio: ${producto.precio}</p>
    <p>Condición: ${producto.condicion}</p>
	<Button> Comprar </Button>
  `;
  contenedor.appendChild(tarjeta);
});
