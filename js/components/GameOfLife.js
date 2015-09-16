let gameUtils = {
    getStatus(cell) {
        return cell.getAttribute('data-status');
    },
    setStatus(cell, statusToSet) {
        cell.className = statusToSet;
        cell.setAttribute('data-status', statusToSet);
    },
    toggleStatus(cell) {
        // (gameUtils.getStatus(cell) === 'dead') ? gameUtils.setStatus(cell,'alive') : gameUtils.setStatus(cell,'dead');
        if (gameUtils.getStatus(cell) === 'dead') {
            gameUtils.setStatus(cell, 'alive');
        } else {
            gameUtils.setStatus(cell, 'dead');
        }
    },
    selectCell(x, y) {
        return document.getElementById(x + '-' + y);
    },
    getNeighbors(cell) {
        var neighbors = [];
        var pos = cell.id.split('-').map(function(s) {
            return parseInt(s);
        });

        var sc = gameUtils.selectCell;

        // Same row adjacent.
        neighbors.push(sc(pos[0] - 1, pos[1]));
        neighbors.push(sc(pos[0] + 1, pos[1]));

        // Row above.
        neighbors.push(sc(pos[0] - 1, pos[1] - 1));
        neighbors.push(sc(pos[0], pos[1] - 1));
        neighbors.push(sc(pos[0] + 1, pos[1] - 1));

        // Row below.
        neighbors.push(sc(pos[0] - 1, pos[1] + 1));
        neighbors.push(sc(pos[0], pos[1] + 1));
        neighbors.push(sc(pos[0] + 1, pos[1] + 1));

        return neighbors.filter(function(cell) {
            return cell !== null;
        });

    },
    countLiveNeighbors(cell) {

        var neighbors = gameUtils.getNeighbors(cell);

        var liveNeighbors = neighbors.filter(function(neighbor) {
            return gameUtils.getStatus(neighbor) === 'alive';
        });

        return liveNeighbors.length;

    }
}

let gameOfLife = {

    width: 40,
    height: 40,
    stepInterval: null,

    createAndShowBoard: function() {
        // create <table> element
        var goltable = document.createElement("tbody");

        // build Table HTML
        var tablehtml = '';
        for (var h = 0; h < this.height; h++) {
            tablehtml += "<tr id='row+" + h + "'>";
            for (var w = 0; w < this.width; w++) {
                tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
            }
            tablehtml += "</tr>";
        }
        goltable.innerHTML = tablehtml;

        // add table to the #board element
        var board = document.getElementById('board');
        board.appendChild(goltable);

        // once html elements are added to the page, attach events to them
        this.setupBoardEvents();
    },

    forEachCell: function(iteratorFunc) {

        var cells = document.getElementsByTagName('td');
        [].slice.call(cells).forEach(function(cellElement) {
            var coords = cellElement.id.split('-');
            iteratorFunc(cellElement, parseInt(coords[0]), parseInt(coords[1]));
        });
    },

    setupBoardEvents: function() {

        var onCellClick = function(e) {
            // QUESTION TO ASK YOURSELF: What is "this" equal to here?

            // how to set the style of the cell when it's clicked
            gameUtils.toggleStatus(this);
        };

        this.forEachCell(function(cell) {
            cell.onclick = onCellClick;
        });

        document.getElementById('play_btn').onclick = this.enableAutoPlay.bind(this);
        document.getElementById('step_btn').onclick = this.step.bind(this);
        document.getElementById('clear_btn').onclick = this.clearBoard.bind(this);
        document.getElementById('reset_btn').onclick = this.createRandomBoard.bind(this);

    },

    clearBoard: function() {

        this.forEachCell(function(cell) {
            gameUtils.setStatus(cell, 'dead');
        });

        this.stop();

    },

    createRandomBoard: function() {

        this.forEachCell(function(cell) {

            if (Math.random() > .5) {
                gameUtils.setStatus(cell, 'alive');
            } else {
                gameUtils.setStatus(cell, 'dead');
            }

        });

    },

    step: function() {
        // Here is where you want to loop through all the cells
        // on the board and determine, based on it's neighbors,
        // whether the cell should be dead or alive in the next
        // evolution of the game.
        //
        // You need to:
        // 1. Count alive neighbors for all cells
        // 2. Set the next state of all cells based on their alive neighbors

        var toToggle = [];

        this.forEachCell(function(cell) {

            var liveNeighborsCount = gameUtils.countLiveNeighbors(cell);

            if (gameUtils.getStatus(cell) === 'alive') {
                if (liveNeighborsCount !== 2 && liveNeighborsCount !== 3) {
                    toToggle.push(cell);
                }
            } else {
                if (liveNeighborsCount === 3) {
                    toToggle.push(cell);
                }
            }

        });

        toToggle.forEach(gameUtils.toggleStatus);

    },

    enableAutoPlay: function() {
        // Start Auto-Play by running the 'step' function
        // automatically repeatedly every fixed time interval

        var self = this;

        if (this.stepInterval !== null) {
            this.stop();
        } else {
            this.stepInterval = setInterval(function() {
                self.step();
            }, 100);
        }

    },

    stop: function() {

        clearInterval(this.stepInterval);
        this.stepInterval = null;

    }
};

gameOfLife.createAndShowBoard();