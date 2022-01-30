'use strict';
let employeeform = document.getElementById('employeeForm');
let divid = document.getElementById('formm');

let employees = [];
checkLocalAndPush();

function Form(fullName, department, employeeID, level, imageurl, submit, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.imageurl = imageurl;
    this.level = level;
    this.salary = salary;
}
Form.prototype.employeeIDe = function () {

    this.employeeID = getRandomNumber(1000, 4000);
}
function selectDeb() {
    department = document.getElementById("department").value;
   
}
function selectLevel() {
    level = document.getElementById("level").value;
}
Form.prototype.netsalary = function () {
    if (this.level == "Senior") {
        this.salary = getRandomNumber(1500, 2000);
        console.log(this.salary);
    }
    else if (this.level == "Mid-Senior") {
        this.salary = getRandomNumber(1000, 1500);
    }
    else if (this.level == "Junior") {
        this.salary = getRandomNumber(500, 1000);
    }

    return this.salary - this.salary * 0.075;
}

Form.prototype.render = function () {

    let div = document.createElement('div');
    divid.appendChild(div);

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent = this.level;

    let h5 = document.createElement('h5');
    div.appendChild(h5);
    h4.textContent = (`Hello Mr :${this.fullName} your department is : ${this.department} and are in ${this.level} level `);

    let img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', this.imageurl);
    img.setAttribute('alt', this.fullName);


    let p2 = document.createElement('p');
    div.appendChild(p2);
    p2.textContent = `employeeID: ${this.employeeID}`;
    let p3 = document.createElement('p');
    div.appendChild(p3);
    p3.textContent = `your salary is : ${this.salary}`;
}


function handelSubmit(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level= event.target.level.value;
    let imageurl = event.target.imageurl.value;

    let newemployee = new Form(fullName, department, imageurl, level,);
    newemployee.employeeIDe();
    newemployee.netsalary();
    newemployee.render();

    let empObj = { fullName: fullName, department: department, level: level, }
    Form.prototype.addsalary = function () {
        if (level !== null) {
            return this.salary;
        } else {
            return [];
        }
    }
    employees.push(empObj);
    let jsonArray = toJSON();
    saveToLocalS(jsonArray);
    render(readFromLocalS());
}
function toJSON() {
    let jsonArray = JSON.stringify(employees);
    return jsonArray;
}
function saveToLocalS(jsonArray) {
   
    localStorage.setItem('allemployees', jsonArray)
}
function saveToLocalS(salary){
localStorage.setItem('allemployees',salary)
}
this.level=this.salary;
function readFromLocalS() {
    let jsonArr = localStorage.getItem('allemployees');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }   
}
function render(arr) {
    divido.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let td = document.createElement('p');
        divid.appendChild(td);
        td.textContent = arr[i].fullName + "..... " + arr[i].department +"     ";
    }
}
function checkLocalAndPush() {
    if (employees.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            employees = arr;
        }
    }
}
render(readFromLocalS());
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
employeeForm.addEventListener('submit', handelSubmit);

