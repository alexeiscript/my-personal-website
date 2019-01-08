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
              <h5 style={{ color: '#FC0B56' }}> Just IT Training & Apprenticeships, London</h5><br/>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
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
              dateText="April 2016 – July 2018"
              dateInnerStyle={{ background: '#08fdd8', color: '#252627' }}
              bodyContainerStyle={{
                background: 'transparent',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 style={{ color: '#08fdd8' }}>Administration Manager</h3><br/>
              <h5 style={{ color: '#FC0B56' }}>Doppio Coffee LTD, London</h5><br/>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateComponent={(
                <div
                  style={{
                    display: 'block',
                    float: 'left',
                    padding: '10px',
                    background: 'rgb(150, 150, 150)',
                    color: '#fff',
                  }}
                >
                  11/2008 – 04/2009
                </div>
              )}
            >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="08/2008 – 11/2008"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
          </Timeline>
    );
  }
}
export default TimelineSection;
