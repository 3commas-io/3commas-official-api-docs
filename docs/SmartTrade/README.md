# SmartTrade<br>

**SmartTrade** allows users to open, manage, and close orders on the exchange with predefined conditions.<br>

3Commas provides a set of methods to create and manage SmartTrade entities and their associated trade entities.<br>
<br>

A **SmartTrade** entity holds information, including:<br>
* Exchange account and trading pair;
* Position data;
* Conditions for Take Profit and Stop Loss;
* Conditions for closing at market;
* Conditions for reducing funds.<br>
<br>

The process starts with a **SmartTrade** entity, where all conditions are configured. **SmartTrade** then manages trades, which are automatically created by 3Commas based on the conditions set within the SmartTrade entity.

A **SmartTrade** can include the following **trade** types:<br>

* Position trade;
* Take profit trade;
* Stop-loss trade;
* Reduce funds trade;
* Market close trade.
