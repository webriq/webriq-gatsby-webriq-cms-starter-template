import React from "react";
// import { Link } from "gatsby";
import { Container, Row, Col} from "react-bootstrap";
import stylesHero from './hero.module.css'
import Popup from './Popup'

class Hero extends React.Component {
    render (){
      return (
        <section>
          <div className={stylesHero.hero}>
              <div className={stylesHero.heroSub}>
                  <Container>
                      <Row>
                          <Col className="py-5 text-center">
                            <h1 className={`${stylesHero.herotitle} my-4`}>WebriQ GLUE</h1>
                            <a className="d-block d-sm-inline-block btn btn-primary btn-inverted" href="https://app.webriq.com/account/create" target="_blank" rel="noopener noreferrer">WebriQ App</a>
                            <Popup classname="btn btn-primary btn-bordered w-100">GLUE</Popup>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </div>
        </section>
      )
    }
}
export default Hero
