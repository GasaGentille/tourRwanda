$(document).ready(function() {
    
$("#p1").hide();
    $("#img1").animate({opacity:5});
    $("#img1").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p1").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p1").fadeOut();
        });

        $("#p2").hide();
    $("#img2").animate({opacity:5});
    $("#img2").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p2").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p2").fadeOut();
        });

        $("#p3").hide();
    $("#img3").animate({opacity:5});
    $("#img3").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p3").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p3").fadeOut();
        });

        $("#p4").hide();
    $("#img4").animate({opacity:5});
    $("#img4").hover(function(){
        $(this).stop().animate({opacity:0.3});
        $("#p4").fadeIn();
        },
        function(){
            $(this).stop().animate({opacity:1});
            $("#p4").fadeOut();
        });
        $("#book").click(function() {
            alert("Thanks for the book");
          });
    });
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-north");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// ktdjhtdfhkdfhkchkuio
// ;khugjvilb
