import Head from 'next/head'
import callApi from '../callApi';
import clientConfig from '../client-config';
import Layout from '../components/Layout';
import SliderHome from '../components/home/SliderHome';
import ProductSlide from '../components/snippets/ProductSlide';
import BannerHome from '../components/home/BannerHome';
import FeedbackHome from '../components/home/FeedbackHome';
import BlogHome from '../components/home/BlogHome';
const Index = (props) => (
    <Layout>
      <Head>
        <title>Mỹ phẩm làm đẹp 365</title>
        <link rel="canonical" href="http://localhost:3000/" />
        <meta name="description" content="Mỹ phẩm làm đẹp 365, chuyên cung cấp các loại mỹ phẩm chính hãng. Hiệu quả ngay sau lần sử dụng đầu tiên."></meta>
      </Head>
      <SliderHome />
      <ProductSlide products={ props.newProduct } title="SẢN PHẨM MỚI"/>
      <ProductSlide products={ props.newProduct } title="SẢN PHẨM BÁN CHẠY"/>
      <BannerHome />
      <FeedbackHome />
      <BlogHome articles={props.newArticle} />
    </Layout>
);
Index.getInitialProps = async function() {
  const response = await callApi.get(`${clientConfig.clientConfig.apiCollection}?slug=${clientConfig.collectionConfig.newCollectionSlug}`);
  const newProduct = response.data.data;
  const artcleRes = await callApi.get(`${clientConfig.clientConfig.apiListArticleUrl}?since_id=${clientConfig.blogConfig.blogHomeID}`);
  console.log(artcleRes);
  const newArticle = artcleRes.data.data;
  return {
    newProduct,
    newArticle
  };
};
export default Index;