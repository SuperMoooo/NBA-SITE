import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

import Loading from './components/Loading';
import AllTeams from './components/AllTeams';

function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;
    //GET TEAMS INFO
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const url = 'https://api.balldontlie.io/v1/teams';
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `${apiKey}`,
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setTeams(result.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
                    <section className="p-4 text-black">
                        <AllTeams teams={teams} />
                    </section>
                </>
            )}
        </>
    );
}

export default Teams;
