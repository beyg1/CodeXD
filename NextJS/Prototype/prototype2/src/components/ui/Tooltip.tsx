import React from 'react';

interface TooltipProps {
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
<div className="absolute hidden group-hover:block bg-slate-400 border border-gray-300 rounded-lg shadow-lg p-2 text-sm text-gray-700 z-10" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'normal', width: '100%' }}>
      {content}
    </div>
  );
};

export default Tooltip;
