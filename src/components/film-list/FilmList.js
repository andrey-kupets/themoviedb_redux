import React from 'react';
import { FilmItem } from "../film-item";
import styles from './FilmList.module.css';
import {useSelector} from "react-redux";

export const FilmList = ({items, onFilmClick}) => {
    console.log(items, 'items from FilmList');

    const inputData = useSelector(({inputData_State: {inputData}}) => inputData)
    console.log(inputData, 'inputdata from filmlist')


    return (
        <div className={styles.listWrapper}>
            {items.map(item => (
                <div
                    onClick={() => onFilmClick(item)}
                    className={styles.itemWrapper}
                    key={item.id}
                >
                    <FilmItem {...item}/>
                </div>
            ))
            }
        </div>
    )
}
//.filter(item => item.title.includes('yearly'))

