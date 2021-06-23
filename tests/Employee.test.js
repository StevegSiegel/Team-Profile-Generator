const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

test("can set employee name", function(){
    const name = "steve";
    const test = new Employee(name);
    expect(test.name).toBe(name);
});

test("can set employee email", function() {
    const email = "email@email.com";
    const test = new Employee('name', 8, email);
    expect(test.email).toBe(email);
});

test("can set employee id", function() {
    const id = 8;
    const test = new Employee('name', id);
    expect(test.id).toBe(id);
});

test('role() should return "Employee"', function() {
    const role = 'Employee';
    const test = new Employee ('steve', 8, 'email@email.com');
    expect(test.role()).toBe(role);
});
