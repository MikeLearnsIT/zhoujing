// 语言配置 - 统一格式（中英文放在一起）
const translations = {
    // 导航
    nav: {
        home: { zh: "首页", en: "Home" },
        gallery: { zh: "作品集", en: "Gallery" },
        exhibitions: { zh: "展览", en: "Exhibitions" },
        about: { zh: "关于艺术家", en: "About" },
        press: { zh: "媒体报道", en: "Press" },
        studio: { zh: "工作室", en: "Studio" },
        contact: { zh: "联系", en: "Contact" }
    },

    // 语言切换
    lang: {
        current: { zh: "EN", en: "中" },
        switch: { zh: "Switch to English", en: "切换到中文" }
    },

    // 首页
    home: {
        title: { zh: "周祥攸兴", en: "ZHOU XIANG YOU XING" },
        artist: { zh: "周婧", en: "Zhou Jing" },
        subtitle: { zh: "一位通过多维创造力连接文化的当代艺术家。", en: "A Contemporary Artist Bridging Cultures Through Multidimensional Creativity." }
    },

    // 作品集
    gallery: {
        title: { zh: "作品集", en: "Gallery" },
        subtitle: { zh: "探索色彩与情感的对话", en: "Exploring the Dialogue Between Color and Emotion" },
        sortBy: { zh: "排序方式", en: "Sort By" },
        sortDefault: { zh: "默认排序", en: "Default Order" },
        sortByYearDesc: { zh: "按年份 ↓ (新→旧)", en: "By Year ↓ (New→Old)" },
        sortByYearAsc: { zh: "按年份 ↑ (旧→新)", en: "By Year ↑ (Old→New)" },
        artwork1: {
            title: { zh: "内心景象", en: "Inner Landscape" },
            meta: { zh: "2024 • 布面油画", en: "2024 • Oil on Canvas" }
        },
        artwork2: {
            title: { zh: "色彩对话", en: "Color Dialogue" },
            meta: { zh: "2024 • 混合媒材", en: "2024 • Mixed Media" }
        },
        artwork3: {
            title: { zh: "抽象表达", en: "Abstract Expression" },
            meta: { zh: "2023 • 丙烯画", en: "2023 • Acrylic" }
        },
        artwork4: {
            title: { zh: "情感流动", en: "Emotional Flow" },
            meta: { zh: "2023 • 水彩画", en: "2023 • Watercolor" }
        },
        artwork5: {
            title: { zh: "文化融合", en: "Cultural Fusion" },
            meta: { zh: "2023 • 综合材料", en: "2023 • Mixed Materials" }
        },
        artwork6: {
            title: { zh: "时间印记", en: "Time Imprint" },
            meta: { zh: "2022 • 布面油画", en: "2022 • Oil on Canvas" }
        },
        modalDescription: { 
            zh: "使用左右箭头或键盘方向键浏览作品，双击图片可进入全屏模式。", 
            en: "Use arrow buttons or keyboard keys to browse artworks. Double-click image to enter fullscreen mode." 
        }
    },

    // 展览
    exhibitions: {
        title: { zh: "展览", en: "Exhibitions" },
        documents: { zh: "展览文档", en: "Exhibition Documents" },
        noExhibitions: { zh: "暂无展览信息", en: "No exhibitions available" },
        viewDetail: { zh: "查看详情", en: "View Details" },
        backToList: { zh: "返回展览列表", en: "Back to Exhibition List" },
        timeline: { zh: "展览时间线", en: "Exhibition Timeline" },
        basicInfo: { zh: "基本信息", en: "Basic Information" },
        exhibitionSite: { zh: "展览现场", en: "Exhibition Site" },
        artworks: { zh: "参展作品", en: "Artworks" },
        press: { zh: "媒体报道", en: "Press Coverage" },
        period: { zh: "展期", en: "Period" },
        location: { zh: "地点", en: "Location" },
        country: { zh: "国家", en: "Country" },
        description: { zh: "简介", en: "Description" },
        medium: { zh: "媒材", en: "Medium" },
        size: { zh: "尺寸", en: "Size" },
        year: { zh: "年份", en: "Year" },
        notFound: { zh: "展览未找到", en: "Exhibition Not Found" },
        selectFromList: { zh: "请从展览列表中选择一个展览查看详情。", en: "Please select an exhibition from the list to view details." },
        idNotFound: { zh: "无法找到指定的展览。", en: "Unable to find the specified exhibition." }
    },

    // 简历
    cv: {
        title: { zh: "简历", en: "Curriculum Vitae" },
        education: {
            title: { zh: "教育背景", en: "Education" },
            items: [
                { zh: "格拉斯哥艺术学院 时尚与纺织品设计", en: "Glasgow School of Art, Fashion and Textile Design" },
                { zh: "中央美术学院 本科", en: "Central Academy of Fine Arts, BA" }
            ]
        },
        awards: {
            title: { zh: "专业资质", en: "Professional Qualifications" },
            items: [
                { zh: "中外文化交流协会会员", en: "Member of Sino-Foreign Cultural Exchange Association" },
                { zh: "青年艺术家协会会员", en: "Member of Youth Artists Association" },
                { zh: "海外青年联合会会员", en: "Member of Overseas Youth Federation" }
            ]
        },
        residencies: {
            title: { zh: "专业经历", en: "Professional Experience" },
            items: [
                { zh: "ZJ STUDIO 创始人", en: "Founder of ZJ STUDIO" },
                { zh: "当代艺术家", en: "Contemporary Artist" },
                { zh: "时尚与纺织品设计师", en: "Fashion and Textile Designer" }
            ]
        },
        publications: {
            title: { zh: "展览经历", en: "Exhibitions" },
            items: [
                { zh: "2023 上海青年艺术家邀请展", en: "2023 Shanghai Young Artists Invitational Exhibition" },
                { zh: "2015 伦敦新设计师展", en: "2015 New Designers, London" }
            ]
        },
        download: { zh: "下载简历", en: "Download CV" },
        downloadText: { zh: "下载PDF版本", en: "Download PDF Version" }
    },

    // 艺术家陈述
    statement: {
        title: { zh: "艺术家陈述", en: "Artist Statement" },
        content: [
            {
                zh: "周婧是一位毕业于格拉斯哥艺术学院的当代艺术家、时尚与纺织品设计师，同时也是ZJ STUDIO的创始人。作为中外文化交流协会、青年艺术家协会和海外青年联合会的会员，她凭借独特的跨文化背景和创意风格在当代艺术界获得了广泛关注和赞誉。",
                en: "Jing Zhou, a graduate of the Glasgow School of Art, is a contemporary artist, fashion and textile designer, and founder of ZJ STUDIO. As a member of the Sino-Foreign Cultural Exchange Association, Youth Artists Association, and Overseas Youth Federation, Zhou has garnered significant attention and acclaim in the contemporary art world for her distinctive cross-cultural background and unique creative style."
            },
            {
                zh: "她的艺术之旅始于对绘画的早期热爱，这种热爱逐渐发展成为表达生活洞察的深刻方式。在格拉斯哥艺术学院期间，她不仅磨练了时尚和纺织品设计的技术专长，还发展出创新的材料实验和艺术表达方法。沉浸在格拉斯哥充满活力的艺术氛围中，周婧培养了对色彩、形式和线条的敏锐感知，并将其无缝融入作品中，将前卫的西方概念与东方传统的精致美学相结合。",
                en: "Her journey into art began with an early passion for painting, a love that evolved into a profound means of expressing her insights into life. During her time at the Glasgow School of Art, she not only honed her technical expertise in fashion and textile design but also developed an innovative approach to material experimentation and artistic expression. Immersed in Glasgow's vibrant art scene, Zhou cultivated a keen sensitivity to color, form, and line, which she seamlessly integrates into her work, combining avant-garde Western concepts with the refined aesthetic of Eastern traditions."
            },
            {
                zh: "在她的创作中，周婧运用多样的风格、流畅而富有表现力的线条和生动的色彩调色板，探索包括肖像、风景和抽象构图在内的广泛主题。她善于融合各种材料、主题和概念，创造出视觉冲击力强且富有哲学深度的作品。周婧的创作超越了单纯的视觉吸引力，通过文化对话反映了她对人性、社会和自然的跨文化思考。",
                en: "In her creative pursuits, Zhou employs diverse styles, fluid and expressive lines, and vivid color palettes to explore a wide range of subjects, including portraits, landscapes, and abstract compositions. Her adeptness in merging varied materials, themes, and concepts results in works that are visually impactful and imbued with philosophical depth. Zhou's creations transcend mere visual appeal, engaging audiences in cultural dialogues that reflect her contemplations on humanity, society, and nature within a cross-cultural context."
            },
            {
                zh: "作为ZJ STUDIO的创意力量，周婧在艺术与商业之间取得了微妙的平衡。她对材料和市场的直觉理解巩固了她在国际舞台上的艺术和创业地位。周婧的创作理念源于对当代生活复杂性的敏锐意识和对人性的深入探索。她的作品通过大胆的构图、鲜艳的色彩和动态的线条，将隐藏的心理和社会维度可视化。",
                en: "As the creative force behind ZJ STUDIO, Zhou strikes a delicate balance between art and commerce. Her intuitive understanding of materials and markets has solidified both her artistic and entrepreneurial presence on the international stage. Zhou's creative philosophy stems from an acute awareness of the complexities of contemporary life and a deep exploration of human nature. Her works visualize concealed psychological and societal dimensions through bold compositions, vibrant hues, and dynamic lines."
            },
            {
                zh: "通过她独特的方法，周婧深入探索复杂的情感状态和心理暗流，捕捉人类精神的流动性和多样性。她的艺术为内心世界提供了深刻的连接，架起了存在的有形和无形领域之间的桥梁。",
                en: "Through her distinctive approach, Zhou delves into complex emotional states and psychological undercurrents, capturing the fluidity and diversity of the human spirit. Her art offers a profound connection to the inner world, bridging the tangible and intangible realms of existence."
            },
            {
                zh: "周婧的艺术成就已在众多展览中展示。她于2015年在伦敦新设计师展上首次亮相，作为新兴人才获得早期认可。2023年，她参加'This Moment in China'上海青年艺术家邀请展，进一步巩固了她在当代艺术中的地位，展示了她标志性的创作语言和跨文化视角。",
                en: "Zhou's artistic achievements have been showcased in numerous exhibitions. She made her debut in 2015 at New Designers 2015 in London, where she gained early recognition as an emerging talent. In 2023, her participation in the 'This Moment in China'—Shanghai Young Artists Invitational Exhibition further solidified her position in contemporary art with her signature creative language and cross-cultural perspective."
            }
        ],
        download: { zh: "下载艺术家陈述", en: "Download Artist Statement" },
        downloadText: { zh: "下载PDF版本", en: "Download PDF Version" }
    },

    // 媒体报道
    press: {
        title: { zh: "媒体报道", en: "Press & Reviews" },
        personalInterviews: { zh: "个人专访", en: "Personal Interviews" },
        groupExhibitions: { zh: "展览报道", en: "Exhibition Coverage" }
    },



    // 联系方式
    contact: {
        title: { zh: "联系", en: "Contact" },
        subtitle: { zh: "让我们开始对话", en: "Let's Start a Conversation" },
        artistTitle: { zh: "艺术家", en: "Artist" },
        artistDescription: { zh: "当代艺术家 & 时尚设计师", en: "Contemporary Artist & Fashion Designer" },
        emailTitle: { zh: "邮箱联系", en: "Email Contact" },
        emailNote: { zh: "欢迎艺术合作与展览邀请", en: "Welcome art collaborations and exhibition invitations" },
        socialTitle: { zh: "社交媒体", en: "Social Media" },
        portfolioTitle: { zh: "作品集下载", en: "Portfolio Download" },
        portfolioText: { zh: "下载PDF版本", en: "Download PDF Version" },
        portfolioNote: { zh: "包含完整作品集和展览记录", en: "Includes complete portfolio and exhibition history" },
        formTitle: { zh: "发送消息", en: "Send Message" },
        formSubtitle: { zh: "有任何问题或合作意向，请随时联系", en: "Feel free to reach out for any questions or collaboration opportunities" },
        locationTitle: { zh: "工作地点", en: "Work Location" },
        location: { zh: "上海", en: "Shanghai" },
        hoursTitle: { zh: "工作时间", en: "Work Hours" },
        hours: { zh: "周一至周五 9:00-18:00", en: "Monday - Friday 9:00-18:00" },
        languageTitle: { zh: "语言", en: "Languages" },
        languages: { zh: "中文 & English", en: "Chinese & English" },
        ctaText: { zh: "期待与您的艺术对话", en: "Looking forward to our artistic dialogue" },
        ctaButton: { zh: "立即联系", en: "Contact Now" },
        wechat: { zh: "微信二维码", en: "WeChat QR Code" }
    },

    // 关于艺术家
    about: {
        statementTitle: { zh: "艺术家陈述", en: "Artist Statement" },
        statementContent: [
            {
                zh: "周婧是一位毕业于格拉斯哥艺术学院的当代艺术家、时尚与纺织品设计师，同时也是ZJ STUDIO的创始人。作为中外文化交流协会、青年艺术家协会和海外青年联合会的会员，她凭借独特的跨文化背景和创意风格在当代艺术界获得了广泛关注和赞誉。",
                en: "Jing Zhou, a graduate of the Glasgow School of Art, is a contemporary artist, fashion and textile designer, and founder of ZJ STUDIO. As a member of the Sino-Foreign Cultural Exchange Association, Youth Artists Association, and Overseas Youth Federation, Zhou has garnered significant attention and acclaim in the contemporary art world for her distinctive cross-cultural background and unique creative style."
            },
            {
                zh: "她的艺术之旅始于对绘画的早期热爱，这种热爱逐渐发展成为表达生活洞察的深刻方式。在格拉斯哥艺术学院期间，她不仅磨练了时尚和纺织品设计的技术专长，还发展出创新的材料实验和艺术表达方法。沉浸在格拉斯哥充满活力的艺术氛围中，周婧培养了对色彩、形式和线条的敏锐感知，并将其无缝融入作品中，将前卫的西方概念与东方传统的精致美学相结合。",
                en: "Her journey into art began with an early passion for painting, a love that evolved into a profound means of expressing her insights into life. During her time at the Glasgow School of Art, she not only honed her technical expertise in fashion and textile design but also developed an innovative approach to material experimentation and artistic expression. Immersed in Glasgow's vibrant art scene, Zhou cultivated a keen sensitivity to color, form, and line, which she seamlessly integrates into her work, combining avant-garde Western concepts with the refined aesthetic of Eastern traditions."
            },
            {
                zh: "在她的创作中，周婧运用多样的风格、流畅而富有表现力的线条和生动的色彩调色板，探索包括肖像、风景和抽象构图在内的广泛主题。她善于融合各种材料、主题和概念，创造出视觉冲击力强且富有哲学深度的作品。周婧的创作超越了单纯的视觉吸引力，通过文化对话反映了她对人性、社会和自然的跨文化思考。",
                en: "In her creative pursuits, Zhou employs diverse styles, fluid and expressive lines, and vivid color palettes to explore a wide range of subjects, including portraits, landscapes, and abstract compositions. Her adeptness in merging varied materials, themes, and concepts results in works that are visually impactual and imbued with philosophical depth. Zhou's creations transcend mere visual appeal, engaging audiences in cultural dialogues that reflect her contemplations on humanity, society, and nature within a cross-cultural context."
            },
            {
                zh: "作为ZJ STUDIO的创意力量，周婧在艺术与商业之间取得了微妙的平衡。她对材料和市场的直觉理解巩固了她在国际舞台上的艺术和创业地位。周婧的创作理念源于对当代生活复杂性的敏锐意识和对人性的深入探索。她的作品通过大胆的构图、鲜艳的色彩和动态的线条，将隐藏的心理和社会维度可视化。",
                en: "As the creative force behind ZJ STUDIO, Zhou strikes a delicate balance between art and commerce. Her intuitive understanding of materials and markets has solidified both her artistic and entrepreneurial presence on the international stage. Zhou's creative philosophy stems from an acute awareness of the complexities of contemporary life and a deep exploration of human nature. Her works visualize concealed psychological and societal dimensions through bold compositions, vibrant hues, and dynamic lines."
            },
            {
                zh: "通过她独特的方法，周婧深入探索复杂的情感状态和心理暗流，捕捉人类精神的流动性和多样性。她的艺术为内心世界提供了深刻的连接，架起了存在的有形和无形领域之间的桥梁。",
                en: "Through her distinctive approach, Zhou delves into complex emotional states and psychological undercurrents, capturing the fluidity and diversity of the human spirit. Her art offers a profound connection to the inner world, bridging the tangible and intangible realms of existence."
            },
            {
                zh: "周婧的艺术成就已在众多展览中展示。她于2015年在伦敦新设计师展上首次亮相，作为新兴人才获得早期认可。2023年，她参加'This Moment in China'上海青年艺术家邀请展，进一步巩固了她在当代艺术中的地位，展示了她标志性的创作语言和跨文化视角。",
                en: "Zhou's artistic achievements have been showcased in numerous exhibitions. She made her debut in 2015 at New Designers 2015 in London, where she gained early recognition as an emerging talent. In 2023, her participation in the 'This Moment in China'—Shanghai Young Artists Invitational Exhibition further solidified her position in contemporary art with her signature creative language and cross-cultural perspective."
            },
            {
                zh: "周婧的艺术理念深深植根于她的个人成长和跨文化经历。她以艺术为媒介，传达对生活、情感和文化融合美学和谐的思考。她的作品在形式上大胆而富有动感，同时蕴含着深刻的社会和文化叙事。周婧的艺术邀请观众不仅欣赏其视觉美学，还参与潜在的情感和哲学探索。",
                en: "Jing Zhou's artistic philosophy is deeply rooted in her personal growth and cross-cultural experiences. Using art as a medium, she conveys reflections on life, emotions, and the aesthetic harmony of cultural convergence. Her works are bold and dynamic in form yet enriched with profound social and cultural narratives. Zhou's art invites viewers to not only enjoy its visual aesthetics but also engage with the underlying emotional and philosophical inquiries."
            },
            {
                zh: "她的创作体现了双重性：既是个人情感的外化，也是对普遍人类困境的分析。通过构建通往精神领域的桥梁，周婧使观众能够探索他们的内心世界和当代社会现实。她的艺术不仅诉诸感官，还促发反思和内省，为当代艺术领域注入新的活力。",
                en: "Her creations embody a duality: they are both an externalization of personal emotion and an analysis of universal human dilemmas. By constructing a bridge to the spiritual realm, Zhou enables her audience to explore their inner selves and contemporary social realities. Her art doesn't merely appeal to the senses; it prompts reflection and introspection, breathing fresh vitality into the realm of contemporary art."
            },
            {
                zh: "在时尚设计训练和当代艺术实践的背景下，周婧通过绘画融合情感、时尚和社会观察。她独特的方法整合了多元文化影响和设计专长，探索内心世界的流动性和社会心理的复杂性。她的作品以其美学吸引力和主题深度脱颖而出，鼓励观众反思自我和社会。",
                en: "Trained in fashion design and engaged in contemporary artistic practices, Zhou merges emotions, fashion, and societal observations through her paintings. Her unique approach integrates multicultural influences and design expertise, exploring the fluidity of inner worlds and the complexities of social psychology. Her works stand out for their aesthetic allure and thematic depth, encouraging audiences to reflect on both self and society."
            },
            {
                zh: "在全球化的艺术语境中，周婧的创作为艺术与时尚的融合提供了新的可能性。她在当代艺术中的地位由她无缝融合这些领域的能力所定义，呈现出既具有美学意义又具有思想深度的叙事。",
                en: "In the context of globalized art, Zhou's creations offer new possibilities for the convergence of art and fashion. Her position in contemporary art is defined by her ability to seamlessly fuse these domains, presenting bold narratives that resonate with both aesthetic and intellectual significance."
            },
            {
                zh: "周婧的艺术不仅仅是色彩和构图的创新，更反映了她对普遍精神挣扎的个人视角，创造出独特的叙事。她的作品植根于中国情感和精神内省的传统，同时从西方现代艺术对内心世界的关注中汲取灵感。这种融合形成了独特的个人风格，反映了对人性和社会问题的深刻洞察。",
                en: "Jing Zhou's art is more than innovation in color and composition; it reflects a personal perspective on universal spiritual struggles, crafting a narrative uniquely her own. Her works are rooted in the Chinese tradition of emotional and spiritual introspection, while drawing inspiration from Western modern art's focus on internal worlds. This synthesis results in a distinctive personal style that reflects profound insights into human nature and societal issues."
            },
            {
                zh: "她的艺术立场位于心理表现主义和当代社会艺术的交汇处。通过掌握色彩、线条和文化表达的相互作用，周婧在当代艺术中开辟了一条独特的道路。她的作品有潜力在该领域占据重要地位，继续为全球观众带来视觉冲击和思想启发。",
                en: "Her artistic position lies at the intersection of psychological expressionism and contemporary social art. By mastering the interplay of color, line, and cultural expression, Zhou charts an individual path in contemporary art. Her work has the potential to occupy a significant place in the field, continuing to deliver both visual impact and intellectual inspiration to audiences worldwide."
            }
        ],
        cvTitle: { zh: "简历", en: "Curriculum Vitae" },
        education: {
            title: { zh: "教育背景", en: "Education" },
            items: [
                { zh: "格拉斯哥艺术学院 时尚与纺织品设计", en: "Glasgow School of Art, Fashion and Textile Design" },
                { zh: "中央美术学院 本科", en: "Central Academy of Fine Arts, BA" }
            ]
        },
        awards: {
            title: { zh: "专业资质", en: "Professional Qualifications" },
            items: [
                { zh: "中外文化交流协会会员", en: "Member of Sino-Foreign Cultural Exchange Association" },
                { zh: "青年艺术家协会会员", en: "Member of Youth Artists Association" },
                { zh: "海外青年联合会会员", en: "Member of Overseas Youth Federation" }
            ]
        },
        residencies: {
            title: { zh: "专业经历", en: "Professional Experience" },
            items: [
                { zh: "ZJ STUDIO 创始人", en: "Founder of ZJ STUDIO" },
                { zh: "当代艺术家", en: "Contemporary Artist" },
                { zh: "时尚与纺织品设计师", en: "Fashion and Textile Designer" }
            ]
        },
        publications: {
            title: { zh: "展览经历", en: "Exhibitions" },
            items: [
                { zh: "2023 上海青年艺术家邀请展", en: "2023 Shanghai Young Artists Invitational Exhibition" },
                { zh: "2015 伦敦新设计师展", en: "2015 New Designers, London" }
            ]
        },
        downloadsTitle: { zh: "资料下载", en: "Downloads" },
        cvDownload: { zh: "简历", en: "Curriculum Vitae" },
        cvDescription: { zh: "完整的教育背景和职业经历", en: "Complete educational background and professional experience" },
        statementDownload: { zh: "艺术家陈述", en: "Artist Statement" },
        statementDescription: { zh: "详细的创作理念和艺术哲学", en: "Detailed creative philosophy and artistic philosophy" },
        downloadText: { zh: "下载", en: "Download" }
    },

    // 页脚
    footer: {
        copyright: { zh: "© 2025 周婧. 保留所有权利.", en: "© 2025 Zhou Jing. All rights reserved." }
    }
};

