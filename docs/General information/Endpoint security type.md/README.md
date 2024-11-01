## Endpoint security type<br>
<br>

<p>Each endpoint has a security type that determines how you will interact with it.</p>
<p>API Keys were passed into the Rest API via the <code>APIkey</code> header.</p>
<p>API-key and Secret Key are case sensitive.</p>
<p>3Commas API Keys can be configured to access specific types of secure endpoints.<br>
<p>For example, one pair of API Keys might be restricted to STATS access only, while another pair may allow full access to all endpoints.</p><br>

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
            <td>Endpoint requires sending a valid API-Key and signature</td>
        </tr>
    </tbody>
</table>