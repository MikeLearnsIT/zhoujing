// 媒体报道数据
const pressData = {
    zh: {
        personalInterviews: {
            items: [
                {
                    title: "Fad Mag",
                    description: "当代艺术家——通过多维创造力连接文化",
                    url: "https://fadmagazine.com/2025/02/18/jing-zhou-a-contemporary-artist-bridging-cultures-through-multidimensional-creativity/",
                    date: "2025年2月18日"
                },
                {
                    title: "Kunst Plaza（德语媒体）",
                    description: "碎片化整体：周婧",
                    url: "https://www.kunstplaza.de/ausstellungen/fragmentierte-ganzheit-jing-zhou/",
                    date: "2025年"
                }
            ]
        },
        groupExhibitions: {
            items: [
                {
                    title: "Rebirth 群展",
                    publication: "Wall Times",
                    url: "http://www.globalpapertimes.com/internet/2238.html",
                    description: "群展报道"
                },
                {
                    title: "Artron 雅昌新闻（中文媒体）",
                    url: "https://m-news.artron.net/20250324/n1139770.html",
                    description: "艺术新闻报道"
                },
                {
                    title: "Napoli Cina-Europa Culturale 那不勒斯群展",
                    description: "群发媒体",
                    publication: "China Art Weekly 艺术周刊（中文媒体）",
                    url: "https://zjdaily.zjol.com.cn/msb/html/2025-04/19/content_4328762.htm"
                },
                {
                    title: "Partly Cloudy 群展",
                    description: "画廊报道网址：",
                    url: "https://gallery.bhavan.net/events/pq14f0k31plfjxdvmby9yeawvdhgum"
                },
                {
                    title: "Our Culture Mag",
                    url: "https://ourculturemag.com/2025/04/10/partly-cloudy-an-examination-of-transitional-states-and-ontological-uncertainty/",
                    description: "过渡状态和本体论不确定性的探讨"
                },
                {
                    title: "NYCxDesign 纽约设计节艺术展",
                    description: "纽约设计节网展讯",
                    url: "https://nycxdesign.org/event/fractured-horizons-exhibition/",
                    note: ""
                }
            ]
        }
    },
    en: {
        personalInterviews: {
            items: [
                {
                    title: "Fad Mag",
                    description: "Jing Zhou: A Contemporary Artist Bridging Cultures Through Multidimensional Creativity",
                    url: "https://fadmagazine.com/2025/02/18/jing-zhou-a-contemporary-artist-bridging-cultures-through-multidimensional-creativity/",
                    date: "February 18, 2025"
                },
                {
                    title: "Kunst Plaza (German Media)",
                    description: "Fragmentierte Ganzheit: Jing Zhou",
                    url: "https://www.kunstplaza.de/ausstellungen/fragmentierte-ganzheit-jing-zhou/",
                    date: "2025"
                }
            ]
        },
        groupExhibitions: {
            items: [
                {
                    title: "Rebirth Group Exhibition",
                    publication: "Wall Times",
                    url: "http://www.globalpapertimes.com/internet/2238.html",
                    description: "Group exhibition review"
                },
                {
                    title: "Artron News (Chinese Media)",
                    url: "https://m-news.artron.net/20250324/n1139770.html",
                    description: "Art news coverage"
                },
                {
                    title: "Napoli Cina-Europa Culturale Naples Exhibition",
                    description: "Cultural exchange exhibition",
                    publication: "China Art Weekly (Chinese Media)",
                    url: "https://zjdaily.zjol.com.cn/msb/html/2025-04/19/content_4328762.htm"
                },
                {
                    title: "Partly Cloudy Group Exhibition",
                    description: "Gallery coverage",
                    url: "https://gallery.bhavan.net/events/pq14f0k31plfjxdvmby9yeawvdhgum"
                },
                {
                    title: "Our Culture Mag",
                    url: "https://ourculturemag.com/2025/04/10/partly-cloudy-an-examination-of-transitional-states-and-ontological-uncertainty/",
                    description: "An Examination of Transitional States and Ontological Uncertainty"
                },
                {
                    title: "NYCxDesign Art Exhibition",
                    description: "New York Design Festival exhibition announcement",
                    url: "https://nycxdesign.org/event/fractured-horizons-exhibition/",
                    note: ""
                }
            ]
        }
    }
};

// 当前语言
let currentLang = 'en';

