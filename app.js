function makeInfiniteScroll(containerSelector, speed = 0.5) {
    const container = document.querySelector(containerSelector);
    const scroller = container.querySelector('.image-scroller');
  
    // Duplicate images
    scroller.innerHTML += scroller.innerHTML;
  
    let scrollPos = 0;
  
    function animate() {
      scrollPos += speed;
      if (scrollPos >= scroller.scrollHeight / 2) {
        scrollPos = 0;
      }
      scroller.style.transform = `translateY(-${scrollPos}px)`;
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  
  makeInfiniteScroll('.image-column:nth-child(1)', 0.3); // left column (downward)
  makeInfiniteScroll('.image-column.reverse', 0.3);       // right column (upward)
  