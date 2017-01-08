
var minecraft = {};
minecraft.canvasSize = 500;
minecraft.size= 20;
minecraft.matrix = [];
minecraft.selectedTool = $();
minecraft.pixelClicked = $();
minecraft.plusOrMinus = $();

minecraft.items = {"shovel":{"dirt":true,"grass":true},
                   "axe":{"tree":true,"leaf":true},
                   "pickaxe":{"rock":true},
                   "currentPixel":{} };

minecraft.inventory = {"dirt":0, "grass":0, "tree":0, "leaf":0, "rock":0};

// //                  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9
// minecraft.world = {{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //0
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //1
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //2
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //3
//                    {0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //4
//                    {0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //5
//                    {0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   //6
//                    {0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0},   //7
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0},   //8
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0},   //9
//                    {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0},   //10
//                    {0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0},   //11
//                    {0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0},   //12
//                    {2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2},   //13
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},   //14
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},   //15
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},   //16
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},   //17
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1},   //18
//                    {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}};  //19




minecraft.createBoard = function() {

	for (var rows = 0; rows < minecraft.size; rows++) {
        for (var columns = 0; columns < minecraft.size; columns++) {
            $('#container').append("<div class='block'></div>");
        }
    }
    $('#container').width(minecraft.canvasSize+'px');
    $('#container').height(minecraft.canvasSize+'px');
    $('.block').width(minecraft.canvasSize/minecraft.size);
    $('.block').height(minecraft.canvasSize/minecraft.size);


	for (var i =0; i<minecraft.size; i++) {
		minecraft.matrix.push(Array(minecraft.size));
	}
	    minecraft.block = $('.block');

	for(var i=0;i<minecraft.matrix.length;i++){
        for(var j=0;j<minecraft.matrix[i].length;j++){
            minecraft.block.eq(i*20+j)
                .data('i',i)
                .data('j',j).addClass(i+'-'+j).click(minecraft.clickOnCanvas); 
        }
    }
	

    for (var i = 15; i< 20; i++) {
    	for (var j= 0; j< 20; j++) {
    		$('.'+i + '-' +j).addClass('dirt');
    	}
    }
    for (var i = 14; i< 15; i++) {
    	for (var j= 0; j< 20; j++) {
    		$('.'+i + '-' +j).addClass('grass');
    	}
    }

    $('.'+12 + '-' +4).addClass('leaf');
    $('.'+13 + '-' +3).addClass('leaf');
    $('.'+13 + '-' +4).addClass('leaf');
    $('.'+13 + '-' +5).addClass('leaf');
    $('.'+10 + '-' +15).addClass('leaf');
    $('.'+10 + '-' +16).addClass('leaf');
    $('.'+10 + '-' +17).addClass('leaf');
    $('.'+9 + '-' +15).addClass('leaf');
    $('.'+9 + '-' +16).addClass('leaf');
    $('.'+9 + '-' +17).addClass('leaf');
    $('.'+8 + '-' +15).addClass('leaf');
    $('.'+8 + '-' +16).addClass('leaf');
    $('.'+8 + '-' +17).addClass('leaf');

    $('.'+11 + '-' +16).addClass('tree');
    $('.'+12 + '-' +16).addClass('tree');
    $('.'+13 + '-' +16).addClass('tree');

    $('.'+13 + '-' +13).addClass('rock');
    $('.'+13 + '-' +14).addClass('rock');
    $('.'+13 + '-' +19).addClass('rock');

    $('.'+5 + '-' +6).addClass('cloud');
    $('.'+6 + '-' +4).addClass('cloud');
    $('.'+6 + '-' +5).addClass('cloud');
    $('.'+6 + '-' +6).addClass('cloud');
    $('.'+6 + '-' +7).addClass('cloud');
    $('.'+6 + '-' +9).addClass('cloud');
    $('.'+6 + '-' +10).addClass('cloud');
    $('.'+7 + '-' +3).addClass('cloud');
    $('.'+7 + '-' +4).addClass('cloud');
    $('.'+7 + '-' +5).addClass('cloud');
    $('.'+7 + '-' +6).addClass('cloud');
    $('.'+7 + '-' +7).addClass('cloud');
    $('.'+7 + '-' +8).addClass('cloud');
    $('.'+7 + '-' +9).addClass('cloud');
    $('.'+7 + '-' +10).addClass('cloud');
    $('.'+8 + '-' +7).addClass('cloud');
    $('.'+8 + '-' +8).addClass('cloud');
};

