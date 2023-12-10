document.querySelector('header').innerHTML = `
    <div class="banner">
    <img src="static/imagenes/banner.PNG" alt="banner" style="width:100%">
    <div class="titulo-centrado">
      <h1>La cocina de tu vieja</h1>
    </div>
    </div>


    <nav>
      <div class="navbar header">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <a href="index.html">Home</a>
          <a href="acerca-de.html">Acerca de</a>
          <a href="contacto.html">Contacto</a>
          <a href="sucursales.html">Sucursales</a>
    
          <div class="dropdown">
            <button class="dropbtn"><small>Administración</small> 
            </button>
            <div class="dropdown-content">
              <a href="altas.html">Cargar</a>
              <a href="modificaciones.html">Modificar</a>
              <a href="listadoEliminar.html">Eliminar</a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
`;

