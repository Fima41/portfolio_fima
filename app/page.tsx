import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import HeroViz from '@/components/HeroViz';

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 3); // Get top 3 posts

  return (
    <>
      <section className="hero">
        <div className="scanline-wrap"><div className="scanline"></div></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow">climate_data_scientist · lusaka, zambia</div>
            <h1 className="hero-name">Fima Sichone</h1>
            <div className="hero-title">climate_science &amp; geospatial_ml</div>
            <p className="hero-sub">Analysing climate variability, building seasonal forecasting models, and mapping environmental risk across southern Africa.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">view_projects()</a>
              <a href="#contact" className="btn-outline">contact_me()</a>
            </div>
          </div>
          <div className="hero-viz-side">
            <HeroViz />
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="expertise">
        <div className="section-prefix reveal">expertise</div>
        <h2 className="section-title reveal">What I Do</h2>
        <div className="cards3">
          <div className="card reveal" style={{ transitionDelay: '.05s' }}>
            <div className="card-num">01 / climate_systems</div>
            <div className="card-title">Climate Systems</div>
            <ul>
              <li>Forecast &amp; agro-met tools</li>
              <li>Climate data processing</li>
            </ul>
          </div>
          <div className="card reveal" style={{ transitionDelay: '.15s' }}>
            <div className="card-num">02 / ml_engineering</div>
            <div className="card-title">Machine Learning</div>
            <ul>
              <li>Seasonal forecasting models</li>
              <li>Climate variability analysis</li>
              <li>Spatial ML pipelines</li>
            </ul>
          </div>
          <div className="card reveal" style={{ transitionDelay: '.25s' }}>
            <div className="card-num">03 / geospatial</div>
            <div className="card-title">Geospatial Analysis</div>
            <ul>
              <li>Satellite &amp; radar data</li>
              <li>Flood &amp; drought mapping</li>
              <li>Spatial statistics</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="projects" style={{ paddingTop: '40px' }}>
        <div className="section-prefix reveal">work</div>
        <h2 className="section-title reveal">Featured Projects</h2>
        <div className="proj-list">
          <div className="proj reveal">
            <div className="proj-img">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M15 65 L65 65" stroke="var(--dim)" strokeWidth="0.5" />
                <rect x="20" y="45" width="8" height="20" fill="var(--blue)" opacity=".4" />
                <rect x="35" y="35" width="8" height="30" fill="var(--blue)" opacity=".6" />
                <rect x="50" y="50" width="8" height="15" fill="var(--blue)" opacity=".3" />
                <path d="M15 40 Q35 15 55 35 T75 25" fill="none" stroke="var(--green)" strokeWidth="1.5" />
                <circle cx="35" cy="27" r="2.5" fill="var(--green)" />
                <circle cx="55" cy="35" r="2.5" fill="var(--green)" />
              </svg>
            </div>
            <div className="proj-body">
              <div className="proj-tags"><span className="tag">d3.js</span><span className="tag">climate-analytics</span><span className="tag green">viz</span><span className="tag">js</span></div>
              <div className="proj-name">Zambia Rainfall — ENSO Analog Year Analysis</div>
              <div className="proj-desc">An interactive climate intelligence dashboard for exploring historical rainfall patterns in Zambia based on ENSO analog years, covering 60+ years of meteorological station data.</div>
              <div className="proj-flow">
                <div className="flow-item"><div className="flow-label">PROBLEM</div><div className="flow-val">complex climate signals</div></div>
                <div className="flow-item"><div className="flow-label">SOLUTION</div><div className="flow-val">interactive analog dashboard</div></div>
                <div className="flow-item"><div className="flow-label">IMPACT</div><div className="flow-val">better seasonal planning</div></div>
              </div>
              <div className="proj-actions">
                <a href="https://fima41.github.io/zambia-enso/" target="_blank" rel="noopener" className="btn-sm primary">live_demo</a>
                <a href="https://github.com/Fima41/zambia-enso" target="_blank" rel="noopener" className="btn-sm">github</a>
              </div>
            </div>
          </div>

          <div className="proj reveal" style={{ transitionDelay: '.1s' }}>
            <div className="proj-img">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <rect x="8" y="46" width="64" height="20" rx="3" fill="none" stroke="#1a6ed8" strokeWidth="0.5" />
                <path d="M12 46 Q22 18 32 30 Q42 8 52 26 Q62 12 68 46" fill="none" stroke="#4a9eff" strokeWidth="1.5" />
                <path d="M12 46 Q22 28 32 36 Q42 22 52 34 Q62 25 68 46" fill="rgba(74,158,255,0.1)" />
                <circle cx="32" cy="30" r="2.5" fill="#6fcf52" />
                <circle cx="52" cy="26" r="2.5" fill="#6fcf52" />
              </svg>
            </div>
            <div className="proj-body">
              <div className="proj-tags"><span className="tag">python</span><span className="tag">netcdf</span><span className="tag">chirps</span><span className="tag green">gis</span></div>
              <div className="proj-name">Flood Mapping — Lealui Plain</div>
              <div className="proj-desc">Spatial analysis of flood extent in the Barotse Floodplain using satellite-derived precipitation and hydrological modelling. Informs early warning systems.</div>
              <div className="proj-flow">
                <div className="flow-item"><div className="flow-label">PROBLEM</div><div className="flow-val">flood uncertainty</div></div>
                <div className="flow-item"><div className="flow-label">SOLUTION</div><div className="flow-val">satellite analysis</div></div>
                <div className="flow-item"><div className="flow-label">IMPACT</div><div className="flow-val">early warning</div></div>
              </div>
              <div className="proj-actions">
                <a href="https://github.com/Fima41" target="_blank" rel="noopener" className="btn-sm">github</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="research" style={{ paddingTop: '40px' }}>
        <div className="section-prefix reveal">research</div>
        <h2 className="section-title reveal">Research &amp; Innovation</h2>
        <div className="research-grid">
          <div className="r-card reveal">
            <div className="r-status working">working_paper</div>
            <div className="r-title">ML for Climate Variability in Zambia</div>
            <div className="r-abs">Applying machine learning to identify patterns in seasonal climate variability across Zambia&apos;s agro-ecological zones. Focus on Southern Oscillation influence.</div>
          </div>
          <div className="r-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="r-status progress">in_progress</div>
            <div className="r-title">Flood Extent Mapping — Barotse Floodplain</div>
            <div className="r-abs">Integrating CHIRPS satellite precipitation with ground-truth station data to model flood dynamics in the Lealui plain. Ensemble approaches for uncertainty quantification.</div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="skills" style={{ paddingTop: '40px' }}>
        <div className="section-prefix reveal">capabilities</div>
        <h2 className="section-title reveal">Skills</h2>
        <div className="skills-grid">
          <div className="skill-cat reveal" style={{ transitionDelay: '.05s' }}>
            <div className="skill-cat-title">climate_data</div>
            <span className="skill-pill">CDT</span><span className="skill-pill">CHIRPS</span><span className="skill-pill">NetCDF</span><span className="skill-pill">ERA5</span><span className="skill-pill">GIS</span>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '.12s' }}>
            <div className="skill-cat-title">machine_learning</div>
            <span className="skill-pill">Python</span><span className="skill-pill">Scikit-learn</span><span className="skill-pill">TensorFlow</span><span className="skill-pill">XGBoost</span>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '.19s' }}>
            <div className="skill-cat-title">geospatial</div>
            <span className="skill-pill">QGIS</span><span className="skill-pill">GeoPandas</span><span className="skill-pill">Cartopy</span><span className="skill-pill">Rasterio</span><span className="skill-pill">Shapely</span>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '.26s' }}>
            <div className="skill-cat-title">analysis_tools</div>
            <span className="skill-pill">R</span><span className="skill-pill">Pandas</span><span className="skill-pill">NumPy</span><span className="skill-pill">Jupyter</span><span className="skill-pill">CDO</span>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" id="blog" style={{ paddingTop: '40px' }}>
        <div className="section-prefix reveal">writing</div>
        <h2 className="section-title reveal">Blog</h2>
        <div className="blog-grid">
          {allPostsData.map((post, idx) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="b-card reveal" style={{ transitionDelay: `${0.05 + idx * 0.07}s` }}>
              <div className="b-header">
                {idx === 0 && <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#4a9eff" strokeWidth="0.75"/><path d="M4 16 Q16 6 28 16 Q16 26 4 16Z" fill="rgba(74,158,255,0.08)"/></svg>}
                {idx === 1 && <svg width="32" height="32" viewBox="0 0 32 32"><path d="M6 26 Q16 4 26 26" fill="none" stroke="#6fcf52" strokeWidth="0.75"/><circle cx="16" cy="14" r="2" fill="#6fcf52" opacity=".5"/></svg>}
                {idx === 2 && <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="20" width="16" height="8" rx="2" fill="none" stroke="#e6a030" strokeWidth="0.75"/><path d="M10 20 Q16 6 22 20" fill="rgba(230,160,48,0.08)" stroke="#e6a030" strokeWidth="0.75"/></svg>}
              </div>
              <div className="b-body">
                <div className="b-tag">// {post.tag}</div>
                <div className="b-title">{post.title}</div>
                <div className="b-date">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-block reveal" id="contact">
        <div className="cta-title">&quot;Let&apos;s build climate intelligence<br />systems for Africa.&quot;</div>
        <div className="cta-sub">open to collaborations, research partnerships, consulting</div>
        <a href="https://wa.me/260770940863" target="_blank" rel="noopener" className="btn-primary" style={{ padding: '12px 28px', fontSize: '12px', letterSpacing: '.07em', textDecoration: 'none', display: 'inline-block' }}>contact_me()</a>
      </section>

      <section className="section" id="connect" style={{ borderTop: '0.5px solid var(--border)' }}>
        <div className="section-prefix">connect</div>
        <h2 className="section-title">Let&apos;s build together</h2>
        <div className="social-grid">
            <a href="https://github.com/Fima41" target="_blank" rel="noopener" className="social-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className="social-label">github</span>
            </a>
            <a href="https://www.linkedin.com/in/fima-sichone-039124207" target="_blank" rel="noopener" className="social-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="social-label">linkedin</span>
            </a>
            <a href="mailto:fimahsichone41@gmail.com" className="social-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span className="social-label">email</span>
            </a>
            <a href="https://wa.me/260770940863" target="_blank" rel="noopener" className="social-item">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span className="social-label">whatsapp</span>
            </a>
        </div>
      </section>
    </>
  );
}
