var BlurryImageLoader = (function() {
    function applyBlur(imageElement) {
        imageElement.style.filter = 'blur(10px)';
        imageElement.style.transition = 'filter 0.5s ease';
    }

    function removeBlur(imageElement) {
        imageElement.style.filter = 'blur(0)';
    }

    function loadImageWithBlur(imageElement) {
        var imageUrl = imageElement.getAttribute('data-src') || imageElement.src;
        if (!imageUrl) return; // No image source found

        applyBlur(imageElement);

        var tempImage = new Image();
        tempImage.onload = function() {
            if (imageElement.hasAttribute('data-src')) {
                imageElement.setAttribute('src', imageUrl);
                imageElement.removeAttribute('data-src');
            }
            removeBlur(imageElement);
        };

        if (typeof window !== 'undefined') {
            // Browser environment
            tempImage.src = imageUrl;
        } else {
            // Node.js environment
            var fs2 = require('fs');
            fs2.readFile(imageUrl, function(err, data) {
                if (err) throw err;
                tempImage.src = `data:image/jpeg;base64,${data.toString('base64')}`;
            });
        }
    }

    function loadAllImagesWithBlur(selector = 'img') {
        var imageElements;
        if (typeof window !== 'undefined') {
            imageElements = document.querySelectorAll(selector);
        } else {
            // For Node.js, we assume the selector is an array of image paths
            imageElements = selector.map(function(path) {
                var img = new Image();
                img.src = path;
                return img;
            });
        }
        imageElements.forEach(function(imageElement) {
            loadImageWithBlur(imageElement);
        });
    }

    // Export functions for Node.js
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = {
            loadImageWithBlur: loadImageWithBlur,
            loadAllImagesWithBlur: loadAllImagesWithBlur
        };
    }

    return {
        loadImageWithBlur: loadImageWithBlur,
        loadAllImagesWithBlur: loadAllImagesWithBlur
    };
})();
