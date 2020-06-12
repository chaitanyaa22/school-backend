SCHOOL MANAGEMENT REST API

heroku link: https://schools-mgmt.herokuapp.com/
local: http://localhost:3500


Example admin account:
    email : admin@school.com
    password : admin

1) MONGODB used for Database
2) Node.js and Express router for routing
3) Bcrypt for password Hashing
4) MVC Structure

NOTE: password for teacher is first name of that teacher in lowercase and subject of that teacher in lowercase combined
    For Eg. name: John Doe & subject: Science = password: johnscience


ENDPOINTS:

    ADMIN:

        Sign up : POST : /admin/signup
        request properties : name, email, password

        Log In : POST : /admin/login
        request properties : email, password

        Register a student : POST : /admin/addstudent
        request properties : name, phone, class, section, rollNo, parentName, parentPhone

        Register a teacher : POST : /admin/add/teacher
        request properties : name, email, subject

        retrieve teachers and students data : GET : /admin/getdata
    
    STUDENT:

        Log In : POST : /student/login
        request properties : phone, otp
    
    TEACHER:

        Log In : POST : /teacher/login
        request properties : email, password

    PARENT:

        Log In : POST : /parent/login
        request properties : parentPhone, otp





        





