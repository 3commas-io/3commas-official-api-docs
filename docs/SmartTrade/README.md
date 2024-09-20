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
* Market close trade.<br>
<br>


## Attributes<br>

<br>

<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;integer<br>
Unique 3Commas ID for this SmartTrade entity<br>

<strong>account</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>object<br>Details about user account<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>integer<br>
&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this exchange account entity<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>string<br>
&nbsp;&nbsp;&nbsp;&nbsp;Exchange types where this SmartTrade was created<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>string<br> 
&nbsp;&nbsp;&nbsp;&nbsp;Name of this exchange account<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>market</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>string<br>
&nbsp;&nbsp;&nbsp;&nbsp;[?]<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<strong>link</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>string<br>
&nbsp;&nbsp;&nbsp;&nbsp;The URL of the account where this SmartTrade was created<br><br>
<strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>string<br>
Trading pair in 3Commas format<br><br>
<strong>instant</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>boolean<br>
[?] <br>

<strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span>object<br><br>
<span style="margin-left: 40px;"><strong>type</strong><span style="margin-left: 30px;">string<br> 
<span style="margin-left: 40px;">Web status for this SmartTrade<br>
<span style="margin-left: 40px;"><strong>basic_type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 40px;">3Commas status for this SmartTrade<br>
<span style="margin-left: 40px;"><strong>title</strong><span style="margin-left: 30px;">string 
<span style="margin-left: 40px;">Brief description of this status<br>
<span style="margin-left: 40px;"><strong>error</strong><span style="margin-left: 30px;">string 
<span style="margin-left: 40px;">Description of the error for this SmartTrade if it fails<br>
<strong>leverage</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 40px;"><strong>enabled</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 40px;">Information about this leverage for a futures account<br>
<span style="margin-left: 40px;">`false` if editing is not available<br>
<span style="margin-left: 40px;"><strong>type</strong><span style="margin-left: 30px;">string<br> 
<span style="margin-left: 40px;">Shows the leverage type that was set when creating a SmartTrade on a futures account<br>
<span style="margin-left: 40px;"><strong>value</strong><span style="margin-left: 30px;">nuber<br> 
<span style="margin-left: 40px;">Shows the leverage value that was set when creating a SmartTrade on a futures account<br>
<span style="margin-left: 40px;"><strong>type_editable</strong><span style="margin-left: 30px;">boolean<br> 
<span style="margin-left: 40px;">Indicates whether the user can modify `leverage[type]` settings when editing a SmartTrade.<br>
<span style="margin-left: 40px;">`true` if editing is available<br>
<strong>position</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 40px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 40px;">Indicates whether the user can modify the settings of position when editing a SmartTrade.<br><span style="margin-left: 40px;">`true` if editing is available<br>
<span style="margin-left: 40px;"><strong>type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 40px;">[?]<br>

<span style="margin-left: 40px;"><strong>order_type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 40px;">The type of order used to open the position<br>

<span style="margin-left: 30px;"><strong>units</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>

<span style="margin-left: 80px;"><strong>value</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 80px;">Amount of units for position trade<br>

<span style="margin-left: 80px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 80px;">Indicates whether the user can modify the group of unit settings parameters when editing a SmartTrade<br>



<span style="margin-left: 30px;"><strong>price</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>value</strong><span style="margin-left: 60px;">number<br>
<span style="margin-left: 80px;">The price of the position order, including commission<br>
<span style="margin-left: 80px;"><strong>value_without_commission</strong><span style="margin-left: 60px;">number<br>
<span style="margin-left: 80px;">The price of the position order, excluding commission<br>
<span style="margin-left: 80px;"><strong>editable</strong><span style="margin-left: 60px;">boolean<br>
<span style="margin-left: 80px;">Indicates whether the user can modify the group of price settings parameters when editing a SmartTrade<br>
<br>


<span style="margin-left: 30px;"><strong>total</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>value</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 80px;">The total value of the position, including all relevant factors such as price and quantity<br>
<span style="margin-left: 80px;"><strong>value_without_commission</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 80px;"> [?] <br>



<span style="margin-left: 30px;"><strong>conditional</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>

<span style="margin-left: 80px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 80px;">Indicates whether the user can modify the settings of conditional of position when editing a SmartTrade<br>

<span style="margin-left: 80px;"><strong>price</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 120px;"><strong>value</strong><span style="margin-left: 30px;"></span>number<br>
<span style="margin-left: 120px;">The specific price value set for the conditional order trigger<br>
<span style="margin-left: 120px;"><strong>type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 120px;">The type of price for the conditional order used to open the position<br>


<span style="margin-left: 80px;"><strong>order_type</strong>string<br>
<span style="margin-left: 80px;">The type of conditional order used to open the position (e.g., `market`, `limit`, `conditional`)<br>
<span style="margin-left: 80px;"><strong>trailing</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 120px;"><strong>editable</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 120px;">Indicates whether the trailing stop settings for the conditional order can be edited<br>
<span style="margin-left: 120px;"><strong>percent</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 120px;">The trailing stop percentage for the conditional order, specifying the distance from the market price at which the trailing stop is triggered<br>



<span style="margin-left: 40px;"><strong>status</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 80px;"><strong>type</strong><span style="margin-left: 30px;">boolean<br>
<span style="margin-left: 80px;">The status type of the position trade for this SmartTrade<br>
<span style="margin-left: 80px;"><strong>basic_type</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">[?]<br>
<span style="margin-left: 80px;"><strong>title</strong><span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">Brief description of this status for this position trade<br>
<span style="margin-left: 80px;"><strong>error</strong> <span style="margin-left: 30px;">string<br>
<span style="margin-left: 80px;">Description of the error for this conditional trade if it fails<br>


<strong>note</strong><span style="margin-left: 30px;"></span>string<br>
Short note for this SmarTrade <br>

<strong>note_raw</strong><span style="margin-left: 30px;"></span>string<br>
TBD: add a discription <br>

<strong>skip_enter_stepote_raw</strong><span style="margin-left: 30px;"></span>boolean<br>
Shows whether the position opening step was skipped<br>

<strong>profit</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 40px;"><strong>volume</strong><span style="margin-left: 30px;">number<br>
<span style="margin-left: 40px;">The total profit volume generated by this SmartTrade in quote<br>
<span style="margin-left: 40px;"><strong>profit[usd]</strong><span style="margin-left: 30px;">number<br> 
<span style="margin-left: 40px;">The total profit volume generated by this SmartTrade in USD<br>
<span style="margin-left: 40px;"><strong>percent</strong>number<span style="margin-left: 30px;"><br>
<span style="margin-left: 40px;">The total profit volume generated by this SmartTrade in percent<br>
<span style="margin-left: 40px;"><strong>roe</strong><span style="margin-left: 30px;">number or null<span style="margin-left: 30px;"><br>
<span style="margin-left: 40px;">The return on equity (ROE) for this SmartTrade's profit, applicable only for futures accounts<br>



<strong>margin</strong><span style="margin-left: 30px;"></span>object<br>TBD: add a discription<br><br>
<span style="margin-left: 40px;"><strong>amount</strong><span style="margin-left: 30px;">number or null<br>
<span style="margin-left: 40px;">The total margin amount required for this SmartTrade (base)<br>
<span style="margin-left: 40px;"><strong>total</strong><span style="margin-left: 30px;">number or null<br>
<span style="margin-left: 40px;">The total margin value for this SmartTrade (quote)<br>
<br>
<strong>is_position_not_filled</strong><span style="margin-left: 30px;"></span>boolean<br>
TBD: add a discription <br>