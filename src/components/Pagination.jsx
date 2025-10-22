import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({ current, total, onChange }){
  const pages = [];
  for(let i=1;i<=total;i++) pages.push(i);

  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button onClick={() => onChange(Math.max(1, current-1))} style={{border:'1px solid #ddd', padding:6, borderRadius:6}}>
        <FiChevronLeft />
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          style={{
            padding:6,
            minWidth:28,
            borderRadius:6,
            border: p===current ? 'none' : '1px solid #efefef',
            background: p===current ? '#f0f0f0' : 'transparent',
            fontWeight: p===current ? 700 : 500
          }}>
          {p}
        </button>
      ))}

      <button onClick={() => onChange(Math.min(total, current+1))} style={{border:'1px solid #ddd', padding:6, borderRadius:6}}>
        <FiChevronRight />
      </button>
    </div>
  );
}
