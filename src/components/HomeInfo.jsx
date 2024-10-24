import { Link } from "react-router-dom";

import { arrow_red, arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-black py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Jason</span>
        👋
        <br />
        A 3D Artist from America 🇺🇸
        <br />
        As well as a Web Development Enthusiast
      </h1>
    );

    if (currentStage === 2) {
      return (
        <div className='info-box-black'>
        <p className='font-medium sm:text-xl text-center'>
          I have studied in a few different fields over the years.<br/> Take a look.
        </p>
  
        <Link to='/jason-whitby-3d-cv-adventure/knowledge' className='neo-brutalism-white-ish neo-btn-red'>
          Let's talk
          <img src={arrow_red} alt='arrow_red' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }

  if (currentStage === 3) {
    return (
      <div className='info-box-black'>
        <p className='font-medium text-center sm:text-xl'>
          I have done quite a few projects as well. <br /> Curious about my work?
        </p>

        <Link to='/jason-whitby-3d-cv-adventure/projects' className='neo-brutalism-white-ish neo-btn-red'>
          See my portfolio
          <img src={arrow_red} alt='arrow_red' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box-black'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away.
      </p>

      <Link to='/jason-whitby-3d-cv-adventure/contact' className='neo-brutalism-white-ish neo-btn-red'>
        Let's talk
        <img src={arrow_red} alt='arrow_red' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }


  if (currentStage === 5) {
    return (
      <div className='info-box-black'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with a few companies <br /> and picked up many skills along the way
        </p>

        <Link to='/jason-whitby-3d-cv-adventure/about' className='neo-brutalism-white-ish neo-btn-red'>
          Learn more
          <img src={arrow_red} alt='arrow_red' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;