const columns = document.querySelectorAll('.image-column');

function makeInfiniteScroll(container, speed = 0.5) {
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
  
  
  makeInfiniteScroll(columns[0], 0.3);
  makeInfiniteScroll(columns[1], 0.3);
  