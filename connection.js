// const mongoose = require('mongoose')

// async function mongoConnect(url) {
//    return mongoose.connect(url)
// }
// module.exports = {
//     mongoConnect
// };
const mongoose = require('mongoose');

async function connectMongoDb(url){
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDb
};