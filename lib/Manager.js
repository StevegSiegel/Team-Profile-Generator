const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    getOfficeNuber() {
        return this.officeNumber;
    }
}

module.exports = Manager;