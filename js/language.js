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
            title: "周婧",
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
                "欢迎来到我的个人艺术空间。我是一名专注于[您的艺术风格]的画家，致力于通过画笔表达内心的情感和对世界的理解。",
                "我的作品融合了传统与现代元素，探索[您的艺术理念]。"
            ]
        },

        // 联系方式
        contact: {
            title: "联系方式",
            email: "邮箱：your.email@example.com"
        },

        // 页脚
        footer: {
            copyright: "© 2024 周婧. All rights reserved."
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
            title: "Zhou Jing",
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
                "Welcome to my personal art space. I am a painter focused on [your art style], dedicated to expressing inner emotions and understanding of the world through my brush.",
                "My works blend traditional and modern elements, exploring [your art concept]."
            ]
        },

        // Contact
        contact: {
            title: "Contact",
            email: "Email: your.email@example.com"
        },

        // Footer
        footer: {
            copyright: "© 2024 Zhou Jing. All rights reserved."
        }
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = 'zh';
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