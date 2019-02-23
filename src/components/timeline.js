import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../sass/style.sass';

class TimelineSection extends Component {
  render() {
    return (
          <Timeline lineColor={'#08fdd8'}>

          <TimelineItem
          dateComponent={(
            <div className="date-component">
              February 2019 - Present
            </div>
          )}
            bodyContainerStyle={{
              background: 'transparent',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#08fdd8' }} >Front-end Developer Intern</h3><br/>
            <h5 style={{ color: 'white' }}>Design Portfolio, Canary Wharf</h5><br/>
            <p style={{ color: 'white' }}>
              <ul className="duties">
                <li><i className="lnr lnr-chevron-right"></i>This is a 6 week contract position for a Front-end Developer Internship</li>
                <li><i className="lnr lnr-chevron-right"></i>Editing and building components, templates and plugins using HTML, CSS/SASS/SCSS, JavaScript and PHP</li>
                <li><i className="lnr lnr-chevron-right"></i>Actively using Git and concrete5 CMS</li>
                <li><i className="lnr lnr-chevron-right"></i>Using Jira for tracking and project management</li>
              </ul>
            </p>

          </TimelineItem>

            <TimelineItem
            dateComponent={(
              <div className="date-component">
                August 2018 - January 2019
              </div>
            )}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }} >Web Development Professional Programme</h3><br/>
              <h5 style={{ color: 'white' }}> Just IT Training & Apprenticeships, London</h5><br/>
              <p style={{ color: 'white' }}>
                During this Programme I improved my HTML5, CSS and JavaScript skills, but also learned C#, SQL and ASP.NET.
                The learning process during this Web Development Programme was comprised of theoretical study followed by
                practical case studies where I got to apply what I'd learnt. After taking this couse I feel confident and ready to take on a Frontend Developer role.
              </p>

            </TimelineItem>

            <TimelineItem
              key="002"
              dateComponent={(
                <div className="date-component">
                  Dec 2017 - August 2018
                </div>
              )}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Web development (self-learning)</h3><br/>
              <h5 style={{ color: 'white' }}>Online courses and tutorials</h5><br/>
              <p style={{ color: 'white' }}>
                After quiting my job as Administration Manager I went online and started to look for answers to the hundreds of questions I had about web development. Then I started to watch videos and tutorials about how websites are built using HTML, CSS & JavaScript. I began practicing what I'd learned parallely. Visited many websites built by great developers / designers, looked at their portfolios (I'm still doing it). After I got a grasp about the fundamentals of web development, I decided to join a bootcamp development course, so I joined the Web Development Professional Programme at Just IT, London.
              </p>
            </TimelineItem>

            <TimelineItem
              key="003"
              dateComponent={(
                <div className="date-component">
                  April 2016 - Dec 2017
                </div>
              )}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow:'0.5rem 0.5rem 2rem 1rem rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Administration Manager</h3><br/>
              <h5 style={{ color: 'white' }}>Doppio Coffee LTD, London</h5><br/>
              <p style={{ color: 'white' }}>
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
              key="004"
              dateComponent={(
                <div className="date-component">
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
              <h5 className="university" style={{ color: 'white' }}>West University of Timisoara, Romania</h5><br/>

            </TimelineItem>

          </Timeline>
    );
  }
}
export default TimelineSection;
