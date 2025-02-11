import Endpoint from '@site/src/components/Endpoint';
import * as StickyLayout from '@site/src/components/StickyLayout';

# Grid Bots

<StickyLayout.Root>
<StickyLayout.Main>

Grid Bot entities are designed to automate trading strategies by executing a series of buy and sell orders within predefined price ranges. They allow users to take advantage of market fluctuations while minimizing manual intervention.

Grid Bot entities hold information such as:
    
  * Configuration details for the bot, including the trading pair, strategy type, and grid settings;
  * Performance metrics like current profit, total profits, and investment amounts in base and quote currencies;
 * Status indicators, such as whether the bot is enabled or disabled and whether stop-loss actions are set.

 3Commas offers a range of tools to create new Grid Bots, manage their settings, and analyze their performance effectively.

 </StickyLayout.Main>

<StickyLayout.Sticky>

<Endpoint
  endpointsList={[
    {
      url: "/ver1/grid_bots/manual",
      method: 'POST'
    },
    {
      url: "/ver1/grid_bots/:id/manual",
      method: 'PATCH'
    },
    {
      url: "/ver1/grid_bots/:id",
      method: 'GET'
    },
    {
      url: "/ver1/grid_bots",
      method: 'GET'
    },
    {
      url: "/ver1/grid_bots/:id/disable",
      method: 'POST'
    },
    {
      url: "/ver1/grid_bots/:id/enable",
      method: 'POST'
    },
    {
      url: "/ver1/grid_bots/:id",
      method: 'DELETE'
    },
    {
      url: "/ver1/grid_bots/:id/note",
      method: 'POST'
    },
    {
      url: "/ver1/grid_bots/:id/required_balances",
      method: 'GET'
    },
    {
      url: "/ver1/grid_bots/:id/events",
      method: 'GET'
    },
    {
      url: "/ver1/grid_bots/:id/market_orders",
      method: 'GET'
    }
  ]}
/>

</StickyLayout.Sticky>
</StickyLayout.Root>



    


    


    
