import React from 'react'
import { Link } from 'gatsby'
import { Container } from "react-bootstrap";
import Header from './Header'
import Footer from './Footer'
// import Hero from './Hero'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'
import './layoutpost.css'
// import stylesHero from './hero.module.css'
import gradient from "../../static/img/image-gradient.png";
import "@fortawesome/fontawesome-free/css/all.css";

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    const { children } = this.props
    // console.log(this.props.lists)


    // const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <Hero/>
    //   )
    // } 
    return (
      <div className="mainpost">
        <Header/>
        <section>
            <Container fluid className="p-0">
               <div className="col p-0 blog-article-grid">
                {this.props.lists.slice(0,4).map(list => (
                    <div className="blog-article main" key={list.id}>
                      <div className="blog-article-cover-image lazy" style={{
                          backgroundImage: `url(${list.frontmatter.banner})`
                      }}/>
                      <Link to={list.fields.slug} className="blog-article-action-trigger"/>
                      <div className="blog-article-cover-gradient" style={{ backgroundImage: `url("${gradient}")`}}/>
                      <div className="blog-article-content">
                          <h2 className="blog-article-title">{list.frontmatter.title}</h2>
                          <div className="blog-article-info">
                              <ul className="list-unstyled d-flex">
                                  <li className="mr-3"><i className="far fa-user-circle mr-2"/>{list.frontmatter.author}</li>
                                  <li><i className="far fa-clock mr-2"/>{list.frontmatter.date}</li>
                              </ul>
                          </div>
                      </div>
                    </div>  
                ))}
            </div>
            </Container>
        </section>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout
