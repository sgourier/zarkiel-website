module.exports = (server) => {
    server.actions = {
        news: require('./news')(server),
    };
};