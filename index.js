 const employee = {
    name: ' Ahmet',
    streetAdress: 'Ecem'
 }


 function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj
 }


 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
 }

 function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedValue, ...newEmployee } = employee;
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey( employee, key ) {

    delete employee[key]
    return employee 
       
  }