// Select all image columns
const columns = document.querySelectorAll('.image-column');

/**
 * Creates an infinite vertical scroll effect for a container of images.
 *
 * @param {HTMLElement} container - The container element that holds the image scroller.
 * @param {number} speed - The speed of the scroll animation (default: 0.5).
 * @param {'up' | 'down'} direction - The direction of the scroll ('up' or 'down').
 */
function makeInfiniteScroll(container, speed = 0.5, direction = 'up') {
  const scroller = container.querySelector('.image-scroller');
  
  // Duplicate the inner content for seamless scrolling
  scroller.innerHTML += scroller.innerHTML;

  let scrollPos = 0;
  const scrollLimit = scroller.scrollHeight / 2;

  // Animation loop
  function animate() {
    scrollPos += speed;

    // Reset scroll position when it reaches the halfway point
    if (scrollPos >= scrollLimit) {
      scrollPos = 0;
    }

    const offset = direction === 'up'
      ? -scrollPos
      : scrollPos - scrollLimit;

    scroller.style.transform = `translateY(${offset}px)`;

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize scrolling for each column
makeInfiniteScroll(columns[0], 0.3, 'up');
makeInfiniteScroll(columns[1], 0.3, 'down');
