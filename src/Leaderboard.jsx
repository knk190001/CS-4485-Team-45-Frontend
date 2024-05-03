// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// function Leaderboard() {
//   const [leaderboardData, setLeaderboardData] = useState([]);

//   useEffect(() => {
//     fetchLeaderboardData();
//   }, []);

//   const fetchLeaderboardData = async () => {
//     try {
//       const response = await fetch("/api/game/getWins");
//       const data = await response.json();
//       // Assuming the response data is a HashMap with player names as keys and win counts as values
//       const leaderboardArray = convertHashMapToArray(data); // Convert HashMap to array
//       setLeaderboardData(leaderboardArray);
//     } catch (error) {
//       console.error("Error fetching leaderboard data:", error);
//     }
//   };

//   // Function to convert HashMap to array of objects
//   const convertHashMapToArray = (data) => {
//     return Object.entries(data).map(([name, wins]) => ({ name, wins }));
//   };

//   return (
//     <div className="card">
//       <h1>Leaderboard</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Player Name</th>
//             <th>Win Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboardData.map((player, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{player.name}</td>
//               <td>{player.wins}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Link to="/lobby">
//         <button className="home-button">Home</button>
//       </Link>
//     </div>
//   );
// }

// export default Leaderboard;


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
            <td>Keith</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Keshav</td>
            <td>4</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Emmanuel</td>
            <td>2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Test</td>
            <td>0</td>
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
