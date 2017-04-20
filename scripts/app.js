(function() {
  
  var leadForm = document.getElementById('leadForm');
  var downloadBtn = document.getElementById('download-btn');
  
  downloadBtn.style.visibility = 'hidden';
 
  leadForm.addEventListener('submit', function(evt) {
    var emailInput = document.getElementById('emailInput').value;

    evt.preventDefault();
    
    // Show Download Button
    // leadForm.style.display = 'none';
    // downloadBtn.style.visibility = 'visible';

    var emailRegex = /.com/i;

    // console.log(emailRegex.test(emailInput));
    
  });

  downloadBtn.addEventListener('click', function(evt) {
    alert('processing download');
  });

})();