import React, { useEffect, useState } from "react";
import DraftQueue from "./DraftQueue";
import DraftForm from "./DraftForm";
import './DraftApp.scss';
// Overview: 10 teams in a hacker league have a draft each year. The rules of the draft are as follows:
    // 30 users to be drafted
    // order of draft selection is randomly chosen
    // the 10th pick gets the 11th pick and so on
    // each round lasts 1 min. If a user is chosed, the timer resets and the next team picks

// Approach:
    // 

const DraftApp = () => {
    const [teams, setTeams] = useState([]);
    const [rosters, setRosters] = useState([]); // [{team: { players: [ array of strings ]}, team2: { players: [array of strings]}, team3: ...}];
    const [currentPick, setCurrentPick] = useState(1);
    const [players, setPlayers] = useState([]);
    const sampleTeams = ["Warriors", "Grizzlies", "Knicks", "Suns", "Bulls", "Hornets", "Pelicans", "Nets", "Heat", "Lakers"];
    console.log(currentPick);

    
    useEffect(() => {
        const randomize = (sampleTeams) => {
            let currIdx = sampleTeams.length;
            let randomIdx;
            
            while (currIdx !== 0) {
                randomIdx = Math.floor(Math.random() * currIdx);
                currIdx--;
                
                [sampleTeams[currIdx], sampleTeams[randomIdx]] = [sampleTeams[randomIdx], sampleTeams[currIdx]];
            }

            setTeams(sampleTeams);
        };
        
        randomize(sampleTeams);
    }, []);

    useEffect(() => {
        // initialize rosters
        const rosterArr = [];

        for (let i = 0; i < sampleTeams.length; i++) {
            let rosterObj = {};
            rosterObj[sampleTeams[i]] = {
                players: []
            };

            rosterArr.push(rosterObj);
        }

        setRosters(rosterArr);
    }, [])

    useEffect(() => {
        fetch("https://dummyjson.com/users/")
            .then(res => res.json())
            .then(data => setPlayers(data.users))
            .catch(err => console.log(err))

    }, []);

    const stringifyNum = (num = Math.floor(currentPick / teams.length) + 1) => {
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

    const appendRoster = (playerName) => {
        let updatedRoster = rosters;
        // need to find current team
        // updatedRoster[][teamName]["players"].push(playerName);
        for (let i = 0; i < updatedRoster.length; i++) {
            if (updatedRoster[i][teams[0]]) {
                updatedRoster[i][teams[0]]["players"].push(playerName);
            }
        }

        setRosters(updatedRoster);
    }

    return (
        <div className="app-container">
            <DraftQueue className="queue-container" teams={teams.slice(1)} />
            <div className="form-container">
                <div>{stringifyNum(currentPick) + " Pick"}</div>
                <div>{stringifyNum() + " Round"}</div>
                <div>{`Current Team: ${teams[0]}`}</div>
                <DraftForm players={players} setTeams={setTeams} teams={teams} appendRoster={appendRoster} setCurrentPick={setCurrentPick} currentPick={currentPick} />
            </div>
        </div>
    )
}

export default DraftApp;