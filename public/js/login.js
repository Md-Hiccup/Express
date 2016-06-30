/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function(){
    var email,pass;
    $("#login").click(function(){
        email=$("#email").val();
        pass=$("#password").val();
        alert("Lion king");
        if(email !== "" && pass !== "" ){
           $.post("/auth/login",
               {
                   email : email,
                   password :pass  },
                 function(data){
                     if(data === 'done') {
                         url = "/register";
                         window.location.replace("http://www.google.com");
                         alert('Email & password is verified ');
                         //$(location).attr('href',"http://www.google.com");
                         //window.location.href = url;
                         setTimeout(document.location = "/register", 3000);
                         alert(document.location);
                     }
                  }); 
           } else {            
            $.get("/login",function(data){
                alert('Enter values');
                location.href = "/login";
           });
        }
    });
    $("#register").click(function(){

        $.get("/register" ,  function(data){
            location.href = "/register";
            // location.href = "http://www.google.com";
        });
    });
});