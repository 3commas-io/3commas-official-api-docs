import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import HomePageItem from "@site/src/components/HomePageItem/HomePageItem";


const items = [{
    title: 'General information',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    icon: 'generalInfo'
},
    {
        title: 'DCA Bot',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        icon: 'dcaBot'
    },
    {
        title: 'Account',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        icon: 'account'
    },
    {
        title: 'Grid Bot',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        icon: 'gridBot'
    },
    {
        title: 'Market Data',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        icon: 'marketData'
    },
    {
        title: 'Smart Trade',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        icon: 'smartTrade'
    }]

function Home() {
    return (
        <Layout
            title="Ласкаво просимо на 3Commas API Platform"
            description="Офіційна документація та додаткові матеріали">
            <aside className={styles.sidebar}>
            </aside>
            <main className={styles.homePageContainer}>
                <div className={styles.homePageGreetingContainer}>
                    <h1 className={styles.homePageTitle}>3Commas API Platform</h1>
                    <p className={styles.homePageDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <ul className={styles.navigationContainer}>
                    {items.map((item, index) => (
                        <HomePageItem data={item} key={index}/>
                    ))}
                </ul>
            </main>
        </Layout>
    );
}

export default Home;