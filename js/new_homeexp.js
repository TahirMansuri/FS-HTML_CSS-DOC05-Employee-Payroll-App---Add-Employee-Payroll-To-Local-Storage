let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmloyeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
    alert(isUpdate);
});
function getEmloyeePayrollDataFromStorage(){
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

function createInnerHtml(){
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        </tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -3.png" alt=""></td>
        <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${empPayrollData._deptArr}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._day} / ${empPayrollData._month} / ${empPayrollData._year}</td>
            <td>
                <img name="${empPayrollData._name}" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${empPayrollData._name}" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

function update(node) {
    let empPayrollData = empPayrollList.find(addData => addData._name == node.name);
    if(!empPayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(empPayrollData))
    window.location.replace("../pages/Employee_Payroll.html");
}

function remove(node) {
    
    let empPayrollData = empPayrollList.find(empData => empData._name == node.name);
   
    if(!empPayrollData) return;
    const index = empPayrollList.map(empData => empData._name)
                .indexOf(empPayrollData._name);
                alert(empPayrollData._name+ ", Employee is Deleting.");
                empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}