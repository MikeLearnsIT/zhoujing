// 展览数据配置 - 便于后期维护和添加
const exhibitionsData = {
    // 2023年展览
    "2023": [
        {
            id: "this-moment-in-china-2023",
            title: {
                zh: "NOW中取境--2023上海青年艺术家邀请展",
                en: "NOW - 2023 Shanghai Young Artists Invitational Exhibition"
            },
            date: "2023.09.28 - 2023.10.25",
            location: {
                zh: "上海市普陀区文化馆3楼（上海市兰溪路138号）",
                en: "Shanghai PuTuo District Cultural Center 3rd Floor (No. 138 Lanxi Road, Shanghai)"
            },
            type: {
                zh: "群展",
                en: "Group Exhibition"
            },
            description: {
                zh: "这是一场汇聚了多位中国当代艺术家的重要群展，展示了当代中国艺术的多元面貌和创新精神。展览通过不同媒介的艺术作品，呈现了艺术家们对当下社会、文化和个人体验的深度思考。",
                en: "An important group exhibition bringing together multiple Chinese contemporary artists, showcasing the diverse landscape and innovative spirit of contemporary Chinese art. The exhibition presents artists' deep reflections on current society, culture, and personal experiences through various artistic media."
            },
            images: [
                {
                    src: "images/exhibitions/20230928/exhibition_20230928.webp",
                    title: "展览海报",
                    description: "\"NOW中取境\"展览主视觉海报"
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_01.webp",
                    title: "艺术家与嘉宾合影",
                    description: "与上海中外文化艺术交流协会张秘书长（左6）、策展团队总策划胡晓芒老师（左5）、学术支持/艺术总监王远教授（右4）、上海中外文化青艺会侯秘书长（左3）及其他优秀青年艺术家的合影"
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_02.webp",
                    title: "与主办方合影",
                    description: "与上海中外文化艺术交流协会张秘书长（右2）、总策划胡晓芒老师（左3）、上海中外文化青艺会侯秘书长（右1）的合影"
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_03.webp",
                    title: "媒体专访",
                    description: "接受《新民晚报》的专访"
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_04.webp",
                    title: "友好交流",
                    description: "与俄中友好大爱天使陈老师的合影"
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_05.webp",
                    title: "观众参观",
                    description: "现场观众参观作品"
                }
            ],
            artworks: [
                {
                    title: "芽",
                    medium: "丙烯 & 综合材料",
                    size: "50cm×50cm",
                    year: "2023",
                    image: "images/painting_01.webp"
                },
                {
                    title: "翡翠之光",
                    medium: "丙烯 & 综合材料",
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/painting_02.webp"
                },
                {
                    title: "剪影",
                    medium: "丙烯 & 综合材料",
                    size: "80cm×80cm",
                    year: "2023",
                    image: "images/painting_03.webp"
                },
                {
                    title: "靛蓝",
                    medium: "丙烯 & 综合材料",
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/painting_04.webp"
                },
                {
                    title: "清逸之华",
                    medium: "丙烯",
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/painting_05.webp"
                }
            ],
            documents: [
                {
                    title: "参展证书",
                    type: "certificate",
                    image: "images/images_31.png"
                }
            ],
            press: [
                {
                    title: "当代艺术的多元表达——\"NOW中取境\"展览评述",
                    source: "艺术评论",
                    date: "2023.04.05",
                    url: "https://example.com/press-report-1",
                    description: "详细报道了此次展览的艺术价值和社会意义，分析了参展艺术家的创作理念和作品特色。"
                }
            ]
        },
        {
            id: "interlude-infini-2023",
            title: {
                zh: "2023·\"萨珞际\"艺术展",
                en: "2023 Interlude Infini Art Exhibition"
            },
            date: "2023.09.15 - 2023.10.20",
            location: {
                zh: "北京798艺术区",
                en: "Beijing 798 Art Zone"
            },
            type: {
                zh: "群展",
                en: "Group Exhibition"
            },
            description: {
                zh: "萨珞际艺术展探讨了艺术中的偶然与必然，展示了艺术家们如何通过不同的创作手法表达对生活、情感和存在的理解。展览汇集了多位艺术家的精彩作品，呈现了当代艺术的丰富内涵。",
                en: "Interlude Infini Art Exhibition explores the concepts of chance and inevitability in art, showcasing how artists express their understanding of life, emotions, and existence through various creative approaches. The exhibition brings together outstanding works from multiple artists, presenting the rich connotations of contemporary art."
            },
            images: [
                {
                    src: "images/images_51.png",
                    title: "展览海报",
                    description: "萨珞际艺术展主视觉"
                },
                {
                    src: "images/images_53.png",
                    title: "作品展示",
                    description: "周婧参展作品展示"
                },
                {
                    src: "images/images_59.png",
                    title: "展览现场",
                    description: "观众参观展览"
                }
            ],
            artworks: [
                {
                    title: "几何印象",
                    medium: "综合材料",
                    size: "80×80cm",
                    year: "2023"
                },
                {
                    title: "色彩构成",
                    medium: "丙烯画",
                    size: "70×70cm",
                    year: "2023"
                }
            ],
            documents: [
                {
                    title: "展览画册",
                    type: "catalog",
                    image: "images/images_64.png"
                }
            ],
            press: [
                {
                    title: "萨珞际艺术展：探索艺术的无限可能",
                    source: "北京文艺报",
                    date: "2023.09.20",
                    url: "https://example.com/interlude-report",
                    description: "深入报道了萨珞际艺术展的策展理念和参展作品的艺术特色。"
                }
            ]
        },
        {
            id: "award-exhibition-2023",
            title: {
                zh: "第十三届中国当代艺术作品邀请展",
                en: "13th China Contemporary Art Works Invitational Exhibition"
            },
            date: "2023",
            location: {
                zh: "中国",
                en: "China"
            },
            type: {
                zh: "群展",
                en: "Group Exhibition"
            },
            description: {
                zh: "第十三届中国当代艺术作品邀请展，周婧作品获得参展资格并获得相关奖项认可。",
                en: "The 13th China Contemporary Art Works Invitational Exhibition, where Zhou Jing's works were selected for participation and received recognition."
            },
            images: [
                {
                    src: "images/images_37.png",
                    title: "作品展示",
                    description: "参展作品《网格》"
                }
            ],
            artworks: [
                {
                    title: "网格",
                    medium: "综合材料",
                    size: "60×60cm",
                    year: "2023"
                }
            ],
            documents: [
                {
                    title: "参展证书",
                    type: "certificate",
                    image: "images/images_43.png"
                }
            ],
            press: []
        }
    ]
};

