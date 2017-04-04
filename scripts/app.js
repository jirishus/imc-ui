(function() {
  
  var leadForm = document.getElementById('imc-form');
  var loaderIcon = document.getElementById('loader-icon');
  var downloadText = document.getElementById('download-text');

  loaderIcon.style.visibility = "hidden";
  downloadText.style.visibility = "hidden";

  leadForm.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(evt) {
   evt.preventDefault();

   var firstName = document.getElementById('firstName').value;
   var lastName = document.getElementById('lastName').value;
   var leadEmail = document.getElementById('leadEmail').value;

   console.log(firstName);
   console.log(lastName);
   console.log(leadEmail);

   loaderIcon.style.visibility = "visible";

   setTimeout(function() {
     leadForm.style.visibility = "hidden";
     downloadText.style.visibility = "visible";
   }, 1500);

  };

})();