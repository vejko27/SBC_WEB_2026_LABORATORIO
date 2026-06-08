(() => {
  const page = document.body?.dataset?.page || "";

  const isPolicyPage = page === "etica" || page === "seguridad" || page === "responsabilidad";

  const navLinkClass = (key) =>
    page === key
      ? "text-orange-400 bg-orange-600/10 font-semibold"
      : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/80";

  const neutralNavClass = "text-gray-400 hover:text-orange-400 hover:bg-gray-800/80";

  const policyLinkClass = (key) =>
    page === key
      ? "text-orange-400 bg-orange-600/10 font-semibold"
      : "text-gray-400 hover:text-orange-400 hover:bg-gray-800";

  const mobileLinkClass = (key) =>
    page === key
      ? "text-orange-400 bg-orange-600/10 rounded-xl text-sm font-bold"
      : "text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm";

  const headerHtml = `
<header class="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-orange-600/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-16">
      <a href="index.html" class="flex items-center gap-2.5 group shrink-0" aria-label="SBC Transport">
        <div class="w-9 h-9 bg-orange-600 group-hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors duration-200">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zM13 8h3l3 3v5h-3m-3 0H9" />
          </svg>
        </div>
        <div class="leading-none">
          <p class="text-white font-black text-lg tracking-tight">SBC<span class="text-orange-500">.</span><span class="text-orange-400 font-light">TRANSPORT</span></p>
          <p class="text-gray-500 text-[10px] tracking-[0.18em] uppercase">Logística Industrial</p>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-0.5 text-sm font-medium">
        <a href="index.html" class="px-3 py-2 rounded-lg transition-all ${navLinkClass("index")}">Inicio</a>

        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${navLinkClass("nosotros")}">
            Nosotros
            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-52 bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl shadow-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1.5">
            <a href="nosotros.html#historia" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("nosotros")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Quiénes somos</a>
            <a href="nosotros.html#mision" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("nosotros")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Misión y Visión</a>
            <a href="nosotros.html#valores" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("nosotros")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Valores</a>
            <a href="nosotros.html#equipo" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("nosotros")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Nuestro Equipo</a>
          </div>
        </div>

        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${navLinkClass("servicios")}">
            Servicios
            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-60 bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl shadow-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1.5">
            <a href="servicios.html#carga" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Transporte de Carga</a>
            <a href="servicios.html#logistica" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Logística Integral</a>
            <a href="servicios.html#mineria" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Sector Minero</a>
            <a href="servicios.html#construccion" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Construcción e Industrial</a>
            <a href="servicios.html#residuos" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Residuos Sólidos</a>
            <a href="servicios.html#gps" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("servicios")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Trazabilidad GPS</a>
          </div>
        </div>

        <a href="flota.html" class="px-3 py-2 rounded-lg transition-all ${navLinkClass("flota")}">Flota</a>
        <a href="index.html#proyectos" class="px-3 py-2 rounded-lg transition-all ${neutralNavClass}">Proyectos</a>
        <a href="contacto.html#trabaja" class="px-3 py-2 rounded-lg transition-all ${navLinkClass("contacto")}">Trabaja con nosotros</a>

        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${isPolicyPage ? "text-orange-400 bg-orange-600/10 font-semibold" : "text-gray-400 hover:text-orange-400 hover:bg-gray-800/80"}">
            Políticas
            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl shadow-black/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1.5">
            <a href="etica.html" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("etica")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Código de Ética y Conducta</a>
            <a href="seguridad.html" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("seguridad")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Gestión de Control y Seguridad</a>
            <a href="responsabilidad.html" class="flex items-center gap-2.5 px-3 py-2.5 ${policyLinkClass("responsabilidad")} rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Responsabilidad Social</a>
            <a href="constancia.html" class="flex items-center gap-2.5 px-3 py-2.5 text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm transition-colors"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Constancia de Recepción</a>
          </div>
        </div>
      </nav>

      <a href="contacto.html" class="hidden lg:flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-orange-600/30 ${page === "contacto" ? "ring-2 ring-orange-600/40" : ""}">
        Cotizar ahora
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>

      <button id="btnHam" class="lg:hidden p-2 text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-lg transition-colors" aria-label="Abrir menú">
        <svg id="icoHam" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg id="icoX" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  </div>

  <div id="menuMob" class="hidden lg:hidden bg-gray-950 border-t border-gray-800/60 px-4 pb-5 max-h-[85vh] overflow-y-auto">
    <div class="pt-3 space-y-1">
      <a href="index.html" class="block px-3 py-2.5 ${mobileLinkClass("index")}">Inicio</a>
      <p class="px-3 pt-3 pb-1 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Empresa</p>
      <a href="nosotros.html" class="block px-3 py-2.5 ${mobileLinkClass("nosotros")}">Nosotros</a>
      <a href="nosotros.html#mision" class="block px-3 py-2 ${page === "nosotros" ? "text-orange-400 bg-orange-600/10 rounded-xl text-sm pl-7" : "text-gray-500 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm pl-7"}">↳ Misión y Visión</a>
      <a href="nosotros.html#equipo" class="block px-3 py-2 ${page === "nosotros" ? "text-orange-400 bg-orange-600/10 rounded-xl text-sm pl-7" : "text-gray-500 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm pl-7"}">↳ Nuestro Equipo</a>
      <p class="px-3 pt-3 pb-1 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Operaciones</p>
      <a href="servicios.html" class="block px-3 py-2.5 ${mobileLinkClass("servicios")}">Servicios</a>
      <a href="flota.html" class="block px-3 py-2.5 ${mobileLinkClass("flota")}">Flota</a>
      <a href="index.html#proyectos" class="block px-3 py-2.5 text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm">Proyectos</a>
      <a href="contacto.html#trabaja" class="block px-3 py-2.5 text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm">Trabaja con nosotros</a>
      <p class="px-3 pt-3 pb-1 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Políticas</p>
      <a href="etica.html" class="block px-3 py-2.5 ${mobileLinkClass("etica")}">Código de Ética y Conducta</a>
      <a href="seguridad.html" class="block px-3 py-2.5 ${mobileLinkClass("seguridad")}">Gestión de Control y Seguridad</a>
      <a href="responsabilidad.html" class="block px-3 py-2.5 ${mobileLinkClass("responsabilidad")}">Responsabilidad Social</a>
      <a href="constancia.html" class="block px-3 py-2.5 text-gray-400 hover:text-orange-400 hover:bg-gray-800 rounded-xl text-sm">Constancia de Recepción</a>
      <div class="pt-4">
        <a href="contacto.html" class="block text-center bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-full text-sm transition-colors">Cotizar ahora →</a>
      </div>
    </div>
  </div>
</header>`;

  const footerHtml = `
<footer class="bg-gray-950 pt-14 pb-6 border-t border-gray-800/70">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <div class="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center shrink-0 text-white font-black">S</div>
          <span class="text-white font-black text-xl">SBC<span class="text-orange-400 font-light">.TRANSPORT</span></span>
        </div>
        <p class="text-gray-500 text-sm leading-relaxed">Transporte de carga pesada con estándares de seguridad, trazabilidad y mejora continua.</p>
      </div>

      <div>
        <p class="text-white font-black text-xs uppercase tracking-widest mb-5">Empresa</p>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="nosotros.html" class="hover:text-orange-400 transition-colors">Nosotros</a></li>
          <li><a href="nosotros.html#historia" class="hover:text-orange-400 transition-colors">Historia</a></li>
          <li><a href="nosotros.html#valores" class="hover:text-orange-400 transition-colors">Valores</a></li>
          <li><a href="contacto.html#trabaja" class="hover:text-orange-400 transition-colors">Trabaja con nosotros</a></li>
        </ul>
      </div>

      <div>
        <p class="text-white font-black text-xs uppercase tracking-widest mb-5">Servicios</p>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="servicios.html#carga" class="hover:text-orange-400 transition-colors">Carga Pesada</a></li>
          <li><a href="servicios.html#logistica" class="hover:text-orange-400 transition-colors">Logística Integral</a></li>
          <li><a href="servicios.html#mineria" class="hover:text-orange-400 transition-colors">Sector Minero</a></li>
          <li><a href="servicios.html#gps" class="hover:text-orange-400 transition-colors">Trazabilidad GPS</a></li>
          <li><a href="flota.html" class="hover:text-orange-400 transition-colors">Nuestra Flota</a></li>
        </ul>
      </div>

      <div>
        <p class="text-white font-black text-xs uppercase tracking-widest mb-5">Políticas</p>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="etica.html" class="hover:text-orange-400 transition-colors">Código de Ética y Conducta</a></li>
          <li><a href="seguridad.html" class="hover:text-orange-400 transition-colors">Gestión de Control y Seguridad</a></li>
          <li><a href="responsabilidad.html" class="hover:text-orange-400 transition-colors">Responsabilidad Social</a></li>
          <li><a href="constancia.html" class="hover:text-orange-400 transition-colors">Constancia de Recepción</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
      <p class="text-xs text-gray-600">© 2026 SBC Transport S.A.C. Todos los derechos reservados.</p>
      <div class="flex gap-5 text-xs text-gray-600">
        <a href="#" class="hover:text-orange-400 transition-colors">Política de privacidad</a>
        <a href="#" class="hover:text-orange-400 transition-colors">Términos y condiciones</a>
      </div>
    </div>
  </div>
</footer>`;

  const headerMount = document.querySelector("header");
  if (headerMount) {
    headerMount.outerHTML = headerHtml;
  }

  const footerMount = document.querySelector("footer");
  if (footerMount) {
    footerMount.outerHTML = footerHtml;
  }
})();
