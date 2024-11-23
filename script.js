addEventListener('load', (e) => {
  let userAgent = navigator.userAgent;
  let isMobileDevice = /Mobi|Android|iPhone|iPad/i.test(userAgent);
  let imgElements = document.querySelectorAll('img');
  
  imgElements.forEach(elem => {
    elem.style.blockSize = isMobileDevice ? '100px' : '250px';
  });
});