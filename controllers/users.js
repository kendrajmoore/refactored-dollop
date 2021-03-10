module.exports = function (app, models) {

    app.post('/users', (req, res) => {
        console.log(req.body);
      })
}