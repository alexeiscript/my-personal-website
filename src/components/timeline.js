import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../sass/style.sass';

class TimelineSection extends Component {
  render() {
    return (
          <Timeline lineColor={'#08fdd8'}>
            <TimelineItem
              key="001"
              dateText="August 2018 – Present"
              style={{ color: '#08fdd8' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }} >Web Development Professional Programme</h3><br/>
              <h5 style={{ color: 'white' }}> Just IT Training & Apprenticeships, London</h5><br/>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>

            </TimelineItem>

            <TimelineItem
              key="002"
              dateText="Dec 2017 – August 2018"
              dateInnerStyle={{ background: '#08fdd8', color: '#252627' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Web development (self-learning)</h3><br/>
              <h5>Online courses and tutorials</h5><br/>
              <p>
                After quiting my job as Administration Manager I went online and started to look for answers to the hundreds of questions I had about web development. Then I started to watch videos and tutorials about how websites are built using HTML, CSS & JavaScript. I began practicing what I'd learned parallely. Visited many websites built by great developers / designers, looked at their portfolios (I'm still doing it). After I got a grasp about the fundamentals of web development, I decided to join a bootcamp development course, so I joined the Web Development Professional Programme at Just IT, London.
              </p>
            </TimelineItem>

            <TimelineItem
              key="002"
              dateText="April 2016 – July 2018"
              dateInnerStyle={{ background: '#08fdd8', color: '#252627' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Administration Manager</h3><br/>
              <h5>Doppio Coffee LTD, London</h5><br/>
              <p>
                <ul className="duties">
                  <li><i className="lnr lnr-chevron-right"></i>Managed various projects, such as conducting stock takes, which required me to organize
                  staff in a quick and efficient manner, ensuring accurate inventory counting and updating stock
                  records</li>
                  <li><i className="lnr lnr-chevron-right"></i>Significantly increased number of customers served by upgrading to new, faster POS system
                  </li>
                  <li><i className="lnr lnr-chevron-right"></i>Worked closely with the Finance Manager to monitor costs and expenses</li>
                  <li><i className="lnr lnr-chevron-right"></i>Handled daily cashier balancing for the company’s 3 shops
                  </li>
                  <li><i className="lnr lnr-chevron-right"></i>Cash and cheques pay in at the bank</li>
                  <li><i className="lnr lnr-chevron-right"></i>Performed monthly, quarterly and yearly sales reports using Excel
                  </li>
                </ul>
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateComponent={(
                <div className="masters-date">
                  October 2013 - July 2015
                </div>
              )}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="degree">Masters Degree in Marketing</h3><br/>
              <h5 className="university">West University of Timisoara, Romania</h5><br/>

            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="October 2010 - July 2013"
              dateInnerStyle={{ background: '#08fdd8' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="degree">Bachelors Degree in Marketing</h3><br/>
              <h5 className="university">Eftimie Murgu University of Resita, Romania</h5><br/>

            </TimelineItem>
            <TimelineItem
              key="005"
              dateText="February 2009 - Sep 2010"
              dateInnerStyle={{ background: '#08fdd8', color: '#252627' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Customer Service Representative</h3><br/>
              <h5>Bidz.com Inc, Moldova</h5><br/>
              <p>
                <ul className="duties">
                <li><i className="lnr lnr-chevron-right"></i>Assisted international customers with credit card payment by phone and web chat
                </li>
                <li><i className="lnr lnr-chevron-right"></i>Resolved customer complaints via phone, email and chat</li>
                <li><i className="lnr lnr-chevron-right"></i>Reached out to customers and verified account information</li>
                <li><i className="lnr lnr-chevron-right"></i>Cancelled and upgraded accounts</li>
                <li><i className="lnr lnr-chevron-right"></i>Assisted customers with placement of orders, refunds or exchanges</li>
                </ul>
              </p>

            </TimelineItem>
            <TimelineItem
              key="007"
              dateText="November 2007 - Jan 2009"
              dateInnerStyle={{ background: '#08fdd8', color: '#252627' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Client Relationship Centre Operator</h3><br/>
              <h5>Pedersen and Partners, Moldova</h5><br/>
              <p>
                <ul className="duties">
                  <li><i className="lnr lnr-chevron-right"></i>Gathered, evaluated and organised information about companies and executives by phone
                  calling and online search</li>
                  <li><i className="lnr lnr-chevron-right"></i>Data input in client relationship management database (CRM)</li>
                  <li><i className="lnr lnr-chevron-right"></i>Filtered and organised data on potential clients and candidates </li>
                  <li><i className="lnr lnr-chevron-right"></i>Verified and modified existing information in company’s database</li>
                </ul>
              </p>

            </TimelineItem>
          </Timeline>
    );
  }
}
export default TimelineSection;
