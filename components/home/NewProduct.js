import React, {useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import callApi from '../../callApi';
import clientConfig from '../../client-config';
import Loading from '../../components/Loading';
import ProductItem from '../snippets/ProductItem';
const NewProduct = (props) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProduct() {
            const response = await callApi.get(`${clientConfig.clientConfig.apiCollection}?slug=${clientConfig.collectionConfig.newCollectionSlug}`);
            const { data } = response.data;
            setProducts(data);
            setLoading(false);
        }
        fetchProduct();
    },[]);
    if(loading || products.length === 0){
        return <div className="lineLoading"><Loading /></div>
    }
    const renderProductItem = data => {
        var result = null;
        result = data.map((item, index) => {
          return <div key={ index } className="productItem col-6 col-lg-3"><ProductItem product={ item }/></div>
        })
        return result;
    }
    return(
        <section className="mt-4 homeBlock productNew">
            <div className="container">
                <div className="headingPage">
                    <h2 className="title">
                        SẢN PHẨM MỚI
                    </h2>
                </div>
                <div className="blockContent productList">
                    <div className="row">
                        { renderProductItem(products) }
                    </div>
                </div>
            </div>
        </section>
    )
};
export default NewProduct;