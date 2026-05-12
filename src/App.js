import { useState, useEffect } from 'react';
import './App.css';
import { getArticles } from './api';
import Calendar from './Calendar';

function Header({ onMenuToggle, showMenuButton }) {
  return (
    <header className="header">
      <div className="header-content">
        {showMenuButton && (
          <button className="menu-toggle" onClick={onMenuToggle} aria-label="切换菜单">
            ☰
          </button>
        )}
        <h1>我的博客</h1>
        <p className="header-subtitle">分享技术与生活的点滴</p>
      </div>
    </header>
  );
}

function Sidebar({ articles, activeId, onSelectArticle, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>文章分类</h3>
        </div>
        <nav className="sidebar-nav">
          {articles.map((article) => (
            <button
              key={article.id}
              className={`nav-item ${activeId === article.id ? 'active' : ''}`}
              onClick={() => {
                onSelectArticle(article.id);
                onClose();
              }}
            >
              {article.title}
            </button>
          ))}
        </nav>
        <div className="sidebar-calendar">
          <Calendar />
        </div>
      </aside>
    </>
  );
}

function ArticleContent({ article }) {
  return (
    <article className="article-content">
      <div className="article-header">
        <h2>{article.title}</h2>
        <div className="article-meta">
          <span className="article-date">{article.date}</span>
          <span className="article-category">{article.category}</span>
        </div>
      </div>
      <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}

function App() {
  const [articles, setArticles] = useState([]);
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await getArticles();
        if (response.code === 200) {
          setArticles(response.data);
          setActiveArticleId(response.data[0]?.id);
        } else {
          setError('获取文章列表失败');
        }
      } catch (err) {
        setError('网络错误，请稍后重试');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const activeArticle = articles.find((a) => a.id === activeArticleId);

  return (
    <div className="App">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} showMenuButton={isMobile} />
      <div className="main-container">
        <Sidebar
          articles={articles}
          activeId={activeArticleId}
          onSelectArticle={setActiveArticleId}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="content">
          {loading && <div className="loading">加载中...</div>}
          {error && <div className="error">{error}</div>}
          {!loading && activeArticle && <ArticleContent article={activeArticle} />}
          {!loading && !activeArticle && articles.length === 0 && (
            <div className="no-data">暂无文章</div>
          )}
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 我的博客. 保留所有权利。</p>
      </footer>
    </div>
  );
}

export default App;
