import React from 'react'
// import { Link } from 'gatsby'
// import { Container, Row, Col } from "react-bootstrap";
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'
import "@fortawesome/fontawesome-free/css/all.css";

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Hero/>
      )
    } else {
      header = (
        <Hero/>
      )
    }
    return (
      <div className={location.pathname === rootPath ? "homepage" : "mainpage"}>
        <Header/>
        {header}
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
