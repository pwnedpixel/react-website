import * as React from "react";
import { Container, Segment, Header, Input, Button } from "semantic-ui-react";
import "./terminal.css";

interface ITerminalState {
  enteredCommands: string[],
  currentInput: string,
  isTerminalExtended: boolean,
  hasBeenExpanded: boolean,
  isLoaded: boolean,
  hasBeenCleared: boolean
}

class Terminal extends React.Component<any, ITerminalState> {
  private inputElement: any;

  constructor(props: any) {
    super(props);
    this.state = { enteredCommands: [], currentInput: "", isTerminalExtended: false, isLoaded: false, hasBeenExpanded: false, hasBeenCleared: false };
    this.handleChange = this.handleChange.bind(this);
    this.inputElement = React.createRef();
    this.focus = this.focus.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  public render() {
    let expandButton;
    if (this.state.isTerminalExtended) {
      expandButton = <Button id="expand-button" onClick={this.toggleExpanded} content='Collapse' icon='up arrow' labelPosition='right' />
    } else {
      expandButton = <Button id="expand-button" onClick={this.toggleExpanded} content='Expand' icon='down arrow' labelPosition='right' />
    }

    return (
      <Container className={(!this.state.isLoaded?'preload':'') + " terminal-container"}>
        <Header attached="top" className="terminal-header">
          AK Term
        </Header>
        <Segment id="terminal-body" animated={'true'} onClick={this.focus} raised={true} attached={true} className={(this.state.hasBeenExpanded?(this.state.isTerminalExtended ? "terminal-body-expanded" : "terminal-body-collapsed"):"terminal-default") + " terminal-body"}>
        <span className={this.state.hasBeenCleared?"hide":""}>Type "help" for a list of commands</span>
          {this.state.enteredCommands.map((command, index) => (
            <div className="command-output" key={index}>
              {this.evaluateInput(command)}
            </div>
          ))}
          <Input id="terminal-input" autoFocus={true} ref={this.inputElement} icon="angle right" iconPosition="left" fluid={true} value={this.state.currentInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className="terminal-input" transparent={true} placeholder="input command here" />
        </Segment>
        {expandButton}
      </Container>
    );
  }

  private toggleExpanded() {
    this.setState({ isTerminalExtended: !this.state.isTerminalExtended, hasBeenExpanded: true });
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
      
      // Scroll to bottom after updating
      setTimeout(() => {
        console.log("scroll to top");
        const textarea = document.getElementById('terminal-body');
        textarea.scrollTop = textarea.scrollHeight;
      });
    }
  };

  private evaluateInput(input: string): any {
    switch (input.toLowerCase()) {
      case "contact":
        return (
          <Container>
            > {input} <br />
            <span className="bold-green">Email:</span> Andy@akeech.com <br />
            <span className="bold-green">Phone:</span> (226) 236-6662 <br />
            <span className="bold-green">LinkedIn:</span> <a target="_blank" href="https://www.linkedin.com/in/arkeech">linkedin.com/in/arkeech</a>
          </Container>
        );
      case "help":
        return (
          <Container>
            > {input} <br />
            <span className="blue">Commands Are:</span> resume, contact, clear, help <br />
          </Container>
        );
      case "clear":
        this.setState({ enteredCommands: [], hasBeenCleared: true });
        break;
      case "clr":
        this.setState({ enteredCommands: [] });
        break;
      case "resume":
        return (
          <Container>
            > {input} <br />
            <span className="white">&nbsp;█████╗&nbsp;███╗&nbsp;&nbsp;&nbsp;██╗██████╗&nbsp;██████╗&nbsp;███████╗██╗&nbsp;&nbsp;&nbsp;&nbsp;██╗</span><br />
            <span className="white">██╔══██╗████╗&nbsp;&nbsp;██║██╔══██╗██╔══██╗██╔════╝██║&nbsp;&nbsp;&nbsp;&nbsp;██║</span><br />
            <span className="white">███████║██╔██╗&nbsp;██║██║&nbsp;&nbsp;██║██████╔╝█████╗&nbsp;&nbsp;██║&nbsp;█╗&nbsp;██║</span><br />
            <span className="white">██╔══██║██║╚██╗██║██║&nbsp;&nbsp;██║██╔══██╗██╔══╝&nbsp;&nbsp;██║███╗██║</span><br />
            <span className="white">██║&nbsp;&nbsp;██║██║&nbsp;╚████║██████╔╝██║&nbsp;&nbsp;██║███████╗╚███╔███╔╝</span><br />
            <span className="white">╚═╝&nbsp;&nbsp;╚═╝╚═╝&nbsp;&nbsp;╚═══╝╚═════╝&nbsp;╚═╝&nbsp;&nbsp;╚═╝╚══════╝&nbsp;╚══╝╚══╝&nbsp;</span><br />


            <span className="underline bold-green">Education:</span><br />

            <span className="bullet">•	Fourth year Computer Engineering student at Western University</span><br />
            <span className="bullet">•	Awarded entrance scholarship for academic excellence</span><br />
            <span className="bullet">•	Fluently Bilingual in French and English (spoken & written), Dual secondary French/English diploma</span><br /><br />


            <span className="underline bold-green">Languagues and Technical Skills (in order of proficiency)</span><br />

            <span className="bullet">Github Profile: </span><a target="_blank" href="https://github.com/pwnedpixel">github.com/pwnedpixel</a><br />
            <span className="bullet">•	Java</span><br />
            <span className="bullet">•	HTML/CSS/JS</span><br />
            <span className="bullet">•	Angular 4/5</span><br />
            <span className="bullet">•	SCRUM/Agile</span><br />
            <span className="bullet">•	Git</span><br />
            <span className="bullet">•	Python</span><br />
            <span className="bullet">•	Maven</span><br />
            <span className="bullet">•	JBoss</span><br />
            <span className="bullet">•	React</span><br />
            <span className="bullet">•	Assembly (HC12 & 8080)</span><br />
            <span className="bullet">•	C#, C</span><br />
            
            <span className="underline bold-green">Work Experience:</span><br />

            <span className="bold">TD Bank: Software Development Intern: </span> <span className="right">May 2017-August 2018</span><br />
            <span className="bullet">•	Developer as part of a SCRUM pod, gained familiarity with Agile and participating in SCRUM ceremonies</span><br />
            <span className="bullet">•	Used Angular + redux to build web applications. java spring + maven + MSSQL backend, running on JBoss 6.4 Application servers </span><br />
            <span className="bullet">•	Deployed dev builds to cloud environments. Gained experience unit testing testing with JUnit and Jasmine.</span><br /><br />
            
            <span className="bold">StratITgy Solutions: SalesForce Integration Developer </span> <span className="right">December 2017-August 2018</span><br />
            <span className="bullet">•	Worked on a consulting team helping clients integrate their current systems and data with SalesForce</span><br />
            <span className="bullet">•	Created applications to migrate data from SQLServer to Salesforce and maintaining data integrity</span><br /><br />

            <span className="underline bold-green">Projects</span><br />
            <span className="bullet">•	Hackathon projects: </span><a target="_blank" href="https://devpost.com/pwnedpixel">devpost.com/pwnedpixel</a><br />

            <span className="bold">Chord Base: </span><br />
            <span className="bullet">•	Built a website that allowed users to upload and create guitar chord for their favourite music</span><br />
            <span className="bullet">•	Made use of the MERN stack, allowed users to create accounts and login to store private creations.</span><br /><br/>
         
            <span className="bold">Braille Printer: </span><br />
            <span className="bullet">•	First place winner of Hack Western 3, out of 90 teams (Hackathon)</span><br />
            <span className="bullet">•	Involved Software/Hardware design and implementation. </span><br />
            <span className="bullet">•	Used servos and actuators to create braille bumps on pieces of paper. input could be in the form of text or an image</span><br /><br />

            <span className="bold">Green Waste Bin: </span><br />
            <span className="bullet">•	Second place winner of QHacks 2017, out of 80 teams (Hackathon)</span><br />
            <span className="bullet">•	Created a device that could differentiate between garbage and recyclable materials and sort them </span><br />
            <span className="bullet">•	Image recognition and machine learning were used to classify the items placed in the device. servos then sorted the items</span><br /><br />

            <span className="bold">Voice of Reason: </span><br />
            <span className="bullet">•	Top 6 at DeltaHacks 3, out of 50 teams (Hackathon)</span><br />
            <span className="bullet">•	Created a voice controlled budgeting assistant for Android</span><br />
            <span className="bullet">•	Could keep track of budget categories and spending amounts.</span><br /><br />

            <span className="underline bold-green">Awards</span><br />
            <span className="bullet">•	Best User Experience | RUHacks 2018</span><br />
            <span className="bullet">•	Second Place | QHacks 2017</span><br />
            <span className="bullet">•	Finalist | DeltaHacks 3 (2017)</span><br />
            <span className="bullet">•	First Place | HackWestern 3 (2016)</span><br />
            <span className="bullet">•	Western Scholarship of Excellence</span><br />

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
