module.exports = (server) => {
    server.tools = {};
    server.tools.getApiUrl = (table) => {
        return server.settings.api.replace('{{tableName}}',table);
    };
};
