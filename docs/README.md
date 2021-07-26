# Veeam Plugin for VMware vCloud Director (deprecated)

{% note %}
Veeam Backup & Replication 11 introduced an official [VCD plugin](https://helpcenter.veeam.com/docs/backup/em/vcd_plugin_upload_configure.html?ver=110) which replaces this plugin. Only use this plugin if you're running a version prior to v11.

If you are looking to upgrade to the new plugin, [uninstall this plugin](plugin-uninstall-instructions.md) and then follow [Veeam instructions](https://helpcenter.veeam.com/docs/backup/em/vcd_plugin_upload_configure.html?ver=110) for installing the new plugin.
{% endnote %}

The Veeam Plugin for vCloud Director (VCD) allows the [Veeam VCD Self-Service Backup Portal](https://helpcenter.veeam.com/docs/backup/em/em_managing_vms_in_vcd_org.html?ver=95u4) to be accessible natively within the VCD Web UI. It leverages the [VCD Extension SDK](https://github.com/vmware/vcd-ext-sdk) to make this possible.

This documentation will provide steps for Installing, Configuring, and Using the Veeam Plugin for VCD.

[If you're looking for instructions on how to **upgrade** the Veeam Plugin to the latest version, please click here.](plugin-upgrade-instructions.html)

{% note %}
IIS configuration (see step #2 below) must be performed any time you install/upgrade Enterprise Manager.
{% endnote %}

## Steps

1. [Install and Configure the Veeam VCD Self-Service Backup Portal (VSSP)](vssp-setup.md)
2. [Configure Enterprise Manager IIS web server to support Cross-Origin API requests](vssp-iis-config.md)
3. [Deploy the Veeam Plugin for vCloud Director](plugin-deployment-methods.md)
4. [Configure the Veeam Plugin for vCloud Director](plugin-configuration-provider.md)
5. [Tenant Portal Usage Instructions](plugin-usage-tenant.md)

**Note:** VSSP must be publicly accessible _(default port 9443)_

## Veeam Plugin Prerequisites

* Veeam Backup Enterprise Manager (EM) 9.5 Update 4b _and newer_
* Supports vCloud Director (VCD) 9.1.0.2 - 10.x
  * _vCD 10.x support requires EM 10.x_
* Valid SSL Certificates must be configured for both _EM_ and _vCD_
  * Self-Signed SSL Certificates need to be trusted by the client before the plugin will work
