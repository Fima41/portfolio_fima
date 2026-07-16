"use client";
import { useEffect, useRef, useState } from 'react';

type PhaseKey = 'lanina' | 'elnino' | 'neutral';

const PHASES = {
  lanina: {
    label: 'la_niña',
    color: '#4a9eff',
    precip: [58, 78, 112, 134, 108, 62, 18, 3, 1, 5, 12, 32],
    lines: [
      { text: '> loading chirps_dataset [1981–2024]...', col: 'muted' },
      { text: '✓ grid_cells: 1642  |  coverage: 94.2%', col: 'green' },
      { text: '> enso_phase: la_niña  |  sst_anom: −1.4°C', col: 'muted' },
      { text: '> seasonal_fcst: above_normal [DJF]', col: 'green' },
      { text: '> running analog_year_ensemble...', col: 'muted' },
      { text: '✓ skill: r²=0.847  rmse=18.3mm  bias=−0.12', col: 'green' },
      { text: '> export → seasonal_forecast_2025.nc  ✓', col: 'green' },
    ],
    status: '● la_niña',
  },
  elnino: {
    label: 'el_niño',
    color: '#ff6b4a',
    precip: [38, 52, 65, 70, 52, 32, 10, 2, 1, 3, 7, 20],
    lines: [
      { text: '> loading chirps_dataset [1981–2024]...', col: 'muted' },
      { text: '✓ grid_cells: 1642  |  coverage: 94.2%', col: 'green' },
      { text: '> enso_phase: el_niño  |  sst_anom: +1.6°C', col: 'muted' },
      { text: '> seasonal_fcst: below_normal [DJF]', col: 'amber' },
      { text: '> running analog_year_ensemble...', col: 'muted' },
      { text: '✓ skill: r²=0.831  rmse=21.4mm  bias=+0.18', col: 'green' },
      { text: '> export → seasonal_forecast_2025.nc  ✓', col: 'green' },
    ],
    status: '● el_niño',
  },
  neutral: {
    label: 'neutral',
    color: '#8892a4',
    precip: [50, 68, 92, 108, 86, 50, 14, 3, 1, 4, 10, 27],
    lines: [
      { text: '> loading chirps_dataset [1981–2024]...', col: 'muted' },
      { text: '✓ grid_cells: 1642  |  coverage: 94.2%', col: 'green' },
      { text: '> enso_phase: neutral  |  sst_anom: +0.1°C', col: 'muted' },
      { text: '> seasonal_fcst: near_normal [DJF]', col: 'muted' },
      { text: '> running analog_year_ensemble...', col: 'muted' },
      { text: '✓ skill: r²=0.791  rmse=24.1mm  bias=−0.04', col: 'green' },
      { text: '> export → seasonal_forecast_2025.nc  ✓', col: 'green' },
    ],
    status: '● neutral',
  },
} as const;

const MONTHS = ['O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S'];

type ColKey = 'muted' | 'green' | 'amber';
const COLORS: Record<ColKey, string> = {
  muted: 'var(--muted)',
  green: 'var(--green)',
  amber: '#e6a030',
};

export default function HeroViz() {
  const [phase, setPhase] = useState<PhaseKey>('lanina');
  const [count, setCount] = useState(0);
  const [chartVisible, setChartVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTypewriter(p: PhaseKey) {
    if (timerRef.current) clearInterval(timerRef.current);
    let i = 0;
    timerRef.current = setInterval(() => {
      i++;
      setCount(i);
      if (i >= PHASES[p].lines.length) clearInterval(timerRef.current!);
    }, 280);
  }

  useEffect(() => {
    startTypewriter('lanina');
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function switchPhase(next: PhaseKey) {
    if (next === phase) return;
    setChartVisible(false);
    setTimeout(() => {
      setPhase(next);
      setChartVisible(true);
      setCount(0);
      startTypewriter(next);
    }, 220);
  }

  const data = PHASES[phase];
  const W = 300, H = 68;
  const mx = Math.max(...data.precip), mn = Math.min(...data.precip);
  const px = (i: number) => (i / (data.precip.length - 1)) * (W - 20) + 10;
  const py = (v: number) => H - 6 - ((v - mn) / (mx - mn)) * (H - 16);
  const linePath = data.precip.map((v, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join('');
  const areaPath = `${linePath} L${px(data.precip.length - 1).toFixed(1)},${H} L${px(0).toFixed(1)},${H}Z`;

  return (
    <div className="hero-terminal" role="region" aria-label="Interactive ENSO climate terminal">
      <div className="t-hdr">
        <span className="t-dot" style={{ background: '#ff5f57' }} />
        <span className="t-dot" style={{ background: '#febc2e' }} />
        <span className="t-dot" style={{ background: '#28c840' }} />
        <span className="t-ttl">climate_terminal — zsh</span>
      </div>
      <div className="t-body">
        <div className="t-phases">
          {(Object.keys(PHASES) as PhaseKey[]).map(key => (
            <button
              key={key}
              className={`t-phase-btn${phase === key ? ' active' : ''}`}
              style={phase === key ? { color: PHASES[key].color, borderColor: PHASES[key].color } : undefined}
              onClick={() => switchPhase(key)}
            >
              {PHASES[key].label}
            </button>
          ))}
        </div>
        <div className="t-chart-wrap" style={{ opacity: chartVisible ? 1 : 0, transition: 'opacity 0.22s ease' }}>
          <div className="t-clabel">{'// seasonal_precip_mm · annual_cycle'}</div>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ height: 68, display: 'block' }}>
            <defs>
              <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={data.color} stopOpacity="0.22" />
                <stop offset="100%" stopColor={data.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#rg)" />
            <path d={linePath} fill="none" stroke={data.color} strokeWidth="1.5" strokeLinejoin="round" />
            {data.precip.map((v, i) => (
              <circle key={i} cx={px(i)} cy={py(v)} r="1.8" fill={data.color} opacity=".65" />
            ))}
          </svg>
          <div className="t-months">
            {MONTHS.map((m, i) => <span key={i}>{m}</span>)}
          </div>
        </div>
        <div className="t-lines">
          {data.lines.slice(0, count).map((l, i) => (
            <div key={`${phase}-${i}`} className="t-line" style={{ color: COLORS[l.col as ColKey] }}>
              {l.text}
            </div>
          ))}
          <span className="t-cursor">▋</span>
        </div>
        <div className="t-sbar">
          <span style={{ color: data.color }}>{data.status}</span>
          <span>lusaka · zmb</span>
          <span>2025</span>
        </div>
      </div>
    </div>
  );
}