// 获取翻译文本
function getTranslation(key) {
    if (window.languageManager) {
        return window.languageManager.getTranslation(key);
    }
    // 回退到默认值
    const translations = {
        zh: {
            'press.personalInterviews': '个人专访',
            'press.groupExhibitions': '群展报道'
        },
        en: {
            'press.personalInterviews': 'Personal Interviews',
            'press.groupExhibitions': 'Group Exhibition Coverage'
        }
    };
    return translations[currentLang]?.[key] || key;
}

// 本地预览图映射 - 使用手动准备的预览图
function getLocalScreenshotUrl(url) {
    const urlToImageMap = {
        // 个人专访
        'https://fadmagazine.com/2025/02/18/jing-zhou-a-contemporary-artist-bridging-cultures-through-multidimensional-creativity/': 'images/pressSnapshot/snapshot_p_fadmagazine.com.jpeg',
        'https://www.kunstplaza.de/ausstellungen/fragmentierte-ganzheit-jing-zhou/': 'images/pressSnapshot/snapshot_p_www.kunstplaza.de.jpeg',
        
        // 群展报道
        'http://www.globalpapertimes.com/internet/2238.html': 'images/pressSnapshot/snapshot_g_www.globalpapertimes.com.jpeg',
        'https://m-news.artron.net/20250324/n1139770.html': 'images/pressSnapshot/snapshot_g_m-news.artron.net.jpeg',
        'https://zjdaily.zjol.com.cn/msb/html/2025-04/19/content_4328762.htm': 'images/pressSnapshot/snapshot_g_zjdaily.zjol.com.cn.jpeg',
        'https://gallery.bhavan.net/events/pq14f0k31plfjxdvmby9yeawvdhgum': 'images/pressSnapshot/snapshot_g_gallery.bhavan.net.jpeg',
        'https://ourculturemag.com/2025/04/10/partly-cloudy-an-examination-of-transitional-states-and-ontological-uncertainty/': 'images/pressSnapshot/snapshot_g_ourculturemag.com.jpeg',
        'https://nycxdesign.org/event/fractured-horizons-exhibition/': 'images/pressSnapshot/snapshot_g_nycxdesign.org.jpeg'
    };
    
    return urlToImageMap[url] || null;
}

// 生成网站快照URL - 优先使用本地图片
function getScreenshotUrl(url, attempt = 0) {
    // 首先尝试使用本地预览图
    const localImage = getLocalScreenshotUrl(url);
    if (localImage && attempt === 0) {
        return localImage;
    }
    
    // 如果没有本地图片或者本地图片加载失败，使用备用方案
    const services = [
        `https://s-shot.ru/1200x800/JPEG/1200/Z100/?${encodeURIComponent(url)}`,
        `https://image.thum.io/get/width/240/crop/160/${encodeURIComponent(url)}`,
        `https://api.thumbnail.ws/api/c9b2a89b82ad17133ba64d44e4ddfea5c7c0db6a5dfb/thumbnail/get?url=${encodeURIComponent(url)}&width=240`,
        getOpenGraphImage(url)
    ];

    return services[(attempt - 1) % services.length];
}

// 尝试获取网站的Open Graph图片
function getOpenGraphImage(url) {
    // 这个方法通过一个代理服务获取网站的OG图片
    try {
        const domain = new URL(url).hostname;
        return `https://logo.clearbit.com/${domain}`;
    } catch {
        return null;
    }
}

// 获取域名图标作为备用
function getFaviconUrl(url) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
        return null;
    }
}

