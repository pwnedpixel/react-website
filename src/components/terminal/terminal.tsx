import * as React from "react";
import { Container, Segment, Header, Input } from "semantic-ui-react";
import "./terminal.css";

class Terminal extends React.Component<any, { enteredCommands: string[]; currentInput: "" }> {
    private inputElement: any;
  constructor(props: any) {
    super(props);
    this.state = { enteredCommands: [], currentInput: "" };
    this.handleChange = this.handleChange.bind(this);
    this.inputElement = React.createRef();
    this.focus = this.focus.bind(this);
  }

  public render() {
    return (
      <Container className="terminal-container">
        <Header attached="top" className="terminal-header">
          AK Term
        </Header>
        <Segment onClick={this.focus} raised={true} attached={true} className="terminal-body">
          {this.state.enteredCommands.map((command, index) => (
            <div className="command-output" key={index}>
              {this.evaluateInput(command)}
            </div>
          ))}
          <Input autoFocus={true} ref={this.inputElement} icon="angle right" iconPosition="left" fluid={true} value={this.state.currentInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className="terminal-input" transparent={true} placeholder="input command here" />
        </Segment>
      </Container>
    );
  }

  private focus() {
    this.inputElement.current.focus();
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

  private evaluateInput(input: string): any {
    switch (input.toLowerCase()) {
      case "contact":
        return (
          <Container>
            > {input} <br />
            <span className="bold-green">Email:</span> Andy@akeech.com <br />
            <span className="bold-green">Phone:</span> (226) 236-6662
          </Container>
        );
      case "help":
        return (
          <Container>
            > {input} <br />
            <span className="blue">Commands Are:</span> contact, help <br />
          </Container>
        );
      default:
        return (
          <Container>
            > {input} <br />
            Unknown command "{input}", type "help" for a list of commands
          </Container>
        );
    }
  }
}

export default Terminal;
