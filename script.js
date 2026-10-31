const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function initNav(){
  const nav = $('#site-nav');
  if(!nav) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link', nav).forEach(a => {
    const target = a.getAttribute('href');
    if(target === current || (current === '' && target === 'index.html')) a.classList.add('active');
  });
  const toggle = $('.menu-toggle', nav);
  const links = $('.nav-links', nav);
  toggle?.addEventListener('click',()=>links.classList.toggle('open'));
  $$('.nav-link', nav).forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}

function initShared(){
  const navHost = $('#navbar-placeholder');
  if(navHost){
    navHost.innerHTML = `
      <nav id="site-nav" class="site-nav">
        <a class="brand" href="index.html" aria-label="Beranda">
          <div class="brand-mark">R</div>
          <div><span>REFYAN</span><small>E-PORTOFOLIO PPG</small></div>
        </a>
        <div class="nav-links">
          <a class="nav-link" href="index.html">Beranda</a>
          <a class="nav-link" href="profil.html">Profil</a>
          <a class="nav-link" href="artefak.html">Artefak</a>
          <a class="nav-link" href="inovasi.html">Inovasi</a>
        </div>
        <div class="nav-logos">
          <img class="nav-logo ppg" src="assets/logo-ppg.png" alt="Logo PPG">
          <img class="nav-logo um" src="assets/logo-um.png" alt="Logo Universitas Negeri Malang">
        </div>
        <button class="menu-toggle" aria-label="Buka menu">☰</button>
      </nav>`;
  }
  const footerHost = $('#footer-placeholder');
  if(footerHost){
    footerHost.innerHTML = `
      <footer class="footer"><div class="container footer-inner">
        <div><div class="footer-brand">REFYAN — E-PORTOFOLIO PPG</div><div>Universitas Negeri Malang • Informatika</div></div>
        <div class="footer-logos"><img src="assets/logo-ppg.png" alt="PPG"><img src="assets/logo-um.png" alt="UM"></div>
      </div></footer>`;
  }
  initNav();
}

function initLoader(){
  const loader = $('#loader');
  if(!loader) return;
  window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),350));
}

function initReveal(){
  const items = $$('.reveal');
  if(!('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('show'));return}
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
  items.forEach(x=>io.observe(x));
}

function initProgress(){
  const bar=$('#progress'); if(!bar) return;
  const update=()=>{const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; bar.style.width=(max? (scrollY/max)*100:0)+'%'};
  addEventListener('scroll',update,{passive:true}); update();
}

function initGlow(){
  const glow=document.createElement('div'); glow.className='cursor-glow'; document.body.appendChild(glow);
  let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
  const loop=()=>{x+=(tx-x)*.12;y+=(ty-y)*.12;glow.style.left=x+'px';glow.style.top=y+'px';requestAnimationFrame(loop)}; loop();
}

function setText(){
  $$('.js-name').forEach(el=>el.textContent=PORTFOLIO.name);
  $$('.js-short-name').forEach(el=>el.textContent=PORTFOLIO.shortName);
  $$('.js-title').forEach(el=>el.textContent=PORTFOLIO.title);
  $$('.js-program').forEach(el=>el.textContent=PORTFOLIO.program);
  $$('.js-campus').forEach(el=>el.textContent=PORTFOLIO.campus);
  $$('.js-school').forEach(el=>el.textContent=PORTFOLIO.school);
  $$('.js-origin').forEach(el=>el.textContent=PORTFOLIO.origin);
  $$('.js-tagline').forEach(el=>el.textContent=PORTFOLIO.tagline);
  $$('.js-intro').forEach(el=>el.textContent=PORTFOLIO.intro);
  $$('.js-profile').forEach(el=>el.textContent=PORTFOLIO.profile);
  $$('.js-quote').forEach(el=>el.textContent=PORTFOLIO.quote);
  const maps={um:PORTFOLIO.maps.um,school:PORTFOLIO.maps.school,pasuruan:PORTFOLIO.maps.pasuruan};
  $$('.js-map').forEach(el=>{const key=el.dataset.map;if(maps[key])el.src=maps[key]});
}

function renderCourses(){
  const list = $('#course-list'); if(!list) return;
  const semester = list.dataset.semester === '2' ? PORTFOLIO.semester2 : PORTFOLIO.semester1;
  list.innerHTML = semester.map((name,i)=>`<article class="course reveal"><div class="course-no">${String(i+1).padStart(2,'0')}</div><div><h3>${name}</h3><p>Ruang artefak mata kuliah. Bagian ini siap diisi dengan dokumen, tautan, refleksi, foto kegiatan, atau karya pembelajaran.</p><span class="tag">Belum diisi</span></div></article>`).join('');
  initReveal();
}

function init(){
  document.body.insertAdjacentHTML('afterbegin','<div id="progress"></div><div id="loader" class="loader"><div class="loader-core"><div class="loader-ring"></div><span>MEMUAT PORTOFOLIO</span></div></div>');
  initShared(); setText(); renderCourses(); initLoader(); initReveal(); initProgress(); initGlow();
}

document.addEventListener('DOMContentLoaded',init);
