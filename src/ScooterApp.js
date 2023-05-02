const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      'Station A': [],
      'Station B': [],
      'Station C': []
    };
    this.registeredUsers = {};
  }
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('User already registered');
    } else if (age < 18) {
      throw new Error('User too young to register');
    } else {
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log(`User ${username} registered`);
      return user;
    }
  
  }
  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || !user.logIn(password)) {
      throw new Error("Username or password is incorrect");
    }
    console.log(`User ${username} has been logged in`);
  }




}

module.exports = ScooterApp
