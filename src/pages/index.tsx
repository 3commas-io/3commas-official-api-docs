import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import {CategoryTitle} from "@site/src/components/CategoryTitle/CategoryTitle";

function Home() {
    return (
        <Layout
            title="Ласкаво просимо на 3Commas API Platform"
            description="Офіційна документація та додаткові матеріали">
            <main className={styles.homePageContainer}>
                <div className={styles.homePageGreetingContainer}>
                    <h1 className={styles.homePageTitle}>3Commas API Platform</h1>
                    <p className={styles.homePageDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <CategoryTitle title={'jnesd'}/>
                </div>
            </main>
        </Layout>
    );
}

export default Home;