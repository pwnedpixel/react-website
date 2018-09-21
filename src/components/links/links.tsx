import * as React from "react";
import { List } from "semantic-ui-react";

import "./links.css";

const Links = () => (
  <div className="links-container">
    <List divided={true} relaxed={true} horizontal={true}>
      <List.Item>
        <List.Icon name="file pdf" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" target="_blank" href="https://drive.google.com/file/d/1-JRCOPVoJfDBT--bKvNemBNGz9sNvpuz/view?usp=sharing">
            My Resume
          </List.Header>
          {/* <List.Description as="a"></List.Description> */}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" target="_blank" href="https://github.com/pwnedpixel">
            Github
          </List.Header>
          {/* <List.Description as="a">My GitHub Profile</List.Description> */}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="folder open" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" target="_blank" href="https://devpost.com/pwnedpixel">
            Hackathon Projects
          </List.Header>
          {/* <List.Description as="a">Hackathon Projects!</List.Description> */}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="linkedin" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" target="_blank" href="https://www.linkedin.com/in/arkeech/">
            Connect on LinkedIn
          </List.Header>
          {/* <List.Description as="a">Connect on Linkedin</List.Description> */}
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default Links;
