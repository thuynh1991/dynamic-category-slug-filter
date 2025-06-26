# Dynamic Category Slug Filter

This WordPress plugin automatically generates filter buttons based on category slugs declared in your content. It fetches the correct category names via the WordPress REST API, supporting multilingual names without manual translation.

## 🌟 Features

- 🔄 **Auto Filter Display**: Generates buttons from slugs in `data-cat-slug`
- 🧠 **Smart Name Resolution**: Fetches category names via REST API
- 🎯 **Targeted Filtering**: Integrates with `.btCatFilter` structures (e.g., Betheme)
- 🧩 **No PHP Edits Needed**: JavaScript-only solution
- 🌍 **Language Agnostic**: Handles multilingual slugs

## ⚙️ How It Works

1. Waits for DOM to load
2. Finds elements with `data-cat-slug="slug1,slug2"`
3. Fetches names via `/wp-json/wp/v2/categories?slug=slug-name`
4. Hides default buttons
5. Renders new buttons with proper labels
6. Triggers filtering on click

## 🛠 Requirements

- WordPress REST API must be enabled
- Frontend element must use `data-cat-slug`
- Filter container must use `.btCatFilter` with `.btCatFilterItem`

## 📦 Installation

1. Upload the ZIP in WordPress Admin → Plugins → Add New → Upload Plugin
2. Activate the plugin
3. Add `data-cat-slug="your-category-slugs"` to your Grid or blog element
4. You're done!

## 🔁 Reusability

✅ Works on any WordPress site  
✅ No theme file edits needed  
✅ Multilingual and custom taxonomy support  

## 🧪 Recommended Use Cases

- Medical sites with Vietnamese category names
- Corporate blogs with segmented content
- News portals using multilingual filters
- WooCommerce product filtering

## 📄 License

GPLv2 or later
