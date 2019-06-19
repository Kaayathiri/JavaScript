
const membersContainer=document.getElementById('membersContainer');


const request = new XMLHttpRequest();
request.onload = function (){
    const parsedData=JSON.parse(request.responseText);
    console.log('Data:', parsedData);
    displaySuperheroData(parsedData);
    
};
request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
request.send();

function displaySuperheroData (data){
    document.getElementById('herostitle').innerText=data.squadName;
  
    // for (let member of data.members){
    //     const membernameEl =document.createElement ('h3');
    //     const memberPowers=document.createElement ('p');
    //     const membersAge=document.createElement ('p');
    //     membernameEl.innerText=member.name;
    //     membernameEl.classnName=''
    //     memberPowers.innerText='Powers: '+ member.powers;
    //     membersAge.innerText='Age: ' + member.age;
    //     membersContainer.append(membernameEl);
    //     membersContainer.append(memberPowers);
    //     membersContainer.append(membersAge);
    // }
    data.members.forEach((item) => membersContainer.append(generateMember(item)));
}

   function generateMember(member){
       const memberWrapper=document.createElement('div');
       memberWrapper.className='memberWrapper';
  
        const title=document.createElement ('h2');
        title.innerText=member.name;
        memberWrapper.append(title);

        const age=document.createElement ('p');
        age.innerText='Age: ' + member.age;
        memberWrapper.append(age);

        const power=document.createElement ('p');
        power.innerText='Powers: ' +member.powers;
        memberWrapper.append(power);


        return memberWrapper;
    }





