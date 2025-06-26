
document.addEventListener("DOMContentLoaded", async function () {
    const grid = document.querySelector('[data-cat-slug]');
    if (!grid) return;

    const slugString = grid.getAttribute("data-cat-slug");
    if (!slugString) return;

    const slugs = slugString.split(',').map(s => s.trim());

    const res = await fetch("/wp-json/wp/v2/categories?per_page=100");
    const allCategories = await res.json();

    const slugMap = {};
    allCategories.forEach(cat => {
        if (slugs.includes(cat.slug)) {
            slugMap[cat.slug] = cat.name;
        }
    });

    document.querySelectorAll(".btCatFilter .btCatFilterItem").forEach(el => {
        if (!el.classList.contains("autoSlugTag")) el.style.display = "none";
    });

    const filterContainer = document.querySelector(".btCatFilter");
    if (!filterContainer) return;

    slugs.forEach(slug => {
        const span = document.createElement("span");
        span.className = "btCatFilterItem autoSlugTag";
        span.setAttribute("data-slug", slug);
        span.textContent = slugMap[slug] || slug;

        span.addEventListener("click", function () {
            document.querySelectorAll(".btCatFilterItem").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterBtn = document.querySelector(`.btCatFilterItem[data-slug='${slug}']`);
            if (filterBtn && filterBtn !== this) filterBtn.click();
        });

        filterContainer.appendChild(span);
    });
});
