import Link from '../../ActiveLink';
var listMenu = [
    {
        name: 'Trang chủ',
        url: '/'
    },
    {
        name: 'Sản phẩm',
        url: '/danh-muc/tat-ca',
        childrens: [
            {
                name: 'Chăm sóc da mặt',
                url: '/danh-muc/cham-soc-da'
            },
            {
                name: 'Chăm sóc body',
                url: '/danh-muc/cham-soc-co-the'
            },
            {
                name: 'Kem chống nắng',
                url: '/danh-muc/kem-choc-nang'
            }
        ]
    },
    {
        name: 'Khuyến mãi',
        url: '/trang/khuyen-mai'
    },
    {
        name: 'Tin tức',
        url: '/tin-tuc/tin-tuc'
    },
    {
        name: 'Giới thiệu',
        url: '/trang/gioi-thieu'
    },
    {
        name: 'Liên hệ',
        url: '/trang/lien-he'
    }
]
const Nav = () => (
    <nav id="headerMenu">
        <div className="container">
            <div id="headerNav" className="navSiteMain">
                <ul className="nav-navbar list clearfix">
                    { listMenu.map((link, index) => (
                            <li key={ link.name } className={`${link.childrens && link.childrens.length > 0 ? 'liChild' : ''}`}>
                                <Link activeClassName="active" href={ link.url }>
                                    <a>{ link.name }</a>
                                </Link>
                                {
                                    link.childrens && link.childrens.length > 0 ?
                                    <ul className="mainChild levlup_2" role="menu">
                                        {
                                            link.childrens.map((child, ind) => {
                                                return (
                                                    <li key={ child.name }>
                                                        <Link activeClassName="active" href={ child.url }>
                                                            <a>{ child.name }</a>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul> : ''
                                }
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    </nav>
)
export default Nav;