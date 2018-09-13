import * as React from "react";
import { Container, Segment, Header, Input } from "semantic-ui-react";
import "./terminal.css";

class Terminal extends React.Component<{}, { enteredCommands: string[]; currentInput: "" }> {
  constructor(props: {}) {
    super(props);
    this.state = { enteredCommands: [], currentInput: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <Container className="terminal-container">
        <Header attached="top" className="terminal-header">
          AK Term
        </Header>
        <Segment raised={true} attached={true} className="terminal-body">
          {this.state.enteredCommands.map((command, index) => (
            <p className="command-output" key={index}>
              > {command}
            </p>
          ))}
           <Input icon='angle right' iconPosition='left' fluid={true} value={this.state.currentInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className="terminal-input" transparent={true} placeholder="input command here" />
        </Segment>
      </Container>
    );
  }

  private handleChange(event: any) {
    this.setState({ currentInput: event.target.value });
  }

  private handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      console.log("do validate: " + this.state.currentInput);
      this.state.enteredCommands.push(this.state.currentInput);
      this.setState({ currentInput: "" });
    }
  };
}

export default Terminal;
