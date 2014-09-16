var textField = document.createElement('input');
textField.id="fieldXId";
textField.value = 'Congratulations, You have found fieldX';
document.body.appendChild(textField);

var submitButton = document.createElement('input');
submitButton.id = "submit.x";
submitButton.value = 'Continue';
submitButton.type = 'submit'
document.body.appendChild(submitButton);

var hiddenButton = document.createElement('input');
hiddenButton.id = "hidden.x";
hiddenButton.value = 'Hidden';
hiddenButton.type = 'submit';
hiddenButton.style.display = 'none';
document.body.appendChild(hiddenButton);

var containerOne = document.createElement('div');
containerOne.className = 'container';

var containerOneButton = document.createElement('input');
containerOneButton.id = "containerButtonOne.x";
containerOneButton.value = 'Button 1';
containerOneButton.type = 'submit';

containerOne.appendChild(containerOneButton);
document.body.appendChild(containerOne);

var containerTwo = document.createElement('div');
containerTwo.className = 'container';

var containerTwoButton = document.createElement('input');
containerTwoButton.id = "containerButtonOne.x";
containerTwoButton.value = 'Button 2';
containerTwoButton.type = 'submit';

containerTwo.appendChild(containerTwoButton);
document.body.appendChild(containerTwo);

var logLabel = document.createElement('label');
logLabel.id = "logLabel";
logLabel.innerHTML = "Log Label";
document.body.appendChild(logLabel);

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'checkbox';
document.body.appendChild(checkbox);

var radio = document.createElement('input');
radio.type = 'radio';
radio.id = 'radio';
document.body.appendChild(radio);

var select = document.createElement('select');
select.id = 'select'

var option1 = document.createElement('option');
option1.innerHTML = 'Option 1';
option1.value = 'option1';

var option2 = document.createElement('option');
option2.innerHTML = 'Option 2';
option2.value = 'option2';

select.add(option1);
select.add(option2);

document.body.appendChild(select);

document.title = "TestPage Generated By JavaScript";


