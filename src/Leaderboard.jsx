import { Link } from "react-router-dom";

function Leaderboard() {
  return (
    <div className="card">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Win Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Player1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player2</td>
            <td>90</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Player3</td>
            <td>80</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Player4</td>
            <td>70</td>
          </tr>
        </tbody>
      </table>
      <Link to="/lobby">
        <button className="home-button">Home</button>
      </Link>
    </div>
  );
}

export default Leaderboard;