// 获取翻译文本的辅助函数
function getTranslation(key) {
    if (window.languageManager) {
        return window.languageManager.getTranslation(key);
    }
    // 如果语言管理器不可用，返回默认翻译
    const defaultTranslations = {
        zh: {
            "exhibitions.viewDetail": "查看详情",
            "exhibitions.timeline": "展览时间线",
            "exhibitions.artworks": "参展作品",
            "exhibitions.documents": "展览文档",
            "exhibitions.press": "媒体报道",
            "exhibitions.period": "展期",
            "exhibitions.location": "地点",
            "exhibitions.type": "类型",
            "exhibitions.description": "简介",
            "exhibitions.medium": "媒材",
            "exhibitions.size": "尺寸",
            "exhibitions.year": "年份",
            "exhibitions.exhibitionSite": "展览现场"
        },
        en: {
            "exhibitions.viewDetail": "View Details",
            "exhibitions.timeline": "Exhibition Timeline",
            "exhibitions.artworks": "Artworks",
            "exhibitions.documents": "Exhibition Documents",
            "exhibitions.press": "Press Coverage",
            "exhibitions.period": "Period",
            "exhibitions.location": "Location",
            "exhibitions.type": "Type",
            "exhibitions.description": "Description",
            "exhibitions.medium": "Medium",
            "exhibitions.size": "Size",
            "exhibitions.year": "Year",
            "exhibitions.exhibitionSite": "Exhibition Site"
        }
    };
    
    const lang = currentLang || 'zh';
    return defaultTranslations[lang][key] || key;
}

// 当前语言
let currentLang = 'zh';

// 监听语言切换事件
document.addEventListener('DOMContentLoaded', function() {
    // 初始化当前语言
    if (window.languageManager) {
        currentLang = window.languageManager.currentLang;
    }
    
    // 监听语言切换
    document.addEventListener('languageChanged', function(e) {
        currentLang = e.detail.language;
        // 如果展览详情模态框已打开，重新渲染
        const modal = document.getElementById('exhibitionDetailModal');
        if (modal && modal.classList.contains('show')) {
            const exhibitionId = modal.dataset.exhibitionId;
            if (exhibitionId) {
                closeExhibitionDetail();
                setTimeout(() => openExhibitionDetail(exhibitionId), 100);
            }
        }
    });
});

// 初始化展览页面
document.addEventListener('DOMContentLoaded', function() {
    // 监听语言切换
    document.addEventListener('languageChanged', function(e) {
        currentLang = e.detail.language;
        renderExhibitions();
    });
    
    // 初始渲染
    renderExhibitions();
});

