const order = ['transporte', 'ambiente', 'mulheres'];
const track = document.getElementById('pageTrack');
const controls = document.querySelectorAll('[data-target]');

function goTo(target){
  const index = order.indexOf(target);
  if(index < 0) return;
  track.style.transform = `translateX(-${index * 100}%)`;
  document.body.dataset.theme = target;
  controls.forEach(btn => btn.classList.toggle('active', btn.dataset.target === target));
  window.scrollTo({top: 0, behavior: 'smooth'});
}

controls.forEach(btn => btn.addEventListener('click', () => goTo(btn.dataset.target)));
goTo('ambiente');
