import React, { useEffect, useState } from "react";
import DraftQueue from "./DraftQueue";
import DraftForm from "./DraftForm";
import './DraftApp.scss';
import Roster from "./Roster";
// Overview: 10 teams in a hacker league have a draft each year. The rules of the draft are as follows:
    // 30 users to be drafted
    // order of draft selection is randomly chosen
    // each round lasts 1 min. If a user is chosen, the timer resets and the next team picks

// Approach:
    // 

const DraftApp = () => {
    const [teams, setTeams] = useState([]);
    const [rosters, setRosters] = useState([]); // [{team: { players: [ array of strings ]}, team2: { players: [array of strings]}, team3: ...}];
    const [currentPick, setCurrentPick] = useState(1);
    const [players, setPlayers] = useState([]);
    const sampleTeams = ["Warriors", "Grizzlies", "Knicks", "Suns", "Bulls", "Hornets", "Pelicans", "Nets", "Heat", "Lakers"];
    const [time, setTime] = useState(null);
    
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
        let timerId = setInterval(() => {
            setTime(new Date().toString());
        }, 1000);

        return () => clearInterval(timerId);
    }, [])

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

        {players.length > 0 ? 
            <div className="draft-details-container">
                <div className="pick-details">
                    <div>{stringifyNum(currentPick) + " Pick"}</div>
                    <div>{stringifyNum() + " Round"}</div>
                    <div>{`Current Team: ${teams[0]}`}</div>
                </div>
                <DraftForm players={players} setPlayers={setPlayers} setTeams={setTeams} teams={teams} appendRoster={appendRoster} setCurrentPick={setCurrentPick} currentPick={currentPick} />
                {/* timer goes here */}
                <div className="timer-container">
                    {time}
                </div>
            </div>
        :
            <div className="draft-details-container">
                <h1>DRAFT IS COMPLETE!!</h1>
                <Roster teams={teams} rosters={rosters} />
            </div>
        }
        </div>
    )
}

export default DraftApp;