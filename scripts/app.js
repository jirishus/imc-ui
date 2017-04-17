(function() {
  

  var leadForm = document.getElementById('leadForm');
  var downloadBtn = document.getElementById('download-btn');
  downloadBtn.style.visibility = 'hidden';
 
  leadForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    // Show Download Button
    leadForm.style.display = 'none';
    downloadBtn.style.visibility = 'visible';

    console.log('form submit');

  });

  downloadBtn.addEventListener('click', function(evt) {
    alert('processing download');
  });

})();