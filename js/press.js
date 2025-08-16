// 媒体报道数据
const pressData = {
    personalInterviews: {
        items: [
            {
                title: {
                    zh: "Fad Mag",
                    en: "Fad Mag"
                },
                description: {
                    zh: "当代艺术家——通过多维创造力连接文化",
                    en: "Jing Zhou: A Contemporary Artist Bridging Cultures Through Multidimensional Creativity"
                },
                url: "https://fadmagazine.com/2025/02/18/jing-zhou-a-contemporary-artist-bridging-cultures-through-multidimensional-creativity/",
                date: {
                    zh: "2025年2月18日",
                    en: "February 18, 2025"
                },
                thumbnail: "images/pressSnapshot/snapshot_p_fadmagazine.com.jpeg"
            },
            {
                title: {
                    zh: "Kunst Plaza（德语媒体）",
                    en: "Kunst Plaza (German Media)"
                },
                description: {
                    zh: "碎片化整体：周婧",
                    en: "Fragmentierte Ganzheit: Jing Zhou"
                },
                url: "https://www.kunstplaza.de/ausstellungen/fragmentierte-ganzheit-jing-zhou/",
                date: {
                    zh: "2025年6月3日",
                    en: "June 3, 2025"
                },
                thumbnail: "images/pressSnapshot/snapshot_p_www.kunstplaza.de.jpeg"
            }
        ]
    },
    groupExhibitions: {
        items: [
            {
                title: {
                    zh: "Rebirth 展览",
                    en: "Rebirth Exhibition"
                },
                publication: {
                    zh: "Wall Times",
                    en: "Wall Times"
                },
                url: "http://www.globalpapertimes.com/internet/2238.html",
                description: {
                    zh: "展览报道",
                    en: "Exhibition review"
                },
                thumbnail: "images/pressSnapshot/snapshot_g_www.globalpapertimes.com.jpeg"
            },
            {
                title: {
                    zh: "Artron 雅昌新闻（中文媒体）",
                    en: "Artron News (Chinese Media)"
                },
                url: "https://m-news.artron.net/20250324/n1139770.html",
                description: {
                    zh: "艺术新闻报道",
                    en: "Art news coverage"
                },
                thumbnail: "images/pressSnapshot/snapshot_g_m-news.artron.net.jpeg"
            },
            {
                title: {
                    zh: "Napoli Cina-Europa Culturale 那不勒斯展览",
                    en: "Napoli Cina-Europa Culturale Naples Exhibition"
                },
                description: {
                    zh: "群发媒体",
                    en: "Cultural exchange exhibition"
                },
                publication: {
                    zh: "China Art Weekly 艺术周刊（中文媒体）",
                    en: "China Art Weekly (Chinese Media)"
                },
                url: "https://zjdaily.zjol.com.cn/msb/html/2025-04/19/content_4328762.htm",
                thumbnail: "images/pressSnapshot/snapshot_g_zjdaily.zjol.com.cn.jpeg"
            },
            {
                title: {
                    zh: "Partly Cloudy 展览",
                    en: "Partly Cloudy Group Exhibition"
                },
                description: {
                    zh: "画廊报道网址：",
                    en: "Gallery coverage"
                },
                url: "https://gallery.bhavan.net/events/pq14f0k31plfjxdvmby9yeawvdhgum",
                thumbnail: "images/pressSnapshot/snapshot_g_gallery.bhavan.net.jpeg"
            },
            {
                title: {
                    zh: "Our Culture Mag",
                    en: "Our Culture Mag"
                },
                url: "https://ourculturemag.com/2025/04/10/partly-cloudy-an-examination-of-transitional-states-and-ontological-uncertainty/",
                description: {
                    zh: "过渡状态和本体论不确定性的探讨",
                    en: "An Examination of Transitional States and Ontological Uncertainty"
                },
                thumbnail: "images/pressSnapshot/snapshot_g_ourculturemag.com.jpeg"
            },
            {
                title: {
                    zh: "NYCxDesign 纽约设计节艺术展",
                    en: "NYCxDesign Art Exhibition"
                },
                description: {
                    zh: "纽约设计节网展讯",
                    en: "New York Design Festival exhibition announcement"
                },
                url: "https://nycxdesign.org/event/fractured-horizons-exhibition/",
                note: "",
                thumbnail: "images/pressSnapshot/snapshot_g_nycxdesign.org.jpeg"
            },
            {
                title: {
                    zh: "展览也玩谐音梗，“NOW中取境——2023上海青年艺术家邀请展”开幕",
                    en: "Exhibition also plays a pun, \"NOW Zhong Qu Jing - 2023 Shanghai Young Artists Invitational Exhibition\" opens"
                },
                description: {
                    zh: "一个类似于谐音梗的主题，却点出了展览要旨——青年艺术家如何用创作，去勇敢掀翻缠绕在周围的羁绊，走入安宁之境",
                    en: "A theme that resembles a pun, yet reveals the essence of the exhibition - how young artists use their creativity to bravely break free from the constraints around them and enter a realm of tranquility"
                },
                date: {
                    zh: "2023年09月29日",
                    en: "September 29, 2023"
                },
                url: "https://www.shxwcb.com/#/detail/25299182E3446E7C4A92D0F2161D3DDB6BD0ABB9A44A2FE384A0B5DBEFC61352",
                note: "",
                thumbnail: "images/pressSnapshot/snapshot_g_www.shxwcb.com.jpeg"
            }
        ]
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'zh';

// 获取翻译文本
function getTranslation(key) {
    if (window.languageManager) {
        return window.languageManager.getTranslation(key);
    }
    return key;
}

// 获取媒体报道文本的辅助函数
function getPressText(press, field) {
    if (typeof press[field] === 'object' && press[field] !== null) {
        return press[field][currentLang] || press[field]['en'] || '';
    }
    return press[field] || '';
}

// 获取缩略图URL - 直接使用本地图片
function getScreenshotUrl(item) {
    return item.thumbnail || null;
}

// 创建媒体项目HTML
function createPressItemHTML(item) {
    const screenshotUrl = getScreenshotUrl(item);

    const title = getPressText(item, 'title');
    const description = getPressText(item, 'description');
    const date = getPressText(item, 'date');
    const publication = getPressText(item, 'publication');

    return `
        <div class="press-item">
            <div class="press-thumbnail" onclick="openPressImageModal('${screenshotUrl}', '${title}', '${item.url}')">
                <img src="${screenshotUrl}" 
                     alt="${title}" 
                     loading="lazy"
                     onerror="this.classList.add('is-hidden'); this.parentElement.querySelector('.press-thumbnail-fallback').classList.remove('is-hidden');">
                <div class="press-thumbnail-fallback is-hidden">
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
                            ${title}
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </h4>
                    ${date ? `<span class="press-date">${date}</span>` : ''}
                    ${publication ? `<span class="press-publication">${publication}</span>` : ''}
                </div>
                <p class="press-description">${description}</p>
                ${item.note ? `<p class="press-note">${item.note}</p>` : ''}
                <div class="press-meta">
                    <a href="${item.url}" class="press-source" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                        <span data-i18n="press.readMore">${getTranslation('press.readMore')}</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}



// 更新模态框提示文字
function updateModalHints() {
    const modal = document.getElementById('pressImageModal');
    const modalCaption = document.getElementById('pressModalCaption');

    if (modal && modal.style.display === 'flex' && modalCaption) {
        const hints = getImageViewerHints();
        const currentContent = modalCaption.innerHTML;

        // 只更新提示部分，保留标题和链接
        const hintPattern = /<div class=\"press-hints\">[\s\S]*?<\/div>/;
        const newHints = `<div class="press-hints">
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
    // 等待语言管理器初始化完成
    function initPressContent() {
        if (window.languageManager) {
            currentLang = window.languageManager.currentLang;
            loadPressContent();
        } else {
            // 如果语言管理器还没准备好，再等一下
            setTimeout(initPressContent, 10);
        }
    }
    
    initPressContent();

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
    // 使用优化的渲染函数
    renderPressItems();
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

    // 预加载图片以确保清晰度
    const img = new Image();
    img.onload = function() {
        // 设置图片源和属性
        modalImage.src = imageSrc;
        modalImage.alt = title;
        
        // 计算图片的实际显示比例
        const viewportWidth = window.innerWidth * 0.9;
        const viewportHeight = window.innerHeight * 0.9;
        const imageRatio = Math.min(viewportWidth / img.naturalWidth, viewportHeight / img.naturalHeight);
        
        // 设置合适的最大缩放比例，不超过原始分辨率
        imageViewer.maxScale = Math.max(1, Math.min(4, 1 / imageRatio));
        
        // 设置图片样式以确保最佳显示质量
        modalImage.style.imageRendering = 'optimizeQuality';
        modalImage.style.webkitImageRendering = '-webkit-optimize-contrast';
        modalImage.style.msInterpolationMode = 'bicubic';
        
        // 显示模态框
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    img.onerror = function() {
        // 即使预加载失败，也显示图片
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    // 开始预加载
    img.src = imageSrc;
    
    // 设置标题和链接
    modalCaption.innerHTML = `
        <strong>${title}</strong><br>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="press-link">
            ${url} <i class="fas fa-external-link-alt" style="font-size: 12px;"></i>
        </a>
        <div class="press-hints">
            <i class="fas fa-mouse"></i> ${hints.clickZoom} • 
            <i class="fas fa-mouse-pointer"></i> ${hints.wheelZoom} • 
            <i class="fas fa-hand-paper"></i> ${hints.dragMove} • 
            <i class="fas fa-keyboard"></i> ${hints.resetKey}
        </div>
    `;
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
    maxScale: 4,
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
        // 使用更精确的transform设置，避免模糊
        const transform = `translate3d(${imageViewer.translateX}px, ${imageViewer.translateY}px, 0) scale(${imageViewer.scale})`;
        modalImage.style.transform = transform;
        modalImage.style.cursor = imageViewer.scale > imageViewer.minScale ? 'grab' : 'zoom-in';
        
        // 动态调整图片渲染质量
        if (imageViewer.scale > 1) {
            modalImage.style.imageRendering = 'auto';
            modalImage.style.webkitImageRendering = 'auto';
        } else {
            modalImage.style.imageRendering = 'optimizeQuality';
            modalImage.style.webkitImageRendering = '-webkit-optimize-contrast';
        }
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
        // 智能选择放大倍数，不超过最大缩放比例
        const targetScale = Math.min(imageViewer.maxScale, 2.5);
        zoomImage(targetScale - imageViewer.scale, clientX, clientY);
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
        modalImage.addEventListener('click', function (e) {
            e.stopPropagation();
            // 只有在没有拖拽的情况下才执行缩放
            if (!imageViewer.hasDragged) {
                toggleImageZoom(e);
            }
        });

        // 鼠标滚轮缩放
        modalImage.addEventListener('wheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const delta = e.deltaY > 0 ? -0.2 : 0.2;
            zoomImage(delta, e.clientX, e.clientY);
        });

        // 鼠标拖拽开始
        modalImage.addEventListener('mousedown', function (e) {
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
        document.addEventListener('mousemove', function (e) {
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
        document.addEventListener('mouseup', function (e) {
            if (imageViewer.isDragging) {
                imageViewer.isDragging = false;
                modalImage.style.cursor = imageViewer.scale > imageViewer.minScale ? 'grab' : 'zoom-in';

                // 延迟重置拖拽标志，避免立即触发点击事件
                setTimeout(() => {
                    imageViewer.hasDragged = false;
                }, 10);
            }
        });

        // 触摸事件支持
        modalImage.addEventListener('touchstart', function (e) {
            if (e.touches.length === 1) {
                imageViewer.isDragging = true;
                imageViewer.startX = e.touches[0].clientX;
                imageViewer.startY = e.touches[0].clientY;
                imageViewer.lastX = imageViewer.translateX;
                imageViewer.lastY = imageViewer.translateY;
            }
        }, { passive: true });

        modalImage.addEventListener('touchmove', function (e) {
            if (imageViewer.isDragging && e.touches.length === 1) {
                e.preventDefault(); // 阻止默认滚动行为
                imageViewer.hasDragged = true;
                
                const deltaX = e.touches[0].clientX - imageViewer.startX;
                const deltaY = e.touches[0].clientY - imageViewer.startY;
                
                imageViewer.translateX = imageViewer.lastX + deltaX / imageViewer.scale;
                imageViewer.translateY = imageViewer.lastY + deltaY / imageViewer.scale;
                
                // 使用 requestAnimationFrame 优化性能
                requestAnimationFrame(updateImageTransform);
            }
        }, { passive: false });

        modalImage.addEventListener('touchend', function (e) {
            imageViewer.isDragging = false;
            // 延迟重置拖拽标志
            setTimeout(() => {
                imageViewer.hasDragged = false;
            }, 10);
        }, { passive: true });
    }

    // 点击背景关闭
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closePressImageModal();
        }
    });

    // ESC键关闭和重置缩放
    document.addEventListener('keydown', function (e) {
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

// 渲染媒体报道内容
function renderPressItems() {
    const container = document.querySelector('.press-items');
    if (!container) return;

    // 清空容器
    container.innerHTML = '';

    // 使用 DocumentFragment 优化DOM操作
    const fragment = document.createDocumentFragment();

    // 个人专访
    if (pressData.personalInterviews.items.length > 0) {
        const personalSection = document.createElement('div');
        personalSection.className = 'press-section';
        personalSection.innerHTML = `
            <h3 class="section-title" data-i18n="press.personalInterviews">${getTranslation('press.personalInterviews')}</h3>
            <div class="press-list" data-section="personal">
                ${pressData.personalInterviews.items.map(item => createPressItemHTML(item)).join('')}
            </div>
        `;
        fragment.appendChild(personalSection);
    }

    // 群展报道
    if (pressData.groupExhibitions.items.length > 0) {
        const groupSection = document.createElement('div');
        groupSection.className = 'press-section';
        groupSection.innerHTML = `
            <h3 class="section-title" data-i18n="press.groupExhibitions">${getTranslation('press.groupExhibitions')}</h3>
            <div class="press-list" data-section="group">
                ${pressData.groupExhibitions.items.map(item => createPressItemHTML(item)).join('')}
            </div>
        `;
        fragment.appendChild(groupSection);
    }

    // 一次性插入所有内容
    container.appendChild(fragment);
    
    // 延迟初始化图片加载
    requestAnimationFrame(() => {
        initImageLoading();
    });
}

// 初始化图片加载优化
function initImageLoading() {
    const images = document.querySelectorAll('.press-thumbnail img');
    
    images.forEach(img => {
        // 确保图片默认可见
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s ease';
        
        // 如果图片加载失败，显示备用图标
        img.onerror = function() {
            this.style.display = 'none';
            const fallback = this.parentElement.querySelector('.press-thumbnail-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
            }
        };
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 稍微延迟以确保LanguageManager已经加载
    setTimeout(initPress, 100);
    // 初始化模态框
    initPressModal();
}); 