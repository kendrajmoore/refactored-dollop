module.exports = (app, models) => {
    app.get('/maps/:mapId/subs/new', (req, res) => {
      models.Map.findByPk(req.params.mapId).then(map => {
        res.render('subs-new', { map: map });
      });
    });
  
    app.post('/maps/:mapId/subs', (req, res) => {
        req.body.MapId = req.params.mapId;
        models.Sub.create(req.body).then(sub => {
          res.redirect(`/maps/${req.params.mapId}`);
        }).catch((err) => {
            console.log(err)
        });
    }); 
  }