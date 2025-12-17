
import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA, INITIAL_CHECKLIST } from './constants';
import { ChecklistItem } from './types';
import TimelineItem from './components/TimelineItem';
import MujiCard from './components/MujiCard';
import { getHipsterAdvice } from './services/geminiService';

type Tab = 'plan' | 'guide' | 'wallet' | 'note';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('plan');
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [memo, setMemo] = useState<string>("");
  const [calcInput, setCalcInput] = useState<string>("");
  const [calcResult, setCalcResult] = useState<number>(0);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Load from storage
  useEffect(() => {
    const saved = localStorage.getItem('hipster_trip_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      setChecklist(parsed.checklist || INITIAL_CHECKLIST);
      setMemo(parsed.memo || "");
    }
  }, []);

  // Save to storage
  useEffect(() => {
    localStorage.setItem('hipster_trip_data', JSON.stringify({ checklist, memo }));
  }, [checklist, memo]);

  const handleToggleCheck = (id: number) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const handleCalculate = () => {
    const val = parseFloat(calcInput) || 0;
    setCalcResult(val / 175);
  };

  const askAi = async () => {
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    const res = await getHipsterAdvice(aiQuery);
    setAiResponse(res || "");
    setIsAiLoading(false);
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-muji-base/90 backdrop-blur-sm z-40 border-b border-muji-border px-6 py-5">
        <h1 className="font-serif text-xl font-bold tracking-[0.2em] text-muji-text">首爾·釜山·散策</h1>
        <p className="text-[9px] text-muji-gray tracking-widest uppercase mt-1 font-sans">Hipster 7D6N Digital Guide</p>
      </header>

      <main className="flex-1 px-6 py-8">
        {/* Plan Section */}
        {activeTab === 'plan' && (
          <div className="animate-in space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl font-bold italic">Itinerary</h2>
              <span className="text-[10px] text-muji-gray font-serif italic">Curated for Creators</span>
            </div>
            
            <div className="relative timeline-line">
              {ITINERARY_DATA.map(plan => (
                <TimelineItem key={plan.day} plan={plan} />
              ))}
            </div>
          </div>
        )}

        {/* Guide Section */}
        {activeTab === 'guide' && (
          <div className="animate-in space-y-8">
            <h2 className="font-serif text-2xl font-bold">文青與設計愛好者指南</h2>
            
            <MujiCard padding="p-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541315600329-3738096df3f4?auto=format&fit=crop&q=80&w=800" alt="Hannam-dong" className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-lg">漢南洞：設計的心臟</h3>
                  <span className="text-[9px] border border-muji-text px-1 uppercase">Must Visit</span>
                </div>
                <p className="text-xs leading-relaxed text-muji-gray">
                  聚集了眾多國際化的小眾品牌旗艦店。除了香氛與服飾，一定要去逛逛當地的藝廊。推薦造訪 Leeum 美術館後，沿著斜坡向下探索。
                </p>
              </div>
            </MujiCard>

            <div className="grid grid-cols-2 gap-4">
              <MujiCard padding="p-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526470465342-3663fe05ca1c?auto=format&fit=crop&q=80&w=400" alt="Cafe Culture" className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-serif font-bold text-sm">咖啡美學</h4>
                  <p className="text-[10px] text-muji-gray">自家烘焙與空間設計的極致。</p>
                </div>
              </MujiCard>
              <MujiCard padding="p-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1578926314433-e30730628e81?auto=format&fit=crop&q=80&w=400" alt="Busan View" className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h4 className="font-serif font-bold text-sm">港灣風景</h4>
                  <p className="text-[10px] text-muji-gray">釜山獨有的坡道與海景結合。</p>
                </div>
              </MujiCard>
            </div>

            <MujiCard className="bg-stone-50 border-none">
              <h3 className="font-serif font-bold text-muji-accent mb-3">21:30 之前的完美結尾</h3>
              <ul className="text-xs space-y-3">
                <li className="flex gap-2">
                  <span className="font-bold text-muji-text">LP Bars:</span>
                  <span className="text-muji-gray">首爾最近非常流行黑膠酒吧，漢南洞與弘大都有不少如「Vinyl & Plastic」。</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-muji-text">Han River:</span>
                  <span className="text-muji-gray">漢江公園的自動煮泡麵機與夕陽野餐，是最道地的首爾結尾。</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-muji-text">Bookshops:</span>
                  <span className="text-muji-gray">某些獨立書店如「一點二倍」會營業到較晚，適合深夜閱讀。</span>
                </li>
              </ul>
            </MujiCard>

            {/* AI Advisor */}
            <div className="space-y-4 pt-6 border-t border-muji-border">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <i className="fa-solid fa-wand-magic-sparkles text-muji-accent"></i>
                文青旅行助手
              </h3>
              <p className="text-[10px] text-muji-gray uppercase tracking-widest">Ask for hidden spots</p>
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="想找首爾哪裡的復古咖啡店？"
                  className="flex-1 text-sm bg-white p-3 border border-muji-border rounded-none focus:outline-none focus:border-muji-accent"
                />
                <button 
                  onClick={askAi}
                  disabled={isAiLoading}
                  className="bg-muji-text text-white px-4 py-2 text-xs font-bold disabled:opacity-50"
                >
                  {isAiLoading ? '...' : '詢問'}
                </button>
              </div>

              {aiResponse && (
                <MujiCard className="bg-muji-paper italic text-sm leading-relaxed border-muji-accent/20">
                  <p className="whitespace-pre-wrap">{aiResponse}</p>
                </MujiCard>
              )}
            </div>
          </div>
        )}

        {/* Wallet Section */}
        {activeTab === 'wallet' && (
          <div className="animate-in space-y-8">
            <h2 className="font-serif text-2xl font-bold">預算與記帳</h2>
            <MujiCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-muji-accent font-bold tracking-widest uppercase">Exchange Rate</span>
                <span className="text-[10px] text-muji-gray font-serif">1 HKD ≈ 175 KRW</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-muji-gray uppercase mb-2 block">Amount (KRW)</label>
                  <input 
                    type="number" 
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                    placeholder="100,000" 
                    className="w-full text-2xl font-serif bg-muji-base p-4 rounded-none border border-muji-border focus:outline-none focus:border-muji-accent"
                  />
                </div>
                
                <div className="flex justify-between items-end">
                  <button 
                    onClick={handleCalculate}
                    className="bg-muji-text text-white px-8 py-3 text-xs font-bold tracking-widest"
                  >
                    CONVERT
                  </button>
                  <div className="text-right">
                    <p className="text-[10px] text-muji-gray uppercase mb-1">Result (HKD)</p>
                    <p className="text-3xl font-serif font-bold text-muji-accent">
                      $ {calcResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            </MujiCard>
            
            <div className="grid grid-cols-2 gap-4">
              <MujiCard className="text-center py-6">
                <p className="text-[9px] text-muji-gray uppercase mb-1">Lunch Avg</p>
                <p className="text-sm font-serif">₩15,000</p>
              </MujiCard>
              <MujiCard className="text-center py-6">
                <p className="text-[9px] text-muji-gray uppercase mb-1">Coffee Avg</p>
                <p className="text-sm font-serif">₩6,500</p>
              </MujiCard>
            </div>
          </div>
        )}

        {/* Note Section */}
        {activeTab === 'note' && (
          <div className="animate-in space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold italic mb-6">Checklist</h2>
              <MujiCard className="p-6 space-y-4">
                {checklist.map(item => (
                  <div key={item.id} className="flex items-center gap-4 group">
                    <div 
                      onClick={() => handleToggleCheck(item.id)}
                      className={`w-5 h-5 border flex items-center justify-center cursor-pointer transition-colors ${item.done ? 'bg-muji-accent border-muji-accent' : 'border-muji-border bg-white'}`}
                    >
                      {item.done && <i className="fa-solid fa-check text-[10px] text-white"></i>}
                    </div>
                    <span className={`text-sm transition-all ${item.done ? 'line-through text-muji-gray' : 'text-muji-text'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </MujiCard>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold italic mb-6">Memo</h2>
              <textarea 
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                className="w-full h-64 muji-card p-6 text-sm leading-relaxed focus:outline-none resize-none bg-white font-sans" 
                placeholder="隨手筆記旅行中的靈感片段..."
              />
              <p className="text-[9px] text-muji-gray mt-2 text-right italic uppercase">Saved automatically to local storage</p>
            </div>
          </div>
        )}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-muji-border px-6 py-4 z-50 shadow-lg">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button 
            onClick={() => setActiveTab('plan')} 
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'plan' ? 'text-muji-accent' : 'text-muji-gray hover:text-muji-text'}`}
          >
            <i className="fa-solid fa-calendar-day text-lg"></i>
            <span className="text-[8px] font-bold uppercase tracking-widest">Plan</span>
          </button>
          <button 
            onClick={() => setActiveTab('guide')} 
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'guide' ? 'text-muji-accent' : 'text-muji-gray hover:text-muji-text'}`}
          >
            <i className="fa-solid fa-compass text-lg"></i>
            <span className="text-[8px] font-bold uppercase tracking-widest">Guide</span>
          </button>
          <button 
            onClick={() => setActiveTab('wallet')} 
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'wallet' ? 'text-muji-accent' : 'text-muji-gray hover:text-muji-text'}`}
          >
            <i className="fa-solid fa-wallet text-lg"></i>
            <span className="text-[8px] font-bold uppercase tracking-widest">Wallet</span>
          </button>
          <button 
            onClick={() => setActiveTab('note')} 
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'note' ? 'text-muji-accent' : 'text-muji-gray hover:text-muji-text'}`}
          >
            <i className="fa-solid fa-feather-pointed text-lg"></i>
            <span className="text-[8px] font-bold uppercase tracking-widest">Note</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
