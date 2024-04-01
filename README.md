# BlurryImageLoader

![GitHub release (latest by date)](https://img.shields.io/github/v/release/SH20RAJ/BlurryImageLoader)
![GitHub](https://img.shields.io/github/license/SH20RAJ/BlurryImageLoader)
![GitHub last commit](https://img.shields.io/github/last-commit/SH20RAJ/BlurryImageLoader)
![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/BlurryImageLoader)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SH20RAJ/BlurryImageLoader)
![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/BlurryImageLoader?style=social)

A JavaScript library for loading images with a blur effect.

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

<!-- Specific version with npm (replace x.y.z with the version you need) -->
<script src="https://cdn.jsdelivr.net/npm/blurry-image-loader@x.y.z/BlurryImageLoader.js"></script>
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
