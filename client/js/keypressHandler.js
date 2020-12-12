$('body').on('keydown', (event) =>{

  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  console.log(event);
  console.log(event.key);
  console.log(arrowPress);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
