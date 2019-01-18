import React, {Component} from "react";
import { Link } from "gatsby";
import "./header.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "react-sticky-header/styles.css";
// import Sticky from 'react-sticky-el';
import logo from "../../static/img/logo.png";
import logodark from "../../static/img/logo-dark.png";
import bar from "../../static/img/bar.png";
import bardark from "../../static/img/bardark.png";
import SideBar from "react-sidebar";
import SideBarNav from "./Sidebar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarpullRight: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div className="header-menu">
            <Container className="py-3">
              <Row className="align-items-center">
                <Col xs={6}>
                  <Link to="/">
                    <LazyLoadImage
                      effect="opacity"
                      src={logo}
                      alt="webriq"
                      className={`logoimg mb-0`}
                    />
                    <LazyLoadImage
                      effect="opacity"
                      src={logodark}
                      alt="webriq"
                      className={`logodarkimg mb-0`}
                    />
                  </Link>
                </Col>
                <Col xs={6}>
                <SideBar
          sidebar={
            <div>
              <SideBarNav/>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={this.state.sidebarpullRight}
          styles={{
            sidebar: {
              background: "white",
              width: "265px",
              position: "fixed",
              zIndex: "9"
            },
             root: {position: "relative", overflow: 'visible'}, 
             content: {
                position: 'relative', 
                overflow: 'visible',
                cursor: 'pointer'
              } 
          }}
        >
          <div className="nav_handle text-right" onClick={() => this.onSetSidebarOpen(true)}>
            <Image className="barlight mb-0" src={bar} alt="bar"/>
            <Image className="bardark mb-0" src={bardark} alt="bar"/>
        </div>
        </SideBar>
                  
                </Col>
              </Row>
            </Container>
        
      </div>
    );
  }
}

