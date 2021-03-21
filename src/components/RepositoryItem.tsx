import '../sytles/repositoryItem.scss';

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div className="panel panel-primary" style={{ border: '2px solid #ccc' }}>
                <div className="panel-header">
                    <strong>{props.repository.name}</strong>
                </div>
                <div className="panel-body">
                    <p>{props.repository.description}</p>
                </div>
                <div className="panel-footer">
                    <a href={props.repository.html_url}> Acessar repositorio</a>
                </div>
            </div>
        </li>
    )
}