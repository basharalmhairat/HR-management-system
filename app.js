'use strict';



// function employee(employeeID, fullName, department, level , imageUrl, salary) {

//     this.employeeID = employeeID;
//     this.fullName = fullName;
//     this.department = department;
//     this.level = level;
//     this.imageUrl = imageUrl;
//     this.salary = salary;
// }
// const employee1 = new employee(1001, "Lana Ali", "Finance", "Senior");
// const employee2 = new employee(1002, "tamara walid"," Marketing","senior");
// const employee3 = new employee(1003, "safi zaid", "Administration", "mid");
// const employee4 = new employee(1004, "omar saleh", "Development", "senior");
// const employee5 = new employee(1005, "rana ahmad", "Development", "junior");
// const employee6 = new employee(1005, "hadi ayoub", "Finance", "Senior");
// const employeeArray =[Lana,tamara,safi,omar,rana,hadi];

// employee.prototype.render = function () {
//     const tableBody = document.getElementById('tablebody');
//     let counter = 0;
//     employeeArray.forEach(item => {
//         counter++;
//         tableBody.innerHTML +=

//         <tr>
//             <th> ${counter}</th>
//             <td>  ${item.fullName}</td>
//             <td>   ${netSalary(0.075, item.level)}</td>
//         </tr>


//     });
// };

// const employee3 = employee.render();



// if (this.level == 'senior') {
//     {
//         Math.floor(Math.random() * 2000) + 1500;


//     }
// }
//     if (this.level == 'mid') {
//         employee.prototype.render == function () {
//             Math.floor(Math.random() * 1500) + 1000;
//         }
//     }
//         if (this.level = 'junior') {
//             employee.prototype.render == function () {
//                 Math.floor(Math.random() * 1000) + 500;
//             }
//         }
        // document.write(`$(this.salary)(salary *7.5% - this.salary=netSalary) $(this.fullName)`)


        let employeeform = document.getElementById('employeeform');
        let divid = document.getElementById('formm');


        function form(Fullname, Department, employeeID, Level, Imageurl, Submit) {
            this.employeeID = employeeID;
            this.Fullname = Fullname;
            this.Department = Department;
            this.Imageurl = `photo.jpg/images.png`;
            this.Level = Level;


        }

        form.prototype.employeeIDe = function () {
            this.employeeID = getRandomNumber(1000, 4000);
        }

            // function selectDeb()
            // {
            //     this.Department = document.getElementById("Department").value;
            // }


            function selectLevel()
            {
                 Level = document.getElementById("Level").value;
            }
           
        form.prototype.render = function () {

            let div = document.createElement('div');
            divid.appendChild(div);

            let h4 = document.createElement('h4');
            div.appendChild(h4);
            h4.textContent = this.Level;

            let h5 = document.createElement('h5');
            div.appendChild(h5);
            h4.textContent = (`Hello Mr :${this.Fullname} your Department is : ${this.Department} and are in ${this.Level} level`);

          

        let img = document.createElement('img');
        div.appendChild(img);
        img.setAttribute('src', this.Imageurl);
        img.setAttribute('alt', this.Fullname);


        let p2 = document.createElement('p');
        div.appendChild(p2);
        p2.textContent = `employeeID: ${this.employeeID}`;
        }

        function handelSubmit(event) {
            event.preventDefault();
            let Fullname = event.target.Fullname.value;
            let Department = event.target.Department.value;
            let Level = event.target.Level.value;
            let Imageurl = event.target.Imageurl.value;
            //    console.log(`${Fullname}  ${Department}  ${Level}  ${Imageurl}`);

            let newemployee = new form(Fullname, Department,Imageurl,Level);
            newemployee.employeeIDe();
            newemployee.render();
        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }


        employeeform.addEventListener('submit', handelSubmit);

