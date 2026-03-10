
import octofitLogo from '../public/octofitapp-small.png';

function App() {
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-custom mb-4">
          <div className="container-fluid">
            <NavLink className="navbar-brand navbar-brand-custom d-flex align-items-center" to="/">
              <span className="fw-bold">Octofit Tracker</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-custom" to="/activities">Activities</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-custom" to="/teams">Teams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-custom" to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-custom" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-custom" to="/workouts">Workouts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h2 className="mb-0">Welcome to Octofit Tracker</h2>
                </div>
                <div className="card-body">
                  <p className="lead">Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions!</p>
                  <NavLink to="/activities" className="btn btn-primary m-2">View Activities</NavLink>
                  <NavLink to="/teams" className="btn btn-info m-2">View Teams</NavLink>
                  <NavLink to="/leaderboard" className="btn btn-success m-2">View Leaderboard</NavLink>
                  <NavLink to="/users" className="btn btn-warning m-2">View Users</NavLink>
                  <NavLink to="/workouts" className="btn btn-danger m-2">View Workouts</NavLink>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-header bg-primary text-white">
                <h1 className="card-title heading-custom mb-0">Welcome to Octofit Tracker</h1>
              </div>
              <div className="card-body">
                <img src={logo} className="App-logo mb-3" alt="logo" />
                <p className="lead">Track your fitness, join teams, compete on leaderboards, and get personalized workout suggestions!</p>
                <a className="btn btn-custom me-2" href="#">Get Started</a>
                <a className="btn btn-outline-info" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
              </div>
            </div>

            {/* Bootstrap Table Example with custom table styles */}
            <div className="card mb-4">
              <div className="card-header bg-secondary text-white">
                <h2 className="heading-custom h5 mb-0">Sample Activity Table</h2>
              </div>
              <div className="card-body">
                <table className="table table-custom table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Duration</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2026-03-10</td>
                      <td>Running</td>
                      <td>30 min</td>
                      <td>
                        <button className="btn btn-sm btn-custom me-2">Edit</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2026-03-09</td>
                      <td>Cycling</td>
                      <td>45 min</td>
                      <td>
                        <button className="btn btn-sm btn-custom me-2">Edit</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bootstrap Form Example with custom button */}
            <div className="card mb-4">
              <div className="card-header bg-info text-white">
                <h2 className="heading-custom h5 mb-0">Log New Activity</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="activityDate" className="form-label">Date</label>
                    <input type="date" className="form-control" id="activityDate" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="activityType" className="form-label">Activity</label>
                    <select className="form-select" id="activityType">
                      <option>Running</option>
                      <option>Cycling</option>
                      <option>Swimming</option>
                      <option>Walking</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="activityDuration" className="form-label">Duration (min)</label>
                    <input type="number" className="form-control" id="activityDuration" />
                  </div>
                  <button type="submit" className="btn btn-custom">Log Activity</button>
                </form>
              </div>
            </div>

            {/* Bootstrap Modal Example (static markup) */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title heading-custom" id="exampleModalLabel">Activity Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Here you can view or edit activity details.
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-custom">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
