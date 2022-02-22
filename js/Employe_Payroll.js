const salaryrange = document.querySelector('#salary');
const salaryvalue = document.querySelector('.salary-output-text');
salaryvalue.textContent = salaryrange.value;
salaryrange.addEventListener('input',function(){
    salaryvalue.textContent = salaryrange.value;
});

const empname = document.querySelector('#name');
const empnameerror = document.querySelector('.text-error');
empname.addEventListener('input',function(){
    var pattern = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(pattern.test(empname.value))
        empnameerror.textContent="";
    else empnameerror.textContent="Invalid Employee Name";
});

class Employee_Payroll{
    constructor(...param){
        this.name = param[0];
        this.gender = param[1];
        this.deptArr = param[2];
        this.salary = param[3];
        this.day = param[4];
        this.month = param[5];
        this.year = param[6];
        this.notes = param[7];
    }

    set name(name) {
        var pattern = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if(pattern.test(name))
            this._name = name;
        else throw 'Invalid First Name.';
    }
    get name(){
        return this._name;
    }

    set gender(gender) {
        this._gender = gender;
    }
    get gender() {
        return this._gender;
    }

    set deptArr(deptArr) {
        this._deptArr = deptArr;
    }
    get deptArr() {
        return this._deptArr;
    }

    set salary(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }

    set day(day) {
        this._day = day;
    }
    get day() {
        return this._day;
    }

    set month(month) {
        this._month = month;
    }
    get month(){
        return this._month;
    }

    set year(year) {
        this._year = year;
    }
    get year() {
        return this._year;
    }

    set notes(notes) {
        this._notes = notes;
    }
    get notes() {
        return this._notes;
    }

    toString() {
        console.log("Name :" + this._name
                    +"\nGender :" + this._gender
                    +"\nDepartment :"+ this._deptArr
                    +"\nSalary :"+ this._salary
                    +"\nDay :"+ this._day
                    +"\nMonth :"+ this._month
                    +"\nYear :"+ this._year
                    +"\nNotes :"+ this._notes);
    }
}

function save(){
    var deptArr = new Array();
    const name = document.querySelector('#name');
    console.log(name.value);
    const gender = document.querySelector('#gender');
    console.log(gender.value);
    var department = document.getElementsByName('dept');

    for(var depts of department) {
        if(depts.checked == true) {
            console.log(depts.value);
            deptArr.push(depts.value);
        }
    }

    console.log([...deptArr]);
    const salary = document.querySelector('#salary');
    console.log(salary.value);
    const date = document.querySelector('#day');
    console.log(date.value);
    const month = document.querySelector('#month');
    console.log(month.value);
    const year = document.querySelector('#year');
    console.log(year.value);
    const notes = document.querySelector('#notes');
    console.log(notes.value);
    // console.log(name.value+"\n"+gender.value+"\n"+department.value+"\n"+salary.value+"\n"+dd.value+"\n"+mm.value+"\n"+yy.value+"\n"+notes.value);
    var employeePayroll;
    try
    {
        employeePayroll = new Employee_Payroll(name.value,gender.value,deptArr,salary.value,day.value,month.value,year.value,notes.value);
        employeePayroll.toString();    
        createAndUpdateStorage(employeePayroll);
    }
    catch(e) {
        console.log(e);
    }
}

window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const nameerror = document.querySelector('.text-error');
    name.addEventListener('input',function() {
        if(name.value.length == 0) {
            nameerror.textContent = '';
            return;
        }
        try{
            (new Employee_Payroll()).name = name.value;
            nameerror.textContent='';
        } catch(e) {
            nameerror.textContent = e;
        }
    });
});

function createAndUpdateStorage(employeePayroll) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined) {
        employeePayrollList.push(employeePayroll);
    } else {
        employeePayrollList = [employeePayroll];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}