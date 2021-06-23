const Intern = require("../lib/Intern");

test('can set school', function(){
    const school = 'U of M';
    const test = new Intern('name', 8, 'email@email.com', school);
    expect(test.school).toBe(school);
});

test('role() should return Intern', function() {
    const role = 'Intern';
    const test = new Intern ('name', 8, 'email@email.com', 'school');
    expect(test.role()).toBe(role);
});

test('getSchool() will return the school name', function() {
    const school = "U of M";
    const test = new Intern('name', 8, 'email@email.com', school);
    expect(test.getSchool()).toBe(school);
});