import React, { useState, useEffect } from 'react'
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    //    console.log('==== response.data ======')
    //    console.log(response.data)
    //    console.log('----  repositories  ----')
    //    console.log(repositories)
    });
  }, [])
  
  //====-----------------------------------------====

  async function handleAddRepository() {
    const novo = {
      title: "Front-end com ReactJS",
      url  : "http://github.com/...",
      techs: ["Node.js", "React", "Javascript"]	
    }

    const response = await api.post('/repositories', novo )
    const repository = response.data;
    setRepositories([ ...repositories, repository] );
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`) 
    setRepositories(repositories.filter(repository => repository.id != id))
  }
  //====--------------------------------------------
  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map ((repository) => (
             <li key={repository.id} > {repository.title}
               <button onClick={() => handleRemoveRepository(repository.id)}>
                 Remover
               </button>
             </li>
            ))
          }
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;