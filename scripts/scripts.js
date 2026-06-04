document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".gallery-track");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  function getVisibleSlides(){
    if(window.innerWidth <= 600) return 1;
    if(window.innerWidth <= 900) return 2;
    return 3;
  }

  function updateCarousel(){

    const slideWidth =
      track.querySelector("img").offsetWidth + 20;

    track.style.transform =
      `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex % dots.length].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    const max =
      track.querySelectorAll("img").length - getVisibleSlides();

    currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    const max =
      track.querySelectorAll("img").length - getVisibleSlides();

    currentIndex = currentIndex <= 0 ? max : currentIndex - 1;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
});





  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }
 
  const toasts = [
    { name: 'Bruno G.', plan: 'Plano Completo', role: 'Estudante de Biomedicina', time: '2 min' },
    { name: 'Vinícius R.', plan: 'Plano Completo', role: 'Estudante de Medicina', time: '3 min' },
    { name: 'Juliana P.', plan: 'Plano Básico', role: 'Estudante de Enfermagem', time: '5 min' },
    { name: 'Marcos T.', plan: 'Plano Completo', role: 'Estudante de Fisioterapia', time: '1 min' },
  ];
 
  let toastIndex = 0;
 
  function showToast() {
    const t = toasts[toastIndex % toasts.length];
    toastIndex++;
    const container = document.getElementById('toastContainer');
    const div = document.createElement('div');
    div.className = 'toast';
    div.innerHTML = `
      <div class="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      </div>
      <div class="toast-text">
        <strong><span style="color:#1A56DB">${t.name}</span> garantiu o ${t.plan}</strong>
        <span>${t.role} — há ${t.time}</span>
      </div>`;
    container.appendChild(div);
    setTimeout(() => { div.style.opacity = '0'; div.style.transition = 'opacity .5s'; setTimeout(() => div.remove(), 500); }, 4000);
  }
 
  setTimeout(showToast, 3000);
  setInterval(showToast, 9000);


