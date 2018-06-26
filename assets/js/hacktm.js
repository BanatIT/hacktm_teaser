function switchYear() {
    var values = [4,5,6,7,8,'?'];
    var index = 0;
    var switchInt = setInterval( function(){ 
        //alert("Hello"); 

        $("#last-digit").fadeTo("slow" , 0.1, function() {
            $(this).html(values[index]).show(100);
            $("#last-digit").fadeTo("slow" , 1, function(){});
        });

        index++;
        if(index == values.length) {
            $('#last-digit').addClass('who-knows');
            clearInterval(switchInt);
        }
    }, 2000);
}

switchYear();