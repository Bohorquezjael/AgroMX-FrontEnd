const insertHeader = () => {
  const header = document.getElementById("header");
  header.innerHTML = `

  <div class="container-fluid">
  <!-- Barra superior con el logo, búsqueda y los iconos -->
  <div class="row align-items-center">
    <!-- Logo -->
    <div class="col-3 col-md-2 d-flex justify-content-start">
      <img class="logo img-fluid p-1" src="/public/images/image.png" alt="Logo AgroMX">
    </div>

    <!-- Lupa y barra de búsqueda -->
    <div class="col-5 col-md-6 d-flex justify-content-center align-items-center">
      <!-- Botón de búsqueda (Lupa) -->
      <div class="d-flex justify-content-center align-items-center me-3">
        <button id="lupa" class="btn btn-outline-success btn-lupa d-none d-sm-block" type="submit">
          <i class="fa-solid fa-magnifying-glass fa-2xl icono-lupa"></i>
        </button>
      </div>

      <!-- Barra de búsqueda -->
      <div class="d-flex justify-content-center w-100">
        <form class="d-flex w-100" role="search">
          <input class="form-control me-2 w-100 barra-busqueda d-none d-sm-block" type="search"
            placeholder="Busca tu producto" aria-label="Search">
        </form>
      </div>
    </div>



    <!-- Carrito y Avatar -->
    <div class="col-4 col-md-4 d-flex justify-content-center align-items-center mt-2 mt-md-0">
      <a class="nav-link active" aria-current="page" href="/public/sources/pages/carrito/carrito.html">
        <i class="fa-solid fa-cart-shopping fa-2xl icono cart"></i>
      </a>
      <i class="fa-solid fa-user fa-2xl icono"></i>
    </div>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"
            href="/public/sources/pages/catalogo/catalogo.html">Catalogo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/public/sources/pages/sobreNosotrosAgroMX/sobreNosotrosAgroMX.html">Sobre
            Nosotros</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">Comunidad</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-dark" href="#">Recetas</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item text-dark" href="/public/sources/pages/comunidad/comunidad.html">Comunidad</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/public/sources/pages/contacto/contacto.html">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  return header;

};

insertHeader();
