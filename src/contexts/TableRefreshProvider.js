'use client'
import React, { createContext, useState, useContext } from 'react';

const TableRefreshContext = createContext();

export const TableRefreshProvider = ({ children }) => {
    const [reloadTable, setReloadTable] = useState(false);

    const updateSetReloadTable = () => setReloadTable(prevState => !prevState);

    return (
        <TableRefreshContext.Provider value={{ reloadTable, updateSetReloadTable }}>
            {children}
        </TableRefreshContext.Provider>
    );
};

export const useTableRefresh = () => useContext(TableRefreshContext);