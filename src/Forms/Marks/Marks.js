import React from "react";
import { Segment, Header, Step } from "semantic-ui-react";
import subjects from "./subjects";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

class Marks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Part 1"
    };
    this.subjectsSection = subjects[props.section];
    this.max = Marks.generateMax(this.subjectsSection);
    this.changeTab = this.changeTab.bind(this);
  }
  static generateMax(section) {
    const max = {
      te: section.te || 5,
      ce: section.ce || 5
    };
    return max;
  }
  changeTab(event, { title }) {
    this.setState({
      active: title
    });
  }
  render() {
    const { active } = this.state;
    return (
      <React.Fragment>
        <Step.Group attached="top">
          <Step
            link
            onClick={this.changeTab}
            active={active === "Part 1"}
            title="Part 1"
          />
          <Step
            link
            onClick={this.changeTab}
            active={active === "Part 2"}
            title="Part 2"
          />
          <Step
            link
            onClick={this.changeTab}
            active={active === "Part 3"}
            title="Part 3"
          />
        </Step.Group>
        <Segment attached>
          {active === "Part 1" && (
            <Part1
              subjects={this.subjectsSection[1].list}
              dual={this.subjectsSection[1].dual}
              max={this.max}
              emit={this.props.emit}
            />
          )}
          {active === "Part 2" && (
            <Part2
              subjects={this.subjectsSection[2].list}
              emit={this.props.emit}
            />
          )}
          {active === "Part 3" && (
            <Part3
              subjects={this.subjectsSection[3].list}
              emit={this.props.emit}
            />
          )}
        </Segment>
      </React.Fragment>
    );
  }
}

export default Marks;