// 渲染展览时间线
function renderExhibitions() {
    const container = document.querySelector('.exhibitions-timeline');
    if (!container) return;
    
    container.innerHTML = '';
    
    // 按年份倒序排列
    const years = Object.keys(exhibitionsData).sort((a, b) => b - a);
    
    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'exhibition-year';
        
        const yearTitle = document.createElement('h3');
        yearTitle.textContent = year;
        yearSection.appendChild(yearTitle);
        
        const exhibitionsList = document.createElement('div');
        exhibitionsList.className = 'exhibitions-list';
        
        exhibitionsData[year].forEach(exhibition => {
            const exhibitionItem = createExhibitionItem(exhibition);
            exhibitionsList.appendChild(exhibitionItem);
        });
        
        yearSection.appendChild(exhibitionsList);
        container.appendChild(yearSection);
    });
}

// 创建展览项目
function createExhibitionItem(exhibition) {
    const item = document.createElement('div');
    item.className = 'exhibition-item';
    item.setAttribute('data-exhibition-id', exhibition.id);
    
    const title = exhibition.title[currentLang] || exhibition.title.zh;
    const location = exhibition.location[currentLang] || exhibition.location.zh;
    const type = exhibition.type[currentLang] || exhibition.type.zh;
    
    item.innerHTML = `
        <div class="exhibition-info">
            <div class="exhibition-date">${exhibition.date}</div>
            <h4 class="exhibition-title">${title}</h4>
            <div class="exhibition-location">${location}</div>
            <div class="exhibition-type">${type}</div>
        </div>
        <div class="exhibition-preview">
            ${exhibition.images.slice(0, 3).map(img => 
                `<img src="${img.src}" alt="${img.title}" class="preview-image">`
            ).join('')}
        </div>
        <div class="exhibition-action">
            <button class="view-detail-btn" onclick="openExhibitionDetail('${exhibition.id}')">
                <i class="fas fa-eye"></i>
                <span>${getTranslation('exhibitions.viewDetail')}</span>
            </button>
        </div>
    `;
    
    return item;
}

