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
                    url: "http://www.globalspartmess.com/internet/2238.html",
                    description: "群展报道"
                },
                {
                    title: "Artron 雅昌新闻（中文媒体）",
                    url: "https://m-news.artron.net/20250324/n1139770.html",
                    description: "艺术新闻报道"
                },
                {
                    title: "Napoli Cina-Europa Culturale 那不勒斯群展",
                    description: "群发媒体安全",
                    publication: "China Art Weekly 艺术周刊（中文媒体）",
                    url: "https://2play.2cul.com.cn/msb/mobile/2025-04/19/content_4328762.html?v=1"
                },
                {
                    title: "Partly Cloudy 群展",
                    description: "画廊报道网址：",
                    url: "https://gallery.bnayan.net/events/ppt4dk31p/favkmbyayeawycqgum"
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
                    note: "请发媒体安全，比较重要的是一下4个："
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
                    url: "http://www.globalspartmess.com/internet/2238.html",
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
                    url: "https://2play.2cul.com.cn/msb/mobile/2025-04/19/content_4328762.html?v=1"
                },
                {
                    title: "Partly Cloudy Group Exhibition",
                    description: "Gallery coverage",
                    url: "https://gallery.bnayan.net/events/ppt4dk31p/favkmbyayeawycqgum"
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
                    note: "Important featured coverage"
                }
            ]
        }
    }
};

// 当前语言
let currentLang = 'zh';

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

// 生成网站快照URL - 使用多个免费服务作为备用
function getScreenshotUrl(url, attempt = 0) {
    const services = [
        // 免费的网站快照服务列表
        `https://s-shot.ru/1200x800/JPEG/1200/Z100/?${encodeURIComponent(url)}`,
        `https://image.thum.io/get/width/240/crop/160/${encodeURIComponent(url)}`,
        `https://api.thumbnail.ws/api/c9b2a89b82ad17133ba64d44e4ddfea5c7c0db6a5dfb/thumbnail/get?url=${encodeURIComponent(url)}&width=240`,
        // 如果上面的都不行，使用一个很简单的方法：显示网站的Open Graph图片
        getOpenGraphImage(url)
    ];
    
    return services[attempt % services.length];
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
            <div class="press-thumbnail" onclick="window.open('${item.url}', '_blank')" data-loading="true">
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

// 处理图片加载错误 - 支持多个服务重试
function handleImageError(img, faviconUrl, title, originalUrl, attempt = 0) {
    const maxAttempts = 4; // 对应上面4个服务
    
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
    
    // 所有快照服务都失败了，使用favicon或默认图标
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
    document.addEventListener('languageChanged', function(e) {
        currentLang = e.detail.language;
        loadPressContent();
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 稍微延迟以确保LanguageManager已经加载
    setTimeout(initPress, 100);
}); 