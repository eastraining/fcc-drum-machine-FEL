// import drum sounds
import ChopSnareC from "./Sounds/ChopSnare_C.wav";
import Clang from "./Sounds/Clang.wav";
import ClosedHihat from "./Sounds/ClosedHihat.wav";
import HiThud from "./Sounds/HiThud.wav";
import KickC from "./Sounds/Kick_C.wav";
import LowThud from "./Sounds/LowThud.wav";
import OpenHihat from "./Sounds/OpenHihat.wav";
import RideHihat from "./Sounds/RideHihat.wav";
import RimshotSnare from "./Sounds/RimshotSnare.wav";

// import music loops
import FluteLoop from "./Clips/FluteLoop.wav"
import GuitarLoop1 from "./Clips/GuitarLoop140BPM.wav"
import GuitarLoop2 from "./Clips/GuitarLoop160BPM.wav"
import HihatLoop1 from "./Clips/HihatLoop110BPM.wav"
import HihatLoop2 from "./Clips/HihatLoop160BPM.wav"
import PercLoop1 from "./Clips/PercussionLoop100BPM.wav"
import PercLoop2 from "./Clips/PercussionLoop160BPM.wav"
import TopLoop1 from "./Clips/TopLoop100BPM.wav"
import TopLoop2 from "./Clips/TopLoop170BPM.wav"

const BasicDrumSounds = [
    ['Closed Hihat', ClosedHihat],
    ['Ride Hihat', RideHihat],
    ['Open Hihat', OpenHihat],
    ['Clang', Clang],
    ['High Thud', HiThud],
    ['Low Thud', LowThud],
    ['Chop Snare', ChopSnareC],
    ['Rimshot Snare', RimshotSnare],
    ['Kick', KickC]
];

const MusicLoopsSounds = [
    ['Hihat Loop 1', HihatLoop1],
    ['Hihat Loop 2', HihatLoop2],
    ['Perc. Loop 1', PercLoop1],
    ['Perc. Loop 2', PercLoop2],
    ['Top Loop 1', TopLoop1],
    ['Top Loop 2', TopLoop2],
    ['Flute Loop', FluteLoop],
    ['Guitar Loop 1', GuitarLoop1],
    ['Guitar Loop 2', GuitarLoop2]
]

export {BasicDrumSounds, MusicLoopsSounds};
