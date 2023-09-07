var box = document.getElementById("tableBody");

var student1 = {
    name: "Kabeer",
    lastName: "Mansoor",
    age: 21,
};
var student2 = {
    name: "Faraz",
    lastName: "Iqbal",
    age: 20,
};
var student3 = {
    name: "Ashir",
    lastName: "Azeem",
    age: 22,
};
var student4 = {
    name: "huzaifa",
    lastName: "siraiki",
    age: 21,
};
var student5 = {
    name: "Shabbir",
    lastName: "hussain",
    age: 23,
};

var studentList = [student1, student2, student3, student4, student5];

function renderTable() {
    box.innerHTML = ''; // Clear the table body
    for (var i = 0; i < studentList.length; i++) {
        box.innerHTML += `
            <tr>
                <td class="fs-4 pt-4">${studentList[i].name}</td>
                <td class="fs-4 pt-4">${studentList[i].lastName}</td>
                <td class="fs-4 pt-4">${studentList[i].age}</td>
                <td><button class="btnUpdate mt-4 fs-5" onclick="update(${i})"><i class="fa-solid fa-pen"></i> Update</button></td>
                <td><button class="btnDelete mt-4 fs-5" onclick="deleteThis(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>
        `;
    }
}

function deleteThis(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        studentList.splice(index, 1);
        renderTable(); // Update the table after removing the student
    }
}

function update(index) {
    var newName = prompt("Enter the new name:");
    var newLastName = prompt("Enter the new last name:");
    var newAge = prompt("Enter the new age:");

    if (newName !== null && newLastName !== null && newAge !== null) {
        studentList[index].name = newName;
        studentList[index].lastName = newLastName;
        studentList[index].age = parseInt(newAge); // Convert to integer

        renderTable(); // Update the table after modifying the student
    }
}

// Initial table rendering
renderTable();
