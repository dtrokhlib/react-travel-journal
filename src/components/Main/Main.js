import React from 'react';
import './Main.css';
import { Card } from '../Card/Card';
import { travelList } from '../../data';

export function Main() {
    const cards = travelList.map((item) => <Card key={item.id} item={item} />);

    return <div className='main'>{cards}</div>;
}
