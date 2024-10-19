import React from 'react'
import { projects, experiences, certs } from '../constants'
import { Link } from 'react-router-dom'
import { arrow_black } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='bg-gradient-black'>
      <section className='max-container'>
        <h1 className='head-text'>
          My <span className='red-gradient_text font-semibold drop-shadow'>Projects</span> 👋
        </h1>
        <div>
          <p className='mt-5 flex flex-col gap-3 text-white'>
            Software and Cyber Security Enthusiast with a 3D art flair, specializing in technical education
            through hands-on learning with real-world projects and practice.
          </p>
        </div>

        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`}/>
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={project.iconUrl}
                      alt="Project Icon"
                      className='w-75% h-75% object-contain'/>
                  </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
                <p className='mt-2 text-white'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-black'>
                    Live Link
                    </Link>
                    <img
                      src={arrow_black}
                      alt='arrow_red'
                      className='w-4 h-4 object-contain'/>
                </div>

              </div>
            </div>
          ))}
        </div>

        <hr className='border-slate-200'/>

        <CTA />
      </section>
    </section>
  )
}

export default Projects