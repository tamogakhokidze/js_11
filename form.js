let formElement = document.getElementById("registration-form");
formElement.addEventListener('submit', function(event){
event.preventDefault();
let errors = {};

let form = event.target;

let username = document.getElementById("username-field").value;
// let username= document.querySelector("[name = username]").value;



if (username == ""||username.length  < 5 ){
    errors.username = " Username can not be empty and must be more than 5 charachters ";

}
let password1 = document.getElementById('password-field1').value;
let password2 = document.getElementById('password-field2').value;

if (password1 == ""){
errors.password = "password can not be empty";
}

if (password1 != password2){
    errors.password2 = "passwords do not match";
    }


    let agreeTerm = document.getElementById('agree').Checked;

    if (!agreeTerm){
errors.agree = "You must agree terms and conditions";

    }


    //radio
    let age = false;

form.querySelectorAll('[name = "age"]').forEach(element => {
    if (element.Checked) {
age = true;
    }
});

if (!age){
errors.age = " Please select your age"
}
console.log(errors);



document.querySelectorAll('.error-text').forEach(element => {
    element.innerText = " "; 

});
    
//errors object

for (const item in errors) {
   console.log(item);//item == errors keys 
   let errorText = document.getElementById('error -' + item);


   if (errorText){
errorText.textContent = errors[item];// bracket notation რადგან დინამიურია 
   }
}

});

// let errors= {
// age:" Please select your age"
// agree: "You must agree terms and conditions"
// password: "password can not be empty"
// username: " Username can not be empty and must be more than 5 charachters "
// }

// errors key = input name attribute values



//თუ ერორს ობიექტი არის ცარიელი, მაშნ ჩვენი ფორმა უნდა დავასაბმითოთ - საბმით ფორმის ფუნქციონალის ამუშავება 
//ობიექტი ცარიელია თუ არა, ლენგზს ვერ გამოიყენებ. მეთოდი, რომლითაც მასიცავ გვიბრუნებს ობიექტის key,
//თუ length = 0, form დასაბმითდეს

