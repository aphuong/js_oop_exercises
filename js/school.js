// 6. Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
  console.log("----------", "Exercise 6", "----------");


  function Person(fn, ln){
    this.fname = fn;
    this.lname = ln;
    this.getName = function(){
      return fn + " " + ln
    }
  }

  function Teacher(id, office){
    this.teacherID = id;
    this.office = office;
    this.isTeacher = true;
    this.isStudent = false;
  }

  function Student(id, classParam){
    this.studentID = id;
    this.classroom = classParam;
    this.isTeacher = false;
    this.isStudent = true;
  }

  function School(schoolName, member){
    this.schoolName = schoolName;
    this.students = [];
    this.teachers = [];
    this.addMember = function(x){
      if(x.isTeacher){
        // .push adds to the array
        this.teachers.push(x);
        // alert("member added: " + x.getName() + " Type: Teacher");
      } else if(x.isStudent){
        this.students.push(x);
        // alert("member added: " + x.getName() + " Type: Student");
      }

    }
  }

// use prototype to extend teacher to be a person
  Teacher.prototype = new Person("Al", "Olsen");
  var teacherOne = new Teacher("n1", 1);
// test both person and teacher functions
  console.log(teacherOne.fname);
  console.log(teacherOne.office);


  Teacher.prototype = new Person("Zach", "Feldman");
  var teacherTwo = new Teacher("n1", 1);


  Student.prototype = new Person("Abby", "Ryan");
  var studentOne = new Student("s1", "Prospect");
  console.log(studentOne.fname);
  console.log(studentOne.classroom);

  Student.prototype = new Person("Anh", "LaRusso");
  var studentTwo = new Student("s2", "Prospect");


  var NYCDA = new School("NYCDA");
  console.log(NYCDA.schoolName);

  NYCDA.addMember(teacherOne);
  NYCDA.addMember(studentOne);
  NYCDA.addMember(teacherTwo);
  NYCDA.addMember(studentTwo);

  console.log(NYCDA.students[0]);
  console.log(NYCDA.students[0].getName());

  console.log(NYCDA.students[1]);
  console.log(NYCDA.students[1].getName());

  
  console.log(NYCDA.teachers[0].getName());