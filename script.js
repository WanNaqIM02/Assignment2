google.charts.load('current',{'packages':['corechart'], callback: drawChart});

function drawChart(){
    allowanceMonday = parseInt(document.getElementById('allowanceMon').value);
    transportMonday = parseInt(document.getElementById('transportMon').value);
    foodMonday = parseInt(document.getElementById('foodMon').value);
    miscellaneousMonday = parseInt(document.getElementById('miscMon').value);
    savingsMonday = allowanceMonday - transportMonday - foodMonday - miscellaneousMonday;

    allowanceTuesday = parseInt(document.getElementById('allowanceTues').value);
    transportTuesday = parseInt(document.getElementById('transportTues').value);
    foodTuesday = parseInt(document.getElementById('foodTues').value);
    miscellaneousTuesday = parseInt(document.getElementById('miscTues').value);
    savingsTuesday = allowanceTuesday - transportTuesday - foodTuesday - miscellaneousTuesday;

    allowanceWednesday = parseInt(document.getElementById('allowanceWed').value);
    transportWednesday = parseInt(document.getElementById('transportWed').value);
    foodWednesday = parseInt(document.getElementById('foodWed').value);
    miscellaneousWednesday = parseInt(document.getElementById('miscWed').value);
    savingsWednesday = allowanceWednesday - transportWednesday - foodWednesday - miscellaneousWednesday;

    allowanceThursday = parseInt(document.getElementById('allowanceThu').value);
    transportThursday = parseInt(document.getElementById('transportThu').value);
    foodThursday = parseInt(document.getElementById('foodThu').value);
    miscellaneousThursday = parseInt(document.getElementById('miscThu').value);
    savingsThursday = allowanceThursday - transportThursday - foodThursday - miscellaneousThursday;

    allowanceFriday = parseInt(document.getElementById('allowanceFri').value);
    transportFriday = parseInt(document.getElementById('transportFri').value);
    foodFriday = parseInt(document.getElementById('foodFri').value);
    miscellaneousFriday = parseInt(document.getElementById('miscFri').value);
    savingsFriday = allowanceFriday - transportFriday - foodFriday - miscellaneousFriday;
    
    
    var data = new google.visualization.arrayToDataTable([
        ['Day' , 'Savings'],
        ['Monday', savingsMonday],
        ['Tuesday', savingsTuesday],
        ['Wednesday', savingsWednesday],
        ['Thursday', savingsThursday],
        ['Friday', savingsFriday]
    ]);

    var options ={
        title: 'Savings'
    };


    var chartType = document.getElementById("chartType").value;
    var chart =  new google.visualization[chartType](document.getElementById('chart'));
    chart.draw(data , options);
}