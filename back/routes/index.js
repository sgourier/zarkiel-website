module.exports = (server) => {
    server.use('/api/news', require('./news')(server))
};
