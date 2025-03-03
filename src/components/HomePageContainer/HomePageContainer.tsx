import React from 'react';
import styles from './HomePageContainer.module.css';

type Props = {
    children: React.ReactNode;
}

export default function HomePageContainer({ children }: Props) {
    return <div className={styles.homePageContainer}>{children}</div>;
}