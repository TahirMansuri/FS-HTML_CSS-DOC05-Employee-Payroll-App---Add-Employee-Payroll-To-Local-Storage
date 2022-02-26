window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    </tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
            <td>
                <div class='dept-lebel'>HR</div>
                <div class='dept-lebel'>Finance</div>
             </td>
             <td>3000000</td>
             <td>1 Nov 2020</td>
 
             <td>
                 <img name="1" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                 <img name="1" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
}


window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        </tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
            <td>
                <div class='dept-lebel'>HR</div>
                <div class='dept-lebel'>Finance</div>
             </td>
             <td>3000000</td>
             <td>1 Nov 2020</td>
 
             <td>
                 <img name="1" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                 <img name="1" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
}



const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
        </tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}<</td>
            <td>
                <div class='dept-lebel'>${empPayrollData._department[0]}<</div>
                <div class='dept-lebel'>${empPayrollData._department[1]}</div>
             </td>
             <td>${empPayrollData._salary}</td>
             <td>${empPayrollData._startDate}</td>
 
             <td>
                 <img name="${empPayrollData._id}" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                 <img name="${empPayrollData._id}" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
}


const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Amarpa Shashanka Keerthi Kumar',
            _gender: 'female',
            _department: [
                'sales',

            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;

}


window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];

    const innerHtml = `${headerHtml}
        </tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}<</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
             <td>${empPayrollData._salary}</td>
             <td>${getDeptHtml(empPayrollData._startDate)}</td>
 
             <td>
                 <img name="${empPayrollData._id}" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                 <img name="${empPayrollData._id}" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}



const getDeptHtml = (deptList) => {

    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${headerHtml}
        </tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}<</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${getDeptHtml(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img id="${empPayrollData._id}" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmlayeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');

});
const getEmloyeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];

}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${headerHtml}
        </tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}<</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${getDeptHtml(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)"src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img id="${empPayrollData._id}" onclick="update(this)"src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

