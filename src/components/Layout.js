import React from 'react'
// import { Link } from 'gatsby'
import { Container, Row, Col} from "react-bootstrap";
// import Sticky from 'react-sticky-el';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'
import stylesHero from './hero.module.css'
import "@fortawesome/fontawesome-free/css/all.css";
import NoScript from 'react-noscript';
import Cookies from 'universal-cookie';

class Layout extends React.Component {
    componentDidMount() {
      if(window) {
        const script = document.createElement("script");
        script.src = "/js/cookies.js";
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "//www.googleadservices.com/pagead/conversion.js";
        document.body.appendChild(script2);
        // Install Cookies
        document.addEventListener('DOMContentLoaded', function(event) {
          window.cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
            'Got it', 'learn more', '/cookies');
        });
        let trackByDefault = true;
        function acEnableTracking() {
        let expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
        document.cookie = "ac_enable_tracking=1; expires= " + expiration + "; path=/";
        acTrackVisit();
        }
        function acTrackVisit() {
        let trackcmp_email = '';
        let trackcmp = document.createElement("script");
        trackcmp.async = true;
        trackcmp.type = 'text/javascript';
        trackcmp.src = '//trackcmp.net/visit?actid=609846946&e='+encodeURIComponent(trackcmp_email)+'&r='+encodeURIComponent(document.referrer)+'&u='+encodeURIComponent(window.location.href);
        let trackcmp_s = document.getElementsByTagName("script");
        if (trackcmp_s.length) {
        trackcmp_s[0].parentNode.appendChild(trackcmp);
        } else {
        let trackcmp_h = document.getElementsByTagName("head");
        trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
        }
        }
        if (trackByDefault || /(^|; )ac_enable_tracking=([^;]+)/.test(document.cookie)) {
        acEnableTracking();
        }
      }
    }

  render() {
    // const { location, title, children } = this.props

    const cookies = new Cookies();
    cookies.set("onboarded", true, {path: "/"});

    const { location, title, children, customclass } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Hero/>
      )
    } else {
      header = (
        <section>
          <div className={stylesHero.hero}>
              <div className={stylesHero.heroSub}>
                  <Container>
                      <Row>
                          <Col className="py-5 text-center">
                            <h1 className="my-4">{title}</h1>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </div>
        </section>
      )
    }
    return (
      <div className={location.pathname === rootPath ? "homepage" : customclass || "mainpage"}>
        <Header/>
        {header}
        <main>
          {children}
        </main>
        <Footer/>
        <div id="cookieChoiceInfo"/>
        <NoScript>
          <div style={{display: 'inline'}}>
            <img height='1' width='1' style={{borderStyle:`none`}} alt='' src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/1018229817/?guid=ON&script=0'/>
          </div>
        </NoScript>
      </div>
    )
  }
}

export default Layout
