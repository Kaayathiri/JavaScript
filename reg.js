const formdata = {};


function handlesubmit(event) {
    //  debugger;

    for (let control of event) {
        formdata[control.id] = control.value;
    }
    console.log("this saved", formdata);
    sessionStorage.setItem('UserData',JSON.stringify(formdata));
    window.location = 'confirmation.html';
    return false;
}
