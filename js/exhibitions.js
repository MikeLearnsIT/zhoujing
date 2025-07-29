// 展览数据配置 - 便于后期维护和添加
const exhibitionsData = {
    // 2023年展览
    "2023": [
        {
            id: "now-zhong-qu-jing-china-2023",
            title: {
                zh: "\"NOW中取境\"--2023上海青年艺术家邀请展",
                en: "\"NOW Zhong Qu Jing\" - 2023 Shanghai Young Artists Invitational Exhibition"
            },
            organizer: {
                zh: "上海中外文化艺术交流协会",
                en: "Shanghai International Cultural Exchange Association"
            },
            organizerDescription: {
                zh: "上海中外文化艺术交流协会成立于1992年，为上海市级国际文化艺术交流的社会团体。协会由上海市文联主管，在上海市民政局依法登记并取得法人资格。协会宗旨是通过开展民间中外文化艺术交流活动，为繁荣和发展上海的经济、文化和艺术事业服务，也为了增强与世界各国、各地区人民的相互了解和友好合作。协会通过在国内外举办各种艺术交流展览、演出，学术研讨和报告等活动，开展中外文化艺术的系列交流。",
                en: "Shanghai International Cultural Exchange Association was founded in 1992, as a social organization for international cultural and artistic exchanges at the municipal level in Shanghai. The association is under the supervision of the Shanghai Federation of Literature and Arts, registered with the Shanghai Municipal Civil Affairs Bureau, and granted legal person status. The association's mission is to promote the economic, cultural, and artistic development of Shanghai through the organization of various cultural and artistic exchange activities, as well as to enhance mutual understanding and friendly cooperation with people from all over the world. The association conducts a series of cultural and artistic exchanges through various art exhibitions, performances, academic seminars, and reports both domestically and internationally."
            },
            organizerLink: {
                zh: "https://baike.baidu.com/item/上海中外文化艺术交流协会",
                en: "https://baike.baidu.com/item/上海中外文化艺术交流协会"
            },
            date: "2023.09.28 - 2023.10.25",
            location: {
                zh: "上海市普陀区文化馆3楼（上海市兰溪路138号）",
                en: "Shanghai PuTuo District Cultural Center 3rd Floor (No. 138 Lanxi Road, Shanghai)"
            },
            country: {
                zh: "中国",
                en: "China"
            },
            description: {
                zh: "这是一场汇聚了多位中国当代艺术家的重要群展，展示了当代中国艺术的多元面貌和创新精神。展览通过不同媒介的艺术作品，呈现了艺术家们对当下社会、文化和个人体验的深度思考。",
                en: "An important exhibition bringing together multiple Chinese contemporary artists, showcasing the diverse landscape and innovative spirit of contemporary Chinese art. The exhibition presents artists' deep reflections on current society, culture, and personal experiences through various artistic media."
            },
            images: [
                {
                    src: "images/exhibitions/20230928/exhibition_20230928.webp",
                    title: {
                        zh: "展览海报",
                        en: "Exhibition Poster"
                    },
                    description: {
                        zh: "\"NOW中取境\"展览主视觉海报",
                        en: "Main visual poster of \"NOW Zhong Qu Jing\" exhibition"
                    }
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_01.webp",
                    title: {
                        zh: "艺术家与嘉宾合影",
                        en: "Group Photo with Artists and Guests"
                    },
                    description: {
                        zh: "与上海中外文化艺术交流协会张秘书长（左6）、策展团队总策划胡晓芒老师（左5）、学术支持/艺术总监王远教授（右4）、上海中外文化青艺会侯秘书长（左3）及其他优秀青年艺术家的合影",
                        en: "Group photo with Secretary General Zhang of Shanghai International Cultural Exchange Association (6th from left), Chief Curator Hu Xiaomang (5th from left), Academic Support/Art Director Professor Wang Yuan (4th from right), Secretary General Hou of Shanghai Sino-Foreign Culture Youth Art Association (3rd from left), and other outstanding young artists"
                    }
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_02.webp",
                    title: {
                        zh: "与主办方合影",
                        en: "Photo with Organizers"
                    },
                    description: {
                        zh: "与上海中外文化艺术交流协会张秘书长（右2）、总策划胡晓芒老师（左3）、上海中外文化青艺会侯秘书长（右1）的合影",
                        en: "Photo with Secretary General Zhang of Shanghai International Cultural Exchange Association (2nd from right), Chief Curator Hu Xiaomang (3rd from left), and Secretary General Hou of Shanghai Sino-Foreign Culture Youth Art Association (1st from right)"
                    }
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_03.webp",
                    title: {
                        zh: "媒体专访",
                        en: "Media Interview"
                    },
                    description: {
                        zh: "接受《新民晚报》的专访",
                        en: "Interview with Xinmin Evening News"
                    }
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_04.webp",
                    title: {
                        zh: "友好交流",
                        en: "Friendly Exchange"
                    },
                    description: {
                        zh: "与俄中友好大爱天使陈老师的合影",
                        en: "Photo with Teacher Chen, Russia-China Friendship Ambassador"
                    }
                },
                {
                    src: "images/exhibitions/20230928/exhibition_20230928_05.webp",
                    title: {
                        zh: "观众参观",
                        en: "Visitors Viewing"
                    },
                    description: {
                        zh: "现场观众参观作品",
                        en: "Visitors viewing the artworks on site"
                    }
                }
            ],
            artworks: [
                {
                    title: {
                        zh: "芽",
                        en: "Sprout"
                    },
                    medium: {
                        zh: "丙烯 & 综合材料",
                        en: "Acrylic & Mixed Media"
                    },
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/paintings/painting_01.jpg"
                },
                {
                    title: {
                        zh: "翡翠之光",
                        en: "Emerald Light"
                    },
                    medium: {
                        zh: "丙烯 & 综合材料",
                        en: "Acrylic & Mixed Media"
                    },
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/paintings/painting_02.jpg"
                },
                {
                    title: {
                        zh: "剪影",
                        en: "Silhouette"
                    },
                    medium: {
                        zh: "丙烯 & 综合材料",
                        en: "Acrylic & Mixed Media"
                    },
                    size: "80cm×80cm",
                    year: "2023",
                    image: "images/paintings/painting_03.jpg"
                },
                {
                    title: {
                        zh: "靛蓝",
                        en: "Indigo Blue"
                    },
                    medium: {
                        zh: "丙烯 & 综合材料",
                        en: "Acrylic & Mixed Media"
                    },
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/paintings/painting_04.png"
                },
                {
                    title: {
                        zh: "清逸之华",
                        en: "Elegant Splendor"
                    },
                    medium: {
                        zh: "丙烯",
                        en: "Acrylic"
                    },
                    size: "60cm×60cm",
                    year: "2023",
                    image: "images/paintings/painting_05.jpg"
                }
            ],
            documents: [
                // {
                //     title: "参展证书",
                //     type: "certificate",
                //     image: "images/images_31.png"
                // }
            ],
            press: [
                {
                    title: {
                        zh: "展览也玩谐音梗，\“NOW中取境——2023上海青年艺术家邀请展\”开幕",
                        en: "The exhibition also plays a pun, the opening of \"NOW - 2023 Shanghai Young Artists Invitational Exhibition\""
                    },
                    source: {
                        zh: "新闻晨报",
                        en: "Morning News"
                    },
                    date: "2023.09.29",
                    url: "https://www.shxwcb.com/#/detail/25299182E3446E7C4A92D0F2161D3DDB6BD0ABB9A44A2FE384A0B5DBEFC61352",
                    description: {
                        zh: "一个类似于谐音梗的主题，却点出了展览要旨——青年艺术家如何用创作，去勇敢掀翻缠绕在周围的羁绊，走入安宁之境",
                        en: "A theme that resembles a pun, yet reveals the essence of the exhibition - how young artists use their creativity to bravely break free from the constraints around them and enter a realm of tranquility"
                    }
                }
            ]
        },
        {
            id: "interlude-infini-2023",
            title: {
                zh: "2023·\"萨珞际\"艺术展",
                en: "2023 Interlude Infini Art Exhibition"
            },
            organizer: {
                zh: "北京798艺术区管理委员会",
                en: "Beijing 798 Art Zone Management Committee"
            },
            organizerDescription: {
                zh: "北京798艺术区是中国最著名的艺术区之一，由废弃的军工厂改建而成。艺术区管理委员会致力于推动当代艺术发展，为艺术家提供展示平台，促进艺术交流。通过举办各类展览和文化活动，798艺术区已成为展示中国当代艺术的重要窗口。",
                en: "Beijing 798 Art Zone is one of China's most renowned art districts, converted from abandoned military factories. The Management Committee is dedicated to promoting contemporary art development, providing platforms for artists, and facilitating artistic exchange. Through various exhibitions and cultural events, 798 Art Zone has become an important window for showcasing Chinese contemporary art."
            },
            organizerLink: {
                zh: "https://baike.baidu.com/item/798艺术区",
                en: "https://baike.baidu.com/item/798艺术区"
            },
            date: "2023.09.15 - 2023.10.20",
            location: {
                zh: "北京798艺术区",
                en: "Beijing 798 Art Zone"
            },
            country: {
                zh: "中国",
                en: "China"
            },
            description: {
                zh: "萨珞际艺术展探讨了艺术中的偶然与必然，展示了艺术家们如何通过不同的创作手法表达对生活、情感和存在的理解。展览汇集了多位艺术家的精彩作品，呈现了当代艺术的丰富内涵。",
                en: "Interlude Infini Art Exhibition explores the concepts of chance and inevitability in art, showcasing how artists express their understanding of life, emotions, and existence through various creative approaches. The exhibition brings together outstanding works from multiple artists, presenting the rich connotations of contemporary art."
            },
            images: [
                {
                    src: "images/paintings/painting_06.jpg",
                    title: {
                        zh: "展览海报",
                        en: "Exhibition Poster"
                    },
                    description: {
                        zh: "萨珞际艺术展主视觉",
                        en: "Main visual of Interlude Infini Art Exhibition"
                    }
                },
                {
                    src: "images/paintings/painting_07.jpg",
                    title: {
                        zh: "作品展示",
                        en: "Artwork Display"
                    },
                    description: {
                        zh: "周婧参展作品展示",
                        en: "Display of Zhou Jing's exhibited works"
                    }
                },
                {
                    src: "images/paintings/painting_08.jpg",
                    title: {
                        zh: "展览现场",
                        en: "Exhibition Site"
                    },
                    description: {
                        zh: "观众参观展览",
                        en: "Visitors viewing the exhibition"
                    }
                }
            ],
            artworks: [
                {
                    title: {
                        zh: "几何印象",
                        en: "Geometric Impression"
                    },
                    medium: {
                        zh: "综合材料",
                        en: "Mixed Media"
                    },
                    size: "80×80cm",
                    year: "2023"
                },
                {
                    title: {
                        zh: "色彩构成",
                        en: "Color Composition"
                    },
                    medium: {
                        zh: "丙烯画",
                        en: "Acrylic Painting"
                    },
                    size: "70×70cm",
                    year: "2023"
                }
            ],
            documents: [
                {
                    title: "展览画册",
                    type: "catalog",
                    image: "images/paintings/painting_09.jpg"
                }
            ],
            press: [
                {
                    title: {
                        zh: "萨珞际艺术展：探索艺术的无限可能",
                        en: "Interlude Infini Art Exhibition: Exploring the Infinite Possibilities of Art"
                    },
                    source: {
                        zh: "北京文艺报",
                        en: "Beijing Arts & Literature News"
                    },
                    date: "2023.09.20",
                    url: "https://example.com/interlude-report",
                    description: {
                        zh: "深入报道了萨珞际艺术展的策展理念和参展作品的艺术特色。",
                        en: "In-depth coverage of the curatorial concept and artistic characteristics of the exhibited works in the Interlude Infini Art Exhibition."
                    }
                }
            ]
        },
        {
            id: "award-exhibition-2023",
            title: {
                zh: "第十三届中国当代艺术作品邀请展",
                en: "13th China Contemporary Art Works Invitational Exhibition"
            },
            organizer: {
                zh: "中国艺术家协会",
                en: "China Artists Association"
            },
            organizerDescription: {
                zh: "中国艺术家协会是中国最具权威性的艺术家专业团体，长期致力于推动中国当代艺术的发展。协会通过组织高水平的展览、评奖活动，发掘和培养优秀艺术人才，促进中国当代艺术的繁荣发展。本次邀请展是协会年度重要活动之一，旨在展示中国当代艺术的最新成果。",
                en: "The China Artists Association is China's most authoritative professional organization for artists, dedicated to promoting the development of contemporary Chinese art. Through organizing high-level exhibitions and awards, the association discovers and nurtures outstanding artistic talents, promoting the prosperity of contemporary Chinese art. This invitational exhibition is one of the association's important annual events, aimed at showcasing the latest achievements in Chinese contemporary art."
            },
            organizerLink: {
                zh: "https://baike.baidu.com/item/中国美术家协会",
                en: "https://baike.baidu.com/item/中国美术家协会"
            },
            date: "2023",
            location: {
                zh: "中国",
                en: "China"
            },
            country: {
                zh: "中国",
                en: "China"
            },
            description: {
                zh: "第十三届中国当代艺术作品邀请展，周婧作品获得参展资格并获得相关奖项认可。",
                en: "The 13th China Contemporary Art Works Invitational Exhibition, where Zhou Jing's works were selected for participation and received recognition."
            },
            images: [
                {
                    src: "images/paintings/painting_09.jpg",
                    title: {
                        zh: "作品展示",
                        en: "Artwork Display"
                    },
                    description: {
                        zh: "参展作品《网格》",
                        en: "Exhibited artwork \"Grid\""
                    }
                }
            ],
            artworks: [
                {
                    title: {
                        zh: "网格",
                        en: "Grid"
                    },
                    medium: {
                        zh: "综合材料",
                        en: "Mixed Media"
                    },
                    size: "60×60cm",
                    year: "2023"
                }
            ],
            documents: [
                {
                    title: "参展证书",
                    type: "certificate",
                    image: "images/paintings/painting_10.jpg"
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
            "exhibitions.backToList": "返回展览列表",
            "exhibitions.timeline": "展览时间线",
            "exhibitions.artworks": "参展作品",
            "exhibitions.documents": "展览文档",
            "exhibitions.press": "媒体报道",
            "exhibitions.period": "展期",
            "exhibitions.location": "地点",
            "exhibitions.country": "国家",
            "exhibitions.description": "简介",
            "exhibitions.medium": "媒材",
            "exhibitions.size": "尺寸",
            "exhibitions.year": "年份",
            "exhibitions.exhibitionSite": "展览现场",
            "exhibitions.organizer": "主办方",
            "exhibitions.aboutOrganizer": "主办方介绍"
        },
        en: {
            "exhibitions.viewDetail": "View Details",
            "exhibitions.backToList": "Back to Exhibition List",
            "exhibitions.timeline": "Exhibition Timeline",
            "exhibitions.artworks": "Artworks",
            "exhibitions.documents": "Exhibition Documents",
            "exhibitions.press": "Press Coverage",
            "exhibitions.period": "Period",
            "exhibitions.location": "Location",
            "exhibitions.country": "Country",
            "exhibitions.description": "Description",
            "exhibitions.medium": "Medium",
            "exhibitions.size": "Size",
            "exhibitions.year": "Year",
            "exhibitions.exhibitionSite": "Exhibition Site",
            "exhibitions.organizer": "Organizer",
            "exhibitions.aboutOrganizer": "About Organizer"
        }
    };

    const lang = currentLang || 'zh';
    return defaultTranslations[lang][key] || key;
}

// 获取作品字段的多语言文本
function getArtworkText(artwork, field) {
    if (typeof artwork[field] === 'object' && artwork[field] !== null) {
        return artwork[field][currentLang] || artwork[field].zh || artwork[field];
    }
    return artwork[field] || '';
}

// 获取图片字段的多语言文本
function getImageText(img, field) {
    if (typeof img[field] === 'object' && img[field] !== null) {
        return img[field][currentLang] || img[field].zh || img[field];
    }
    return img[field] || '';
}

// 获取媒体报道字段的多语言文本
function getPressText(press, field) {
    if (typeof press[field] === 'object' && press[field] !== null) {
        return press[field][currentLang] || press[field].zh || press[field];
    }
    return press[field] || '';
}

// 当前语言
let currentLang = 'zh';

// 监听语言切换事件
document.addEventListener('DOMContentLoaded', function () {
    // 初始化当前语言
    if (window.languageManager) {
        currentLang = window.languageManager.currentLang;
    }

    // 监听语言切换
    document.addEventListener('languageChanged', function (e) {
        currentLang = e.detail.language;
        // 重新渲染展览列表
        renderExhibitions(exhibitionsData);
    });
});

// 初始化展览页面
document.addEventListener('DOMContentLoaded', function () {
    // 监听语言切换
    document.addEventListener('languageChanged', function (e) {
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
    const country = exhibition.country[currentLang] || exhibition.country.zh;
    const organizer = exhibition.organizer ? (exhibition.organizer[currentLang] || exhibition.organizer.zh) : '';

    item.innerHTML = `
        <div class="exhibition-info">
            <div class="exhibition-date">${exhibition.date}</div>
            <h4 class="exhibition-title">${title}</h4>
            ${organizer ? `<div class="exhibition-organizer">${organizer}</div>` : ''}
            <div class="exhibition-location">${location}</div>
            <div class="exhibition-country">${country}</div>
        </div>
        <div class="exhibition-preview">
            ${exhibition.images.slice(0, 3).map(img =>
        `<img src="${img.src}" alt="${img.title}" class="preview-image">`
    ).join('')}
        </div>
        <div class="exhibition-action">
            <a href="exhibition-detail.html?id=${exhibition.id}" class="view-detail-btn">
                <i class="fas fa-eye"></i>
                <span>${getTranslation('exhibitions.viewDetail')}</span>
            </a>
        </div>
    `;

    return item;
}



// 根据ID查找展览
function findExhibitionById(id) {
    for (const year in exhibitionsData) {
        const exhibition = exhibitionsData[year].find(ex => ex.id === id);
        if (exhibition) return exhibition;
    }
    return null;
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
            <img src="${image.src}" alt="${getImageText(image, 'title')}">
            <div class="viewer-info">
                <h3>${getImageText(image, 'title')}</h3>
                <p>${getImageText(image, 'description')}</p>
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
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const imageViewer = document.querySelector('.image-viewer-modal');
        if (imageViewer) {
            imageViewer.remove();
        }
    }
}); 