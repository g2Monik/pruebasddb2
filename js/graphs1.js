var estudentsGdl1 = (data['GDL']['2017-1'].students.length);
var estudentsCDMX1 = (data['CDMX']['2017-1'].students.length);
var estudentsCDMX2 = (data['CDMX']['2017-2'].students.length);
var estudentsLIM1 = (data['LIM']['2016-2'].students.length);
var estudentsLIM2 = (data['LIM']['2017-1'].students.length);
var estudentsLIM3 = (data['LIM']['2017-2'].students.length);
var estudentsSCL1 = (data['LIM']['2016-2'].students.length);
var estudentsSCL2 = (data['LIM']['2017-1'].students.length);
var estudentsSCL3 = (data['LIM']['2017-2'].students.length);




google.load('visualization', '1.0', {'packages':['corechart']});


google.setOnLoadCallback(dibujar);
function dibujar(){

  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'Estudiantes');
        dat.addRows([
          ['GDL', estudentsGdl1],
          ['MEX', estudentsCDMX1 + estudentsCDMX2],
          ['LIM', estudentsLIM1+estudentsLIM2 + estudentsLIM3],
          ['PER', estudentsSCL1+estudentsSCL2+estudentsSCL3],
        ]);
        var options = {'title':'Estudiantes Activas',
                       'width':500,
                       'height':300};
       var grafica = new google.visualization.AreaChart(document.getElementById('chart'));
          grafica.draw(dat, options);
}

var studentGDL1 = data['GDL']['2017-1'].students;
active=studentGDL1.filter(function(student){return student.active}).length;
console.log(active);
for(var i = 0; i < studentGDL1.length; i++){
  }


var profesoresGdl1 = (data['GDL']['2017-1']['ratings']['sprint'].teacher);
console.log(profesoresGdl1);
