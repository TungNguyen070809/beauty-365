import Slider from "react-slick";
import Link from 'next/link';
const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
};
const SliderHome = () => (
    <section id="insHomeSlider">
        <div className="bannerSlider sliderControl">
            <Slider {...settings}>
                <div className="item">
                    <Link href="/">
                        <a>
                            <img src="/static/images/slider_item_1.jpg" alt="" />
                        </a>
                    </Link>
                </div>
                <div className="item">
                    <Link href="/">
                        <a>
                            <img src="/static/images/slider_item_2.jpg" alt="" />
                        </a>
                    </Link>
                </div>
                <div className="item">
                    <Link href="/">
                        <a>
                            <img src="/static/images/slider_item_3.jpg" alt="" />
                        </a>
                    </Link>
                </div>
            </Slider>
        </div>
    </section>
);
  
export default SliderHome;