

**POST** `https://foo.bar/api/v1/bots`


----------------

<table>
  <tr>
    <th style="width: 250px;">Name</th>
    <th style="width: 100px;">Type</th>
    <th style="width: 90px;">Mandatory</th>
    <th style="width: 80px;">Values</th>
    <th style="width: 100px;">Description</th>
  </tr>
  <tr>
    <td> <strong>types_to_create</strong> </td>
    <td><code>`array[string]</code></td>
    <td>No</td>
    <td></td>
    <td>Array of related account types to be created.<br> For example <code>binance_margin<code></td>
  </tr>
</table>





<blockquote>

<mark style="color:green"> **POST**

<mark style="color:green"> **/ver1/bots/create_bot**

</blockquote>



<p>
  Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval
  and adult forms.
</p>

<aside>
  <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>
  Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the Ensatina, the
  Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects, worms and
  other small creatures.
</p>


<hgroup>
  <h1>Frankenstein</h1>
  <p>Or: The Modern Prometheus</p>
</hgroup>
<p>
  Victor Frankenstein, a Swiss scientist, has a great ambition: to create intelligent life. But when his creature first
  stirs, he realizes he has made a monster. A monster which, abandoned by his master and shunned by everyone who sees
  it, follows Dr Frankenstein to the very ends of the earth.
</p>



{% tabs %}

{% tab title="Windows" %} Here are the instructions for Windows {% endtab %}

{% tab title="OSX" %} Here are the instructions for macOS {% endtab %}

{% tab title="Linux" %} Here are the instructions for Linux {% endtab %}

{% endtabs %}


{% hint style="info" %}
Good to know. Use endpoint [Supported markets list](Market%20data/1.Supported%20markets%20list.md) to get value for parameter 'market_code' in 3Commas.
{% endhint %}

------

**data** `object`

- **editable** `boolean`  
  Indicates whether the user can modify the settings of this SmartTrade. `true` if editing is available.

- **current_price** `object`  
  - **bid** `number`  
    The current highest bid price of the asset.
  - **ask** `number`  
    The current lowest ask price of the asset.
  - **last** `number`  
    The last traded price of the asset.
  - **quote_volume** `number`  
    [?]
  - **day_change_percent** `number`  
    Percentage price change for the asset over the last 24 hours.

- **target_price_type** `string`
- **orderbook_price_currency** `string`