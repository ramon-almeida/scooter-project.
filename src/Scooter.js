const User = require("./User");

class Scooter {
  // scooter code here
 
  static nextSerial = 0

  constructor(station) {
    this.station = station;
    this.user = User
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
    this.currentStation = station;
  }
  rent(user) {
    if(this.charge > 20 && !this.isBroken) {
      this.currentStation = null
      return this.user = user
    } else if (this.charge < 20) {
      throw Error('Scooter needs to charge')
    } else if (this.isBroken) {
      throw Error('Scooter needs to repair')
    }
  } 
  dock(station) {
    this.station = station
    this.currentStation = station
    this.user = null
  }
  
}


module.exports = Scooter
