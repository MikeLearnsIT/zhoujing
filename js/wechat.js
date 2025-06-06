document.addEventListener('DOMContentLoaded', function () {
    const wechatLink = document.querySelector('.social-link i.fa-weixin').parentElement;
    const wechatModal = document.getElementById('wechatModal');
    const closeBtn = wechatModal.querySelector('.modal-close');

    // 点击微信图标显示二维码
    wechatLink.addEventListener('click', function (e) {
        e.preventDefault();
        wechatModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    });

    // 点击关闭按钮关闭模态框
    closeBtn.addEventListener('click', function () {
        wechatModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 点击模态框外部关闭
    wechatModal.addEventListener('click', function (e) {
        if (e.target === wechatModal) {
            wechatModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 按ESC键关闭模态框
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && wechatModal.style.display === 'flex') {
            wechatModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 