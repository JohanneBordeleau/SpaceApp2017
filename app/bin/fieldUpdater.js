window.addEventListener('load', function() {
  const oriedit = document.getElementById('originCode');
  const oricode = document.getElementById('oricode');
  oriedit.addEventListener('keyup', function() {
    oricode.innerHTML = oriedit.value;
  });
  const desedit = document.getElementById('destinationCode');
  const descode = document.getElementById('descode');
  desedit.addEventListener('keyup', function() {
    descode.innerHTML = desedit.value;
  });
});
