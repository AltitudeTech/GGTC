import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
// import YouTubePlaylist from 'react-youtube-playlist';
import YouTube from 'react-youtube';

export default class Example extends React.Component {
  render() {
    const opts = {
      playlist: 'RDjsur8561',
      height: '160',
      width: '300',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div className="prayer">
        <div className="form-text">For prayer requests or more information</div>
        <Form>
          <FormGroup row>
            <Col sm={10} md={10} className="pr-1">
              <Input type="email" name="password" id="examplePassword" placeholder="Type in your email address" />
            </Col>
            <Col sm={2} md={2} className="pl-0">
              <Button className="form-button">SEND</Button>
            </Col>
          </FormGroup>
        </Form>
        <YouTube
          // videoId="2g811Eo7K8U"
          // playlist="RDjsur8561"
          opts={opts}
          onReady={this._onReady}
        />
        {/* <YouTubePlaylist
          width={'85%'}
          height={390}
          api_key='AIzaSyDqOg0997GmawkD1u1jKdXfqULYx5t7kbs'
          playlist_id='RDjsur8561'
          show_thumbnails
        /> */}
        <style jsx>{`
          :global(.form-button) {
            background-color: #2ba5f7;
          }
          .form-text {
            font-size: 1.1em;
          }
          .prayer {
            float: right;
          }
        `}</style>
      </div>
    );
  }
}
