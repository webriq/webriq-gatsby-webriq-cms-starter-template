import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class CookiesPage extends React.Component {
  render() {
    const siteTitle = "Cookies"
    const siteDescription = "Don’t build websites with last decade’s technologies, build it with WebriQ JAM Stack"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                      <p>Most websites you visit will use cookies in order to improve your user experience by enabling that website to ‘remember’ you, either for the duration of your visit (using a ‘session cookie’) or for repeat visits (using a ‘persistent cookie’).</p>
                      <p>Cookies do lots of different jobs, like letting you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. Cookies make the interaction between you and the website faster and easier. If a website doesn’t use cookies, it will think you are a new visitor every time you move to a new page on the site – for example, when you enter your login details and move to another page it won’t recognise you and it won’t be able to keep you logged in.</p>
                      <p>Some websites will also use cookies to enable them to target their advertising or marketing messages based for example, on your location and/or browsing habits.</p>
                      <p>Cookies may be set by the website you are visiting (‘first party cookies’) or they may be set by other websites who run content on the page you are viewing (‘third party cookies’)</p>
                      <h4>What is in a cookie?</h4>
                      <p>A cookie is a simple text file that is stored on your computer or mobile device by a website’s server and only that server will be able to retrieve or read the contents of that cookie. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier and the site name and some digits and numbers. It allows a website to remember things like your preferences or what’s in your shopping basket.</p>
                      <h4>What to do if you don’t want cookies to be set</h4>
                      <p>Some people find the idea of a website storing information on their computer or mobile device a bit intrusive, particularly when this information is stored and used by a third party without them knowing. Although this is generally quite harmless you may not, for example, want to see advertising that has been targeted to your interests. If you prefer, it is possible to block some or all cookies, or even to delete cookies that have already been set; but you need to be aware that you might lose some functions of that website.</p>
                      <h4>Web browser cookies:</h4>
                      <p>If you don’t want to receive cookies, you can modify your browser so that it notifies you when cookies are sent to it or you can refuse cookies altogether. You can also delete cookies that have already been set.</p>
                      <p>If you wish to restrict or block web browser cookies which are set on your device then you can do this through your browser settings; the Help function within your browser should tell you how. Alternatively, you may wish to visit www.aboutcookies.org, which contains comprehensive information on how to do this on a wide variety of desktop browsers.</p>
                      <p>You can choose whether to accept cookies that are set by WebriQ Pte. Ltd. , and their suppliers, on the cookie settings page of your browser.</p>
                      <p>Most websites do work without cookies, but you will lose some features and functionality if you choose to disable cookies. For example, you won’t be able to set the weather to your chosen city.</p>
                      <h4>Do Not Track (DNT) browser setting</h4>
                      <p>DNT is a feature offered by some browsers which, when enabled, sends a signal to websites to request that your browsing is not tracked, such as by third party ad networks, social networks and analytic companies. This website does not currently respond to DNT requests, however, you may opt-out of tracking on this website, including analytics (and tailored advertising if you are visiting from outside the USA), by changing your cookie settings in your browser settings.</p>
                      <p>A uniform standard has not yet been adopted to determine how DNT requests should be interpreted and what actions should be taken by websites and third parties. We will continue to review DNT and other new technologies and may adopt a DNT standard once available.</p>
                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default CookiesPage


export const CookiesQuery = graphql`
  query CookiesQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
