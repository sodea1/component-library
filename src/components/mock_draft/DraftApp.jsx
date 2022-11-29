import React, { useEffect, useState } from "react";
import DraftQueue from "./DraftQueue";
import DraftForm from "./DraftForm";
import './DraftApp.scss';
// Overview: 10 teams in a hacker league have a draft each year. The rules of the draft are as follows:
    // 100 users to be drafted
    // order of draft selection is randomly chosen
    // the 10th pick gets the 11th pick and so on
    // each round lasts 1 min. If a user is chosed, the timer resets and the next team picks

// Approach:
    // 

const DraftApp = () => {
    const [teams, setTeams] = useState(["Warriors", "Grizzlies", "Knicks", "Suns", "Bulls", "Hornets", "Pelicans", "Nets", "Heat", "Lakers"]);
    const [rosters, setRosters] = useState([]) // [{team: { players: [ array of strings ]}, team2: { players: [array of strings]}, team3: ...}];
    const [currentPick, setCurrentPick] = useState(1); 
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const randomize = (teams) => {
            let currIdx = teams.length;
            let randomIdx;

            while (currIdx !== 0) {
                randomIdx = Math.floor(Math.random() * currIdx);
                currIdx--;

                [teams[currIdx], teams[randomIdx]] = [teams[randomIdx], teams[currIdx]];
            }

            setTeams(teams);
        };
        
        randomize(teams);
    }, []);

    useEffect(() => {
        fetch("https://dummyjson.com/users/")
            .then(res => res.json())
            .then(data => setPlayers(data.users))
            .catch(err => console.log(err))

    }, []);

    const stringifyPick = (num) => {
        let ending = "";
        let lastDigit = num % 10;
        if (lastDigit === 1) {
            ending += "st";
        } else if (lastDigit === 2) {
            ending += "nd";
        } else if (lastDigit === 3) {
            ending += "rd";
        } else {
            ending += "th";
        }

        return `${num + ending}`
    }

    return (
        <div className="app-container">
            <DraftQueue className="queue-container" teams={teams} />
            <div className="form-container">
                <div>{stringifyPick(currentPick) + " Pick"}</div>
                <span>Team A</span>
                <DraftForm players={players} />
            </div>
        </div>
    )
}

export default DraftApp;