import React from 'react';

type SneakerProps = {
  type: string;
  price: number;
  imgSrc: string;
  rarity?: string; 
};

const SneakerCard: React.FC<SneakerProps> = ({ type, price, imgSrc, rarity }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center bg-white shadow-md hover:shadow-lg transition-shadow">
      <img src={imgSrc} alt={`${type} sneaker`} className="w-full h-auto mb-4" />
      <div className="sneaker-info">
        <h2 className="text-xl font-semibold mb-2">{type}</h2>
        <p className="text-lg font-medium">{price} $</p>
        {rarity && <span className="text-sm text-gray-500">{rarity}</span>}
      </div>
    </div>
  );
};

export default SneakerCard;
