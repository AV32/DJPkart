import React from "react";
import "./header.css";
import SearchBar from "material-ui-search-bar";
function Header() {
  return (
    <div>
      <header
        className="desktop-container"
        id="desktop-header-cnt"
        data-reactid="3"
      >
        <div className="desktop-bound" data-reactid="4">
          {/* <div className="desktop-logoContainer" data-reactid="5"><a href="/" className="myntraweb-sprite desktop-logo sprites-headerLogo" data-reactid="6"></a></div> */}
          <nav className="desktop-navbar" data-reactid="7">
            <div className="desktop-navLinks" data-reactid="8">
              <div className="desktop-navContent" data-reactid="9">
                <div className="desktop-navLink" data-reactid="10">
                  <a
                    href="/shop/men"
                    data-index="0"
                    data-group="men"
                    data-color="#ee5f73"
                    data-type="navElements"
                    style={{ "border-bottom-color": "#ee5f73" }}
                    className="desktop-main"
                    data-reactid="11"
                  >
                    Men
                  </a>
                  <div className="desktop-backdropStyle" data-reactid="12">
                    <div className="desktop-paneContent" data-reactid="13">
                      <div
                        className="desktop-categoryContainer"
                        data-index="0"
                        data-group="men"
                        data-color="#ee5f73"
                        data-reactid="14"
                      >
                        <li
                          className="desktop-oddColumnContent"
                          data-reactid="15"
                        >
                          <ul className="desktop-navBlock" data-reactid="16">
                            <li data-reactid="17">
                              <a
                                href="/men-topwear"
                                style={{ color: "#ee5f73" }}
                                className="desktop-categoryName"
                                data-reactid="18"
                              >
                                Topwear
                              </a>
                            </li>
                            <li data-reactid="19">
                              <a
                                href="/men-tshirts"
                                className="desktop-categoryLink"
                                data-reactid="20"
                              >
                                T-Shirts
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="desktop-evenColumnContent desktop-oddColumnContent"
                          data-reactid="48"
                        >
                          <ul className="desktop-navBlock" data-reactid="49">
                            <li data-reactid="50">
                              <a
                                href="/men-bottomwear"
                                style={{ color: "#ee5f73" }}
                                className="desktop-categoryName"
                                data-reactid="51"
                              >
                                Bottomwear
                              </a>
                            </li>
                            <li data-reactid="52">
                              <a
                                href="/men-jeans"
                                className="desktop-categoryLink"
                                data-reactid="53"
                              >
                                Jeans
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="desktop-oddColumnContent"
                          data-reactid="78"
                        >
                          <ul className="desktop-navBlock" data-reactid="79">
                            <li data-reactid="80">
                              <a
                                href="/men-footwear"
                                style={{ color: "#ee5f73" }}
                                className="desktop-categoryName"
                                data-reactid="81"
                              >
                                Footwear
                              </a>
                            </li>
                            <li data-reactid="82">
                              <a
                                href="/men-casual-shoes"
                                className="desktop-categoryLink"
                                data-reactid="83"
                              >
                                Casual Shoes
                              </a>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="desktop-actions" data-reactid="763">
            <div className="desktop-user" data-reactid="764">
              <div className="desktop-userIconsContainer" data-reactid="765">
                <span
                  className="myntraweb-sprite desktop-iconUser sprites-headerUser"
                  data-reactid="766"
                ></span>
                <span className="desktop-userTitle" data-reactid="767">
                  Profile
                </span>
              </div>
              <div className="desktop-userActions" data-reactid="768">
                <div
                  className="desktop-userActionsArrow"
                  data-reactid="769"
                ></div>
                <div className="desktop-userActionsContent" data-reactid="770">
                  <div className="desktop-contentInfo" data-reactid="771">
                    <div className="desktop-infoTitle" data-reactid="772">
                      Welcome
                    </div>
                    <div className="desktop-infoEmail" data-reactid="773">
                      To access account and manage orders
                    </div>
                  </div>
                  <div data-reactid="774">
                    <div
                      className="desktop-getUserInLinks desktop-getInLinks"
                      data-reactid="775"
                    >
                      <a
                        href="/login"
                        data-track="login"
                        className="desktop-linkButton"
                        data-reactid="776"
                      >
                        login / Signup
                      </a>
                    </div>
                    <div className="desktop-getInLinks" data-reactid="777">
                      <a
                        href="/my/orders"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="778"
                      >
                        <div className="desktop-infoSection" data-reactid="779">
                          {/* <!-- react-text: 780 -->Orders
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/wishlist"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="781"
                      >
                        <div className="desktop-infoSection" data-reactid="782">
                          {/* <!-- react-text: 783 -->Wishlist
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/giftcard"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="784"
                      >
                        <div className="desktop-infoSection" data-reactid="785">
                          {/* <!-- react-text: 786 -->Gift Cards
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/contactus"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="787"
                      >
                        <div
                          className="desktop-infoSection"
                          data-reactid="788"
                        ></div>
                      </a>
                      <a
                        href="/myntrainsider?cache=false"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="790"
                      >
                        <div className="desktop-infoSection" data-reactid="791">
                          {/* <!-- react-text: 792 -->Myntra Insider
                                                    <!-- /react-text --> */}
                          <span
                            className="desktop-superscriptTag"
                            data-reactid="793"
                          >
                            {" "}
                            New{" "}
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="desktop-getInLinks" data-reactid="794">
                      <a
                        href="/my/myntracredit"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="795"
                      >
                        <div className="desktop-infoSection" data-reactid="796">
                          {/* <!-- react-text: 797 -->Myntra Credit
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/my/coupons"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="798"
                      >
                        <div className="desktop-infoSection" data-reactid="799">
                          {/* <!-- react-text: 800 -->Coupons
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/my/savedcards"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="801"
                      >
                        <div className="desktop-infoSection" data-reactid="802">
                          {/* <!-- react-text: 803 -->Saved Cards
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                      <a
                        href="/my/address"
                        data-track="coupons"
                        className="desktop-info"
                        data-reactid="804"
                      >
                        <div className="desktop-infoSection" data-reactid="805">
                          {/* <!-- react-text: 806 -->Saved Addresses
                                                    <!-- /react-text --> */}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/wishlist" className="desktop-wishlist" data-reactid="807">
              <span
                className="myntraweb-sprite desktop-iconWishlist sprites-headerWishlist"
                data-reactid="808"
              ></span>
              <span className="desktop-userTitle" data-reactid="809">
                Wishlist
              </span>
            </a>
            <a
              href="/checkout/cart"
              className="desktop-cart"
              data-reactid="810"
            >
              <span
                className="myntraweb-sprite desktop-iconBag sprites-headerBag"
                data-reactid="811"
              ></span>
              <span
                className="desktop-badge 
                    desktop-grey"
                data-reactid="812"
              ></span>
              <span className="desktop-userTitle" data-reactid="813">
                Bag
              </span>
            </a>
          </div>
          <div className="desktop-query">
            {/* <input
              placeholder="Search for products, brands and more"
              className="desktop-searchBar"
              value=""
              data-reactid="815"
            /> */}

            {/* <a className="desktop-submit">
              <span
                className="myntraweb-sprite desktop-iconSearch sprites-search"
                data-reactid="817"
              ></span>
            </a> */}
            <SearchBar
              style={{
                // maxWidth: 600,
                // width: "50%",
                height: 45,
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