minecraft.createMenu = function() {

    $('#menu').append(
        $('<div/>', {'class': 'menuItem pickaxe'}).on('click', minecraft.clickOnTool).append(
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
        $('<div/>', {'class': 'menuItem axe'}).on('click', minecraft.clickOnTool).append(
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
        $('<div/>', {'class': 'menuItem shovel'}).on('click', minecraft.clickOnTool).append(
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
        $('<div/>', {'class': 'currentPixel dirt'}).on('click', minecraft.clickOnTool).append(
            $('<span/>', {text: minecraft.inventory['dirt']}, {'class':'currentText'})
            )
    );

    $('#menu').append(
        $('<div/>', {'class': 'currentPixel grass'}).on('click', minecraft.clickOnTool).append(
            $('<span/>', {text: minecraft.inventory['grass']}, {'class':'currentText'})
            )
    );

    $('#menu').append(
        $('<div/>', {'class': 'currentPixel tree'}).on('click', minecraft.clickOnTool).append(
            $('<span/>', {text: minecraft.inventory['tree']}, {'class':'currentText'})
            )
    );
    $('#menu').append(
        $('<div/>', {'class': 'currentPixel leaf'}).on('click', minecraft.clickOnTool).append(
            $('<span/>', {text: minecraft.inventory['leaf']}, {'class':'currentText'})
            )
    );
    $('#menu').append(
        $('<div/>', {'class': 'currentPixel rock'}).on('click', minecraft.clickOnTool).append(
            $('<span/>', {text: minecraft.inventory['rock']}, {'class':'currentText'})
            )
    );


    $('#menu').append(
        $('<button/>', {'class': 'button plus'}, {'id': 'biggerSize'}).on('click', minecraft.bigger)
        .append(
            $('<span/>', {text: '+'}, {'class':'menuText'})
            )
    );
    $('#menu').append(
        $('<button/>', {'class': 'button minus'}, {'id': 'smallerSize'}).on('click', minecraft.smaller)
        .append(
            $('<span/>', {text: '-'}, {'class':'menuText'})
            )
    );

    $('#menu').append(
        $('<button/>', {'class': 'newGame'}).on('click', minecraft.refresh)
        .append(
            $('<span/>', {text: 'NEW GAME'}, {'class':'menuText'})
            )
    );
};

minecraft.clickOnTool = function(){

	minecraft.selectedTool = $(this);

    $('.highlight').removeClass('highlight');
    $('.highlightBorder').removeClass('highlightBorder');
    
    if (minecraft.selectedTool.hasClass('currentPixel')){
        minecraft.selectedTool.addClass('highlightBorder');
    } else{
        for (var key in minecraft.items){
            if (minecraft.selectedTool.hasClass(key)){
                minecraft.selectedTool.addClass('highlight');
            }
        }
    }
}


minecraft.clickOnCanvas = function(){
	
	if (minecraft.selectedTool.length == 0){
		alert('Please select a tool');
	}

	minecraft.pixelClicked = $(this);

    var pixelClickedClasses = $(minecraft.pixelClicked).attr('class').split(' ');
    var selectedToolClasses = $(minecraft.selectedTool).attr('class').split(' ');

	if (minecraft.selectedTool.hasClass('currentPixel')) {
		minecraft.clickOnCanvasAdd();
	}
	else {
        if(pixelClickedClasses[2] in minecraft.items[selectedToolClasses[1]]){
            minecraft.pixelClicked.removeClass(pixelClickedClasses[2]);
            minecraft.inventory[pixelClickedClasses[2]] ++;
        } else{ 
            minecraft.pixelClicked.focus(function() {
                console.log('wrong');
                minecraft.selectedTool.css('background-color', 'red');
            });

        }
    }
};

minecraft.clickOnCanvasAdd = function (){

    var pixelClickedClasses = $(minecraft.pixelClicked).attr('class').split(' ');
    var selectedToolClasses = $(minecraft.selectedTool).attr('class').split(' ');

    if (pixelClickedClasses.length == 3){
        return;
    }
    else {
        if (minecraft.inventory[selectedToolClasses[1]] > 0){
            minecraft.pixelClicked.addClass(selectedToolClasses[1]);
            minecraft.inventory[selectedToolClasses[1]] --;
        }
        else{ return;}
    }
};

// minecraft.changeSize = function(){
//     minecraft.plusOrMinus = $(this);
//     if ((minecraft.plusOrMinus.id == 'biggerSize') && (minecraft.canvasSize <= 1000)){
//         minecraft.canvasSize += 100;
//         console.log(minecraft.canvasSize);
//     }
//     else if ((minecraft.plusOrMinus.id == 'smallerSize') && (minecraft.canvasSize >= 200)){
//         minecraft.canvasSize -= 100;
//         console.log(minecraft.canvasSize);
//     }
//     $('#container').width(minecraft.canvasSize + 'px');
//     $('#container').height(minecraft.canvasSize + 'px');
//     $('.block').width(minecraft.canvasSize/minecraft.size);
//     $('.block').height(minecraft.canvasSize/minecraft.size);
// }

minecraft.bigger = function(){
    if (minecraft.canvasSize <= 1000){
        minecraft.canvasSize += 100;
        $('#container').width(minecraft.canvasSize + 'px');
        $('#container').height(minecraft.canvasSize + 'px');
        $('.block').width(minecraft.canvasSize/minecraft.size);
        $('.block').height(minecraft.canvasSize/minecraft.size);
    }
};

minecraft.smaller = function(){
    if (minecraft.canvasSize >= 200){
        minecraft.canvasSize -= 100;
        $('#container').width(minecraft.canvasSize + 'px');
        $('#container').height(minecraft.canvasSize + 'px');
        $('.block').width(minecraft.canvasSize/minecraft.size);
        $('.block').height(minecraft.canvasSize/minecraft.size);
    }
};

minecraft.refresh = function(){
    $('#container').empty();
    $('#menu').empty();
    minecraft.createBoard();
    minecraft.createMenu();
}

minecraft.beginGame = function() {
    $('#landingPage').fadeOut();
    $('#container').show();
    $('#menu').show();
    minecraft.createBoard();
    minecraft.createMenu();
};



