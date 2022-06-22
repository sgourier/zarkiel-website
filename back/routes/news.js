const router = require('express').Router();

module.exports = (server) => {
    router.get('/',
        server.actions.news.list
    );

    return router;
}
