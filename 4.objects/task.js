function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let students = [
  new Student("Alex", "male", 24),
  new Student("Masha", "female", 26),
  new Student("Petr", "male", 27)
];
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMarks = function(...marks) {
  if ("marks" in this) {
    this.marks = [...this.marks, ...marks];
  }
}
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);
}
Student.prototype.exclude = function(reason) {
  delete this.marks && this.subject;
  this.excluded = reason;
}