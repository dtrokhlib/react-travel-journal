import React from 'react';
import './Card.css';

export function Card({ item }) {
    return (
        <div className='card'>
            <div className='card--image'>
                <img src={item.image.src} alt={item.image.alt} />
            </div>
            <div className='card--info'>
                <div className='card--info__location'>
                    <img src='./assets/path.png' alt='path' />
                    <span>{item.country}</span>
                    <a href={item.googleMapLink}>View On Google Maps</a>
                </div>
                <div className='card--info__title'>
                    <span>{item.title}</span>
                </div>
                <div className='card--info__dates'>
                    <span>
                        {item.startDate} - {item.endDate}
                    </span>
                </div>
                <div className='card--info__description'>
                    <span>{item.description}</span>
                </div>
            </div>
        </div>
    );
}
