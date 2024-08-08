let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const messages = document.getElementById('messages');
    
    messages.innerHTML = '';

    if (!name || !profession || !age) {
        showMessage('Error :Please Make sure All the field before adding in an emplyee', 'error');
        return;
    }

    const employee = {
        id: employees.length ? employees[employees.length - 1].id + 1 : 1,
        name,
        profession,
        age
    };

    employees.push(employee);
    showMessage('Employee added successfully.', 'success');
    displayEmployees();
    document.getElementById('employeeForm').reset();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    
    if (employees.length === 0) {
        employeeList.innerHTML = 'No employees added yet.';
        return;
    }

    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span>${employee.name}, ${employee.profession}, ${employee.age}</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function showMessage(message, type) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = type;
    messageDiv.textContent = message;
    messages.appendChild(messageDiv);
}
