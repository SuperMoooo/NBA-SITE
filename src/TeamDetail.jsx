import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import DetailTitle from './components/DetailTitle';
import DetailInfo from './components/DetailInfo';
import ATL from './assets/teamsImg/ATL.webp';
import BKN from './assets/teamsImg/BKN.webp';
import BOS from './assets/teamsImg/BOS.webp';
import CHA from './assets/teamsImg/CHA.webp';
import CHI from './assets/teamsImg/CHI.webp';
import CLE from './assets/teamsImg/CLE.webp';
import DAL from './assets/teamsImg/DAL.webp';
import DEN from './assets/teamsImg/DEN.webp';
import DET from './assets/teamsImg/DET.webp';
import GSW from './assets/teamsImg/GSW.webp';
import HOU from './assets/teamsImg/HOU.webp';
import IND from './assets/teamsImg/IND.webp';
import LAC from './assets/teamsImg/LAC.webp';
import LAL from './assets/teamsImg/LAL.webp';
import MEM from './assets/teamsImg/MEM.webp';
import MIA from './assets/teamsImg/MIA.webp';
import MIL from './assets/teamsImg/MIL.webp';
import MIN from './assets/teamsImg/MIN.webp';
import NOP from './assets/teamsImg/NOP.webp';
import NYK from './assets/teamsImg/NYK.webp';
import OKC from './assets/teamsImg/OKC.webp';
import ORL from './assets/teamsImg/ORL.webp';
import PHI from './assets/teamsImg/PHI.webp';
import PHX from './assets/teamsImg/PHX.webp';
import POR from './assets/teamsImg/POR.webp';
import SAC from './assets/teamsImg/SAC.webp';
import SAS from './assets/teamsImg/SAS.webp';
import TOR from './assets/teamsImg/TOR.webp';
import UTA from './assets/teamsImg/UTA.webp';
import WAS from './assets/teamsImg/WAS.webp';

function TeamDetail() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { state } = useLocation();
    const [teamInfo, setTeamInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    if (!state) {
        return <div>Error! No data available</div>;
    }
    const { id, img } = state.teamData;
    const teamsImages = [
        ATL,
        BOS,
        BKN,
        CHA,
        CHI,
        CLE,
        DAL,
        DEN,
        DET,
        GSW,
        HOU,
        IND,
        LAC,
        LAL,
        MEM,
        MIA,
        MIL,
        MIN,
        NOP,
        NYK,
        OKC,
        ORL,
        PHI,
        PHX,
        POR,
        SAC,
        SAS,
        TOR,
        UTA,
        WAS,
    ];

    //GET SPECIFIC TEAM
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const url = `https://api.balldontlie.io/v1/teams/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `${apiKey}`,
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setTeamInfo(result.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    return (
        <>
            {loading ? (
                <>
                    <NavBar />
                    <Loading />
                </>
            ) : (
                <>
                    <NavBar />
                    <section
                        className={`flex flex-col items-center gap-4 m-4 h-[28rem] text-black `}
                    >
                        <DetailTitle teamName={teamInfo.name} />
                        <DetailInfo
                            img={teamsImages[img]}
                            fullName={teamInfo.full_name}
                            city={teamInfo.city}
                            abbr={teamInfo.abbreviation}
                            conference={teamInfo.conference}
                            division={teamInfo.division}
                        />
                    </section>
                </>
            )}
        </>
    );
}

export default TeamDetail;
