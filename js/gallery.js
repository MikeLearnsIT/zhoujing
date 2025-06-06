document.addEventListener('DOMContentLoaded', function () {
    // 获取模态框元素
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');

    // 为所有图片添加点击事件
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function () {
            modal.classList.add('show');
            modalImg.src = this.src;
            modalCaption.textContent = this.alt;
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
    });

    // 关闭模态框的函数
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    }

    // 点击关闭按钮关闭模态框
    closeBtn.addEventListener('click', closeModal);

    // 点击模态框背景关闭模态框
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 添加键盘事件支持
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // 添加图片加载动画
    modalImg.addEventListener('load', function () {
        this.style.opacity = '1';
    });

    // 添加图片预加载
    document.querySelectorAll('.gallery-item img').forEach(img => {
        const preloadImg = new Image();
        preloadImg.src = img.src;
    });
}); 