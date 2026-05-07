/* ===================================
   STATE
=================================== */

let spread = 0;
let busy = false;

/* ===================================
   PAGES
=================================== */

const PAGES = [
  `<div class="pg">Página 1</div>`,
  `<div class="pg">Página 2</div>`,
  `<div class="pg">Página 3</div>`,
  `<div class="pg">Página 4</div>`
];

const TOTAL = PAGES.length;

/* ===================================
   RENDER
=================================== */

function render() {

  document.getElementById('lc').innerHTML =
    PAGES[spread];

  document.getElementById('rc').innerHTML =
    PAGES[spread + 1] || '';

  document.getElementById('bp').disabled =
    spread === 0;

  document.getElementById('bn').disabled =
    spread >= TOTAL - 2;

  const sp = Math.floor(spread / 2) + 1;

  document.getElementById('hc2').textContent =
    `Páginas ${spread + 1}-${spread + 2} · abertura ${sp}`;
}

/* ===================================
   TURN PAGE
=================================== */

function turn(dir){

  if(busy) return;

  const next = spread + dir * 2;

  if(next < 0 || next > TOTAL - 2) return;

  busy = true;

  setTimeout(() => {

    spread = next;

    render();

    busy = false;

  }, 500);
}

/* ===================================
   OPEN COVER
=================================== */

function openCover(){

  const cw =
    document.getElementById('cover-wrap');

  const book =
    document.getElementById('book');

  cw.classList.add('opening');
  cw.classList.add('open');

  setTimeout(() => {
    book.classList.add('visible');
  },300);

  setTimeout(() => {

    cw.style.display = 'none';

    document.getElementById('bp').disabled = false;
    document.getElementById('bn').disabled = false;

    render();

  },1400);
}

/* ===================================
   KEYBOARD
=================================== */

document.addEventListener('keydown', e => {

  if(e.key === 'ArrowRight' || e.key === ' '){
    turn(1);
  }

  if(e.key === 'ArrowLeft'){
    turn(-1);
  }

  if(e.key === 'Enter'){
    openCover();
  }
});

/* ===================================
   INIT
=================================== */

render();