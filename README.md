# BlurryImageLoader

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FBlurryImageLoader%2F&labelColor=%23ff8a65&countColor=%23d9e3f0&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FBlurryImageLoader%2F)
![GitHub](https://img.shields.io/github/license/SH20RAJ/BlurryImageLoader?)
![GitHub last commit](https://img.shields.io/github/last-commit/SH20RAJ/BlurryImageLoader)
![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/BlurryImageLoader)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SH20RAJ/BlurryImageLoader)
![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/BlurryImageLoader?style=social)
[![](https://data.jsdelivr.com/v1/package/gh/sh20raj/BlurryImageLoader/badge)](https://www.jsdelivr.com/package/gh/sh20raj/BlurryImageLoader)
[![npm version](https://img.shields.io/npm/v/blurry-image-loader
)](https://npmjs.com/blurry-image-loader)

A JavaScript library for loading images with a blur effect. 

[Demo](https://sh20raj.github.io/BlurryImageLoader/demo.html) | [Codepen](https://codepen.io/SH20RAJ/pen/oNOozqW?editors=1010)

## Description

`BlurryImageLoader` is a lightweight JavaScript library that simplifies the process of loading images with a blur effect, providing a smooth transition from blurred placeholders to clear images.

## Features

- Automatically applies a blur effect to images while they are loading.
- Supports images with `data-src` attributes (for lazy loading) or regular `src` attributes.
- Provides a clean API for easy integration into projects.

## Installation

### Via npm

You can install `BlurryImageLoader` using npm:

```bash
npm install blurry-image-loader
```

### Using jsDelivr CDN

You can also include `BlurryImageLoader` in your HTML directly from the jsDelivr CDN:

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/gh/SH20RAJ/BlurryImageLoader@latest/BlurryImageLoader.js"></script>
```
or
```html
<!-- Specific version with npm (replace 1.0.1 with the version you need) -->
<script src="https://cdn.jsdelivr.net/npm/blurry-image-loader@1.0.1"></script>
```
or
```html
<!-- Specific version with npm (replace 1.0.1 with the version you need) -->
<script defer async src="https://unpkg.com/blurry-image-loader"></script>
```

## Usage

### Loading Specific Images

To load specific images with a blur effect, use `loadImageWithBlur`:

```javascript
var img = document.getElementById('blurImage');
BlurryImageLoader.loadImageWithBlur(img);
```

### Loading All Images

To load all images on a page with a blur effect, use `loadAllImagesWithBlur`:

```javascript
BlurryImageLoader.loadAllImagesWithBlur();
```

### Using Selectors:

```javascript
// Load all images with class .blurry-image
BlurryImageLoader.loadAllImagesWithBlur('.blurry-image');
```

### Example HTML

```html
<div class="image-container">
    <!-- Example with data-src attribute -->
    <img class="blurry-image" data-src="path/to/image.jpg" alt="Image">
</div>

<div class="image-container">
    <!-- Example with regular src attribute -->
    <img class="blurry-image" src="path/to/image.jpg" alt="Image">
</div>
```

## Usage in Node.js

You can also use `BlurryImageLoader` in Node.js environments. Here's an example:

```javascript
const BlurryImageLoader = require('./blurry-image-loader');

// Example usage in Node.js
const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
];

BlurryImageLoader.loadAllImagesWithBlur(images);
```

You can use the cdn in Node.js or NextJS accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contribution

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## Issues and Support

If you encounter any issues or need support, please [open an issue](https://github.com/SH20RAJ/BlurryImageLoader/issues).

## Credits

This library was created by [SH20RAJ](https://github.com/SH20RAJ).

---

Feel free to give a ⭐️ if this project helped you!
