const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter class', () => {
  test('creates a new Scooter object with correct properties', () => {
    const station = 'Station 1';
    const scooter = new Scooter(station);

    expect(typeof scooter).toEqual('object');
    expect(scooter.station).toEqual(station);
    expect(scooter.user).toBe(User);
    expect(typeof scooter.serial).toEqual('number');
    expect(scooter.charge).toEqual(100);
    expect(scooter.isBroken).toEqual(false);
  });
});

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test('should rent scooter to user if the scooter is not broken and has enough charge', () => {
    const scooter = new Scooter('Station B');
    const user = new User('John', 'password', 25)
    scooter.charge = 15
    scooter.isBroken = false
    scooter.rent(user)
    expect(scooter.user).toBe(user)
    expect(scooter.currentStation).toBe(null)
  });
  //dock method
  test('can be docked at a station and clear out user', () => {
    const scooter = new Scooter('Station B');
    const user = new User('John', 'password', 25);
    scooter.rent(user);
    scooter.dock('Station C');
    expect(scooter.station).toEqual('Station C');
    expect(scooter.user).toBe(null);
  });

  //requestRepair method

  //charge method

})
