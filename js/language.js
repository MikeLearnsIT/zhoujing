// 语言配置
const translations = {
    zh: {
        // 导航
        nav: {
            home: "首页",
            gallery: "作品集",
            exhibitions: "展览",
            about: "关于艺术家",
            press: "媒体报道",
            studio: "工作室",
            contact: "联系"
        },

        // 语言切换
        lang: {
            current: "EN",
            switch: "Switch to English"
        },

        // 首页
        home: {
            title: "周祥攸兴",
            artist: "周婧",
            subtitle: "一位通过多维创造力连接文化的当代艺术家。"
        },

        // 作品集
        gallery: {
            title: "作品集",
            subtitle: "探索色彩与情感的对话",
            artwork1: {
                title: "内心景象",
                meta: "2024 • 布面油画"
            },
            artwork2: {
                title: "色彩对话", 
                meta: "2024 • 混合媒材"
            },
            artwork3: {
                title: "抽象表达",
                meta: "2023 • 丙烯画"
            },
            artwork4: {
                title: "情感流动",
                meta: "2023 • 水彩画"
            },
            artwork5: {
                title: "文化融合",
                meta: "2023 • 综合材料"
            },
            artwork6: {
                title: "时间印记",
                meta: "2022 • 布面油画"
            },
            modalDescription: "使用左右箭头或键盘方向键浏览作品，双击图片可进入全屏模式。"
        },

        // 展览
        exhibitions: {
            title: "展览",
            documents: "展览文档",
            noExhibitions: "暂无展览信息",
            viewDetail: "查看详情",
            backToList: "返回展览列表",
            timeline: "展览时间线",
            basicInfo: "基本信息",
            exhibitionSite: "展览现场",
            artworks: "参展作品",
            press: "媒体报道",
            period: "展期",
            location: "地点",
            type: "类型",
            description: "简介",
            medium: "媒材",
            size: "尺寸",
            year: "年份",
            notFound: "展览未找到",
            selectFromList: "请从展览列表中选择一个展览查看详情。",
            idNotFound: "无法找到指定的展览。"
        },

        // 简历
        cv: {
            title: "简历",
            education: {
                title: "教育背景",
                items: [
                    "格拉斯哥艺术学院 时尚与纺织品设计",
                    "中央美术学院 本科"
                ]
            },
            awards: {
                title: "专业资质",
                items: [
                    "中外文化交流协会会员",
                    "青年艺术家协会会员",
                    "海外青年联合会会员"
                ]
            },
            residencies: {
                title: "专业经历",
                items: [
                    "ZJ STUDIO 创始人",
                    "当代艺术家",
                    "时尚与纺织品设计师"
                ]
            },
            publications: {
                title: "展览经历",
                items: [
                    "2023 上海青年艺术家邀请展",
                    "2015 伦敦新设计师展"
                ]
            },
            download: "下载简历",
            downloadText: "下载PDF版本"
        },

        // 艺术家陈述
        statement: {
            title: "艺术家陈述",
            content: [
                "周婧是一位毕业于格拉斯哥艺术学院的当代艺术家、时尚与纺织品设计师，同时也是ZJ STUDIO的创始人。作为中外文化交流协会、青年艺术家协会和海外青年联合会的会员，她凭借独特的跨文化背景和创意风格在当代艺术界获得了广泛关注和赞誉。",
                "她的艺术之旅始于对绘画的早期热爱，这种热爱逐渐发展成为表达生活洞察的深刻方式。在格拉斯哥艺术学院期间，她不仅磨练了时尚和纺织品设计的技术专长，还发展出创新的材料实验和艺术表达方法。沉浸在格拉斯哥充满活力的艺术氛围中，周婧培养了对色彩、形式和线条的敏锐感知，并将其无缝融入作品中，将前卫的西方概念与东方传统的精致美学相结合。",
                "在她的创作中，周婧运用多样的风格、流畅而富有表现力的线条和生动的色彩调色板，探索包括肖像、风景和抽象构图在内的广泛主题。她善于融合各种材料、主题和概念，创造出视觉冲击力强且富有哲学深度的作品。周婧的创作超越了单纯的视觉吸引力，通过文化对话反映了她对人性、社会和自然的跨文化思考。",
                "作为ZJ STUDIO的创意力量，周婧在艺术与商业之间取得了微妙的平衡。她对材料和市场的直觉理解巩固了她在国际舞台上的艺术和创业地位。周婧的创作理念源于对当代生活复杂性的敏锐意识和对人性的深入探索。她的作品通过大胆的构图、鲜艳的色彩和动态的线条，将隐藏的心理和社会维度可视化。",
                "通过她独特的方法，周婧深入探索复杂的情感状态和心理暗流，捕捉人类精神的流动性和多样性。她的艺术为内心世界提供了深刻的连接，架起了存在的有形和无形领域之间的桥梁。",
                "周婧的艺术成就已在众多展览中展示。她于2015年在伦敦新设计师展上首次亮相，作为新兴人才获得早期认可。2023年，她参加\'This Moment in China\'上海青年艺术家邀请展，进一步巩固了她在当代艺术中的地位，展示了她标志性的创作语言和跨文化视角。",
                "周婧的艺术理念深深植根于她的个人成长和跨文化经历。她以艺术为媒介，传达对生活、情感和文化融合美学和谐的思考。她的作品在形式上大胆而富有动感，同时蕴含着深刻的社会和文化叙事。周婧的艺术邀请观众不仅欣赏其视觉美学，还参与潜在的情感和哲学探索。",
                "她的创作体现了双重性：既是个人情感的外化，也是对普遍人类困境的分析。通过构建通往精神领域的桥梁，周婧使观众能够探索他们的内心世界和当代社会现实。她的艺术不仅诉诸感官，还促发反思和内省，为当代艺术领域注入新的活力。",
                "在时尚设计训练和当代艺术实践的背景下，周婧通过绘画融合情感、时尚和社会观察。她独特的方法整合了多元文化影响和设计专长，探索内心世界的流动性和社会心理的复杂性。她的作品以其美学吸引力和主题深度脱颖而出，鼓励观众反思自我和社会。",
                "在全球化的艺术语境中，周婧的创作为艺术与时尚的融合提供了新的可能性。她在当代艺术中的地位由她无缝融合这些领域的能力所定义，呈现出既具有美学意义又具有思想深度的叙事。",
                "周婧的艺术不仅仅是色彩和构图的创新，更反映了她对普遍精神挣扎的个人视角，创造出独特的叙事。她的作品植根于中国情感和精神内省的传统，同时从西方现代艺术对内心世界的关注中汲取灵感。这种融合形成了独特的个人风格，反映了对人性和社会问题的深刻洞察。",
                "她的艺术立场位于心理表现主义和当代社会艺术的交汇处。通过掌握色彩、线条和文化表达的相互作用，周婧在当代艺术中开辟了一条独特的道路。她的作品有潜力在该领域占据重要地位，继续为全球观众带来视觉冲击和思想启发。"
            ],
            download: "下载艺术家陈述",
            downloadText: "下载PDF版本"
        },

        // 媒体报道
        press: {
            title: "媒体报道",
            personalInterviews: "个人专访",
            groupExhibitions: "群展报道"
        },

        // 工作室
        studio: {
            title: "工作室",
            description: "工作室介绍..."
        },

        // 联系方式
        contact: {
            title: "联系",
            subtitle: "让我们开始对话",
            artistTitle: "艺术家",
            artistDescription: "当代艺术家 & 时尚设计师",
            emailTitle: "邮箱联系",
            emailNote: "欢迎艺术合作与展览邀请",
            socialTitle: "社交媒体",
            portfolioTitle: "作品集下载",
            portfolioText: "下载PDF版本",
            portfolioNote: "包含完整作品集和展览记录",
            formTitle: "发送消息",
            formSubtitle: "有任何问题或合作意向，请随时联系",
            locationTitle: "工作地点",
            location: "上海 & 伦敦",
            hoursTitle: "工作时间",
            hours: "周一至周五 9:00-18:00",
            languageTitle: "语言",
            languages: "中文 & English",
            ctaText: "期待与您的艺术对话",
            ctaButton: "立即联系",
            wechat: "微信二维码"
        },

        // 关于艺术家
        about: {
            statementTitle: "艺术家陈述",
            statementContent: [
                "周婧是一位毕业于格拉斯哥艺术学院的当代艺术家、时尚与纺织品设计师，同时也是ZJ STUDIO的创始人。作为中外文化交流协会、青年艺术家协会和海外青年联合会的会员，她凭借独特的跨文化背景和创意风格在当代艺术界获得了广泛关注和赞誉。",
                "她的艺术之旅始于对绘画的早期热爱，这种热爱逐渐发展成为表达生活洞察的深刻方式。在格拉斯哥艺术学院期间，她不仅磨练了时尚和纺织品设计的技术专长，还发展出创新的材料实验和艺术表达方法。沉浸在格拉斯哥充满活力的艺术氛围中，周婧培养了对色彩、形式和线条的敏锐感知，并将其无缝融入作品中，将前卫的西方概念与东方传统的精致美学相结合。",
                "在她的创作中，周婧运用多样的风格、流畅而富有表现力的线条和生动的色彩调色板，探索包括肖像、风景和抽象构图在内的广泛主题。她善于融合各种材料、主题和概念，创造出视觉冲击力强且富有哲学深度的作品。周婧的创作超越了单纯的视觉吸引力，通过文化对话反映了她对人性、社会和自然的跨文化思考。",
                "作为ZJ STUDIO的创意力量，周婧在艺术与商业之间取得了微妙的平衡。她对材料和市场的直觉理解巩固了她在国际舞台上的艺术和创业地位。周婧的创作理念源于对当代生活复杂性的敏锐意识和对人性的深入探索。她的作品通过大胆的构图、鲜艳的色彩和动态的线条，将隐藏的心理和社会维度可视化。",
                "通过她独特的方法，周婧深入探索复杂的情感状态和心理暗流，捕捉人类精神的流动性和多样性。她的艺术为内心世界提供了深刻的连接，架起了存在的有形和无形领域之间的桥梁。",
                "周婧的艺术成就已在众多展览中展示。她于2015年在伦敦新设计师展上首次亮相，作为新兴人才获得早期认可。2023年，她参加'This Moment in China'上海青年艺术家邀请展，进一步巩固了她在当代艺术中的地位，展示了她标志性的创作语言和跨文化视角。",
                "周婧的艺术理念深深植根于她的个人成长和跨文化经历。她以艺术为媒介，传达对生活、情感和文化融合美学和谐的思考。她的作品在形式上大胆而富有动感，同时蕴含着深刻的社会和文化叙事。周婧的艺术邀请观众不仅欣赏其视觉美学，还参与潜在的情感和哲学探索。",
                "她的创作体现了双重性：既是个人情感的外化，也是对普遍人类困境的分析。通过构建通往精神领域的桥梁，周婧使观众能够探索他们的内心世界和当代社会现实。她的艺术不仅诉诸感官，还促发反思和内省，为当代艺术领域注入新的活力。",
                "在时尚设计训练和当代艺术实践的背景下，周婧通过绘画融合情感、时尚和社会观察。她独特的方法整合了多元文化影响和设计专长，探索内心世界的流动性和社会心理的复杂性。她的作品以其美学吸引力和主题深度脱颖而出，鼓励观众反思自我和社会。",
                "在全球化的艺术语境中，周婧的创作为艺术与时尚的融合提供了新的可能性。她在当代艺术中的地位由她无缝融合这些领域的能力所定义，呈现出既具有美学意义又具有思想深度的叙事。",
                "周婧的艺术不仅仅是色彩和构图的创新，更反映了她对普遍精神挣扎的个人视角，创造出独特的叙事。她的作品植根于中国情感和精神内省的传统，同时从西方现代艺术对内心世界的关注中汲取灵感。这种融合形成了独特的个人风格，反映了对人性和社会问题的深刻洞察。",
                "她的艺术立场位于心理表现主义和当代社会艺术的交汇处。通过掌握色彩、线条和文化表达的相互作用，周婧在当代艺术中开辟了一条独特的道路。她的作品有潜力在该领域占据重要地位，继续为全球观众带来视觉冲击和思想启发。"
            ],
            cvTitle: "简历",
            education: {
                title: "教育背景",
                items: [
                    "格拉斯哥艺术学院 时尚与纺织品设计",
                    "中央美术学院 本科"
                ]
            },
            awards: {
                title: "专业资质",
                items: [
                    "中外文化交流协会会员",
                    "青年艺术家协会会员",
                    "海外青年联合会会员"
                ]
            },
            residencies: {
                title: "专业经历",
                items: [
                    "ZJ STUDIO 创始人",
                    "当代艺术家",
                    "时尚与纺织品设计师"
                ]
            },
            publications: {
                title: "展览经历",
                items: [
                    "2023 上海青年艺术家邀请展",
                    "2015 伦敦新设计师展"
                ]
            },
            downloadsTitle: "资料下载",
            cvDownload: "简历",
            cvDescription: "完整的教育背景和职业经历",
            statementDownload: "艺术家陈述",
            statementDescription: "详细的创作理念和艺术哲学",
            downloadText: "下载"
        },

        // 页脚
        footer: {
            copyright: "© 2025 周婧. 保留所有权利."
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            gallery: "Gallery",
            exhibitions: "Exhibitions",
            about: "About",
            press: "Press",
            studio: "Studio",
            contact: "Contact"
        },

        // Language Switch
        lang: {
            current: "中",
            switch: "切换到中文"
        },

        // Home
        home: {
            title: "ZHOU XIANG YOU XING",
            artist: "Zhou Jing",
            subtitle: "A Contemporary Artist Bridging Cultures Through Multidimensional Creativity."
        },

        // Gallery
        gallery: {
            title: "Gallery",
            subtitle: "Exploring the Dialogue Between Color and Emotion",
            artwork1: {
                title: "Inner Landscape",
                meta: "2024 • Oil on Canvas"
            },
            artwork2: {
                title: "Color Dialogue",
                meta: "2024 • Mixed Media"
            },
            artwork3: {
                title: "Abstract Expression",
                meta: "2023 • Acrylic"
            },
            artwork4: {
                title: "Emotional Flow",
                meta: "2023 • Watercolor"
            },
            artwork5: {
                title: "Cultural Fusion",
                meta: "2023 • Mixed Materials"
            },
            artwork6: {
                title: "Time Imprint",
                meta: "2022 • Oil on Canvas"
            },
            modalDescription: "Use arrow buttons or keyboard keys to browse artworks. Double-click image to enter fullscreen mode."
        },

        // Exhibitions
        exhibitions: {
            title: "Exhibitions",
            documents: "Exhibition Documents",
            noExhibitions: "No exhibitions available",
            viewDetail: "View Details",
            backToList: "Back to Exhibition List",
            timeline: "Exhibition Timeline",
            basicInfo: "Basic Information",
            exhibitionSite: "Exhibition Site",
            artworks: "Artworks",
            press: "Press Coverage",
            period: "Period",
            location: "Location",
            type: "Type",
            description: "Description",
            medium: "Medium",
            size: "Size",
            year: "Year",
            notFound: "Exhibition Not Found",
            selectFromList: "Please select an exhibition from the list to view details.",
            idNotFound: "Unable to find the specified exhibition."
        },

        // CV
        cv: {
            title: "Curriculum Vitae",
            education: {
                title: "Education",
                items: [
                    "Glasgow School of Art, Fashion and Textile Design",
                    "Central Academy of Fine Arts, BA"
                ]
            },
            awards: {
                title: "Professional Qualifications",
                items: [
                    "Member of Sino-Foreign Cultural Exchange Association",
                    "Member of Youth Artists Association",
                    "Member of Overseas Youth Federation"
                ]
            },
            residencies: {
                title: "Professional Experience",
                items: [
                    "Founder of ZJ STUDIO",
                    "Contemporary Artist",
                    "Fashion and Textile Designer"
                ]
            },
            publications: {
                title: "Exhibitions",
                items: [
                    "2023 Shanghai Young Artists Invitational Exhibition",
                    "2015 New Designers, London"
                ]
            },
            download: "Download CV",
            downloadText: "Download PDF Version"
        },

        // Artist Statement
        statement: {
            title: "Artist Statement",
            content: [
                "Jing Zhou, a graduate of the Glasgow School of Art, is a contemporary artist, fashion and textile designer, and founder of ZJ STUDIO. As a member of the Sino-Foreign Cultural Exchange Association, Youth Artists Association, and Overseas Youth Federation, Zhou has garnered significant attention and acclaim in the contemporary art world for her distinctive cross-cultural background and unique creative style.",
                "Her journey into art began with an early passion for painting, a love that evolved into a profound means of expressing her insights into life. During her time at the Glasgow School of Art, she not only honed her technical expertise in fashion and textile design but also developed an innovative approach to material experimentation and artistic expression. Immersed in Glasgow's vibrant art scene, Zhou cultivated a keen sensitivity to color, form, and line, which she seamlessly integrates into her work, combining avant-garde Western concepts with the refined aesthetic of Eastern traditions.",
                "In her creative pursuits, Zhou employs diverse styles, fluid and expressive lines, and vivid color palettes to explore a wide range of subjects, including portraits, landscapes, and abstract compositions. Her adeptness in merging varied materials, themes, and concepts results in works that are visually impactful and imbued with philosophical depth. Zhou's creations transcend mere visual appeal, engaging audiences in cultural dialogues that reflect her contemplations on humanity, society, and nature within a cross-cultural context.",
                "As the creative force behind ZJ STUDIO, Zhou strikes a delicate balance between art and commerce. Her intuitive understanding of materials and markets has solidified both her artistic and entrepreneurial presence on the international stage. Zhou's creative philosophy stems from an acute awareness of the complexities of contemporary life and a deep exploration of human nature. Her works visualize concealed psychological and societal dimensions through bold compositions, vibrant hues, and dynamic lines.",
                "Through her distinctive approach, Zhou delves into complex emotional states and psychological undercurrents, capturing the fluidity and diversity of the human spirit. Her art offers a profound connection to the inner world, bridging the tangible and intangible realms of existence.",
                "Zhou's artistic achievements have been showcased in numerous exhibitions. She made her debut in 2015 at New Designers 2015 in London, where she gained early recognition as an emerging talent. In 2023, her participation in the \'This Moment in China\'—Shanghai Young Artists Invitational Exhibition further solidified her position in contemporary art with her signature creative language and cross-cultural perspective.",
                "Jing Zhou's artistic philosophy is deeply rooted in her personal growth and cross-cultural experiences. Using art as a medium, she conveys reflections on life, emotions, and the aesthetic harmony of cultural convergence. Her works are bold and dynamic in form yet enriched with profound social and cultural narratives. Zhou's art invites viewers to not only enjoy its visual aesthetics but also engage with the underlying emotional and philosophical inquiries.",
                "Her creations embody a duality: they are both an externalization of personal emotion and an analysis of universal human dilemmas. By constructing a bridge to the spiritual realm, Zhou enables her audience to explore their inner selves and contemporary social realities. Her art doesn't merely appeal to the senses; it prompts reflection and introspection, breathing fresh vitality into the realm of contemporary art.",
                "Trained in fashion design and engaged in contemporary artistic practices, Zhou merges emotions, fashion, and societal observations through her paintings. Her unique approach integrates multicultural influences and design expertise, exploring the fluidity of inner worlds and the complexities of social psychology. Her works stand out for their aesthetic allure and thematic depth, encouraging audiences to reflect on both self and society.",
                "In the context of globalized art, Zhou's creations offer new possibilities for the convergence of art and fashion. Her position in contemporary art is defined by her ability to seamlessly fuse these domains, presenting bold narratives that resonate with both aesthetic and intellectual significance.",
                "Jing Zhou's art is more than innovation in color and composition; it reflects a personal perspective on universal spiritual struggles, crafting a narrative uniquely her own. Her works are rooted in the Chinese tradition of emotional and spiritual introspection, while drawing inspiration from Western modern art's focus on internal worlds. This synthesis results in a distinctive personal style that reflects profound insights into human nature and societal issues.",
                "Her artistic position lies at the intersection of psychological expressionism and contemporary social art. By mastering the interplay of color, line, and cultural expression, Zhou charts an individual path in contemporary art. Her work has the potential to occupy a significant place in the field, continuing to deliver both visual impact and intellectual inspiration to audiences worldwide."
            ],
            download: "Download Artist Statement",
            downloadText: "Download PDF Version"
        },

        // Exhibitions
        exhibitions: {
            title: "Exhibitions",
            documents: "Exhibition Documents",
            noExhibitions: "No exhibitions available",
            viewDetail: "View Details",
            backToList: "Back to Exhibition List",
            timeline: "Exhibition Timeline",
            basicInfo: "Basic Information",
            exhibitionSite: "Exhibition Site",
            artworks: "Artworks",
            press: "Press Coverage",
            period: "Period",
            location: "Location",
            type: "Type",
            description: "Description",
            medium: "Medium",
            size: "Size",
            year: "Year"
        },

        // Press
        press: {
            title: "Press & Reviews",
            personalInterviews: "Personal Interviews",
            groupExhibitions: "Group Exhibition Coverage"
        },

        // Studio
        studio: {
            title: "Studio",
            description: "Studio description..."
        },

        // Contact
        contact: {
            title: "Contact",
            subtitle: "Let's Start a Conversation",
            artistTitle: "Artist",
            artistDescription: "Contemporary Artist & Fashion Designer",
            emailTitle: "Email Contact",
            emailNote: "Welcome art collaborations and exhibition invitations",
            socialTitle: "Social Media",
            portfolioTitle: "Portfolio Download",
            portfolioText: "Download PDF Version",
            portfolioNote: "Includes complete portfolio and exhibition history",
            formTitle: "Send Message",
            formSubtitle: "Feel free to reach out for any questions or collaboration opportunities",
            locationTitle: "Work Location",
            location: "Shanghai & London",
            hoursTitle: "Work Hours",
            hours: "Monday - Friday 9:00-18:00",
            languageTitle: "Languages",
            languages: "Chinese & English",
            ctaText: "Looking forward to our artistic dialogue",
            ctaButton: "Contact Now",
            wechat: "WeChat QR Code"
        },

        // About
        about: {
            statementTitle: "Artist Statement",
            statementContent: [
                "Jing Zhou, a graduate of the Glasgow School of Art, is a contemporary artist, fashion and textile designer, and founder of ZJ STUDIO. As a member of the Sino-Foreign Cultural Exchange Association, Youth Artists Association, and Overseas Youth Federation, Zhou has garnered significant attention and acclaim in the contemporary art world for her distinctive cross-cultural background and unique creative style.",
                "Her journey into art began with an early passion for painting, a love that evolved into a profound means of expressing her insights into life. During her time at the Glasgow School of Art, she not only honed her technical expertise in fashion and textile design but also developed an innovative approach to material experimentation and artistic expression. Immersed in Glasgow's vibrant art scene, Zhou cultivated a keen sensitivity to color, form, and line, which she seamlessly integrates into her work, combining avant-garde Western concepts with the refined aesthetic of Eastern traditions.",
                "In her creative pursuits, Zhou employs diverse styles, fluid and expressive lines, and vivid color palettes to explore a wide range of subjects, including portraits, landscapes, and abstract compositions. Her adeptness in merging varied materials, themes, and concepts results in works that are visually impactful and imbued with philosophical depth. Zhou's creations transcend mere visual appeal, engaging audiences in cultural dialogues that reflect her contemplations on humanity, society, and nature within a cross-cultural context.",
                "As the creative force behind ZJ STUDIO, Zhou strikes a delicate balance between art and commerce. Her intuitive understanding of materials and markets has solidified both her artistic and entrepreneurial presence on the international stage. Zhou's creative philosophy stems from an acute awareness of the complexities of contemporary life and a deep exploration of human nature. Her works visualize concealed psychological and societal dimensions through bold compositions, vibrant hues, and dynamic lines.",
                "Through her distinctive approach, Zhou delves into complex emotional states and psychological undercurrents, capturing the fluidity and diversity of the human spirit. Her art offers a profound connection to the inner world, bridging the tangible and intangible realms of existence.",
                "Zhou's artistic achievements have been showcased in numerous exhibitions. She made her debut in 2015 at New Designers 2015 in London, where she gained early recognition as an emerging talent. In 2023, her participation in the 'This Moment in China'—Shanghai Young Artists Invitational Exhibition further solidified her position in contemporary art with her signature creative language and cross-cultural perspective.",
                "Jing Zhou's artistic philosophy is deeply rooted in her personal growth and cross-cultural experiences. Using art as a medium, she conveys reflections on life, emotions, and the aesthetic harmony of cultural convergence. Her works are bold and dynamic in form yet enriched with profound social and cultural narratives. Zhou's art invites viewers to not only enjoy its visual aesthetics but also engage with the underlying emotional and philosophical inquiries.",
                "Her creations embody a duality: they are both an externalization of personal emotion and an analysis of universal human dilemmas. By constructing a bridge to the spiritual realm, Zhou enables her audience to explore their inner selves and contemporary social realities. Her art doesn't merely appeal to the senses; it prompts reflection and introspection, breathing fresh vitality into the realm of contemporary art.",
                "Trained in fashion design and engaged in contemporary artistic practices, Zhou merges emotions, fashion, and societal observations through her paintings. Her unique approach integrates multicultural influences and design expertise, exploring the fluidity of inner worlds and the complexities of social psychology. Her works stand out for their aesthetic allure and thematic depth, encouraging audiences to reflect on both self and society.",
                "In the context of globalized art, Zhou's creations offer new possibilities for the convergence of art and fashion. Her position in contemporary art is defined by her ability to seamlessly fuse these domains, presenting bold narratives that resonate with both aesthetic and intellectual significance.",
                "Jing Zhou's art is more than innovation in color and composition; it reflects a personal perspective on universal spiritual struggles, crafting a narrative uniquely her own. Her works are rooted in the Chinese tradition of emotional and spiritual introspection, while drawing inspiration from Western modern art's focus on internal worlds. This synthesis results in a distinctive personal style that reflects profound insights into human nature and societal issues.",
                "Her artistic position lies at the intersection of psychological expressionism and contemporary social art. By mastering the interplay of color, line, and cultural expression, Zhou charts an individual path in contemporary art. Her work has the potential to occupy a significant place in the field, continuing to deliver both visual impact and intellectual inspiration to audiences worldwide."
            ],
            cvTitle: "Curriculum Vitae",
            education: {
                title: "Education",
                items: [
                    "Glasgow School of Art, Fashion and Textile Design",
                    "Central Academy of Fine Arts, BA"
                ]
            },
            awards: {
                title: "Professional Qualifications",
                items: [
                    "Member of Sino-Foreign Cultural Exchange Association",
                    "Member of Youth Artists Association",
                    "Member of Overseas Youth Federation"
                ]
            },
            residencies: {
                title: "Professional Experience",
                items: [
                    "Founder of ZJ STUDIO",
                    "Contemporary Artist",
                    "Fashion and Textile Designer"
                ]
            },
            publications: {
                title: "Exhibitions",
                items: [
                    "2023 Shanghai Young Artists Invitational Exhibition",
                    "2015 New Designers, London"
                ]
            },
            downloadsTitle: "Downloads",
            cvDownload: "Curriculum Vitae",
            cvDescription: "Complete educational background and professional experience",
            statementDownload: "Artist Statement",
            statementDescription: "Detailed creative philosophy and artistic vision",
            downloadText: "Download"
        },

        // Footer
        footer: {
            copyright: "© 2025 Zhou Jing. All rights reserved."
        }
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'zh';
        this.translations = {
            zh: {
                nav: {
                    home: '首页',
                    gallery: '作品集',
                    exhibitions: '展览',
                    about: '关于艺术家',
                    press: '媒体报道',
                    studio: '工作室',
                    contact: '联系'
                },
                lang: {
                    current: 'EN',
                    switch: 'Switch to English'
                },
                home: {
                    title: '周祥攸兴',
                    artist: '周婧',
                    subtitle: '一位通过多维创造力连接文化的当代艺术家。'
                },
                gallery: {
                    title: '作品集',
                    subtitle: '探索色彩与情感的对话',
                    artwork1: {
                        title: '内心景象',
                        meta: '2024 • 布面油画'
                    },
                    artwork2: {
                        title: '色彩对话', 
                        meta: '2024 • 混合媒材'
                    },
                    artwork3: {
                        title: '抽象表达',
                        meta: '2023 • 丙烯画'
                    },
                    artwork4: {
                        title: '情感流动',
                        meta: '2023 • 水彩画'
                    },
                    artwork5: {
                        title: '文化融合',
                        meta: '2023 • 综合材料'
                    },
                    artwork6: {
                        title: '时间印记',
                        meta: '2022 • 布面油画'
                    },
                    modalDescription: '使用左右箭头或键盘方向键浏览作品，双击图片可进入全屏模式。'
                },
                exhibitions: {
                    title: '展览',
                    documents: '展览文档',
                    noExhibitions: '暂无展览信息',
                    viewDetail: '查看详情',
                    backToList: '返回展览列表',
                    timeline: '展览时间线',
                    basicInfo: '基本信息',
                    exhibitionSite: '展览现场',
                    artworks: '参展作品',
                    press: '媒体报道',
                    period: '展期',
                    location: '地点',
                    type: '类型',
                    description: '简介',
                    medium: '媒材',
                    size: '尺寸',
                    year: '年份',
                    notFound: '展览未找到',
                    selectFromList: '请从展览列表中选择一个展览查看详情。',
                    idNotFound: '无法找到指定的展览。'
                },
                cv: {
                    title: '简历',
                    education: {
                        title: '教育背景',
                        items: [
                            '格拉斯哥艺术学院 时尚与纺织品设计',
                            '中央美术学院 本科'
                        ]
                    },
                    awards: {
                        title: '专业资质',
                        items: [
                            '中外文化交流协会会员',
                            '青年艺术家协会会员',
                            '海外青年联合会会员'
                        ]
                    },
                    residencies: {
                        title: '专业经历',
                        items: [
                            'ZJ STUDIO 创始人',
                            '当代艺术家',
                            '时尚与纺织品设计师'
                        ]
                    },
                    publications: {
                        title: '展览经历',
                        items: [
                            '2023 上海青年艺术家邀请展',
                            '2015 伦敦新设计师展'
                        ]
                    },
                    download: '下载简历',
                    downloadText: '下载PDF版本'
                },
                press: {
                    title: '媒体报道',
                    personalInterviews: '个人专访',
                    groupExhibitions: '群展报道'
                },
                studio: {
                    title: '工作室',
                    description: '工作室介绍...'
                },
                about: {
                    statementTitle: '艺术家陈述',
                    statementContent: [
                        '周婧是一位毕业于格拉斯哥艺术学院的当代艺术家、时尚与纺织品设计师，同时也是ZJ STUDIO的创始人。作为中外文化交流协会、青年艺术家协会和海外青年联合会的会员，她凭借独特的跨文化背景和创意风格在当代艺术界获得了广泛关注和赞誉。',
                        '她的艺术之旅始于对绘画的早期热爱，这种热爱逐渐发展成为表达生活洞察的深刻方式。在格拉斯哥艺术学院期间，她不仅磨练了时尚和纺织品设计的技术专长，还发展出创新的材料实验和艺术表达方法。沉浸在格拉斯哥充满活力的艺术氛围中，周婧培养了对色彩、形式和线条的敏锐感知，并将其无缝融入作品中，将前卫的西方概念与东方传统的精致美学相结合。',
                        '在她的创作中，周婧运用多样的风格、流畅而富有表现力的线条和生动的色彩调色板，探索包括肖像、风景和抽象构图在内的广泛主题。她善于融合各种材料、主题和概念，创造出视觉冲击力强且富有哲学深度的作品。周婧的创作超越了单纯的视觉吸引力，通过文化对话反映了她对人性、社会和自然的跨文化思考。',
                        '作为ZJ STUDIO的创意力量，周婧在艺术与商业之间取得了微妙的平衡。她对材料和市场的直觉理解巩固了她在国际舞台上的艺术和创业地位。周婧的创作理念源于对当代生活复杂性的敏锐意识和对人性的深入探索。她的作品通过大胆的构图、鲜艳的色彩和动态的线条，将隐藏的心理和社会维度可视化。',
                        '通过她独特的方法，周婧深入探索复杂的情感状态和心理暗流，捕捉人类精神的流动性和多样性。她的艺术为内心世界提供了深刻的连接，架起了存在的有形和无形领域之间的桥梁。',
                        '周婧的艺术成就已在众多展览中展示。她于2015年在伦敦新设计师展上首次亮相，作为新兴人才获得早期认可。2023年，她参加\'This Moment in China\'上海青年艺术家邀请展，进一步巩固了她在当代艺术中的地位，展示了她标志性的创作语言和跨文化视角。',
                        '周婧的艺术理念深深植根于她的个人成长和跨文化经历。她以艺术为媒介，传达对生活、情感和文化融合美学和谐的思考。她的作品在形式上大胆而富有动感，同时蕴含着深刻的社会和文化叙事。周婧的艺术邀请观众不仅欣赏其视觉美学，还参与潜在的情感和哲学探索。',
                        '她的创作体现了双重性：既是个人情感的外化，也是对普遍人类困境的分析。通过构建通往精神领域的桥梁，周婧使观众能够探索他们的内心世界和当代社会现实。她的艺术不仅诉诸感官，还促发反思和内省，为当代艺术领域注入新的活力。',
                        '在时尚设计训练和当代艺术实践的背景下，周婧通过绘画融合情感、时尚和社会观察。她独特的方法整合了多元文化影响和设计专长，探索内心世界的流动性和社会心理的复杂性。她的作品以其美学吸引力和主题深度脱颖而出，鼓励观众反思自我和社会。',
                        '在全球化的艺术语境中，周婧的创作为艺术与时尚的融合提供了新的可能性。她在当代艺术中的地位由她无缝融合这些领域的能力所定义，呈现出既具有美学意义又具有思想深度的叙事。',
                        '周婧的艺术不仅仅是色彩和构图的创新，更反映了她对普遍精神挣扎的个人视角，创造出独特的叙事。她的作品植根于中国情感和精神内省的传统，同时从西方现代艺术对内心世界的关注中汲取灵感。这种融合形成了独特的个人风格，反映了对人性和社会问题的深刻洞察。',
                        '她的艺术立场位于心理表现主义和当代社会艺术的交汇处。通过掌握色彩、线条和文化表达的相互作用，周婧在当代艺术中开辟了一条独特的道路。她的作品有潜力在该领域占据重要地位，继续为全球观众带来视觉冲击和思想启发。'
                    ],
                    cvTitle: '简历',
                    education: {
                        title: '教育背景',
                        items: [
                            '格拉斯哥艺术学院 时尚与纺织品设计',
                            '中央美术学院 本科'
                        ]
                    },
                    awards: {
                        title: '专业资质',
                        items: [
                            '中外文化交流协会会员',
                            '青年艺术家协会会员',
                            '海外青年联合会会员'
                        ]
                    },
                    residencies: {
                        title: '专业经历',
                        items: [
                            'ZJ STUDIO 创始人',
                            '当代艺术家',
                            '时尚与纺织品设计师'
                        ]
                    },
                    publications: {
                        title: '展览经历',
                        items: [
                            '2023 上海青年艺术家邀请展',
                            '2015 伦敦新设计师展'
                        ]
                    },
                    downloadsTitle: '资料下载',
                    cvDownload: '简历',
                    cvDescription: '完整的教育背景和职业经历',
                    statementDownload: '艺术家陈述',
                    statementDescription: '详细的创作理念和艺术哲学',
                    downloadText: '下载'
                },
                contact: {
                    title: '联系',
                    subtitle: '让我们开始对话',
                    artistTitle: '艺术家',
                    artistDescription: '当代艺术家 & 时尚设计师',
                    emailTitle: '邮箱联系',
                    emailNote: '欢迎艺术合作与展览邀请',
                    socialTitle: '社交媒体',
                    portfolioTitle: '作品集下载',
                    portfolioText: '下载PDF版本',
                    portfolioNote: '包含完整作品集和展览记录',
                    formTitle: '发送消息',
                    formSubtitle: '有任何问题或合作意向，请随时联系',
                    locationTitle: '工作地点',
                    location: '上海 & 伦敦',
                    hoursTitle: '工作时间',
                    hours: '周一至周五 9:00-18:00',
                    languageTitle: '语言',
                    languages: '中文 & English',
                    ctaText: '期待与您的艺术对话',
                    ctaButton: '立即联系',
                    wechat: '微信二维码'
                },
                footer: {
                    copyright: '© 2025 周婧. 保留所有权利.'
                }
            },
            en: {
                nav: {
                    home: 'Home',
                    gallery: 'Gallery',
                    exhibitions: 'Exhibitions',
                    about: 'About',
                    press: 'Press',
                    studio: 'Studio',
                    contact: 'Contact'
                },
                lang: {
                    current: '中',
                    switch: '切换到中文'
                },
                home: {
                    title: 'ZHOU XIANG YOU XING',
                    artist: 'Zhou Jing',
                    subtitle: 'A Contemporary Artist Bridging Cultures Through Multidimensional Creativity.'
                },
                gallery: {
                    title: 'Gallery',
                    subtitle: 'Exploring the Dialogue Between Color and Emotion',
                    artwork1: {
                        title: 'Inner Landscape',
                        meta: '2024 • Oil on Canvas'
                    },
                    artwork2: {
                        title: 'Color Dialogue',
                        meta: '2024 • Mixed Media'
                    },
                    artwork3: {
                        title: 'Abstract Expression',
                        meta: '2023 • Acrylic'
                    },
                    artwork4: {
                        title: 'Emotional Flow',
                        meta: '2023 • Watercolor'
                    },
                    artwork5: {
                        title: 'Cultural Fusion',
                        meta: '2023 • Mixed Materials'
                    },
                    artwork6: {
                        title: 'Time Imprint',
                        meta: '2022 • Oil on Canvas'
                    },
                    modalDescription: 'Use arrow buttons or keyboard keys to browse artworks. Double-click image to enter fullscreen mode.'
                },
                exhibitions: {
                    title: 'Exhibitions',
                    documents: 'Exhibition Documents',
                    noExhibitions: 'No exhibitions available',
                    viewDetail: 'View Details',
                    backToList: 'Back to Exhibition List',
                    timeline: 'Exhibition Timeline',
                    basicInfo: 'Basic Information',
                    exhibitionSite: 'Exhibition Site',
                    artworks: 'Artworks',
                    press: 'Press Coverage',
                    period: 'Period',
                    location: 'Location',
                    type: 'Type',
                    description: 'Description',
                    medium: 'Medium',
                    size: 'Size',
                    year: 'Year',
                    notFound: 'Exhibition Not Found',
                    selectFromList: 'Please select an exhibition from the list to view details.',
                    idNotFound: 'Unable to find the specified exhibition.'
                },
                cv: {
                    title: 'Curriculum Vitae',
                    education: {
                        title: 'Education',
                        items: [
                            'Glasgow School of Art, Fashion and Textile Design',
                            'Central Academy of Fine Arts, BA'
                        ]
                    },
                    awards: {
                        title: 'Professional Qualifications',
                        items: [
                            'Member of Sino-Foreign Cultural Exchange Association',
                            'Member of Youth Artists Association',
                            'Member of Overseas Youth Federation'
                        ]
                    },
                    residencies: {
                        title: 'Professional Experience',
                        items: [
                            'Founder of ZJ STUDIO',
                            'Contemporary Artist',
                            'Fashion and Textile Designer'
                        ]
                    },
                    publications: {
                        title: 'Exhibitions',
                        items: [
                            '2023 Shanghai Young Artists Invitational Exhibition',
                            '2015 New Designers, London'
                        ]
                    },
                    download: 'Download CV',
                    downloadText: 'Download PDF Version'
                },
                press: {
                    title: 'Press & Reviews',
                    personalInterviews: 'Personal Interviews',
                    groupExhibitions: 'Group Exhibition Coverage'
                },
                about: {
                    statementTitle: 'Artist Statement',
                    statementContent: [
                        'Jing Zhou, a graduate of the Glasgow School of Art, is a contemporary artist, fashion and textile designer, and founder of ZJ STUDIO. As a member of the Sino-Foreign Cultural Exchange Association, Youth Artists Association, and Overseas Youth Federation, Zhou has garnered significant attention and acclaim in the contemporary art world for her distinctive cross-cultural background and unique creative style.',
                        'Her journey into art began with an early passion for painting, a love that evolved into a profound means of expressing her insights into life. During her time at the Glasgow School of Art, she not only honed her technical expertise in fashion and textile design but also developed an innovative approach to material experimentation and artistic expression. Immersed in Glasgow\'s vibrant art scene, Zhou cultivated a keen sensitivity to color, form, and line, which she seamlessly integrates into her work, combining avant-garde Western concepts with the refined aesthetic of Eastern traditions.',
                        'In her creative pursuits, Zhou employs diverse styles, fluid and expressive lines, and vivid color palettes to explore a wide range of subjects, including portraits, landscapes, and abstract compositions. Her adeptness in merging varied materials, themes, and concepts results in works that are visually impactful and imbued with philosophical depth. Zhou\'s creations transcend mere visual appeal, engaging audiences in cultural dialogues that reflect her contemplations on humanity, society, and nature within a cross-cultural context.',
                        'As the creative force behind ZJ STUDIO, Zhou strikes a delicate balance between art and commerce. Her intuitive understanding of materials and markets has solidified both her artistic and entrepreneurial presence on the international stage. Zhou\'s creative philosophy stems from an acute awareness of the complexities of contemporary life and a deep exploration of human nature. Her works visualize concealed psychological and societal dimensions through bold compositions, vibrant hues, and dynamic lines.',
                        'Through her distinctive approach, Zhou delves into complex emotional states and psychological undercurrents, capturing the fluidity and diversity of the human spirit. Her art offers a profound connection to the inner world, bridging the tangible and intangible realms of existence.',
                        'Zhou\'s artistic achievements have been showcased in numerous exhibitions. She made her debut in 2015 at New Designers 2015 in London, where she gained early recognition as an emerging talent. In 2023, her participation in the \'This Moment in China\'—Shanghai Young Artists Invitational Exhibition further solidified her position in contemporary art with her signature creative language and cross-cultural perspective.',
                        'Jing Zhou\'s artistic philosophy is deeply rooted in her personal growth and cross-cultural experiences. Using art as a medium, she conveys reflections on life, emotions, and the aesthetic harmony of cultural convergence. Her works are bold and dynamic in form yet enriched with profound social and cultural narratives. Zhou\'s art invites viewers to not only enjoy its visual aesthetics but also engage with the underlying emotional and philosophical inquiries.',
                        'Her creations embody a duality: they are both an externalization of personal emotion and an analysis of universal human dilemmas. By constructing a bridge to the spiritual realm, Zhou enables her audience to explore their inner selves and contemporary social realities. Her art doesn\'t merely appeal to the senses; it prompts reflection and introspection, breathing fresh vitality into the realm of contemporary art.',
                        'Trained in fashion design and engaged in contemporary artistic practices, Zhou merges emotions, fashion, and societal observations through her paintings. Her unique approach integrates multicultural influences and design expertise, exploring the fluidity of inner worlds and the complexities of social psychology. Her works stand out for their aesthetic allure and thematic depth, encouraging audiences to reflect on both self and society.',
                        'In the context of globalized art, Zhou\'s creations offer new possibilities for the convergence of art and fashion. Her position in contemporary art is defined by her ability to seamlessly fuse these domains, presenting bold narratives that resonate with both aesthetic and intellectual significance.',
                        'Jing Zhou\'s art is more than innovation in color and composition; it reflects a personal perspective on universal spiritual struggles, crafting a narrative uniquely her own. Her works are rooted in the Chinese tradition of emotional and spiritual introspection, while drawing inspiration from Western modern art\'s focus on internal worlds. This synthesis results in a distinctive personal style that reflects profound insights into human nature and societal issues.',
                        'Her artistic position lies at the intersection of psychological expressionism and contemporary social art. By mastering the interplay of color, line, and cultural expression, Zhou charts an individual path in contemporary art. Her work has the potential to occupy a significant place in the field, continuing to deliver both visual impact and intellectual inspiration to audiences worldwide.'
                    ],
                    cvTitle: 'Curriculum Vitae',
                    education: {
                        title: 'Education',
                        items: [
                            'Glasgow School of Art, Fashion and Textile Design',
                            'Central Academy of Fine Arts, BA'
                        ]
                    },
                    awards: {
                        title: 'Professional Qualifications',
                        items: [
                            'Member of Sino-Foreign Cultural Exchange Association',
                            'Member of Youth Artists Association',
                            'Member of Overseas Youth Federation'
                        ]
                    },
                    residencies: {
                        title: 'Professional Experience',
                        items: [
                            'Founder of ZJ STUDIO',
                            'Contemporary Artist',
                            'Fashion and Textile Designer'
                        ]
                    },
                    publications: {
                        title: 'Exhibitions',
                        items: [
                            '2023 Shanghai Young Artists Invitational Exhibition',
                            '2015 New Designers, London'
                        ]
                    },
                    downloadsTitle: 'Downloads',
                    cvDownload: 'Curriculum Vitae',
                    cvDescription: 'Complete educational background and professional experience',
                    statementDownload: 'Artist Statement',
                    statementDescription: 'Detailed creative philosophy and artistic vision',
                    downloadText: 'Download'
                },
                studio: {
                    title: 'Studio',
                    description: 'Studio description...'
                },
                contact: {
                    title: 'Contact',
                    subtitle: 'Let\'s Start a Conversation',
                    artistTitle: 'Artist',
                    artistDescription: 'Contemporary Artist & Fashion Designer',
                    emailTitle: 'Email Contact',
                    emailNote: 'Welcome art collaborations and exhibition invitations',
                    socialTitle: 'Social Media',
                    portfolioTitle: 'Portfolio Download',
                    portfolioText: 'Download PDF Version',
                    portfolioNote: 'Includes complete portfolio and exhibition history',
                    formTitle: 'Send Message',
                    formSubtitle: 'Feel free to reach out for any questions or collaboration opportunities',
                    locationTitle: 'Work Location',
                    location: 'Shanghai & London',
                    hoursTitle: 'Work Hours',
                    hours: 'Monday - Friday 9:00-18:00',
                    languageTitle: 'Languages',
                    languages: 'Chinese & English',
                    ctaText: 'Looking forward to our artistic dialogue',
                    ctaButton: 'Contact Now',
                    wechat: 'WeChat QR Code'
                },
                footer: {
                    copyright: '© 2025 Zhou Jing. All rights reserved.'
                }
            }
        };
    }

    init() {
        // 设置初始语言
        document.documentElement.lang = this.currentLang;
        this.updateContent();

        // 添加语言切换按钮事件监听
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
        // 保存语言选择到localStorage
        localStorage.setItem('preferredLanguage', this.currentLang);
        document.documentElement.lang = this.currentLang;
        this.updateContent();
        
        // 触发语言变化事件
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLang }
        }));
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key}`);
                return key;
            }
        }

        return value;
    }

    updateContent() {
        // 更新所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (Array.isArray(translation)) {
                if (element.classList.contains('cv-items')) {
                    // 处理CV项目列表
                    element.innerHTML = translation.map(item =>
                        `<div class="cv-item">${item}</div>`
                    ).join('');
                } else {
                    // 处理其他数组类型的内容
                    element.innerHTML = translation.map(item =>
                        `<p>${item}</p>`
                    ).join('');
                }
            } else {
                element.textContent = translation;
            }
        });

        // 更新所有带有data-i18n-text属性的元素（用于按钮文本等）
        document.querySelectorAll('[data-i18n-text]').forEach(element => {
            const key = element.getAttribute('data-i18n-text');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // 更新所有带有data-i18n-alt属性的图片
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = this.getTranslation(key);
            if (translation) {
                element.alt = translation;
            }
        });

        // 更新语言切换按钮文本
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = this.currentLang === 'zh' ? 'EN' : '中';
        }
    }
}

// 等待DOM加载完成后再初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    window.languageManager.init();
}); 