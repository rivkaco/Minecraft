var minecraft = {};
minecraft.size= 20;
minecraft.matrix = [];

minecraft.createBoard = function() {

	for (var rows = 0; rows < minecraft.size; rows++) {
        for (var columns = 0; columns < minecraft.size; columns++) {
            $("#container").append("<div class='block'></div>");
        }
    }
    $(".block").width(500/minecraft.size);
    $(".block").height(500/minecraft.size);


	for (var i =0; i<minecraft.size; i++) {
		minecraft.matrix.push(Array(minecraft.size));
	}
	    minecraft.block = $('.block');

	for(var i=0;i<minecraft.matrix.length;i++){
        for(var j=0;j<minecraft.matrix[i].length;j++){
            //because gave boxes all the same class name, so here grabbing all that have classname boxes
            // grabbing 9 boxes 
            //.eq allows me to refer to indices of what i grabbed.
            minecraft.block.eq(i*20+j)
                .data("i",i)
                .data("j",j).addClass(i+'-'+j); 

                // .data("j",j).addClass(i+'-'+j).click(myFunc); 
                //and here the myFunc will run when i click this cell. 
        }
    }
		
    for (var i = 15; i< 20; i++) {
    	for (var j= 0; j< 20; j++) {
    		$("."+i + '-' +j).addClass("dirt");
    	}
    }
    for (var i = 14; i< 15; i++) {
    	for (var j= 0; j< 20; j++) {
    		$("."+i + '-' +j).addClass("grass");
    	}
    }
    $("."+12 + '-' +4).addClass("leaf");
    $("."+13 + '-' +3).addClass("leaf");
    $("."+13 + '-' +4).addClass("leaf");
    $("."+13 + '-' +5).addClass("leaf");
    $("."+10 + '-' +15).addClass("leaf");
    $("."+10 + '-' +16).addClass("leaf");
    $("."+10 + '-' +17).addClass("leaf");
    $("."+9 + '-' +15).addClass("leaf");
    $("."+9 + '-' +16).addClass("leaf");
    $("."+9 + '-' +17).addClass("leaf");
    $("."+8 + '-' +15).addClass("leaf");
    $("."+8 + '-' +16).addClass("leaf");
    $("."+8 + '-' +17).addClass("leaf");


    $("."+11 + '-' +16).addClass("tree");
    $("."+12 + '-' +16).addClass("tree");
    $("."+13 + '-' +16).addClass("tree");

     $("."+13 + '-' +13).addClass("rock");
     $("."+13 + '-' +14).addClass("rock");
     $("."+13 + '-' +19).addClass("rock");


};

// minecraft.createMenu = function() {
 
//  $('<div>', { 
//     id: 'outsidediv'
// }).append( $('<div>', { 
//     id: 'innerdiv'
// })).appendTo('#menu');
// // $('#menu').append(
// //   $('<div/>')
// //     .attr("id", "menuPickaxe")
// //     .addClass("menuItem")
// //     .append("<span/>")
// //       .addClass("menuText")
// //       .text("PICKAXE")
// //   );

// // $('#menu').append(
// //   $('<div/>')
// //     .attr("id", "menuAxe")
// //     .addClass("menuItem")
// //   );

// // $('#menu').append(
// //   $('<div/>')
// //     .attr("id", "menuShovel")
// //     .addClass("menuItem")
// //   );


// };

$(document).ready(function () {
    minecraft.createBoard();
    // minecraft.createMenu();
});