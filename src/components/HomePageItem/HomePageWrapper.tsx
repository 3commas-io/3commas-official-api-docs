import styles from "./HomePageWrapper.module.css";

import HomePageItem from "./HomePageItem";

const HomePageWrapper = () => {
  return (
    <div className={styles["home_page-wrapper"]}>
      <HomePageItem
        data={{
          title: "Quick Start",
          description: "How to start.",
          icon: "generalInfo",
          link: "/quick-start",
        }}
      />
      <HomePageItem
        data={{
          title: "DCA Bot",
          description:
            "Automate trading on the exchange using a Dollar Cost Averaging (DCA) strategy.",
          icon: "dcaBot",
          link: "/dca-bot",
        }}
      />
      <HomePageItem
        data={{
          title: "Account",
          description: "The set of tools available for an exchange account.",
          icon: "account",
          link: "/account",
        }}
      />
      <HomePageItem
        data={{
          title: "Grid Bot",
          description:
            "Automate trading strategies by executing a series of buy and sell orders within predefined price ranges.",
          icon: "gridBot",
          link: "/grid-bot",
        }}
      />
      <HomePageItem
        data={{
          title: "Market Data",
          description:
            "Essential information about cryptocurrency exchanges, trading pairs, and market rules.",
          icon: "marketData",
          link: "/market-data",
        }}
      />
      <HomePageItem
        data={{
          title: "Smart Trade",
          description:
            "Open, manage, and close orders on the exchange with predefined conditions.",
          icon: "smartTrade",
          link: "/smart-trade",
        }}
      />
    </div>
  );
};

export default HomePageWrapper;
