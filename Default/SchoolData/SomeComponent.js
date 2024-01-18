// SomeComponent.js

import React from 'react';
import { useSchools } from './SchoolContext';

const SomeComponent = () => {
    const schools = useSchools();

    return (
        <div>
            {/* Render your component using the schools data */}
            {schools.map((school, index) => (
                <div key={index}>
                    <h1>{school.name}</h1>
                    {/* Render other school details */}
                </div>
            ))}
        </div>
    );
};

export default SomeComponent;
