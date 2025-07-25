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
        image: "images/paintings/painting_01.jpg",
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
        image: "images/paintings/painting_02.jpg",
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
        image: "images/paintings/painting_03.jpg",
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
        image: "images/paintings/painting_04.png",
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
        image: "images/paintings/painting_05.jpg",
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
        image: "images/paintings/painting_06.jpg",
        description: {
            zh: "时间在画布上留下的痕迹，记录着艺术家创作历程中的重要时刻。",
            en: "The traces left by time on the canvas, recording important moments in the artist's creative journey."
        },
        category: "painting",
        featured: false
    },
    {
        id: "abstract-symphony-2023",
        title: {
            zh: "抽象交响",
            en: "Abstract Symphony"
        },
        medium: {
            zh: "油画 & 综合材料",
            en: "Oil & Mixed Media"
        },
        size: "80cm × 100cm",
        year: "2023",
        price: {
            zh: "¥22,000",
            en: "$3,200"
        },
        status: "available",
        image: "images/paintings/painting_07.jpg",
        description: {
            zh: "如音乐般的视觉旋律，抽象形式中蕴含着深层的情感共鸣。",
            en: "A visual melody like music, containing deep emotional resonance in abstract forms."
        },
        category: "painting",
        featured: true
    },
    {
        id: "urban-reflection-2023",
        title: {
            zh: "都市倒影",
            en: "Urban Reflection"
        },
        medium: {
            zh: "丙烯 & 数字媒体",
            en: "Acrylic & Digital Media"
        },
        size: "70cm × 70cm",
        year: "2023",
        price: {
            zh: "¥16,000",
            en: "$2,400"
        },
        status: "sold",
        image: "images/paintings/painting_08.jpg",
        description: {
            zh: "现代都市生活的抽象表达，探索城市节奏与人文情怀的平衡。",
            en: "Abstract expression of modern urban life, exploring the balance between city rhythm and humanistic feelings."
        },
        category: "mixed-media",
        featured: false
    },
    {
        id: "memory-fragments-2022",
        title: {
            zh: "记忆碎片",
            en: "Memory Fragments"
        },
        medium: {
            zh: "水彩 & 拼贴",
            en: "Watercolor & Collage"
        },
        size: "50cm × 60cm",
        year: "2022",
        price: {
            zh: "¥12,000",
            en: "$1,800"
        },
        status: "available",
        image: "images/paintings/painting_09.jpg",
        description: {
            zh: "破碎与重组的记忆片段，诉说着时间流逝中的点点滴滴。",
            en: "Fragmented and reconstructed memory pieces, telling the bits and pieces in the passage of time."
        },
        category: "watercolor",
        featured: false
    },
    {
        id: "golden-horizon-2023",
        title: {
            zh: "金色地平线",
            en: "Golden Horizon"
        },
        medium: {
            zh: "油画 & 金箔",
            en: "Oil & Gold Leaf"
        },
        size: "90cm × 120cm",
        year: "2023",
        price: {
            zh: "¥35,000",
            en: "$5,200"
        },
        status: "reserved",
        image: "images/paintings/painting_10.jpg",
        description: {
            zh: "金色的希望与憧憬，描绘着心中理想的远方。",
            en: "Golden hope and longing, depicting the ideal distant place in the heart."
        },
        category: "painting",
        featured: true
    },
    {
        id: "digital-nature-2023",
        title: {
            zh: "数字自然",
            en: "Digital Nature"
        },
        medium: {
            zh: "数字艺术 & 印刷",
            en: "Digital Art & Print"
        },
        size: "60cm × 80cm",
        year: "2023",
        price: {
            zh: "¥8,000",
            en: "$1,200"
        },
        status: "available",
        image: "images/paintings/painting_11.jpg",
        description: {
            zh: "科技与自然的完美融合，展现当代艺术的无限可能。",
            en: "Perfect fusion of technology and nature, showing infinite possibilities of contemporary art."
        },
        category: "digital",
        featured: false
    },
    {
        id: "emotional-landscape-2022",
        title: {
            zh: "情感地貌",
            en: "Emotional Landscape"
        },
        medium: {
            zh: "丙烯 & 纹理材料",
            en: "Acrylic & Texture Materials"
        },
        size: "75cm × 90cm",
        year: "2022",
        price: {
            zh: "¥19,000",
            en: "$2,800"
        },
        status: "sold",
        image: "images/paintings/painting_12.jpg",
        description: {
            zh: "内心情感的地理图谱，每一处肌理都承载着不同的情绪。",
            en: "A geographical map of inner emotions, each texture carries different emotions."
        },
        category: "mixed-media",
        featured: false
    },
    {
        id: "silent-dialogue-2023",
        title: {
            zh: "无声对话",
            en: "Silent Dialogue"
        },
        medium: {
            zh: "水墨 & 宣纸",
            en: "Ink & Rice Paper"
        },
        size: "45cm × 65cm",
        year: "2023",
        price: {
            zh: "¥14,000",
            en: "$2,100"
        },
        status: "available",
        image: "images/paintings/painting_13.jpg",
        description: {
            zh: "东方美学的现代诠释，在黑白之间寻找平衡与和谐。",
            en: "Modern interpretation of Eastern aesthetics, seeking balance and harmony between black and white."
        },
        category: "ink",
        featured: true
    },
    {
        id: "cosmic-dance-2023",
        title: {
            zh: "宇宙之舞",
            en: "Cosmic Dance"
        },
        medium: {
            zh: "丙烯 & 荧光颜料",
            en: "Acrylic & Fluorescent Pigments"
        },
        size: "100cm × 100cm",
        year: "2023",
        price: {
            zh: "¥28,000",
            en: "$4,200"
        },
        status: "available",
        image: "images/paintings/painting_14.jpg",
        description: {
            zh: "宇宙能量的视觉呈现，探索生命与宇宙的神秘联系。",
            en: "Visual representation of cosmic energy, exploring the mysterious connection between life and the universe."
        },
        category: "painting",
        featured: false
    },
    {
        id: "textural-poetry-2022",
        title: {
            zh: "质感诗篇",
            en: "Textural Poetry"
        },
        medium: {
            zh: "综合材料 & 雕塑",
            en: "Mixed Media & Sculpture"
        },
        size: "55cm × 75cm",
        year: "2022",
        price: {
            zh: "¥17,000",
            en: "$2,500"
        },
        status: "sold",
        image: "images/paintings/painting_15.jpg",
        description: {
            zh: "触觉与视觉的双重体验，材料本身就是艺术语言。",
            en: "Dual experience of tactile and visual, the material itself is the artistic language."
        },
        category: "sculpture",
        featured: false
    },
    {
        id: "cultural-fusion-2023",
        title: {
            zh: "文化交融",
            en: "Cultural Fusion"
        },
        medium: {
            zh: "布面油画 & 传统工艺",
            en: "Oil on Canvas & Traditional Crafts"
        },
        size: "85cm × 110cm",
        year: "2023",
        price: {
            zh: "¥25,000",
            en: "$3,700"
        },
        status: "available",
        image: "images/paintings/painting_16.jpg",
        description: {
            zh: "东西方文化的碰撞与融合，展现全球化时代的艺术思考。",
            en: "Collision and fusion of Eastern and Western cultures, showing artistic thinking in the era of globalization."
        },
        category: "painting",
        featured: true
    },
    {
        id: "minimalist-essence-2023",
        title: {
            zh: "极简本质",
            en: "Minimalist Essence"
        },
        medium: {
            zh: "丙烯 & 几何形态",
            en: "Acrylic & Geometric Forms"
        },
        size: "40cm × 50cm",
        year: "2023",
        price: {
            zh: "¥9,000",
            en: "$1,350"
        },
        status: "available",
        image: "images/paintings/painting_17.jpg",
        description: {
            zh: "简约而不简单，在极简中寻找艺术的本质力量。",
            en: "Simple but not simplistic, seeking the essential power of art in minimalism."
        },
        category: "painting",
        featured: false
    },
    {
        id: "seasonal-transition-2022",
        title: {
            zh: "季节更迭",
            en: "Seasonal Transition"
        },
        medium: {
            zh: "水彩 & 自然材料",
            en: "Watercolor & Natural Materials"
        },
        size: "65cm × 80cm",
        year: "2022",
        price: {
            zh: "¥15,000",
            en: "$2,250"
        },
        status: "reserved",
        image: "images/paintings/painting_18.jpg",
        description: {
            zh: "四季轮回的生命哲学，感受自然变化中的美学节奏。",
            en: "Life philosophy of seasonal cycles, feeling the aesthetic rhythm in natural changes."
        },
        category: "watercolor",
        featured: false
    },
    {
        id: "urban-solitude-2023",
        title: {
            zh: "都市孤独",
            en: "Urban Solitude"
        },
        medium: {
            zh: "油画 & 现代媒介",
            en: "Oil & Modern Media"
        },
        size: "70cm × 95cm",
        year: "2023",
        price: {
            zh: "¥21,000",
            en: "$3,100"
        },
        status: "available",
        image: "images/paintings/painting_19.jpg",
        description: {
            zh: "现代都市人的内心独白，探索繁华背后的孤独感受。",
            en: "Inner monologue of modern urban people, exploring the sense of loneliness behind prosperity."
        },
        category: "painting",
        featured: false
    },
    {
        id: "infinite-possibilities-2023",
        title: {
            zh: "无限可能",
            en: "Infinite Possibilities"
        },
        medium: {
            zh: "综合材料 & 交互装置",
            en: "Mixed Media"
        },
        size: "120cm × 150cm",
        year: "2023",
        price: {
            zh: "¥45,000",
            en: "$6,700"
        },
        status: "available",
        image: "images/paintings/painting_20.png",
        description: {
            zh: "艺术创作的无限可能性，邀请观者参与共同创造的过程。",
            en: "Infinite possibilities of artistic creation, inviting viewers to participate in the process of co-creation."
        },
        category: "installation",
        featured: true
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