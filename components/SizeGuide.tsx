import React from 'react';

interface SizeGuideProps {
  cupCapacity?: string;
  className?: string;
}

export function SizeGuide({ cupCapacity = '250 ml', className = '' }: SizeGuideProps) {
  return (
    <div className={`p-6 rounded-2xl bg-cream-warm border border-earth/20 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-serif font-bold text-forest-dark text-base sm:text-lg">
            True Size Visual Guide (1:1 Proportions)
          </h4>
          <p className="text-xs text-ink-muted">
            Calibrated against standard hand palm & Indian currency coin
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-earth text-cream">
          92 mm Height
        </span>
      </div>

      {/* Silhouette comparison SVG */}
      <div className="relative w-full h-44 sm:h-52 bg-white/70 rounded-xl border border-dashed border-forest/30 flex items-center justify-around px-4 py-2 overflow-hidden">
        {/* Metric ruler lines */}
        <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-[9px] text-ink-soft border-r border-forest/20 pr-1.5 select-none">
          <span>100 mm</span>
          <span>75 mm</span>
          <span>50 mm</span>
          <span>25 mm</span>
          <span>0 mm</span>
        </div>

        {/* Hand Silhouette scale */}
        <div className="flex flex-col items-center justify-end h-full opacity-60">
          <svg viewBox="0 0 80 140" className="h-32 sm:h-36 w-auto fill-forest/30 stroke-forest/50" strokeWidth="1.5">
            {/* Stylized Palm & Fingers outline */}
            <path d="M 40,135 C 25,135 20,115 20,95 L 20,60 C 20,55 24,52 28,55 L 28,80 L 32,80 L 32,25 C 32,20 37,20 37,25 L 37,75 L 41,75 L 41,18 C 41,13 46,13 46,18 L 46,75 L 50,75 L 50,28 C 50,23 55,23 55,28 L 55,80 L 59,80 L 59,45 C 59,40 64,40 64,45 L 64,95 C 64,120 55,135 40,135 Z" />
          </svg>
          <span className="text-[10px] font-semibold text-ink-muted mt-1">Adult Hand (avg. 18cm)</span>
        </div>

        {/* 250 ml Paper Cup Silhouette (Highlighted) */}
        <div className="flex flex-col items-center justify-end h-full">
          <div className="relative group">
            <svg viewBox="0 0 100 120" className="h-32 sm:h-36 w-auto drop-shadow-md">
              {/* Cup body with gradient */}
              <defs>
                <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2F5D3A" />
                  <stop offset="50%" stopColor="#3E7B4D" />
                  <stop offset="100%" stopColor="#2F5D3A" />
                </linearGradient>
              </defs>
              {/* Cup rim */}
              <ellipse cx="50" cy="18" rx="38" ry="8" fill="#FAF6EE" stroke="#C9703F" strokeWidth="2.5" />
              {/* Cup walls */}
              <path d="M 14,20 L 26,105 C 26,108 40,112 50,112 C 60,112 74,108 74,105 L 86,20 Z" fill="url(#cupGrad)" stroke="#1B2E21" strokeWidth="2" />
              {/* Cup bottom curve */}
              <ellipse cx="50" cy="105" rx="24" ry="5" fill="#142819" />
              {/* Decorative Kraft band */}
              <path d="M 20,50 L 23,75 C 33,78 67,78 77,75 L 80,50 Z" fill="#E8DAC0" opacity="0.9" />
              <text x="50" y="65" fontSize="10" fontWeight="bold" fill="#2F5D3A" textAnchor="middle">250 ml</text>
            </svg>
          </div>
          <span className="text-[11px] font-bold text-forest mt-1">★ 250 ml Cup (92mm)</span>
        </div>

        {/* ₹5 / ₹10 Coin scale indicator */}
        <div className="flex flex-col items-center justify-end h-full opacity-70">
          <svg viewBox="0 0 50 50" className="h-10 sm:h-12 w-auto">
            <circle cx="25" cy="25" r="23" fill="#D49B44" stroke="#9A6A1A" strokeWidth="2" />
            <circle cx="25" cy="25" r="18" fill="none" stroke="#FAF6EE" strokeDasharray="2 2" strokeWidth="1.5" />
            <text x="25" y="30" fontSize="14" fontWeight="bold" fill="#FAF6EE" textAnchor="middle">₹10</text>
          </svg>
          <span className="text-[10px] font-semibold text-ink-muted mt-1">Coin (27mm)</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-ink-muted">
        <span>• Top Diameter: <strong>75 mm</strong></span>
        <span>• Bottom Diameter: <strong>53 mm</strong></span>
        <span>• Volume: <strong>250 ml (8.5 oz)</strong></span>
      </div>
    </div>
  );
}
