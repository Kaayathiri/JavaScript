function calc() {
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    

    function addfunc() {

        document.getElementById('inputC').value = a + b;
    }
    function subfunc() {

        document.getElementById('inputC').value = a - b;
       
    }
    function multfunc() {

        document.getElementById('inputC').value = a * b;
    }
    function divfunc() {

        document.getElementById('inputC').value = a / b;
    }
    return {
        add: addfunc, sub: subfunc, mult: multfunc, div: divfunc
    }
}

