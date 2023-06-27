type Person = {
    name: string;
    age: number;
   
  };
  
  type Studying = {
    semester: number;
  };
  
  type Student = {
    id: string;
    age: number;
    semester: number;
  };


  class BigPerson implements Person {
    name: string;
    age: number;
    constructor (name: string, age: number) { this.name = name;this.age = age;}

    about() : void {
        console.log(this.name +" is intelligent .. for age :"+ this.age)
    }
  }
  
  function createPerson() {
    return { name: "Sam", age: 31, semester: 25, id: "ST123" };
  }
  
  function printPerson(person: Person) {
    console.log(person.name, person.age);
    return person;
  }

  
  
  function studyForAnotherSemester(student: Studying) {
    student.semester++;
    console.log("Student semester increased to:",student.semester)
  }
  
  function isLongTimeStudent(student: Student) {
    return student.age - student.semester / 2 > 30 && student.semester > 20;
  }
  
  const me = createPerson();
  const bigMe = new BigPerson("Tom",30);
  
  if (bigMe instanceof BigPerson) {
    console.log("bigMe is of type 'BigPerson' :"+bigMe.about());
}

  // All work!
  let temp1 = printPerson(me);
  console.log("typeof(temp1) :"+typeof(temp1)) // object

  let temp = studyForAnotherSemester(me);
  console.log("typeof(temp) :"+typeof(temp)) // underfined
  isLongTimeStudent(me);