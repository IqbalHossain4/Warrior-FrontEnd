import React from 'react';

const DetailHakaton = ({data}) => {

    const {title} = data;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default DetailHakaton;