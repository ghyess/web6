$(document).ready(function() {
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(sct>=500){
            $("#hd").addClass("act");
        } else {
             $("#hd").removeClass("act");
        }
    });
});