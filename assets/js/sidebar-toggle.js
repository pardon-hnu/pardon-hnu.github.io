const sidebar = document.getElementById('sidebar');

// 鼠标进入侧边栏时显示侧边栏
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.remove('hidden');
});

// 鼠标移出侧边栏时隐藏侧边栏
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.add('hidden');
});