// 创建媒体项目HTML
function createPressItemHTML(item) {
    const screenshotUrl = getScreenshotUrl(item.url, 0);
    const faviconUrl = getFaviconUrl(item.url);
    const itemId = `press-item-${Math.random().toString(36).substr(2, 9)}`;

    // 设置超时机制
    setTimeout(() => {
        const thumbnail = document.querySelector(`#${itemId} .press-thumbnail`);
        if (thumbnail && thumbnail.hasAttribute('data-loading')) {
            const img = thumbnail.querySelector('img');
            if (img) {
                handleImageError(img, faviconUrl, item.title, item.url, 999); // 直接跳到fallback
            }
        }
    }, 10000); // 10秒超时

    return `
        <div class="press-item" id="${itemId}">
            <div class="press-thumbnail" onclick="openPressImageModal('${screenshotUrl}', '${item.title}', '${item.url}')" data-loading="true" style="cursor: pointer;">
                <div class="press-thumbnail-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <img src="${screenshotUrl}" 
                     alt="${item.title}" 
                     loading="lazy"
                     onload="this.parentElement.removeAttribute('data-loading')"
                     onerror="handleImageError(this, '${faviconUrl}', '${item.title}', '${item.url}', 0)">
                <div class="press-thumbnail-fallback" style="display: none;">
                    <i class="fas fa-newspaper"></i>
                </div>
                <div class="press-thumbnail-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="press-content-area">
                <div class="press-header">
                    <h4 class="press-title">
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                            ${item.title}
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </h4>
                    ${item.date ? `<span class="press-date">${item.date}</span>` : ''}
                    ${item.publication ? `<span class="press-publication">${item.publication}</span>` : ''}
                </div>
                <p class="press-description">${item.description}</p>
                ${item.note ? `<p class="press-note">${item.note}</p>` : ''}
            </div>
        </div>
    `;
}

