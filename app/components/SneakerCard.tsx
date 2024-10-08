import { useEffect, useState } from 'react';
import sneakersImg from '../images/sneakersBoost.png';
import backgroundImg from '../images/backgroundBoosts.png';
import timer from '../images/time-icon.png';

const SneakerCard: React.FC = () => {
    const [time, setTime] = useState<string>('00:00');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center mt-60 h-[160px]">
            <div className="top-2 left-2 text-white text-xl flex z-10 mr-300">
                <img src={timer.src} alt="Timer" className="w-4 mr-1" />
                <span>{time}</span>
            </div>
            <div className="relative p-4 rounded-xl flex items-center justify-center w-[400px] h-[150px] border-2 border-green-500"
                style={{
                    backgroundImage: `url(${backgroundImg.src})`,
                    backgroundPosition: 'center',
                }}>

                <div className="relative w-[300px] h-[250px] flex items-center justify-center overflow-visible">
                    <img
                        src={sneakersImg.src}
                        alt="Sneaker Image"
                        width={350}
                        height={350}
                        className="object-contain absolute -top-16"
                    />
                </div>

                <div className="absolute bottom-4 right-8 text-green-500 text-lg">
                    Runner
                </div>
            </div>
        </div>
    );
};

export default SneakerCard;
