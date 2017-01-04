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
         
            minecraft.block.eq(i*20+j)
                .data("i",i)
                .data("j",j).addClass(i+'-'+j); 

                // data("j",j).addClass(i+'-'+j).click(clickOnCanvas); 
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

     $("."+5 + '-' +6).addClass("cloud");
     $("."+6 + '-' +4).addClass("cloud");
     $("."+6 + '-' +5).addClass("cloud");
     $("."+6 + '-' +6).addClass("cloud");
     $("."+6 + '-' +7).addClass("cloud");
     $("."+6 + '-' +9).addClass("cloud");
     $("."+6 + '-' +10).addClass("cloud");
     $("."+7 + '-' +3).addClass("cloud");
     $("."+7 + '-' +4).addClass("cloud");
     $("."+7 + '-' +5).addClass("cloud");
     $("."+7 + '-' +6).addClass("cloud");
     $("."+7 + '-' +7).addClass("cloud");
     $("."+7 + '-' +8).addClass("cloud");
     $("."+7 + '-' +9).addClass("cloud");
     $("."+7 + '-' +10).addClass("cloud");
     $("."+8 + '-' +7).addClass("cloud");
     $("."+8 + '-' +8).addClass("cloud");

};

minecraft.createMenu = function() {

$('#menu').append(
    $('<div/>', {'class': 'menuItem'}, {'id': 'pickaxe'}).on("click", minecraft.clickOnTool()).append(
        $('<div/>', {'class': 'menuMain'}).append(
            $('<div/>', {'id': 'menuPickaxe'})
        )
    )
    .append(
        $('<div/>', {'class': 'menuText'}).append(
            $('<span/>', {text: 'PICKAXE'}, {'class':'menuText'})
        )
    )
);

$('#menu').append(
    $('<div/>', {'class': 'menuItem'}, {'id': 'axe'}).on("click", minecraft.clickOnTool()).append(
        $('<div/>', {'class': 'menuMain'}).append(
            $('<div/>', {'id': 'menuAxe'})
        )
    )
    .append(
        $('<div/>', {'class': 'menuText'}).append(
            $('<span/>', {text: 'AXE'}, {'class':'menuText'})
        )
    )
);

$('#menu').append(
    $('<div/>', {'class': 'menuItem'}, {'id': 'shovel'}).on("click", minecraft.clickOnTool()).append(
        $('<div/>', {'class': 'menuMain'}).append(
            $('<div/>', {'id': 'menuShovel'})
        )
    )
    .append(
        $('<div/>', {'class': 'menuText'}).append(
            $('<span/>', {text: 'SHOVEL'}, {'class':'menuText'})
        )
    )
);

$('#menu').append(
    $('<div/>', {'class': 'currentPixel'}).on("click", minecraft.clickOnTool())
 
);


};

minecraft.imageOptions = ['dirt', 'grass', 'tree', 'leaf', 'rock'];
minecraft.toolOptions = ['shovel', 'pickaxe', 'axe'];


// minecraft.clickOnCanvas = function(){

// 	for (var i = 0; i < minecraft.toolOptions.length; i++){
// 		if (selectedTool.hasClass(i)){
//     		minecraft.clickOnCanvasRemove();
//     	}
// 	} else {minecraft.clickOnCanvasAdd();}
// }
// minecraft.clickOnCanvasRemove = function(){
	
// 	var pixelClicked = $(this);

// 	for (var i = 0; i < minecraft.imageOptions.length; i++){
// 		if ((pixelClicked.hasClass('dirt') && selectedTool.hasClass('shovel'))|| (pixelClicked.hasClass('grass') && selectedTool.hasClass('shovel'))){
// 			pixelClicked.removeClass('dirt');
// 			pixelClicked.removeClass('grass');
// 		}

// 		else if ((pixelClicked.hasClass(i)) && selectedTool.hasClass('shovel')){
// 			alert('You cannot use this tool here!');
// 			return;
// 		} 
// 	}

// 	if ( (pixelClicked.hasClass('tree')) && selectedTool.hasClass('pickaxe')) || (pixelClicked.hasClass('grass') && selectedTool.hasClass('pickaxe')) ){
// 		alert('You cannot use this tool here!');
// 		return;
// 	}  
// 	if (pixelClicked.hasClass('rock') && selectedTool.hasClass('pickaxe')){
// 		pixelClicked.removeClass('rock');
// 	}
// 	if ( (pixelClicked.hasClass('grass')) && selectedTool.hasClass('axe')) || (pixelClicked.hasClass('rock') && selectedTool.hasClass('axe')) ){
// 		alert('You cannot use this tool here!');
// 		return;
// 	}  
// 	if (pixelClicked.hasClass('tree') && selectedTool.hasClass('axe')){
// 		pixelClicked.removeClass('tree');
// 	}
	
// }

// minecraft.clickOnCanvasAdd = function (){
// 	var pixelClicked = $(this);

// 	if (pixelClicked.hasClass('tree') || pixelClicked.hasClass('grass') || pixelClicked.hasClass('rock')){
// 		return;
// 	}
// 	else if (selectedTool.hasClass('shovel'));

// }

minecraft.clickOnTool = function(){
	

	// var selectedTool = $(this);
	// selectedTool.addClass("selectedTool");
	// console.log(selectedTool.attr("class"));
	//returns same as get element by ID
}
//     // if (selectedTool.hasClass('shovel') || selectedTool.hasClass('pickaxe') || selectedTool.hasClass('axe')){
//     // 	// minecraft.clickOnCanvasRemove();
//     // }

// //     if (selectedTool.hasClass('imageToUse')){
// //     	selectedTool.addClass('')
// //     	minecraft.clickOnCanvasAdd();


$(document).ready(function () {
    minecraft.createBoard();
    minecraft.createMenu();
});