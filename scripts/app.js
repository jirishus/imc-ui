(function() {
  
  var leadForm = document.getElementById('leadForm');
  var downloadBtn = document.getElementById('download-btn');
  var downloadText = document.getElementById('download-text');
  var thankyou = document.getElementById('thankyou');
  
  // downloadBtn.style.visibility = 'hidden';
  // thankyou.style.visibility = 'hidden';
 
  leadForm.addEventListener('submit', handleLeadForm);
  downloadBtn.addEventListener('click', handleDownload);
    
  // event handlers
  function handleLeadForm(evt) {
    // fail-fast
    evt.preventDefault();
    // user input
    var emailInput = document.getElementById('emailInput').value;
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    var emailRegexTest = emailRegex.test(emailInput);

    if(emailRegexTest) {
      // Show Download Button
      toggleDownloadBtn();
    } else {
      alert('please enter corrent email format');
    }

  }

  function handleDownload(evt) {
    downloadBtn.style.visibility = 'hidden';
    downloadText.style.visibility = 'hidden';
    thankyou.style.visibility = 'visible';
  }

  // helpers
  function toggleDownloadBtn() {
    leadForm.style.display = 'none';
    downloadBtn.style.visibility = 'visible';    
  }

})();