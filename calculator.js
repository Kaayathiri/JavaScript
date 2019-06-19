
function add() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a + b;
    document.getElementById('inputC').value = c;
    const resultelementt = document.createElement('p');
    resultelementt.innerText = c;
    document.getElementById('history').appendChild(resultelementt);

}
function sub() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a - b;
    document.getElementById('inputC').value = c;

    const resultelementt = document.createElement('p');
    resultelementt.innerText = c;
    document.getElementById('history').appendChild(resultelementt);
}
function multiply() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a * b;
    document.getElementById('inputC').value = c;
    const resultelementt = document.createElement('p');
    resultelementt.innerText = c;
    document.getElementById('history').appendChild(resultelementt);
}
function divide() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a / b;
    document.getElementById('inputC').value = c;
    const resultelementt = document.createElement('p');
    resultelementt.innerText = c;
    document.getElementById('history').appendChild(resultelementt);
}

