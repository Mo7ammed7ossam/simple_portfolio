import React from "react";

class ProgressBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="progress">
        <span className="progress-title">{this.props.name}</span>
        <span
          style={{ width: `${this.props.range}%` }}
          className="progress-bar"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></span>
      </div>
    );

    // return (
    //   <div className="w-100 my-3 py-2 ">
    //     <div className=" row w-100 d-flex justify-content-start flex-row">
    //       <div className="col-2 bg-secondary">{this.props.course}</div>
    //       <div className="col-10 bg-light px-0">
    //         <div
    //           style={{
    //             width: this.props.degree * 7.2,
    //             backgroundColor: "#ccc",
    //           }}
    //           className="text-muted"
    //         >
    //           {`${this.props.degree}%`}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default ProgressBar;
