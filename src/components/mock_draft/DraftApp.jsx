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
    
    const currTeamIdx = () => {
        let index = (currentPick % teams.length) - 1; //  % 10 
        if (index === -1) {
            index = 9;
        };
        console.log(index);
        return index;
    }
    
    let currTeamPicking = teams[currTeamIdx()];

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

        for (let i = 0; i < teams.length; i++) {
            let rosterObj = {};
            rosterObj[teams[i]] = {
                players: []
            };

            rosterArr.push(rosterObj);
        }

        setRosters(rosterArr);
    }, [teams])

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

    const appendRoster = (playerName, teamName = currTeamPicking) => {
        let updatedRoster = rosters;
        updatedRoster[currTeamIdx()][teamName]["players"].push(playerName);
        setRosters(updatedRoster);
    }

    return (
        <div className="app-container">
            <DraftQueue className="queue-container" teams={teams} />
            <div className="form-container">
                <div>{stringifyNum(currentPick) + " Pick"}</div>
                <div>{stringifyNum() + " Round"}</div>
                <span>{`Current Team: ${currTeamPicking}`}</span>
                <DraftForm players={players} appendRoster={appendRoster} setCurrentPick={setCurrentPick} currentPick={currentPick} />
            </div>
        </div>
    )
}

export default DraftApp;