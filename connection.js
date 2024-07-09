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

//comment for testing purpose
//comment

// testing for git 
// comment testing purpose
//Rajat