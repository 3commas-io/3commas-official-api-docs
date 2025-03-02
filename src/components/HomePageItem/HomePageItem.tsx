import React from 'react';
import styles from './HomePageItem.module.css'
import HomePageIcons from "@site/src/icons/HomePageIcons";


const HomePageItem = ({data}) => {
    return (
        <li className={styles.homePageItemContainer}>
            <div className={styles.homePageItemIconWrapper}>
                <HomePageIcons icon={data.icon}/>
            </div>
            <div className={styles.homePageItemContentWrapper}>
                <p className={styles.homePageItemTitle}>{data.title}</p>
                <p className={styles.homePageItemDescription}>{data.description}</p>
            </div>
        </li>
    );
};

export default HomePageItem;