const columns = document.querySelectorAll('.image-column');

function makeInfiniteScroll(container, speed = 0.5, direction = 'up') {
  const scroller = container.querySelector('.image-scroller');

  // Duplicate images
  scroller.innerHTML += scroller.innerHTML;

  let scrollPos = 0;

  function animate() {
    scrollPos += speed;

    const scrollLimit = scroller.scrollHeight / 2;

    if (scrollPos >= scrollLimit) {
      scrollPos = 0;
    }

    // Scroll up: move content up; scroll down: move content down from the bottom half
    const offset = direction === 'up'
      ? -scrollPos
      : scrollPos - scrollLimit;

    scroller.style.transform = `translateY(${offset}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

// Column 0 scrolls up, column 1 scrolls down
makeInfiniteScroll(columns[0], 0.3, 'up');
makeInfiniteScroll(columns[1], 0.3, 'down');
