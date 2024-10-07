'use client';

import SneakersCard from "../components/SneakersCard";

const sneakersData = [
  { type: 'Walker', price: 200, imgSrc: '/path/to/walker_image.png' },
  { type: 'Runner', price: 2000, imgSrc: '/path/to/runner_image.png' },
  { type: 'Walker', price: 200000, imgSrc: '/path/to/walker_image.png' },
  { type: 'Runner', price: 2000000, imgSrc: '/path/to/runner_image.png' },
  { type: 'Walker', price: 200, imgSrc: '/path/to/walker_image.png' },
  { type: 'Runner', price: 2000000, imgSrc: '/path/to/runner_image.png' }
];

export default function Sneakers() {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sneakers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sneakersData.map((sneaker, index) => (
          <SneakersCard
            key={index}
            type={sneaker.type}
            price={sneaker.price}
            imgSrc={sneaker.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
