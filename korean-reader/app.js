/* 中文单语小说阅读器：保留译文、排版、插图和阅读位置。 */
(()=>{
'use strict';
const BUILTINS={
 'alone-wrong-wolf-1':{path:'alone-wrong-wolf-1.json',zh:'独自错了的狼 · 第1章',ko:'혼자 틀린 이리 1',author:'作者未标注',count:140,series:'独自错了的狼',part:'1',index:1,total:5,translation:'zh-complete'},
 'alone-wrong-wolf-2':{path:'alone-wrong-wolf-2.json',zh:'独自错了的狼 · 第2章',ko:'혼자 틀린 이리 2',author:'作者未标注',count:145,series:'独自错了的狼',part:'2',index:2,total:5,translation:'zh-complete'},
 'alone-wrong-wolf-3':{path:'alone-wrong-wolf-3.json',zh:'独自错了的狼 · 第3章',ko:'혼자 틀린 이리 3',author:'作者未标注',count:99,series:'独自错了的狼',part:'3',index:3,total:5,translation:'zh-complete'},
 'alone-wrong-wolf-4':{path:'alone-wrong-wolf-4.json',zh:'独自错了的狼 · 第4章',ko:'혼자 틀린 이리 4',author:'作者未标注',count:111,series:'独自错了的狼',part:'4',index:4,total:5,translation:'zh-complete'},
 'alone-wrong-wolf-5':{path:'alone-wrong-wolf-5.json',zh:'独自错了的狼 · 第5章',ko:'혼자 틀린 이리 5',author:'作者未标注',count:103,series:'独自错了的狼',part:'5',index:5,total:5,translation:'zh-complete'},
 'selfish-up':{path:'selfish-up.json.gz',zh:'SELF!SH · 上篇',ko:'SELF!SH 上',author:'마오',count:64,series:'SELF!SH',part:'上',index:1,total:3,translation:'zh-complete'},
 'selfish-mid':{path:'selfish-mid.json.gz',zh:'SELF!SH · 中篇',ko:'SELF!SH 中',author:'마오',count:97,series:'SELF!SH',part:'中',index:2,total:3,translation:'zh-complete'},
 'selfish-down':{path:'selfish-down.json.gz',zh:'SELF!SH · 下篇（完）',ko:'SELF!SH 下',author:'마오',count:158,series:'SELF!SH',part:'下',index:3,total:3,translation:'zh-complete'},
 'animato-1':{path:'animato-1.json.gz',zh:'泥潭·阿尼马托 · 第1章',ko:'시궁창 아니마토 1',author:'RQ',count:76,series:'泥潭·阿尼马托',part:'1',index:1,total:10,translation:'zh-complete'},
 'animato-2':{path:'animato-2.json.gz',zh:'泥潭·阿尼马托 · 第2章',ko:'시궁창 아니마토 2',author:'RQ',count:82,series:'泥潭·阿尼马托',part:'2',index:2,total:10,translation:'zh-complete'},
 'animato-3':{path:'animato-3.json.gz',zh:'泥潭·阿尼马托 · 第3章',ko:'시궁창 아니마토 3',author:'RQ',count:104,series:'泥潭·阿尼马托',part:'3',index:3,total:10,translation:'zh-complete'},
 'animato-4':{path:'animato-4.json.gz',zh:'泥潭·阿尼马托 · 第4章',ko:'시궁창 아니마토 4',author:'RQ',count:101,series:'泥潭·阿尼马托',part:'4',index:4,total:10,translation:'zh-complete'},
 'animato-5':{path:'animato-5.json.gz',zh:'泥潭·阿尼马托 · 第5章',ko:'시궁창 아니마토 5',author:'RQ',count:64,series:'泥潭·阿尼马托',part:'5',index:5,total:10,translation:'zh-complete'},
 'animato-6':{path:'animato-6.json.gz',zh:'泥潭·阿尼马托 · 第6章',ko:'시궁창 아니마토 6',author:'RQ',count:81,series:'泥潭·阿尼马托',part:'6',index:6,total:10,translation:'zh-complete'},
 'good-1':{path:'good-1.json',zh:'好人会谈一场糟糕的恋爱 · 第1章',ko:'좋은 사람은 나쁜 연애를 하게 돼 1',author:'RQ',count:82,series:'好人会谈一场糟糕的恋爱',part:'1',index:1,total:9,translation:'complete'},
 'good-2':{path:'good-2.json',zh:'好人会谈一场糟糕的恋爱 · 第2章',ko:'좋은 사람은 나쁜 연애를 하게 돼 2',author:'RQ',count:115,series:'好人会谈一场糟糕的恋爱',part:'2',index:2,total:9,translation:'complete'},
 'good-3':{path:'good-3.json',zh:'好人会谈一场糟糕的恋爱 · 第3章',ko:'좋은 사람은 나쁜 연애를 하게 돼 3',author:'RQ',count:62,series:'好人会谈一场糟糕的恋爱',part:'3',index:3,total:9,translation:'complete'},
 'good-4':{path:'good-4.json',zh:'好人会谈一场糟糕的恋爱 · 第4章',ko:'좋은 사람은 나쁜 연애를 하게 돼 4',author:'RQ',count:78,series:'好人会谈一场糟糕的恋爱',part:'4',index:4,total:9,translation:'complete'},
 'good-5':{path:'good-5.json',zh:'好人会谈一场糟糕的恋爱 · 第5章',ko:'좋은 사람은 나쁜 연애를 하게 돼 5',author:'RQ',count:87,series:'好人会谈一场糟糕的恋爱',part:'5',index:5,total:9,translation:'complete'},
 'good-6':{path:'good-6.json',zh:'好人会谈一场糟糕的恋爱 · 第6章',ko:'좋은 사람은 나쁜 연애를 하게 돼 6',author:'RQ',count:29,series:'好人会谈一场糟糕的恋爱',part:'6',index:6,total:9,translation:'complete'},
 'good-7':{path:'good-7.json',zh:'好人会谈一场糟糕的恋爱 · 第7章',ko:'좋은 사람은 나쁜 연애를 하게 돼 7',author:'RQ',count:114,series:'好人会谈一场糟糕的恋爱',part:'7',index:7,total:9,translation:'complete'},
 'good-8':{path:'good-8.json',zh:'好人会谈一场糟糕的恋爱 · 第8章',ko:'좋은 사람은 나쁜 연애를 하게 돼 8',author:'RQ',count:91,series:'好人会谈一场糟糕的恋爱',part:'8',index:8,total:9,translation:'complete'},
 'good-9':{path:'good-9.json',zh:'好人会谈一场糟糕的恋爱 · 第9章（完结）',ko:'좋은 사람은 나쁜 연애를 하게 돼 9 (完)',author:'RQ',count:87,series:'好人会谈一场糟糕的恋爱',part:'9',index:9,total:9,translation:'complete'},
 'one-room-paradise-1':{path:'one-room-paradise-1.json',zh:'单间天堂 · 第1章',ko:'원룸 파라다이스 1',author:'데님',count:111,series:'单间天堂',part:'1',index:1,total:5,translation:'complete'},
 'one-room-paradise-2':{path:'one-room-paradise-2.json',zh:'单间天堂 · 第2章',ko:'원룸 파라다이스 2',author:'데님',count:133,series:'单间天堂',part:'2',index:2,total:5,translation:'complete'},
 'one-room-paradise-3':{path:'one-room-paradise-3.json',zh:'单间天堂 · 第3章',ko:'원룸 파라다이스 3',author:'데님',count:128,series:'单间天堂',part:'3',index:3,total:5,translation:'complete'},
 'one-room-paradise-4':{path:'one-room-paradise-4.json',zh:'单间天堂 · 第4章',ko:'원룸 파라다이스 4',author:'데님',count:117,series:'单间天堂',part:'4',index:4,total:5,translation:'complete'},
 'one-room-paradise-5':{path:'one-room-paradise-5.json',zh:'单间天堂 · 第5章',ko:'원룸 파라다이스 5',author:'데님',count:110,series:'单间天堂',part:'5',index:5,total:5,translation:'complete'},
 'so-romantic-up':{path:'so-romantic-up.json',zh:"So F**kin' Romantic · 上篇",ko:"So F**kin' Romantic 上",author:'이로',count:246,series:"So F**kin' Romantic",part:'上',index:1,total:3,translation:'complete'},
 'so-romantic-mid':{path:'so-romantic-mid.json',zh:"So F**kin' Romantic · 中篇",ko:"So F**kin' Romantic 中",author:'이로',count:190,series:"So F**kin' Romantic",part:'中',index:2,total:3,translation:'complete'},
 'so-romantic-down':{path:'so-romantic-down.json',zh:"So F**kin' Romantic · 下篇（完结）",ko:"So F**kin' Romantic 下",author:'이로',count:261,series:"So F**kin' Romantic",part:'下',index:3,total:3,translation:'complete'},
 'hanip':{path:'hanip.json',zh:'就一口',ko:'한입만',author:'삐삐',count:142},
 'cover-eyes':{path:'cover-eyes.json',zh:'用手掌遮不住天空，但总能遮住你的眼睛吧',ko:'손바닥으로하늘을가리진못해도네눈을가릴순있겠지',author:'作者未注明',count:32},
 'existence-weight':{path:'existence-weight.json',zh:'存在的重量',ko:'존재의 무게',author:'넘버',count:361},
 '1836825-a':{path:'1836825-a.json',zh:'183 68 25 · 第1章',ko:'183 68 25 A',author:'켈룩',count:128,series:'183 68 25',part:'A'},
 '1836825-b':{path:'1836825-b.json',zh:'183 68 25 · 第2章',ko:'183 68 25 B',author:'켈룩',count:146,series:'183 68 25',part:'B'},
 '1836825-c':{path:'1836825-c.json',zh:'183 68 25 · 第3章',ko:'183 68 25 C',author:'켈룩',count:155,series:'183 68 25',part:'C'},
 '1836825-d':{path:'1836825-d.json',zh:'183 68 25 · 第4章',ko:'183 68 25 D',author:'켈룩',count:131,series:'183 68 25',part:'D'},
 '1836825-e':{path:'1836825-e.json',zh:'183 68 25 · 第5章',ko:'183 68 25 E',author:'켈룩',count:186,series:'183 68 25',part:'E'},
 "sea-1":{path:"sea-1.json",zh:"你好，我的海 · 第1章",ko:"안녕, 나의 바다. 1",author:"장마",count:210,series:"你好，我的海",part:"1",index:1,total:7,translation:"complete"},
 "sea-2":{path:"sea-2.json",zh:"你好，我的海 · 第2章",ko:"안녕, 나의 바다. 2",author:"장마",count:168,series:"你好，我的海",part:"2",index:2,total:7,translation:"complete"},
 "sea-3":{path:"sea-3.json",zh:"你好，我的海 · 第3章",ko:"안녕, 나의 바다. 3",author:"장마",count:111,series:"你好，我的海",part:"3",index:3,total:7,translation:"complete"},
 "sea-4":{path:"sea-4.json",zh:"你好，我的海 · 第4章",ko:"안녕, 나의 바다. 4",author:"장마",count:183,series:"你好，我的海",part:"4",index:4,total:7,translation:"complete"},
 "sea-5":{path:"sea-5.json",zh:"你好，我的海 · 第5章",ko:"안녕, 나의 바다. 5",author:"장마",count:205,series:"你好，我的海",part:"5",index:5,total:7,translation:"complete"},
 "sea-6":{path:"sea-6.json",zh:"你好，我的海 · 第6章",ko:"안녕, 나의 바다. 6",author:"장마",count:159,series:"你好，我的海",part:"6",index:6,total:7,translation:"complete"},
 "sea-7":{path:"sea-7.json",zh:"你好，我的海 · 第7章（完结）",ko:"안녕, 나의 바다. 7",author:"장마",count:289,series:"你好，我的海",part:"7",index:7,total:7,translation:"complete"},
 "raspberry-a":{path:"raspberry-a.json",zh:"覆盆子时光 · A",ko:"라즈베리 타임 A",author:"간쇼아",count:190,series:"覆盆子时光",part:"A",index:1,total:6,translation:"complete"},
 "raspberry-b":{path:"raspberry-b.json",zh:"覆盆子时光 · B",ko:"라즈베리 타임 B",author:"간쇼아",count:185,series:"覆盆子时光",part:"B",index:2,total:6,translation:"complete"},
 "raspberry-c":{path:"raspberry-c.json",zh:"覆盆子时光 · C",ko:"라즈베리 타임 C",author:"간쇼아",count:172,series:"覆盆子时光",part:"C",index:3,total:6,translation:"complete"},
 "raspberry-d":{path:"raspberry-d.json",zh:"覆盆子时光 · D",ko:"라즈베리 타임 D",author:"간쇼아",count:124,series:"覆盆子时光",part:"D",index:4,total:6,translation:"complete"},
 "raspberry-e":{path:"raspberry-e.json",zh:"覆盆子时光 · E",ko:"라즈베리 타임 E",author:"간쇼아",count:139,series:"覆盆子时光",part:"E",index:5,total:6,translation:"complete"},
 "raspberry-f":{path:"raspberry-f.json",zh:"覆盆子时光 · F",ko:"라즈베리 타임 F",author:"간쇼아",count:136,series:"覆盆子时光",part:"F",index:6,total:6,translation:"complete"},
 "cross-gang-1":{path:"cross-gang-1.json",zh:"Cross Gang · 第1章",ko:"c25th, Cross Gang 01",author:"간쇼아",count:356,series:"Cross Gang",part:"1",index:1,total:3,translation:"complete"},
 "cross-gang-2":{path:"cross-gang-2.json",zh:"Cross Gang · 第2章",ko:"c25th, Cross Gang 02",author:"간쇼아",count:539,series:"Cross Gang",part:"2",index:2,total:3,translation:"complete"},
 "cross-gang-3":{path:"cross-gang-3.json",zh:"Cross Gang · 第3章",ko:"c25th, Cross Gang 03",author:"간쇼아",count:415,series:"Cross Gang",part:"3",index:3,total:3,translation:"partial-ko-original"},
 "cgrade-1":{path:"cgrade-1.json", zh:"C级人生 · 第1章", ko:"씨끕인생 (1/5)", author:"us", count:157, translation:"complete", series:"C级人生", part:"1", index:1, total:7},
 "cgrade-2":{path:"cgrade-2.json", zh:"C级人生 · 第2章", ko:"씨끕인생 (2/5)", author:"us", count:116, translation:"complete", series:"C级人生", part:"2", index:2, total:7},
 "cgrade-3":{path:"cgrade-3.json", zh:"C级人生 · 第3章", ko:"씨끕인생 (3/5)", author:"us", count:109, translation:"complete", series:"C级人生", part:"3", index:3, total:7},
 "cgrade-4":{path:"cgrade-4.json", zh:"C级人生 · 第4章", ko:"씨끕인생 (4/5)", author:"us", count:90, translation:"complete", series:"C级人生", part:"4", index:4, total:7},
 "cgrade-5":{path:"cgrade-5.json", zh:"C级人生 · 第5章（完）", ko:"씨끕인생 (5/5) 완", author:"us", count:171, translation:"complete", series:"C级人生", part:"5", index:5, total:7},
 "cgrade-extra1":{path:"cgrade-extra1.json", zh:"C级人生 · 番外 +1", ko:"씨끕인생 +1", author:"us", count:152, translation:"complete", series:"C级人生", part:"+1", index:6, total:7},
 "cgrade-extra2":{path:"cgrade-extra2.json", zh:"C级人生 · 番外 +2", ko:"씨끕인생 +2", author:"us", count:234, translation:"complete", series:"C级人生", part:"+2", index:7, total:7},
 "first-person-pov":{path:"first-person-pov.json", zh:"第一人称主角视角", ko:"1인칭 주인공 시점", author:"us", count:261, translation:"complete"},
 "ice-ice-1":{path:"ice-ice-1.json",zh:"ICE ICE IT’S LIT · 第1章",ko:"아이스 아이스 잇츠릿 1",author:"모서리",count:174,series:"ICE ICE IT’S LIT",part:"1",index:1,total:9,translation:"complete"},
 "ice-ice-2":{path:"ice-ice-2.json",zh:"ICE ICE IT’S LIT · 第2章",ko:"아이스 아이스 잇츠릿 2",author:"모서리",count:195,series:"ICE ICE IT’S LIT",part:"2",index:2,total:9,translation:"complete"},
 "ice-ice-3":{path:"ice-ice-3.json",zh:"ICE ICE IT’S LIT · 第3章",ko:"아이스 아이스 잇츠릿 3",author:"모서리",count:166,series:"ICE ICE IT’S LIT",part:"3",index:3,total:9,translation:"complete"},
 "ice-ice-4":{path:"ice-ice-4.json",zh:"ICE ICE IT’S LIT · 第4章",ko:"아이스 아이스 잇츠릿 4",author:"모서리",count:194,series:"ICE ICE IT’S LIT",part:"4",index:4,total:9,translation:"complete"},
 "ice-ice-5":{path:"ice-ice-5.json",zh:"ICE ICE IT’S LIT · 第5章",ko:"아이스 아이스 잇츠릿 5",author:"모서리",count:183,series:"ICE ICE IT’S LIT",part:"5",index:5,total:9,translation:"complete"},
 "ice-ice-6":{path:"ice-ice-6.json",zh:"ICE ICE IT’S LIT · 第6章",ko:"아이스 아이스 잇츠릿 6",author:"모서리",count:185,series:"ICE ICE IT’S LIT",part:"6",index:6,total:9,translation:"complete"},
 "ice-ice-7":{path:"ice-ice-7.json",zh:"ICE ICE IT’S LIT · 第7章",ko:"아이스 아이스 잇츠릿 7",author:"모서리",count:201,series:"ICE ICE IT’S LIT",part:"7",index:7,total:9,translation:"complete"},
 "ice-ice-8-9":{path:"ice-ice-8-9.json",zh:"ICE ICE IT’S LIT · 第8—9章",ko:"아이스 아이스 잇츠릿 8—9",author:"모서리",count:300,series:"ICE ICE IT’S LIT",part:"8—9",index:8,total:9,translation:"complete"},
 "ice-ice-10":{path:"ice-ice-10.json",zh:"ICE ICE IT’S LIT · 第10章（完结）",ko:"아이스 아이스 잇츠릿 10",author:"모서리",count:355,series:"ICE ICE IT’S LIT",part:"10",index:9,total:9,translation:"complete"},
};

const $=s=>document.querySelector(s);
const store='between-lines-v2';
const get=(key,fallback)=>{try{const val=localStorage.getItem(store+':'+key);return val===null?fallback:JSON.parse(val)}catch{return fallback}};
const set=(key,val)=>{try{localStorage.setItem(store+':'+key,JSON.stringify(val))}catch{}};
const custom=()=>get('custom-ids',[]);
let current=null, currentId=null, activeView='reader', font=get('simple-font-size',1), searchText='', restoring=false, lastY=0, saveTimer=null;
const show=(el,yes)=>el.classList.toggle('hidden',!yes);
function notify(message){const n=$('#toast');n.textContent=message;show(n,true);clearTimeout(notify.timer);notify.timer=setTimeout(()=>show(n,false),3500)}
function view(name){
 if(activeView==='reader'&&currentId){lastY=window.scrollY;set('scroll:'+currentId,lastY)}
 activeView=name;show($('#reader-view'),name==='reader');show($('#import-view'),name==='import');
 window.scrollTo(0,name==='reader'?lastY:0);
}
function entryInfo(id){if(BUILTINS[id])return BUILTINS[id];const found=custom().find(x=>x.id===id);return found?{zh:found.title,author:'本地导入',translation:'ko-only'}:null}
function shelf(){
 const el=$('#book-list');el.replaceChildren();const seen=new Set();
 function add(id,b){
  const btn=document.createElement('button');btn.type='button';btn.className='book-entry'+(currentId===id?' is-reading':'')+(b.series?' series-chapter':'');
  const info=document.createElement('span');info.className='book-info';
  const name=document.createElement('strong');name.textContent=b.zh||b.ko||id;
  const meta=document.createElement('span');meta.className='book-meta';
  const incomplete=b.translation==='partial-ko-original'||b.translation==='ko-only'||b.translation==='partial-zh';
  meta.textContent=(b.author||'作者未标注')+' · '+(b.count||'?')+' 段 · '+(incomplete?'部分中文待补':'中文可读');
  info.append(name,meta);
  const action=document.createElement('span');action.className='book-action';action.textContent=currentId===id?'继续阅读':'打开';
  btn.append(info,action);btn.addEventListener('click',()=>load(id));el.appendChild(btn);
 }
 for(const [id,b] of Object.entries(BUILTINS)){
  if(b.series&&!seen.has(b.series)){seen.add(b.series);const h=document.createElement('div');h.className='book-series-heading';h.textContent=b.series;el.appendChild(h)}
  add(id,b);
 }
 if(custom().length){const h=document.createElement('div');h.className='book-series-heading';h.textContent='以前导入到浏览器的文章';el.appendChild(h);for(const c of custom())add(c.id,{zh:c.title,author:'本地导入',translation:'ko-only'})}
}
function chapterNav(){
 const nav=$('#chapter-nav');nav.replaceChildren();const b=BUILTINS[currentId];
 if(!b||!b.series){show(nav,false);return}show(nav,true);
 const chapters=Object.entries(BUILTINS).filter(([,item])=>item.series===b.series).sort((x,y)=>(x[1].index||0)-(y[1].index||0));
 const index=chapters.findIndex(([id])=>id===currentId);
 const label=document.createElement('span');label.className='chapter-position';label.textContent=b.series+' · '+(index+1)+' / '+chapters.length;nav.appendChild(label);
 const links=document.createElement('div');links.className='chapter-links';
 for(const step of [-1,1]){const item=chapters[index+step];if(!item)continue;const btn=document.createElement('button');btn.type='button';btn.textContent=step<0?'上一章':'下一章';btn.addEventListener('click',()=>load(item[0]));links.appendChild(btn)}
 nav.appendChild(links);
}
function textParagraph(text,b,index){
 const section=document.createElement('section');section.className='story-par single';
 if(b.bubbleSide==='incoming'||b.bubbleSide==='outgoing')section.className+=' story-bubble story-bubble-'+b.bubbleSide;
 section.dataset.index=index;
 if(['left','center','right','justify'].includes(b.align))section.style.textAlign=b.align;
 const col=document.createElement('div');col.className='text-column translation';col.dataset.lang='zh';col.lang='zh-CN';
 const p=document.createElement('p');
 if(b.sourceEmphasisText&&text.includes(b.sourceEmphasisText)){
  const pos=text.indexOf(b.sourceEmphasisText);p.append(document.createTextNode(text.slice(0,pos)));
  const em=document.createElement('em');em.textContent=b.sourceEmphasisText;p.append(em,document.createTextNode(text.slice(pos+b.sourceEmphasisText.length)));
 }else p.textContent=text;
 col.append(p);section.append(col);return section;
}
function render(){
 if(!current)return;const box=$('#paragraphs'),frag=document.createDocumentFragment();
 $('#article-title').textContent=current.title?.zh||current.title?.ko||entryInfo(currentId)?.zh||'未命名';
 $('#article-author').textContent=current.author||entryInfo(currentId)?.author||'作者未标注';
 box.classList.toggle('original-layout',Boolean(current.sourceAudit||current.koZhToggle) && current.sourceAudit?.indentMode!=='none');
 const blocks=current.blocks||[];let unfinished=0,printed=0;
 blocks.forEach((b,i)=>{
  const value=b.koOnly?'':(b.zh||'').trim();
  if(searchText && !value.toLowerCase().includes(searchText))return;
  if(b.image&&(/^(data:image\/(png|jpeg|webp|gif);base64,|\.\/images\/|images\/|https:\/\/)/i.test(b.image))){
   const f=document.createElement('figure');f.className='story-media';f.dataset.index=i;
   const img=document.createElement('img');img.src=b.image;img.alt=b.imageAlt||'原文插图';img.loading='lazy';f.append(img);frag.append(f);return;
  }
  const embed=(b.embed||(/youtube-nocookie\.com\/embed\/([A-Za-z0-9_-]{11})/.exec(b.embedUrl||'')||[])[1]);
  if(embed&&/^[A-Za-z0-9_-]{11}$/.test(embed)){
   const f=document.createElement('figure');f.className='story-media';f.dataset.index=i;
   const frame=document.createElement('iframe');frame.title='原文嵌入的视频';frame.loading='lazy';
   frame.src='https://www.youtube-nocookie.com/embed/'+embed;frame.sandbox='allow-scripts allow-same-origin allow-presentation';frame.allow='fullscreen; picture-in-picture';frame.allowFullscreen=true;f.append(frame);frag.append(f);return;
  }
  if(b.imageMissing){const el=document.createElement('div');el.className='omission-inline';el.dataset.index=i;el.textContent='[原文图片未能从离线文件中恢复]';frag.append(el);return}
  if(b.spacer){const el=document.createElement('div');el.className='scene-space';el.dataset.index=i;el.style.height=Math.min(100,14*b.spacer)+'px';frag.append(el);return}
  if(b.heading){const h=document.createElement('h2');h.className='story-inner-heading';h.dataset.index=i;h.textContent=value||'（章节标题待译）';if(['left','center','right'].includes(b.align))h.style.textAlign=b.align;if(b.sourceEmphasis)h.style.fontStyle='italic';frag.append(h);return}
  if(b.ko==='＊'||b.ko==='*'||value==='＊'||value==='§'){const el=document.createElement('div');el.className='scene-break';el.dataset.index=i;el.textContent=value==='§'?'§':'＊';frag.append(el);return}
  if(!value){if(b.ko||b.koOnly){unfinished++;frag.append(textParagraph('（本段中文待译）',b,i))}return}
  printed++;frag.append(textParagraph(value,b,i));
 });
 if(!frag.childNodes.length){const p=document.createElement('p');p.textContent='没有找到匹配内容';frag.append(p)}
 box.replaceChildren(frag);$('#article-count').textContent=printed+' 段中文';
 $('#unfinished-note').textContent=unfinished?'本章有 '+unfinished+' 段中文待补，未把韩文原文冒充译文。':'';
 show($('#unfinished-note'),unfinished>0);
 chapterNav();
}
async function load(id){
 try{
  const b=BUILTINS[id];let data;
  if(b){const response=await fetch('./stories/'+b.path+'?v=20261106-selfish-v1');if(!response.ok)throw Error('HTTP '+response.status);if(b.path.endsWith('.json.gz')){if(typeof DecompressionStream==='undefined')throw Error('当前浏览器不支持压缩章节，请更新浏览器');const stream=new Blob([await response.arrayBuffer()]).stream().pipeThrough(new DecompressionStream('gzip'));data=await new Response(stream).json()}else data=await response.json()}
  else data=get('story-'+id,null);
  if(!data||!Array.isArray(data.blocks))throw Error('文章数据不存在');
  const old=get('translations:'+id,{});
  Object.entries(old).forEach(([k,trans])=>{if(data.blocks[+k]&&trans?.zh&&!data.blocks[+k].zh)data.blocks[+k].zh=trans.zh});
  restoring=true;current=data;currentId=id;searchText='';$('#search-input').value='';
  set('last-story',id);lastY=Number(get('scroll:'+id,0))||0;
  render();shelf();history.replaceState(null,'',location.pathname+'?story='+encodeURIComponent(id));
  view('reader');
  requestAnimationFrame(()=>{window.scrollTo(0,lastY);setTimeout(()=>{restoring=false},180)});
 }catch(e){notify('打开失败：'+e.message)}
}
$('#brand').addEventListener('click',()=>view('reader'));
$('#shelf-trigger').addEventListener('click',()=>{shelf();view('import')});
$('#type-trigger').addEventListener('click',()=>$('#type-panel').classList.toggle('hidden'));
$('#font-minus').addEventListener('click',()=>resize(-.08));
$('#font-plus').addEventListener('click',()=>resize(.08));
function resize(diff){font=Math.max(.78,Math.min(1.7,Math.round((font+diff)*100)/100));document.documentElement.style.setProperty('--scale',font);set('simple-font-size',font)}
$('#search-trigger').addEventListener('click',()=>$('#search-panel').classList.toggle('hidden'));
$('#search-input').addEventListener('input',e=>{searchText=e.target.value.trim().toLowerCase();render();window.scrollTo(0,0)});
$('#search-clear').addEventListener('click',()=>{searchText='';$('#search-input').value='';render();show($('#search-panel'),false)});
window.addEventListener('scroll',()=>{if(restoring||activeView!=='reader'||!currentId||searchText)return;clearTimeout(saveTimer);saveTimer=setTimeout(()=>{lastY=window.scrollY;set('scroll:'+currentId,lastY)},200)},{passive:true});
document.documentElement.style.setProperty('--scale',font);
const initial=new URLSearchParams(location.search).get('story')||get('last-story','alone-wrong-wolf-2');
load(entryInfo(initial)?initial:'alone-wrong-wolf-2');
})();