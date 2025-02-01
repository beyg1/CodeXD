import React from 'react';
import { Cpu } from 'lucide-react';

const styles = {
  container: `
    fixed top-4 right-4
    hidden md:flex items-center gap-2 
    px-4 py-2 rounded-full 
    border border-blue-500/30 
    bg-[rgba(15,23,42,0.95)]
    z-[999999]
  `,
  indicator: `
    relative flex h-3 w-3
  `,
  ping: `
    animate-ping absolute 
    inline-flex h-full w-full 
    rounded-full bg-blue-400 
    opacity-75
  `,
  dot: `
    relative inline-flex 
    rounded-full h-3 w-3 
    bg-blue-500
  `,
  text: `text-sm text-blue-400`,
  icon: `w-4 h-4 text-blue-400`
} as const;

const AIStatusIndicator = () => {
  return (
    <div className={styles.container}>
      <span className={styles.indicator}>
        <span className={styles.ping} />
        <span className={styles.dot} />
      </span>
      <span className={styles.text}>AI Agents Active</span>
      <Cpu className={styles.icon} />
    </div>
  );
}

export default AIStatusIndicator;
