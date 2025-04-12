/* ===== Base Styles ===== */
:root {
  --primary-color: #4361ee;
  --secondary-color: #3f37c9;
  --text-color: #2b2d42;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

[data-theme="dark"] {
  --primary-color: #4895ef;
  --secondary-color: #4361ee;
  --text-color: #f8f9fa;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  line-height: 1.6;
  transition: var(--transition);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== Header ===== */
.site-header {
  padding: 1rem 0;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  background-color: var(--card-bg);
  z-index: 100;
}

.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.main-nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.main-nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  position: relative;
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: var(--transition);
}

.main-nav a:hover::after {
  width: 100%;
}

#theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
}

/* ===== Hero Section ===== */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 80vh;
  gap: 2rem;
}

.hero-content h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(67, 97, 238, 0.4);
}

.hero-image {
  position: relative;
  height: 100%;
}

.floating-shape {
  position: absolute;
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float 8s ease-in-out infinite;
  filter: blur(60px);
  opacity: 0.3;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    transform: translate(50px, -50px) rotate(10deg);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    transform: translate(0, -100px) rotate(0deg);
    border-radius: 70% 30% 50% 50% / 30% 70% 30% 70%;
  }
  75% {
    transform: translate(-50px, -50px) rotate(-10deg);
    border-radius: 40% 60% 70% 30% / 70% 40% 60% 30%;
  }
}

/* ===== Features Section ===== */
.section-title {
  text-align: center;
  font-size: 2rem;
  margin: 4rem 0 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* ===== Footer ===== */
.site-footer {
  padding: 2rem 0;
  text-align: center;
  background-color: var(--card-bg);
  margin-top: 4rem;
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem 0;
  }

  .hero-image {
    display: none;
  }

  .main-nav
