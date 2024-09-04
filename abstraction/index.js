function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1000;

    let calculateFinalSalary = function() {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is :' + finalSalary);
    }

    this.getEmpDetails = function () {
        console.log('name : ' + this.name+' | Age : ' + this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();
//emp1.calculateFinalSalary();