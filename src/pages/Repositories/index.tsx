import React, { useEffect, useState } from 'react';

import { Repos } from '../../shared/typesGitHubAPI';

import Repository from '../../components/Repository';
import Header from '../../components/Header';

import api from '../../services/api';

import './styles.css';

function Repositories() {
  const [repositories, setRepositories] = useState<Repos[]>([]);
  const userName = 'idcesares'

  useEffect(() => {
    api.get(`users/${userName}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <main>
      <Header title="My projects" emoji="🚀" returnToProfile />

      <article className="wrapper-repositories">
        {repositories.map(repository => (
          <section key={repository.id} className="repository">
            <Repository repositories={repository} />
          </section>
        ))}
      </article>
    </main>
  );
}

export default Repositories;
