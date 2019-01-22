import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import './is-webriq-glue-for-you.css'


class TermsPage extends React.Component {
  render() {
    const siteTitle = "Terms"
    const siteDescription = "Don’t build websites with last decade’s technologies, build it with WebriQ JAM Stack"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <section className="webriq-glue my-5 py-5">
              <div className="container">
                  <div className="row">
                    <div className="mx-auto col-md-8 col-sm-10">
                        <p>Please read our terms and conditions, which you agree to in signing up for our Mad service packages and all associated service packages and other services that our company might be selling from time to time.</p>
                        <p>“WebriQ Pte. Ltd.”, with a registered office on 80 Robinson Road, #02-00 Singapore, and WebriQ Financial Services LLC., with registered office in Cheyenne, USA are offering branded and non-branded web and digital marketing services under WebriQ Services.</p>
                        <p>The terms and conditions include important provision, such as payment terms, refund rights and limiting our liability and excluding our liability in case of loss of data and the consequential financial damage that may arise out of the loss of some or all of the data that is on your website, whether you put it in through your own means or third parties.</p>
                        <p>We assume no responsibility as to the nature of the content or anything contained in the web sites build by the customers, and our company disclaims all liability, contingent and non-contingent as to the nature and the accuracy of the content.</p>
                        <p>By accessing, using or downloading materials from the site or by completing the registration process and clicking the “Create Account” button or clicking on “Register”, you are stating that you are at least 18 years old or a minor whose parent is allowing you to use our site, and that you agree with the following terms.</p>
                        <h4>1. Registration and acceptance of terms</h4>
                        <p>The service packages are provided to you by our company and by registering to one of our service packages you explicitly agree to the Terms and Conditions set forth herein, which may be updated from time to time without prior notification to you. You are also subject to all guidelines with respect to the use of our services, guidelines will be posted time to time on our portal website.</p>
                        <p>By registering to one of our services, a legal contract is formed between you and the Company and you completely accept the terms and conditions herein. The minimum duration of the contract is one (1) year after which it will be renewed silently for another year, unless it is terminated according to the then current terms and conditions or terminated otherwise.</p>
                        <p>In consideration of your use of our services, you agree to: (a) provide true, accurate, current and complete information about yourself and your company, where applicable and (b) maintain and promptly update your information to keep it true, accurate and current. If you provide any information that is untrue, inaccurate or not current, or if the Company has reasonable grounds to suspect that such information is untrue, inaccurate or not current, the Company has the right to suspend or even terminate the services to you without prior notification.</p>
                        <p>As part of the registration process, you will create a password and receive account information. It is your responsibility to keep this password and account information confidential. You are responsible for all actions taken under your password and your account. You agree to immediately notify the Company of any unauthorized use of your password and/or your account or any other breach of security. The Company cannot and will not be liable for any loss or damage arising from the failure to comply with our security measures.</p>
                        <h4>2. Charges and Billing</h4>
                        <p>If you are required to pay a fee for all or any part of the Service for which you have chosen to register, you hereby authorize the Company to charge your credit/debit card in advance for all applicable fees and applicable taxes incurred by you in connection with your chosen Service and your Account. The Company is using a third party to manage its subscriptions and payments. You are authorizing the Company to take both an immediate and a repeat payment, in case you choose to pay for our service monthly in advance.</p>
                        <p>You can cancel your subscription at any time. Your cancellation will become effective at the end of the current subscription period, i.e. the remainder of the subscription period and your site will remain accessible at least until the end of your subscription period. It may be that you need to notify our Customer Services department in writing of your cancellation specifying all your customer details, reference numbers and website sub-domain. It may be that you need to cancel any future payments with your payment service provider, to avoid any additional funds taken from your account after cancellation of the service. The Company can take no responsibility for additional funds taken from card, unless you explicitly cancel future payments with your service provider, if and when needed.</p>
                        <p>The Company has the right to terminate your account if you breach all or any of the terms and conditions, including the terms and conditions with regard to the payment of the services. The Company will inform you by e-mail of such a termination, and you account will be suspended with immediate effect. Your account will be terminated if you have not remedied the breach of terms and conditions within 30 days after notification or suspension, and all the remainders of any payment made by you will not be refunded.</p>
                        <p>In the event your terminated account is referred to a collection agency and/or law firm, you will liable for all costs which would be incurred as if the debt is collected in full, including legal demand costs.</p>
                        <p>Refunds are only provided at the discretion of the company and all billing, payment and refund issues need to be reported stating all your customers’ details, reference numbers and website sub-domain.</p>
                        <h4>3. Description of services and specific rights</h4>
                        <p>The Company currently provides you with a host of on-line services and resources to build, manage and administer your website as site owner or site manager. You acknowledge that you will follow all the guidelines that the Company will issue from time to time in order not to disrupt your service and the service from other customers. Unless explicitly stated otherwise, any new features that enhance our service or any other tools that will become available to you, will be bound by these terms and conditions.</p>
                        <p>Some of our partners are offering additional services to our standard services – the Company will not be liable for the functionality, uptime and or integration with our services. In case of withdrawal of these services by our partners, the company will use its best effort to replace those services within a reasonable time frame, but the Company has no obligation to do so.</p>
                        <p>You understand that the phrase “Designed by WebriQ Goes Mad” can be placed in the footer to each and every web page generated and transmitted by our service but may be easily removed from your website if requested by you. </p>
                        <p>You agree to allow the Company to announce our customer relationship with you in a press release or similar distribution. This includes allowing us to profile and link to your site in any communications.</p>
                        <p>You agree to allow the Company to list your site in a directory without your permission unless otherwise agreed upon. It is your responsibility to contact the Company to have your site unlisted.</p>
                        <h4>4. Privacy and Code of Conduct</h4>
                        <p>You agree that all information, whether data, text, video, audio, software etc. and whether publicly posted or privately transmitted is the sole responsibility of the person who originated the content. The company is in no way responsible for the content that you upload, post, email or otherwise transmit using the company’s web building tools.</p>
                        <p>The company does not, and is in no obligation to control the content posted on your site(s) and is therefore in no position to guarantee the accuracy, integrity or quality of such content. You may be exposed to content that is inaccurate, offensive, indecent – under no circumstances will the company be liable for any of the content posted or transmitted through your site(s), any errors or omissions in any content and the company is not liable for any loss, contingent and non-contingent that may result in the posting or transmitting of any content through your site(s).</p>
                        <p>The service CAN NOT be use for following purposes:</p>
                        <ul className="px-4">
                          <li>
                            <p>To upload, post, publish or distribute any content that is unlawful, defamatory, harmful or an invasion of another’s privacy, or otherwise object, including but not limited to material that promotes or provides instructional information about illegal activities or promotes physical harm or injury against any group or individual</p>
                          </li>
                          <li>
                            <p>To upload, post, publish or distribute any content that you do not have the right to distribute under any law, or under contractual or fiduciary relationship</p>
                          </li>
                          <li>
                            <p>To upload, post, publish or distribute any content that infringes any patent, trademark, trade secret, copyright or other proprietary and intellectual rights of any party, or rights of publicity or privacy of any party</p>
                          </li>
                          <li>
                            <p>To harm minors in any way, either intentionally or unintentionally</p>
                          </li>
                          <li>
                            <p>To create sites that contain nudity, or pornographic material or sexual material or material that is obscene in nature without prior and specific consent of the company and without suitable warning to browsers as to the nature of the content prior to viewing it</p>
                          </li>
                          <li>
                            <p>To forge headers or otherwise manipulate identifiers in order to disguise the origin of any content transmitted through the sites</p>
                          </li>
                          <li>
                            <p>To upload, post, publish or distribute any unsolicited or unauthorized advertisements, promotional material, junk mail, spam, chain letters, pyramid schemes etc.</p>
                          </li>
                          <li>
                            <p>To upload, post, publish or distribute any material that contains software viruses or any other computer code or files with the intention to interrupt, destroy or limit the functionality of any computer or software, telecommunication equipment or harm the service offered by the company.</p>
                          </li>
                          <li>
                            <p>To interfere with or disrupt the servers of the Company or infringe any requirements, procedures or policies of networks connected to the servers of the Company, or interfering with the use of other customers of the Company, including but not limited to (i) transmitting any material that contains viruses that are intended to damage any system, data or personal information, or (ii) attempting to gain unauthorized access to the Company’s services, or private data through password mining</p>
                          </li>
                          <li>
                            <p>To intentionally or unintentionally violate any applicable law, whether local or international</p>
                          </li>
                          <li>
                            <p>To intentionally or unintentionally violate the legal rights of others&nbsp;</p>
                          </li>
                          <li>
                            <p>To collect, store and distribute personal data of other users, without their prior consent</p>
                          </li>
                          <li>
                            <p>To promote or engage in illegal activities of any nature, whether local or international</p>
                          </li>
                        </ul>
                        <p>The Company can take no responsibility for any dealings, commercial or not through your site(s) and is not responsible for any damage that may result from those dealings. The Company is not providing any support for any payment mechanisms that you may introduce on your site, nor will the company guarantee the functionality and security of those payment mechanisms.</p>
                        <p>The Company does not and is under no obligation to pre-screen or post-screen the content on your site(s), but the company has the right to remove all or portions of your content that is in violation with the terms and conditions and this without any prior notification. The company preserves the right to suspend your service at any time as well if you are violating the terms and conditions, and this again without prior notification.</p>
                        <p>The Company has the right to change its terms and conditions at any time, and this without prior notification and the Company also preserves the right to change its commercial offerings from time to time, again without prior notification.</p>
                        <h4>5. Licenses and proprietary rights</h4>
                        <p>The Company grants you a personal, non-transferable and non-exclusive license to use the software provided by the Company through its portal site or any other means, provided that you do not copy, modify, reverse engineer or otherwise misuse the software or sell it, sub-license or grant any rights to the software. This license expires at the end of your contract period or whenever the service is terminated by you or by the Company, according to the terms and conditions.</p>
                        <p>The Company owns or is licensed to use all intellectual property rights of the software and the associated services that the Company is putting to market from time to time.</p>
                        <p>You agree that Content presented through our site by the Company, its advertisers, or others, including all text, graphics, logos, button icons, images, audio files, software, data compilations and other intellectual property, is owned by the Company or its licensees and is protected by copyright, trade-mark, service mark, patent, or other proprietary rights and laws. You agree not to otherwise copy, change, upload, transmit, sell or distribute any content available through the Company’s site, including code and software, except standard page caching which occurs in the normal course of browsing. By way of example, you agree not to use any trade names or trademarks displayed on any other web site you operate such as in the meta-data of such web site. Except as expressly authorized by the Company or advertisers, you agree not to modify, rent, lease, loan, sell, distribute or create derivative works based on the Service or the software, in whole or in part. You also agree not to record or otherwise make a copy of audio content on the site unless you have the permission of all parties to the conversation to do so.</p>
                        <h4>6. Third Party Content</h4>
                        <p>The Company, third parties or you may provide from time to time links to other World Wide Web sites or resources. If you decide to access or use such links, you do so at your own risk. These links are provided as a convenience and not as an endorsement on the content, accuracy or legality of that content. The Company is not responsible for the availability of such links and contents and can bear no liability with regard to the content in those sites or links. The Company can not be liable for any damage or loss caused or alleged to be caused by or in connection with the use or reliance on any such content</p>
                        <h4>7. Uptime, Maintenance and Updates</h4>
                        <p>The uptime of the service is on a best effort level set at 99.5%.</p>
                        <p>You are solely responsible for evaluating the fitness for a particular purpose of any downloads, programs and text available through this site. Redistribution or republication of any part of this site or its content is prohibited, including such by framing or other similar or any other means, without the express written consent of the Company. The Company does not warrant that the service from this site will be uninterrupted, timely or error free, although it is provided to the best ability. By using this service you thereby indemnify this Company, its employees, agents and affiliates against any loss or damage, in whatever manner, howsoever caused.</p>
                        <p>The Company reserves the right to interrupt service no more than five (5) percent of the year for maintenance and updates to our site. This service interruption does not include power outages, service loss or any other reasons of Force Majeure, as in article 13 of these terms and conditions.</p>
                        <h4>8. Indemnification</h4>
                        <p>You agree to indemnify and hold the Company, re-branders, co-branders, and its suppliers, affiliates, partners, subsidiaries, directors, shareholders and employees (collectively, the “Indemnified Parties”) harmless from any and all claims and demands, losses, liability costs and expenses (including, but not limited to, reasonable attorneys’ fees), incurred by an Indemnified Party arising out of or related to (i) your breach of this Agreement; (ii) any information (including but not limited to your data and your publicly posted information) submitted, posted, or otherwise provided by you at your site and/or to the Company and/or its affiliates; (iii) any dispute or litigation between an Indemnified Party and a third party caused by your actions; and (iv) your negligence or violation or alleged violations of any rights of another. These obligations will survive any termination of your relationship with the Company or your use of the Service. To the fullest extent permitted by law, the foregoing indemnity will apply regardless of any fault, negligence, or breach of warranty or contract of the Company and/or its suppliers, affiliates, partners, subsidiaries and employees.</p>
                        <h4>9. Indemnification by Customer</h4>
                        <p>You will defend, indemnify and hold the Company harmless from and against any and all liabilities, losses, damages, costs and expenses (including reasonable legal fees and expenses) associated with any claim or action brought against the Company that arises directly or indirectly from you or your end-users, or the content of such end-user’s web site, contrary to the provisions of this Agreement, including claims based on representations, warranties, or misrepresentations made by you, provided that the Company promptly notifies you in writing of the claim and allows you to control and fully cooperate with you in the defence and all related settlement negotiations. You shall be relieved of its indemnification obligations under this Agreement to the extent it is actually prejudiced by the Company’s failure to provide such notice or cooperation. You shall have no liability for any settlement or compromise made without its prior written consent, although such consent not to be unreasonably withheld.</p>
                        <p></p>
                        <h4>10. Changes to Terms of Use</h4>
                        <p>The Company reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. You should periodically review these Terms for changes. Your continued use of the site and the services following the posting of any changes confirms your agreement with such changes. You agree that the Company shall not be liable to you or to any third party for any modification, suspension or discontinuance of the service.</p>
                        <p></p>
                        <h4>11. Severability</h4>
                        <p>If any provision of this Agreement shall be held illegal, unenforceable, or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect.</p>
                        <p></p>
                        <h4>12. Headings</h4>
                        <p>The titles and headings of the various sections and paragraphs in this Agreement are intended solely for convenience of reference and are not intended for any other purpose whatsoever, or to explain, modify or place any construction upon any of the provisions of this Agreement.</p>
                        <p></p>
                        <h4>13. Force Majeure</h4>
                        <p>The Company shall not be liable for the failure to perform any of its obligations under this Agreement if such failure is caused by the occurrence of any event beyond the reasonable control of such party, including without limitation, fire, flood, strikes and other industrial disturbances, failure of raw materials suppliers, accidents, transmission difficulties, Internet outages, riots, insurrections, acts of God or orders of governmental agencies.</p>
                        <p></p>
                        <h4>14. Disclaimer of Warranties</h4>
                        <p>YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. The Company EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</p>
                        <p>THE COMPANY MAKES NO WARRANTY THAT (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS, AND (v) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED.</p>
                        <p>ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DONE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE COMPANY OR THROUGH OR FROM THE SERVICE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS OF SERVICE.</p>
                        <p></p>
                        <h4>15. Limitation of Liability</h4>
                        <p>IN NO EVENT SHALL the Company AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF USE, DATA OR PROFITS (HOWEVER ARISING, INCLUDING NEGLIGENCE) EVEN IF the Company OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES, ARISING OUT OF OR IN CONNECTION WITH (A) THE USE OR INABILITY TO USE THE SERVICE, (B) THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, (C) FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SERVICE OR OTHERWISE ARISING OUT OF THE USE OF THE SERVICE, (D) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE, OR (E) ANY OTHER MATTER RELATING TO THE SERVICE. SOME STATES DO NOT ALLOW THE LIMITATION OF LIABILITY, SO THE FOREGOING LIMITATION MAY NOT APPLY TO YOU. IN NO EVENT SHALL the Company’s AGGREGATE LIABILITY TO YOU AND/OR ANY THIRD PARTY ARISING FROM OR RELATING TO THIS AGREEMENT EXCEED THE AMOUNT YOU ACTUALLY PAY TO the Company UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTHS PRECEDING THE DATE THE CLAIM AROSE OR EURO 500.00, WHICHEVER IS LESS. Without limiting the foregoing, neither the Company nor its suppliers is responsible for any of your data residing on the Service or the Company’s suppliers’ hardware. You are responsible for backing-up your data and information that may reside on the Service or the Company’s suppliers’ hardware, whether or not such information is produced through the use of the Service. It is your responsibility to take the necessary steps to ensure that your primary means of business is maintained (if applicable).</p>
                        <p></p>
                        <h4>16. Governing Law</h4>
                        <p>These Terms are governed by common law. No action or proceeding may be commenced or maintained in relation to the site, the Services or these Terms except in a court of appropriate jurisdiction in Singapore, where the Company is headquartered and you hereby irrevocably agree to at torn to the jurisdiction of such courts.</p>
                        <p></p>
                        <h4>17. Dispute Resolution</h4>
                        <p>You agree that any dispute or claim arising out of or related to the Service or this Agreement, or the interpretation, making, performance, breach or termination thereof, shall be finally settled by binding arbitration in The Hague, the Netherlands under the International Arbitration Rules by one arbitrator appointed in accordance with said Rules. The proceedings shall be conducted and all evidence shall be offered in the English language. You agree that any claim against the Company must be filed within one (1) year of the time such claim arose, regardless of any law to the contrary, otherwise such claim will be barred forever.</p>
                        <p>Notwithstanding the above, the Company may apply to any court of competent jurisdiction (i) for a temporary restraining order, preliminary injunction or other interim or conservatory relief as necessary, including without limitation for breach of Section 5 (Proprietary Rights to Content) or (ii) to collect fees due and owing from you pursuant to this Agreement, without breach of this arbitration agreement and without any abridgement of the powers of the arbitrator.</p>
                        <p>This Agreement shall be governed in all respects by common law and the International binding laws on the matter where applicable. Such law shall be applied by the arbitrator to the merits of any dispute or claim. For any non-arbitral action or proceeding arising out of or related to the Service or this Agreement, both parties submit to sole and exclusive jurisdiction and venue in the courts located in Singapore and further agree that any such action or proceeding shall be brought in a court in Singapore.</p>
                        <p>A printed version of this Agreement shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</p>
                        <p></p>
                        <h4>18. Confidential Information</h4>
                        <p>“Confidential Information” is any data or information, oral or written, treated as confidential that relates to either party’s (or, if either party is bound to protect the confidentiality of any third party’s information, such third party’s) past, present, or future research, webriq_bizopment or business activities, including any unannounced products and services, any information relating to services, inventions, processes, plans, source code, object code, binary code, algorithms, ideas, know-how, financial information, customer data, revenue, transaction volume, forecasts, projections, and the financial terms of this Agreement. Notwithstanding the foregoing, Confidential Information shall not be deemed to include information if: (i) it was already known to the receiving party prior to the Effective Date of this Agreement as established by documentary evidence; (ii) it is in or has entered the public domain through no breach of this Agreement or other wrongful act of the receiving party; (iii) it has been rightfully received by the receiving party from a third party and without breach of any obligation of confidentiality of such third party to the owner of the Confidential Information; (iv) it has been approved for release by written authorization of the owner of the Confidential Information; (v) it has been independently developed by a party without access to the Confidential Information of the other party; or (vi) it is required to be disclosed pursuant to final binding order of a governmental agency or court of competent jurisdiction, provided that the owner of the Confidential Information has been given reasonable notice of the dependency of such an order and the opportunity to contest it.</p>
                        <p></p>
                        <h4>19. Relationship to Customer</h4>
                        <p>The Company and you shall perform all duties under this Agreement as independent contractors. Nothing in this Agreement shall be construed to give either party the power to direct or control the daily activities of the other party, or to constitute the parties as principal and agent, employer and employee, franchiser and franchisee, partners, joint venturers, co-owners, or otherwise as participants in a joint undertaking. The parties understand and agree that, except as specifically provided in this Agreement, neither party grants the other party the power or authority to make or give any agreement, statement, representation, warranty, or other commitment on behalf of the other party, or to enter into any contract or otherwise incur any liability or obligation, express or implied, on behalf of the other party, or to transfer, release, or waive any right, title, or interest of such other party.</p>
                        <p></p>
                        <h4>20. Copyright Policy</h4>
                        <p>It is the policy of the Company to respect the intellectual property rights of others; we ask that our customers do the same. The Company may terminate the accounts of those who appear to infringe the intellectual property rights of others, and/or the Company may remove content that has prompted a complaint.</p>
                        <p>If you believe that your copyright in any material has been infringed by the Company or a member of the Company community, please provide us with the following:</p>
                        <ul className="px-4">
                          <li>A description of the copyrighted work that you claim has been infringed;</li>
                          <li>A description of the material that you claim is infringing, identified with sufficient detail to enable us to locate it on the site;</li>
                          <li>Your name, address, telephone number, and e-mail address;</li>
                          <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                          <li>A statement by you declaring under penalty of perjury that (a) the above information in your notice is accurate, and (b) that you are the owner of the copyright interest involved or that you are authorized to act on the copyright owner’s behalf; and</li>
                          <li>A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                        </ul>
                      </div>
                  </div>

              </div>
      </section>
      </Layout>
    )
  }
}

export default TermsPage


export const TermsQuery = graphql`
  query TermsQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
