module.exports = function (app, models) {

    app.get('/maps/:mapId/completes/new', (req, res) => {
        models.Map.findByPk(req.params.mapId).then(map => {
          res.render('completes-new', { map: map });
        });
    });
    
    

    app.post('/maps/:mapId/completes', (req, res) => {
        req.body.MapId = req.params.mapId;
        models.Complete.create(req.body).then(complete => {
          res.redirect(`/maps/${req.params.mapId}`);
        }).catch((err) => {
            console.log(err)
        });
    });
}    