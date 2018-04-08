import React from "react";
import { Header } from "semantic-ui-react";
import DualGroup from "./DualGroup";

class Part1 extends React.Component {
  emit = (subjectCode, marks) => {
    this.props.emit(subjectCode, marks, "Part 1");
  };
  render() {
    return (
      <React.Fragment>
        <Header>Part 1</Header>
        {this.props.subjects.map(subject => {
          return (
            <DualGroup
              key={subject.name}
              subject={subject}
              emit={this.emit}
              max={this.props.max}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Part1;
