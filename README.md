# Saving Calculator

This project of mine is create a weekly savings calculator. Hence, allows the user to input their expenses,
store and retrieve them accordingly. Then once the website obtains the user's input, it would calculate it and
displat the result as a chart and outputs them info on how much more to save, whether they have reached their target 
or how much in excess savings they have. They are also able to choose the type charts they want their results to be displayed
in.

## Design Process

### User
---
Hence, the website is intended to be intuitive to anyone. Therefore, this website can be utilised by working adults, students or 
even children to enable them to plan their budget efficiently. Hence, the website designed should be minimal and intuitive.

### User Stories
---
* As an user, the inputs should accept numbers so that any character other than a number I mistyped does not appear in the input.
* As an user, I want to be able to choose the type of charts i want my result to be displayed in.
* As an user, I want my preferences and inputs to be saved when the website loads.
* As an user, I want to be able to remove my saved inputs and reset my inputs.

### Wireframe
---
[My wireframe](/wireframes/Assg2wireframe.pdf)

## Features
---
### Existing features
* Toggle for switching the theme of the website ( Dark mode / Light Mode) and able to save user's preferred theme when toggled.
* Localstorage to store user's input and preferences such as theme.
* Dropdown to toggle user's preferred chart type (bar, pie and column)
* Staistics displayed such as average the user saved in that week and how much the user saved and whether they have reached their target saving.

### Features left to implement
---
* A localStorage item to store the user's input history

## Technologies Used

### APIs
---
* localStorage
* [Google Charts API](https://developers.google.com/chart)

### Languages
---
* JavaScript
* HTML
* CSS

## Testing
1. Google Chart API
    1. Try to display the charts with all the input fields filled.
    2. Try to display the charts without all the input fields filled.
    3. Try to display the charts with one or more input fields not filled.
    
2. localStorage
    1. Try to view the stored user input in the localStorage when all input fields are filled.
    2. Try to view the stored user input in the localStorage when all input fields are not filled.
    3. Try to view the stored user input in the localStorage when one or more input fields are not filled.
    4. Try to view the stored user input in the localStorage when all input fields are resetted.
    5. Try to view the stored user input in the localStorage when page is reloaded.   

### Responsiveness & view on different browsers
---
* Flexboxes of respective displays a becomes a column when page resizes to a mobile resolution.
* Normalize.css used so the elements of the html becomes uniform on all browsers.

### Bugs encountered
---
* Value of average savings displayed as null when page is reloaded.
* Margins of various elements is not uniform.
* Google Chart variable is not constructor javascript error encounterred when the various charts such as bar amd column charts are not loaded with the API.

## Credit

### Acknowledgement
---
* [Toggle between theme function](https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2)
* [Allow google charts to use input as data](https://codeactually.com/googlecharts.html)
* [How to utilize localStorage](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
* [StackOverflow] (https://stackoverflow.com/questions/32458437/typeerror-google-visualization-datatable-is-not-a-constructor/32459785)
* [W3sSchools on stringifying variables using JSON] (https://www.w3schools.com/js/js_json_stringify.asp)
