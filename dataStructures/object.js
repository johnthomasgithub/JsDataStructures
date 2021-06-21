const person = {
    Firstname: "john",
    Lastname: "thomas",
    age: 21,
    company: "Sforth",
    hobbies:['bike','learning','sleeping'],
    print(){
        console.log(this.age);
    }
}

// console.log(person.hobbies[0]);

// person.Lastname = 'tim';
// console.log(person.Lastname);

// delete person.Lastname;
// console.log(person);

// console.log(person.print());
person.print();
