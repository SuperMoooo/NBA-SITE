import React from 'react';
import TeamCard from './TeamCard';

function AllTeams({ teams }) {
    return (
        <ul className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-5">
            {Object.keys(teams).map(
                (team) =>
                    teams[team].id < 31 && (
                        <TeamCard
                            key={teams[team].abbreviation + teams[team].id}
                            id={teams[team].id}
                            name={teams[team].name}
                        />
                    )
            )}
        </ul>
    );
}

export default AllTeams;
