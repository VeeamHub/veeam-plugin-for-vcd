# Veeam Plugin Deployment

## VMware Plugin Lifecycle Manager

As the [VMware Plugin Lifecycle Manager](https://github.com/vmware-samples/vcd-ext-samples/tree/customize-portal) comes pre-installed with vCloud Director 9.7 _and newer_, it's the easiest method for deploying the Veeam Plugin for VCD. It can also be installed for versions 9.1 & 9.5 using these [instructions](https://github.com/vmware-samples/vcd-ext-samples/tree/customize-portal).

### Requirements

* [VMware Plugin Lifecycle Manager](https://github.com/vmware-samples/vcd-ext-samples/tree/customize-portal)
  * _Pre-Installed with vCloud Director 9.7 and newer_

### Deployment Steps

* [Download the current plugin](https://github.com/VeeamHub/veeam-plugin-for-vcd/releases/latest)
* Unzip the plugin files `veeam-vcd-plugin-X.X.X.zip`
* Open `Customize Portal` or `Plugin Lifecycle Management` from the drop-down in the VCD Provider Portal
  * *Example:* `https://vcd.home.lab/provider`

![VMware Plugin Lifecycle Manager](images/vcd-dropdown-plugin-manager.png)

* Upload `plugin.zip` found in the Veeam Plugin files downloaded
* **Select Scope & Publishing**
  * **Scope to:**
    * Check box for _Service Providers_
    * Check box for _Tenants_
  * **Publish to:**
    * _Select as desired. If a tenant is not checked, they will not see the Veeam Plugin for VCD._
* Finish out the wizard
* Upon successful deployment, refresh your browser window (or logout/login to VCD)
* Verify the plugin shows up in the drop-down for VCD entitled `Managed Backups`:

![VCD Drop-Down with Customize Portal](images/vcd-dropdown-with-customize.png)

* You can now proceed to [configuring the Veeam Plugin](plugin-configuration-provider.md).
