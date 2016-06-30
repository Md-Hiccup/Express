/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function(){
    var fname , lname , email , pass;
    $("#register").click(function(){

        fname=$("#firstname").val();
        lname=$("#lastname").val();
        email=$("#email").val();
        pass=$("#password").val();
        if(fname !== "" && lname !== "" && email !== "" && pass !== ""){
            $.post("/auth/register",
                {   
                    firstname:fname , 
                    lastname:lname ,
                    email:email ,
                    password:pass
                },
                function(data){  
                    if(data == 'done') {
                        alert("your email is registered");
                        location.href = "/login";
                       // location.href = "http://www.google.com";
                    }
                });
        } /* else {
            $.get("http://localhost:3000/register",function(data){
                  location.href = "http://localhost:3000/register";
            });
        }*/
    });
    $("#login").click(function(){

        $.get("/login" ,  function(data){
            location.href = "/login";
            // location.href = "http://www.google.com";
        });
    });
});