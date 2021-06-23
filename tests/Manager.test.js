const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test('can set office number', function(){
    const office = 10;
    const test = new Manager('name', 8, 'email@email.com', office);
    expect(test.officeNumber).toBe(office);
});

test('role() should return Manager', function() {
    const role = 'Manager';
    const test = new Manager('name', 'email', 8);
    expect(test.role()).toBe(role);
});

test('getOffice() will return the office number', function(){
    const office = 8;
    const test = new Manager('name', 8, 'email', office);
    expect(test.getOfficeNuber()).toBe(office);
});