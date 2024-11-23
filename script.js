addEventListener('load', (e) => {
  let userAgent = navigator.userAgent;
  let isWindowsLinuxMac = userAgent.includes('Windows') || userAgent.includes('Macintosh') || userAgent.includes('Linux');
  let imgElements = Array.from(document.getElementsByTagName('img'));
  if (isWindowsLinuxMac){
    imgElements.forEach(elem => {
      elem.style.blockSize = '250px';
    });
  } else {
    imgElements.forEach(elem => {
      elem.style.blockSize = '100px';
    });
  }
});