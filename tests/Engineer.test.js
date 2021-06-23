const Engineer = require("../lib/Engineer");

test("can set github for engineers", function () {
    const github = "github name";
    const test = new Engineer('name', 8, 'email@email.com', github)
    expect(test.github).toBe(github);
});

test("role() should return Engineer", function() {
    const role = "Engineer";
    const test = new Engineer('name', 8, 'email@email.com', 'github');
    expect(test.role()).toBe(role);
});

test('gitHub() should return the github name', function() {
    const gitHub = 'username';
    const test = new Engineer('name', 8, 'email@email.com', gitHub);
    expect(test.gitHub()).toBe(gitHub);
});
