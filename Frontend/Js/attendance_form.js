const link ="http://localhost:7000/attendance"

//Create a new student
const enterAttendance = (employee) => {
  const employeeData = JSON.stringify(employee);
  fetch(link, { 
      method: "POST", 
      
      body: employeeData,
      headers: {
       "Accept": "application/json",
       "Content-Type": "application/json"
      }
  })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
      })
    .catch((error)=>{console.log(error)});
  }


const fullNameInput = document.getElementById('fullName')
const emailInput= document.getElementById('email')
const time_inInput = document.getElementById('time_in')
const saveBtn = document.getElementById('submitBtn')

const getElementValue = (element) => {
    return element.value
}

saveBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const fullNameValue = getElementValue(fullNameInput)
    const emailValue = getElementValue(emailInput)
    const time_inValue = getElementValue(time_inInput)

    const employee = { fullName: fullNameValue, email: emailValue, time_in: time_inValue }
    enterAttendance(employee)
     
})