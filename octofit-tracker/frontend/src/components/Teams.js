import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div className="card mt-4">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.name || JSON.stringify(team)}</td>
                <td>{team.id || idx}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-2" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
};

export default Teams;
