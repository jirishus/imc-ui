(function() {
  
  var leadForm = document.getElementById('leadForm');
  var downloadBtn = document.getElementById('download-btn');
  var downloadText = document.getElementById('download-text');
  var thankyou = document.getElementById('thankyou');
  var userVisitDiv = document.getElementById('userVisit');
  var userVisits = localStorage.getItem('userVisits');

  function processVisits() {
    if (userVisits === null) {
      userVisits = 0;
    }
    userVisits++;
    localStorage.setItem('userVisits', userVisits);
    userVisitDiv.innerHTML = 'Current Visits : ' + userVisits;
  }

  // Show Visit Count
  processVisits();

  // Register Event Listeners
  leadForm.addEventListener('submit', handleLeadForm);
  downloadBtn.addEventListener('click', handleDownload);
  
  // Register Event Handlers
  function handleLeadForm(evt) {

    evt.preventDefault();
    
    var emailInput = document.getElementById('emailInput').value;
    var emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    var emailRegexTest = emailRegex.test(emailInput);

    if(emailRegexTest) {
      toggleDownloadBtn();
      insertRecord(emailInput);

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

  function insertRecord(record) {
    var emails = [];
    // emails.push(record);
    // localStorage.emails = JSON.stringify(emails);
    // var userEmail = JSON.parse(localStorage.emails);
    // localStorage.setItem('userEmail', record);
  }

})();