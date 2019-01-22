import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './popup.css'

class Popup extends React.Component {

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
      const script = document.getElementById("activecampaign");
      document.body.removeChild(script);
    }

    handleShow() {
      this.setState({ show: true });      
      const script = document.createElement("script");
      script.id = "activecampaign"
      script.src = "/js/activecampaign.js";
      document.body.appendChild(script);
       
    }
    render (){
      return (
          <div className="d-block d-sm-inline-block">
          <Button className={this.props.classname} onClick={this.handleShow}>{this.props.children}</Button>
          
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
            <h2>Request Access</h2>
            <p style={{fontSize: `18px`}}>WebriQ JAM Stack</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="_form_7">
            <Form method="POST" action="https://webriqservices.activehosted.com/proc.php" id="_form_7_" className="_form _form_7 _inline-form">
              <Form.Control type="hidden" name="u" value="7" />
              <Form.Control type="hidden" name="f" value="7" />
              <Form.Control type="hidden" name="s" />
              <Form.Control type="hidden" name="c" value="0" />
              <Form.Control type="hidden" name="m" value="0" />
              <Form.Control type="hidden" name="act" value="sub" />
              <Form.Control type="hidden" name="v" value="2" />
              <div className="_form-content">
                <div className="_form_element _x16079498 _full_width mb-4">
                  <div className="_field-wrapper">
                    <Form.Label htmlFor="fullname" className="_form-label">Full Name *</Form.Label>
                    <Form.Control size="lg" id="fullname" className="form-control" type="text" name="fullname" required />
                  </div>
                </div>
                <div className="_form_element _x30552343 _full_width mb-4">
                  <div className="_field-wrapper">
                    <Form.Label htmlFor="email" className="_form-label">Business Email *</Form.Label>
                    <Form.Control size="lg" id="email" className="form-control" type="text" name="email" required/>
                  </div>
                </div>
                <div className="_form_element _field4 _full_width mb-4">
                  <div className="_field-wrapper">
                    <Form.Label htmlFor="website" className="_form-label">Website Address</Form.Label>
                    <Form.Control size="lg" id="website" className="form-control" type="text" name="field[4]" />
                  </div>
                </div>
                <div className="_form_element _x94859880 _full_width mb-4">
                  <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"/>
                </div>
                <div className="_button-wrapper _full_width mt-4">
                  <Button id="_form_7_submit" variant="primary" className="_submit" type="submit">
                    Request Access
                  </Button>
                </div>
                <div className="_clear-element">
                </div>
              </div>
              <div className="_form-thank-you d-none"/>
            </Form>
          </div>
          </Modal.Body>
        </Modal>
        </div>
      )
    }
}
export default Popup