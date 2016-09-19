var fs = require('fs');
var number_lines = 0;

// fs.readFile('owlsvg.html','utf-8', (err, data) => {
//    if (err) throw err;
//    peanuts(data);
// });

fs.readFileSync('3rd.html').toString().split('\n').forEach(function (line) {
    if (line.includes('<line')){
      var x1,y1,x2,y2;
      var count = 1;
      //find the starting point and end point of each ' " ':
      var i = 0;
      var start, end;
      do {
        if (line[i] == '"'){
          start = i;
          do {
            i++;
          } while (line[i] !== "\"")
          end = i;
          if (count === 1){
            x1 = line.slice(start+1,end);
          }
          if (count === 2){
            y1 = line.slice(start+1,end);
          }
          if (count === 3){
            x2 = line.slice(start+1,end);
          }
          if (count === 4){
            y2 = line.slice(start+1,end);
          }
          count++;
        }
        i++;
      } while(count <= 4);

      //console.log('x1: ' + x1 + ' y1: '+ y1 + ' x2: ' + x2 + ' y2: ' + y2);
      var begin = line.indexOf('l');
      line = line.slice(0,begin) + 'path d="M' + x1 + ',' + y1 + ',' +
        x2 + ',' + y2 + '"/>';
      number_lines++;
    }
    fs.appendFileSync("output.html", line.toString() + "\n");
});

console.log('number of lines changed: ' + number_lines);


function editing(line){
  var x1,y1,x2,y2;
  var count = 1;
  //find the starting point and end point of each ' " ':
  var i = 0;
  var start, end;
  do {
    if (line[i] == '"'){
      start = i;
      do {
        i++;
      } while (line[i] !== "\"")
      end = i;
      if (count === 1){
        x1 = line.slice(start+1,end);
      }
      if (count === 2){
        y1 = line.slice(start+1,end);
      }
      if (count === 3){
        x2 = line.slice(start+1,end);
      }
      if (count === 4){
        y2 = line.slice(start+1,end);
      }
      count++;
    }
    i++;
  } while(count <= 4);

  //console.log('x1: ' + x1 + ' y1: '+ y1 + ' x2: ' + x2 + ' y2: ' + y2);
  var begin = line.indexOf('l');
  line = line.slice(0,begin) + 'path d="M' + x1 + ',' + y1 + ',' +
    x2 + ',' + y2 + '"' + ' />';
  number_lines++;

  return line;
  //edit the line
}
