var students = [];

function enterStudentInfo() {
    var count = document.getElementById("studentCount").value;
    var form = document.getElementById("studentInfoForm");
    form.innerHTML = ""; // Reset form content

    for (var i = 0; i < count; i++) {
        form.innerHTML += "<h3>Thông Tin Sinh Viên " + (i + 1) + "</h3>";
        form.innerHTML += "<label for='studentID" + i + "'>Mã SV:</label>";
        form.innerHTML += "<input type='text' id='studentID" + i + "'>";

        form.innerHTML += "<label for='studentName" + i + "'>Họ và Tên:</label>";
        form.innerHTML += "<input type='text' id='studentName" + i + "'>";

        form.innerHTML += "<label for='studentDOB" + i + "'>Ngày Tháng Năm Sinh:</label>";
        form.innerHTML += "<input type='date' id='studentDOB" + i + "'>";

        form.innerHTML += "<label for='studentClass" + i + "'>Lớp Học:</label>";
        form.innerHTML += "<input type='text' id='studentClass" + i + "'>";

        form.innerHTML += "<label for='studentGPA" + i + "'>Điểm GPA:</label>";
        form.innerHTML += "<input type='number' step='0.01' id='studentGPA" + i + "'>";
    }
}

function displayStudentInfo() {
    var form = document.getElementById("studentInfoForm");
    var display = document.getElementById("studentInfoDisplay");
    display.innerHTML = "<h2>Thông Tin Sinh Viên</h2>";

    for (var i = 0; i < form.children.length; i++) {
        var studentID = document.getElementById("studentID" + i).value;
        var studentName = document.getElementById("studentName" + i).value;
        var studentDOB = document.getElementById("studentDOB" + i).value;
        var studentClass = document.getElementById("studentClass" + i).value;
        var studentGPA = document.getElementById("studentGPA" + i).value;

        display.innerHTML += "<p><b>Mã SV:</b> " + studentID + "</p>";
        display.innerHTML += "<p><b>Họ và Tên:</b> " + studentName + "</p>";
        display.innerHTML += "<p><b>Ngày Tháng Năm Sinh:</b> " + studentDOB + "</p>";
        display.innerHTML += "<p><b>Lớp Học:</b> " + studentClass + "</p>";
        display.innerHTML += "<p><b>Điểm GPA:</b> " + studentGPA + "</p>";
        display.innerHTML += "<hr>";
    }
}
