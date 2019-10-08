import Link from 'next/link';
import Fanpage from './Fanpage';
const FooterCenter = () => (
    <section className="footerCenter">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-5 ftColumn">
                    <div className="info logo">
                        <Link href="/">
                            <a><img src="/static/images/logo.png" alt="Làm đẹp 365" /></a>
                        </Link>
                        <div className="text">
							Ins Shop là chuyên trang cung cấp các sản phẩm chính hãng với đầy đủ các loại sản phẩm từ thời trang cho đến đồ dùng gia đình, đồ dùng cá nhân, mẹ và bé, nội thất... Với các thương hiệu nổi tiếng được nhập khẩu từ nhiều nước trên thế giới.
						</div>
                        <ul className="info-address list">
                            <li>
                                <i className="fa fa-location-arrow"></i>
                                <span>182, đường Lê Đại Hành, P. 15, Q. 11, Tp. Hồ Chí Minh</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <span>hi@haravan.com</span>
                            </li>

                            <li>
                                <i className="fa fa-phone"></i> 
                                <span>1900.636.099</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-3 ftColumn">
                    <div className="info">
                        <div className="headingPage ">
                            <h4 className="title">THÔNG TIN</h4>
                        </div>
                        <ul className="list linklist">	
                            <li>
                                <Link href="/"><a>Về chúng tôi</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a>Hướng dẫn mua hàng</a></Link>
                            </li>
                            
                            <li>
                                <Link href="/"><a>Chính sách mua hàng</a></Link>
                            </li>
                            
                            <li>
                                <Link href="/"><a>Chính sách giao hàng</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a>Liên hệ</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-4 ftColumn">
                    <div className="info">
                        <div className="headingPage ">
                            <h4 className="title">LIÊN KẾT FANPAGE</h4>
                        </div>
                        <Fanpage />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default FooterCenter;