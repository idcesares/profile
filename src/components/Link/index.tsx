import React from 'react';

import { RiBookMarkLine } from 'react-icons/ri';
import { LinksProps } from './types'

import './styles.css';


function LinkItem({ linkData }: LinksProps) {
  const { title, link } = linkData;
  return (
    <div className="box">
      <div className="top-side">
        <header className="header-box">
          <RiBookMarkLine className="icon-box" />
          <a className="anchor-box" target="blank" href={link}>
            {title}
          </a>
        </header>
      </div>
    </div>
  );
}

export default LinkItem;
