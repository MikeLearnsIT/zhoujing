// 作品集数据 - 专业艺术品展示
const artworksData = [
    {
        id: "inner-landscape-2024",
        title: {
            zh: "芽",
            en: "Sprout"
        },
        medium: {
            zh: "丙烯 & 综合材料",
            en: "Acrylic & Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2023",
        price: {
            zh: "¥15,000",
            en: "$2,000"
        },
        status: "available", // available, sold, reserved
        image: "images/painting_01.webp",
        description: {
            zh: "探索内心世界的色彩表达，通过抽象的形式语言展现情感的深度与复杂性。",
            en: "Exploring the color expression of the inner world, showing the depth and complexity of emotions through abstract formal language."
        },
        category: "painting",
        featured: true
    },
    {
        id: "color-dialogue-2024",
        title: {
            zh: "翡翠之光",
            en: "Emerald Light"
        },
        medium: {
            zh: "丙烯 & 综合材料",
            en: "Acrylic & Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2023",
        price: {
            zh: "¥18,000",
            en: "$2,000"
        },
        status: "sold",
        image: "images/painting_02.webp",
        description: {
            zh: "不同色彩之间的对话与碰撞，创造出充满张力的视觉体验。",
            en: "The dialogue and collision between different colors creates a visual experience full of tension."
        },
        category: "mixed-media",
        featured: true
    },
    {
        id: "abstract-expression-2023",
        title: {
            zh: "剪影",
            en: "Silhouette"
        },
        medium: {
            zh: "丙烯 & 综合材料",
            en: "Acrylic & Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2023",
        price: {
            zh: "¥12,000",
            en: "$1,500"
        },
        status: "available",
        image: "images/painting_03.webp",
        description: {
            zh: "纯粹的抽象表达，通过色彩和形式的自由组合传达艺术家的内在感受。",
            en: "Pure abstract expression, conveying the artist's inner feelings through free combination of colors and forms."
        },
        category: "painting",
        featured: false
    },
    {
        id: "emotional-flow-2023",
        title: {
            zh: "水墨",
            en: "Watercolor"
        },
        medium: {
            zh: "水彩 & 综合材料",
            en: "Watercolor & Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2024",
        price: {
            zh: "¥15,000",
            en: "$2,000"
        },
        status: "reserved",
        image: "images/painting_04.webp",
        description: {
            zh: "水彩的流动性完美诠释了情感的变化与流转。",
            en: "The fluidity of watercolor perfectly interprets the change and flow of emotions."
        },
        category: "watercolor",
        featured: false
    },
    {
        id: "cultural-fusion-2023",
        title: {
            zh: "靛蓝",
            en: "Indigo Blue"
        },
        medium: {
            zh: "综合材料",
            en: "Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2023",
        price: {
            zh: "¥16,000",
            en: "$2,000"
        },
        status: "available",
        image: "images/painting_05.webp",
        description: {
            zh: "不同文化元素的融合与碰撞，展现当代艺术的多元化特征。",
            en: "The fusion and collision of different cultural elements, showing the diversification characteristics of contemporary art."
        },
        category: "mixed-media",
        featured: true
    },
    {
        id: "time-imprint-2022",
        title: {
            zh: "樱",
            en: "Sakura"
        },
        medium: {
            zh: "综合材料",
            en: "Mixed Media"
        },
        size: "60cm × 60cm",
        year: "2022",
        price: {
            zh: "¥14,000",
            en: "$2,050"
        },
        status: "sold",
        image: "images/painting_06.webp",
        description: {
            zh: "时间在画布上留下的痕迹，记录着艺术家创作历程中的重要时刻。",
            en: "The traces left by time on the canvas, recording important moments in the artist's creative journey."
        },
        category: "painting",
        featured: false
    }
];

// 当前语言、筛选和排序状态
let currentLang = 'zh';
let currentFilter = 'all';
let currentSort = 'default';

// 图片模态框相关变量
let imageModal, imageModalImg, imageModalTitle;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 等待语言管理器初始化完成
    function initGallery() {
        if (window.languageManager && window.languageManager.isInitialized) {
            currentLang = window.languageManager.currentLang;
            initSortControls();
            renderGallery();
            initImageModal();
        } else {
            setTimeout(initGallery, 50);
        }
    }
    
    if (document.readyState === 'complete') {
        initGallery();
    } else {
        window.addEventListener('load', initGallery);
    }
});

// 监听语言切换事件
document.addEventListener('languageChanged', function(e) {
    currentLang = e.detail.language;
    updateSortControlsText();
    renderGallery();
});

// 初始化排序控制器
function initSortControls() {
    initCustomSelect();
    updateSortControlsText();
}

// 初始化自定义选择器
function initCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    const selectTrigger = customSelect?.querySelector('.select-trigger');
    const selectOptions = customSelect?.querySelector('.select-options');
    const selectText = customSelect?.querySelector('.select-text');
    const hiddenSelect = document.getElementById('sortSelect');
    
    if (!customSelect || !selectTrigger || !selectOptions || !selectText) return;

    // 点击触发器切换下拉菜单
    selectTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleCustomSelect();
    });

    // 选项点击事件
    selectOptions.addEventListener('click', function(e) {
        const option = e.target.closest('.select-option');
        if (!option) return;

        const value = option.dataset.value;
        const text = option.querySelector('span').textContent;
        
        // 更新选中状态
        selectOptions.querySelectorAll('.select-option').forEach(opt => {
            opt.classList.remove('active');
        });
        option.classList.add('active');
        
        // 更新显示文本
        selectText.textContent = text;
        
        // 更新隐藏的select值
        if (hiddenSelect) {
            hiddenSelect.value = value;
        }
        
        // 更新排序
        currentSort = value;
        renderGallery();
        
        // 关闭下拉菜单
        closeCustomSelect();
        
        // 添加视觉反馈
        const sortControls = document.querySelector('.sort-controls-premium');
        if (sortControls) {
            sortControls.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                sortControls.style.transform = '';
            }, 200);
        }
    });

    // 点击外部区域关闭
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target)) {
            closeCustomSelect();
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCustomSelect();
        }
    });

    // 设置初始值
    const defaultOption = selectOptions.querySelector(`[data-value="${currentSort}"]`);
    if (defaultOption) {
        defaultOption.classList.add('active');
        selectText.textContent = defaultOption.querySelector('span').textContent;
    }
}

