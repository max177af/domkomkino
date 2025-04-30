// Автовоспроизведение предпросмотров
function initVideoHover() {
    document.querySelectorAll('.videos video').forEach(video => {
      video.addEventListener('mouseenter', () => video.play());
      video.addEventListener('mouseleave', () => video.pause());
    });
  }
  
  // Модальное окно
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <span class="close">&times;</span>
    <video controls autoplay></video>
  `;
  document.body.appendChild(modal);
  
  function openModal(video) {
    const src = video.src.replace('_cut', '');
    const modalVideo = modal.querySelector('video');
    modalVideo.src = src;
    modalVideo.muted = false;
    modal.classList.add('open');
    modalVideo.play();
  }
  
  function closeModal() {
    const modalVideo = modal.querySelector('video');
    modalVideo.pause();
    modalVideo.src = '';
    modal.classList.remove('open');
  }
  
  document.querySelector('.close').addEventListener('click', closeModal);
  
  // Аккордеон (множественное открытие)
  function initAccordion() {
    document.querySelectorAll('.category').forEach(category => {
      const toggle = category.querySelector('.gif-area');
      const content = category.querySelector('.videos');
      
      // Все категории закрыты по умолчанию
      content.style.display = 'none';
      category.classList.remove('open');
      
      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = content.style.display === 'flex';
        
        // Просто переключаем текущую категорию, не затрагивая другие
        content.style.display = isOpen ? 'none' : 'flex';
        category.classList.toggle('open', !isOpen);
      });
    });
  }
  
  // Инициализация при загрузке
  document.addEventListener('DOMContentLoaded', function() {
    initVideoHover();
    initAccordion();
  });