import React, { createContext, useState, useContext } from "react";
import { CreateUid } from "../utils/CreateUid";
import { LocalStorageContext } from "./LocalStorageProvider";

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    const { history, historySetter } = useContext(LocalStorageContext);
    const [editData, setEditData] = useState({});

    const createHistory = item => {
        historySetter([{ ...item, ...{ id: CreateUid(), complete: false } }, ...history]);
    };

    const removeHistory = id => {
        historySetter(history.filter(item => item.id !== id));
        handleEditData({});
    };

    const editText = (item, id) => {
        historySetter(history.map(file => {
            if (file.id === id) {
                file['text'] = item;
            }
            return file;
        }));
        handleEditData({});
    }

    const editComplete = (value, id) => {
        historySetter(history.map(file => {
            if (file.id === id) {
                file['complete'] = !value;
            }
            return file;
        }));
    }


    const handleEditData = data => {
        setEditData(data);
    }

    return (
        <ListContext.Provider value={{
            history: history,
            createHistory: createHistory,
            removeHistory: removeHistory,
            editText: editText,
            editComplete: editComplete,
            editData: editData,
            handleEditData: handleEditData
        }}>
            {children}
        </ListContext.Provider>
    )
};
