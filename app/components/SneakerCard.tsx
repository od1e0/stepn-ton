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
        <div className="flex flex-col items-center justify-center w-full">
            {/* Таймер */}
            <div className="top-2 left-2 text-white text-xl flex z-10 mr-300">
                <img src={timer.src} alt="Timer" className="w-4 mr-1" />
                <span>{time}</span>
            </div>

            {/* Карточка с кроссовками */}
            <div
                className="relative p-4 rounded-xl flex items-center justify-center w-[90vw] h-[30vh] sm:w-[80vw] sm:h-[35vh] md:w-[70vw] md:h-[40vh] max-w-[400px] max-h-[120px] border-2 border-green-500"
                style={{
                    backgroundImage: `url(${backgroundImg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Изображение кроссовок */}
                <div className="relative w-[50vw] h-[30vh] flex items-center justify-center overflow-visible max-w-[600px] max-h-[400px]">
                    <img
                        src={sneakersImg.src}
                        alt="Sneaker Image"
                        className="object-contain absolute -top-10"
                    />
                </div>

                {/* Текст "Runner" */}
                <div className="absolute bottom-4 right-4 text-green-500 text-lg sm:text-xl">
                    Runner
                </div>
            </div>
        </div>
    );
};

export default SneakerCard;
