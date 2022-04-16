import React from "react";

class PortfolioChild extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`col-lg-3 col-12 mb-3 ${this.props.bgColor}`}>
        <p className={this.props.border}>{this.props.value}</p>
      </div>
    );
  }
}

export default PortfolioChild;
