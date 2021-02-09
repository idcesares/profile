import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare
} from 'react-icons/ai';
import { SiDevDotTo } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';

import { NavigationItemProps, NavigationItems } from './types';

import './styles.css';

const socialMedias: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/idcesares/',
  },
  {
    icon: <AiFillLinkedin />, 
    url: 'https://www.linkedin.com/in/isaacdcesares/',
  },
  {
    icon: <AiFillMediumSquare />,
    url: 'https://medium.com/@idcesares',
  },
  {
    icon: <AiFillTwitterSquare />,
    url: 'https://twitter.com/idcesares',
  },
  {
    icon: <SiDevDotTo />,
    url: 'https://dev.to/idcesares',
  },
  {
    icon: <RiWhatsappFill />,
    url: 'https://wa.me/+5521983291513',
  }
];

function SocialMedia() {
  return (
    <div className="icons-container">
      {socialMedias.map(({ icon, url }: NavigationItemProps, index) => (
        <a key={String(index)} href={url} target="blank" className="icon">
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
