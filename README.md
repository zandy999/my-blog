# 我的博客 - React Blog

一个现代化的 React 博客应用，具有响应式设计和优雅的用户界面。

## 🌟 功能特性

- **博客布局**：上中下三层结构设计
  - Header：展示博客标题和副标题
  - Main：左侧导航菜单，右侧文章内容
  - Footer：页脚信息
  
- **日历组件**：可交互的月度日历
  - 支持月份切换
  - 高亮显示当前日期
  - 响应式设计

- **文章管理**：基于接口的文章数据
  - 文章列表导航
  - 文章详情展示
  - 分类标签

## 🚀 快速开始

### 环境要求
- Node.js >= 14.0
- npm >= 6.0

### 安装和运行

\`\`\`bash
npm install
npm start
npm run build  # 生产构建
\`\`\`

访问 http://localhost:3000

## 📁 项目结构

\`\`\`
src/
├── App.js              # 主应用组件
├── App.css             # 应用样式
├── Calendar.js         # 日历组件
├── Calendar.css        # 日历样式
├── api.js              # 接口模拟
└── index.js            # 应用入口
\`\`\`

## 🔌 接口模拟

所有数据接口定义在 \`src/api.js\`，支持快速与后端联调。

## 🌐 GitHub Pages 部署步骤

1. 创建 GitHub 仓库：my-blog
2. 在本地运行：
   \`\`\`bash
   git remote add origin https://github.com/zandy666/my-blog.git
   git branch -M main
   git push -u origin main
   \`\`\`

3. 在仓库 Settings > Pages 中：
   - Source: Deploy from a branch
   - Branch: main / (root)
   - 点击 Save

4. 首次部署，运行：
   \`\`\`bash
   npm run build
   git add build/
   git commit -m "deploy: initial build"
   git push
   \`\`\`

GitHub Pages 会自动部署 \`build\` 文件夹。

## 📝 许可证

MIT License

---

**作者**: [@zandy666](https://github.com/zandy666)
