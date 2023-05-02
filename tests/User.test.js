const User = require('../src/User')

// User tests here
describe('User Class', () => {
    test('creates a new User object with correct properties', () => {
        const username = 'Ramon';
        const password = 'Gains2023';
        const age = 22;
        const user = new User(username,password,age);

        expect(typeof user).toEqual('object');
        expect(user.username).toEqual(username);
        expect(user.password).toEqual(password);
        expect(user.age).toEqual(age);
    });
});   
describe('User Methods', () => {
// test login
test('should login user with correct password', () => {
    const user = new User('Ramon','Gains2023', 22 )
    user.logIn('Gains2023')
    expect(user.loggedIn).toBe(true)
})

// test logout
test('should logout user', () => {
    const user = new User('Ramon','Gains2023', 22 )
    user.logIn('Gains2023')
    user.logOut()
    expect(user.loggedIn).toBe(false);
})

})