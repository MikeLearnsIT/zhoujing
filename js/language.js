// 语言配置
const translations = {
    zh: {
        // 导航
        nav: {
            home: "首页",
            gallery: "作品集",
            about: "关于我",
            contact: "联系方式"
        },

        // 语言切换
        lang: {
            current: "中文",
            switch: "English"
        },

        // 首页
        home: {
            title: "周祥攸兴",
            artist: "周婧",
            subtitle: "艺术家 / 画家"
        },

        // 作品集
        gallery: {
            title: "作品集",
            artwork1: "艺术作品1",
            artwork2: "艺术作品2",
            artwork3: "艺术作品3"
        },

        // 关于我
        about: {
            title: "关于我",
            content: [
                "在成长过程中对绘画产生了深厚的兴趣并贯彻着自己独特的生命感悟和跨文化背景的神韵。以其多元化的风格、丰富多彩的线条和表现力强的色彩手法",
                "在人物、景象、抽象等方面进行探索创作,并成功地将不同材料、主题和理念融合在一起。独特表述形式和热情洋溢的创作思维不仅吸引了广大观众的关注和认可，也得到了当代艺术界内同行和评论家们的高度评价。我的作品融合了传统与现代元素，探索[您的艺术理念]。"
            ]
        },

        // 联系方式
        contact: {
            title: "联系方式",
            email: "邮箱：995098125@qq.com",
            wechat: "扫描二维码添加微信"
        },

        // 页脚
        footer: {
            copyright: "© 2025 周婧. All rights reserved."
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            gallery: "Gallery",
            about: "About",
            contact: "Contact"
        },

        // Language Switch
        lang: {
            current: "English",
            switch: "中文"
        },

        // Home
        home: {
            title: "ZHOU XIANG YOU XING",
            artist: "Zhou Jing",
            subtitle: "Artist / Painter"
        },

        // Gallery
        gallery: {
            title: "Gallery",
            artwork1: "Artwork 1",
            artwork2: "Artwork 2",
            artwork3: "Artwork 3"
        },

        // About
        about: {
            title: "About Me",
            content: [
                "Throughout my personal growth, I have developed a profound passion for painting, whichallows me to express my unique perspective on life and embrace the richness of cross cultural experiences.With a versatile style, dynamic lines, and a bold use of colors, I explore and create in various realms, including portraiture, landscapes, and abstract art.I skillfully ",
                "blend different materials, themes, and concepts, seamlessly merging them together. My distinctive artistic expression and fervent creative thinking not only captivate a wide audience but also garner high acclaim from fellow artists and critics in the contemporary art world."
            ]
        },

        // Contact
        contact: {
            title: "Contact",
            email: "Email: 995098125@qq.com",
            wechat: "Scan QR code to add WeChat"
        },

        // Footer
        footer: {
            copyright: "© 2025 Zhou Jing. All rights reserved."
        }
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        // 初始化页面文字
        this.updateContent();
        // 添加语言切换事件监听
        this.addLanguageToggleListener();
    }

    addLanguageToggleListener() {
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.updateContent();
        // 更新HTML lang属性
        document.documentElement.lang = this.currentLang;
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // 如果找不到翻译，返回键名
            }
        }

        return value;
    }

    updateContent() {
        // 更新所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.getTranslation(key);
        });

        // 更新所有带有data-i18n-alt属性的图片
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            element.alt = this.getTranslation(key);
        });
    }
}

// 初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
}); 