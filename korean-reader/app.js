/* 문장 사이 — static multilingual reader. No secret credentials are bundled. */
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const STORAGE='between-lines-v2';
const DEFAULT_ID='hanip';
const BUILTINS={
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
};
let story=null, currentId=DEFAULT_ID, font=1, query='', vocabFilter='all';
let mode='en-zh', lookupEnabled=true, activeView='reader', scrollSaveTimer=null, restoringScroll=false, lastReaderY=0;
let currentPopup=null, toastTimer=null, activeToken=null;
let showAllChinese=false;
const chineseOverrides=new Set(); // Paragraphs explicitly toggled away from the chapter-wide setting.
const volatileStorage=new Map();
const readStorage=(key,fallback)=>{if(volatileStorage.has(key))return volatileStorage.get(key);try{return JSON.parse(localStorage.getItem(STORAGE+':'+key))??fallback}catch{return fallback}};
const saveStorage=(key,val)=>{volatileStorage.set(key,val);try{localStorage.setItem(STORAGE+':'+key,JSON.stringify(val))}catch{/* Private/file contexts may block persistent storage; keep this reading session functional. */}};
let savedVocab=readStorage('vocab',[]);
lookupEnabled=readStorage('lookup-enabled',true);
const wordResultCache=new Map();
const koGloss={
'조승연':['曹承衍','Cho Seungyeon','人名'],'김우석':['金宇硕','Kim Wooseok','人名'],'승연':['承衍','Seungyeon','人名'],'우석':['宇硕','Wooseok','人名'],'종찬':['钟灿','Jongchan','人名'],
'한입':['一口','a bite','名词'],'한입만':['就一口；只吃一口','just one bite','惯用表达'],'입':['嘴；口','mouth; bite','名词'],'먹다':['吃','to eat','动词'],'먹':['吃（词干）','eat','动词词干'],'먹었':['吃了','ate','动词变化'],'먹는':['正在吃的','eating','定语形'],'먹어':['吃；吃吧','eat','动词变化'],'먹을':['要吃的','to eat','定语形'],
'빵':['面包','bread','名词'],'머핀':['玛芬蛋糕','muffin','名词'],'포장지':['包装纸','wrapper','名词'],'과자':['零食；点心','snack','名词'],'음식':['食物','food','名词'],'밥':['米饭；饭','rice; meal','名词'],'점심':['午饭','lunch','名词'],'급식':['学校配餐','school lunch','名词'],'떡볶이':['辣炒年糕','tteokbokki','名词'],'떡':['年糕；米糕','rice cake','名词'],'어묵':['鱼糕','fish cake','名词'],'국물':['汤；汤汁','broth','名词'],'소스':['酱汁','sauce','名词'],'맵':['辣（맵다词干）','spicy','形容词词干'],'맛있':['好吃','delicious','形容词词干'],'맛':['味道','taste','名词'],
'나':['我','I; me','代词'],'너':['你','you','代词'],'내':['我的','my','代词'],'네':['你的；嗯（依语境）','your; yes','代词/应答'],'우리':['我们；我们的','we; our','代词'],'우리들':['我们','we','代词'],'사람':['人','person','名词'],'친구':['朋友','friend','名词'],'형':['哥哥（男性称年长男性）','older brother','称呼'],'선생님':['老师','teacher','名词'],'코치':['教练','coach','名词'],'엄마':['妈妈','mom','名词'],'팬':['粉丝','fan','名词'],'애들':['孩子们；同学们','kids; classmates','名词'],
'학교':['学校','school','名词'],'고등학교':['高中','high school','名词'],'중학교':['初中','middle school','名词'],'교실':['教室','classroom','名词'],'교문':['校门','school gate','名词'],'복도':['走廊','hallway','名词'],'수업':['课程；上课','class; lesson','名词'],'영어':['英语','English','名词'],'소개':['介绍','introduction','名词'],'교복':['校服','school uniform','名词'],'가방':['包','bag','名词'],'자리':['座位；位置','seat; place','名词'],'책상':['课桌','desk','名词'],'종':['铃；钟','bell','名词'],'지각':['迟到','tardiness','名词'],'학년':['年级','school grade','名词'],'반':['班级','class','名词'],'반장':['班长','class president','名词'],
'수영':['游泳','swimming','名词'],'수영장':['游泳池','swimming pool','名词'],'선수':['运动员','athlete','名词'],'운동':['运动','exercise; sport','名词'],'훈련':['训练','training','名词'],'합숙':['集训；集体住宿','training camp','名词'],'대회':['比赛','competition','名词'],'세계':['世界','world','名词'],'몸':['身体','body','名词'],'손':['手','hand','名词'],'손목':['手腕','wrist','名词'],'팔':['胳膊','arm','名词'],'다리':['腿；桥','leg; bridge','名词'],'발':['脚','foot','名词'],'얼굴':['脸','face','名词'],'눈':['眼睛；雪','eye; snow','名词'],'머리':['头；头发','head; hair','名词'],'입술':['嘴唇','lips','名词'],'허리':['腰','waist','名词'],'키':['身高','height','名词'],'목소리':['声音','voice','名词'],'표정':['表情','expression','名词'],'마음':['心；心情','heart; mind','名词'],
'아프':['疼；生病','hurt; be sick','形容词词干'],'아파':['疼','hurts','形容词变化'],'병원':['医院','hospital','名词'],'약':['药','medicine','名词'],'붕대':['绷带','bandage','名词'],'다치':['受伤','get hurt','动词词干'],'괜찮':['没关系；没事','be okay','形容词词干'],'괜찮아':['没事',"it is okay",'表达'],'책임':['责任','responsibility','名词'],'걱정':['担心','worry','名词'],'무서':['害怕','afraid','形容词词干'],'미안':['抱歉','sorry','形容词词干'],'고맙':['感谢','grateful','形容词词干'],'고마워':['谢谢','thank you','表达'],
'좋아':['好；喜欢','good; like','形容词/动词变化'],'좋':['好','good','形容词词干'],'싫':['讨厌','dislike','形容词词干'],'예쁘':['漂亮','pretty','形容词词干'],'귀엽':['可爱','cute','形容词词干'],'작':['小','small','形容词词干'],'크':['大','big','形容词词干'],'많':['多','many','形容词词干'],'조금':['一点点','a little','副词/名词'],'너무':['太；非常','too; very','副词'],'진짜':['真的','really','副词'],'정말':['真的','really','副词'],'존나':['他妈的；非常（粗俗强调）','fucking; extremely','粗口/副词'],'시발':['操；他妈的（粗口）','fuck','粗口'],'씨발':['操；他妈的（粗口）','fuck','粗口'],'꺼져':['滚开','get lost','命令'],'야':['喂；呀（非敬语）','hey','感叹词'],'아':['啊','ah','感叹词'],'어':['呃；哦','uh; oh','感叹词'],'응':['嗯；是','yeah','应答'],'아니':['不；不是','no','应答'],'왜':['为什么','why','疑问词'],'뭐':['什么','what','疑问词'],'누구':['谁','who','疑问词'],'어떻게':['怎么；如何','how','副词'],'언제':['什么时候','when','疑问词'],'여기':['这里','here','代词'],'저기':['那里；那个','there; excuse me','代词/感叹词'],'지금':['现在','now','副词'],'오늘':['今天','today','名词'],'내일':['明天','tomorrow','名词'],'어제':['昨天','yesterday','名词'],'이번':['这次','this time','名词'],'그때':['那时','then','名词'],'처음':['最初；第一次','first time','名词'],'다시':['再次','again','副词'],'계속':['继续；不断','continuously','副词'],'혼자':['一个人','alone','副词'],'같이':['一起','together','副词'],'먼저':['先','first','副词'],'바로':['马上；正好','right away; exactly','副词'],'빨리':['快点','quickly','副词'],'천천히':['慢慢地','slowly','副词'],
'말':['话；言语','words; speech','名词'],'얘기':['故事；谈话','story; talk','名词'],'보다':['看','to see','动词'],'보':['看（词干）','see','动词词干'],'봤':['看过；看了','saw','动词变化'],'가다':['去','to go','动词'],'가':['去（词干/命令）','go','动词词干'],'가고':['去并且','go and','动词变化'],'오다':['来','to come','动词'],'왔':['来了','came','动词变化'],'하다':['做','to do','动词'],'해':['做；做吧','do','动词变化'],'했':['做了','did','动词变化'],'알다':['知道','to know','动词'],'알아':['知道','know','动词变化'],'모르':['不知道','not know','动词词干'],'주다':['给','to give','动词'],'줘':['给我；给','give','动词变化'],'줘요':['请给','please give','敬语'],'있다':['有；在','to exist; have','动词'],'있':['有；在（词干）','have; be','动词词干'],'없다':['没有','to not exist','形容词'],'없':['没有（词干）','not have','词干'],'싶':['想要','want to','词干'],'생각':['想法','thought','名词'],'기억':['记忆','memory','名词'],'웃':['笑','laugh','动词词干'],'울':['哭','cry','动词词干'],'기다리':['等待','wait','动词词干'],'잡':['抓住','grab','动词词干'],'안':['不（否定）','not','副词'],'못':['不能','cannot','副词'],'잘':['好好地；擅长','well','副词'],'더':['更；再','more','副词'],'또':['又；再','again','副词'],'그냥':['就；只是','just','副词'],'아직':['还；尚未','still; not yet','副词'],'벌써':['已经','already','副词'],'드디어':['终于','finally','副词'],'정신':['精神；意识','mind; senses','名词'],'숨':['呼吸','breath','名词'],'물':['水','water','名词'],'소리':['声音','sound','名词'],'사진':['照片','photo','名词'],'시간':['时间','time','名词'],'하루':['一天','a day','名词'],'일':['事情；工作','work; thing','名词'],'비밀':['秘密','secret','名词'],'고백':['告白','confession','名词'],'사랑':['爱情；爱','love','名词']};
const enGloss={bite:'一口；咬',muffin:'玛芬蛋糕',wrapper:'包装纸',familiar:'熟悉的',hesitation:'犹豫',glimpse:'一瞥',swear:'骂脏话',vulgar:'粗俗的',crouch:'蹲下',clutch:'紧紧抓住',whisper:'低语',training:'训练',camp:'集训营',athlete:'运动员',prodigy:'天才；神童',coach:'教练',homeroom:'班主任时间／班级',uniform:'校服',hallway:'走廊',classmate:'同班同学',cafeteria:'食堂',slump:'低迷期',awkward:'尴尬的',adorable:'可爱的',stagger:'摇晃地走',wrist:'手腕',bandage:'绷带',injury:'受伤',patch:'膏药；贴片',reluctantly:'不情愿地',furiously:'猛烈地；拼命地',stare:'盯着看',tender:'温柔的',prickly:'易怒的；带刺的',sigh:'叹气',grin:'咧嘴笑',blush:'脸红',blushing:'脸红的',flutter:'飘落；扑腾',flail:'胡乱挥动',splutter:'呛水；结结巴巴',splash:'水花；溅起',lane:'泳道',stroke:'游泳划水动作',pool:'游泳池',chlorine:'氯；泳池消毒剂',tease:'取笑',teasing:'取笑',squirrel:'松鼠',hamster:'仓鼠',eyebrow:'眉毛',heartbeat:'心跳',longing:'思念；渴望',reckless:'鲁莽的',responsibility:'责任',responsible:'负责的',terrified:'吓坏的',delicious:'美味的',spicy:'辣的',broth:'汤汁',rice:'米饭',cake:'蛋糕',handsome:'帅气的',mouthful:'满嘴的量；一口',whispered:'低语的；低声说',dramatic:'戏剧性的',ordinary:'普通的',gladly:'欣然；乐意地',enchant:'迷住',embarrass:'使难为情',confession:'告白'};
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.add('hidden'),3200)}
function normalizeWord(word){return word.replace(/^[^\p{L}]+|[^\p{L}]+$/gu,'').trim()}
function findKo(raw){const word=normalizeWord(raw),direct=koGloss[word];if(direct)return {data:direct,lemma:word};const commonSuffix=['으로부터','에서부터','한테서','이라고','이라고요','에게서','에게','한테','으로','처럼','보다','까지','부터','라도','이라','라고','하고','이랑','이나','만큼','에서','에는','으로','이야','이야기','한','이','가','은','는','을','를','도','의','에','만','랑','과','와','로','야','아','요','고','서','지','다','며','면'];for(const suffix of commonSuffix){if(word.endsWith(suffix)&&word.length>suffix.length+1){const stem=word.slice(0,-suffix.length);if(koGloss[stem])return {data:koGloss[stem],lemma:stem,suffix};}}let matches=Object.keys(koGloss).filter(k=>k.length>=2&&word.startsWith(k)&&word.length-k.length<=5).sort((a,b)=>b.length-a.length);return matches.length?{data:koGloss[matches[0]],lemma:matches[0],approx:true}:null}
function findEn(raw){
 const w=normalizeWord(raw).toLowerCase().replace(/’/g,"'");
 const variations=[w,w.replace(/'(s|re|ve|d|ll)$/,''),w.replace(/ies$/,'y'),w.replace(/ves$/,'f'),w.replace(/ing$/,''),w.replace(/ing$/,'e'),w.replace(/(\w)\1ing$/,'$1'),w.replace(/ed$/,''),w.replace(/ed$/,'e'),w.replace(/(\w)\1ed$/,'$1'),w.replace(/es$/,''),w.replace(/s$/,'')];
 const core=window.EN_ZH_CORE||{};
 for(const lemma of new Set(variations)){
  if(enGloss[lemma])return {lemma,mean:enGloss[lemma],pron:lemma==='complete'?'/kəmˈpliːt/':''};
  if(core[lemma])return {lemma,mean:core[lemma],pron:lemma==='complete'?'/kəmˈpliːt/':''};
 }
 return null
}
function speech(t,lang){if(!('speechSynthesis'in window)){toast('当前浏览器不支持语音朗读');return}try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=lang==='ko'?'ko-KR':'en-US';u.rate=lang==='ko'?.78:.85;u.pitch=1;speechSynthesis.speak(u)}catch{toast('当前设备无法朗读此语言')}}
function tokenize(container,text,lang,idx){const re=lang==='ko'?/[가-힣]+/g:/[A-Za-z]+(?:['’][A-Za-z]+)*/g;let last=0,m;while((m=re.exec(text))){if(m.index>last)container.appendChild(document.createTextNode(text.slice(last,m.index)));const btn=document.createElement('button');btn.className='word';btn.type='button';btn.textContent=m[0];btn.dataset.lang=lang;btn.dataset.idx=idx;btn.dataset.word=m[0];btn.setAttribute('aria-label','查询 '+m[0]);container.appendChild(btn);last=re.lastIndex}if(last<text.length)container.appendChild(document.createTextNode(text.slice(last)))}
function makeColumn(text,lang,idx,showCaption){
 const el=document.createElement('div');el.className='text-column translation';el.dataset.lang=lang;el.lang=lang==='zh'?'zh-CN':lang==='ko'?'ko':'en';
 if(showCaption){const caption=document.createElement('div');caption.className='lang-caption';caption.textContent=lang==='ko'?'한국어 · 原文':lang==='en'?'English':'中文';el.appendChild(caption)}
 const p=document.createElement('p');
 if(!text){p.className='empty-lang';p.textContent='尚无译文，可到「更多 → 翻译设置」翻译';}
 else if(lookupEnabled&&(lang==='ko'||lang==='en'))tokenize(p,text,lang,idx);
 else p.textContent=text;
 el.appendChild(p);return el;
}
function displayedLangs(){return mode==='ko-zh'?['zh','ko']:mode==='en-zh'?['en','zh']:mode==='all'?['zh','en','ko']:[mode]}
function isChineseVisible(i){return chineseOverrides.has(i)?!showAllChinese:showAllChinese}
function setChineseParagraph(section,i,visible){
 if(!section||!story)return;
 const b=story.blocks[i];
 if(!b||!b.en||!b.zh||b.koOnly)return;
 const existing=section.querySelector('.text-column[data-lang="zh"]');
 if(visible&&!existing){
  const zhColumn=makeColumn(b.zh,'zh',i,true);
  const toggle=section.querySelector('[data-toggle-chinese]');
  section.insertBefore(zhColumn,toggle||null);
 }else if(!visible&&existing)existing.remove();
 section.classList.toggle('compared',visible);
 section.classList.toggle('single',!visible);
 const toggle=section.querySelector('[data-toggle-chinese]');
 if(toggle){
  toggle.textContent=visible?'收起中文 −':'显示中文 ＋';
  toggle.setAttribute('aria-expanded',String(visible));
  toggle.setAttribute('aria-label',visible?'收起本段中文':'显示本段中文');
 }
}
function updateTopChineseControl(hasEn){
 const btn=$('#compare-trigger');
 btn.disabled=!hasEn;
 btn.textContent=mode==='en-zh'&&showAllChinese?'收起全部中文':'显示全部中文';
 btn.setAttribute('aria-pressed',String(mode==='en-zh'&&showAllChinese));
 btn.classList.toggle('active',mode==='en-zh'&&showAllChinese);
 btn.title=hasEn?'一键显示或收起整章的中文翻译':'本章没有完整英文译文';
}
function captureAnchor(){if(activeView!=='reader')return null;const els=$$('#paragraphs > [data-index]');for(const el of els){const r=el.getBoundingClientRect();if(r.bottom>Math.min(window.innerHeight*.34,180))return {i:Number(el.dataset.index),y:r.top}}return null}
function restoreAnchor(a){if(!a)return;const el=$(`#paragraphs > [data-index="${a.i}"]`);if(el)window.scrollBy(0,el.getBoundingClientRect().top-a.y)}
function renderStory(preserveScroll=false){
 if(!story)return;
 const anchor=preserveScroll?captureAnchor():null;
 $('#article-title').textContent=story.title.zh||story.title.ko||story.title.en||'未命名';
 $('#article-sub').textContent=story.title.ko||'';
 $('.byline').classList.toggle('long-title',(story.title.ko||'').length>30);
 $('#article-author').textContent=story.author||'我的文章';
 $('#article-count').textContent=`${story.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*').length} 段`;
 const langs=displayedLangs(),compared=langs.length>1;
 const matches=query?story.blocks.map((b,i)=>({b,i})).filter(({b})=>['ko','zh','en'].some(k=>(b[k]||'').toLocaleLowerCase().includes(query))):story.blocks.map((b,i)=>({b,i}));
 const box=$('#paragraphs');const frag=document.createDocumentFragment();let originalOnlyShown=false;
 if(!matches.length){const el=document.createElement('div');el.className='empty';el.textContent='没有找到包含搜索词的段落';frag.appendChild(el)}
 for(const {b,i} of matches){
  if(b.koOnly && !originalOnlyShown){const note=document.createElement('div');note.className='omission-inline';note.textContent='本段保留韩文原文；其余已翻译的对话按正常阅读模式显示。';frag.appendChild(note);originalOnlyShown=true;}
  if(b.image&&/^data:image\/(png|jpeg|webp|gif);base64,/.test(b.image)){
   const figure=document.createElement('figure');figure.className='story-media';figure.dataset.index=i;
   const img=document.createElement('img');img.src=b.image;img.alt='原文插图';img.loading='lazy';img.style.maxWidth='100%';figure.appendChild(img);frag.appendChild(figure);continue;
  }
  if(b.embed){
    const figure=document.createElement('figure');figure.className='story-media';figure.dataset.index=i;
    const iframe=document.createElement('iframe');iframe.title='原文附带的视频';iframe.loading='lazy';iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.sandbox='allow-scripts allow-same-origin allow-presentation';iframe.allow='fullscreen; picture-in-picture';iframe.allowFullscreen=true;
    if(/^[a-zA-Z0-9_-]{11}$/.test(b.embed)){iframe.src='https://www.youtube-nocookie.com/embed/'+b.embed;figure.appendChild(iframe)}
    frag.appendChild(figure);continue;
  }
  if(b.heading){const el=document.createElement('h2');el.className='story-inner-heading';el.dataset.index=i;el.textContent=mode==='ko'?b.ko:(mode==='en'||mode==='en-zh'?b.en||b.zh||b.ko:b.zh||b.ko);frag.appendChild(el);continue}
  if(b.spacer){const el=document.createElement('div');el.className='scene-space';el.dataset.index=i;el.style.height=Math.min(100,14*b.spacer)+'px';frag.appendChild(el);continue}
  if(b.ko==='＊'||b.ko==='*'){const el=document.createElement('div');el.className='scene-break';el.textContent='＊';el.dataset.index=i;frag.appendChild(el);continue}
  const canToggle=!b.koOnly&&Boolean(b.zh&&b.en)&&mode==='en-zh';
  const visibleChinese=canToggle&&isChineseVisible(i);
  const localLangs=b.koOnly?['ko']:mode==='en-zh'&&b.en?(visibleChinese?['en','zh']:['en']):langs;
  const localCompared=localLangs.length>1;
  const section=document.createElement('section');section.className='story-par '+(localCompared?'compared':'single')+(localLangs.length===3?' triple':'')+(query?' search-result':'');section.dataset.index=i;
  for(const lang of localLangs)section.appendChild(makeColumn(b[lang]||'',lang,i,localCompared&&lang!=='en'));
  if(canToggle){
   const btn=document.createElement('button');btn.className='paragraph-translate';btn.type='button';
   btn.dataset.toggleChinese=String(i);btn.textContent=visibleChinese?'收起中文 −':'显示中文 ＋';
   btn.setAttribute('aria-expanded',String(visibleChinese));btn.setAttribute('aria-label',visibleChinese?'收起本段中文':'显示本段中文');
   section.appendChild(btn)
  }
  frag.appendChild(section)
 }
 box.replaceChildren(frag);
 const readable=story.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*');
 const hasZh=readable.every(b=>b.koOnly||Boolean(b.zh)),hasEn=readable.every(b=>b.koOnly||Boolean(b.en));
 $$('#compare-panel [data-mode]').forEach(el=>{const m=el.dataset.mode;const usable=(m==='ko'||((!m.includes('zh')||hasZh)&&(!m.includes('en')||hasEn)));el.disabled=!usable;el.title=usable?'':'该语言译文尚未补全，请先在「更多 → 翻译设置」翻译';const selected=m===mode;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected))});
 const availability=$('#translation-availability');if(availability){availability.classList.toggle('hidden',hasZh&&hasEn&&story.translationStatus!=='partial-ko-original');availability.textContent=story.translationStatus==='partial-ko-original'?`本章有${story.originalOnlyParagraphs||story.blocks.filter(b=>b.koOnly).length}段保留韩文原文，其余部分可正常切换对照。`:hasZh?'本篇英文译文尚未补全。可到「更多 → 翻译设置」翻译。':'本篇暂未备齐中文和英文译文，因此默认阅读韩文原文。可到「更多 → 翻译设置」翻译。'}
 renderChapterNav();
 updateTopChineseControl(hasEn);
 const lookupBtn=$('#lookup-quick');lookupBtn.textContent=lookupEnabled?'点词：开':'点词：关';lookupBtn.classList.toggle('active',lookupEnabled);lookupBtn.setAttribute('aria-pressed',String(lookupEnabled));
 $('#lookup-toggle').checked=lookupEnabled;
 if(anchor)restoreAnchor(anchor);
}
function renderChapterNav(){
 const nav=$('#chapter-nav');if(!nav)return;nav.replaceChildren();
 const b=BUILTINS[currentId];if(!b?.series){nav.classList.add('hidden');return}
 nav.classList.remove('hidden');
 const chapters=Object.entries(BUILTINS).filter(([,v])=>v.series===b.series).sort((a,z)=>(a[1].index??'ABCDE'.indexOf(a[1].part)+1)-(z[1].index??'ABCDE'.indexOf(z[1].part)+1));
 const idx=chapters.findIndex(([id])=>id===currentId);
 const pos=document.createElement('span');pos.className='chapter-position';pos.textContent=`${b.series} · ${idx+1} / ${chapters.length}`;nav.appendChild(pos);
 const controls=document.createElement('div');controls.className='chapter-links';
 for(const [offset,label] of [[-1,'上一章'],[1,'下一章']]){const next=idx+offset;if(next<0||next>=chapters.length)continue;const a=document.createElement('button');a.type='button';a.textContent=label+' · '+chapters[next][1].part;a.addEventListener('click',()=>loadStory(chapters[next][0]));controls.appendChild(a)}
 nav.appendChild(controls)
}
function closeMenus(){for(const id of ['compare-panel','type-panel','more-panel'])$('#'+id).classList.add('hidden');$('#mode-trigger').setAttribute('aria-expanded','false');$('#type-trigger').setAttribute('aria-expanded','false');$('#more-trigger').setAttribute('aria-expanded','false')}
function togglePanel(panel,trigger){const open=$('#'+panel).classList.contains('hidden');closeMenus();if(open){$('#'+panel).classList.remove('hidden');$('#'+trigger).setAttribute('aria-expanded','true')}}
function showView(which){
 const previous=activeView;if(previous==='reader'&&which!=='reader'){lastReaderY=window.scrollY;saveStorage('scroll:'+currentId,lastReaderY)}
 activeView=which;$$('.view').forEach(v=>v.classList.toggle('hidden',v.id!==which+'-view'));closeMenus();hidePopup();
 if(which==='vocab')renderVocab();if(which==='import')renderStorySelect();window.scrollTo({top:which==='reader'&&previous!=='reader'?lastReaderY:0,behavior:'instant'})
}
const storyKey=id=>'story-'+id;
function customStories(){return readStorage('custom-ids',[])}
function renderStorySelect(){
 const select=$('#story-select');select.replaceChildren();
 const option=(id,title)=>{const o=document.createElement('option');o.value=id;o.textContent=title;select.appendChild(o)};
 Object.entries(BUILTINS).forEach(([id,b])=>option(id,b.zh));
 for(const x of customStories())option(x.id,x.title);
 select.value=currentId;
 const shelf=$('#book-list');shelf.replaceChildren();
 const started=new Set();
 for(const [id,b] of Object.entries(BUILTINS)){
  if(b.series&&!started.has(b.series)){
   started.add(b.series);const group=document.createElement('div');group.className='book-series-heading';
   group.textContent=b.series+' · '+Object.values(BUILTINS).filter(x=>x.series===b.series).length+'章';shelf.appendChild(group)
  }
  const item=document.createElement('button');item.type='button';item.className='book-entry'+(id===currentId?' is-reading':'');
  const left=document.createElement('span');left.className='book-info';
  const title=document.createElement('strong');title.textContent=b.series?(String(b.part||'').startsWith('+')?'番外 '+b.part:'第'+(b.index??'ABCDE'.indexOf(b.part)+1)+'章 · '+b.part):b.zh;
  const sub=document.createElement('span');sub.className='book-original';sub.textContent=b.series?b.ko:b.ko;
  const meta=document.createElement('span');meta.className='book-meta';
  meta.textContent=b.author+' · '+b.count+' 段 · '+(b.translation==='ko-only'?'韩文原文（中英文未译）':b.translation==='partial-ko-original'?'三语可读 · 部分段落保留韩文':b.translation==='complete'||b.series==='183 68 25'||id==='existence-weight'||id==='hanip'||id==='cover-eyes'?'三语已译':'按原文阅读');
  left.append(title,sub,meta);const right=document.createElement('span');right.className='book-action';right.textContent=id===currentId?'继续阅读':'开始阅读';
  item.append(left,right);if(b.series)item.classList.add('series-chapter');item.addEventListener('click',()=>loadStory(id));shelf.appendChild(item);
 }
 for(const item of customStories()){
  const el=document.createElement('button');el.type='button';el.className='book-entry'+(item.id===currentId?' is-reading':'');
  const title=document.createElement('strong');title.textContent=item.title;
  const right=document.createElement('span');right.className='book-action';right.textContent=item.id===currentId?'继续阅读':'开始阅读';
  el.append(title,right);el.addEventListener('click',()=>loadStory(item.id));shelf.appendChild(el)
 }
}
async function loadStory(id,go=true){try{
 let data;
  if(BUILTINS[id]){const response=await fetch('./stories/'+BUILTINS[id].path);if(!response.ok)throw Error('网络加载失败（HTTP '+response.status+'）');data=await response.json()}
  else data=readStorage(storyKey(id),null);
 if(!data||!Array.isArray(data.blocks))throw Error('文章数据不存在');
 if(BUILTINS[id]){const overlay=readStorage('translations:'+id,{});for(const [n,trans] of Object.entries(overlay)){const b=data.blocks[Number(n)];if(b&&trans){if(!b.zh&&trans.zh)b.zh=trans.zh;if(!b.en&&trans.en)b.en=trans.en}}}
 restoringScroll=true;story=data;currentId=id;chineseOverrides.clear();
 const readable=data.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*');
 const hasZh=readable.every(b=>b.koOnly||b.zh),hasEn=readable.every(b=>b.koOnly||b.en);
 // Migrate previous Chinese-first defaults once; subsequent explicit language choices are respected.
 const migrated=readStorage('english-first-migrated:'+id,false);
 const preferred=!migrated&&hasEn?'en-zh':readStorage('reading-mode:'+id,hasEn?'en-zh':hasZh?'zh':'ko');
 mode=(preferred==='en'&&!hasEn)||(preferred.includes('en')&&!hasEn)||(preferred.includes('zh')&&!hasZh)?(hasZh?'zh':'ko'):preferred;
 saveStorage('english-first-migrated:'+id,true);
 saveStorage('reading-mode:'+id,mode);
 showAllChinese=readStorage('show-all-chinese:'+id,false);
 query='';$('#search-input').value='';
 lastReaderY=Number(readStorage('scroll:'+id,0))||0;renderStory();renderStorySelect();
  if(go){history.replaceState(null,'',location.pathname+'?story='+encodeURIComponent(id));showView('reader');}
 requestAnimationFrame(()=>{try{window.scrollTo(0,lastReaderY)}catch{};setTimeout(()=>{restoringScroll=false},160)});
 }catch(e){toast('无法打开文章：'+e.message)}}
function extractParas(s,fileName){if(/\.html?$/i.test(fileName)){const doc=new DOMParser().parseFromString(s,'text/html');const main=doc.querySelector('article')||doc.querySelector('main')||doc.body;main.querySelectorAll('script,style,nav,header,footer,aside').forEach(el=>el.remove());const p=Array.from(main.querySelectorAll('p')).map(el=>el.textContent.trim()).filter(Boolean);if(p.length)return p;return main.textContent.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean)}return s.trim().split(/\n\s*\n/).map(x=>x.replace(/\s*\n\s*/g,' ').trim()).filter(Boolean)}
async function saveImport(){const file=$('#upload-file').files[0],text=$('#paste-text').value.trim();if(!file&&!text){toast('请先选择文件或粘贴韩语原文');return}const html=file?await file.text():text;const paras=extractParas(html,file?.name||'paste.txt');if(!paras.length){toast('没有提取到文章段落');return}const name=$('#new-title').value.trim()||file?.name.replace(/\.[^.]+$/,'')||'我的文章';const id='custom-'+Date.now().toString(36);const obj={id,title:{ko:name,zh:'',en:''},author:'',blocks:paras.map(ko=>({ko,zh:'',en:''}))};saveStorage(storyKey(id),obj);const ids=customStories();ids.push({id,title:name});saveStorage('custom-ids',ids);$('#import-feedback').textContent=`已导入 ${paras.length} 段`;$('#paste-text').value='';$('#upload-file').value='';$('#new-title').value='';await loadStory(id);toast(`已导入 ${paras.length} 段，可在「设置」翻译`)}
function updateVocabCount(){$('#vocab-count').textContent=savedVocab.length}
function saveWord(){if(!currentPopup)return;const p=currentPopup;const key=p.lang+':'+p.word.toLowerCase();const i=savedVocab.findIndex(x=>x.key===key);if(i===-1){savedVocab.unshift({...p,key,added:new Date().toISOString()});toast('已加入生词本')}else{savedVocab.splice(i,1);toast('已从生词本移除')}saveStorage('vocab',savedVocab);updateVocabCount();$('#pop-save').textContent=savedVocab.some(x=>x.key===key)?'✓ 已收藏':'＋ 收藏生词'}
function renderVocab(){const entries=savedVocab.filter(x=>vocabFilter==='all'||x.lang===vocabFilter);const container=$('#vocab-list');container.replaceChildren();if(!entries.length){container.innerHTML='<div class="empty">还没有收藏的生词。打开文章，点一下韩语或英语单词试试。</div>';return}for(const e of entries){const item=document.createElement('article');item.className='vocab-item';const main=document.createElement('div');const head=document.createElement('h3');head.textContent=e.word;const meta=document.createElement('div');meta.className='meta';meta.textContent=e.lang==='ko'?'한국어 · 韩语':'ENGLISH · 英语';const mean=document.createElement('p');mean.textContent=e.meaning||'待查询';const sentence=document.createElement('p');sentence.className='sentence';sentence.textContent=e.example||'';main.append(head,meta,mean,sentence);const btn=document.createElement('button');btn.textContent='移除';btn.addEventListener('click',()=>{savedVocab=savedVocab.filter(v=>v.key!==e.key);saveStorage('vocab',savedVocab);updateVocabCount();renderVocab()});item.append(main,btn);container.appendChild(item)}}
function saveFile(name,content){const link=document.createElement('a'),blob=new Blob([content],{type:'text/plain;charset=utf-8'});link.href=URL.createObjectURL(blob);link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),2000)}
function hidePopup(){if(activeToken)activeToken.classList.remove('active');activeToken=null;$('#word-pop').classList.add('hidden');currentPopup=null}
function positionPopup(btn){const pop=$('#word-pop'),r=btn.getBoundingClientRect();pop.classList.remove('hidden');if(window.innerWidth<=650){pop.style.left='11px';pop.style.top='auto';return}const w=355;const left=Math.max(12,Math.min(window.innerWidth-w-12,r.left));pop.style.left=left+'px';pop.style.bottom='auto';pop.style.top=Math.max(12,Math.min(window.innerHeight-pop.offsetHeight-12,r.bottom+12))+'px';}
function displayPopup(){if(!currentPopup)return;const p=currentPopup;$('#pop-lang').textContent=p.lang==='ko'?'한국어 · KOREAN':'ENGLISH · VOCABULARY';$('#pop-word').textContent=p.word;$('#pop-pron').textContent=p.pron||'';$('#pop-meaning').textContent=p.meaning||'正在查询释义…';$('#pop-grammar').textContent=p.grammar||'';$('#pop-example').textContent=p.example||'';$('#pop-context-zh').textContent=p.chinese||'';const saved=savedVocab.some(x=>x.key===p.lang+':'+p.word.toLowerCase());$('#pop-save').textContent=saved?'✓ 已收藏':'＋ 收藏生词';$('#pop-dict').href=p.lang==='ko'?'https://ko.dict.naver.com/#/search?query='+encodeURIComponent(p.word):'https://dict.youdao.com/result?word='+encodeURIComponent(p.word.toLowerCase())+'&lang=en'}
async function lookupWord(btn){const word=btn.dataset.word,lang=btn.dataset.lang,idx=+btn.dataset.idx,b=story.blocks[idx];hidePopup();activeToken=btn;btn.classList.add('active');const p={word,lang,meaning:'',pron:'',grammar:'',example:b[lang]||'',chinese:b.zh||''};currentPopup=p;
if(lang==='ko'){const item=findKo(word);if(item){p.meaning=item.data[0]+' · '+item.data[1];p.grammar=item.data[2]+(item.lemma!==word?' · 词干/词条：'+item.lemma:'')+(item.approx?'（按前缀推测，须核对原词变化）':'')}else{p.meaning='本地词库未收录，正在尝试在线查词…';p.grammar='韩语助词和词尾可能附着在词干上，直接逐词翻译需核对上下文。'}}
else{const item=findEn(word);if(item){p.meaning=item.mean;p.pron=item.pron||'';p.grammar=item.lemma!==word.toLowerCase()?'原形可能是：'+item.lemma:''}else p.meaning='本地词库未收录，正在查询中文意思…'}
displayPopup();positionPopup(btn);
if(lang==='ko'&&!findKo(word)){try{const response=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(word)+'&langpair=ko%7Czh-CN');if(!response.ok)throw Error();const json=await response.json();const translated=json?.responseData?.translatedText;if(!translated||translated.toLowerCase().includes('mymemory')||translated===word)throw Error();p.meaning=translated;p.grammar='在线机器翻译（单词形式可能含词尾），请结合原句判断';}catch{p.meaning='暂未收录准确释义；请点击下方「词典」查询'}if(currentPopup===p){displayPopup();positionPopup(btn)}}
if(lang==='en'){
 const key=word.toLowerCase();
 if(wordResultCache.has(key)){Object.assign(p,wordResultCache.get(key));if(currentPopup===p){displayPopup();positionPopup(btn)}return}
 const result={meaning:p.meaning||'',pron:p.pron||'',grammar:p.grammar||''};
 const dictionary=(async()=>{try{
  const response=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(key));
  if(!response.ok)throw Error('dictionary unavailable');
  const json=await response.json();const item=json?.[0];if(!item)return;
  result.pron=item.phonetic||item.phonetics?.find(v=>v.text)?.text||result.pron||'';
  const pos={noun:'名词',verb:'动词',adjective:'形容词',adverb:'副词',pronoun:'代词',preposition:'介词',conjunction:'连词',interjection:'感叹词',determiner:'限定词',numeral:'数词'};
  const types=[...new Set((item.meanings||[]).map(m=>pos[m.partOfSpeech]||m.partOfSpeech).filter(Boolean))];
  result.grammar=(types.length?'词性：'+types.join('、'):'')+(p.grammar?' · '+p.grammar:'');if(currentPopup===p){Object.assign(p,result);displayPopup();positionPopup(btn)}
 }catch{}})();
 const translation=(async()=>{if(result.meaning)return;const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4500);try{
  const response=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(key)+'&langpair=en%7Czh-CN',{signal:controller.signal});
  if(!response.ok)throw Error('translation unavailable');
  const json=await response.json();const zh=json?.responseData?.translatedText;
  if(!zh||zh.toLowerCase()===key||/mymemory|too many requests|quota/i.test(zh))throw Error('no translation');
  result.meaning=zh+'（在线参考，结合句子判断词义）';
 }catch{result.meaning='暂时无法获取中文意思，请点击「词典」继续查询'}finally{clearTimeout(timer)}
 if(currentPopup===p){Object.assign(p,result);displayPopup();positionPopup(btn)}
 })();
 await Promise.allSettled([dictionary,translation]);wordResultCache.set(key,result);if(currentPopup===p){Object.assign(p,result);displayPopup();positionPopup(btn)}
}
}
function extractJSON(s){let text=s.trim().replace(/^```(?:json)?\s*/i,'').replace(/```\s*$/,'').trim();try{return JSON.parse(text)}catch{const a=text.indexOf('{'),b=text.lastIndexOf('}');if(a>=0&&b>a)return JSON.parse(text.slice(a,b+1));throw Error('模型没有返回有效 JSON')}}
async function doTranslate(){if(!story){toast('先导入一篇文章');return}const key=$('#api-key').value.trim(),endpoint=$('#api-endpoint').value.trim(),model=$('#api-model').value.trim();if(!key||!endpoint||!model){toast('请先填入 API 地址、模型名称与密钥');return}if(!/^https:\/\//.test(endpoint)){toast('API 地址必须是 HTTPS');return}const pending=story.blocks.map((b,i)=>({b,i})).filter(x=>x.b.ko&&x.b.ko!=='＊'&&!x.b.spacer&&!x.b.koOnly&&(!x.b.en||!x.b.zh));if(!pending.length){toast('这篇文章已经有完整的中英译文');return}const button=$('#translate-story'),status=$('#translation-status');button.disabled=true;let done=0;try{for(let offset=0;offset<pending.length;offset+=6){const chunk=pending.slice(offset,offset+6);status.textContent=`翻译中 ${done} / ${pending.length} 段…`;const body={model,temperature:0.2,messages:[{role:'system',content:'You are a professional Korean fiction translator. Translate Korean prose faithfully into natural Chinese (zh) and English (en), retaining character names as 曹承衍/金宇硕 in Chinese and Cho Seungyeon/Kim Wooseok in English; maintain dialogue, profanity, style and content. Do not censor, summarize, omit or change paragraphs. Reply ONLY in JSON of the shape {"translations":[{"zh":"...","en":"..."}]}, same number and order as inputs.'},{role:'user',content:JSON.stringify(chunk.map(x=>x.b.ko))}],stream:false};const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+key},body:JSON.stringify(body)});if(!resp.ok){const detail=await resp.text();throw Error('API HTTP '+resp.status+': '+detail.slice(0,120))}const result=await resp.json();const raw=result?.choices?.[0]?.message?.content||'';const parsed=extractJSON(raw),out=parsed.translations;if(!Array.isArray(out)||out.length!==chunk.length)throw Error('译文段落数量与原文不一致，翻译已暂停');for(let j=0;j<chunk.length;j++){const z=out[j];if(!z||typeof z.zh!=='string'||typeof z.en!=='string')throw Error('译文格式不符合预期');chunk[j].b.zh=chunk[j].b.zh||z.zh;chunk[j].b.en=chunk[j].b.en||z.en}done+=chunk.length;if(BUILTINS[currentId]){const overlay=readStorage('translations:'+currentId,{});for(const entry of chunk)overlay[entry.i]={zh:entry.b.zh,en:entry.b.en};saveStorage('translations:'+currentId,overlay)}else saveStorage(storyKey(currentId),story);renderStory()}status.textContent=`完成 ${done} 段的中英翻译`;if(story.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*').every(b=>b.koOnly||b.zh)){mode=story.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*').every(b=>b.koOnly||b.en)?'en-zh':'zh';showAllChinese=false;chineseOverrides.clear();saveStorage('show-all-chinese:'+currentId,false);saveStorage('reading-mode:'+currentId,mode);renderStory(true)}toast('翻译完成，译文已保存到本机浏览器')}catch(e){status.textContent='已保存进度：'+done+' 段；失败原因：'+e.message;toast('翻译中断，可重新点击继续')}finally{button.disabled=false}}
function initListeners(){
 $$('[data-tab]').forEach(x=>x.addEventListener('click',()=>showView(x.dataset.tab)));
 $('#more-trigger').addEventListener('click',()=>togglePanel('more-panel','more-trigger'));
 $('#compare-trigger').addEventListener('click',()=>{
  const complete=story.blocks.filter(b=>b.ko&&!b.spacer&&b.ko!=='＊'&&b.ko!=='*');
  const hasZh=complete.every(b=>b.koOnly||b.zh),hasEn=complete.every(b=>b.koOnly||b.en);
  if(!hasZh||!hasEn){toast('本章暂未备齐英中译文');return}
  const wasEnglishFirst=mode==='en-zh';
  if(!wasEnglishFirst)mode='en-zh';
  showAllChinese=wasEnglishFirst?!showAllChinese:true;
  chineseOverrides.clear();
  saveStorage('reading-mode:'+currentId,mode);saveStorage('show-all-chinese:'+currentId,showAllChinese);
  closeMenus();
  if(!wasEnglishFirst){renderStory(true);return}
  const anchor=captureAnchor();
  $('#paragraphs .story-par[data-index]').forEach(section=>{
   const i=Number(section.dataset.index);
   if(section.querySelector('[data-toggle-chinese]'))setChineseParagraph(section,i,showAllChinese)
  });
  updateTopChineseControl(true);if(anchor)restoreAnchor(anchor)
 });
 $('#mode-trigger').addEventListener('click',()=>togglePanel('compare-panel','mode-trigger'));
 $('#type-trigger').addEventListener('click',()=>togglePanel('type-panel','type-trigger'));
 $$('#compare-panel [data-mode]').forEach(el=>el.addEventListener('click',()=>{mode=el.dataset.mode;saveStorage('reading-mode:'+currentId,mode);if(displayedLangs().length>1)saveStorage('compare-mode',mode);closeMenus();renderStory(true)}));
 function changeLookup(enabled){lookupEnabled=enabled;saveStorage('lookup-enabled',enabled);renderStory(true);hidePopup()}
 $('#lookup-quick').addEventListener('click',()=>changeLookup(!lookupEnabled));
 $('#lookup-toggle').addEventListener('change',e=>changeLookup(e.target.checked));
 $('#search-trigger').addEventListener('click',()=>{closeMenus();$('#search-panel').classList.remove('hidden');$('#search-input').focus();showView('reader')});
 $('#search-clear').addEventListener('click',()=>{query='';$('#search-input').value='';$('#search-panel').classList.add('hidden');renderStory(true)});
 $('#search-input').addEventListener('input',e=>{query=e.target.value.trim().toLocaleLowerCase();renderStory(false);window.scrollTo(0,0)});
 $('#font-plus').addEventListener('click',()=>{font=Math.min(1.5,+(font+.1).toFixed(2));document.documentElement.style.setProperty('--scale',font);saveStorage('font',font)});
 $('#font-minus').addEventListener('click',()=>{font=Math.max(.8,+(font-.1).toFixed(2));document.documentElement.style.setProperty('--scale',font);saveStorage('font',font)});
 $('#paragraphs').addEventListener('click',e=>{
   const btn=e.target.closest('.word');if(btn&&lookupEnabled){lookupWord(btn);return}
   const toggle=e.target.closest('[data-toggle-chinese]');if(!toggle)return;
   const i=Number(toggle.dataset.toggleChinese),section=toggle.closest('.story-par');
   const nextVisible=!isChineseVisible(i);
   if(chineseOverrides.has(i))chineseOverrides.delete(i);else chineseOverrides.add(i);
   setChineseParagraph(section,i,nextVisible);
  });
 $('#pop-close').addEventListener('click',hidePopup);$('#pop-save').addEventListener('click',saveWord);$('#pop-speak').addEventListener('click',()=>{if(currentPopup)speech(currentPopup.word,currentPopup.lang)});
 document.addEventListener('pointerdown',e=>{if(!$('#word-pop').classList.contains('hidden')&&!e.target.closest('#word-pop')&&!e.target.closest('.word'))hidePopup();if(!e.target.closest('.site-actions')&&!e.target.closest('.article-controls')&&!e.target.closest('.compare-panel')&&!e.target.closest('.type-panel'))closeMenus()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePopup();closeMenus()}});
 window.addEventListener('scroll',()=>{if(activeView!=='reader'||query||restoringScroll)return;clearTimeout(scrollSaveTimer);scrollSaveTimer=setTimeout(()=>saveStorage('scroll:'+currentId,Math.round(window.scrollY)),200)},{passive:true});
 window.addEventListener('pagehide',()=>{if(activeView==='reader'&&!query)saveStorage('scroll:'+currentId,Math.round(window.scrollY))});
 $('#save-import').addEventListener('click',saveImport);$('#open-story').addEventListener('click',()=>loadStory($('#story-select').value));
 $('#delete-story').addEventListener('click',()=>{const id=$('#story-select').value;if(BUILTINS[id]){toast('书架作品不可删除');return}if(!confirm('确定删除这篇导入文章及其本地译文吗？'))return;localStorage.removeItem(STORAGE+':'+storyKey(id));saveStorage('custom-ids',customStories().filter(x=>x.id!==id));loadStory(DEFAULT_ID)});
 $('#translate-story').addEventListener('click',doTranslate);
 $$('.pill-btn').forEach(b=>b.addEventListener('click',()=>{vocabFilter=b.id==='vocab-korean'?'ko':b.id==='vocab-english'?'en':'all';$$('.pill-btn').forEach(x=>x.classList.toggle('selected',x===b));renderVocab()}));
 $('#export-vocab').addEventListener('click',()=>saveFile('生词本.txt',savedVocab.map(x=>`${x.lang.toUpperCase()} · ${x.word}\n释义：${x.meaning}\n原句：${x.example}\n`).join('\n')));
}
async function init(){font=readStorage('font',1);document.documentElement.style.setProperty('--scale',font);updateVocabCount();initListeners();await loadStory(BUILTINS[new URLSearchParams(location.search).get('story')]?new URLSearchParams(location.search).get('story'):DEFAULT_ID,false);renderStorySelect()}
init();
})();