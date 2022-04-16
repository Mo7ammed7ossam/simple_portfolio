import React from "react";

import PortfolioChild from "./portfolioChild";

class Portfolio extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  state = {
    portfolioTop: [
      {
        id: 1,
        value: "WEB DESIGN",
        bgColoe: "portfolio-content-dark",
        border: "first",
      },
      {
        id: 2,
        value: "MOBILE DESGIN",
        bgColoe: "portfolio-content-light",
        border: "first",
      },
      {
        id: 3,
        value: "LOGO DESIGN",
        bgColoe: "portfolio-content-dark",
        border: "first",
      },
    ],
    portfolioBottom: [
      {
        id: 1,
        value: "WEB APPLICATION DEVELOPMENT",
        bgColoe: "portfolio-content-light",
      },
      {
        id: 2,
        value: "MOBILE APPLICATION DEVELOPMENT",
        bgColoe: "portfolio-content-dark",
      },
      {
        id: 3,
        value: "PWA DEVELOPMENT",
        bgColoe: "portfolio-content-light",
      },
    ],
  };

  render() {
    return (
      <div className="portfolio-container container py-5 mb-5">
        <div className="row container">
          <div className="col-12 d-flex justify-content-start">
            <p className="portfolio-header">Portfolio</p>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="row d-flex justify-content-around mt-3">
                {this.state.portfolioTop.map((card) => (
                  <PortfolioChild
                    key={card.id}
                    border={card.border}
                    value={card.value}
                    bgColor={card.bgColoe}
                  />
                ))}
              </div>

              <div className="row d-flex justify-content-around ">
                {this.state.portfolioBottom.map((card) => (
                  <PortfolioChild
                    key={card.id}
                    border=""
                    value={card.value}
                    bgColor={card.bgColoe}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
