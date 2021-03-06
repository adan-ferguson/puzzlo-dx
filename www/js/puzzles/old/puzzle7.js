PuzzleDefinition.prototype.Puzzle02 = function() {

    this.height = 7;
    this.width = 5;
    this.maxMoves = 2;

    this.tier = 7;
    this.req = 66;  
    this.textID = '7-A';
    this.name = 'Synchronicity';
    this.description = 'Block 7 puzzles all require acting while other actions are still animating.';

    this.initialContents = [
        
        [1000, 1513, 1000, 1503, 1000],
        
        [1000, 1000, 1000, 1000, 1000],
        
        [1000, 1000, 1000, 1000, 1000],
        
        [1000, 1000, 1000, 1000, 1000],
        
        [1101, 1111, 1101, 1121, 1101],
        
        [1000, 1000, 1000, 1000, 1000],
        
        [1000, 1000, 1000, 1101, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle15 = function() {

    this.height = 7;
    this.width = 4;
    this.maxMoves = 1;
    this.items = [1700, 1700, 1403, 1401];

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 67;  
    this.textID = '7-1';
    this.name = 'Loop Trick';

    this.initialContents = [
        
        [1000, 1000, 1000, 1000], 
        
        [1000, 1000, 1000, 1000], 
        
        [1000, 1000, 1000, 1000], 
        
        [1200, 1103, 1102, 1200], 
        
        [1000, 1000, 1000, 1000], 
        
        [1000, 1000, 1000, 1000], 
        
        [1000, 1000, 1000, 1000]
        
    ];
};

PuzzleDefinition.prototype.Puzzle21 = function() {

    this.height = 4;
    this.width = 5;
    this.maxMoves = 2;
    this.items = [1401, 1401]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 68;  
    this.textID = '7-2';
    this.name = 'Buggy Stuff';
    this.description = "I promise you won't have to do these tricks in other levels."

    this.initialContents = [
        
        [1101, 1000, 1000, 1513, 1000], 
        
        [1000, 1000, 1000, 1101, 1101], 
        
        [1200, 1200, 1200, 1200, 1200], 
        
        [1101, 1201, 1000, 1000, 1000]
        
    ];
};

PuzzleDefinition.prototype.Puzzle27 = function() {

    this.height = 8;
    this.width = 4;
    this.maxMoves = 3;
    this.items = [1321, 1511, 1511, 1501]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 69;  
    this.textID = '7-3';
    this.name = 'Potion Stash';

    this.initialContents = [
        
        [1102, 1102, 1000, 1101],
        
        [1102, 1102, 1111, 1102],
        
        [1102, 1102, 1111, 1102],
        
        [1200, 1200, 1000, 1200],
        
        [1200, 1600, 1000, 1200],
        
        [1200, 1600, 1000, 1200],
        
        [1200, 1600, 1000, 1200],
        
        [1200, 1200, 1200, 1200]
        
    ];
};

PuzzleDefinition.prototype.Puzzle33 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1331, 1331, 1331]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 70;  
    this.textID = '7-4';
    this.name = 'Pow Pow 3';

    this.initialContents = [
        
        [1200, 1200, 1200, 1200, 1200],
        
        [1200, 1000, 1000, 1000, 1200],

        [1200, 1000, 1103, 1000, 1200],

        [1200, 1000, 1000, 1000, 1200],

        [1200, 1000, 1200, 1200, 1200]      
        
    ];
};

PuzzleDefinition.prototype.Puzzle46 = function() {

    this.height = 8;
    this.width = 5;
    this.maxMoves = 2;
    this.items = [1331, 1331, 1502, 1501, 1500]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 71;  
    this.textID = '7-5';
    this.name = 'Kielbasa';

    this.initialContents = [
        
        [1000, 1000, 1000, 1200, 1111],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1131, 1000],
        
        [1000, 1000, 1000, 1221, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle50 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 3;
    this.items = [1502, 1500, 1501, 1501, 1503, 1401]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 72;  
    this.textID = '7-6';
    this.name = 'Trouble-a-Dub';

    this.initialContents = [
        
        [1200, 1000, 1121, 1000, 1000, 1111],
        
        [1200, 1000, 1111, 1000, 1200, 1000],
        
        [1200, 1503, 1121, 1000, 1200, 1000],
        
        [1200, 1000, 1000, 1000, 1200, 1000],
        
        [1200, 1000, 1000, 1000, 1200, 1000],
        
        [1200, 1000, 1000, 1000, 1200, 1000],
        
        [1200, 1000, 1000, 1200, 1200, 1000],
        
        [1101, 1221, 1000, 1102, 1000, 1501],
    ];
};

PuzzleDefinition.prototype.Puzzle65 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 2;
    this.items = [1511, 1503, 1503, 1400, 1401]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 73;  
    this.textID = '7-7';
    this.name = 'Crazy Contraption';

    this.initialContents = [
        
        [1000, 1000, 1000, 1000, 1000, 1000],
        
        [1501, 1000, 1000, 1121, 1111, 1503],
        
        [1000, 1000, 1000, 1000, 1000, 1121],
        
        [1000, 1000, 1000, 1000, 1000, 1111],
        
        [1000, 1000, 1000, 1000, 1000, 1121],
        
        [1000, 1000, 1000, 1000, 1000, 1111],
        
        [1503, 1000, 1000, 1111, 1121, 1501],
        
        [1104, 1000, 1000, 1000, 1000, 1000]
        
    ];
};

PuzzleDefinition.prototype.Puzzle73 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 3;
    this.items = [1511, 1311, 1321, 1401]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 74;  
    this.textID = '7-8';
    this.name = 'Tough Gig';

    this.initialContents = [
        
        [1200, 1700, 1000, 1000, 1000, 1503],
        
        [1200, 1000, 1610, 1000, 1000, 1201],
        
        [1200, 1000, 1200, 1000, 1501, 1700],
        
        [1211, 1000, 1000, 1000, 1503, 1101],
        
        [1200, 1000, 1200, 1000, 1000, 1200],
        
        [1200, 1102, 1200, 1000, 1000, 1200],
        
        [1200, 1000, 1200, 1500, 1501, 1200],
        
        [1200, 1200, 1200, 1121, 1200, 1200]
        
    ];
};

