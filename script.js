// 主题切换功能
document.getElementById('scroll-down').addEventListener('click', function() {
  const featuresSection = document.querySelector('.features');
  featuresSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到features部分
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme'); // 获取当前主题
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'; // 切换主题
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // 保存主题到本地存储
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  html.setAttribute('data-theme', 'dark'); // 根据系统主题设置默认主题
}

// 动画效果：功能卡片滚动时显示
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'; // 显示卡片
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

featureCards.forEach(card => {
  card.style.opacity = '0'; // 初始隐藏
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// 模态框相关函数
function openModal(downloadUrl, section) {
  document.getElementById('password-modal').style.display = 'block'; // 显示模态框
  document.getElementById('password-input').value = ''; // 清空输入框
  document.getElementById('download-url').value = downloadUrl; // 设置下载链接
  document.getElementById('password-modal').setAttribute('data-section', section); // 设置区域标识
}

function closeModal() {
  document.getElementById('password-modal').style.display = 'none'; // 关闭模态框
}

function verifyPassword() {
  const downloadUrl = document.getElementById('download-url').value;
  const userPassword = document.getElementById('password-input').value;
  const section = document.getElementById('password-modal').getAttribute('data-section'); // 获取区域标识

  // 根据区域生成不同的密码
  const today = new Date();
  const month = today.getMonth() + 1; // 获取月份（从0开始）
  const day = today.getDate();

  // 格式化月份和日期，确保两位数
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  // 生成密码
  let password;
  if (section === 'software') {
    password = parseInt(formattedMonth + formattedDay) + 1; // 仓库区密码
  } else if (section === 'function') {
    password = parseInt(formattedMonth + formattedDay) + 11; // 功能区密码
  } else {
    alert("未知区域！");
    return;
  }

  // 验证密码
  if (parseInt(userPassword) === password) {
    window.location.href = downloadUrl; // 如果正确，跳转到下载链接
  } else {
    alert("密码错误，请重新输入！"); // 如果错误，提示用户
  }
}

// 为下载按钮添加事件监听
document.querySelectorAll('.download-button').forEach(button => {
  button.addEventListener('click', function() {
    const downloadUrl = this.getAttribute('data-download-url');
    const section = this.getAttribute('data-section'); // 获取区域标识
    openModal(downloadUrl, section); // 点击下载按钮时打开模态框
  });
});
