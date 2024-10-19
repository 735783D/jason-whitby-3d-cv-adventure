import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { certs, educations, experiences } from '../constants'
import CTA from '../components/CTA';
// import { Knowledge } from '.';

const Knowledge = () => {
  return (
    <section className='bg-gradient-black'>
      <section className='max-container'>
        <h1 className='head-text'>
          Hello,  <span className='red-gradient_text font-semibold drop-shadow'>again!</span> 👋
        </h1>
        <div>
          <p className='mt-5 flex flex-col gap-3 text-white'>
            Here is some more information about me in the way of knowledge that I gained by focusing my studies in the Cyber Security
            and IT fields.
          </p>
        </div>

        <div className='py-16'>
          <h3 className='subhead-text'>Education</h3>
            <div className='mt-5 flex flex-col gap-3 text-white'>
              <p>
                I have acquired some important college degrees over the years that have expnaded my knowledge in the IT sphere extensively.
              </p>
            </div>
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {educations.map((education) => (
                  <VerticalTimelineElement
                    key={education.school_name}
                    date={education.date}
                    icon={<div className='flex justify-center items-center'>
                      <img 
                        src={education.icon} 
                        alt={education.school_name} 
                        className='w-60% h-60% object-contain' 
                      />
                    </div>}
                    iconStyle={{background: education.iconBg,}}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: education.iconBg,
                      boxShadow: 'none',
                    }}
                    >
                    <div>
                      <h3 className='text-black-500 text-xl font-poppins font-semibold'>
                        {education.degree}
                      </h3>
                      <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                        {education.school_name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 spacy-y-2'>
                    {education.points.map((point, index) => (
                      <li key={`education-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >{point}
                      </li>
                    ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Certifications</h3>
          <div className='mt-16 flex flex-wrap gap-12'>
            {certs.map((cert) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className='w-75% h-75% object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className='border-slate-200 '/>

        <CTA />
      </section>
    </section>
  )
}

export default Knowledge