PuzzleDefinition.prototype.Puzzle81 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 1;
    this.items = [1400, 1403, 1402, 1401, 1400]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 75;  
    this.textID = '7-9';
    this.name = 'Mirror Gallery';

    this.initialContents = [
        
        [1000, 1500, 1500, 1500, 1500, 1000],
        
        [1502, 1122, 1000, 1000, 1000, 1502],
        
        [1502, 1000, 1122, 1000, 1000, 1502],
        
        [1502, 1000, 1000, 1122, 1000, 1502],
        
        [1502, 1000, 1000, 1000, 1122, 1502],
        
        [1502, 1000, 1501, 1000, 1000, 1502],
        
        [1502, 1000, 1503, 1000, 1000, 1000],
        
        [1000, 1500, 1500, 1500, 1500, 1000]
        
    ];
};

PuzzleDefinition.prototype.Puzzle87 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 3;
    this.items = [1331, 1331, 1321, 1512, 1502, 1503]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 76;  
    this.textID = '7-10';
    this.name = 'Real';

    this.initialContents = [
        
        [1000, 1501, 1000, 1000, 1000, 1503],
        
        [1000, 1121, 1000, 1000, 1000, 1000],
        
        [1000, 1000, 1101, 1000, 1000, 1000],
        
        [1111, 1000, 1000, 1131, 1131, 1200],
        
        [1111, 1000, 1000, 1131, 1131, 1200],
        
        [1000, 1000, 1102, 1000, 1000, 1600],
        
        [1000, 1600, 1000, 1000, 1000, 1200],
        
        [1000, 1600, 1121, 1000, 1000, 1112],
        
    ];
};

PuzzleDefinition.prototype.Puzzle94 = function() {

    this.height = 8;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1501, 1501, 1403, 1500, 1400, 1403, 1403, 1403]

    this.tier = 7.1;
    this.prereq = '02';
    this.req = 77;  
    this.textID = '7-11';
    this.name = '?';

    this.initialContents = [
        
        [1000, 1000, 1000, 1000, 1000],
        
        [1000, 1200, 1200, 1200, 1000],
        
        [1000, 1200, 1101, 1200, 1000],
        
        [1000, 1710, 1200, 1200, 1503],
        
        [1000, 1000, 1200, 1000, 1000],
        
        [1000, 1000, 1131, 1000, 1000],
        
        [1000, 1131, 1200, 1710, 1000],
        
        [1331, 1000, 1000, 1000, 1500],
        
    ];
};