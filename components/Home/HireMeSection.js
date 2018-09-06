import { Container } from "reactstrap";

import Button from '../Button'
import Section from '../Section'

export default () => (
  <Section
    backgroundImage='/static/images/hire-me-background.svg'
    >
    <div className="bg-hire-me hire-me-section">
      <Container>
        <div className="text">
          <span>consectetur adipiscing elit, sed do eiusmod tempor</span>
          <h1 className="title">Lorem ipsum dolor<br/> sit amet!</h1>
          <Button text='Contact Me Today'/>
        </div>
      </Container>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
      }
      .text {
        margin: 0;
        width: 100%;
        text-align: center;
      }
      .title {
        line-height: 1.15;
        font-size: 68px;
        padding-bottom: 70px;
      }
      .bg-hire-me {
        width: 100%;
        color: white;
      }
      .hire-me-section {
        height: 90vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        align-items: center;
      }
      `}</style>
  </Section>
);