// 语言管理器类
class LanguageManager {
    constructor() {
        this.currentLang = 'zh';
        this.isInitialized = false;
        this.init();
    }

    init() {
        // 从本地存储获取语言设置
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
            this.currentLang = savedLang;
        }
        
        // 立即设置页面语言
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // 使用更频繁的检查来确保翻译及时应用
        this.applyTranslationsRepeatedly();
        
        // 等待DOM加载完成后绑定事件
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindEvents();
                this.applyTranslations();
                this.isInitialized = true;
            });
        } else {
            // DOM已经加载完成
            this.bindEvents();
            this.isInitialized = true;
        }
    }
    
    applyTranslationsRepeatedly() {
        // 立即应用一次
        this.applyTranslations();
        
        // 然后在短时间内多次应用，确保所有元素都被翻译
        const intervals = [10, 50, 100, 200];
        intervals.forEach(delay => {
            setTimeout(() => this.applyTranslations(), delay);
        });
    }
    
    bindEvents() {
        // 绑定语言切换按钮
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', this.currentLang);
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        this.applyTranslations();
        
        // 触发语言切换事件
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLang }
        }));
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        // 如果是数组，处理数组中的每个元素
        if (Array.isArray(value)) {
            return value.map(item => {
                if (item && typeof item === 'object' && item[this.currentLang]) {
                    return item[this.currentLang];
                }
                return item;
            });
        }
        
        // 如果是对象且有当前语言的翻译，返回翻译
        if (value && typeof value === 'object' && value[this.currentLang]) {
            return value[this.currentLang];
        }
        
        // 如果是字符串，直接返回
        if (typeof value === 'string') {
            return value;
        }
        
        console.warn(`Translation not found for key: ${key} in language: ${this.currentLang}`);
        return key;
    }

    applyTranslations() {
        // 更新所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // 特殊处理数组类型的翻译
            if (Array.isArray(translation)) {
                if (key.includes('statementContent')) {
                    // 处理艺术家陈述内容（段落数组）
                    element.innerHTML = translation.map(paragraph => `<p>${paragraph}</p>`).join('');
                } else if (key.includes('.items')) {
                    // 处理列表项数组
                    element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
                } else {
                    // 其他数组情况，用换行符连接
                    element.textContent = translation.join('\n');
                }
            } else {
                element.textContent = translation;
            }
        });
        
        // 更新页面标题
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const zhTitle = titleElement.getAttribute('data-zh');
            const enTitle = titleElement.getAttribute('data-en');
            if (zhTitle && enTitle) {
                titleElement.textContent = this.currentLang === 'zh' ? zhTitle : enTitle;
            }
        }
        
        // 更新语言切换按钮文本
        this.updateLanguageToggle();
        
        // 更新自定义选择器的文本
        this.updateCustomSelectText();
    }

    updateLanguageToggle() {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.getTranslation('lang.current');
        }
        
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.setAttribute('aria-label', this.getTranslation('lang.switch'));
        }
    }

    // 更新自定义选择器的文本
    updateCustomSelectText() {
        const customSelect = document.getElementById('customSelect');
        if (!customSelect) return;

        const selectText = customSelect.querySelector('.select-text');
        const activeOption = customSelect.querySelector('.select-option.active');
        
        if (selectText && activeOption) {
            const spanElement = activeOption.querySelector('span');
            if (spanElement) {
                const i18nKey = spanElement.getAttribute('data-i18n');
                if (i18nKey) {
                    const translatedText = this.getTranslation(i18nKey);
                    if (translatedText) {
                        selectText.textContent = translatedText;
                    }
                }
            }
        }
    }
}

// 全局函数，供其他脚本使用
function getTranslation(key) {
    if (window.languageManager) {
        return window.languageManager.getTranslation(key);
    }
    return key;
}

// 辅助函数：获取当前语言
function getCurrentLanguage() {
    if (window.languageManager) {
        return window.languageManager.currentLang;
    }
    return 'zh';
}

// 辅助函数：获取翻译文本（处理对象格式）
function getTranslationText(textObj) {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    
    const currentLang = getCurrentLanguage();
    if (textObj[currentLang]) {
        return textObj[currentLang];
    }
    
    // 降级到中文
    return textObj.zh || textObj.en || '';
}

// 立即初始化语言管理器
window.languageManager = new LanguageManager();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager, getTranslation, getCurrentLanguage, getTranslationText };
} 