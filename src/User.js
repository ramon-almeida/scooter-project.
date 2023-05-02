class User {
  // User code here
  
  constructor(username, password,age) {
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }
  logIn(password) {
    if (password === this.password) {
      this.loggedIn = true
    } else {
      this.loggedIn  = false
   }
  }
  logOut() {
    this.loggedIn = false
  }


}

module.exports = User
