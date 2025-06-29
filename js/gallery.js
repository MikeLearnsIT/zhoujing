document.addEventListener('DOMContentLoaded', function () {
    // 现代模态框功能
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    let currentImageIndex = 0;
    let imageData = [];

    // 收集所有图片数据
    galleryImages.forEach((img, index) => {
        const galleryItem = img.closest('.gallery-item');
        const titleElement = galleryItem.querySelector('.gallery-item-title');
        const metaElement = galleryItem.querySelector('.gallery-item-meta');

        imageData.push({
            src: img.src,
            title: titleElement ? titleElement.textContent : '',
            meta: metaElement ? metaElement.textContent : '',
            index: index
        });
    });

    // 显示指定索引的图片
    function showImage(index) {
        if (index < 0 || index >= imageData.length) return;

        currentImageIndex = index;
        const data = imageData[index];

        // 添加加载状态
        modalImg.style.opacity = '0';
        modalImg.style.transform = 'scale(0.95)';

        // 预加载图片以获取原始尺寸
        const img = new Image();
        img.onload = function () {
            modalImg.src = data.src;
            modalTitle.textContent = data.title;
            modalMeta.textContent = data.meta;

            // 根据图片比例调整显示
            const imgAspectRatio = this.naturalWidth / this.naturalHeight;
            const containerAspectRatio = modalImg.parentElement.offsetWidth / modalImg.parentElement.offsetHeight;

            if (imgAspectRatio > containerAspectRatio) {
                // 横图：以宽度为准
                modalImg.style.width = '100%';
                modalImg.style.height = 'auto';
            } else {
                // 竖图：以高度为准
                modalImg.style.width = 'auto';
                modalImg.style.height = '100%';
            }
        };
        img.src = data.src;

        // 更新导航按钮状态
        updateNavigationButtons();
    }

    // 更新导航按钮状态
    function updateNavigationButtons() {
        const hasPrev = currentImageIndex > 0;
        const hasNext = currentImageIndex < imageData.length - 1;

        prevBtn.style.opacity = hasPrev ? '1' : '0.3';
        nextBtn.style.opacity = hasNext ? '1' : '0.3';
        prevBtn.style.pointerEvents = hasPrev ? 'auto' : 'none';
        nextBtn.style.pointerEvents = hasNext ? 'auto' : 'none';
    }

    // 点击图片打开模态框
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function () {
            modal.style.display = 'flex';
            showImage(index);
            document.body.style.overflow = 'hidden'; // 防止背景滚动

            // 添加显示类以触发动画
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    // 导航功能
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImageIndex < imageData.length - 1) {
            showImage(currentImageIndex + 1);
        }
    });

    // 关闭模态框
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // 恢复背景滚动
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 键盘导航
    document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('show')) return;

        switch (e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                if (currentImageIndex > 0) {
                    showImage(currentImageIndex - 1);
                }
                break;
            case 'ArrowRight':
                if (currentImageIndex < imageData.length - 1) {
                    showImage(currentImageIndex + 1);
                }
                break;
        }
    });

    // 图片加载完成后显示
    modalImg.addEventListener('load', function () {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });

    // 双击图片进入/退出全屏模式
    modalImg.addEventListener('dblclick', function () {
        modal.classList.toggle('modal-fullscreen');
    });

    // 预加载所有图片以提升用户体验
    imageData.forEach(data => {
        const preloadImg = new Image();
        preloadImg.src = data.src;
    });

    // 触摸手势支持（移动端）
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    modal.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentImageIndex < imageData.length - 1) {
                // 向左滑动，显示下一张
                showImage(currentImageIndex + 1);
            } else if (diff < 0 && currentImageIndex > 0) {
                // 向右滑动，显示上一张
                showImage(currentImageIndex - 1);
            }
        }
    }
}); 