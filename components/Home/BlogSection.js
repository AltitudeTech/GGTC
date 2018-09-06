import { Container, Row, Col } from "reactstrap";

import Button from '../Button'
import Section from '../Section'
import Post from '../Post'

export default () => (
  <Section
    backgroundColor='#f1f1f1'
    >
      <div className="blog-section">
        <Container>
          <div className="text-center">
            <h1 className="title">My Latest Blog Posts</h1>
            <br/>
            <Row>
              {[...Array(3)].map(el=>(
                <Col md={4} key={el}>
                  <Post/>
                </Col>
              ))}

            </Row>
            <br />
            <br />
            <br />
            <Button dark text='View More Posts →'/>
          </div>
        </Container>
      </div>
    <style jsx>{`
      .text-center {
        margin: 0;
        width: 100%;
        text-align: center;
      }
      .title {
        line-height: 1.15;
        font-size: 30px;
        // padding-bottom: 70px;
      }
      .blog-section {
        width: 100%;
        min-height: 80vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // align-items: center;
      }
      `}</style>
  </Section>
);
