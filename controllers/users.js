module.exports = function (app, models) {

    app.post('/users', (req, res) => {
        res.redirect(`/success`);
      })
}