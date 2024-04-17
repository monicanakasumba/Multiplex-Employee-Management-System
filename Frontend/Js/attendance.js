const link ="http://localhost:7000/attendance"

//fetching all the todos

const fetchAllEmployees = (employees) => {
    const employeeData = JSON.stringify(employees);
    fetch(link, {
        method: "GET",
        body: employeeData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => { 
            data.forEach((employees) => {
                
                listEmployees(employees)
            })
        })
        .catch((error) => { console.log(error) })
        
}
fetchAllEmployees();//invoking the fetchAll students funtion

//creating dymanic table
const tableBody = document.getElementById("tableBody")

const listStudents = (employees) => {
    const { fullName, email, age } = student
    
   
    const tableRow = document.createElement("tr")

    const firstNameTd = document.createElement("td")
    firstNameTd.innerHTML = firstName
    tableRow.appendChild(firstNameTd)

    const lastNameTd = document.createElement("td")
    lastNameTd.innerHTML = lastName
    tableRow.appendChild(lastNameTd)

    const emailTd = document.createElement("td")
    emailTd.innerHTML = email
    tableRow.appendChild(emailTd)

    const ageTd = document.createElement("td")
    ageTd.innerHTML = age
    tableRow.appendChild(ageTd)

tableBody.appendChild(tableRow)

}