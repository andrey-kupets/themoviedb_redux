import React from 'react';
import { FilmItem } from "../film-item";
import styles from './FilmList.module.css';
import {useSelector} from "react-redux";

export const FilmList = ({items, onFilmClick}) => {
    console.log(items, 'items from FilmList');
    const inputData = useSelector(({inputData_State: {inputData}}) => inputData)
    const movies = useSelector(({moviesData_State: {moviesData: {movies}}}) => movies)
    console.log(movies, 'chosen movies ' + inputData)

// if(!!inputData) {
//     return (
//         // <div className={styles.listWrapper}>
//         //     {items.filter(item => item.title.includes(inputData.toLowerCase())).map(item => (
//         //         <div
//         //             onClick={() => onFilmClick(item)}
//         //             className={styles.itemWrapper}
//         //             key={item.id}
//         //         >
//         //             <FilmItem {...item}/>
//         //         </div>
//         //     ))
//         //     }
//         // </div>
//         <div className={styles.listWrapper}>
//             {movies.map(item => (
//                 <div
//                     onClick={() => onFilmClick(item)}
//                     className={styles.itemWrapper}
//                     key={item.id}
//                 >
//                     <FilmItem {...item}/>
//                 </div>
//             ))
//             }
//         </div>
//     )
// }
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