// 切换自定义选择器
function toggleCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    if (!customSelect) return;
    
    if (customSelect.classList.contains('open')) {
        closeCustomSelect();
    } else {
        openCustomSelect();
    }
}

// 打开自定义选择器
function openCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    if (!customSelect) return;
    
    customSelect.classList.add('open');
    
    // 关闭其他可能打开的下拉菜单
    document.querySelectorAll('.custom-select.open').forEach(select => {
        if (select !== customSelect) {
            select.classList.remove('open');
        }
    });
}

// 关闭自定义选择器
function closeCustomSelect() {
    const customSelect = document.getElementById('customSelect');
    if (!customSelect) return;
    
    customSelect.classList.remove('open');
}

// 更新排序控制器文本
function updateSortControlsText() {
    if (!window.languageManager) return;
    
    // 更新自定义选择器显示文本
    const customSelect = document.getElementById('customSelect');
    const selectText = customSelect?.querySelector('.select-text');
    const activeOption = customSelect?.querySelector('.select-option.active');
    
    if (selectText && activeOption) {
        const spanElement = activeOption.querySelector('span');
        if (spanElement) {
            const i18nKey = spanElement.getAttribute('data-i18n');
            if (i18nKey) {
                const translatedText = window.languageManager.getTranslation(i18nKey);
                if (translatedText) {
                    selectText.textContent = translatedText;
                }
            }
        }
    }
    
    // 更新隐藏的select选项文本（用于可访问性）
    const hiddenSelect = document.getElementById('sortSelect');
    if (hiddenSelect) {
        const options = hiddenSelect.querySelectorAll('option');
        if (options.length >= 3) {
            options[0].textContent = window.languageManager.getTranslation('gallery.sortDefault') || '默认排序';
            options[1].textContent = window.languageManager.getTranslation('gallery.sortByYearDesc') || '按年份 (新→旧)';
            options[2].textContent = window.languageManager.getTranslation('gallery.sortByYearAsc') || '按年份 (旧→新)';
        }
        
        // 更新select的aria-label
        const sortByText = window.languageManager.getTranslation('gallery.sortBy') || '排序方式';
        hiddenSelect.setAttribute('aria-label', sortByText);
    }
}

// 获取翻译文本
function getArtworkText(artwork, field) {
    const text = artwork[field];
    if (typeof text === 'object' && text[currentLang]) {
        return text[currentLang];
    }
    return text || '';
}

// 获取状态显示文本
function getStatusText(status) {
    const statusTexts = {
        available: { zh: "可购买", en: "Available" },
        sold: { zh: "已售出", en: "Sold Out" },
        reserved: { zh: "已预定", en: "Reserved" }
    };
    return statusTexts[status] ? statusTexts[status][currentLang] : status;
}

// 获取状态CSS类
function getStatusClass(status) {
    return `gallery-artwork-status-${status}`;
}

