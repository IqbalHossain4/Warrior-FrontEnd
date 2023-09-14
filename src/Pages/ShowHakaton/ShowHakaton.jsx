import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowHakaton = () => {
    // Assuming that useLoaderData returns an object with a 'title' property
    const { title } = useLoaderData();

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default ShowHakaton;
