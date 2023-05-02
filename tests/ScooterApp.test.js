const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
const app = new ScooterApp();

// register user
describe('registeredUsers', () => {
    test('should register a new user', () => {
        const user = app.registerUser('RamonAlmeida', 'password', 20);
        expect(user).toBeInstanceOf(User);
        expect(user.username).toBe('RamonAlmeida');
        expect(user.password).toBe('password');
        expect(user.age).toBe(20);
        expect(app.registeredUsers['RamonAlmeida']).toBe(user);
    });
});

// log in
describe('loginUser', () => {
    test('should log in a registered user', () => {
        app.registerUser('Ramon', 'password', 20);
        app.loginUser('Ramon', 'password',);
        expect(app.registeredUsers['Ramon'].loggedIn).toBe(true);
    });

    test('should throw an error if username is incorrect', () => {
        expect(() => {
            app.loginUser('NonExistentUser', 'password');
        }).toThrowError('Username or password is incorrect');
    });

    test('should throw an error if password is incorrect', () => {
        app.registerUser('Ramon1', 'password', 20);
        expect(() => {
            app.loginUser('Ramon1', 'wrongpassword');
        }).toThrowError('Username or password is incorrect');
    });
});
// log out

// rent scooter

// dock scooter
