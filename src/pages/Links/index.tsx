import React from 'react';
import LinkItem from '../../components/Link';
import Header from '../../components/Header';

import db from '../../db.json';

import './styles.css';

function Links() {
  return (
    <main>
      <Header title="My links" emoji="🔗" returnToProfile />
      <article className="wrapper-repositories">
        {db.links.reverse().map(link => (
          <section className="repository">
            <LinkItem linkData={link} />
          </section>
        ))}
      </article>
    </main>
  );
}

export default Links;