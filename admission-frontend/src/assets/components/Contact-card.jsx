import React from 'react'
import '../css/contact-card.css'
import { ClockCircleFilled, MailFilled, MobileFilled, PushpinFilled } from '@ant-design/icons'

function ContactCard() {
  return (
    <div className='contact-card'>

      <div className="col-sm-12 col-md-12 col-lg-4">
                <div className="contact-info white">
                  <div className="contact-item media">
                  {/* <PushpinFilled className='contact-icons'/> */}
                    {/* <i className="fa fa-mobile media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase"><strong>Address:</strong></p>
                      <p className="text-uppercase">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  {/* <MobileFilled className='contact-icons'/> */}
                    {/* <i className="fa fa-mobile media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase"><strong>Phone:</strong></p>
                      <p className="text-uppercase">
                        <a className="text" href="tel:+15173977100">
                          009900990099
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  {/* <MailFilled className='contact-icons'/> */}
                    {/* {" "}
                    <i className="fa fa-envelope media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase"><strong>E-mail:</strong></p>
                      <p className="text-uppercase">
                        <a
                          className="text-red"
                          href="mailto:mridinishankar2004@gmail.com@gmail.com"
                        >
                          mridinishankar2004@gmail.com
                        </a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="contact-item media">
                  {/* <ClockCircleFilled className='contact-icons'/> */}
                    {/* {" "}
                    <i className="fa fa-clock media-left media-right-margin" /> */}
                    <div className="media-body">
                      <p className="text-uppercase"><strong>Working Hours:</strong></p>
                      <p className="text-uppercase">
                        Mon-Fri 9.00 AM to 5.00PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default ContactCard
