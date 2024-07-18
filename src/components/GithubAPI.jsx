import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GithubAPI = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: `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
`,
                    },
                });
                setRepos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repositories:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>My GitHub Repositories</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GithubAPI;

