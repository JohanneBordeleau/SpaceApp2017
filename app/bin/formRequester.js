window.addEventListener('load', function() {
  var frame = document.getElementById('form');
  frame.addEventListener('load', function() {
    console.log('dfs');
    var innerDoc = frame.contentDocument || frame.contentWindow.document;
    console.log(innerDoc);
    // document.getElementsByName('DateOfFlight')[0].value = '03/2017';
  });

});
