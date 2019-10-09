import React from 'react';
import FilterControls from '../components/FilterControls';
import TicketsList from '../components/Tickets'

export default function Main() {
    return (
        <div>
            <FilterControls />
            <TicketsList />
        </div>
    )
}
