
donationArr=[];
function Donation(donationName, donationAmount){
    this.name= donationName;
    this.amount = donationAmount;
    this.age= 0,
    donationArr.push(this);
    updateStorage();
}

Donation.prototype.getAge= function(){
this.age = randomAgeNumber(20,60);
}

// from w3school
function randomAgeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
randomAgeNumber();



let table = document.getElementById('DonatorTable');
let dataRow = document.createElement('tr');
table.appendChild(dataRow);
let td1 = document.createElement('td');
dataRow.appendChild(td1);
td1.textContent = this.name;

let td2 = document.createElement('td');
dataRow.appendChild(td2);
td2.textContent = this.amount + 'dinar';

let td3 = document.createElement('td');
dataRow.appendChild(td3);
td3.textContent = this.age;



function updateStorage(){
let stringArr=JSON.stringify(donationArr);
localStorage.setItem('donation', stringArr);
}

function getOrders(){
    let data= localStorage.getItem('donation');
    let parsedArr=JSON.parse(data);

    if (parsedArr !== null){
        for (let i = 0; i < parsedArr.length; i++) {
            let customer= new Donation (parsedArr[i].name,parsedArr[i].amount)
            console.log(customer);
        }
    }
}


let form =document.getElementById('form');

form.addEventListener('submit',formSubmit);

function formSubmit(event){
    event.preventDefault();
    console.log(event);
    let name=event.target.DonatorName.value;
    console.log(name);

    let amount= event.target.DonationAmount.value;
    console.log(amount);
    let addedUser= new Donation(donationName, donationAmount);

    for (let i = 0; i < donationArr.length; i++) {
        donationArr[i].getAge();
    }
}




getOrders();