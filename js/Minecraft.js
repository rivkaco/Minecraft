
var minecraft = {};
minecraft.canvasSize = 500;
minecraft.size= 20;
minecraft.matrix = [];
minecraft.imageOptions = [['dirt', 'grass'], ['tree', 'leaf'], ['rock']];
minecraft.toolOptions = ['shovel', 'axe', 'pickaxe', 'currentPixel'];
minecraft.selectedTool = $();
minecraft.pixelClicked = $();

minecraft.createBoard = function() {

	for (var rows = 0; rows < minecraft.size; rows++) {
        for (var columns = 0; columns < minecraft.size; columns++) {
            $("#container").append("<div class='block'></div>");
        }
    }
    $("#container").width(minecraft.canvasSize+'px');
    $("#container").height(minecraft.canvasSize+'px');
    $(".block").width(minecraft.canvasSize/minecraft.size);
    $(".block").height(minecraft.canvasSize/minecraft.size);


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

    $('#menu').append(
        $('<button/>', {'class': 'plus'}).on("click", minecraft.bigger)
        .append(
            $('<span/>', {text: '+'}, {'class':'menuText'})
            )
    );
    $('#menu').append(
        $('<button/>', {'class': 'minus'}).on("click", minecraft.smaller)
        .append(
            $('<span/>', {text: '-'}, {'class':'menuText'})
            )
    );

    $('#menu').append(
        $('<button/>', {'class': 'newGame'}).on("click", minecraft.refresh)
        .append(
            $('<span/>', {text: 'NEW GAME'}, {'class':'menuText'})
            )
    );
};

minecraft.clickOnTool = function(){
	minecraft.selectedTool = $(this);
    $('.highlight').removeClass('highlight');
    for (var i = 0; i < minecraft.toolOptions.length - 1; i++){
        if (minecraft.selectedTool.hasClass(minecraft.toolOptions[i])){
            minecraft.selectedTool.addClass('highlight');
        }
    }
	console.log(minecraft.selectedTool);
}


minecraft.clickOnCanvas = function(){
	
		if (minecraft.selectedTool.length == 0){
				alert("Please select a tool");
			}

	minecraft.pixelClicked = $(this);
    var storedImage = $('.currentPixel');
    var classes = $(storedImage).attr('class').split(' ');

	if (minecraft.selectedTool.hasClass(minecraft.toolOptions[3])) {
		minecraft.clickOnCanvasAdd();
	}
	else {
        for (var i = 0; i < minecraft.toolOptions.length-1; i++){
            if (minecraft.selectedTool.hasClass(minecraft.toolOptions[i])){
                for (var j = 0; j < minecraft.imageOptions[i].length; j++){
				    if (minecraft.pixelClicked.hasClass(minecraft.imageOptions[i][j])){
				        minecraft.pixelClicked.removeClass(minecraft.imageOptions[i][j]);
                        storedImage.removeClass(classes[1]);
				        storedImage.addClass(minecraft.imageOptions[i][j]);
                        console.log(classes);
				    }
                }
            }
        }
    }
};

minecraft.clickOnCanvasAdd = function (){

    var storedImage = $('.currentPixel');
    var classes = $(storedImage).attr('class').split(' ');

    for (var i = 0; i < minecraft.imageOptions.length; i++){
        for (var j = 0; j < minecraft.imageOptions[i].length; j++){
            if (minecraft.pixelClicked.hasClass(minecraft.imageOptions[i][j])){
                return;
            }
        }
    }
    minecraft.pixelClicked.addClass(classes[1]);
    storedImage.removeClass(classes[1]);
    console.log(minecraft.pixelClicked);
};

minecraft.bigger = function(){
    if (minecraft.canvasSize <= 1000){
    minecraft.canvasSize += 100;
    $("#container").width(minecraft.canvasSize+'px');
    $("#container").height(minecraft.canvasSize+'px');
    $(".block").width(minecraft.canvasSize/minecraft.size);
    $(".block").height(minecraft.canvasSize/minecraft.size);
}
};

minecraft.smaller = function(){
    if (minecraft.canvasSize >= 200){
    minecraft.canvasSize -= 100;
    $("#container").width(minecraft.canvasSize+'px');
    $("#container").height(minecraft.canvasSize+'px');
    $(".block").width(minecraft.canvasSize/minecraft.size);
    $(".block").height(minecraft.canvasSize/minecraft.size);
}
};

minecraft.refresh = function(){
    $('#container').empty();
    $('#menu').empty();
    minecraft.createBoard();
    minecraft.createMenu();

}


minecraft.beginGame = function() {
    $("#landingPage").fadeOut();
    $('#container').show();
    $('#menu').show();

    minecraft.createBoard();
    minecraft.createMenu();
};





