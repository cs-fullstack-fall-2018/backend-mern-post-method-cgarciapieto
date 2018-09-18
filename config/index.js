// A common object for accessing config values
// Gets included automatically because of its name index.js

const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        //mongodb://<dbuser>:<dbpassword>@ds029803.mlab.com:29803/nodetodo2
        // return 'YOUR_MONGO_URL';
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds029803.mlab.com:29803/nodetodo2';
    },


};
