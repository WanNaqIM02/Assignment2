google.charts.load('current',{'packages':['corechart'], callback: drawChart});

function drawChart(){
    allowanceMonday = parseFloat(document.getElementById('allowanceMon').value);
    transportMonday = parseFloat(document.getElementById('transportMon').value);
    foodMonday = parseFloat(document.getElementById('foodMon').value);
    miscellaneousMonday = parseFloat(document.getElementById('miscMon').value);
    savingsMonday = allowanceMonday - transportMonday - foodMonday - miscellaneousMonday;

    allowanceTuesday = parseFloat(document.getElementById('allowanceTues').value);
    transportTuesday = parseFloat(document.getElementById('transportTues').value);
    foodTuesday = parseFloat(document.getElementById('foodTues').value);
    miscellaneousTuesday = parseFloat(document.getElementById('miscTues').value);
    savingsTuesday = allowanceTuesday - transportTuesday - foodTuesday - miscellaneousTuesday;

    allowanceWednesday = parseFloat(document.getElementById('allowanceWed').value);
    transportWednesday = parseFloat(document.getElementById('transportWed').value);
    foodWednesday = parseFloat(document.getElementById('foodWed').value);
    miscellaneousWednesday = parseFloat(document.getElementById('miscWed').value);
    savingsWednesday = allowanceWednesday - transportWednesday - foodWednesday - miscellaneousWednesday;

    allowanceThursday = parseFloat(document.getElementById('allowanceThu').value);
    transportThursday = parseFloat(document.getElementById('transportThu').value);
    foodThursday = parseFloat(document.getElementById('foodThu').value);
    miscellaneousThursday = parseFloat(document.getElementById('miscThu').value);
    savingsThursday = allowanceThursday - transportThursday - foodThursday - miscellaneousThursday;

    allowanceFriday = parseFloat(document.getElementById('allowanceFri').value);
    transportFriday = parseFloat(document.getElementById('transportFri').value);
    foodFriday = parseFloat(document.getElementById('foodFri').value);
    miscellaneousFriday = parseFloat(document.getElementById('miscFri').value);
    savingsFriday = allowanceFriday - transportFriday - foodFriday - miscellaneousFriday;
    
    
    var data = new google.visualization.arrayToDataTable([
        ['Day' , 'Savings'],
        ['Monday',  savingsMonday],
        ['Tuesday', savingsTuesday],
        ['Wednesday', savingsWednesday],
        ['Thursday',  savingsThursday],
        ['Friday', savingsFriday]
    ]);

    var options ={
        title: 'Savings',
        height: 500
    };


    var chartType = document.getElementById("chartType").value;
    var chart =  new google.visualization[chartType](document.getElementById('chart'));
    chart.draw(data , options);
}