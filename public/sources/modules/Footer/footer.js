const insertMainFooter = () => {
  const footer = document.getElementById("footer");

  footer.innerHTML = `<div class="col-12 text-center inicio-footer">
  <img class="logo img-fluid p-1" src="/public/images/image.png" alt="Logo AgroMX">
  <p id="slogan-footer"><strong>Alimentos sanos, comercio justo, futuro sostenible</strong></p>
</div>
<div class="container-fluid text-white py-4">
  <div class="row">

    <!-- Necesitas Ayuda -->
    <div class="col-4 col-md-3 col-lg-3 text-center">
      <h6 class="fw-bold">¿Necesitas ayuda?</h6>
      <p class="mb-1"><strong>Tel. 555 324 6353</strong></p>
      <p class="mb-1">agromx.soporte@gmail.com</p>
      <p class="mb-0"><strong>Horarios de atención:</strong></p>
      <p class="mb-0">9:00 a 18:00 h</p>
    </div>

    <!-- Acerca de nosotros -->
    <div class="col-4 col-md-3 col-lg-3 text-center">
      <a href="/public/sources/pages/acercaDeNosotros/acercaDe.html"><strong>Developer Team</strong></a><br>
    </div>


    <!-- Registráte -->
    <div class="col-4 col-md-3 col-lg-3 text-center">
      <h6 class="fw-bold">Regístrate</h6>
      <h4 class="fw-bold mt-3 p-1">AgroMX </h4>
      <i class="fa-regular fa-copyright fa-xl"></i>
    </div>


    <!-- Logos de redes sociales -->
    <div class="col-12 col-md-3 col-lg-3 text-center">
      <div class="d-flex justify-content-center align-items-center">
        <div class="text-center mx-3 my-4">
          <a href="#" class="text-white text-decoration-none">
            <i class="fa-brands fa-facebook fa-2xl" style="color: #fdbf53;"></i>
            <p class="mb-0 small mt-2">AgroMx</p>
          </a>
        </div>
        <div class="text-center mx-3">
          <a href="#" class="text-white text-decoration-none">
            <i class="fa-brands fa-square-instagram fa-2xl " style="color: #fdbf51;"></i>
            <p class="mb-0 small mt-2">AgroMx</p>
          </a>
        </div>
        <div class="text-center mx-3">
          <a href="#" class="text-white text-decoration-none">
            <i class="fa-brands fa-square-whatsapp fa-2xl" style="color: #fdbf59;"></i>
            <p class="mb-0 small mt-2">WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
};

insertMainFooter();
