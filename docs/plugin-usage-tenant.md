# Veeam Plugin for vCD

## Tenant Portal Usage

These instructions are for Tenants to explain the recommended method for using the Veeam Plugin for vCD.

* Tenant logs in to vCloud Director
* Open `Managed Backups` from the vCD drop-down list

![vCD Drop-Down](images/vcd-dropdown.png)

* Assuming the Service Provider has [enabled the Tenant Organization in the VSSP](https://helpcenter.veeam.com/docs/backup/em/em_configure_vcd_org.html?ver=95u4), the tenant will now be automatically logged in using the `veeam.sa` service account the plugin created underneath each vCD Tenant Organization.

* Once logged in, [Veeam Documentation](https://helpcenter.veeam.com/docs/backup/vsphere/vcloud_director.html?ver=95u4) should be referenced for further instructions if required.
