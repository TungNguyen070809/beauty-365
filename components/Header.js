import Link from 'next/link';
import Nav from '../components/snippets/Nav';

const Header = () => (
  <header id="insHeaderPage" className="headerTemp">
    <div id="headerPage">
      <div className="container">
        <div className="row">
          <div id="headerLogo" className="col-lg-3 col-md-12 col-12">
            <div className="d-none mbToggle translateY-50">
              <a href="#" className="btnMBToggleNav menuHeading">
                <div className="icon"><span></span></div>
              </a>
            </div>
            
            <p>
              <Link href="/"><a><img src="/static/images/logo.png" alt="Làm đẹp 365" /></a></Link>
            </p>
            
            <h1 className="d-none">
              Cửa hàng Làm đẹp 365
            </h1>
            <div className="d-none mbCart translateY-50">
              <Link href="/gio-hang">
                <a>
                  <div className="icon">
                    <i className="fas fa-shopping-bag" aria-hidden="true"></i>
                  </div>
                  <span id="cartCountMB" className="numberCart" data-count="0">0</span>
                </a>
              </Link>
            </div>
          </div>
          <div id="headerSearch" className="col-lg-6 col-12">
            <div className="frmSearch">
              <form id="searchFRM" action="/search">
                <i className="fa fa-search"></i>
                <input required="" autoComplete="off" type="text" name="q" id="inputSearchAuto" placeholder="Nhập từ khóa bạn cần tìm..." />
                <button type="submit" className="insButton btnSearch">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <ul className="searchEx list">
              <li className="title"><strong>Gợi ý từ khóa:</strong></li>
              <li><span>Trắng da, Dưỡng da, Kem chống nắng...</span></li>
            </ul>
          </div>
          <div id="headerUser" className="col-lg-3">
            <div className="wrap cleafix">
              <div className="userBox float-left relative">
                <Link href="/huong-dan-mua-hang">
                  <a>
                    <div className="box">
                      <div className="icon">
                        <i className="fa fa-yelp"></i>
                      </div>
                      <div className="text">
                        <span>Hướng dẫn</span>
                        <span className="sub">mua hàng</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="cartBox float-right relative">
                <Link href="/gio-hang">
                  <a>
                    <div className="groupCart">
                      <div className="box">
                        <div className="icon">
                          <i className="fa fa-shopping-basket"></i>
                        </div>
                        <div className="text">
                          <span>Giỏ hàng (<span id="cartCount" className="numberCart">0</span>)</span>
                          <span id="cartPrice" className="sub">0₫</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </header>
);

export default Header;