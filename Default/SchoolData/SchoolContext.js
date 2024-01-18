// SchoolContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { schools } from './schoolsData'; // Import the schools data

const SchoolContext = createContext();

export const useSchools = () => useContext(SchoolContext);

export const SchoolProvider = ({ children }) => {
    const [schoolsData, setSchoolsData] = useState([]);

    useEffect(() => {
        // Load schools data when the component mounts
        setSchoolsData(schools); // Load the global array of School objects
    }, []);

    return (
        <SchoolContext.Provider value={schoolsData}>
            {children}
        </SchoolContext.Provider>
    );
};
