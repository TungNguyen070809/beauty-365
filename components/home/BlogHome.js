import Slider from "react-slick";
import ArticleItem from '../../components/snippets/ArticleItem';
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
const BlogHome = ({ articles }) => {
    return (
        <section className="mt-4 homeBlock homeBlog">
            <div className="container">
                <div className="headingPage">
                    <h2 className="title">
                        TIN TỨC MỚI
                    </h2>
                </div>
                <div className="blockContent sliderControl slickMultiItem smaller">
                    <Slider {...settings}>
                        { articles.map((article, index) => {
                            return <div key={ article.id } className="articleItem col-12"><ArticleItem article={ article }/></div>
                            }) 
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default BlogHome;