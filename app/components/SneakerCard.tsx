import { useEffect, useState } from 'react';
import sneakersImg from '../images/sneakersBoost.png'; 

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
        <div className="relative bg-black p-4 rounded-xl flex items-center justify-between w-[400px] h-[200px]">
            {/* Таймер */}
            <div className="absolute top-4 left-4 text-white text-lg flex items-center">
                <span className="mr-2">⏰</span>
                <span>{time}</span>
            </div>

            {/* Изображение кроссовка */}
            <div className="flex-1">
                <img
                    src={sneakersImg.src}
                    alt="Sneaker Image"
                    width={250}
                    height={250}
                    className="object-contain"
                />
            </div>

            {/* Текст "Runner" */}
            <div className="absolute bottom-4 right-4 text-green-500 text-lg">
                Runner
            </div>

            {/* Фон для числа x1 */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-opacity-10 bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-green-500 opacity-50">x1</span>
            </div>
        </div>
    );
};

export default SneakerCard;
