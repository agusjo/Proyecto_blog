var data = [
  {
    id: 1,
    producto: "Prima pasta",
    descripcion: "Jamón crudo, mortadela con pistacho, selección de quesos, berenjenas y tomates confitados",
    precio: 3300,
    imagen: "./imagenes/prima-pasta.PNG"
},
{
    id: 2,
    producto: "Burrata",
    descripcion: "Mozzarella de búfala, jamón crudo, rúcula, oliva y reducción de aceto balsámico",
    precio: 3000,
    imagen: "./imagenes/burrata.PNG"
},
{
    id: 3,
    producto: "Rabas",
    descripcion: "Calamares rebozados en harina y fritos",
    precio: 3200,
    imagen: "./imagenes/rabas.jpg"
},
{
    id: 4,
    producto: "Spaghetti con albóndigas",
    descripcion: "Spaghetti con albóndigas de ternera y tuco perfumado con albahaca",
    precio: 3000,
    imagen: "./imagenes/fideos-albondigas.PNG"
},
{
    id: 5,
    producto: "Ravioli",
    descripcion: "De ricota y espinaca, con salsa bolognesa",
    precio: 2700,
    imagen: "./imagenes/ravioli.jpeg"
},
{
    id: 6,
    producto: "Sorrentini a la parisienne",
    descripcion: "Sorrentinos de ricota, mozzarella y jamón, con salsa de crema con jamón y champiñones",
    precio: 2700,
    imagen: "./imagenes/sorrentini.PNG"
},
{
    id: 7,
    producto: "Gnocci spinaci",
    descripcion: "Ñoquis de espinaca fresca gratinados, con cuatro variedades de queso",
    precio: 2500,
    imagen: "./imagenes/gnocci.PNG"
},
{
    id: 8,
    producto: "Fettuccine al pesto",
    descripcion: "Cintas de espinaca fresca, con pesto casero",
    precio: 2500,
    imagen: "./imagenes/fettuccine.jpg"
},
{
    id: 9,
    producto: "Cappelletti",
    descripcion: "Pasta rellena de lomo, mortadela italiana y jamón crudo, con salsa de tomates frescos",
    precio: 2500,
    imagen: "./imagenes/capeletis.PNG"
}
  ];
  
  for( var i = 0; i < data.length; i++) {
    document.querySelector('.contenedor').innerHTML += `
    <div class="tarjeta">
      <div class="imgYdescripcion">
        <img src="${data[i].imagen}" alt="${data[i].producto}">
        <div class="tarjetaTexto">
          <p>${data[i].descripcion}</p>
        </div>
      </div>
      
      <div class="contenido">
        <h3>${data[i].producto}</h3>
        <p>$${data[i].precio}</p>
        <!--<div class="botones"><button>+</button><button>-</button></div>-->
      </div>
    </div>
    `;
    
  }
