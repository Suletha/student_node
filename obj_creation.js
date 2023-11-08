const student = {
    name:'Suletha',
    age: 30,
    greet() {
        console.log('my name is  ' + this.name + ' and my age is ' + this.age);
    }
};
//console.log(student);
console.log(student.greet());
