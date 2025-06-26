# Portfolio Markdown Conversion Guide

## Overview

I've successfully converted your portfolio posts to use markdown while maintaining the same visual appearance and functionality. The new system provides:

1. **Alternating backgrounds** - Each H2 section automatically gets alternating background colors
2. **Photo carousels** - Support for Bootstrap carousels in markdown
3. **Cleaner content management** - Easier to edit and maintain

## How It Works

### Layout System
- Updated `_layouts/portfolio_post.html` to automatically split content by H2 tags
- Each section gets alternating `background-even` and `background-odd` classes
- Same visual result as the original HTML files

### Photo Carousels
- Created `_includes/carousel.html` for reusable carousel components
- Define images in front matter as arrays of objects with `src` and `alt` properties
- Use `{% include carousel.html images=page.image_array carousel_id="unique-id" %}` in markdown

### Single Images
- For single images, use regular HTML `<img>` tags in markdown
- Maintains the same styling and responsive behavior

## Converted Files

✅ **All Completed:**
- `_portfolio/btec-first-foundation-in-tech.md` (main overview)
- `_portfolio/My-iDEA-Awards.md`
- `_portfolio/SoloLearn-Certificates.md`
- `_portfolio/btec-first-foundation-in-tech/digital-graphics-unit.md`
- `_portfolio/btec-first-foundation-in-tech/online-world-unit.md`
- `_portfolio/btec-first-foundation-in-tech/technology-systems-unit.md`
- `_portfolio/btec-first-foundation-in-tech/networking-unit.md`
- `_portfolio/btec-first-foundation-in-tech/web-development-unit.md`

## Next Steps

Now that all files are converted, you can:

1. **Test the markdown versions** - Make sure they display correctly
2. **Remove the old HTML files** - Once you're satisfied with the markdown versions
3. **Update any links** - If there are any internal links pointing to the old HTML files

## Benefits of the New System

1. **Easier editing** - Markdown is much simpler to write and edit
2. **Consistent styling** - Automatic alternating backgrounds
3. **Reusable components** - Carousel include can be used anywhere
4. **Better maintainability** - Less HTML to manage
5. **Future-proof** - Easier to add new features or modify styling

## Example Structure

```markdown
---
layout: portfolio_post
title: "Your Title"
description: "Your description"
# ... other front matter ...
section_images:
  - src: "/path/to/image1.jpg"
    alt: "Description 1"
  - src: "/path/to/image2.jpg"
    alt: "Description 2"
---

## Section Title

<div class="container-fluid content-container">
    <div class="row h-100">
        <div class="col-md align-content-center">
            <p>Your content here...</p>
        </div>
        {% include carousel.html 
            images=page.section_images 
            carousel_id="unique-carousel-id" %}
    </div>
</div>
```

## Notes

- The system automatically handles alternating backgrounds based on H2 sections
- Each carousel needs a unique ID to avoid conflicts
- You can mix single images and carousels as needed
- The layout maintains all the original styling and responsive behavior
- All portfolio posts now use the same consistent markdown format 