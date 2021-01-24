import React from 'react';
import { SocialIcon } from 'react-social-icons';
import style from './resume.module.css';

const Resume = () => (
  <div className={style.Box}>
    <h3>Salvatore Difranco</h3>

    <h4>Front end developer</h4>
    <div>
      <p>
        Hello ladies and gentlemen, I build stuff into the web.
        New in React and I love it.
      </p>
      <p>FORGET ABOUT OTHER CANDIDATES: I'M THE BEST.</p>
    </div>
    <div className={style.SocialContent}>
      <SocialIcon url="http://github.com/cannicombustiva" />
      <SocialIcon url="https://www.linkedin.com/in/salvatore-difranco-ab4844110/" />
      <SocialIcon url="https://twitter.com/Cannicombustiva" />
    </div>

  </div>

);

export default Resume;
