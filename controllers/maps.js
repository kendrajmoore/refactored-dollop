
module.exports = function (app, models) {

    // INDEX
    app.get('/maps-all', (req, res) => {
        models.map.findAll({ order: [['createdAt', 'DESC']] }).then(maps => {
            res.render('maps-index', { maps: maps });
        })
    })

    app.get('/maps/new', (req, res) => {
        res.render('maps-new', {});
      })

    // SHOW
    app.get('/maps/:id', (req, res) => {
        models.map.findByPk(req.params.id, { include: [{ model: models.Rsvp }] }).then(map => {
            res.render('maps-show', { map: map });
        }).catch((err) => {
            console.log(err.message);
        })
    });

    app.get('/maps', (req, res) => {
        res.render('maps-index', { maps: maps });
    })

      // CREATE
    app.post('/maps', (req, res) => {
        models.map.create(req.body).then(map => {
            // Redirect to maps/:id
        res.redirect(`/maps/${map.id}`)
        
        }).catch((err) => {
        console.log(err)
        });
    })

    // EDIT
    app.get('/maps/:id/edit', (req, res) => {
        models.map.findByPk(req.params.id).then((map) => {
        res.render('maps-edit', { map: map });
        }).catch((err) => {
        console.log(err.message);
        })
    });

    //UPDATE
    app.put('/maps/:id', (req, res) => {
        models.map.findByPk(req.params.id).then(map => {
        map.update(req.body).then(map => {
            res.redirect(`/maps/${req.params.id}`);
        }).catch((err) => {
            console.log(err);
        });
        }).catch((err) => {
        console.log(err);
        });
    });

    app.delete('/maps/:id', (req, res) => {
        models.map.findByPk(req.params.id).then(map => {
          map.destroy();
          res.redirect(`/`);
        }).catch((err) => {
          console.log(err);
        });
    })


}