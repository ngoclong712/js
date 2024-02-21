class Student {
    constructor(id, name, dob, className, gpa) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.className = className;
        this.gpa = gpa;
    }
}
var students = [];
var numStudents;

function submitNumStudents() {
    var numStudents = document.getElementById("numStudents").value;
    var studentFields = document.getElementById("studentFields");
    var studentContainer = document.getElementById("studentContainer");

    studentContainer.innerHTML = '';

    for (var i = 1; i <= numStudents; i++) {
        var studentDiv = document.createElement("div");

        var studentIdLabel = document.createElement("label");
        studentIdLabel.textContent = "Mã SV " + i + ": ";
        var studentIdInput = document.createElement("input");
        studentIdInput.type = "text";
        studentIdInput.name = "studentId" + i;

        var fullNameLabel = document.createElement("label");
        fullNameLabel.textContent = "Họ và tên " + i + ": ";
        var fullNameInput = document.createElement("input");
        fullNameInput.type = "text";
        fullNameInput.name = "fullName" + i;

        var dobLabel = document.createElement("label");
        dobLabel.textContent = "Ngày tháng năm sinh " + i + ": ";
        var dobInput = document.createElement("input");
        dobInput.type = "date";
        dobInput.name = "dob" + i;

        var classLabel = document.createElement("label");
        classLabel.textContent = "Lớp học " + i + ": ";
        var classInput = document.createElement("input");
        classInput.type = "text";
        classInput.name = "class" + i;

        var gpaLabel = document.createElement("label");
        gpaLabel.textContent = "Điểm GPA " + i + ": ";
        var gpaInput = document.createElement("input");
        gpaInput.type = "number";
        gpaInput.step = "0.01";
        gpaInput.min = "0";
        gpaInput.max = "4";
        gpaInput.name = "gpa" + i;

        studentDiv.appendChild(studentIdLabel);
        studentDiv.appendChild(studentIdInput);
        studentDiv.appendChild(fullNameLabel);
        studentDiv.appendChild(fullNameInput);
        studentDiv.appendChild(dobLabel);
        studentDiv.appendChild(dobInput);
        studentDiv.appendChild(classLabel);
        studentDiv.appendChild(classInput);
        studentDiv.appendChild(gpaLabel);
        studentDiv.appendChild(gpaInput);

        studentContainer.appendChild(studentDiv);
    }

    studentFields.style.display = "block";
}

function submitStudents() {
    var studentContainers = document.querySelectorAll("#studentContainer > div");

    studentContainers.forEach(function(container) {
        var id = container.querySelector("input[name^='studentId']").value;
        var name = container.querySelector("input[name^='fullName']").value;
        var dob = container.querySelector("input[name^='dob']").value;
        var className = container.querySelector("input[name^='class']").value;
        var gpa = container.querySelector("input[name^='gpa']").value;

        var student = new Student(id, name, dob, className, gpa);
        students.push(student);
    });

    var displayArea = document.getElementById("studentInfoDisplay");
    displayArea.innerHTML = ""

    alert("Đã lưu sinh viên thành công!");

}

function displayStudentInfo() {
    var displayArea = document.getElementById("studentInfoDisplay");
    displayArea.innerHTML = ""; // Clear previous display

    var studentsInfo = "";
    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        studentsInfo += "Student " + (i + 1) + ":<br>" +
            "Mã SV: " + student.id + "<br>" +
            "Họ và tên: " + student.name + "<br>" +
            "Ngày tháng năm sinh: " + student.dob + "<br>" +
            "Lớp học: " + student.className + "<br>" +
            "Điểm GPA: " + student.gpa + "<br><br>";
    }

    displayArea.innerHTML = studentsInfo;
}

function clearStudents() {
    var studentID = prompt("Nhập mã sinh viên cần xóa:");

    var studentIndex = students.findIndex(function(student) {
        return student.id === studentID;
    });

    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
        alert("Đã xóa sinh viên thành công!");
    } else {
        alert("Không tìm thấy sinh viên có mã sinh viên là " + studentID);
    }

    displayStudentInfo();
}

function editStudent() {
    var idToEdit = prompt("Nhập mã SV của sinh viên cần sửa:");
    if (!idToEdit) return;

    var studentToEdit = students.find(function(student) {
        return student.id === idToEdit;
    });

    if (!studentToEdit) {
        alert("Không tìm thấy sinh viên có mã SV là " + idToEdit);
        return;
    }

    var newName = prompt("Nhập tên mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.name);
    if (newName !== null) {
        studentToEdit.name = newName;
    }

    var newClass = prompt("Nhập lớp mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.className);
    if (newClass !== null) {
        studentToEdit.className = newClass;
    }

    var newDOB = prompt("Nhập ngày tháng năm sinh mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.dob);
    if (newDOB !== null) {
        studentToEdit.dob = newDOB;
    }

    var newGPA = prompt("Nhập điểm GPA mới cho sinh viên có mã SV là " + idToEdit + ":", studentToEdit.gpa);
    if (newGPA !== null) {
        studentToEdit.gpa = newGPA;
    }

    displayStudentInfo();
}