import { motion } from 'framer-motion';

export default function CircularProgress({
  value,
  label,
  sublabel,
  color = '#F0A500',
  size = 128,
  light = false,
}) {
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={light ? 'rgba(255,255,255,0.15)' : '#D6E4F7'}
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-xl font-extrabold ${light ? 'text-white' : 'text-[#003087]'}`}>{value}%</span>
        </div>
      </div>
      <p className={`mt-3 text-center text-sm font-semibold ${light ? 'text-white' : 'text-[#003087]'}`}>{label}</p>
      {sublabel && (
        <p className={`mt-1 max-w-[160px] text-center text-xs leading-snug ${light ? 'text-[#93C5FD]' : 'text-[#4A5568]'}`}>
          {sublabel}
        </p>
      )}
    </div>
  );
}
