import React from 'react';
import shoeIcon from '../images/shoeIcon.png';

export default function ProgressBar({ progress }: { progress: number }) {
    const radius = 155;
    const strokeWidth = 40;
    const circumference = Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative flex justify-center items-center mt-25" >
            <div className="absolute top-[-50px] text-white text-[30px] font-bold p-2">123 км</div>

            <svg width="400" height="270" viewBox="0 0 400 250">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F0F0F0" />
                        <stop offset="100%" stopColor="#B0B0B0" />
                    </linearGradient>
                    <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8A8A8A" />
                        <stop offset="100%" stopColor="#B6B6B6" />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="2" dy="0" stdDeviation="3" floodColor="rgba(255, 255, 255, 0.8)" />
                        <feDropShadow dx="-2" dy="0" stdDeviation="3" floodColor="rgba(255, 255, 255, 0.8)" />
                    </filter>
                </defs>
                <path
                    d={`M 30,180 A ${radius} ${radius} 0 0 1 370 180`}
                    fill="transparent"
                    stroke="url(#gradient1)"
                    className='mt-2'
                    strokeWidth={strokeWidth}
                />
                <path
                    d={`M 30,180 A ${radius} ${radius} 0 0 1 370 180`}
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    filter="url(#shadow)"
                />
                <text x="25" y="205" fontFamily='Acrom bold' fontSize="20" fill="#fff">0</text>
                <text x="350" y="205" fontFamily='Acrom bold' fontSize="20" fill="#fff">700</text>
            </svg>

            <div className="absolute flex flex-col items-center bottom-[50px]">
                <img src={shoeIcon.src} alt="Shoe Icon" className="w-48 h-48" />
                <p className="absolute text-white font-medium text-[18px] bottom-[10px]">Silver League</p>
            </div>
        </div>
    );
}
