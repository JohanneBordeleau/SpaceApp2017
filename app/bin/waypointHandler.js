var waypointList = [];
var selection = -1;
var counter = 1;
window.addEventListener('load', function() {
  const plus = document.getElementById('addPoint');
  const minus = document.getElementById('removePoint');
  const container = document.getElementById('waypointList-container-three');
  var obj;
  plus.addEventListener('mousedown', function(event) {
    obj = document.createElement('div');
    obj.className = 'pointlist';
    obj.style.display = 'none';
    obj.innerHTML = 'lat<input type=\'text\' class=\'coor\' id=\'lat' + counter + '\'/>     lon<input type=\'text\' class=\'coor\' id=\'lon' + counter + '\'/><br\>uptime<input class=\'coor\' id=\'time' + counter + '\'/>     alt<input type=\'text\' class=\'coor\' id=\'alt' + counter + '\'/><br\>';
    obj.id = 'point' + counter;
    waypointList.push(obj);
    container.appendChild(obj);
    appearify(obj);
    selection = obj.id;
    document.getElementById('lat' + counter).addEventListener('click', function() {
      selection = this.parentNode.id
    });
    document.getElementById('lon' + counter).addEventListener('click', function() {
      selection = this.parentNode.id
    });
    document.getElementById('time' + counter).addEventListener('click', function() {
      selection = this.parentNode.id
    });
    document.getElementById('alt' + counter).addEventListener('click', function() {
      selection = this.parentNode.id
    });
    counter++;
  });
  minus.addEventListener('mousedown', function(event) {
    if(selection != -1){
      var deletion = document.getElementById(selection);
      disappearify(deletion);
      deletion.parentNode.removeChild(deletion);
      waypointList.splice(waypointList.indexOf(deletion),1);
      selection = -1;
    }
  });

});
