// Lab2  Task 1

function student (std_name,std_class, std_gpa)
{
    this.std_name = std_name;
    this.std_class = std_class;
    this.std_gpa = std_gpa;
    
}

function creat()
{
    // creat an objects 
   let s1=new student("Jhon", 11, 2.2);
   let s2=new student("Bob", 12, 3.8);
   let s3=new student("Alice", 13 ,3.2);


   console.log("1st Student Name")
   console.log(s1.std_name)
   console.log("**************")

   console.log("2nd Student Name")
   console.log(s2.std_name)
   console.log("**************")

   console.log("3rd Student Name")
   console.log(s3.std_name)
   console.log("**************")

   console.log("1st Student Info")
   console.log(s1)
   console.log("**************")

   console.log("2nd Student Info")
   console.log(s2)
   console.log("**************")

   console.log("3rd Student Info")
   console.log(s3)
   console.log("**************")

   return [s1,s2,s3];
}

let students= creat();

// using filter Function
var newarray =students.filter(function (k1){
    return k1.gpa>3
});
console.log("Students with GPA Above 3")
console.log(newarray)
