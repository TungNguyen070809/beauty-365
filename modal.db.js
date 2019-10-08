const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beauty_365', {
    useNewUrlParser: true,
    useFindAndModify: false
})
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const modalSchema = new mongoose.Schema({
    name: String,
    domain: String,
    contact_email: String
})
const collectionSchema = new mongoose.Schema({
    name: String,
    slug: String,
    url: String,
    products: Array
})
const infoShop = mongoose.model('info_shop', modalSchema, 'info_shop');
const collectionShop = mongoose.model('collection_shop', collectionSchema, 'collection_shop');

module.exports = {
    infoShop,
    collectionShop
}