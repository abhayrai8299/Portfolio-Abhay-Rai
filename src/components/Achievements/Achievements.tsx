const credentials = [
  { icon: "fa-trophy", value: "Star of the Quarter", label: "Nagarro · 2024" },
  { icon: "fa-code", value: "6 Star", label: "HackerRank · Competitive Programming", link: "https://www.hackerrank.com/profile/abhay_rai8299" },
  { icon: "fa-terminal", value: "3 Star", label: "CodeChef · Competitive Programming", link: "https://www.codechef.com/users/abhay_rai2000" },
];

const certifications = [
  ["Frontend System Design", "https://drive.google.com/file/d/1IJm8HoFmPJhrE2BMklexd2nMBiLT2Zgd/view?usp=sharing"],
  ["Node.js", "https://drive.google.com/file/d/1koPWXQecUwHYtxnc-rHMuQqwgcjHa_6Y/view?usp=sharing"],
  ["React.js", "https://drive.google.com/file/d/1j4O0gQn1ttAFvXymHkNn49DA4RXhz4Da/view?usp=sharing"],
];

const Achievements = () => (
  <section id="achievements" className="section credentials-section">
    <div className="container">
      <div className="section-heading">
        <div><p className="eyebrow">RECOGNITION</p><h2>Always learning.<br />Always leveling up.</h2></div>
        <p>Recognition for engineering impact, competitive problem-solving, and continued investment in modern product architecture.</p>
      </div>
      <div className="credential-grid">
        {credentials.map(item => {
          const content = <><i className={`fas ${item.icon}`} /><strong>{item.value}</strong><span>{item.label}</span></>;
          return item.link ? <a className="credential-card" href={item.link} target="_blank" rel="noreferrer" key={item.value}>{content}</a> : <div className="credential-card" key={item.value}>{content}</div>;
        })}
      </div>
      <div className="certifications">
        <span>Certified by NamasteDev</span>
        {certifications.map(([name, link]) => <a key={name} href={link} target="_blank" rel="noreferrer">{name}<i className="fas fa-arrow-up-right-from-square" /></a>)}
      </div>
    </div>
  </section>
);

export default Achievements;
