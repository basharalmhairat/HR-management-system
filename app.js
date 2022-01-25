


// function employee (employeeID,fullName,department,level=[senior,mid,junior],imageUrl,salary){

//    this. employeeID=employeeID;
//    this. fullName=fullName;
//    this. department=department;
//    this. level=level;
//    this. imageUrl=imageUrl;
//    this. salary=salary;
// }


// const employee1= new employee(1001,	Lana,   Ali,    Finance,level[Senior])
// const employee2= new employee(1002,	tamara, walid,	Marketing,level[senior])
// const employee3= new employee(1003,	safi,   zaid,	Administration,level[mid])
// const employee4= new employee(1004,	omar,   saleh,	Development,level[senior])
// const employee5= new employee(1005,	rana,   ahmad,	Development,level[junior])
// const employee6= new employee(1005,	hadi,   ayoub,	Finance,level[Senior])


// employee.prototype.render =function(){
// const tableBody =document.getElementById('tablebody');
// let counter =0;
//   employeeArray.forEach(item => {
//      counter ++;
//      tableBody.innerHTML += <tr>


//         <th> ${counter}</th>
//         <td>  ${item.fullName}</td>
//         <td>   ${netSalary(0.075,item.level)}</td>
//      </tr>

     
//   });
// }

// const employee3=employee.render;



// if (this.level= 'senior') {
//  {Math.floor(Math.random() * 2000) + 1500;   


//  }
//  if (this.level= 'mid') {
//      employee.prototype.render= function()
//      {Math.floor(Math.random() * 1500) + 1000;  
//      }
//      if (this.level= 'junior') {
//          employee.prototype.render= function()
//          {Math.floor(Math.random() * 1000) + 500;  
//          }
//          }
//          document.write(`$(this.salary)(salary *7.5% - this.salary=netSalary) $(this.fullName)`)
//       }


// 
// 1002	Tamara Ayoub	Marketing	Senior
// 1003	Safi Walid	Administration	Mid-Senior
// 1004	Omar Zaid	Development	Senior
// 1005	Rana Saleh	Development	Junior
// 1006	Hadi Ahmad	Finance	Mid-Senior
        
//Math.floor(Math.random() * 100) + 1;
// Level	    Min	    Max
// Senior	    1500	2000
// Mid-Senior	1000	1500
// Junior	    500	    1000


let formsection = document.getElementById('formsection');

function form(Fullname, Department, employeeID,Level, Imageurl,Submit) {
   this.employeeID=employeeID;
   this.Fullname = Fullname;
   this.Department = Department; 
   this.Imageurl = `./images/${this.name}.PNG`;
   this.Level = Level;
   
  
}

form.prototype.employeeid = function() {
   this.employeeID = getRandomNumber(1000,4000);
}

form.prototype.render = function () {

let div = document.createElement('div');
    handelSubmit.appendChild(div);

    let h4 = document.createElement('h4');
    div.appendChild(h4);
    h4.textContent = this.name;

}


let img = document.createElement('imgeurl');
    div.appendChild(Imageurl);
    img.setAttribute('src',this.Imageurl);
    img.setAttribute('alt',this.Fullname);


let p2 = document.createElement('p');
div.appendChild(p2);
p2.textContent = `employeeID : ${this.employeeID}` ;


function handelSubmit(event) {
   event.preventDefault();
   let Fullname = event.target.Fullname.value;
   let Department = event.target.Department.value;
   let Level = event.target.Level.value;
   let Imageurl = event.target.Imageurl.value;
       console.log(`${Fullname}  ${Department}  ${Level}  ${Imageurl}`);
   
   let newemployee = new form(Fullname, Department, Level, Imageurl);
   newemployee.employeeid();
   newemployee.render();
}
function getRandomNumber(min,max){
 return Math.floor(Math.random() * (max-min) + min);    
}

formsection.addEventListener(submit, handelSubmit);


