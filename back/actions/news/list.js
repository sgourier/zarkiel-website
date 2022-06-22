module.exports = (server) => {
    return (req, res, next) => {

        fetch(server.tools.getApiUrl('Actualites'))
        .then((resp) => resp.json())
        .then(data => {
            res.send(data.records);
        }).catch(err => {
            // Error :(
        });

        };
};
