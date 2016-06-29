/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function() {
    $("#logout").click(function () {

        $.get("http://localhost:3000/logout", function (data) {
            if (data == 'done') {
            //    alert('location');
                location.href = "http://localhost:3000/";
               //  location.href = "http://www.google.com";
            }
        });
    });
});