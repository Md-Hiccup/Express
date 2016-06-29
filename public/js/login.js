/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function(){
    var email,pass;
    $("#login").click(function(){
        email=$("#email").val();
        pass=$("#password").val();
        if(email !== "" && pass !== "" ){
           $.post("http://localhost:3000/auth/login",{email:email,password:pass},function(data){
               if(data == 'done') {
                   alert('Email password is verified');
                     var url = "http://www.google.com" ;
                     $(location).attr('href',url);
                   //location.href = "http://localhost:3000/register";
                 //   window.location.href = "http://www.google.com";
               }
           }); 
        } else {
            
            $.get("http://localhost:3000/",function(data){
                alert('enter values');
                location.href = "http://localhost:3000/";
           });
        }
    });
    $("#signup").click(function(){

        $.get("http://localhost:3000/register" ,  function(data){
            location.href = "http://localhost:3000/register";
            // location.href = "http://www.google.com";
        });
    });
});