import React, { useState } from "react";
import ATL from "../assets/teamsImg/ATL.webp";
import BKN from "../assets/teamsImg/BKN.webp";
import BOS from "../assets/teamsImg/BOS.webp";
import CHA from "../assets/teamsImg/CHA.webp";
import CHI from "../assets/teamsImg/CHI.webp";
import CLE from "../assets/teamsImg/CLE.webp";
import DAL from "../assets/teamsImg/DAL.webp";
import DEN from "../assets/teamsImg/DEN.webp";
import DET from "../assets/teamsImg/DET.webp";
import GSW from "../assets/teamsImg/GSW.webp";
import HOU from "../assets/teamsImg/HOU.webp";
import IND from "../assets/teamsImg/IND.webp";
import LAC from "../assets/teamsImg/LAC.webp";
import LAL from "../assets/teamsImg/LAL.webp";
import MEM from "../assets/teamsImg/MEM.webp";
import MIA from "../assets/teamsImg/MIA.webp";
import MIL from "../assets/teamsImg/MIL.webp";
import MIN from "../assets/teamsImg/MIN.webp";
import NOP from "../assets/teamsImg/NOP.webp";
import NYK from "../assets/teamsImg/NYK.webp";
import OKC from "../assets/teamsImg/OKC.webp";
import ORL from "../assets/teamsImg/ORL.webp";
import PHI from "../assets/teamsImg/PHI.webp";
import PHX from "../assets/teamsImg/PHX.webp";
import POR from "../assets/teamsImg/POR.webp";
import SAC from "../assets/teamsImg/SAC.webp";
import SAS from "../assets/teamsImg/SAS.webp";
import TOR from "../assets/teamsImg/TOR.webp";
import UTA from "../assets/teamsImg/UTA.webp";
import WAS from "../assets/teamsImg/WAS.webp";
import { Link } from "react-router-dom";

function TeamCard({ id, name }) {
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

  const teamData = {
    id: id,
    img: [id - 1],
  };

  return (
    <li className="p-8 bg-white border border-gray-200 rounded-lg shadow gap-2 flex flex-col items-center justify-center transition duration-300 hover:scale-105">
      <img
        className="w-full aspect-square h-full"
        src={teamsImages[id - 1]}
        alt={teamsImages[id - 1]}
      />
      <p className="text-2xl font-normal">{name}</p>
      <div className="h-full flex justify-end items-end">
        <Link
          to="/teamDetail"
          state={{ teamData }}
          onClick={() => console.log("TeamData:", teamData)}
          className="p-4 pt-3 pb-3 uppercase text-center bg-gray-100 border border-gray-400  rounded-lg shadow text-2xl  font-extralight"
        >
          ABOUT
        </Link>
      </div>
    </li>
  );
}

export default TeamCard;
