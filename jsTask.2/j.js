var x = prompt('enter users numbers')
var arr =[]
var num=Number(x)
function addUser(num){
    for(var i=0;i<num;i++){
        var name = prompt('enter name')
        var id = prompt('enter id')
        var balance = prompt('enter balance')
        arr.push({Name:name , Id:id , Balance:balance})
    }
    console.table(arr)
}
addUser(num)

var idEditing = prompt("enter id to edit balance")
var newBalance = prompt("enter your balance")
function edituserbalance(idEditing , newBalance){
    var element = arr.find((item)=> item.Id == idEditing)
    element.Balance = newBalance;
    console.table(arr)
}
edituserbalance(idEditing,newBalance)
var deleteid = prompt("inter id to remove")
function delet(deleteid){
    var deletindex = arr.findIndex((item)=> item.Id == deleteid)
    arr.splice(deletindex , 1)
    console.table(arr)
}
delet(deleteid)
  