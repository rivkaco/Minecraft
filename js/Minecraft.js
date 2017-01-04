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
                .data("j",j).addClass(i+'-'+j).click(minecraft.clickOnCanvas); 
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
    $('<div/>', {'class': 'menuItem pickaxe'}).on("click", minecraft.clickOnTool).append(
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
    $('<div/>', {'class': 'menuItem axe'}).on("click", minecraft.clickOnTool).append(
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
    $('<div/>', {'class': 'menuItem shovel'}).on("click", minecraft.clickOnTool).append(
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
    $('<div/>', {'class': 'currentPixel'}).on("click", minecraft.clickOnTool)
 
);


};



var $selectedTool = $();
// minecraft.selectedTool = [];
minecraft.clickOnTool = function(){

	selectedTool = $(this);
	console.log(selectedTool);
}


minecraft.imageOptions = [['dirt', 'grass'], ['tree', 'leaf'], ['rock']];
minecraft.toolOptions = ['shovel', 'axe', 'pickaxe', 'currentPixel'];

minecraft.clickOnCanvas = function(){
	
	// 	if (selectedTool==-1){
	// 			alert("yo");
	// 		}

		var pixelClicked = $(this);

		if (selectedTool.hasClass(minecraft.toolOptions[3])) {
			console.log("hello");
			minecraft.clickOnCanvasAdd();
		}
		else {

	for (var i = 0; i < minecraft.toolOptions.length-1; i++){
		if (selectedTool.hasClass(minecraft.toolOptions[i])){
			for (var j = 0; j < minecraft.imageOptions[i].length; j++){
				if (pixelClicked.hasClass(minecraft.imageOptions[i][j])){
				pixelClicked.removeClass(minecraft.imageOptions[i][j]);
				$('.currentPixel').addClass(minecraft.imageOptions[i][j]);
				}	
			}
		} 
	}
}
};

minecraft.clickOnCanvasAdd = function (){
	// var pixelClicked = $(this);

	// if (pixelClicked.hasClass('tree') || pixelClicked.hasClass('grass') || pixelClicked.hasClass('rock')){
	// 	return;
	// }
	// else if (selectedTool.hasClass('shovel'));

};

$(document).ready(function () {
    minecraft.createBoard();
    minecraft.createMenu();
});