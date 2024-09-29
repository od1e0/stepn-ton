import React from 'react';
import Link from 'next/link';
import boosts from '../images/boosts.png';
import sneakers from '../images/sneakers.png';
import referals from '../images/referals.png';
import tasks from '../images/tasks.png';
import leaderboard from '../images/leaderboard.png';

export default function NavBar() {
    return (
        <nav className="app-bar bg-[#1f2021] fixed bottom-0 left-0 right-0 mx-auto rounded-t-3xl flex justify-center z-20">
            <div className="app-bar-nav flex justify-between w-full max-w-md p-2">
                
                {/* Sneakers */}
                <Link href="/" className="app-bar-item no-select flex flex-col items-center text-white">
                    <div className="app-bar-item-image">
                        <img src={sneakers.src} alt="sneakers" className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs">Sneakers</p>
                </Link>

                <Link href="/" className="app-bar-item no-select flex flex-col items-center text-white">
                    <div className="app-bar-item-image">
                        <img src={leaderboard.src} alt="leaderboard" className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs">Leaderboard</p>
                </Link>

                {/* Tasks */}
                <Link href="/tasks" className="app-bar-item no-select flex flex-col items-center text-white">
                    <div className="app-bar-item-image items-center">
                        <img src={tasks.src} alt="tasks" className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs">Tasks</p>
                </Link>

                {/* Referals */}
                <Link href="/referals" className="app-bar-item no-select flex flex-col items-center text-white">
                    <div className="app-bar-item-image">
                        <img src={referals.src} alt="referals" className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs">Invite</p>
                </Link>

                {/* Boosts */}
                <Link href="/boosts" className="app-bar-item no-select flex flex-col items-center text-white">
                    <div className="app-bar-item-image">
                        <img src={boosts.src} alt="boosts" className="w-8 h-8 object-contain" />
                    </div>
                    <p className="text-xs">Boosts</p>
                </Link>
            </div>
        </nav>
    );
}
