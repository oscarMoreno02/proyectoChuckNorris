const path = require('path');
module.exports={
    entry: {
        app:'./src/app.js',
        clases:'./src/clases.js',
        app2:'./src/app2.js'
    },
    output:{
        filename:'[name]main.js',
        path: path.resolve(__dirname,'dist'),
    }

};