# gitbook-plugin-theme-veeam

This is a "fork" of base theme instead of an extension. That means, some other Gitbook plugins may not work.

Screenshot:

![Screenshot of this theme](readme-snapshot.png.png)

## Features

- A neat sidebar, including the SUMMARY and table of contents of the current page.

## Install

```json
{
    "plugins": ["theme-veeam"]
}
```

Then `gitbook install`.

## Additional Markups

You may create Tip/Warning boxes use these markups:

```text
{% note %}
This is a notice
{% endnote %}

{% tip %}
This is a generous tip
{% endtip %}

{% warning %}
This is a Warning
{% endwarning %}

{% warning "Attention" %}
(Change the title if you wish)
{% endwarning %}

{% danger %}
This might be dangerous
{% enddanger %}
```
