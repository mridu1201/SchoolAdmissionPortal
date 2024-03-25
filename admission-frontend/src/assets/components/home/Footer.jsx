import '../../css/home-style.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';

function Footer() {

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        {/* Footer */}
        <section className='footer'>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695536806/logo-removebg-preview_r4gcjf.png" alt="" className="f-logo" />
            </div>
            <div className="footer-icons">
            <FacebookIcon className='f-fb' />
            <InstagramIcon className='f-ig'/>
            <TwitterIcon className='f-twitter'/>
            <LinkedInIcon className='f-in'/>
            <YouTubeIcon className='f-utube'/>
            </div>
          </div>
          <div className="links-terms">
            <p className='f-links'>@Admission Box, All rights reserved<a className="privacy" onClick={() => setShowModal(true)}>Privacy & Policy</a>
            <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            style={{
              content: {
                width: '850px', // Adjust the width as needed
                height:'400px',
                maxWidth: '80%', // Set a maximum width to maintain responsiveness
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#f9e8e8',
                border: '1px solid #ccc',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
          <h2>Privacy Policy</h2>
            <p>
                This Privacy Policy outlines the types of personal information we collect and how it is used
                when you use our school admission website.
            </p>
            <h3>Information We Collect</h3>
            <p>
                We may collect personal information including, but not limited to, your name, contact information,
                and application details when you submit an admission application through our website.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
                We use the information collected for the purpose of processing your admission application and
                communicating with you regarding your application status. Your information may also be used for
                statistical analysis and reporting.
            </p>
            <h3>Disclosure of Your Information</h3>
            <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. Your
                information may be shared with relevant school personnel for the purpose of processing your
                admission application.
            </p>
            <h3>Security</h3>
            <p>
                We take reasonable precautions to protect your personal information. However, we cannot guarantee
                the security of information transmitted over the internet.
            </p>
            <h3>Changes to this Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
            <p>
                For any questions or concerns regarding this Privacy Policy, please contact us.
            </p>
            <strong><button onClick={() => setShowModal(false)}>Close</button></strong>
            </Modal>
            <Link to='/home/faq'><a className='FAQ'>FAQ</a></Link>
            
            <Link to='/terms'><a className="tnc">Terms & Conditions</a></Link>
            
            </p> 
          </div>
        </section>
    </div>
  )
}

export default Footer