// 展览数据
const exhibitions = [
    {
        year: 2025,
        items: [
            {
                date: "2025.03",
                title: "展览标题1",
                location: "展览地点1",
                type: "个展",
                description: "展览描述1",
                images: [
                    {
                        url: "images/exhibitions/exhibition1_1.jpg",
                        alt: "展览图片1-1"
                    },
                    {
                        url: "images/exhibitions/exhibition1_2.jpg",
                        alt: "展览图片1-2"
                    }
                ],
                documents: [
                    {
                        title: "展览邀请函",
                        url: "assets/exhibitions/invitation1.pdf"
                    },
                    {
                        title: "展览画册",
                        url: "assets/exhibitions/catalog1.pdf"
                    }
                ]
            },
            {
                date: "2025.01",
                title: "展览标题2",
                location: "展览地点2",
                type: "群展",
                description: "展览描述2",
                images: [
                    {
                        url: "images/exhibitions/exhibition2_1.jpg",
                        alt: "展览图片2-1"
                    }
                ],
                documents: [
                    {
                        title: "展览邀请函",
                        url: "assets/exhibitions/invitation2.pdf"
                    }
                ]
            }
        ]
    },
    {
        year: 2023,
        items: [
            {
                date: "2023.12",
                title: "展览标题3",
                location: "展览地点3",
                type: "个展",
                description: "展览描述3",
                images: [
                    {
                        url: "images/exhibitions/exhibition3_1.jpg",
                        alt: "展览图片3-1"
                    }
                ],
                documents: []
            }
        ]
    }
];

// 初始化展览时间线
function initExhibitions() {
    const timelineContainer = document.querySelector('.exhibitions-timeline');
    const documentsContainer = document.querySelector('.documents-grid');

    if (!timelineContainer || !documentsContainer) return;

    // 清空容器
    timelineContainer.innerHTML = '';
    documentsContainer.innerHTML = '';

    // 按年份分组显示展览
    exhibitions.forEach(yearGroup => {
        const yearSection = document.createElement('div');
        yearSection.className = 'exhibition-year';

        const yearHeading = document.createElement('h3');
        yearHeading.textContent = yearGroup.year;
        yearSection.appendChild(yearHeading);

        // 创建该年份的展览列表
        const exhibitionsList = document.createElement('div');
        exhibitionsList.className = 'exhibitions-list';

        yearGroup.items.forEach(exhibition => {
            const exhibitionItem = document.createElement('div');
            exhibitionItem.className = 'exhibition-item';

            // 展览基本信息
            exhibitionItem.innerHTML = `
                <div class="exhibition-date">${exhibition.date}</div>
                <div class="exhibition-title">${exhibition.title}</div>
                <div class="exhibition-location">${exhibition.location}</div>
                <div class="exhibition-type">${exhibition.type}</div>
                <div class="exhibition-description">${exhibition.description}</div>
            `;

            // 如果有图片，添加图片网格
            if (exhibition.images && exhibition.images.length > 0) {
                const imagesGrid = document.createElement('div');
                imagesGrid.className = 'exhibition-images';

                exhibition.images.forEach(image => {
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'exhibition-image';

                    const img = document.createElement('img');
                    img.src = image.url;
                    img.alt = image.alt;
                    img.onclick = () => showImageModal(image.url, image.alt);

                    imgContainer.appendChild(img);
                    imagesGrid.appendChild(imgContainer);
                });

                exhibitionItem.appendChild(imagesGrid);
            }

            exhibitionsList.appendChild(exhibitionItem);
        });

        yearSection.appendChild(exhibitionsList);
        timelineContainer.appendChild(yearSection);

        // 收集所有文档
        yearGroup.items.forEach(exhibition => {
            if (exhibition.documents && exhibition.documents.length > 0) {
                exhibition.documents.forEach(doc => {
                    const docItem = document.createElement('div');
                    docItem.className = 'document-item';
                    docItem.innerHTML = `
                        <a href="${doc.url}" class="document-link" target="_blank">
                            <i class="fas fa-file-pdf"></i>
                            <span>${doc.title}</span>
                        </a>
                    `;
                    documentsContainer.appendChild(docItem);
                });
            }
        });
    });
}

// 显示图片模态框
function showImageModal(imageUrl, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');

    modal.style.display = "block";
    modalImg.src = imageUrl;
    caption.textContent = imageAlt;
}

// 关闭模态框
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // 初始化展览
    initExhibitions();
}); 