import React from "react";
import { Form, Segment, Header } from "semantic-ui-react";
import subjects from "./subjects";
import Part1 from "./Part1";

class Marks extends React.Component {
  constructor(props) {
    super(props);
    this.subjectsSection = subjects[props.section];
    this.max = Marks.generateMax(this.subjectsSection);
  }
  static generateMax(section) {
    const max = {
      te: section.te || 5,
      ce: section.ce || 5
    };
    return max;
  }
  render() {
    return (
      <Segment>
        <Part1 subjects={this.subjectsSection[1]} max={this.max} />
      </Segment>
    );
  }
}

export default Marks;