// 打开展览详情
function openExhibitionDetail(exhibitionId) {
    const exhibition = findExhibitionById(exhibitionId);
    if (!exhibition) return;
    
    // 创建详情模态框
    const modal = createDetailModal(exhibition);
    modal.dataset.exhibitionId = exhibitionId; // 保存展览ID用于语言切换
    document.body.appendChild(modal);
    
    // 显示模态框
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// 根据ID查找展览
function findExhibitionById(id) {
    for (const year in exhibitionsData) {
        const exhibition = exhibitionsData[year].find(ex => ex.id === id);
        if (exhibition) return exhibition;
    }
    return null;
}

// 创建详情模态框
function createDetailModal(exhibition) {
    const modal = document.createElement('div');
    modal.className = 'exhibition-detail-modal';
    modal.id = 'exhibitionDetailModal';
    
    const title = exhibition.title[currentLang] || exhibition.title.zh;
    const location = exhibition.location[currentLang] || exhibition.location.zh;
    const type = exhibition.type[currentLang] || exhibition.type.zh;
    const description = exhibition.description[currentLang] || exhibition.description.zh;
    
    // 找到海报图片（通常是第一张图片或标题包含"海报"的图片）
    const posterImage = exhibition.images.find(img => 
        img.title.includes('海报') || img.title.includes('poster') || img.title.includes('Poster')
    ) || exhibition.images[0];
    
    // 展览现场照片（排除海报）
    const siteImages = exhibition.images.filter(img => img !== posterImage);
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeExhibitionDetail()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close" onclick="closeExhibitionDetail()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="modal-body">
                <!-- 展览海报 -->
                <div class="exhibition-poster-section">
                    <div class="poster-container">
                        <img src="${posterImage.src}" alt="${posterImage.title}" onclick="openImageViewer(${exhibition.images.indexOf(posterImage)}, '${exhibition.id}')">
                        <div class="poster-caption">${posterImage.title}</div>
                    </div>
                </div>
                
                <!-- 展览基本信息 -->
                <div class="exhibition-info-section">
                    <div class="info-item">
                        <strong>${getTranslation('exhibitions.period')}：</strong> ${exhibition.date}
                    </div>
                    <div class="info-item">
                        <strong>${getTranslation('exhibitions.location')}：</strong> ${location}
                    </div>
                    <div class="info-item">
                        <strong>${getTranslation('exhibitions.type')}：</strong> ${type}
                    </div>
                    <div class="info-item description">
                        <strong>${getTranslation('exhibitions.description')}：</strong> ${description}
                    </div>
                </div>
                
                <!-- 参展作品 -->
                ${exhibition.artworks && exhibition.artworks.length > 0 ? `
                <div class="exhibition-artworks">
                    <h3>${getTranslation('exhibitions.artworks')}</h3>
                    <div class="artworks-grid">
                        ${exhibition.artworks.map((artwork, index) => `
                            <div class="artwork-card">
                                ${artwork.image ? `
                                <div class="artwork-image">
                                    <img src="${artwork.image}" alt="${artwork.title}" onclick="openArtworkViewer('${artwork.image}', '${artwork.title}')">
                                </div>
                                ` : ''}
                                <div class="artwork-header">
                                    <h4>${artwork.title}</h4>
                                </div>
                                <div class="artwork-details">
                                    <div class="detail-row">
                                        <span class="detail-label">${getTranslation('exhibitions.medium')}：</span>
                                        <span class="detail-value">${artwork.medium}</span>
                                    </div>
                                    <div class="detail-row">
                                        <span class="detail-label">${getTranslation('exhibitions.size')}：</span>
                                        <span class="detail-value">${artwork.size}</span>
                                    </div>
                                    <div class="detail-row">
                                        <span class="detail-label">${getTranslation('exhibitions.year')}：</span>
                                        <span class="detail-value">${artwork.year}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- 展会现场照片 -->
                ${siteImages.length > 0 ? `
                <div class="exhibition-site">
                    <h3>${getTranslation('exhibitions.exhibitionSite')}</h3>
                    <div class="site-images-grid">
                        ${siteImages.map((img, index) => `
                            <div class="site-image-item" onclick="openImageViewer(${exhibition.images.indexOf(img)}, '${exhibition.id}')">
                                <img src="${img.src}" alt="${img.title}">
                                <div class="image-caption">
                                    <div class="image-title">${img.title}</div>
                                    <div class="image-description">${img.description}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- 参展证书 -->
                ${exhibition.documents && exhibition.documents.length > 0 ? `
                <div class="exhibition-certificates">
                    <h3>${getTranslation('exhibitions.documents')}</h3>
                    <div class="certificates-grid">
                        ${exhibition.documents.map(doc => `
                            <div class="certificate-item" onclick="openCertificateViewer('${doc.image}', '${doc.title}')">
                                <img src="${doc.image}" alt="${doc.title}">
                                <div class="certificate-title">${doc.title}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- 媒体报道 -->
                ${exhibition.press && exhibition.press.length > 0 ? `
                <div class="exhibition-press">
                    <h3>${getTranslation('exhibitions.press')}</h3>
                    <div class="press-grid">
                        ${exhibition.press.map(press => `
                            <div class="press-card">
                                <h4 class="press-title">
                                    ${press.url ? `<a href="${press.url}" target="_blank" rel="noopener noreferrer">${press.title} <i class="fas fa-external-link-alt"></i></a>` : press.title}
                                </h4>
                                <div class="press-meta">
                                    <span class="press-source">${press.source}</span>
                                    <span class="press-date">${press.date}</span>
                                </div>
                                ${press.description ? `<p class="press-description">${press.description}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    return modal;
}

// 关闭展览详情
function closeExhibitionDetail() {
    const modal = document.getElementById('exhibitionDetailModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// 打开图片查看器
function openImageViewer(imageIndex, exhibitionId) {
    const exhibition = findExhibitionById(exhibitionId);
    if (!exhibition) return;
    
    // 这里可以复用现有的图片查看器或创建新的
    // 暂时使用简单的实现
    const image = exhibition.images[imageIndex];
    const viewer = document.createElement('div');
    viewer.className = 'image-viewer-modal';
    viewer.innerHTML = `
        <div class="viewer-overlay" onclick="this.parentElement.remove()"></div>
        <div class="viewer-content">
            <img src="${image.src}" alt="${image.title}">
            <div class="viewer-info">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
            <button class="viewer-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(viewer);
    setTimeout(() => viewer.classList.add('show'), 10);
}

// 打开证书查看器
function openCertificateViewer(imageSrc, title) {
    const viewer = document.createElement('div');
    viewer.className = 'certificate-viewer-modal';
    viewer.innerHTML = `
        <div class="viewer-overlay" onclick="this.parentElement.remove()"></div>
        <div class="viewer-content">
            <img src="${imageSrc}" alt="${title}">
            <div class="viewer-info">
                <h3>${title}</h3>
            </div>
            <button class="viewer-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(viewer);
    setTimeout(() => viewer.classList.add('show'), 10);
}

// 打开作品查看器
function openArtworkViewer(imageSrc, title) {
    const viewer = document.createElement('div');
    viewer.className = 'artwork-viewer-modal';
    viewer.innerHTML = `
        <div class="viewer-overlay" onclick="this.parentElement.remove()"></div>
        <div class="viewer-content">
            <img src="${imageSrc}" alt="${title}">
            <div class="viewer-info">
                <h3>${title}</h3>
            </div>
            <button class="viewer-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(viewer);
    setTimeout(() => viewer.classList.add('show'), 10);
}

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeExhibitionDetail();
        const imageViewer = document.querySelector('.image-viewer-modal');
        if (imageViewer) {
            imageViewer.remove();
        }
    }
}); 