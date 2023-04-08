const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(){
   const newArray = drivers.slice(0,2)
  return newArray
}
console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers = function(){
    const lastTwo = drivers.slice(2,4)
    return lastTwo
  }

  const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

  

  const createFareMultiplier = (integer) => { 
    const fareMultiplier = () => integer**2
    return fareMultiplier}

  const fareDoubler = (fares) => {
     return fares * 2 
    }

const fareTripler = fares => fares * 3

const selectDifferentDrivers = (drivers,func) => {
    if (func === returnFirstTwoDrivers){return returnFirstTwoDrivers()}
    else return returnLastTwoDrivers()
  
  }
  
  