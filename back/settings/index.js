module.exports = (api) => {
    const envType = "local";
    api.settings = require('./settings_'+envType+'.json');

    if (process.env.NODE_ENV == 'production') {
        api.settings.port = process.env.PORT;
    }
};
