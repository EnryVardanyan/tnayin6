

// function Car(model, milesPerGallon){
//   this.model = model
//   this.milesPerGallon = milesPerGallon
//   this.tank = 0
//   this.odometr = 0
// }

// Car.prototype.fill = function(gallons){
//   this.tank = gallons 
// }
// Car.prototype.drive = function(kilometer){
//   kmsToMiles = kilometer/1.6
//   if(this.milesPerGallon * this.tank >= kmsToMiles){
//     this.odometr += kilometer
//     this.tank -= kmsToMiles / this.milesPerGallon
//   }
//   else {
//     this.odometr += this.tank * this.milesPerGallon
//     this.tank = 0
//     return `"I ran out of fuel at ${this.odometr} miles!"`
//   }
// }
// let hyundai = new Car("Elantra", 30)
// hyundai.fill(10)
// console.log(hyundai.drive(500))
// hyundai.fill(10)
// hyundai.drive(30)
// console.log(`${hyundai.tank}, `, hyundai.odometr)

