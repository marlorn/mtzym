// 检测浏览器是否支持暗模式
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 应用相应的样式表
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}