// 渲染作品集
function renderGallery() {
    const container = document.querySelector('.gallery-grid');
    if (!container) return;

    container.innerHTML = '';

    // 根据筛选条件过滤作品
    const filteredArtworks = currentFilter === 'all' 
        ? [...artworksData] 
        : artworksData.filter(artwork => artwork.category === currentFilter);

    // 根据当前排序方式排序
    sortArtworks(filteredArtworks);

    filteredArtworks.forEach(artwork => {
        const artworkElement = createArtworkElement(artwork);
        container.appendChild(artworkElement);
    });
}

// 排序作品
function sortArtworks(artworks) {
    switch (currentSort) {
        case 'year-desc':
            // 按年份降序：最新在前
            artworks.sort((a, b) => {
                return parseInt(b.year) - parseInt(a.year);
            });
            break;
        case 'year-asc':
            // 按年份升序：最旧在前
            artworks.sort((a, b) => {
                return parseInt(a.year) - parseInt(b.year);
            });
            break;
        case 'default':
        default:
            // 默认排序：保持原数组顺序
            // 由于我们使用了展开运算符创建副本，这里不需要额外排序
            break;
    }
}

// 创建作品元素
function createArtworkElement(artwork) {
    const element = document.createElement('div');
    element.className = 'gallery-artwork-card';
    element.setAttribute('data-artwork-id', artwork.id);
    
    const title = getArtworkText(artwork, 'title');
    const medium = getArtworkText(artwork, 'medium');
    const description = getArtworkText(artwork, 'description');
    const price = getArtworkText(artwork, 'price');
    const statusText = getStatusText(artwork.status);
    const statusClass = getStatusClass(artwork.status);

    element.innerHTML = `
        <div class="gallery-artwork-image-container">
            <img src="${artwork.image}" alt="${title}" class="gallery-artwork-image">
            <div class="gallery-artwork-overlay">
                <div class="gallery-artwork-actions">
                    <button class="action-btn view-btn" onclick="openImageModal('${artwork.image}', '${title}')">
                        <i class="fas fa-search-plus"></i>
                        <span>${currentLang === 'zh' ? '放大查看' : 'Zoom View'}</span>
                    </button>
                </div>
            </div>
            ${artwork.featured ? '<div class="gallery-featured-badge"><i class="fas fa-star"></i></div>' : ''}
            ${artwork.status === 'sold' ? `
            <div class="gallery-artwork-status ${statusClass}">
                <i class="fas fa-check-circle"></i>
                <span>${statusText}</span>
            </div>
            ` : ''}
            <!-- 暂时隐藏可购买和已预定状态标签
            ${artwork.status === 'available' ? `
            <div class="gallery-artwork-status ${statusClass}">
                <i class="fas fa-shopping-cart"></i>
                <span>${statusText}</span>
            </div>
            ` : ''}
            ${artwork.status === 'reserved' ? `
            <div class="gallery-artwork-status ${statusClass}">
                <i class="fas fa-clock"></i>
                <span>${statusText}</span>
            </div>
            ` : ''}
            -->
        </div>
        <div class="gallery-artwork-info">
            <h3 class="gallery-artwork-title">${title}</h3>
            <div class="gallery-artwork-details">
                <div class="gallery-detail-row">
                    <span class="gallery-detail-label">${currentLang === 'zh' ? '媒材' : 'Medium'}:</span>
                    <span class="gallery-detail-value">${medium}</span>
                </div>
                <div class="gallery-detail-row">
                    <span class="gallery-detail-label">${currentLang === 'zh' ? '尺寸' : 'Size'}:</span>
                    <span class="gallery-detail-value">${artwork.size}</span>
                </div>
                <div class="gallery-detail-row">
                    <span class="gallery-detail-label">${currentLang === 'zh' ? '年份' : 'Year'}:</span>
                    <span class="gallery-detail-value">${artwork.year}</span>
                </div>
            </div>
        </div>
    `;

    return element;
}

// 初始化图片模态框
function initImageModal() {
    imageModal = document.getElementById('imageModal');
    if (!imageModal) return;
    
    imageModalImg = imageModal.querySelector('.modal-content');
    imageModalTitle = imageModal.querySelector('.modal-title');
    const closeBtn = imageModal.querySelector('.modal-close');

    // 绑定关闭事件
    closeBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeImageModal();
    });

    // 键盘ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('show')) {
            closeImageModal();
        }
    });
}

// 打开图片模态框
function openImageModal(imageSrc, imageTitle) {
    if (!imageModal) return;
    
    imageModalImg.src = imageSrc;
    imageModalImg.alt = imageTitle;
    if (imageModalTitle) {
        imageModalTitle.textContent = imageTitle;
    }
    
    imageModal.style.display = 'flex';
    setTimeout(() => {
        imageModal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

// 关闭图片模态框
function closeImageModal() {
    if (!imageModal) return;
    
    imageModal.classList.remove('show');
    setTimeout(() => {
        imageModal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// 全局函数供HTML调用
window.openImageModal = openImageModal; 