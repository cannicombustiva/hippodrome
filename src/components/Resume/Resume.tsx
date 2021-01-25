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
      <ul>
        <li>
          <SocialIcon url="http://github.com/cannicombustiva" />
        </li>
        <li>
          <SocialIcon url="https://www.linkedin.com/in/salvatore-difranco-ab4844110/" />
        </li>
        <li>
          <SocialIcon url="https://twitter.com/Cannicombustiva" />
        </li>
      </ul>
      <div className={style.Clear} />
    </div>
  </div>

);

export default Resume;
