'use client';
import { useRouter } from 'next/navigation'; 
import React from 'react';

const ResultCard = ({ item }) => {
  const { game_name } = item;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/results/${item.game_name}`);
  };

  return (
    <div className="link_satta">
      <p onClick={handleClick}>{game_name.replace(/-/g, ' ').toUpperCase()}</p>
    </div>
  );
};

export default ResultCard;