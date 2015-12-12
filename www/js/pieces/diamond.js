(function(){

	PUZZLO.pieces['D'] = {

		create: function(id){

			var color = {
				'N' : 'normal',
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			var health = parseInt(id[2]);

			return {

				type: 'diamond',
				color: color,
				health: health,
				inverted: false,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	PUZZLO.pieces['I'] = {

		create: function(id){

			var color = {
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			var health = parseInt(id[2]);

			return {

				type: 'diamond',
				color: color,
				health: health,
				inverted: true,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	function draw($tile){

        var $diamond = $('#hidden .diamond-icon').clone();

        $diamond
        .attr('color', this.color)
        .find('text')
        .html(this.health);

		if(this.inverted)
			$diamond.find('polygon').attr('fill', 'url(#grad_inv_' + this.color + ')');
		else
			$diamond.find('polygon').attr('fill', 'url(#grad_' + this.color + ')');

        $tile.append($diamond);
	};

	function applyLogic(tile, action){

		if(this.color != 'normal'){
			
			if(this.inverted){
				if(action.color == this.color)
					return true;
			}
			else{
				if(action.color != this.color)
					return true;
			}
		}

		this.health--;

		if(this.health == 0)
			tile.clear();

		return false;
	}

}).call();