import React from 'react';

type SneakerProps = {
  type: string;
  price: number;
  imgSrc: string;
  sneakerId: string;
  backgroundColor: string;
};

const SneakerCard: React.FC<SneakerProps> = ({ type, price, imgSrc, sneakerId, backgroundColor }) => {
  return (
    <div
      className="rounded-xl p-1 text-center shadow-md hover:shadow-lg transition-shadow relative"
      style={{
        backgroundColor: backgroundColor,
        border: `2px solid ${type === 'Walker' ? '#00FF00' : '#8B4513'}`,
        color: 'white',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="text-left text-white text-xl font-bold">{type}</div>
      <div className="text-left text-gray-300 text-[6px]">№{sneakerId}</div>

      <div className="flex-grow flex items-center justify-center">
        <img src={imgSrc} alt={`${type} sneaker`} className="w-full h-[60%]" />
      </div>

      <div className="text-left mt-auto text-lg font-bold text-white p-1">
        {price} $
      </div>

    </div>
  );
};

export default SneakerCard;
