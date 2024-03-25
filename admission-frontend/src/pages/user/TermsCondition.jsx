import React from 'react'
import Navbar from '../../assets/components/NavBar'
import Footer from '../../assets/components/home/Footer'
import '../../assets/css/terms.css'

function TermsCondition() {
  return (
   <div className="all-terms">
    <Navbar/>
    <div>
<body>


    <header class="header-mobile dark-theme">
            <h3 class="title-mobile"> beCoditive API </h3>
    </header>

    <section id="terms-of-service">
        <div class="card8">
            <h1 class="primary-heading">Terms of Service</h1>
            <p class="paragraph">
                1) In consideration of your use of the beCoditive API, you represent that you <span class="bold">are</span> of legal age to form a binding contract and are <span class="bold">not</span> a person barred from receiving services under the laws of the Indian Constitution or other applicable jurisdiction. You also agree to: <br/> <br/>
                   •	   provide true, accurate, current and complete information about yourself as prompted by beCoditive API's registration form and; <br/> <br/>
                   •	   maintain and promptly update the Registration Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or beCoditive has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, beCoditive has the right to suspend or terminate your account and refuse any and all current or future use of the beCoditive API (or any portion thereof).
                <br/><br/><br/>
                2) Any kind of abusing, harassment using beCoditive API is <span class="bold">strictly prohibited</span>. If anyone is found conducting such acts, they will be <span class="bold">banned</span> from the beCoditive API and legal action will be taken against them.
                <br/><br/><br/>
                3) beCoditive API provides <span class="bold">ONE</span> API key to each person. Trying to generate fakes API keys is strictly <span class="bold">prohibited</span> and this act will result in <span class="bold">banning</span> of the person.
                <br/><br/><br/>
                4) beCoditive API is <span class="bold">copyrighted</span> and if any acts of <span class="bold">plagiarism</span> are discovered, legal action will be taken against the offender. 
                <br/><br/><br/>
                5) Flooding beCoditive API with false requests and false complains is <span class="bold">strictly prohibited</span>
                <br/><br/><br/>
                6) Registration Data and certain other information about you <span class="bold">is subject</span> to our Privacy Policy.
                <br/><br/><br/>
                7) You expressly <span class="bold">understand</span> and <span class="bold">agree</span> that beCoditive and its subsidiaries, affiliates, officers, employees, agents, partners and licensors shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if beCoditive has been advised of the possibility of such damages), resulting from the use or the inability to use beCoditive API.
                <br/><br/><br/>
                8) You <span class="bold">agree</span> that beCoditive may <span class="bold">terminate</span> your access to beCoditive API for violations of the TOS and/or requests by authorized law enforcement or other government agencies.
                <br/><br/><br/>
                9) You acknowledge that beCoditive may establish general practices and limits concerning use of beCoditive API, including without limitation the maximum number of days that email messages, message board postings or other uploaded Content will be retained by beCoditive API. You further acknowledge that beCoditive reserves the right to modify these general practices and limits from time to time. beCoditive reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, beCoditive API (or any part thereof) with or without notice. You agree that beCoditive shall not be liable to you or to any third party for any modification, suspension or discontinuance of beCoditive API.
            </p>
        </div>
    </section>
    <footer>
        <p class="footer-heading">© Copyright 2020-2021 beCoditive. All rights reserved.</p>
    </footer>
</body>
        {/* <div className="terms-title">
            <h1>Terms<br/>& Conditions</h1>
        </div>
        <div className="terms-content">
        <section>
                <h2 className='pl-4'>1. Introduction</h2>
                <p className='pl-5'>A brief overview of your app and its purpose.</p>
                <p >By using the app, users agree to comply with the terms and conditions.</p>
            </section>

            <section>
                <h2 className='pl-4'>2. Acceptance of Terms</h2>
                <p className='pl-5'>A statement indicating that using the app implies acceptance of the terms and conditions.</p>
            </section>

            <section>
                <h2 className='pl-4'>3. User Registration</h2>
                <p className='pl-5'>If your app requires user registration, explain the registration process.</p>
                <p>Specify that users are responsible for maintaining the confidentiality of their login credentials.</p>
            </section>

            <section>
                <h2 className='pl-4'>4. User Conduct</h2>
                <p className='pl-5'>Guidelines for acceptable use of the app.</p>
                <p>Prohibitions, such as no harassment, no spam, no illegal activities, etc.</p>
                <p>Intellectual property rights (e.g., copyright) of the content on your app.</p>
            </section>

            <section>
                <h2  className='pl-4'>5. Privacy Policy</h2>
                <p className='pl-5'>A link to your app's privacy policy, which explains how user data is collected, stored, and used.</p>
            </section>

            <section>
                <h2 className='pl-4'>6. Content Guidelines</h2>
                <p className='pl-5'>Rules regarding user-generated content (if applicable).</p>
                <p>How to report inappropriate content.</p>
            </section>

            <section>
                <h2 className='pl-4'>7. Termination of Accounts</h2>
                <p className='pl-5'>Conditions under which you can suspend or terminate user accounts.</p>
            </section>

            <section>
                <h2 className='pl-4'>8. Disclaimers</h2>
                <p className='pl-5'>Disclaimer of warranties: Clarify that your app is provided "as is" and without warranties.</p>
                <p>Limitation of liability: Explain your app's limitations of liability.</p>
            </section>

            <section>
                <h2 className='pl-4'>9. Governing Law</h2>
                <p className='pl-5'>Specify which jurisdiction's laws apply and where legal disputes should be resolved (e.g., your city or state).</p>
            </section>

            <section>
                <h2 className='pl-4'>10. Modifications</h2>
                <p className='pl-5'>A clause stating that you reserve the right to modify the terms and conditions.</p>
                <p>A mechanism to inform users about changes (e.g., email notification or a notice on the app).</p>
            </section>

            <section>
                <h2 className='pl-4'>11. Contact Information</h2>
                <p className='pl-5'>Provide a contact email or customer support information for user inquiries or complaints.</p>
            </section>

            <section>
                <h2 className='pl-4'>12. Miscellaneous</h2>
                <p className='pl-5'>Severability clause: If one part of the terms is found invalid, the rest remain in effect.</p>
                <p>Entire agreement: The terms constitute the entire agreement between the parties.</p>
                <p>Waiver: Your right to enforce the terms may be waived under certain circumstances.</p>
                <p>Assignment: State whether users can transfer their accounts, and whether you can transfer the agreement.</p>
            </section>
        </div> */}
    </div>
    <Footer/>
    </div>
  )
}

export default TermsCondition
