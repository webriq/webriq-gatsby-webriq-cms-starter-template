import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class PrivacyPage extends React.Component {
  render() {
    const siteTitle = "Privacy"
    const siteDescription = "Don’t build websites with last decade’s technologies, build it with WebriQ JAM Stack"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                      <h4>Introduction</h4>
                      <p>WebriQ PTE LTD, including its wholly owned affiliates, (“WebriQ”, “us,” “we,” or “our,”) is committed to protecting the privacy of your information. This Privacy Policy (“Policy”) governs WebriQ’s use of personally identifiable information, also “personal data,”&nbsp;about users of our products, services and/or software that are available for purchase and use through our sales teams, accessible by download on our websites (our “Services”), and also users of our website http://webriq.com as well as the other websites that WebriQ operates and that link to this Policy (collectively referred to as “Site(s)”). It also describes the choices available to you regarding our use of your personally identifiable information and how you can access and update this information.</p>
                      <p>WebriQ complies with the relevant regulation applying to personal data, including but not limited the General Data Protection Regulation issued by the European Union.</p>
                      <h4>Privacy Policy Updates</h4>
                      <p>Due to the Internet’s rapidly evolving nature, WebriQ may need to update this Privacy Policy from time to time. If so, WebriQ will post our updated Privacy Policy on our Site located at http://WebriQ.com/privacy and post notice of the change so it is visible when users log-on for the first time after the change is posted so that you are always aware of what personally identifiable information we may collect and how we may use this information. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our home page. WebriQ encourages you to review this Privacy Policy regularly for any changes. Your continued use of this Site and/or continued provision of personally identifiable information to us will be subject to the terms of the then-current Privacy Policy.</p>
                      <h4>Data Integrity and Purpose Limitation</h4>
                      <p>WebriQ&nbsp;is a provider of cloud platform related services, including Software as a Service (“SaaS”) products, technical support services and professional consulting services for WebriQ goes Mad websites which processes personally identifiable information upon the instruction of its customers in accordance with the terms of the applicable agreement between WebriQ and customer.</p>
                      <h4>Information Collection and Use</h4>
                      <p>You can generally visit our Site without revealing any personally identifiable information about yourself. However, in certain sections of this Site, we may invite you to participate in surveys, questionnaires or contests, contact us with questions or comments or request information, participate in chat or message boards, or complete a profile or registration form. Furthermore, we require you to complete a registration form to access certain restricted areas of the Site, to use certain services and when you access any software. Due to the nature of some of these activities, we may collect personally identifiable information such as your name, e-mail address, address, phone number, password, screen name, credit card information and other contact information that you voluntarily transmit with your on-line and in-person communications to us and personally identifiable information that you elect to include in your chart and message board postings.</p>
                      <p>If you use a forum on this Site, you should be aware that any personally identifiable information you submit there can be read, collected, or used by other users of these forums, and could be used to send you unsolicited messages. We are not responsible for the personally identifiable information you choose to submit in these forums. We receive permission to post testimonials that include personally identifiable information prior to posting.</p>
                      <h4>Orders</h4>
                      <p>If you purchase a service from us, we request certain personally identifiable information from you on our order form. You must provide contact information (such as name, email, and shipping address) and financial information (such as credit card number, expiration date).</p>
                      <p>We use this information for billing purposes and to fill your orders. If we have trouble processing an order, we will use this information to contact you.</p>
                      <p>In addition, we may collect information about the performance, security, software configuration and availability of customer web sites in an automated fashion as part of the WebriQ subscription services.</p>
                      <p>We use your personally identifiable information to register you to use our services or download or access software or other content, contact you to deliver services or information that you have requested, provide you with notices regarding services you have purchased, provide you with notices regarding services that you may want to purchase in the future, verify your authority to enter our Site and improve the content and general administration of the Site and our services.</p>
                      <p>If you choose to contact us by e-mail, we will not disclose your contact information contained in the e-mail, but we may use your contact information to send you a response to your message. Notwithstanding the foregoing, we may publicly disclose the content and/or subject matter of your message, therefore, you should not send us any ideas, suggestions or content that you consider proprietary or confidential. All e-mail content (except your contact information) will be treated on a non-proprietary and non-confidential basis and may be used by us for any purpose.</p>
                      <h4>Details of data processing</h4>
                      <p>WebriQ processes your personal data as a customer and other customer’s personal data (in the following just “customer”) in order to provide the contractually agreed Services.</p>
                      <p>Subject matter: The subject matter of the data processing is the performance of the Services agreed between WebriQ and customer by WebriQ involving personal data provided by customer.</p>
                      <p>Duration: As between customer and WebriQ, the duration of the data processing is determined by customer and its contractual commitments with regard to the use of WebriQ’s Services.</p>
                      <p>Purpose: The purpose of the data processing by WebriQ is the provision of the Services initiated by the customer from time to time.
                    </p>
                      <p>Nature of the processing: software as a service and such other Services as described in the Documentation and initiated by the customer from time to time.
                    </p>
                      <p>Type of personal data:</p>
                      <p>The type and extent of personal data that is subjected to WebriQ’s data processing is determined and controlled by our customer as data controller in its sole discretion - this may include, but is not limited to the following:</p>
                      <ul className="px-4">
                        <li>
                          <p>First and last name</p>
                        </li>
                        <li>
                          <p>Contact information (company, personal and work email, phone, home address, physical business address, emergency contact details)</p>
                        </li>
                        <li>
                          <p>Photographs</p>
                        </li>
                        <li>
                          <p>Biographical and directory information, including linked social media profile or posts</p>
                        </li>
                        <li>
                          <p>Company user names or IDs and login credentials</p>
                        </li>
                        <li>
                          <p>Actions performed by the employee while accessing or using the Services</p>
                        </li>
                      </ul>
                      <p>Categories of data subjects:&nbsp;Customer’s representatives and end-users including employees, contractors, collaborators and advisors of our customer (who are natural persons).</p>
                      <h4>Communications from the Site</h4>
                      <h5>Special Offers and Updates</h5>
                      <p>We will occasionally send you information on services, special deals, promotions. Out of respect for your privacy, we present the option not to receive these types of communications. Please see “Choice and Opt-out.”</p>
                      <h5>Newsletters</h5>
                      <p>If you wish to subscribe to our newsletter(s), we will use your name and email address to send the newsletter to you. Out of respect for your privacy, we provide you a way to unsubscribe. Please see the “Choice and Opt-out” section.</p>
                      <h5>Service-related Announcements</h5>
                      <p>We will send you strictly service-related announcements on rare occasions when it is necessary to do so. For instance, if our service is temporarily suspended for maintenance, we might send you an email.</p>
                      <p>Generally, you may not opt-out of these communications, which are not promotional in nature. If you do not wish to receive them, you have the option to deactivate your account.</p>
                      <h4>Customer Service</h4>
                      <p>Based upon the personally identifiable information you provide us, we will send you a welcoming email to verify your username and password. We will also communicate with you in response to your inquiries, to provide the services you request, and to manage your account. We will communicate with you by email, chat, ticketing system, Trello or telephone, in accordance with your wishes.</p>
                      <h4>Choice/Opt-out</h4>
                      <p>We provide you the opportunity to ‘opt-out’ of having your personally identifiable information used for certain purposes, when we ask for this information.</p>
                      <p>To request updates or changes to your information or your preferences regarding receiving future promotional messages from us, you may contact our Privacy Officer using the information in the Contact Us section of this Privacy Policy or follow the opt-out instructions that are contained in the bottom of the email communication you received.</p>
                      <p>You will be notified prior to when your personally identifiable information is collected by any third party that is not our agent/service provider, so you can make an informed choice as to whether or not to share your information with that party.</p>
                      <p>Please note that if you opt out of receiving our promotional or marketing emails, you may still receive certain service-related communications from us, such as administrative and services announcements and messages about your account.</p>
                      <h4>Children’s Privacy</h4>
                      <p>WebriQ recognizes the privacy interests of children and we encourage parents and guardians to take an active role in their children’s online activities and interests. This Site is not intended for children under the age of 18. WebriQ does not target its services or this Site to children under 18. WebriQ does not knowingly collect personally identifiable information from children under the age of 18.</p>
                      <h4>Privacy and GIFs</h4>
                      <p>We use small text files called cookies to improve overall Site experience. A cookie is a piece of data stored on the user’s hard drive containing information about the user. Privacy generally do not permit us to personally identify you (except as provided below). We may also use clear GIFs (a.k.a. “Web beacons”) in HTML-based emails sent to our users to track which emails are opened by recipients.</p>
                      <p>Additionally, when using the Site, we and any of our third party service providers may use cookies and other tracking mechanisms to track your user activity on the Site and identify the organization or entity from which you are using the Site. If you register with the Site, we, and our third party service providers, will be able to associate all of your user activity with your personally identifiable registration information. We will use such user activity information to improve the Site, to provide context for our sales and support staff when interacting with you and customers, to initiate automated email marketing campaigns triggered by your activity on the Site and for other internal business analysis.</p>
                      <p></p>
                      <h4>Aggregate Information</h4>
                      <p>The Site may track information that will be maintained, used and disclosed in aggregate form only and which will not contain your personally identifiable information, for example, without limitation, the total number of visitors to our Site, the number of visitors to each page of our Site, browser type, External Web Sites (defined below) linked to and IP addresses. We may analyze this data for trends and statistics in the aggregate, and we may use such aggregate information to administer the Site, track users’ movement, and gather broad demographic information for aggregate use.</p>
                      <p></p>
                      <h4>Disclosure</h4>
                      <p>We will not sell your personally identifiable information to any company or organization, except we may transfer your personally identifiable information to a successor entity upon a merger, consolidation or other corporate reorganization in which WebriQ participates or to a purchaser or acquirer of all or substantially all of WebriQ’s assets to which this Site relates. We may provide your personally identifiable information and the data generated by cookies and the aggregate information to parent, subsidiary or affiliate entities within WebriQ’s corporate family, partner entities that are not within WebriQ’s corporate family and vendors and service agencies that we may engage to assist us in providing our services to you. For example, we may provide your personally identifiable information to a credit card processing company to process your payment. Such third party service providers may be obligated to protect your personally identifiable information consistent with the terms of this Privacy Policy and not for their promotional purposes and/or required to enter into written confidentiality and data processing agreements including the commitment to be compliant with the Standard Contractual Clauses issued by the European Commission. We will also disclose your personally identifiable information (a) if we are required to do so by law, regulation or other government authority or otherwise in cooperation with an ongoing investigation of a governmental authority, (b) to enforce the WebriQ Terms of Use agreement or to protect our rights or (c) to protect the safety of users of our Site and our services.</p>
                      <p>The Site may provide links to other Web sites or resources over which WebriQ does not have control (“External Web Sites”). Such links do not constitute an endorsement by WebriQ of those External Web Sites. You acknowledge that WebriQ is providing these links to you only as a convenience, and further agree that WebriQ is not responsible for the content of such External Web Sites. Your use of External Web Sites is subject to the terms of use and privacy policies located on the linked External Web Sites.</p>
                      <p></p>
                      <h4>Security</h4>
                      <p>We employ procedural and technological measures that are reasonably designed to help protect your personally identifiable information including sensitive data from loss, unauthorized access, disclosure, alteration or destruction. WebriQ may use encryption, secure socket layer, firewall, password protection and other physical security measures to help prevent unauthorized access to your personally identifiable information including sensitive data. WebriQ may also place internal restrictions on who in the company may access data to help prevent unauthorized access to your personally identifiable information. These precautions take into account the risks involved in the processing, the nature of personally identifiable information, and best practices in the industry for security and data protection.</p>
                      <p></p>
                      <h4>Accountability for Onward Transfer</h4>
                      <p>WebriQ is accountable for personally identifiable information that we receive and subsequently transfer to third parties. If third parties that process personally identifiable information on our behalf do so in a manner that does not comply with the Privacy Policy Principles, we are accountable, unless we prove that we are not responsible for the event giving rise to the damage.</p>
                      <p>Contact information and Customer personally identifiable information is accessible only by those WebriQ employees and consultants who have a reasonable need to access such information in order for us to fulfill contractual, legal and professional obligations. All of our employees and consultants have entered into confidentiality agreements, and/or have been subjected to thorough criminal background checks requiring that they maintain the confidentiality of Customer personally identifiable information.</p>
                      <p>In the event WebriQ discloses personally identifiable information covered by this Policy to a non-agent third party, it will do so consistent with any notice provided to Data Subjects and any choice they have exercised regarding such disclosure. WebriQ will only disclose personally identifiable information to third-party agents that have given us contractual assurances that they will provide at least the same level of privacy protection as is required by this Privacy Policy and the Principles and that they will process personally identifiable information for limited and specific purposes consistent with any consent provided by the individual. If WebriQ has knowledge that a third party to which it has disclosed personally identifiable information covered by this Privacy Policy is processing such personally identifiable information in a way that is contrary to this Privacy Policy and/or the Principles, WebriQ will take reasonable steps to prevent or stop such processing. In such case, the third-party is liable for damages unless it is proven that WebriQ is responsible for the event giving rise to the violation.</p>
                      <p>WebriQ may use from time to time a limited number of third-party service providers, contractors, and other businesses to assist us in providing our solutions to our customers or in meeting internal business operation needs. These third-parties may access process or store personally identifiable information in the course of performing their duties to WebriQ. WebriQ maintains contracts with these providers restricting their access, use and disclosure of personally identifiable information in compliance with our obligations under the Principles.</p>
                      <p></p>
                      <h4>Updating and Deleting Personally Identifiable Information</h4>
                      <p>WebriQ provides you with the ability to review and update the contact information that you provide to us and account information retained by WebriQ related to your previous purchase, download or payment activities. If you wish to review and/or update any of the foregoing information, you may access your account and review and update your personally identifiable information or you may contact us at the e-mail, phone or mailing address listed below.</p>
                      <p>WebriQ will also delete the personally identifiable information that you have provided to us: (a) upon your request, or (b) upon termination of your WebriQ account; provided, however, WebriQ will retain a copy in its files of all personally identifiable information, if required for legal reasons.</p>
                      <p>If you wish to review, correct or request the deletion of any information you have provided to us, contact us: By mail: 324 Terrace Place, Manitou Springs, Colorado 80829</p>
                      <p>We will respond to your request for access within 30 days.</p>
                      <p>If you are an EU Person about whom we hold personally identifiable information on a customer’s behalf, you may request access to, and the opportunity to update, correct or delete, such personally identifiable information. To submit such requests or raise any other questions, please contact the business that provided your personally identifiable information. We reserve the right to take appropriate steps to authenticate an applicant’s identity, to charge an adequate fee before providing access and to deny requests.</p>
                      <p></p>
                      <h4>Enforcement and Liability</h4>
                      <p>WebriQ also commits to periodically reviewing and verifying the accuracy of this Policy and the company’s compliance with the Principles, and remedying issues identified. All employees of WebriQ that have access to personally identifiable information covered by this Policy are responsible for conducting themselves in accordance with this Policy. Failure of an WebriQ employee to comply with this Policy may result in disciplinary action up to and including termination.</p>
                      <p>WebriQ assures compliance with this EU-U.S. and Swiss-U.S. Privacy Shield Policy and the EU-U.S. and Swiss-U.S. Privacy Shield Frameworks by utilizing the self-assessment approach as specified by the U.S. Department of Commerce. The assessment is conducted on an annual basis to ensure that all of WebriQ’s relevant privacy practices are being followed in conformance with this EU-U.S. and Swiss-U.S. Privacy Shield Policy and the EU-U.S. and Swiss-U.S. Privacy Shield Frameworks. Any employee that WebriQ determines is in violation of these policies will be subject to discipline, up to and including termination of employment and/or criminal prosecution.</p>
                      <p></p>
                      <h4>Dispute Resolution</h4>
                      <p>WebriQ assures compliance with this EU-U.S. and Swiss-U.S. Privacy Shield Policy by fully investigating and attempting to resolve any complaint or dispute regarding the use and disclosure of personally identifiable information in violation of this Privacy Policy.</p>
                      <p>Any questions or concerns regarding the use or disclosure of personally identifiable information should first be directed to the owner of the website in question (our customer); or if the question or concern is from our customer, then to WebriQ at the address given below.</p>
                      <p>WebriQ will respond to any inquiries or complaints within forty-five (45) days. </p>
                      <p>WebriQ will cooperate with the United States Federal Trade Commissions and any data protection authorities of the EU Member States (“DPAs”) in the investigation and resolution of complaints that cannot be resolved between WebriQ and the complainant that are brought to a relevant DPA.</p>
                      <p></p>
                      <h4>Contact Us</h4>
                      <p>If you have any questions or complaints regarding this Privacy Policy please contact us by mail: WebriQ PTE LTD, 80 Robinson Road #02-00, Singapore 068898 </p>
                      <p></p>

                    </div>
                  </div>
              </div>
      </section>
      </Layout>
    )
  }
}

export default PrivacyPage


export const PrivacyQuery = graphql`
  query PrivacyQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
