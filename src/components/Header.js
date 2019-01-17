import React, {Component} from "react";
import { Link } from "gatsby";
import stylesHeader from "./header.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import logo from "../../static/img/logo.png";
import bar from "../../static/img/bar.png";
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
        <StickyHeader
          className={stylesHeader.header}
          header={
            <Container className="py-4">
              <Row className="align-items-center">
                <Col md={6}>
                  <Link to="/">
                    <LazyLoadImage
                      effect="opacity"
                      src={logo}
                      alt="Hero Homes Search"
                      className={`${stylesHeader.logoimg} mb-0`}
                    />
                  </Link>
                </Col>
                <Col md={6}>
                  <div className="text-right">
                      <p className="mb-0" onClick={() => this.onSetSidebarOpen(true)}><Image src={bar}/></p>
                  </div>
                </Col>
              </Row>
            </Container>
          }
        />
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
              zIndex: "100"
            }
          }}
        >
          <p />
        </SideBar>
      </div>
    );
  }
}

