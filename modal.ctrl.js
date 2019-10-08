const db_modal = require('./modal.db');
module.exports = {
    getCollectionWithSlug: async (slug) => {
        const result = await db_modal.collectionShop.findOne({ 'slug': slug }).lean().exec().then(r => r )
        .catch(err => err);
        return result;
    }
}