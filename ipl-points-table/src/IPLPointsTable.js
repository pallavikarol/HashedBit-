import React, { useEffect, useState } from "react";

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts") // Replace with actual API
      .then((res) => res.json())
      .then((data) => {
        // Replace dummy data with real IPL data for your case
        const sortedData = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sortedData);
      });
  }, []);

  // Temporary static fallback if API not reachable
  const fallbackTeams = [
    { team: "Mumbai Indians", matches: 14, won: 4, lost: 10, tied: 0, nrr: -0.506, points: 8 },
    { team: "Sunrisers Hyderabad", matches: 14, won: 6, lost: 8, tied: 0, nrr: -0.379, points: 12 },
    { team: "Royal Challengers Bangalore", matches: 14, won: 8, lost: 6, tied: 0, nrr: -0.253, points: 16 },
    { team: "Chennai Super Kings", matches: 14, won: 4, lost: 10, tied: 0, nrr: -0.203, points: 8 },
    { team: "Punjab Kings", matches: 14, won: 7, lost: 7, tied: 0, nrr: 0.126, points: 14 },
    { team: "Kolkata Knight Riders", matches: 14, won: 6, lost: 8, tied: 0, nrr: 0.146, points: 12 },
    { team: "Delhi Capitals", matches: 14, won: 7, lost: 7, tied: 0, nrr: 0.204, points: 14 },
    { team: "Lucknow Super Giants", matches: 14, won: 9, lost: 5, tied: 0, nrr: 0.251, points: 18 },
    { team: "Rajasthan Royals", matches: 14, won: 9, lost: 5, tied: 0, nrr: 0.298, points: 18 },
    { team: "Gujarat Titans", matches: 14, won: 10, lost: 4, tied: 0, nrr: 0.316, points: 20 },
  ].sort((a, b) => a.nrr - b.nrr);

  const finalData = teams.length > 0 ? teams : fallbackTeams;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">IPL Season 2022 Points</h1>
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border px-2 py-1">No</th>
            <th className="border px-2 py-1">Team</th>
            <th className="border px-2 py-1">Matches</th>
            <th className="border px-2 py-1">Won</th>
            <th className="border px-2 py-1">Lost</th>
            <th className="border px-2 py-1">Tied</th>
            <th className="border px-2 py-1">NRR</th>
            <th className="border px-2 py-1">Points</th>
          </tr>
        </thead>
        <tbody>
          {finalData.map((team, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1 bg-gray-100">{index + 1}</td>
              <td className="border px-2 py-1">{team.team}</td>
              <td className="border px-2 py-1">{team.matches}</td>
              <td className="border px-2 py-1">{team.won}</td>
              <td className="border px-2 py-1">{team.lost}</td>
              <td className="border px-2 py-1">{team.tied}</td>
              <td className="border px-2 py-1">{team.nrr}</td>
              <td className="border px-2 py-1 bg-gray-300">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;