// Variables globales
//con esto solo jalamos la informacion de los objetos que estan en el archivo data.js
var allGDL1 = (data['GDL']['2017-1'].students.length);
var allCDMX1 = (data['CDMX']['2017-1'].students.length);
var allCDMX2 = (data['CDMX']['2017-2'].students.length);
var allLIM1 = (data['LIM']['2016-2'].students.length);
var allLIM2 = (data['LIM']['2017-1'].students.length);
var allLIM3 = (data['LIM']['2017-2'].students.length);
var allSCL1 = (data['LIM']['2016-2'].students.length);
var allSCL2 = (data['LIM']['2017-1'].students.length);
var allSCL3 = (data['LIM']['2017-2'].students.length);
console.log(allSCL3);

//Establecemos las estudiantes activas por sede y generacion
//tenemos que iterar con el for dentro de los objertos para llegar a la key active
var activeGDL1 = data['GDL']['2017-1'].students;
    activeG1=activeGDL1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeGDL1.length; i++){
    }
var activeCDMX1 = data['CDMX']['2017-1'].students;
    activeCD1=activeCDMX1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeCDMX1.length; i++){
    }
var activeCDMX2 = data['CDMX']['2017-2'].students;
    activeCD2=activeCDMX2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeCDMX2.length; i++){
    }
var activeLIM1 = data['LIM']['2016-2'].students;
    activeLI1=activeLIM1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM1.length; i++){
    }
var activeLIM2 = data['LIM']['2017-1'].students;
    activeLI2=activeLIM2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM2.length; i++){
    }
var activeLIM3 = data['LIM']['2017-2'].students;
    activeLI3=activeLIM3.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeLIM3.length; i++){
    }
var activeSCL1 = data['SCL']['2016-2'].students;
    activeSC1=activeSCL1.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL1.length; i++){
    }
var activeSCL2 = data['SCL']['2017-1'].students;
    activeSC2=activeSCL2.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL2.length; i++){
    }
var activeSCL3 = data['SCL']['2017-2'].students;
    activeSC3=activeSCL3.filter(function(student){return student.active}).length;
    for(var i = 0; i < activeSCL3.length; i++){
    }
    console.log(activeSC3);

//Cargamos Los Complementos Para las graficas
google.load('visualization', '1.0', {'packages':['corechart']});

// Grafica de Estudiantes activas por sede
google.setOnLoadCallback(dibujar);
  function dibujar(){
  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'Estudiantes');
        dat.addRows([
          ['GDL', activeG1],
          ['MEX', activeCD1 + activeCD2],
          ['LIM', activeLI1+activeLI2 + activeLI3],
          ['PER', activeSC1+activeSC2+activeSC3],
        ]);
        var options = {'title':'Activas Por Sede', //titulo de la grafica
                       'width':550, //tamaños
                       'height':400};
       var grafica = new google.visualization.BarChart(document.getElementById('chartActive')); //en que div del html ira (charActive)
          grafica.draw(dat, options);
}

// Grafica de Estudiantes activas por Generacion
google.setOnLoadCallback(dibuj);
  function dibuj(){
  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'Estudiantes');
        dat.addRows([
          ['GDL1', activeG1],
          ['MEX1', activeCD1],




          ['MEX2', activeCD2],
          ['LIM1', activeLI1],
          ['LIM2', activeLI2],
          ['LIM3', activeLI3],
          ['PER', activeSC1],
          ['PER', activeSC2],
          ['PER', activeSC3],
        ]);
        var options = {'title':' Activas Por Generacion',
                       'width':550,
                       'height':400};
       var grafica = new google.visualization.BarChart(document.getElementById('chartActive1'));
          grafica.draw(dat, options);
}



// Estudiantes No Activas por sede
google.setOnLoadCallback(dibuja);
  function dibuja(){
  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'Estudiantes');
        dat.addRows([
          ['GDL', allGDL1-activeG1],
          ['MEX',(allCDMX1+allCDMX2)-(activeCD1+activeCD2)],
          ['LIM', (allLIM1+allLIM2+allLIM3)-(activeLI1+activeLI2 + activeLI3)],
          ['PER', (allSCL1+allSCL2+allSCL3)-(activeSC1+activeSC2+activeSC3)],
        ]);
        var options = {'title':'No Activas Por Sede',
                       'width':550,
                       'height':400};
       var grafica = new google.visualization.BarChart(document.getElementById('chartNoActive'));
          grafica.draw(dat, options);
}

google.setOnLoadCallback(dibu);
  function dibu(){
  var dat = new google.visualization.DataTable();
        dat.addColumn('string', 'Ciudad');
        dat.addColumn('number', 'Estudiantes');
        dat.addRows([
          ['GDL1', allGDL1-activeG1],
          ['MEX1', allCDMX1-activeCD1],
          ['MEX2', allCDMX2-activeCD2],
          ['LIM1', allLIM1-activeLI1],
          ['LIM2', allLIM2-activeLI2],
          ['LIM3', allLIM3-activeLI3],
          ['PER1', allSCL1-activeSC1],
          ['PER2', allSCL2-activeSC2],
          ['PER3', activeSC3-allSCL3], //ignora este dato el lunes hablo con levitha
        ]);
        var options = {'title':' No Activas Por Generacion',
                       'width':550,
                       'height':400};
       var grafica = new google.visualization.BarChart(document.getElementById('chartNoActive1'));
          grafica.draw(dat, options);
}
