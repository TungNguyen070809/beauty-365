const request = require('request');
const requestCallApiMethod = option => {
    return new Promise((resolve, reject) => {
        request(option, (error, response, data) => {
            if(error) reject(error)
            else resolve(data)
        })
    })
}
module.exports = {
    getDataShopMethod: async (option) => {
        const result = await requestCallApiMethod(option).then(data => JSON.parse(data));
        return result;  
    }
}