import React from 'react';
import { services } from '../utils/services';
import { CustomCard } from './CustomCard';

export const Home = () => {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {services.map((service, index) => {
                    return (
                        <CustomCard key={index} {...service}></CustomCard>
                    )
                })}
            </div>
        </>
    )
}
