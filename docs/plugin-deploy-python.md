# Veeam Plugin Deployment

## Python

This method of deploying the Veeam Plugin for vCD is best suited for vCloud Director 9.1 & 9.5 but it will work with version 9.7 as well. If vCD 9.7 is being used, it's highly recommended you use the [VMware Plugin Lifecycle Manager](plugin-deploy-plugin-manager.md) as it's the easiest deployment method.

*Please note that this method of deploying the plugin will make it visible to all vCD Tenants. If a Tenant's Organization is not [configured in the VSSP](https://helpcenter.veeam.com/docs/backup/em/em_configure_vcd_org.html?ver=95u4), that Tenant will simply be unable to login to the VSSP.*

### Requirements

* Python 3.4+
* Python libraries required:
  * `requests`

### Deployment Steps

* [Download the current plugin](https://github.com/VeeamHub/veeam-plugin-for-vcd/releases/latest)
  * `veeam-vcd-plugin-X.X.X.zip`
* Unzip the plugin to your computer, open a terminal, & navigate to the plugin folder
* Modify the values in the `manage_plugin.json` accordingly for your vCD environment
  * _System Administrator account is required_

_Sample `manage_plugin.json`:_

```json
{
  "username": "administrator",
  "org": "System",
  "password": "P@$$w0rd",
  "vcdUrlBase": "https://vmware.example.com"
}
```

* Execute the Python script below to upload the plugin to vCD:

```text
python3 ./manage_plugin.py register
```

* Upon successful deployment, the plugin will show up in the drop-down for vCD:

![vCD Drop-Down](images/vcd-dropdown.png)
