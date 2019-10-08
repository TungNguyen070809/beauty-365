import React, { useState } from 'react';
import Slider from "react-slick";
const FeedbackHome = () => {
    const [index, setIndex] = useState(1);
    const [list] = useState([
        {
            name: "Ms: Thanh Nhi",
            sub: "Sử dụng sản phẩm được sáu tháng",
            content: "Haravan đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ là ở cửa hàng, mà có thể dễ dàng bán ở khắp mọi kênh với bộ quản trị chuyên nghiệp."
        },
        {
            name: "Mr: Tài Koo",
            sub: "Sử dụng sản phẩm được ba tháng",
            content: "Haravan đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ là ở cửa hàng, mà có thể dễ dàng bán ở khắp mọi kênh với bộ quản trị chuyên nghiệp."
        },
        {
            name: "Ms: Thảo Tộc",
            sub: "Sử dụng sản phẩm được bảy tháng",
            content: "Haravan đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ là ở cửa hàng, mà có thể dễ dàng bán ở khắp mọi kênh với bộ quản trị chuyên nghiệp."
        },
        {
            name: "Mr: Kent",
            sub: "Sử dụng sản phẩm được một năm",
            content: "Haravan đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ là ở cửa hàng, mà có thể dễ dàng bán ở khắp mọi kênh với bộ quản trị chuyên nghiệp."
        },
        {
            name: "Ms: Thanh Thanh",
            sub: "Sử dụng sản phẩm được một năm",
            content: "Haravan đã cho chúng tôi một lợi thế cạnh tranh mới trong ngành bán lẻ thời trang, bán hàng ngày nay không chỉ là ở cửa hàng, mà có thể dễ dàng bán ở khắp mọi kênh với bộ quản trị chuyên nghiệp."
        }
    ]);
    const renderImageFeedback = function(key){
        var result = [], num = 0;
        for(let i=1; i<=5; i++){
            let fileName = `/static/images/fb_${i}.png`,
                style = `translate3d(${num}px, 0px, 0px) rotateX(0deg) rotateY(-180deg)`,
                time = '1000ms',
                zind = i;
            if(i === key){
                style = `translate3d(${num}px, 0px, 0px) rotateX(0deg) rotateY(0deg)`;
                zind = 10;
            }
            result.push(
                <div key={i} className={`item ${i === key ? 'active': ''}`} style={{transform: style, transitionDuration: time, zIndex: zind}}>
                    <div className="inner">
                        <img src={fileName} alt="" />
                    </div>
                </div>
            )
            num -= 340;
        }
        return result;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        beforeChange: function(oldIndex, newIndex){
            setIndex(newIndex + 1);
        }
    };
    const renderInfoFeedback = function(list){
        var result = [];
        result = list.map((fb, ind) => (
            <div key={ ind } className="fbItem">
                <p className="name">{ fb.name }</p>
                <small>{ fb.sub }</small>
                <hr className="line"></hr>
                <blockquote className="user-quote">
                    { fb.content }
                </blockquote>
            </div>
        ))
        return result;
    }
    return (
        <section className="mt-4 homeBlock homeFeedback">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 imgFb">
                        <div className="listImage">
                            <div className="wrapImage">
                                { renderImageFeedback(index) }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 contentFb">
                        <div className="listFb sliderControl">
                            <Slider {...settings}>
                                { renderInfoFeedback(list) }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackHome;