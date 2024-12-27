let students = [
  {
    id: "sv001",
    name: "Nguyen Van A",
    email: "v0l9n@example.com",
    phone: "0123456789",
    address: "Ha Noi",
    class: "C01",
    dob: "2000-01-01",
    age: 18,
    Image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50",
    video: "",
    sex: true,
  },
  {
    id: "sv002",
    name: "Nguyen Van B",
    email: "v0l9n@example.com",
    phone: "0123456789",
    address: "Ha Noi",
    class: "C01",
    dob: "2000-01-01",
    age: 18,
    Image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50",
    video: "",
    sex: true,
  },
  {
    id: "sv003",
    name: "Nguyen Van C",
    email: "v0l9n@example.com",
    phone: "0123456789",
    address: "Ha Noi",
    class: "C01",
    dob: "2000-01-01",
    age: 18,
    Image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50",
    video: "",
    sex: false,
  },
  {
    id: "sv004",
    name: "Nguyen Van D",
    email: "v0l9n@example.com",
    phone: "0123456789",
    address: "Ha Noi",
    class: "C01",
    dob: "2000-01-01",
    age: 18,
    Image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50",
    video: "",
    sex: true,
  },
];

document.getElementById("formAdd").style.display = "none"; // visibility

function showForm() {
  document.getElementById("formAdd").style.display = "block";
  document.querySelector(".mt-3").style.display = "none";
  document.getElementById("student-list-container").style.display = "none";
}

function hideForm() {
  document.getElementById("formAdd").style.display = "none";
  document.querySelector(".mt-3").style.display = "flex";
  document.getElementById("student-list-container").style.display = "block";
}

document.getElementById("btnReset").addEventListener("click", hideForm);

function addStudent() {
  const id = document.getElementById("student-id").value;
  const name = document.getElementById("student-name").value;
  if (name && id) {
    students.push({ id, name });
    document.getElementById("student-id").value = "";
    document.getElementById("student-name").value = "";
    alert("Student added successfully!");
    displayStudents();
  } else {
    alert("Please enter both name and ID.");
  }
}

function displayStudents() {
  const tbody = document.getElementById("students");
  tbody.innerHTML = students
    .map(
      (student, index) => `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.phone}</td>
          <td>${student.address}</td>
          <td>${student.class}</td>
          <td>${student.dob}</td>
          <td>${student.age}</td>
          <td><img src="${student.Image}" alt="Student Image"></td>
          <td>${student.video}</td>
          <td>${student.sex ? "Nam" : "Nữ"}</td>
          <td>
            <button type="button" class="btn btn-warning" onclick="editStudent('${student.id}')">Sửa</button>
            <button type="button" class="btn btn-danger" onclick="deleteStudent('${student.id}')">Xóa</button>
          </td>
        </tr>`
    )
    .join("");
}

function editStudent(index) {
  const student = students[index];
  const newName = prompt("Enter new name:", student.name);
  const newId = prompt("Enter new ID:", student.id);
  if (newName && newId) {
    student.name = newName;
    student.id = newId;
    displayStudents();
  } else {
    alert("Please enter both name and ID.");
  }
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    displayStudents();
  }
}

function searchStudent() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const result = students.filter(
    (student) => student.name.toLowerCase().includes(searchTerm) || student.id.toLowerCase().includes(searchTerm)
  );
  const searchResults = document.getElementById("search-results");
  const searchResultsContainer = document.getElementById("search-results-container");
  const searchResultsTitle = document.getElementById("search-results-title");
  const studentListContainer = document.getElementById("student-list-container");

  if (result.length > 0) {
    searchResults.innerHTML = result
      .map(
        (student, index) => `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.class}</td>
            <td>${student.dob}</td>
            <td>${student.age}</td>
            <td><img src="${student.Image}" alt="Student Image"></td>
            <td>${student.video}</td>
            <td>${student.sex ? "Nam" : "Nữ"}</td>
            <td>
              <button type="button" class="btn btn-warning" onclick="editStudent('${student.id}', true)">Sửa</button>
              <button type="button" class="btn btn-danger" onclick="deleteStudent('${student.id}', true)">Xóa</button>
              <button type="button" class="btn btn-secondary" onclick="cancelSearch()">Cancel</button>
            </td>
          </tr>`
      )
      .join("");
    searchResultsContainer.style.display = "block";
    searchResultsTitle.style.display = "block";
    studentListContainer.style.display = "none";
  } else {
    alert("No student found with the given name or ID.");
    searchResults.innerHTML = "";
  }
}

function cancelSearch() {
  document.getElementById("search-input").value = "";
  document.getElementById("search-results").innerHTML = "";
  document.getElementById("search-results-container").style.display = "none";
  document.getElementById("search-results-title").style.display = "none";
  document.getElementById("student-list-container").style.display = "block";
  displayStudents();
}

function sortStudents() {
  students.sort((a, b) => a.name.localeCompare(b.name));
  displayStudents();
}

function exitProgram() {
  alert("Exiting program...");
  window.close();
}

let isAdd = true;
let form = document.getElementById("formAdd");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const student = {
    id: document.getElementById("id").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    class: document.getElementById("class").value,
    dob: document.getElementById("dob").value,
    age: document.getElementById("age").value,
    Image: document.getElementById("image").files[0] ? URL.createObjectURL(document.getElementById("image").files[0]) : "",
    video: document.getElementById("video").files[0] ? URL.createObjectURL(document.getElementById("video").files[0]) : "",
    sex: document.getElementById("male").checked,
  };

  if (isAdd) {
    students.push(student);
  } else {
    const index = students.findIndex((stu) => stu.id === student.id);
    students[index] = student;
    isAdd = true;
    document.getElementById("id").readOnly = false;
    document.getElementById("btnAdd").innerText = "Add";
  }
  form.reset();
  renderStudent();
  hideForm(); // Hide form after submission
  document.getElementById("student-list-container").style.display = "block";
  document.querySelector(".mt-3").style.display = "flex";
});

function editStudent(idEdit, fromSearch = false) {
  const student = students.find((stu) => stu.id === idEdit);
  if (student) {
    document.getElementById("id").value = student.id;
    document.getElementById("id").readOnly = true;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("address").value = student.address;
    document.getElementById("class").value = student.class;
    document.getElementById("dob").value = student.dob;
    document.getElementById("age").value = student.age;
    // document.getElementById("image").value = student.Image;
    // document.getElementById("video").value = student.video;
    document.getElementById(student.sex ? "male" : "female").checked = true;
    showForm(); // Show form when editing
    document.getElementById("btnAdd").innerText = "Update";
    isAdd = false;
    if (fromSearch) {
      cancelSearch();
    }
    document.getElementById("student-list-container").style.display = "none";
    document.querySelector(".mt-3").style.display = "none";
  }
}

function deleteStudent(idDelete, fromSearch = false) {
  if (confirm("Are you sure you want to delete this student?")) {
    const index = students.findIndex((stu) => stu.id === idDelete);
    if (index !== -1) {
      students.splice(index, 1);
      if (fromSearch) {
        cancelSearch();
      } else {
        displayStudents();
      }
    }
  }
}

function renderStudent() {
  displayStudents();
}

renderStudent();

document.getElementById("search-button").addEventListener("click", searchStudent);
