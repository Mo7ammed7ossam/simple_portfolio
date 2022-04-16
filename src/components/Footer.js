import React from "react";

class Footer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer-container container-fluid py-5">
        <div className="row container mx-auto d-flex  justify-content-around">
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <div className="">
              <div className="col-12 mb-3">
                <h5>GET IN TOUCH</h5>
              </div>

              <div className="col-12">
                <i class="fa fa-envelope mx-2"></i>
                wikohossam35@gmail.com
              </div>
              <div className="col-12">
                <i class="fa fa-phone mx-2"></i>
                whatsApp (+20) 106-9167-342
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center my-5">
            <button className="px-4 py-2 ">Contact ME</button>
          </div>

          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-top">
            <div className="footer-copyright">
              <div className="footer-icon d-flex justify-content-around my-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-skype"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-pinterest"></i>
              </div>
              <p>Copyright © 2019 KR</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
