import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class GdprPage extends React.Component {
  render() {
    const siteTitle = "GDPR"
    const siteDescription = "Don’t build websites with last decade’s technologies, build it with WebriQ JAM Stack"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">

                        <p>GDPR is a European law that has the objective of protecting EU citizens’ personal information, and regulates how such data is collected, stored, and used.</p>
                        <a href="https://ec.europa.eu/info/law/law-topic/data-protection_en" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/info/law/law-topic/data-protection_en</a>
                        <h4 className="mt-4">Who does GDPR apply to?</h4>
                        <p>If you have a website that collects or processes personal data of EU residents, then the GDPR will apply to you and your processing of this personal data. It does not matter what industries you work in, whether you’re a B2B or B2C business, whether you’re a for profit or non-profit, whether you’re based in the EU or not, or whether you’re specifically targeting EU customers or not. If it’s possible for your organization to collect personal data from an EU resident, even unintentionally, you’ll need to comply, and it’s important you familiarize yourself, with the various obligations of the GDPR.</p>
                        <h4>Data subject rights</h4>
                        <p>GDPR creates some new privacy protections for individuals:</p>
                        <p><strong>Right to rectification</strong> – Individuals can ask that their information be updated or corrected.</p>
                        <p><strong>Right to be forgotten</strong> – Individuals can ask that their information be permanently deleted.</p>
                        <p><strong>Right of portability</strong> – Individuals can ask to have their information transferred to another organization.</p>
                        <p><strong>Right to object</strong> – Individuals may seek to prohibit certain uses of their personal data.</p>
                        <p><strong>Right of access</strong> – Individuals have the right to know what personal data that’s been collected about them and how it’s being used.</p>
                        <h4>More stringent consent requirements</h4>
                        <p>GDPR requires that an individual give informed, affirmative consent for each way their personal data will be collected, used, and processed. This means you’ll need to place additional opt-in statements on your forms and websites, and you won’t be able to collect, use, or process personal data until the individual has given that type of consent. You will not be able to rely on pre-ticked boxes, silence or inactivity as a basis for consent. Also, you’ll be unable to use data in any other way than what you obtained consent for. If you’d like to use the information in a new way, you’ll need to go back to the customer and get their consent.&nbsp;</p>
                        <p>In addition, these consent requirements will apply to all currently existing personal data you have of EU residents. If you already obtained consent from individuals as required by the GDPR, don’t worry, you don’t need new consents. If, however, the consents don’t meet the new GDPR standards, you will need to obtain new, adequate consents.</p>
                        <h4>More data processing transparency</h4>
                        <p>GDPR requires that individuals are given transparent information about how their personal data is going to be processed including the specific purpose for collecting the data, how long the data will be retained, and other details. Note, that this is not a comprehensive summary of all the changes GDPR brings. For more information on the key changes coming with GDPR, you can read the <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer">GDPR</a>.</p>
                        <h4>What are WebriQ, Elasticemail and ActiveCampaign Doing?</h4>
                        <p>As a customer of WebriQ and our Digital Marketing Platforms that are part of our Mad Services, GDPR grants you expanded privacy protections and rights. We are in compliance with these regulations and handle requests from you so that you can also be in compliance.</p>
                        <p><strong>Right to rectification</strong> – You’re able to edit account information at any time through your account settings. You can also reach out to us directly to edit or update your information. </p>
                        <p><strong>Right to be forgotten</strong> – You may cancel and terminate your account at any time. After receiving a request to be forgotten, we will permanently delete your account and all data associated with it within 30 days of receiving the request.&nbsp;</p>
                        <p><strong>Right of portability</strong> – If requested, we will export your data so it can be transferred to a third party. You’re able to do this now.</p>
                        <p><strong>Right to object</strong> – At any time, you may object (via opt out) to your personal data being used for specific purposes such as direct marketing, research, etc.</p>
                        <p><strong>Right of access</strong> – We’re transparent about the data we have and how we use it. You can contact us at any time if you’d like to access or edit your data or if you have any questions about your data and how we’re using it. When we make changes to our Terms of Service, we’ll send you an update to review and approve.</p>
                        <h4>How will we help you comply with GDPR requests from your Customers using our web and digital marketing platforms</h4>
                        <p>GDPR grants expands privacy protections and rights to your customers. Our compliance program (and those of the marketing automation tools mentioned above) will help you comply with requests you receive from your customers.</p>
                        <p><strong>Right to rectification</strong> – You can update your contact’s information&nbsp;at any time.</p>
                        <p><strong>Right to be forgotten</strong> – If you receive a request to be forgotten, you’re able to delete a contact, which permanently removes his or her information from your account. </p>
                        <p><strong>Right of portability</strong> – If your contact requests their personal data, you can export their data as a .csv file</p>
                        <p><strong>Right of access</strong> – Make sure that your existing Privacy Policy addresses how you’ll use and manage data. If your contact requests their personal data, you can export their data as a .csv file.</p>
                        <h4>How You Can Prepare</h4>
                        <h5>Require Opt-In confirmation</h5>
                        <p>Using double opt-in with clear verbiage ensures you’re complying with the informed affirmative consent requirement to use your contacts’ email addresses and other contact information to send them messages in the future. The GDPR requires that you make it as easy to opt out as it is to opt in. Our existing unsubscribe links in every email campaign helps meet this requirement. In case you only collect data from businesses, clearly specify that your require Business name and Business email for opt-in purposes.</p>
                        <h5>Familiarize yourself with how to edit and delete contacts</h5>
                        <p>Part of GPDR is the right to rectification, which basically means that a contact can request to have their information updated and corrected. We make it easy for you to find a specific contact and update their information on the contact record. </p>
                        <h5>Learn how to export individual contacts</h5>
                        <p>Right to portability and right of access requests both require you to be able to export individual contacts. </p>
                        <h5>Add an affirmative consent and usage statements to your opt-in forms</h5>
                        <p>One of the changes to GDPR is that you have to tell individuals specifically how their information will be used and get their consent. You’ll want to make it clear how you’ll be using the personal data that you collect on your opt-in consent forms. You can add whatever verbiage you want to a Form using an HTML block. We’re unable to supply the verbiage you should include because it’s highly dependent on how you’re using the data. </p>
                        <h5>Delete contacts and lists you no longer need</h5>
                        <p>GDPR’s intent is to protect the privacy of EU residents. Part of protecting that data means minimizing the risk that it could be abused or accessed without authorization. In the spirit of this regulation, it makes sense to delete personal data that is no longer necessary. You may choose to delete inactive or unsubscribed contacts rather than keeping them in your account. If you aren’t using the data, it’s safer to just get rid of it.</p>
                        <h4>How will we help you comply with GDPR requests from your Customers using our web platform, but various other digital marketing platforms to collect personal data.</h4>
                        <p>We can only guarantee that the platforms we build and are integrating as part of our Standard Mad Services are complying with the GDPR requirements. Services that are integrated with our Mad Services based on your specifications may or may not comply with the above GDPR requirements. You will need to consult the Privacy Policy of said vendors to ensure compliance. </p>

                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default GdprPage


export const GdprQuery = graphql`
  query GdprQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
