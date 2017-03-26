(function() {

  var tipsBtn = document.getElementById('tipsBtn');
  tipsBtn.addEventListener('click', handleClick);
  
  // HANDLERS
  function handleClick(evt) {
    evt.preventDefault();

    console.log('processing order');

    // let isActive = isElementActive(this.className);
  }

  function isElementActive(elementClassName) {
    
    let classNames = elementClassName.split(' ');

    for(let i=0;i<classNames.length;i++) {
      if(classNames[i] === 'active') {
        return true;
      } else {
        return false;
      }
    }

  }

})();