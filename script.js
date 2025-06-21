function animateBox(id, delay = 600) {
  return new Promise(resolve => {
    const el = document.getElementById(id);
    el.classList.add('show');
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function runAnimations() {
  await animateBox('box1');
  await animateBox('box2');
  await animateBox('box3');
}

window.onload = runAnimations;
