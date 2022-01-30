

let employees = [];
let div =  document.getElementById('formm');

checkLocalAndPush();

let userObj = [];

employees.push(userObj);

let jsonArray = toJSON();

   saveToLocalS(jsonArray);


  render(readFromLocalS());


function toJSON (){
    let jsonArray = JSON.stringify(employees);
    return jsonArray;
}
function saveToLocalS(jsonArray){
        localStorage.setItem('employees',jsonArray)
} 
function readFromLocalS(){
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    if(arr !== null){
        return arr;
    }else{
        return [];
    }
    render (arr);
}

function render(arr){
    for(let i=0; i<arr.length;i++){
        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = arr[i].Fullname + " " + arr[i].Department; 
    }
}
function checkLocalAndPush(){
    if(employees.length == 0 ){
        let arr = readFromLocalS();
        if(arr.length !=0){
            employees = arr;
        }
    }
}
console.log(employees);
render(readFromLocalS());


  employees = [["Marketing"     ,   , employees[i] ,"  "],
               ["Development"   , jsonArray[i] , jsonArray[i],"  "],
               ["Finance"       , "B3 ", "C3" ,employees[1]],
               ["Administration", "B4" , "C4" ,"  "],
               ["total"         , employees[2], "454" ,"455"]]
               
               for (var i = 0; i < employees.length; i++) {
                var newRow = table.insertRow(table.length);
                for (var j = 0; j < employees[i].length; j++) {
                    var cell = newRow.insertCell(j);
                    cell.innerHTML = employees[i][j];
                }
            }
    table = document.getElementById("table");

  


