// Your code here
function createEmployeeRecord(employeeInfo) {
 return {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: [],
    
  }
}

//function createEmployeeRecords(employeeInfo) {
//    return employeeInfo.map(employeeInfo => createEmployeeRecord(employeeInfo));
//  }

function createEmployeeRecords(employeeInfo){
    return employeeInfo.map(createEmployeeRecord)
    
}

function createTimeInEvent(record, timeStamp){
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(timeStamp.split(" ")[1]),
        date: timeStamp.split(" ")[0]
    }
    record.timeInEvents.push(timeIn)
    return record
  }

  function createTimeOutEvent(record, timeStamp){
    const timeOut = {
        type: "TimeIn",
        hour: parseInt(timeStamp.split(" ")[1]),
        date: timeStamp.split(" ")[0]
    }
    record.timeOutEvents.push(timeOut)
    return record
  }

  function hoursWorkedOnDate(record, date){
    let hours = []
    record.timeOutEvents.map(e => {
        if(e.date === date){
            hours.push(e.hour)
    }
    })
    
    record.timeInEvents.map(e => {
        if(e.date === date){
            hours.push(e.hour)
        }
    })

    console.log(hours)
    return (hours[0] - hours[1]) * 0.01

  }

function wagesEarnedOnDate(record, date){
    const hours = hoursWorkedOnDate(record, date)
    const rate = record.payPerHour
    return hours * rate
  }
  
  function allWagesFor(record){
    console.log(record)
    const dates = []
    const wages = []
    record.timeInEvents.map(e => dates.push(e.date))
    dates.map(date => wages.push(wagesEarnedOnDate(record, date)))
    return wages.reduce((a, b) => a+b)
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
  }
  
  function calculatePayroll(thisArg){
    const wages = []
    thisArg.map(record => {
        wages.push(allWagesFor(record))
    })
    return wages.reduce((a, b) => a+b)
  }
  