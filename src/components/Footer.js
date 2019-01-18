import React from 'react'
import { Link } from "gatsby";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import stylesFooter from './footer.module.css'
import slack from "../../static/img/slack.png";
import twitter from "../../static/img/twitter.png";
import messenger from "../../static/img/messenger.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default () => 
  <footer className={stylesFooter.footer}>
    <div className="footer-bottom bg-dirty-white py-5">
      <Container>
        <Row>
          <Col md={6} className="pr-5">
            <h5 className="mb-4">ABOUT US</h5>
            <p>A diverse group of people coming from four continents with backgrounds in sales management, web design, open source web development, cloud based content management platforms and digital marketing.</p>
            <ul className={`${stylesFooter.footerInfo} list-unstyled`}>
              <li><LazyLoadImage className="mr-2" effect="blur" src="/img/email-icon.png"/><a href="mailto:info@webriq.com" title="info@webriq.com">info@webriq.com</a></li>
              <li><LazyLoadImage className="mr-2" effect="blur" src="/img/phone-icon.png"/><a href="tel://+14084694435" title="+14084694435">+1 408 469 4435</a> / <a href="tel://+61280911980" title="+61280911980">+61 2 8091 1980</a></li>
              <li><LazyLoadImage className="mr-2" effect="blur" src="/img/location-icon.png"/><span>80 Robinsons Road #02-00 Singapore 068898</span></li>
            </ul>

          </Col>
          <Col md={5} className="pl-5">
            <h5 className="mb-4">KEEP IN TOUCH</h5>
            <p>Join our newsletter to receive updates</p>
            <Form action="" className={stylesFooter.subscription}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control size="lg" type="email" name="email" />
                <Form.Text className="text-muted d-none">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                SUBSCRIBE
              </Button>
            </Form>
            <ul className={`${stylesFooter.footerIcons} list-unstyled d-flex justify-content-start align-items-center`}>
              <li className="mr-3"><a href="/" title="slack"><LazyLoadImage effect="blur" src={slack}/></a></li>
              <li className="mr-3"><a href="/" title="twitter"><LazyLoadImage effect="blur" src={twitter}/></a></li>
              <li className="mr-3"><a href="/" title="messenger"><LazyLoadImage effect="blur" src={messenger}/></a></li>
            </ul>
          </Col>

        </Row>
      </Container>
    </div>
    <div className="copyright">
      <Container>
        <p className="my-4">All rights reserved! WebriQ Pte Ltd  <Link to='/terms'>Terms of Use</Link> | <Link to='/cookies'>Cookies</Link></p>
      </Container>
    </div>
  </footer>
  


  