// 处理图片加载错误 - 优先使用本地图片，失败时使用备用方案
function handleImageError(img, faviconUrl, title, originalUrl, attempt = 0) {
    const maxAttempts = 5; // 1个本地图片 + 4个在线服务

    // 如果attempt是999，说明是超时触发的，直接跳到fallback
    if (attempt !== 999 && attempt < maxAttempts - 1) {
        // 尝试下一个快照服务
        const nextAttempt = attempt + 1;
        const nextScreenshotUrl = getScreenshotUrl(originalUrl, nextAttempt);

        // 确保下一个URL有效
        if (nextScreenshotUrl && nextScreenshotUrl !== 'null') {
            img.src = nextScreenshotUrl;
            img.onerror = () => handleImageError(img, faviconUrl, title, originalUrl, nextAttempt);
            return;
        }
    }

    // 所有服务都失败了，使用favicon或默认图标
    img.parentElement.removeAttribute('data-loading');
    img.style.display = 'none';

    const fallback = img.parentElement.querySelector('.press-thumbnail-fallback');

    if (faviconUrl && faviconUrl !== 'null') {
        // 创建一个简单的Logo + 文字组合
        fallback.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <img src="${faviconUrl}" alt="${title}" style="width: 24px; height: 24px;" 
                     onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-icon').style.display='block';">
                <i class="fas fa-newspaper fallback-icon" style="display: none; font-size: 24px;"></i>
                <span style="font-size: 10px; text-align: center; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${title}</span>
            </div>
        `;
    } else {
        fallback.innerHTML = '<i class="fas fa-newspaper"></i>';
    }

    fallback.style.display = 'flex';
}

// 更新模态框提示文字
function updateModalHints() {
    const modal = document.getElementById('pressImageModal');
    const modalCaption = document.getElementById('pressModalCaption');
    
    if (modal && modal.style.display === 'flex' && modalCaption) {
        const hints = getImageViewerHints();
        const currentContent = modalCaption.innerHTML;
        
        // 只更新提示部分，保留标题和链接
        const hintPattern = /<div style="margin-top: 10px; font-size: 14px; opacity: 0\.8;">[\s\S]*?<\/div>/;
        const newHints = `<div style="margin-top: 10px; font-size: 14px; opacity: 0.8;">
            <i class="fas fa-mouse"></i> ${hints.clickZoom} • 
            <i class="fas fa-mouse-pointer"></i> ${hints.wheelZoom} • 
            <i class="fas fa-hand-paper"></i> ${hints.dragMove} • 
            <i class="fas fa-keyboard"></i> ${hints.resetKey}
        </div>`;
        
        modalCaption.innerHTML = currentContent.replace(hintPattern, newHints);
    }
}

// 初始化页面
function initPress() {
    // 等待LanguageManager加载
    if (window.languageManager) {
        currentLang = window.languageManager.currentLang;
        loadPressContent();
    } else {
        // 如果LanguageManager还没加载，使用默认语言
        const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
        currentLang = savedLang;
        loadPressContent();
    }

    // 监听语言切换
    document.addEventListener('languageChanged', function (e) {
        currentLang = e.detail.language;
        loadPressContent();
        // 更新模态框提示文字（如果模态框是打开的）
        updateModalHints();
    });
}

// 加载媒体报道内容
function loadPressContent() {
    const data = pressData[currentLang];
    const container = document.querySelector('.press-items');

    if (!container) return;

    const personalInterviewsTitle = getTranslation('press.personalInterviews');
    const groupExhibitionsTitle = getTranslation('press.groupExhibitions');

    container.innerHTML = `
        <div class="press-section">
            <h3 class="section-title">${personalInterviewsTitle}</h3>
            <div class="press-list">
                ${data.personalInterviews.items.map(item => createPressItemHTML(item)).join('')}
            </div>
        </div>
        
        <div class="press-section">
            <h3 class="section-title">${groupExhibitionsTitle}</h3>
            <div class="press-list">
                ${data.groupExhibitions.items.map(item => createPressItemHTML(item)).join('')}
            </div>
        </div>
    `;
}

// 获取图片查看器操作提示文字
function getImageViewerHints() {
    const isZh = currentLang === 'zh';
    return {
        clickZoom: isZh ? '点击放大' : 'Click to zoom',
        wheelZoom: isZh ? '滚轮缩放' : 'Wheel to zoom',
        dragMove: isZh ? '拖拽移动' : 'Drag to move',
        resetKey: isZh ? 'R键重置' : 'R to reset'
    };
}

// 打开大图模态框
function openPressImageModal(imageSrc, title, url) {
    const modal = document.getElementById('pressImageModal');
    const modalImage = document.getElementById('pressModalImage');
    const modalCaption = document.getElementById('pressModalCaption');
    
    // 重置图片查看器状态
    resetImageViewer();
    
    // 获取提示文字
    const hints = getImageViewerHints();
    
    // 设置图片和标题
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalCaption.innerHTML = `
        <strong>${title}</strong><br>
        <a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #c9a96e; text-decoration: none;">
            ${url} <i class="fas fa-external-link-alt" style="font-size: 12px;"></i>
        </a>
        <div style="margin-top: 10px; font-size: 14px; opacity: 0.8;">
            <i class="fas fa-mouse"></i> ${hints.clickZoom} • 
            <i class="fas fa-mouse-pointer"></i> ${hints.wheelZoom} • 
            <i class="fas fa-hand-paper"></i> ${hints.dragMove} • 
            <i class="fas fa-keyboard"></i> ${hints.resetKey}
        </div>
    `;
    
    // 显示模态框
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭大图模态框
function closePressImageModal() {
    const modal = document.getElementById('pressImageModal');
    
    // 重置图片查看器状态
    resetImageViewer();
    
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// 图片查看器状态
let imageViewer = {
    scale: 1,
    minScale: 1,
    maxScale: 5,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    hasDragged: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
};

// 更新图片变换
function updateImageTransform() {
    const modalImage = document.getElementById('pressModalImage');
    if (modalImage) {
        modalImage.style.transform = `scale(${imageViewer.scale}) translate(${imageViewer.translateX}px, ${imageViewer.translateY}px)`;
        modalImage.style.cursor = imageViewer.scale > imageViewer.minScale ? 'grab' : 'zoom-in';
    }
}

// 重置图片查看器状态
function resetImageViewer() {
    imageViewer.scale = 1;
    imageViewer.translateX = 0;
    imageViewer.translateY = 0;
    imageViewer.isDragging = false;
    imageViewer.hasDragged = false;
    updateImageTransform();
}

// 缩放图片
function zoomImage(delta, clientX, clientY) {
    const modalImage = document.getElementById('pressModalImage');
    if (!modalImage) return;
    
    const rect = modalImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 计算缩放中心点相对于图片的位置
    const offsetX = (clientX - centerX) / imageViewer.scale;
    const offsetY = (clientY - centerY) / imageViewer.scale;
    
    // 计算新的缩放比例
    const newScale = Math.max(imageViewer.minScale, Math.min(imageViewer.maxScale, imageViewer.scale + delta));
    
    if (newScale !== imageViewer.scale) {
        // 调整平移以保持缩放中心点不变
        imageViewer.translateX -= offsetX * (newScale - imageViewer.scale);
        imageViewer.translateY -= offsetY * (newScale - imageViewer.scale);
        imageViewer.scale = newScale;
        
        updateImageTransform();
    }
}

// 点击缩放
function toggleImageZoom(e) {
    const rect = e.target.getBoundingClientRect();
    const clientX = e.clientX || rect.left + rect.width / 2;
    const clientY = e.clientY || rect.top + rect.height / 2;
    
    if (imageViewer.scale === imageViewer.minScale) {
        // 放大到2倍
        zoomImage(1, clientX, clientY);
    } else {
        // 重置到原始大小
        resetImageViewer();
    }
}

// 初始化模态框事件监听器
function initPressModal() {
    const modal = document.getElementById('pressImageModal');
    const closeBtn = modal.querySelector('.modal-close');
    const modalImage = document.getElementById('pressModalImage');
    
    // 关闭按钮事件
    if (closeBtn) {
        closeBtn.addEventListener('click', closePressImageModal);
    }
    
    if (modalImage) {
        // 图片点击缩放事件（需要区分点击和拖拽）
        modalImage.addEventListener('click', function(e) {
            e.stopPropagation();
            // 只有在没有拖拽的情况下才执行缩放
            if (!imageViewer.hasDragged) {
                toggleImageZoom(e);
            }
        });
        
        // 鼠标滚轮缩放
        modalImage.addEventListener('wheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const delta = e.deltaY > 0 ? -0.3 : 0.3;
            zoomImage(delta, e.clientX, e.clientY);
        });
        
        // 鼠标拖拽开始
        modalImage.addEventListener('mousedown', function(e) {
            if (imageViewer.scale > imageViewer.minScale) {
                e.preventDefault();
                imageViewer.isDragging = true;
                imageViewer.hasDragged = false;
                imageViewer.startX = e.clientX;
                imageViewer.startY = e.clientY;
                imageViewer.lastX = imageViewer.translateX;
                imageViewer.lastY = imageViewer.translateY;
                modalImage.style.cursor = 'grabbing';
            }
        });
        
        // 鼠标拖拽移动
        document.addEventListener('mousemove', function(e) {
            if (imageViewer.isDragging) {
                e.preventDefault();
                const deltaX = e.clientX - imageViewer.startX;
                const deltaY = e.clientY - imageViewer.startY;
                
                // 检测是否真的在拖拽（移动距离超过阈值）
                if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
                    imageViewer.hasDragged = true;
                }
                
                imageViewer.translateX = imageViewer.lastX + deltaX / imageViewer.scale;
                imageViewer.translateY = imageViewer.lastY + deltaY / imageViewer.scale;
                updateImageTransform();
            }
        });
        
        // 鼠标拖拽结束
        document.addEventListener('mouseup', function(e) {
            if (imageViewer.isDragging) {
                imageViewer.isDragging = false;
                modalImage.style.cursor = imageViewer.scale > imageViewer.minScale ? 'grab' : 'zoom-in';
                
                // 延迟重置拖拽标志，避免立即触发点击事件
                setTimeout(() => {
                    imageViewer.hasDragged = false;
                }, 10);
            }
        });
        
        // 触摸事件支持（移动端）
        modalImage.addEventListener('touchstart', function(e) {
            if (e.touches.length === 1 && imageViewer.scale > imageViewer.minScale) {
                e.preventDefault();
                imageViewer.isDragging = true;
                imageViewer.hasDragged = false;
                imageViewer.startX = e.touches[0].clientX;
                imageViewer.startY = e.touches[0].clientY;
                imageViewer.lastX = imageViewer.translateX;
                imageViewer.lastY = imageViewer.translateY;
            }
        });
        
        modalImage.addEventListener('touchmove', function(e) {
            if (imageViewer.isDragging && e.touches.length === 1) {
                e.preventDefault();
                const deltaX = e.touches[0].clientX - imageViewer.startX;
                const deltaY = e.touches[0].clientY - imageViewer.startY;
                
                // 检测是否真的在拖拽
                if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
                    imageViewer.hasDragged = true;
                }
                
                imageViewer.translateX = imageViewer.lastX + deltaX / imageViewer.scale;
                imageViewer.translateY = imageViewer.lastY + deltaY / imageViewer.scale;
                updateImageTransform();
            }
        });
        
        modalImage.addEventListener('touchend', function(e) {
            imageViewer.isDragging = false;
            // 延迟重置拖拽标志
            setTimeout(() => {
                imageViewer.hasDragged = false;
            }, 10);
        });
    }
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePressImageModal();
        }
    });
    
    // ESC键关闭和重置缩放
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closePressImageModal();
            } else if (e.key === 'r' || e.key === 'R') {
                // R键重置缩放
                resetImageViewer();
            }
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 稍微延迟以确保LanguageManager已经加载
    setTimeout(initPress, 100);
    // 初始化模态框
    initPressModal();
}); 