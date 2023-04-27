import React from 'react'
import dai from "./assets/img/dai.jpg";
import { Link } from 'react-router-dom'

function HomeApp() {
  return (
<>
    <header id="header" className="header fixed-top bg-white">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center"
          title="Home Page"
        >
          <img src="assets/img/home2.png" alt="" />
          <span style={{ marginLeft: 5, marginTop: 10 }}>MDFA</span>
        </Link>
        
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto active" to="#hero">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#team">
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="getstarted scrollto"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"/>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  {/* End Header */ }

  {/* ======= Hero Section ======= */ }
  <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1>Welcome to Modern Dairy Farm Application </h1>
          <h2>
            We are team of talented employees to manage daily Dairy routine
          </h2>
          <div>
            <div className="text-center text-lg-start">
              <Link
                to="#about"
                className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
              >
                <span>Get Started</span>
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 hero-img"
        //
        //
        >
          <img src={dai} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */ }

  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
      <header className="section-header">
          <h2>About</h2>
          <p>The story behind our brand</p>
        </header>
        <div className="row gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>Govardhan Modern Dairy Management</h2>
              <p>
                Kolhapur Zilla Sahakari Dudh Utpadak Sangh Ltd. well known
                with its popular brand ‘Govardhan‘ is an Operation Flood
                cooperative dairy project established on 16th March 1963.
                Since then achieved many land marks in Milk Procurement,
                Extension, Animal Health, Breeding, Milk Processing, Product
                making and Marketing.
              </p>
              {/* <div className="text-center text-lg-start">
                <a

                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <img src="assets/img/ab-1.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}

    {/* ======= Counts Section ======= */}
    {/* <section id="counts" className="counts">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6" title="Total Clients">
            <div className="count-box">
              <i className="bi bi-emoji-smile" />
              <div>
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1220}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* End Counts Section */}

    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <header className="section-header">
          <h2>Services</h2>
          <p>Our different Services</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-box blue">
              <i className="ri-discuss-line icon" />
              <h3>Milk Producer</h3>
              <p>
                Govardhan is associated with almost 3,96,000 milch animal
                owning households in and around Kolhapur district. Milk is
                collected from 1220 villages.
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box orange">
              <i className="ri-discuss-line icon" />
              <h3>Societies</h3>
              <p>
                Dudh Sangh covers 1805 villages, 6564 dairy co-operative
                societies (DCS) on 443 milk routes for Milk procurement
                every day.
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box green">
              <i className="ri-discuss-line icon" />
              <h3>Cattlefeed Plant</h3>
              <p>
                Established 100 M.T. Capacity CFP in 1982 under Operation
                Flood-I .Expanded 200 M.T. Capacity CFP in 1992 under
                Operation Flood-II.
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box red">
              <i className="ri-discuss-line icon" />
              <h3>Animal Health</h3>
              <p>
                The Kolhapur Zilla Sahakari Dudh Utpadak Sangh Ltd
                (Govardhanilk Union) renders extension services, viz.,
                breeding, feeding, management &amp; also health care of the
                cows &amp; buffaloes.
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box purple">
              <i className="ri-discuss-line icon" />
              <h3>Gram Vikas Yojana</h3>
              <p>
                Gokul gram vikas yojana is a Community development programme
                specially designed to educate milk producers, Primary DCS
                staff, DCS management committee members and Dairy leaders.
                This programme is designed to educate all above members, at
                village level with their convenience.
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-box pink">
              <i className="ri-discuss-line icon" />
              <h3>WDCLD</h3>
              <p>
                Rural women’s more energy and time are spent in the task
                related to dairy husbandry &amp; milk production .Women’s
                are actual users of the dairy co-operatives. They should be
                encouraged to become members and share the responsibilities
                of managing the dairy cooperative
              </p>
              <a className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}

    {/* ======= Team Section ======= */}
    <section id="team" className="team">
      <div className="container">
        <header className="section-header">
          <h2>Body</h2>
          <p>Our Board Members</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin" />
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Vishwasrav Patil</h4>
                <span>Chairman</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/team2.jpeg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin" />
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Amit Anand</h4>
                <span>Expert Director</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/team3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin" />
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Shobhana Bhartia</h4>
                <span>Managing Director</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/team4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram" />
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin" />
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Neha Narkhede</h4>
                <span>Marketing Director</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Team Section */}

    {/* ======= Clients Section ======= */}
    {/* <section id="clients" className="clients">
      <div className="container" >
        <header className="section-header">
          <h2>Our Clients</h2>
          <p>Top rated Clients Support</p>
        </header>
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/clients/amul-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/ananda-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/danone-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/vita-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/dudhsagar-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/heritage-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/nandini-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/paras-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/dairy-best-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/ksheer-milk-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/mother-dairy-cheese-logo.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section> */}
    {/* End Clients Section */}

    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container">
        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt" />
                  <h3>Address</h3>
                  <p>
                    b1,Kolhapur-MIDC
                    <br />
                    Kolhapur, Pin-416 234
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone" />
                  <h3>Call Us</h3>
                  <p>
                    +91 9561907813
                    <br />
                    +91 9112101159
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope" />
                  <h3>Email Us</h3>
                  <p>
                    Govardhan1999@gmail.com
                    <br />
                    govmilk99@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock" />
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Monday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required=""
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */ }

  {/* ======= Footer ======= */ }
  <footer id="footer" className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <Link to="/" className="logo d-flex align-items-center">
              <img src="assets/img/home2.png" alt="" />
              <span>Govardhan</span>
            </Link>
            <p>Maharashtra Top rated Milk Producer Company</p>
            <div className="social-links mt-3">
              <a className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a >Home</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >About us</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Services</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Terms of service</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Milk Producer</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Societies</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Cattlefeed Plant</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Animal Health</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" />{" "}
                <a >Gram Vikas Yojana</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a >WDCLD</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              b1,Kolhapur-MIDC <br />
              Kolhapur, Pin-416 234
              <br />
              Kolhapur <br />
              <br />
              <strong>Phone:</strong> +91 9561907813
              <br />
              <strong>Email:</strong> Govardhan1999@gmail.com
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Govardhan</span>
        </strong>
        . All Rights Reserved
      </div>
    </div>
  </footer>
  {/* End Footer */ }
  </>
  );
}

export default HomeApp