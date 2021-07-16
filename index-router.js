module.exports = function (app, board) {
    app.post('/board', function (req, res) {
        const Board = new board();
        Board.title = req.body.title;
        Board.body = req.body.body;

        Board.save( function (err) {
            if (err) {
                console.log(err);
                res.json({message:'failed'});
            }
            else (res.json({message:'successed'}));
        })
    });
}