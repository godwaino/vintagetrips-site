# VintageTrips.com

Luxury nostalgic journeys by rail, road & sea. A static Jekyll site hosted on GitHub Pages.

## 🎨 Design: Postcard Classic Palette

```css
--bg: #F6F1E7;          /* aged paper */
--surface: #FFF8EE;     /* cream */
--primary: #1F2A44;     /* ink navy */
--secondary: #2F4A3D;   /* forest */
--accent: #B23A3A;      /* stamp red */
--border: #D8CDBE;      /* muted border */
--text: #2B2B2B;        /* dark gray */
```

## ✨ Features

- **Data-driven trips** - All trips managed via `_data/trips.yml`
- **Shared layouts** - Header/footer via Jekyll includes
- **Filter by category** - Train, road, cruise, hotel, safari
- **Global coverage** - Europe, Asia, Americas, Africa, Oceania
- **SEO optimized** - Jekyll SEO plugin, sitemap, meta tags
- **Static hosting** - GitHub Pages (free, fast, secure)

## 📝 How to Add a New Trip

1. Open `_data/trips.yml`
2. Add a new entry:

```yaml
- title: "Your Trip Name"
  region: "Europe"  # or Asia, Americas, Africa, Oceania
  category: "train"  # train, road, cruise, hotel, safari
  category_label: "Heritage Train"
  location: "City A → City B"
  description: "Your trip description here..."
  duration: "3-5 days"
  price_from: "£1,500"
  currency: "GBP"
  emoji: "🚂"
  affiliate_url: "#book"
```

3. Commit and push - GitHub Pages rebuilds automatically!

## 🛠️ Local Development

```bash
# Install dependencies
bundle install

# Run Jekyll locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## 📁 File Structure

```
├── _config.yml           # Site configuration
├── _data/
│   └── trips.yml         # All trip data
├── _includes/
│   ├── header.html       # Shared header
│   └── footer.html       # Shared footer
├── _layouts/
│   └── default.html      # Base layout
├── index.html            # Homepage
├── trips.html            # Browse trips page
├── style.css             # Postcard Classic styles
├── script.js             # Interactive elements
└── [SEO pages].html      # Landing pages
```

## 🚀 Deployment

Auto-deploys to GitHub Pages on every push to `main`:
- **Live URL**: https://www.vintagetrips.com
- **GitHub Pages**: https://godwaino.github.io/vintagetrips-site

## 📊 Next Steps

1. **Add affiliate links** - Replace `#book` in `trips.yml` with real booking URLs
2. **Set up analytics** - Add Google Analytics 4 tracking code
3. **Email collection** - Formsubmit.co configured for `godwin@sabsdomains.com`
4. **Convert homepage** - Migrate `index.html` to use Jekyll layout
5. **Add trip detail pages** - Create individual pages for each trip

## 🔗 Links

- [Repository](https://github.com/godwaino/vintagetrips-site)
- [Live Site](https://www.vintagetrips.com)
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
