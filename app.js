// 主人公（自分）のアカウント
const ME = { name: 'HANA', icon: 'images/icon-me.png' };

// タイムラインの投稿（上から順に表示）
// reply/repost/like: 0 のときは数字を表示しない  locked: true で鍵アイコン＆リポスト不可
const POSTS = [
  { name: '虹の町バレーチーム', icon: 'images/icon-volley.png', time: '12時間前',
    text: '今日の練習も無事終了!お疲れ様でした!\n次の練習も同じ体育館で練習します。\n見学・体験はいつでも大歓迎です！\n虹の町総合体育館にてお待ちしています✨\nお気軽にどうぞ🏐\n#地域バレー #メンバー募集',
    image: 'images/post-volley.jpg', reply: 0, repost: 3, like: 24 },
  { name: 'ゆい', icon: 'images/icon-yui.png', time: '2時間前',
    text: '今日数学の先生に質問しに行ったら「最近よく頑張ってるね」「質問の質も上がってる」って言われたᐡ ̳ᐢ˘ ̫ ˘ᐢ ̳ᐡこれからももっとがんばるっ！',
    reply: 0, repost: 2, like: 36 },
  { name: 'ももたす', icon: 'images/icon-momotasu.png', time: '3時間前',
    text: 'テスト前なのに新しいリップ買っちゃった…🍒\n届くの楽しみにして今週がんばる',
    reply: 4, repost: 0, like: 52 },
  { name: '☆..', icon: 'images/icon-star.png', time: '12時間前',
    text: '朝５時半に起きて１時間半勉強して学校行ったら１時間目から目が覚めた状態で授業が受けれて良かった〰️❕',
    reply: 1, repost: 0, like: 17 },
  { name: 'e', icon: 'images/icon-e.png', time: '8時間前', locked: true,
    text: '勉強してるのに家族がうるさすぎて全然集中できなくて鬱',
    reply: 0, repost: 0, like: 3 },
  { name: 'あや', icon: 'images/icon-ribbon.png', time: '10時間前',
    text: '単語帳3周目おわった〜🎀\n前より覚えてる単語ふえてきて嬉しい',
    reply: 1, repost: 0, like: 22 },
  { name: 'みか', icon: 'images/icon-mika.png', time: '9時間前',
    text: '受験勉強どころか課題もろくにできてないんだけどFFのみんなはどう？(；﹏；)',
    reply: 23, repost: 4, like: 58 },
  { name: 'ℳ', icon: 'images/icon-m.png', time: '5分前',
    text: 'めっちゃ眠いけどなんとか起きれた！朝勉強がんばるよ〰️>ω<!',
    reply: 2, repost: 0, like: 12 },
  { name: 'ゆゆ', icon: 'images/icon-flower.png', time: '11時間前',
    text: '朝の電車で古文単語やるの習慣になってきた🌷\n#朝活 #受験生',
    reply: 0, repost: 1, like: 33 },
  { name: 'そら', icon: 'images/icon-sora.png', time: '13時間前',
    text: '図書館の自習室、今日は窓際の席とれた☀️\n閉館までがんばる\n#勉強垢さんと繋がりたい #受験生',
    image: 'images/post-01.jpg', reply: 3, repost: 5, like: 124 },
  { name: 'りく', icon: 'images/icon-riku.png', time: '14時間前',
    text: '模試の判定Cだった…\nでもまだ伸びるはず。今日は英単語300個やる',
    reply: 8, repost: 1, like: 64 },
  { name: 'りな', icon: 'images/icon-heart.png', time: '15時間前',
    text: '友達と通話しながら勉強したら3時間あっという間だった！！\nひとりより集中できるかも',
    reply: 6, repost: 0, like: 47 },
  { name: 'なつ', icon: 'images/icon-natsu.png', time: '15時間前',
    text: '夜食のおにぎり🍙 あと2時間だけやる\n#夜勉 #受験生',
    image: 'images/post-02.jpg', reply: 1, repost: 0, like: 41 },
  { name: 'みゆ', icon: 'images/icon-usagi.png', time: '18時間前',
    text: '明日の小テスト、範囲まちがえて覚えてた…😭\n今からやり直します',
    reply: 3, repost: 0, like: 19 },
  { name: 'たける', icon: 'images/icon-takeru.png', time: '1日前',
    text: '数Ⅲの積分わかる人いたら教えてほしい…\n部分積分のどっちを微分するかで毎回迷う',
    reply: 12, repost: 2, like: 30 },
];

