module.exports = function (app, models) {

    app.post('/maps/:mapId/completes', (req, res) => {
        models.Rsvp.create(req.body).then(rsvp => {
            res.redirect(`/events/${req.params.eventId}`);
        }).catch((err) => {
            console.log(err)
        });
    });
}    