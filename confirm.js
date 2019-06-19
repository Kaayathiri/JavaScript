const userData= JSON.parse(sessionStorage.getItem('UserData'));
//const nameSpan = document.getElementById("nameSpan");
//nameSpan.innerText=userData.fname + ' ' + userData.lname;
const container=document.getElementById('putStuffHere');
for (let key in userData){
    const el=document.createElement('h4');
    el.innerText = key + ': '+ userData[key];
    container.append(el);
}