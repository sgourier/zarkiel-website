module.exports = (server) => {
    return (req, res, next) => {
        console.log('news list');
        res.send({
            'name': 'toto',
            'username': 'tata'
        });
    }
};
