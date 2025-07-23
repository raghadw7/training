var form =document.getElementById("form");
var result = document.getElementById("result");
form.addEventListener("submit" ,function(event){
    event.preventDefault();
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var div = document.createElement('div');

    div.innerHTML=` <p>name: ${name}</p>
    <p>name: ${email}</p>
    `;
    result.appendChild(div)
console.log(name)
console.log(email)

});