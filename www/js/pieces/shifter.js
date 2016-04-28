(function(){

	PUZZLO.pieces['S'] = {

		create: function(id){

			var canToggle = false, xShift = 0, yShift = 0;

			if(id.indexOf('?') != -1){

				canToggle = true;
				xShift = 1;
				yShift = 0;
			}
			else{
				if(id.indexOf('U') != -1)
					yShift = -1;
				else if(id.indexOf('D') != -1)
					yShift = 1;

				if(id.indexOf('L') != -1)
					xShift = -1;
				else if(id.indexOf('R') != -1)
					xShift = 1;
			}

			return {

				canToggle: canToggle,
				toggle: toggle,
				type: 'shifter',
				xShift: xShift,
				yShift: yShift,
				doShift: doShift,
				draw: draw,
				applyLogic: applyLogic,
				animateShift: animateShift
			};
		}
	};

	function toggle(){

		var x = this.xShift, y = this.yShift;

    	if(x == 0 && y == -1)
    		this.xShift = 1;
    	else if(x == 1 && y == -1)
    		this.yShift = 0;
    	else if(x == 1 && y == 0)
    		this.yShift = 1;
    	else if(x == 1 && y == 1)
    		this.xShift = 0;
    	else if(x == 0 && y == 1)
    		this.xShift = -1;
    	else if(x == -1 && y == 1)
    		this.yShift = 0;
    	else if(x == -1 && y == 0)
    		this.yShift = -1;
    	else if(x == -1 && y == -1)
    		this.xShift = 0;
	};

	function doShift(from){

		if (from.contents.type == 'blank' || from.contents.type == 'wall' || from.contents.type == 'sand')
            return;

        var toX = from.x + this.xShift;
        var toY = from.y + this.yShift;

        try{

        	var to = PuzzleScene.board[toY][toX];

        	if(!to)
        		return false;

        	if(to.contents.type == 'blank' || this.doShift(to)){

        		this.animateShift(from, to);

				//if there's an action occurring at the spot where we're moving
				//something, have that thing apply its logic to the action.
				//
				//this is an attempt to solve the "shift an object into a shot to
				//bypass it" bug

				var actions = Timer.getActionsAt(to.x + 1, to.y + 1);

				for(var i = 0; i < actions.length; i++){

					to.contents.applyLogic(to.$tile, actions[i]);
				}

        		return true;
        	}
        	else
        		return false;

        }
        catch(e){
        	return false;
        }
    };

    function animateShift(from, to){

    	to.setContents(from.contents);
    	from.clear();

    	var left = -100 * this.xShift;
    	var top = -100 * this.yShift;

	    TweenMax.fromTo(to.$tile.find('.icon'), 0.25, {
			css: {top: top +'%', left: left+'%'}
		},	{
			css: {top: 0,left: 0}
		});
    }

	function draw($tile){

        var $shifter = $('#hidden .shifter-icon').clone();
        var rotateValue = getRotateValue(this.xShift, this.yShift);
        $shifter.find('polygon').attr('transform', 'rotate(' + rotateValue + ',100,75)');
        $tile.append($shifter);

        function getRotateValue(x, y){

        	if(x == 0 && y == -1)
        		return 0;
        	else if(x == 1 && y == -1)
        		return 45;
        	else if(x == 1 && y == 0)
        		return 90;
        	else if(x == 1 && y == 1)
        		return 135;
        	else if(x == 0 && y == 1)
        		return 180;
        	else if(x == -1 && y == 1)
        		return 225;
        	else if(x == -1 && y == 0)
        		return 270;
        	else if(x == -1 && y == -1)
        		return 315;

        	return 0;
        }
	};

	function applyLogic(tile, action){

	}

}).call();
