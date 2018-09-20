$(document).ready(function() {
    //메뉴
    $("#hd #gnb_bt").click(function() {
        $("#gnb").toggleClass("act");
        $(this).toggleClass("on");
    });
    
//    $("#hd #gnb_bt").click(function() {
//        $("#gnb").removeClass("act");
//    });
    
    $("#gnb .menu>li").mouseover(function() {
        $(this).find(".submenu").stop().slideDown(600);
        $(this).siblings().find(".submenu").stop().slideUp(600);
    });
    
    $("#gnb .menu>li").mouseout(function() {
        $(this).find(".submenu").stop().slideUp(500);
    });
    
    //슬라이드
    var wd = parseInt($("#vs").width());
    var sw = true;
    var intv = setInterval(function() { nAni(); }, 3000);
    
    function nAni() {
        $("#vs .imgBox").not(":animated").animate({"margin-left":-wd+"px"}, 800, function() {
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_paging .btn").removeClass("on");
            $("#vs .btn_paging .btn").eq(0).appendTo($("#vs .btn_paging"));
            $("#vs .btn_paging .btn").eq(0).addClass("on");
        });
    }
    
    $("#vs .btn_paging .btn").click(function() {
        clearInterval(intv);
        var idx = $(this).index();
        for (var i = 0;i<idx-2; i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_paging .btn").eq(0).appendTo($("#vs .btn_paging"));
        }
        nAni();
        intv = clearInterval(function() { nAni(); }, 3000);
    });
});