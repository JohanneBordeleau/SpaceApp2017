var files = [
  'bin/waypointHandler.js',
  'bin/appearWindow.js',
  'bin/fieldUpdater.js',
  'bin/formRequester.js'
];

files.forEach(function(elm){
  var script = document.createElement('script');
  script.src = elm;
  script.type = 'text/javascript';
  document.head.appendChild(script);
});
