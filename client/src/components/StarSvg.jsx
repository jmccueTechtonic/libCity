import React, { useState } from 'react';
import shortid from 'shortid';
import '../styles/index.scss';

export default function StarSvg({ num, adjustable, updateRatingHandler }) {
  const [hoverableRating, setHoverableRating] = useState(0);

  return (
    <>
      {/* Array of 0's have no significance, only its place matters  */}
      {[0, 0, 0, 0, 0].map((el, i) => {
        return (
          <svg
            key={shortid.generate()}
            id={`star${i+1}`}
            className='formBook__star'
            fill={
              hoverableRating > i || num > i ? 'yellow' : 'rgb(233, 233, 233)'
            }
            stroke='black'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            onMouseEnter={() => {
              if (adjustable) {
                setHoverableRating(i + 1);
              }
            }}
            onMouseLeave={() => {
              if (adjustable) {
                setHoverableRating(0);
              }
            }}
            onClick={(e) => {
              if (adjustable) {
                updateRatingHandler(e, i + 1);
              }
            }}
          >
            <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
          </svg>
        );
      })}
    </>
  );
}
