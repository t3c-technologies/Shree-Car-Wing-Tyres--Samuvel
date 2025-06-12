# Guide System Documentation

## Overview

The guide system now uses Next.js dynamic routes with slugs for better scalability and maintainability.

## Structure

```
src/
├── app/
│   └── guide/
│       ├── page.js                    # Main guide listing page
│       └── [slug]/
│           ├── page.js                # Dynamic route handler
│           └── not-found.js           # 404 page for invalid guides
├── uiPages/
│   └── guidePage/
│       ├── GuidePage.jsx              # Main guide listing component
│       ├── Guide1Page.jsx             # Individual guide components
│       ├── Guide2Page.jsx
│       ├── Guide3Page.jsx
│       ├── Guide4Page.jsx
│       └── Guide5Page.jsx
└── utils/
    └── guideConfig.js                 # Centralized guide configuration
```

## How It Works

### 1. Dynamic Routes

- **Before**: `/guide/1/page.js`, `/guide/2/page.js`, etc. (hardcoded)
- **After**: `/guide/[slug]/page.js` (dynamic)

### 2. URL Structure

- Main guide page: `/guide`
- Individual guides: `/guide/1`, `/guide/2`, `/guide/3`, etc.
- Invalid guides: `/guide/invalid-slug` → 404 page

### 3. Configuration Management

All guide metadata is centralized in `src/utils/guideConfig.js`:

```javascript
export const GUIDE_CONFIG = {
	1: {
		title: "Complete Guide to Tyre Maintenance",
		description: "...",
		excerpt: "...",
		category: "Maintenance",
		readTime: "8 min read",
		image: "/images/guide/1.webp",
		date: "January 15, 2025",
		keywords: "...",
		ogAlt: "...",
	},
	// ... more guides
};
```

## Adding New Guides

### Step 1: Create the Component

Create a new component in `src/uiPages/guidePage/`:

```javascript
// GuideNewPage.jsx
const GuideNewPage = () => {
	// Your guide content
};
export default GuideNewPage;
```

### Step 2: Add to Configuration

Add the guide to `src/utils/guideConfig.js`:

```javascript
export const GUIDE_CONFIG = {
	// ... existing guides
	"new-guide": {
		title: "New Guide Title",
		description: "Guide description for SEO",
		excerpt: "Short excerpt for listing page",
		category: "Category",
		readTime: "X min read",
		image: "/images/guide/new.webp",
		date: "Month Day, Year",
		keywords: "SEO keywords",
		ogAlt: "OG image alt text",
	},
};
```

### Step 3: Register Component

Add the component to the mapping in `src/app/guide/[slug]/page.js`:

```javascript
const GUIDE_COMPONENTS = {
	// ... existing components
	"new-guide": GuideNewPage,
};
```

## Benefits

### ✅ **Scalability**

- Add new guides without creating new route files
- Single configuration file manages all guides

### ✅ **SEO Optimization**

- Dynamic metadata generation
- Static generation with `generateStaticParams`
- Proper 404 handling

### ✅ **Maintainability**

- Centralized configuration
- Consistent URL structure
- Easy to modify guide metadata

### ✅ **Performance**

- Static generation for known routes
- Efficient code splitting
- Optimized bundle size

### ✅ **Developer Experience**

- Type-safe configuration
- Helper functions for common operations
- Clear separation of concerns

## API Reference

### Helper Functions (`guideConfig.js`)

- `getAllGuideSlugs()` - Get array of all guide slugs
- `getGuideBySlug(slug)` - Get guide data by slug
- `getAllGuides()` - Get all guides as array for listings
- `isValidGuideSlug(slug)` - Check if slug is valid

### URL Examples

- `/guide` - Main guide listing
- `/guide/1` - Guide 1 (maintenance)
- `/guide/2` - Guide 2 (SUV tyres)
- `/guide/invalid` - 404 page

## Migration Notes

### What Changed

1. **Removed**: Individual route directories (`/1/`, `/2/`, etc.)
2. **Added**: Dynamic route directory (`/[slug]/`)
3. **Added**: Centralized configuration system
4. **Updated**: Main guide page to use configuration

### What Stayed the Same

- All existing URLs still work (`/guide/1`, `/guide/2`, etc.)
- All guide components remain unchanged
- SEO metadata preserved
- Link structure in components preserved
