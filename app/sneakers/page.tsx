'use client';

import SneakerCard from '../components/SneakersCard';
import sneaker from '../images/sneaker.png';
import back from '../images/mainBackground.png'

const sneakersData = [
  { type: 'Walker', price: 200, imgSrc: sneaker.src, sneakerId: '34324234', backgroundColor: '#165026' },
  { type: 'Runner', price: 2000, imgSrc: sneaker.src, sneakerId: '84325675', backgroundColor: '#8B4513' },
  { type: 'Walker', price: 200000, imgSrc: sneaker.src, sneakerId: '84323422', backgroundColor: '#165026' },
  { type: 'Runner', price: 2000000, imgSrc: sneaker.src, sneakerId: '98321432', backgroundColor: '#8B4513' },
];

export default function Sneakers() {
  return (
    <div
      className="p-6"
      style={{
        backgroundImage: `url(${back.src})`, 
        backgroundSize: 'cover',      
        backgroundPosition: 'center',  
        backgroundRepeat: 'no-repeat', 
        minHeight: '100vh',            
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-6">Sneakers</h1>
    
      <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sneakersData.map((sneaker, index) => (
          <SneakerCard
            key={index}
            type={sneaker.type}
            price={sneaker.price}
            imgSrc={sneaker.imgSrc}
            sneakerId={sneaker.sneakerId}
            backgroundColor={sneaker.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}