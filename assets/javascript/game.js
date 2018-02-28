



    $(document).ready(function() {
     

      
      
        var min = 19;
        var max = 120;
        
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
     $(".randnum").append(random);


     var gem1min = 1;
     var gem1max = 10;
     var gem1random = Math.floor(Math.random() * (gem1max - gem1min + 1)) + gem1min;
     console.log("gem1random:",gem1random)
  $("#gem1").append(gem1random);

  var gem2min = 1;
     var gem2max = 10;
     var gem2random = Math.floor(Math.random() * (gem2max - gem2min + 1)) + gem2min;
     console.log("gem2random:",gem2random)
  $("#gem2").append(gem2random);

  var gem3min = 1;
     var gem3max = 10;
     var gem3random = Math.floor(Math.random() * (gem3max - gem3min + 1)) + gem3min;
     console.log("gem3random:",gem3random)
  $("#gem3").append(gem3random);

  var gem4min = 1;
     var gem4max = 10;
     var gem4random = Math.floor(Math.random() * (gem4max - gem4min + 1)) + gem4min;
     console.log("gem4random:",gem4random)
  $("#gem4").append(gem4random);

  
  var curnum = 0
  $(".curnum").text(curnum);
  
  $("#gem1").click(function(){
        
    curnum = curnum +gem1 ;
   console.log(curnum)
 }); 






    });

    

 