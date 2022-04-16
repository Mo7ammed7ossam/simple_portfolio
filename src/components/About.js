import React from "react";

class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about-container container py-5">
        <div className="row">
          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-top">
            <p className="about-header">About ME</p>
          </div>

          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-12">
                <p className="about-content my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="col-12">
                <a
                  className="btn px-4 py-2 mt-3"
                  href="./App.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="file.pdf"
                >
                  Download Resume
                </a>
                {/* <button className="px-4 py-2 mt-3">Download Resume</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
