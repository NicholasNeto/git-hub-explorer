import {useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../sytles/repositories.scss';

export function RepositoryList() {

    const [ repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(reposnse => reposnse.json())
            .then(data => setRepositories(data))
    }, [])


    return (
        <section className='repository-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </section>
    );
}