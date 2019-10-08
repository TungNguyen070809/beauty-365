import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll:3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
};
import ProductItem from '../../components/snippets/ProductItem';
const ProductSlide = ({ products, title }) => {
    return(
        <section className="mt-4 homeBlock productSlide">
            <div className="container">
                <div className="headingPage">
                    <h2 className="title">
                        { title }
                    </h2>
                </div>
                <div className="blockContent productList sliderControl slickMultiItem">
                    <Slider {...settings}>
                        { products.map((product, index) => {
                            return <div key={ product.id } className="productItem col-12"><ProductItem product={ product }/></div>
                            }) 
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ProductSlide;