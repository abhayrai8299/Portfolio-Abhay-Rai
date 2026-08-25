import portrait from "../../assets/ghibli_photo1.png";

const HeroSection = () => (
  <section id="home" className="hero container">
    <div className="hero-copy reveal">
      <div className="availability"><span /> Available for ambitious product teams</div>
      <p className="eyebrow">ASSOCIATE TECH LEAD · AI PRODUCT ENGINEER</p>
      <h1>I build intelligent products that feel <em>effortless.</em></h1>
      <p className="hero-lede">
        I’m Abhay Rai, an Associate Tech Lead with 6+ years of experience turning complex ideas into fast, secure, production-grade products—from AI-assisted experiences to scalable web platforms.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work <i className="fas fa-arrow-right" /></a>
        <a className="button button-ghost" href="mailto:abhayrai1726@gmail.com">Let’s talk</a>
      </div>
      <div className="hero-metrics" aria-label="Career highlights">
        <div><strong>6+</strong><span>Years building</span></div>
        <div><strong>50K+</strong><span>Users served</span></div>
        <div><strong>40%</strong><span>Faster loads</span></div>
        <div><strong>50%</strong><span>Faster delivery</span></div>
      </div>
    </div>
    <div className="hero-visual reveal">
      <div className="portrait-card">
        <div className="portrait-glow" />
        <img src={portrait} alt="Illustrated portrait of Abhay Rai" />
        <div className="floating-badge badge-ai"><i className="fas fa-wand-magic-sparkles" /> AI + Product</div>
        <div className="floating-badge badge-code"><i className="fas fa-code" /> Full Stack</div>
      </div>
      <div className="status-card">
        <span className="status-icon"><i className="fas fa-bolt" /></span>
        <div><small>Currently</small><strong>Associate Tech Lead · Paxcom</strong></div>
      </div>
    </div>
  </section>
);

export default HeroSection;
