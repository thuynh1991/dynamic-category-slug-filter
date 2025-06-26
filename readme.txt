=== Dynamic Category Slug Filter ===
Contributors: Tony Huynh
Tags: category filter, REST API, dynamic filter, JavaScript, multilingual
Requires at least: 5.0
Tested up to: 6.8
Requires PHP: 7.0
Stable tag: 1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Automatically generates filter buttons based on category slugs using the WordPress REST API. No PHP editing required. Multilingual support included.

== Description ==

This plugin dynamically generates category filter buttons using slugs declared in your HTML (e.g., in a Grid block). It fetches category names using the WordPress REST API, eliminating manual slug-to-name mapping.

Features include:

* Auto filter display from data-cat-slug attribute
* Smart category name resolution via REST API
* Works with Betheme's .btCatFilter structure
* No PHP or theme file edits needed
* Supports multilingual category names

== Installation ==

1. Upload the ZIP file via WordPress Admin → Plugins → Add New → Upload Plugin.
2. Activate the plugin.
3. Edit your page or post with a Grid or blog section.
4. Add the attribute `data-cat-slug="slug1,slug2"` to the element.
5. Ensure filter container uses `.btCatFilter` and items use `.btCatFilterItem`.

== Frequently Asked Questions ==

= Does it require jQuery? =
No. It uses vanilla JavaScript.

= Does it support multilingual websites? =
Yes. It works with category names in any language.

= Can I use it with custom taxonomies? =
Yes, with minor tweaks to REST API endpoint logic.

== Changelog ==

= 1.0 =
* Initial release.

== Upgrade Notice ==

= 1.0 =
Initial version.

== Screenshots ==
1. Example frontend filter using Vietnamese category names

== License ==
This plugin is licensed under GPLv2 or later.
