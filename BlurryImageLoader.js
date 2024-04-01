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
        tempImage.src = imageUrl;
    }

    function loadAllImagesWithBlur(selector = 'img') {
        var imageElements = document.querySelectorAll(selector);
        imageElements.forEach(function(imageElement) {
            loadImageWithBlur(imageElement);
        });
    }

    return {
        loadImageWithBlur: loadImageWithBlur,
        loadAllImagesWithBlur: loadAllImagesWithBlur
    };
})();
