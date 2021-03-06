function Lightning($tile, isTop){

	this.$tile = $tile;
    this.isTop = isTop;

    this.x = $tile.attr('tile-x');
    this.y = $tile.attr('tile-y');

	$tile.attr('tile-type', 'lightning').css('background-color', '')
    .find('.icon').attr('tile-type', '');

    this.drawContents();
    this.setupClicking();
}

Lightning.prototype.drawContents = function(){

    var $icon = $('#hidden .lightning-icon').clone();

    if(!this.isTop)
        $icon.find('path').attr('transform', 'scale(1, -1) translate(0, -200)');

    $icon.find('.arrow-in').attr('fill', 'url(#grad_yellow)');

    this.$tile.find('.icon').empty().append($icon);
}

Lightning.prototype.setupClicking = function(){

    var $tile = this.$tile;
    var lightning = this;

    $tile
    .attr('ready', 1)
    .click(clicked);

    function clicked(){

        if($tile.attr('ready') == 0)
            return;
        else if(PuzzleScene.puzzle.movesLeft <= 0)
            return;
        else if(PuzzleScene.solved)
            return;

        $tile.attr('ready', 0);

        new Shot({
            x: lightning.x,
            y: lightning.y,
            direction: lightning.isTop ? 'D' : 'U',
            color: 'yellow'
        });

		AudioManager.playSfx('Yellow');
        PuzzleScene.ReduceMovesLeft();
    }
}

Lightning.prototype.makeReady = function(val){

    this.$tile.attr('ready', 1);
}
