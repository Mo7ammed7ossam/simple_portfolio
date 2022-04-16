import React from "react";

import ProgressBar from "./progressBar";

class Skills extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  state = {
    Skills: [
      { id: 1, name: "HTML", range: 75 },
      { id: 2, name: "CSS", range: 85 },
      { id: 3, name: "JavaScript", range: 60 },
      { id: 4, name: "React", range: 50 },
      { id: 5, name: "Node.JS", range: 60 },
      { id: 6, name: "Wordpress", range: 30 },
    ],
  };

  render() {
    return (
      <div className="skills-container container-fluid py-5">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-12">
            <p className="skills-title">Skills</p>
          </div>

          <div className="col-10 my-5">
            <p className="skills-header">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>

          <div className="col-10">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-4 col-12 d-flex justify-content-center">
                <ul className="">
                  <li className="title pb-3">MY FOCUS</li>
                  <li className="">UI/UX Design</li>
                  <li className="">Responsive Design</li>
                  <li className="">Web Design</li>
                  <li className="">Mobile App Design</li>
                </ul>
              </div>

              <div className="col-lg-6 col-12 mt-3">
                {this.state.Skills.map((skill) => (
                  <ProgressBar
                    key={skill.id}
                    name={skill.name}
                    range={skill.range}
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

export default Skills;
