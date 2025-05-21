const contenedorHTML = document.getElementById("contenedor");

let productos = [
    {
        "id": "MLA819328068",
        "title": "Motorola G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram",
        "price": 28599,
        "condition": "new",
        "free_shipping": true,
        "thumbnail": "http://mla-s1-p.mlstatic.com/909111-MLA31239994706_062019-I.jpg"
    },
    {
        "id": "MLA801485554",
        "title": "Motorola G6 32 Gb Índigo Oscuro 3 Gb Ram",
        "price": 10999,
        "condition": "new",
        "free_shipping": false,
        "thumbnail": "http://mla-s2-p.mlstatic.com/623562-MLA31003470563_062019-I.jpg"
    },
    {
        "id": "MLA828849306",
        "title": "Motorola G6 Dual Sim 32 Gb Índigo Oscuro 3 Gb Ram",
        "price": 12999,
        "condition": "new",
        "free_shipping": true,
        "thumbnail": "http://mla-s1-p.mlstatic.com/708400-MLA31003470610_062019-I.jpg"
    },
    {
        "id": "MLA80174206",
        "title": "Motorola One 64 Gb Negro 4 Gb Ram",
        "price": 23318.9,
        "condition": "new",
        "free_shipping": true,
        "thumbnail": "http://mla-s1-p.mlstatic.com/724005-MLA31250987474_062019-I.jpg"
    }
];

// metodo map para recorrer el array
contenedorHTML.innerHTML = productos.map(producto => `

    <div class="columna">
        <div class="tarjeta">
            <h3>${producto.title}</h3>
            <img src="${producto.thumbnail}"></img>
            <p>$ ${producto.price}</p>
            <p>Stock ${producto.stock}</p>
            <button>Comprar</button>
            <button>Agregar al carrito</button>
        </div>
    </div>

`).join('');

