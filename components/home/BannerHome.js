import Link from 'next/link';
const BannerHome = () => (
    <section className="mt-4 homeBlock homeBanner">
        <div className="container">
            <div className="row row5">
                <div className="col-12 col-lg-6 bigBanner">
                    <Link href="/">
                        <a>
                            <img src="/static/images/banner_img_1.jpg" alt="" />
                        </a>
                    </Link>
                </div>
                <div className="col-12 col-lg-6 smallBanner">
                    <div className="row row5">
                        <div className="col-12 col-lg-6 img">
                            <Link href="/">
                                <a>
                                    <img src="/static/images/banner_img_2.jpg" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-6 img">
                            <Link href="/">
                                <a>
                                    <img src="/static/images/banner_img_3.jpg" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-6 img">
                            <Link href="/">
                                <a>
                                    <img src="/static/images/banner_img_4.jpg" alt="" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-6 img">
                            <Link href="/">
                                <a>
                                    <img src="/static/images/banner_img_5.jpg" alt="" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default BannerHome;