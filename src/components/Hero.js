import React from "react";
// import { Link } from "gatsby";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import stylesHero from './hero.module.css'

class Hero extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false,
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }
    render (){
      return (
        <section>
          <div className={stylesHero.hero}>
              <div className={stylesHero.heroSub}>
                  <Container>
                      <Row>
                          <Col className="py-5 text-center">
                            <h1 className={`${stylesHero.herotitle} my-4`}>WebriQ Glue</h1>
                            <a className="d-block d-sm-inline-block btn btn-primary btn-inverted" href="https://app.webriq.com/account/create" target="_blank" rel="noopener noreferrer">WebriQ App</a>
                            <Button className="d-block d-sm-inline-block btn btn-primary btn-bordered" onClick={this.handleShow}>GLUE</Button>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </div>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </section>
      )
    }
}
export default Hero
