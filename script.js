// 控制台输出欢迎信息
console.log("欢迎来到我的个人网站！");

// 点击导航项时添加动画效果
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`即将跳转到: ${e.target.textContent}`);
        // 实际跳转（去掉注释生效）
        // window.location.href = e.target.href;
    });
});