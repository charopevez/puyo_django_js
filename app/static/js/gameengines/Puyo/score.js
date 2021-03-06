class Score {
    // static score{Player1:0, PLayer2:0};
    static initialize() {
        this.score = [0,0];
        this.showScore();
    }

    // スコアを表示
    static showScore() {
        let score = this.score;
        RenderEngine.renderScore(score[0], Assets.guiList[12]);
        RenderEngine.renderScore(score[1], Assets.guiList[13]);

    }

    // スコアを計算
    static calculateScore (player, combination, piece, obj) {
        combination = Math.min(combination-1, Score.combinationBonus.length - 1);
        piece = Math.min(piece-1, Score.sizeBonus.length - 1);
        obj = Math.min(obj-1, Score.objBonus.length - 1);
        console.log ("bonus"+combination+" "+piece+" "+obj )
        let bonus = Score.combinationBonus[combination] + Score.sizeBonus[piece] + Score.objBonus[obj];
        this.addScore(bonus * (piece+1) * 10, player);
    }   

    //スコアを更新
    static addScore (score, player) {
        this.score[player] += score;
        console.log(this.score[0], this.score[1])
        this.showScore();
    }
   };
   Score.sizeBonus =  [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 10, 10];
   Score.combinationBonus = [0, 8, 16, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608, 640, 672];
   Score.objBonus = [0, 0, 3, 6, 12, 24];

