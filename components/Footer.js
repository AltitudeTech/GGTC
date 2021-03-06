// import Link from 'next/link'
import { Row, Col } from "reactstrap";
import Moment from 'react-moment';
import SvgLoader from 'bv-react-svgloader'

const socialLinks = [
  {img: '/static/images/social/g-plus.svg', link: 'https://google-plus.com/'},
  {img: '/static/images/social/twitter.svg', link: 'https://twitter.com/'},
  {img: '/static/images/social/facebook.svg', link: 'https://facebook.com/'},
  {img: '/static/images/social/instagram.svg', link: 'https://instagram.com/'}
]
export default () => {


  return <footer className='Footer'>
    {/* <Container> */}
      <Row className="d-flex align-items-center h-100 mb-20">
        <Col md={4}>
          <div className="bible-verse">
            Hebrews 4:16
          </div>

        </Col>
        <Col md={4} className="bible-text">
          {/* <div > */}
            “Let us then approach God's throne of grace with
            confidence, so that we may receive mercy and find
             grace to help us in our time of need."
          {/* </div> */}
        </Col>
        <Col md={4}>
          <Row>
            <Col md={4}>
              <div className="bg-b">countdown</div>
              <Moment diff={new Date()} unit="days">2019-01-01T00:00-0000</Moment>
              <div className="bg-b">days to go</div>
            </Col>
            <Col md={8} style={{ paddingTop: '30px' }}>
              <div>Stay Connected</div>
              {socialLinks.map(({img, link}, i) => (
                <a href={link} key={i} className="social-item">
                  <SvgLoader src={img}/>
                </a>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <span className="tm">
        <b>Grace Global Trinity Center.</b> All Rights Reserved 2018
      </span>
      {/* <nav>
        <div className="Footer-nav-group">
        </div>
      </nav> */}
      {/* <p>2018 David Yusuf. All rights reserved. </p> */}
    {/* </Container> */}
    <style jsx>{`
      :global(time) {
        font-size: 45px;
      }
      .bg-b {
        background-color: #2ba5f7;
      }
      .bible-verse {
        font-size: 65px;
        text-align: center;
        margin-bottom: 20px;
      }
      :global(.bible-text) {
        padding: 0px 0px 20px;
        margin-bottom: 20px;
      }
      :global(.bible-text::after) {
        border: 1px solid #2ba5f7;
        bottom: 0;
        content: "";
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        width: 65%;
      }
      .social-item {
        padding: .5em 0.6em;
        display: inline-block;
      }
      .Footer {
        min-height: 20vh;
        padding: 30px 40px 30px;
        text-align: center;
        width: 100%;
        // margin: 0;
        // border: 0;
        // display: flex;
        // padding: 0;
        // overflow: hidden;
        // position: relative;
        align-items: center;
        // color: #fff;
        background-color: #022031;
      }
      `}</style>
  </footer>
};
