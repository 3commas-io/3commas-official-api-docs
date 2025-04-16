import styles from "./HomePageWrapper.module.css";

import { HomePageItem, HomePageItemData } from "./HomePageItem";

const HOME_PAGE_ITEMS: HomePageItemData[] = [
  {
    title: "Quick Start",
    description: "How to start.",
    icon: "generalInfo",
    link: "/quick-start",
  },
  {
    title: "DCA Bot",
    description:
      "Automate trading on the exchange using a Dollar Cost Averaging (DCA) strategy.",
    icon: "dcaBot",
    link: "/dca-bot",
  },
  {
    title: "Account",
    description: "The set of tools available for an exchange account.",
    icon: "account",
    link: "/account",
  },
  {
    title: "Grid Bot",
    description:
      "Automate trading strategies by executing a series of buy and sell orders within predefined price ranges.",
    icon: "gridBot",
    link: "/grid-bot",
  },
  {
    title: "Market Data",
    description:
      "Essential information about cryptocurrency exchanges, trading pairs, and market rules.",
    icon: "marketData",
    link: "/market-data",
  },
  {
    title: "Smart Trade",
    description:
      "Open, manage, and close orders on the exchange with predefined conditions.",
    icon: "smartTrade",
    link: "/smart-trade",
  },
  {
    title: "Simple Trading",
    description:
      "Order Management System - create, manage, and close orders based on predefined conditions.",
    icon: "simpleTrading",
    link: "/simple-trading",
  },
];

const HomePageWrapper = () => (
  <div className={styles["home_page-wrapper"]}>
    {HOME_PAGE_ITEMS.map((item) => (
      <HomePageItem key={item.title} data={item} />
    ))}
  </div>
);

export default HomePageWrapper;
