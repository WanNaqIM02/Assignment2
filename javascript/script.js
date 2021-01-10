// Loads google API and its variables.
google.charts.load('current',{'packages':['corechart' , 'bar' ]});

//Global variable to be allowed to be used by other functions.
var allowanceMonday;
var transportMonday;
var foodMonday;
var miscellaneousMonday;

var allowanceTuesday;
var transportTuesday;
var foodTuesday;
var miscellaneousTuesday;

var allowanceWednesday;
var transportWednesday;
var foodWednesday;
var miscellaneousWednesday;

var allowanceThursday;
var transportThursday;
var foodThursday;
var miscellaneousThursday;

var allowanceFriday;
var transportFriday;
var foodFriday;
var miscellaneousFriday;

var targetSavings;
var savingsMonday;
var savingsTuesday;
var savingsWednesday;
var savingsThursday;
var savingsFriday;
var chartType;
var chart;
var data;
var options;

//Obtain user inputs and converts them into floats.
function obtainUserInput(){
    targetSavings = parseFloat(document.getElementById("target").value);
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
    chartType = document.getElementById("chartType").value;
    savingsFriday = allowanceFriday - transportFriday - foodFriday - miscellaneousFriday; 
}


// Enable and displays the chart API
function drawChart(){
   
    obtainUserInput();

    data = new google.visualization.arrayToDataTable([
        ['Day' , 'Savings'],
        ['Monday',  savingsMonday],
        ['Tuesday', savingsTuesday],
        ['Wednesday', savingsWednesday],
        ['Thursday',  savingsThursday],
        ['Friday', savingsFriday]
    ]);

    options ={
        title: 'Savings',
        height: 500,
        legend:{
            alignment: 'center'
        },
    };


    chartType = document.getElementById("chartType").value;
    chart = new google.visualization[chartType](document.getElementById('chart'));
    chart.draw(data , options);
    window.addEventListener('resize', drawChart, false);
    displayStats();
    saveUserInput();
}

// Saves the user preferred theme.
function setTheme(themeName){
    localStorage.setItem('theme',themeName);

    document.documentElement.className = themeName;
}

// Enable users to switch theme.
function switchTheme(){
    if(localStorage.getItem('theme') === 'theme-light'){
        setTheme('theme-dark');
    }
    else{
        setTheme('theme-light');
    }
}

// Access saved user inputs and preferences when page loads.
(function () {
    console.log(localStorage);
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = false;
    }
    
    var userInputHistory = JSON.parse(localStorage.getItem('userInput'));
    document.getElementById("target").value = userInputHistory[0].toFixed(2);

    document.getElementById("allowanceMon").value = userInputHistory[1][0].toFixed(2);
    document.getElementById("transportMon").value = userInputHistory[1][1].toFixed(2);
    document.getElementById("foodMon").value = userInputHistory[1][2].toFixed(2);
    document.getElementById("miscMon").value = userInputHistory[1][3].toFixed(2);

    document.getElementById("allowanceTues").value = userInputHistory[2][0].toFixed(2);
    document.getElementById("transportTues").value = userInputHistory[2][1].toFixed(2);
    document.getElementById("foodTues").value = userInputHistory[2][2].toFixed(2);
    document.getElementById("miscTues").value = userInputHistory[2][3].toFixed(2);

    document.getElementById("allowanceWed").value = userInputHistory[3][0].toFixed(2);
    document.getElementById("transportWed").value = userInputHistory[3][1].toFixed(2);
    document.getElementById("foodWed").value = userInputHistory[3][2].toFixed(2);
    document.getElementById("miscWed").value = userInputHistory[3][3].toFixed(2);

    document.getElementById("allowanceThu").value = userInputHistory[4][0].toFixed(2);
    document.getElementById("transportThu").value = userInputHistory[4][1].toFixed(2);
    document.getElementById("foodThu").value = userInputHistory[4][2].toFixed(2);
    document.getElementById("miscThu").value = userInputHistory[4][3].toFixed(2);

    document.getElementById("allowanceFri").value = userInputHistory[5][0].toFixed(2);
    document.getElementById("transportFri").value = userInputHistory[5][1].toFixed(2);
    document.getElementById("foodFri").value = userInputHistory[5][2].toFixed(2);
    document.getElementById("miscFri").value = userInputHistory[5][3].toFixed(2);
    document.getElementById("chartType").value = null;
   
})();

// Stores the user's input to localStorage.
function saveUserInput(){
    obtainUserInput();
    var mondayExpenses = [allowanceMonday, transportMonday, foodMonday, miscellaneousMonday];
    var tuesdayExpenses = [allowanceTuesday, transportTuesday, foodTuesday, miscellaneousTuesday];
    var wednesdayExpenses = [allowanceWednesday, transportWednesday, foodWednesday, miscellaneousWednesday];
    var thursdayExpenses = [allowanceThursday, transportThursday, foodThursday, miscellaneousThursday];
    var fridayExpenses = [allowanceFriday, transportFriday, foodFriday, miscellaneousFriday];
    var userInput = [targetSavings, mondayExpenses, tuesdayExpenses, wednesdayExpenses, thursdayExpenses, fridayExpenses];
    localStorage.setItem('userInput', JSON.stringify(userInput));
}

// Displays user's average savings and whether the user has achieved their target savings.
function displayStats(){
    obtainUserInput();
    totalSavings = savingsMonday + savingsTuesday + savingsWednesday + savingsThursday + savingsFriday;
    avgSavings = totalSavings / 5;
    document.getElementById("average").innerHTML = "Average Savings: " + "$" + avgSavings.toFixed(2);

    if (totalSavings > targetSavings){
        excess = totalSavings - targetSavings;
        document.getElementById("remainder").innerHTML = "Hooray! You  saved " + "$" + totalSavings.toFixed(2) + " with an extra of " + "$" + excess.toFixed(2) + ".";
    }
    else if (totalSavings < targetSavings){
        remainder = targetSavings - totalSavings;
        document.getElementById("remainder").innerHTML = "You saved " + "$" + totalSavings.toFixed(2) + ". " + " Another " + "$" + remainder.toFixed(2) + " more.";
    }
    else if (totalSavings === targetSavings){
        document.getElementById("remainder").innerHTML = " Hooray! You have reached your target!";
    }
}


// Remove's userInput localStorage item and empties out the respective input field.
function Reset(){
    localStorage.removeItem('userInput');
    document.getElementById("target").value = null;

    document.getElementById("allowanceMon").value = null;
    document.getElementById("transportMon").value = null;
    document.getElementById("foodMon").value = null;
    document.getElementById("miscMon").value = null;

    document.getElementById("allowanceTues").value = null;
    document.getElementById("transportTues").value = null;
    document.getElementById("foodTues").value = null;
    document.getElementById("miscTues").value = null;

    document.getElementById("allowanceWed").value = null;
    document.getElementById("transportWed").value = null;
    document.getElementById("foodWed").value = null;
    document.getElementById("miscWed").value = null;

    document.getElementById("allowanceThu").value = null;
    document.getElementById("transportThu").value = null;
    document.getElementById("foodThu").value = null;
    document.getElementById("miscThu").value = null;

    document.getElementById("allowanceFri").value = null;
    document.getElementById("transportFri").value = null;
    document.getElementById("foodFri").value = null;
    document.getElementById("miscFri").value = null;

    document.getElementById("chartType").value = null;

    document.getElementById("average").innerHTML = "Average Savings: " + "$" + "0.00";
    document.getElementById("remainder").innerHTML = null;
    chart.clearChart();

}
