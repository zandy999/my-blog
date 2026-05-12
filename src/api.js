export const getArticles = async () => {
  return {
    code: 200,
    data: [
      {
        id: 1,
        title: 'React 入门指南',
        category: '技术',
        date: '2024-05-10',
        content: 'React 是一个用于构建用户界面的 JavaScript 库。本文将介绍 React 的基本概念和使用方法。'
      },
      {
        id: 2,
        title: 'JavaScript 异步编程',
        category: '技术',
        date: '2024-05-09',
        content: 'JavaScript 中的异步编程是一个重要的概念。我们将学习 Promise、async/await 等异步处理方法。'
      },
      {
        id: 3,
        title: '我的学习之旅',
        category: '生活',
        date: '2024-05-08',
        content: '分享我在学习编程过程中的经验和心得。'
      }
    ]
  };
};
