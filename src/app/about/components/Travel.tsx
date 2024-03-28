import { prisma } from '@/lib/prisma';
import React from 'react'

const getTravel = async () => {
    const travel = await prisma.travel.findMany({});

    return travel;
}

const Travel = async () => {
    const data = await getTravel();

    console.log({ data });

    return <div>Travel</div>
}

export default Travel;