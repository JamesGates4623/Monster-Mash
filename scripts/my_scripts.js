
$(document).ready(function() {

    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
    
    
    
    lightning_one();
    lightning_two();
    lightning_three();
    
    $("#head").click (function() {
        if (headclix < 9) {
            $(this).animate({left:"-=367px"},500)
            headclix += 1;
        }
        else{
            $(this).animate({left:"0px"},500)
            headclix = 0;    }
           playThunder(); 
    });
    $("#head").on("contextmenu", function(e) {
        e.preventDefault();
        if (headclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            headclix -= 1;
        }
        return false;
    });
        
     $("#eyes").click(function() {
         if (eyeclix < 9) {
            $(this).animate({left:"-=367px"},500)
            eyeclix += 1;
        }
        else{
            $(this).animate({left:"0px"},500)
            eyeclix = 0;    }
            
    });
    $("#eyes").on("contextmenu", function(e) {
        e.preventDefault();
        if (eyeclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            eyeclix -= 1;
        }
        return false;
    });
        $("#nose").click(function() {
          if (noseclix < 9) {
            $(this).animate({left:"-=367px"},500)
            noseclix += 1;
                        }
          else{
            $(this).animate({left:"0px"},500)
            noseclix = 0;    }
            
    });
    $("#nose").on("contextmenu", function(e) {
        e.preventDefault();
        if (noseclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            noseclix -= 1;
        }
        return false;
    });
         $("#mouth").click(function() {
          if (mouthclix < 9) {
            $(this).animate({left:"-=367px"},500)
            mouthclix += 1;
                                }
            else{
            $(this).animate({left:"0px"},500)
                mouthclix = 0;    }
                
    });
    $("#mouth").on("contextmenu", function(e) {
        e.preventDefault();
        if (mouthclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            mouthclix -= 1;
        }
        
    });
    }); 
    
    function lightning_one(){
        $("#container #lightning1").fadeIn(250).fadeOut(250);
        setTimeout("lightning_one()",4000);
    };
    function lightning_two(){
        $("#container #lightning2").fadeIn(250).fadeOut(250);
        setTimeout("lightning_two()",5000);
    };
    function lightning_three(){
        $("#container #lightning3").fadeIn(250).fadeOut(250);
        setTimeout("lightning_three()",7000);
        playThunder();
    };
    
    function playThunder() {
        console.log("PlayThunder in"); 
        $('#thunder').get(0).playbackRate = 2;
        $('#thunder').get(0).muted = false; 
        $('#thunder').get(0).play();
        console.log("PlayThunder out."); 
      
      }