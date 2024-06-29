'use client';

import React from 'react';

const GAButton = () => {
    const event = ({ action, category, label, value }: any) => {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    };

    const addToCart = () => {
        event({
            action: 'add_to_cart',
            category: 'ecommerce',
            label: 'Item added to cart',
            value: 'Tesla',
        });
    };

    return (
        <button className='bg-green-500 p-4 rounded cursor-pointer' onClick={addToCart}>Send Event</button>
    );
};

export default GAButton;
