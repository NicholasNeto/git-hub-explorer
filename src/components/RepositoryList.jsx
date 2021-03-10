import {useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../sytles/repositories.scss';

const repository = {
    name: 'unform2',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

    const [ repositories, setRepositories] = useState()

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(reposnse => reposnse.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className='repository-list'>
            <h1>Lista de repositorios</h1>
            <ul>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
              <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}