const ICONS = {
  reply: '<path d="M12 4.2c-4.8 0-8.6 3.1-8.6 7 0 2.1 1.1 4 2.9 5.3L5.5 20l4.3-2.1c.7.1 1.4.2 2.2.2 4.8 0 8.6-3.1 8.6-7s-3.8-6.9-8.6-6.9z"/>',
  repost: '<path d="M4 11V8a1.6 1.6 0 0 1 1.6-1.6H17"/><path d="m14.4 3.8 2.6 2.6-2.6 2.6"/><path d="M20 13v3a1.6 1.6 0 0 1-1.6 1.6H7"/><path d="m9.6 20.2-2.6-2.6 2.6-2.6"/>',
  like: '<path d="M12 20s-7.6-4.6-7.6-10.1A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.6 2.5C19.6 15.4 12 20 12 20z"/>',
  share: '<path d="M20.8 3.4 3.4 10.3l6.9 2.8 2.8 6.9z"/><path d="m10.3 13.1 4.6-4.6"/>',
  more: '<circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/>',
  lock: '<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke-width="2"/><rect class="fillpath" x="5.5" y="10" width="13" height="10" rx="2"/>',
};

const $ = (id) => document.getElementById(id);
const timeline = $('timeline');
const compose = $('compose');
const draft = $('draft');
const postBtn = $('postBtn');
const dialog = $('dialog');
const count = $('count');

const svg = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const formatText = (s) => esc(s).replace(/([#＃][^\s#＃]+)/g, '<span class="tag">$1</span>');
const num = (n) => (n ? `<span class="n">${n}</span>` : '');

function postHTML(p) {
  return `
  <article class="post${p.fresh ? ' fresh' : ''}">
    <img class="avatar" src="${p.icon}" alt="">
    <div class="post-main">
      <div class="meta">
        <span class="name">${esc(p.name)}</span>
        ${p.locked ? svg('lock', 'lock') : ''}
        <span class="time">・${esc(p.time)}</span>
        <button class="more" aria-label="その他">${svg('more')}</button>
      </div>
      <p class="text">${formatText(p.text)}</p>
      ${p.image ? `<img class="media" src="${p.image}" alt="">` : ''}
    </div>
    <div class="actions">
      <button class="act">${svg('reply')}${num(p.reply)}</button>
      <button class="act${p.locked ? ' disabled' : ''}">${svg('repost')}${num(p.repost)}</button>
      <button class="act like" data-count="${p.like || 0}">${svg('like')}${num(p.like)}</button>
      <button class="act">${svg('share')}</button>
    </div>
  </article>`;
}

timeline.innerHTML = POSTS.map(postHTML).join('');

// いいねのオン/オフ
timeline.addEventListener('click', (e) => {
  const btn = e.target.closest('.like');
  if (!btn) return;
  const liked = btn.classList.toggle('liked');
  const n = Number(btn.dataset.count) + (liked ? 1 : -1);
  btn.dataset.count = n;
  btn.innerHTML = svg('like') + num(n);
});

// ---------- 投稿作成 ----------
function updateCount() {
  const len = [...draft.value].length;
  count.textContent = len;
  count.classList.toggle('over', len > 140);
  postBtn.disabled = draft.value.trim() === '';
}

function openCompose() {
  syncViewport();
  compose.classList.add('open');
  compose.setAttribute('aria-hidden', 'false');
  draft.focus(); // タップ処理内で同期的に呼ぶとiPhoneでもキーボードが出る
  updateCount();
}

function closeCompose() {
  draft.blur();
  dialog.classList.remove('show');
  compose.classList.remove('open');
  compose.setAttribute('aria-hidden', 'true');
}

$('fab').addEventListener('click', openCompose);

$('cancelBtn').addEventListener('click', () => {
  if (draft.value.trim() === '') { closeCompose(); return; }
  draft.blur();
  dialog.classList.add('show');
});

$('discardBtn').addEventListener('click', () => {
  draft.value = '';
  updateCount();
  closeCompose();
});

$('keepBtn').addEventListener('click', () => {
  dialog.classList.remove('show');
  draft.focus();
});

postBtn.addEventListener('click', () => {
  const text = draft.value.replace(/^\s+|\s+$/g, '');
  if (!text) return;
  timeline.insertAdjacentHTML('afterbegin', postHTML({
    name: ME.name, icon: ME.icon, time: '今', text, reply: 0, repost: 0, like: 0, fresh: true,
  }));
  draft.value = '';
  updateCount();
  closeCompose();
  timeline.scrollTo({ top: 0 });
});

draft.addEventListener('input', updateCount);

// ---------- キーボード対応：見えている領域に投稿画面を合わせる ----------
const vv = window.visualViewport;
let fullHeight = vv ? vv.height : window.innerHeight;
function syncViewport() {
  if (!vv) return;
  if (vv.height > fullHeight) fullHeight = vv.height;
  const st = document.documentElement.style;
  st.setProperty('--vvh', `${vv.height}px`);
  st.setProperty('--vvtop', `${vv.offsetTop}px`);
  compose.classList.toggle('kb', vv.height < fullHeight - 120);
}
if (vv) {
  vv.addEventListener('resize', syncViewport);
  vv.addEventListener('scroll', syncViewport);
}
window.addEventListener('orientationchange', () => {
  fullHeight = 0;
  setTimeout(syncViewport, 300);
});

// ピンチ拡大を防止
document.addEventListener('gesturestart', (e) => e.preventDefault());

// ---------- オフライン対応 ----------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
