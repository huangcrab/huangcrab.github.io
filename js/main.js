

$(window).load(function(){
    $('.loading').delay(1000).fadeOut();
});

$(document).ready(function(){
    onload();

    $("#about").click(function(){
        $(".header-content").hide();
        $(".header-content-about").fadeIn();
    });
    $("#home").click(function(){
        $(".header-content-about").hide();
        $(".header-content").fadeIn();
        
    });
    
    $("#projects,#projects-about").click(function(){
        $(".header-overlay").fadeOut();
        $(".header-overlay-about").fadeOut();
        $(".header-content").hide("slide",{direction:"left"},1500);
        $(".header-content-about").hide("slide",{direction:"left"},1500);
        $(".fullscreen-video-wrap video").fadeOut(1500)
        .delay(500)
        .queue(function(next) { $(this).attr('src','assets/project2.mov'); next(); })
        .delay(500)
        .fadeIn(500); 
        $(".projects").delay(1500);
        $(".projects").fadeIn(2000);
    });

    $("#close").click(function(){
        $(".projects").fadeOut(500);
        $(".header-content").delay(500);
        $(".projects").hide();
        $(".fullscreen-video-wrap video").fadeOut(1500)
        .delay(600)
        .queue(function(next) { $(this).attr('src','assets/video.mp4'); next(); })
        .delay(500)
        .fadeIn(500); 
        $(".header-content").show("slide",{direction:"right"},1500);
    })

    $("#next").click(function(){
        moveDown();

    });
    $("#prev").click(function(){
        moveUp();
    })

});
var projects = document.querySelectorAll(".project");
var array=[];

function moveDown(){
    var nextKey;
    var num = $(".active").attr("id");
    $.each(projects, function(key, value){
        if(num == value.id){
            nextKey = key + 1;
            if(nextKey >= projects.length){
                nextKey = 0;
            }
        }  
    })
    var next = $("#"+projects[nextKey].id);
    var current = $('#'+num);
    $("#next").fadeOut(10);
    $("#prev").fadeOut(10);
    current.hide("slide",{direction:"left"},1500)
        .queue(function(next) { $(this).removeClass("active"); next(); })
        ;
    next.delay(1500);   
    next.fadeIn(500).queue(function(next){$(this).addClass("active"); next(); })
        ;
    $("#next").delay(1500);
    $("#prev").delay(1500);
    $("#next").fadeIn();
    $("#prev").fadeIn();
}

function moveUp(){
    var nextKey;
    var num = $(".active").attr("id");
    $.each(projects, function(key, value){
        if(num == value.id){
            nextKey = key - 1;
            if(nextKey < 0){
                nextKey = projects.length - 1;
            }
        }  
    })
    var next = $("#"+projects[nextKey].id);
    var current = $('#'+num);
    $("#next").fadeOut(10);
    $("#prev").fadeOut(10);
    current.hide("slide",{direction:"right"},1500)
        .queue(function(next) { $(this).removeClass("active"); next(); })
        ;
    next.delay(1500);   
    next.fadeIn(1500).queue(function(next){$(this).addClass("active"); next(); })
        ;
    $("#next").delay(1500);
    $("#prev").delay(1500);
    $("#next").fadeIn();
    $("#prev").fadeIn();
}


function onload(){
    $(".projects").hide();
    $(".header-content-about").hide();
}