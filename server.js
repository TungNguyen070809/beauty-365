const express = require('express');
const next = require('next');
const serverConfig = require('./server-config');
const serverRequest = require('./server-request');
// const request = require('request');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const modal_ctrl = require('./modal.ctrl');

app
    .prepare()
    .then(() => {
        const server = express();
        server.get('/api/collection', async (req, res) => {
            const { slug } = req.query;
            if(!slug){
                res.json({
                    error: true,
                    status: 'Lỗi!!! Thiếu slug...',
                    data: null
                })
                return false;
            }
            const data = await modal_ctrl.getCollectionWithSlug(slug).then(r => r);
            if(!data || !data.products){
                res.json({
                    error: true,
                    status: 'Lỗi!!! Không tìm thấy nhóm sản phẩm...',
                    data: null
                })
                return false;
            }
            res.json({
                error: false,
                status: 'Lấy dữ liệu thành công!!!',
                data: data.products
            })
        })
        server.get('/api/list-article', async (req, res) => {
            const { since_id } = req.query;
            if(!since_id){
                res.json({
                    error: true,
                    status: 'Lỗi!!! Thiếu blog id...',
                    data: null
                })
                return false;
            }
            const options = {
                method: 'GET',
                url: `https://beauty-365.myharavan.com/admin/blogs/${ since_id }/articles.json`,
                headers: {
                    'Authorization': `Bearer ${ serverConfig.api_token }`,
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }
            
            const initGetListArticle = async () => {
                const data = await serverRequest.getDataShopMethod(options).then(r => r);
                if(!data || !data.articles){
                    res.json({
                        error: true,
                        status: 'Lỗi!!! Không tìm danh mục bài viết...',
                        data: null
                    })
                    return false;
                }
                res.json({
                    error: false,
                    status: 'Lấy dữ liệu thành công!!!',
                    data: data.articles
                })
            }
            initGetListArticle();            
        })
        server.get('*', (req, res) => {
            return handle(req, res);
        })
        server.listen(3000, err => {
            if(err) throw err;
            console.log('Ready on http://localhost:3000');
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })