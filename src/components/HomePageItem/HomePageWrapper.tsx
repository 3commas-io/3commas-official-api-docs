import styles from "./HomePageWrapper.module.css";

import HomePageItem from "./HomePageItem";

const HomePageWrapper = () => {
  return (
    <div className={styles["home_page-wrapper"]}>
      <HomePageItem
        data={{
          title: "General information",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "generalInfo",
          link: "/general-information",
        }}
      />
      <HomePageItem
        data={{
          title: "DCA Bot",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "dcaBot",
          link: "/dca-bot",
        }}
      />
      <HomePageItem
        data={{
          title: "Account",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "account",
          link: "/account",
        }}
      />
      <HomePageItem
        data={{
          title: "Grid Bot",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "gridBot",
          link: "/grid-bot",
        }}
      />
      <HomePageItem
        data={{
          title: "Market Data",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "marketData",
          link: "/market-data",
        }}
      />
      <HomePageItem
        data={{
          title: "Smart Trade",
          description: "Lorem ipsum dolor sit amet, consectetur",
          icon: "smartTrade",
          link: "/smart-trade",
        }}
      />
    </div>
  );
};

export default HomePageWrapper;
