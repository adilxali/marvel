<template>
  <div class="container-fluid bg-dark text-white">
    <div class="row">
      <div class="col-12 mx-auto mt-3 p-3 col-sm-12 d-flex align-items-center  flex-column flex-sm-row">
        <div class="col-3">
          <div class="logo mx-auto" style="max-width: 8rem;">
            <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#EC1D24" width="100%" height="100%"></rect>
              <path
                fill="#FEFEFE"
                d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="col-12 col-sm-6 d-flex justify-content-evenly links">
          <div class="primary_link">
            <ul class="list-unstyled">
              <li class="m-2">ABOUT MARVEL</li>
              <li class="m-2">HELP/FAQS</li>
              <li class="m-2">CAREERS</li>
              <li class="m-2">INTERNSHIP</li>
            </ul>
          </div>
          <div class="secondary_link">
            <ul class="list-unstyled">
              <li class="m-2">ADVERTISING</li>
              <li class="m-2">DISNEY+</li>
              <li class="m-2">MARVELHQ.COM</li>
              <li class="m-2">REDEEM DIGITAL COMICS</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-3 social text-center">
          <h4>FOLLOW MARVEL</h4>
          <ul class="list-unstyled d-flex justify-content-around">
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.426 17.647H.974A.974.974 0 0 1 0 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 0 1-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 0 0-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z"
                  ></path></svg
              ></span>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.647 1.74a7.072 7.072 0 0 1-2.079.585A3.704 3.704 0 0 0 17.16.272a7.13 7.13 0 0 1-2.3.9A3.57 3.57 0 0 0 12.217 0C10.22 0 8.598 1.662 8.598 3.712c0 .291.031.574.093.846-3.009-.155-5.676-1.632-7.463-3.88a3.78 3.78 0 0 0-.49 1.868c0 1.287.64 2.424 1.611 3.09a3.555 3.555 0 0 1-1.64-.463v.045c0 1.8 1.248 3.3 2.905 3.64-.304.088-.624.131-.954.131-.233 0-.461-.022-.682-.066.461 1.475 1.798 2.549 3.382 2.577A7.149 7.149 0 0 1 0 13.04a10.08 10.08 0 0 0 5.55 1.666c6.66 0 10.3-5.656 10.3-10.562 0-.162-.002-.323-.008-.482a7.43 7.43 0 0 0 1.805-1.921"
                  ></path></svg
              ></span>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.441 15.993H2.206a.552.552 0 0 1-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 0 1-.552.552M8.844 5.458a3.39 3.39 0 0 1 3.394 3.386 3.39 3.39 0 0 1-3.394 3.386A3.39 3.39 0 0 1 5.45 8.844a3.39 3.39 0 0 1 3.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 0 1-.551.551h-1.655a.552.552 0 0 1-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 0 0 0 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 0 0 2.098-2.093V2.093C17.647.937 16.707 0 15.549 0"
                  ></path></svg
              ></span>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 11 18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.535 14.5c-1.532.038-1.83-1-1.842-1.751V7.217h3.844v-2.69h-3.83V0H3.904a.147.147 0 0 0-.138.133C3.602 1.518 2.904 3.949 0 4.922v2.295h1.937v5.806c0 1.988 1.58 4.812 5.749 4.745 1.407-.022 2.969-.569 3.314-1.04l-.92-2.535c-.356.158-1.037.295-1.545.307z"
                  ></path></svg
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
