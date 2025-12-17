
import { DayPlan } from './types';

export const INITIAL_CHECKLIST = [
  { id: 1, text: "下載 Naver Map 並標記景點", done: true },
  { id: 2, text: "確認 KTX 回程車次", done: false },
  { id: 3, text: "預約天空膠囊火車 (極重要)", done: false },
  { id: 4, text: "預購 WOWPASS 交通卡", done: false },
  { id: 5, text: "預訂 Leeum 美術館門票", done: false }
];

export const ITINERARY_DATA: DayPlan[] = [
  {
    day: 1,
    title: "首爾：西村的古樸美學",
    subtitle: "Seochon & Hanok Aesthetic",
    items: [
      { 
        time: "10:30 - 12:30", 
        title: "景福宮西側散策：保安旅館、大林美術館", 
        description: "感受舊建築與現代藝術的結合。", 
        badge: "景福宮站 3號出口",
        image: "https://images.unsplash.com/photo-1538663715417-6444d6923a2d?auto=format&fit=crop&q=80&w=800"
      },
      { time: "12:30 - 14:30", title: "通仁市場 & 西村午餐", description: "試試古幣便當或韓式參雞湯。" },
      { time: "15:00 - 18:00", title: "一點二倍的書屋 & 獨立選物店散策", description: "在韓屋群落中尋找隱藏的陶藝工坊。" },
      { time: "18:30 - 21:30", title: "益善洞：韓屋改建居酒屋 / 甜點店", description: "歷史與潮流的交界。", badge: "鐘路3街站 4/6號出口", nightTag: true }
    ]
  },
  {
    day: 2,
    title: "工業廢墟到創意中心",
    subtitle: "Seongsu-dong Industrial Vibe",
    items: [
      { 
        time: "10:30 - 13:30", 
        title: "聖水洞選物：LCDC Seoul、Ader Error、Dior 概念店", 
        description: "首爾最紅的創意街區。", 
        badge: "聖水站 3/4號出口",
        image: "https://images.unsplash.com/photo-1620662693409-7756e4c7be44?auto=format&fit=crop&q=80&w=800"
      },
      { time: "14:00 - 17:00", title: "LoL Park LCK Arena 賽事/參觀", description: "朝聖電競文化發源地。", badge: "鐘閣站 1號出口" },
      { time: "17:30 - 19:30", title: "首爾林散步：夕陽下的綠地", description: "聖水洞旁的綠洲，許多質感小店圍繞。" },
      { time: "19:30 - 21:30", title: "建大貨櫃屋 Common Ground 與晚餐", description: "工業風與校園氣息。", badge: "建大入口站 6號出口", nightTag: true }
    ]
  },
  {
    day: 3,
    title: "設計藝術與高處視野",
    subtitle: "Hannam-dong Luxury & Design",
    items: [
      { 
        time: "10:30 - 14:00", 
        title: "Leeum 美術館 & 漢南洞質感精品街", 
        description: "必逛：Nonfiction, Beaker, Anthracite Coffee。", 
        badge: "漢江鎮站 1號出口",
        image: "https://images.unsplash.com/photo-1561059488-916d69792237?auto=format&fit=crop&q=80&w=800"
      },
      { time: "14:30 - 16:30", title: "T1 Cafe & Arena 朝聖", description: "粉絲必去地標。", badge: "宣靖陵站 4號出口" },
      { time: "17:00 - 19:00", title: "解放村 & 南山下散策", description: "捕捉俯瞰首爾全景的「文青坡」。" },
      { time: "19:30 - 21:30", title: "梨泰院爵士吧或黑膠選品店", description: "感受夜晚的律動。", badge: "梨泰院站 1號出口", nightTag: true }
    ]
  },
  {
    day: 4,
    title: "釜山：影島與港灣魅力",
    subtitle: "Busan Harbor & Yeongdo",
    isBusan: true,
    items: [
      { time: "09:30 - 12:30", title: "KTX 奔向海洋：首爾 -> 釜山", description: "享受時速300公力的鐵路便當時光。", accent: true },
      { 
        time: "13:00 - 16:00", 
        title: "白淺灘文化村：濱海散步道", 
        description: "推薦咖啡廳：Huyn (海濱書店)。",
        image: "https://images.unsplash.com/photo-1541414779316-957e5f396951?auto=format&fit=crop&q=80&w=800"
      },
      { time: "16:30 - 19:00", title: "影島 P.ARK 文化工廠：巨型落地窗", description: "感受現代建築與工業港口的視覺衝擊。" },
      { time: "19:30 - 21:30", title: "南浦洞路邊攤海鮮 & 樂天百貨屋頂花園", description: "港灣夜景盡收眼底。", badge: "南浦站 7號出口", nightTag: true }
    ]
  },
  {
    day: 5,
    title: "海雲台：膠囊火車與咖啡誌",
    subtitle: "Haeundae Sky Capsule",
    isBusan: true,
    items: [
      { time: "10:30 - 13:00", title: "海雲台早午餐 & 海濱散步", description: "海風微拂的晨間時光。", badge: "海雲台站 5號出口" },
      { 
        time: "13:30 - 16:00", 
        title: "Blueline Park 天空膠囊火車", 
        description: "預約：15:00 左右最適合捕捉夕陽前夕。", 
        accent: true,
        image: "https://images.unsplash.com/photo-1616422315796-03c6239be841?auto=format&fit=crop&q=80&w=800"
      },
      { time: "17:00 - 19:30", title: "田浦咖啡街散策：隱藏小店", description: "尋找個性鮮明的自家烘焙店。", badge: "田浦站 7號出口" },
      { time: "20:00 - 21:30", title: "廣安里：海水浴場夜間無人機秀 (週六)", description: "如夢似幻的海邊燈光。", badge: "廣安站 5號出口", nightTag: true }
    ]
  },
  {
    day: 6,
    title: "舊城：文人的浪漫",
    subtitle: "Old Town & Gamcheon",
    isBusan: true,
    items: [
      { 
        time: "10:30 - 13:30", 
        title: "甘川洞文化村：與小王子對談", 
        description: "彩色階梯上的奇幻旅程。", 
        badge: "土城站 6號出口轉搭公車",
        image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=800"
      },
      { time: "14:00 - 16:30", title: "寶水洞書店街 & 札嘎其市場午茶", description: "尋找泛黃的舊書靈魂。" },
      { time: "17:30 - 19:30", title: "KTX 釜山 -> 首爾", description: "帶著回憶重返首都。", accent: true },
      { time: "20:00 - 21:30", title: "首爾站周邊：首爾路 7017 夜景步道", description: "廢棄高架橋改建的城市森林。", badge: "首爾站 1號出口", nightTag: true }
    ]
  },
  {
    day: 7,
    title: "歸途：最後的雜貨儀式",
    subtitle: "Final Souvenirs",
    items: [
      { 
        time: "10:30 - 13:00", 
        title: "Lotte Mart & 首爾站周邊選物店", 
        description: "最後補貨時間。",
        image: "https://images.unsplash.com/photo-1533167649158-6d508895b980?auto=format&fit=crop&q=80&w=800"
      },
      { time: "13:30 - 15:30", title: "機場快線 AREX 前往仁川", description: "平安歸途。" }
    ]
  }
];
