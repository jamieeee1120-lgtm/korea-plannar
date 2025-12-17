
import React from 'react';
import { DayPlan } from '../types';
import MujiCard from './MujiCard';

interface Props {
  plan: DayPlan;
}

const TimelineItem: React.FC<Props> = ({ plan }) => {
  const isBusan = plan.isBusan;
  
  return (
    <div className="relative pl-10 mb-14">
      <div className={`absolute left-0 top-0 w-8 h-8 ${isBusan ? 'bg-muji-accent' : 'bg-muji-text'} text-white flex items-center justify-center rounded-full text-[10px] font-bold ring-4 ring-muji-base z-10`}>
        {plan.day.toString().padStart(2, '0')}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-baseline border-b border-muji-border pb-2">
          <h3 className="font-serif text-lg font-bold">{plan.title}</h3>
          <span className="text-[10px] text-muji-gray uppercase tracking-wider">{plan.subtitle}</span>
        </div>
        
        <MujiCard className="space-y-4" padding="p-0">
          {plan.items.map((item, idx) => (
            <div key={idx} className="group overflow-hidden">
              {item.image && (
                <div className="w-full h-32 overflow-hidden mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}
              <div className="px-4 pb-4">
                <span className={`text-[10px] font-bold mb-1 block ${item.accent ? 'text-muji-accent' : 'text-muji-text'}`}>
                  {item.time}
                </span>
                <p className="text-sm font-medium leading-tight mb-1">{item.title}</p>
                <p className="text-xs text-muji-gray italic mb-2 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.badge && (
                    <span className="text-[9px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-sm">
                      <i className="fa-solid fa-location-dot mr-1"></i>{item.badge}
                    </span>
                  )}
                  {item.nightTag && (
                    <span className="bg-muji-text text-muji-base text-[9px] px-2 py-0.5 rounded-sm">
                      <i className="fa-solid fa-moon mr-1"></i>Night Choice
                    </span>
                  )}
                  {item.accent && (
                    <span className="border border-muji-accent text-muji-accent text-[9px] px-2 py-0.5 rounded-sm font-bold">
                      <i className="fa-solid fa-star mr-1"></i>Recommended
                    </span>
                  )}
                </div>
              </div>
              {idx < plan.items.length - 1 && <hr className="mx-4 border-muji-border opacity-50" />}
            </div>
          ))}
        </MujiCard>
      </div>
    </div>
  );
};

export default TimelineItem;
