//custom webpack config
const cookieParser = require('cookie-parser');

module.exports = {
    devServer: {
        before: function (app, server, compiler) {
            app.use(cookieParser());
            app.use(async (req, res, next) => {
                // setup cookie here with accessToken
                next();
            });
        },
        // Disable to use standard html routing
        historyApiFallback: true,
        port: 4002
    }
};
