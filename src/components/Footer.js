import React, {Component} from 'react'
import { Link } from "gatsby";
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import stylesFooter from './footer.module.css'
import linkedin from "../../static/img/linkedin.png";
import twitter from "../../static/img/twitter.png";
import webriqmad from "../../static/img/webriqmad.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class Header extends Component {

  componentDidMount() {
    if(window) {
      window.onloadCallback = function() {
        var eewebformsubmit = document.getElementById("eesubmit");
        window.grecaptcha.render('webformcaptcha', { 'sitekey': '6Lca-iUUAAAAAAQ6T6vYEAp3YybZWpeKUXRJ5E8S', 'callback': function(response) { eewebformsubmit.disabled = false; } });
      };
    const script = document.createElement('script')
          script.type = 'text/javascript'
          script.id= 'recaptchaScript'
          script.setAttribute("defer", "")
          script.setAttribute("async", "")
          script.src = `https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit`
          const headScript = document.getElementsByTagName('script')[0]
          headScript.parentNode.insertBefore(script, headScript)
    }
  }

  render(){
    return (
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
              <Col md={5} className="pl-3 pl-md-5">
                <h5 className="mb-4">KEEP IN TOUCH</h5>
                <p>Join our newsletter to receive updates</p>
                <Form action="https://emailmarketing.webriq.services/contact/add?version=2" data-id="qeOeJduFWw" method="post" id="ewf_subscriptionForm_qeOeJduFWw" className={stylesFooter.subscription}>
                  <fieldset className="webform-custominputs">
                    <Form.Group className="inputs">
                      <div className="ewf_form_field">
                      <Form.Control maxLength="60" className="form-control" name="email" size="lg" type="email" undefined="" required/>
                      <Form.Text className="text-muted d-none">We'll never share your email with anyone else.</Form.Text>
                      </div>
                    </Form.Group>
                    <div className="checkboxes"/>
                    <div className="webform-lists"/>
                  </fieldset>
                  <fieldset className="webform-options">
                    <div id="captcha" className="mb-3">
                      <div className="text-center d-inline-block mx-auto">
                        <div id="webformcaptcha"/>
                      </div>
                    </div>
                    <Button type="submit" name="submit" variant="primary" id="eesubmit" disabled="">SUBSCRIBE</Button>
                    <input type="hidden" name="publicaccountid" value="992d3f2b-bf67-4d2f-854d-33bf808d21c1"/>
                    <input type="hidden" name="publicformid" value="43c4c9c7-a55a-4fd2-a0a5-56ecdb7576f5"/>
                    <input type="hidden" name="returnUrl" value="https://webriq.us/subscription-successful"/>
                    <input type="hidden" name="activationReturnUrl" value="https://webriq.us/subscription-active"/>
                    <input type="hidden" name="alreadyactiveurl" value="https://webriq.us/"/>
                    <input type="hidden" name="activationTemplate" value=""/>
                    <input type="hidden" name="source" value="WebForm"/>
                    <input type="hidden" id="ewf_captcha" name="captcha" value="true"/>
                    <input type="hidden" name="notifyEmail" value=""/>
                    <button id="ewf_dismissForm" style={{
                      display:`none`,
                      position: `absolute`,
                      top: 0,
                      right: 0,
                      float: `right`
                    }}>X
                    </button>
                  </fieldset>
                </Form>
                <ul className={`${stylesFooter.footerIcons} list-unstyled d-flex justify-content-start align-items-center mt-3`}>
                  <li className="mr-3"><a href="https://twitter.com/WebriQ" title="twitter" target="_blank" rel="noopener noreferrer"><LazyLoadImage width="35" effect="blur" src={twitter} alt="twitter"/></a></li>
                  <li className="mr-3"><a href="https://www.linkedin.com/in/philippebodart/" title="philippebodart linkedin" target="_blank" rel="noopener noreferrer"><LazyLoadImage width="35" effect="blur" src={linkedin} alt="philippebodart linkedin"/></a></li>
                  <li className="mr-3"><a href="https://www.messenger.com/t/WebriQHQ" title="webriq goes mad" target="_blank" rel="noopener noreferrer"><LazyLoadImage width="35" effect="blur" src={webriqmad} alt="webriq goes mad"/></a></li>
                  <li className="mr-3"><a href="https://www.linkedin.com/in/alexbelding/" title="alexbelding linkedin" target="_blank" rel="noopener noreferrer"><LazyLoadImage width="35" effect="blur" src={linkedin} alt="alexbelding linkedin"/></a></li>
                </ul>
              </Col>

            </Row>
          </Container>
        </div>
        <div className="copyright">
          <Container>
            <p className="my-4">All rights reserved! WebriQ Pte Ltd  <Link to='/terms'>Terms of Use</Link> | <Link to='/privacy'>Provicy Policy</Link> | <Link to='/gdpr'>About GDPR</Link> | <Link to='/cookies'>Cookies</Link></p>
          </Container>
        </div>
      </footer>

    )
  }
}

  
