import React from "react";

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header-container container-fluid d-flex align-items-center">
        <div className="col-md-4 col-12 content">
            <div className="row text-center">
                <div className="col-12">
                    <h1>Mohamed Alwakiel</h1>
                </div>
                <div className="col-12 my-3">
                    <h5>Web Developer & Designer</h5>
                </div>
                <div className="col-12 mt-4">
                    <button className="px-4 py-2 ">
                        Contact ME
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
