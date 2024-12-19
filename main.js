function validatte(e){
    e.preventDefault()
    var one =document.getElementById("one").value;
    var two =document.getElementById("two").value;
    var three = document.getElementById("three").value;
    if(one==""){
    document.getElementById("p1").innerHTML="Please enter email"}
    else if(two==""){
     document.getElementById("p2").innerHTML = "Please enter password" }
     else if(three!=two){
        document.getElementById("p3").innerHTML = "Please enter  same password"

     }

}