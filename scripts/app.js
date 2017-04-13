(function() {
  
  var downloadHandle = document.getElementById('download-handle');
  downloadHandle.addEventListener('click', handleDownload);

  function handleDownload(evt) {
    downloadHandle.style.visibility = "hidden";
    alert('Thank You');
  }

})();