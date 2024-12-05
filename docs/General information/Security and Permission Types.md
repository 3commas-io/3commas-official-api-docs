## Security and Permission Types<br>
<br>
<p>Each endpoint in the 3Commas API has specific security and permission types, which determine how you can interact with it.
</p>


### Security Types<br>
<p>Security types define the authentication required to access API endpoints.</p>

<table>
    <thead>
        <tr>
            <th>Security Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>NONE</td>
            <td>Endpoint can be accessed freely</td>
        </tr>
        <tr>
            <td>SIGNED</td>
            <td>Requires a valid <code>APIKey</code> and a <code>Signature</code> for access</td>
        </tr>
    </tbody>
</table>
<br>

### Permission Types<br>
<p>
    Each API endpoint has a specific permission type that defines how it can be accessed.
</p>
<p>
    Also the 3Commas API allows configuring API Keys with different permission sets.
<br>
    For example, one API Key might provide access to read-only statistics, while another could enable full control over bots and accounts.
</p>
<br>
<table>
    <thead>
        <tr>
            <th>Permission Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>NONE</td>
            <td>Endpoint can be accessed freely</td>
        </tr>
        <tr>
            <td>BOTS_READ</td>
            <td>Allows viewing information associated with this permission</td>
        </tr>
        <tr>
            <td>BOTS_WRITE</td>
            <td>Allows creating or modifying data associated with this permission</td>
        </tr>
          <tr>
            <td>ACCOUNTS_READ</td>
            <td>Allows viewing information associated with this permission</td>
        </tr>
          <tr>
            <td>ACCOUNTS_WRITE</td>
            <td>Allows creating or modifying data associated with this permission</td>
        </tr>
          <tr>
            <td>SMART_TRADES_READ</td>
            <td>Allows viewing information associated with this permission</td>
        </tr>
          <tr>
            <td>SMART_TRADES_WRITE</td>
            <td>Allows creating or modifying data associated with this permission</td>
        </tr>
    </tbody>
</table>