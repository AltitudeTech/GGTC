import React from 'react';
import { Row, Col, Button, Form, Input } from 'reactstrap';
import dynamic from 'next/dynamic'

const YouTube = dynamic(import('./YouTube'), {
  ssr: false
})

export default class Example extends React.Component {
  render() {

    return (
      <div className="prayer">
        <div className="form-text">For prayer requests or more information</div>
        <Form className="prayer-form">
          <Row>
            <Col md={9} sm={9} className="pr-md-1">
              <Input type="email" name="password" id="examplePassword" placeholder="Type in your email address" />
            </Col>
            <Col md={3} sm={3} className="pl-md-0">
              <Button className="form-button">SEND</Button>
            </Col>
          </Row>
        </Form>

        <YouTube />

        <style jsx>{`
          :global(.prayer-form) {
            padding: 10px 0px 10px;
          }
          :global(.form-button) {
            background-color: #2ba5f7;
          }
          .form-text {
            font-size: 1.1em;
          }
          @media only screen and (min-width: 768px) {
            .prayer {
              float: right !important;
            }
          }
        `}</style>
      </div>
    );
  }
}
