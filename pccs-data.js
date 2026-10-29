/**
 * PCCS 24色相・12トーン・マンセル・JIS安全色・2級JIS慣用色名63色・分光反射率SVGエンジン
 */

const PCCS_HUES = {
  1:  { num: 1,  code: '1:pR',  name: '紫みの赤',     munsell: '10RP', h: 340 },
  2:  { num: 2,  code: '2:R',   name: '赤',           munsell: '4R',   h: 350 },
  3:  { num: 3,  code: '3:yR',  name: '黄みの赤',     munsell: '7R',   h: 11  },
  4:  { num: 4,  code: '4:rO',  name: '赤みの橙',     munsell: '10R',  h: 22  },
  5:  { num: 5,  code: '5:O',   name: '橙',           munsell: '4YR',  h: 29  },
  6:  { num: 6,  code: '6:yO',  name: '黄みの橙',     munsell: '8YR',  h: 38  },
  7:  { num: 7,  code: '7:rY',  name: '赤みの黄',     munsell: '2Y',   h: 45  },
  8:  { num: 8,  code: '8:Y',   name: '黄',           munsell: '5Y',   h: 53  },
  9:  { num: 9,  code: '9:gY',  name: '緑みの黄',     munsell: '9Y',   h: 63  },
  10: { num: 10, code: '10:YG', name: '黄緑',         munsell: '3GY',  h: 74  },
  11: { num: 11, code: '11:yG', name: '黄みの緑',     munsell: '7GY',  h: 105 },
  12: { num: 12, code: '12:G',  name: '緑',           munsell: '3G',   h: 151 },
  13: { num: 13, code: '13:bG', name: '青みの緑',     munsell: '8G',   h: 167 },
  14: { num: 14, code: '14:BG', name: '青緑',         munsell: '4BG',  h: 184 },
  15: { num: 15, code: '15:BG', name: '青緑(15:BG)',  munsell: '9BG',  h: 194 },
  16: { num: 16, code: '16:gB', name: '緑みの青',     munsell: '5B',   h: 203 },
  17: { num: 17, code: '17:B',  name: '青',           munsell: '10B',  h: 210 },
  18: { num: 18, code: '18:B',  name: '青(18:B)',     munsell: '3PB',  h: 216 },
  19: { num: 19, code: '19:pB', name: '紫みの青',     munsell: '6PB',  h: 230 },
  20: { num: 20, code: '20:V',  name: '青紫',         munsell: '9PB',  h: 259 },
  21: { num: 21, code: '21:bP', name: '青みの紫',     munsell: '3P',   h: 282 },
  22: { num: 22, code: '22:P',  name: '紫',           munsell: '7P',   h: 304 },
  23: { num: 23, code: '23:rP', name: '赤みの紫',     munsell: '1RP',  h: 321 },
  24: { num: 24, code: '24:RP', name: '赤紫',         munsell: '5RP',  h: 332 }
};

const PCCS_TONES = {
  v:   { code: 'v',   name: 'ビビッド',         modifier: '冴えた',       sScale: 1.0,  x: 4, y: 2.5, category: '純色系' },
  b:   { code: 'b',   name: 'ブライト',         modifier: '明るい',       sScale: 0.88, x: 3, y: 1.5, category: '明清色系' },
  s:   { code: 's',   name: 'ストロング',       modifier: '強い',         sScale: 0.82, x: 3, y: 2.5, category: '中間色系' },
  dp:  { code: 'dp',  name: 'ディープ',         modifier: '濃い・深い',   sScale: 0.88, x: 3, y: 3.5, category: '暗清色系' },
  lt:  { code: 'lt',  name: 'ライト',           modifier: '浅い',         sScale: 0.72, x: 2, y: 1.0, category: '明清色系' },
  sf:  { code: 'sf',  name: 'ソフト',           modifier: 'やわらかい',   sScale: 0.52, x: 2, y: 2.0, category: '中間色系' },
  d:   { code: 'd',   name: 'ダル',             modifier: 'くすんだ',     sScale: 0.50, x: 2, y: 3.0, category: '中間色系' },
  dk:  { code: 'dk',  name: 'ダーク',           modifier: '暗い',         sScale: 0.72, x: 2, y: 4.0, category: '暗清色系' },
  p:   { code: 'p',   name: 'ペール',           modifier: '薄い',         sScale: 0.42, x: 1, y: 0.8, category: '明清色系' },
  ltg: { code: 'ltg', name: 'ライトグレイッシュ',modifier: '明るい灰みの', sScale: 0.25, x: 1, y: 1.9, category: '中間色系' },
  g:   { code: 'g',   name: 'グレイッシュ',     modifier: '灰みの',       sScale: 0.24, x: 1, y: 3.1, category: '中間色系' },
  dkg: { code: 'dkg', name: 'ダークグレイッシュ',modifier: '暗い灰みの',   sScale: 0.28, x: 1, y: 4.2, category: '暗清色系' }
};

const PCCS_ACHROMATIC = {
  'W':     { code: 'W',      name: 'ホワイト',          lightnessVal: 9.5, hex: '#F7F7F7' },
  'Gy-8.5':{ code: 'Gy-8.5', name: 'ライトグレイ(8.5)', lightnessVal: 8.5, hex: '#DCDCDC' },
  'ltGy':  { code: 'ltGy',   name: 'ライトグレイ',      lightnessVal: 7.5, hex: '#BFBFBF' },
  'mGy':   { code: 'mGy',    name: 'ミディアムグレイ',  lightnessVal: 5.5, hex: '#888888' },
  'dkGy':  { code: 'dkGy',   name: 'ダークグレイ',      lightnessVal: 3.5, hex: '#525252' },
  'Gy-2.5':{ code: 'Gy-2.5', name: 'ダークグレイ(2.5)', lightnessVal: 2.5, hex: '#3A3A3A' },
  'Bk':    { code: 'Bk',     name: 'ブラック',          lightnessVal: 1.5, hex: '#1E1E1E' }
};

const V_BASE_LIGHTNESS = {
  1: 45, 2: 47, 3: 52, 4: 56, 5: 61, 6: 67, 7: 73, 8: 79,
  9: 74, 10: 66, 11: 57, 12: 48, 13: 45, 14: 44, 15: 43, 16: 42,
  17: 40, 18: 37, 19: 33, 20: 29, 21: 32, 22: 35, 23: 39, 24: 42
};

// 色彩検定2級 公式テキスト掲載 JIS慣用色名 全63色（和色31色＋外来色32色）完全データベース
const JIS_COLORS_2KYU = [
  // 【和色名 31色】
  { id: 'j01', type: '和色', name: '鴇色', reading: 'ときいろ', sys: '明るい紫みの赤', pccs: 'lt1', hex: '#F4A7B9', desc: '鳥のトキ（朱鷺）の風切羽のような明るいピンク色' },
  { id: 'j02', type: '和色', name: '韓紅花', reading: 'からくれない', sys: 'あざやかな赤', pccs: 'v1', hex: '#E9003F', desc: '中国（韓）から渡来した紅花で染めた極めて鮮やかな赤' },
  { id: 'j03', type: '和色', name: '蘇芳', reading: 'すおう', sys: 'くすんだ赤', pccs: 'd2', hex: '#9E3D4B', desc: 'マメ科の蘇芳（スオウ）の心材から採れる赤紫みを帯びたくすんだ赤' },
  { id: 'j04', type: '和色', name: '鳶色', reading: 'とびいろ', sys: '暗い黄みの赤', pccs: 'dk4', hex: '#723A2B', desc: '猛禽類のトビ（鳶）の羽毛のような暗い赤褐色' },
  { id: 'j05', type: '和色', name: '弁柄色', reading: 'べんがらいろ', sys: '暗い黄みの赤', pccs: 'dk3', hex: '#8F3527', desc: 'インドのベンガル地方産の酸化第二鉄顔料に由来する暗い赤茶色' },
  { id: 'j06', type: '和色', name: '海老茶', reading: 'えびちゃ', sys: '暗い黄みの赤', pccs: 'dk3', hex: '#773C30', desc: '伊勢海老の殻のような暗い赤茶色（明治期の女学生の袴でも流行）' },
  { id: 'j07', type: '和色', name: '黄丹', reading: 'おうに', sys: 'つよい黄赤', pccs: 'b4', hex: '#F05E23', desc: '紅花とクチナシの交染による強い黄赤。皇太子の礼服（黄丹袍）の色' },
  { id: 'j08', type: '和色', name: '桧皮色', reading: 'ひわだいろ', sys: '暗い灰みの黄赤', pccs: 'g4', hex: '#7B4B3A', desc: 'ヒノキの樹皮（檜皮葺）のような渋い赤茶色' },
  { id: 'j09', type: '和色', name: '代赭', reading: 'たいしゃ', sys: 'くすんだ黄赤', pccs: 'd5', hex: '#B35C37', desc: '中国山西省代州産の赤土（酸化鉄顔料）に由来するくすんだ黄赤' },
  { id: 'j10', type: '和色', name: '琥珀色', reading: 'こはくいろ', sys: 'くすんだ赤みの黄', pccs: 'd6', hex: '#CA7A2C', desc: '樹脂の化石である琥珀（アンバー）のような透明感のある黄褐色' },
  { id: 'j11', type: '和色', name: '柑子色', reading: 'こうじいろ', sys: '明るい黄赤', pccs: 'b6', hex: '#F69C43', desc: 'コウジミカン（柑子蜜柑）の果実のような明るい橙色' },
  { id: 'j12', type: '和色', name: '朽葉色', reading: 'くちばいろ', sys: '灰みの赤みを帯びた黄', pccs: 'g6', hex: '#917347', desc: '朽ちた落ち葉を思わせる灰みの黄褐色（平安文学にも頻出）' },
  { id: 'j13', type: '和色', name: '鬱金色', reading: 'うこんいろ', sys: 'つよい赤みの黄', pccs: 's7', hex: '#EFB80B', desc: 'ショウガ科ウコン（ターメリック）の根茎で染めた強い黄' },
  { id: 'j14', type: '和色', name: '刈安色', reading: 'かりやすいろ', sys: 'うすい緑みの黄', pccs: 'lt9', hex: '#E9DC6E', desc: 'イネ科のカリヤス（刈安）で染めた明るい緑みの黄色' },
  { id: 'j15', type: '和色', name: '黄蘗色', reading: 'きはだいろ', sys: '明るい緑みの黄', pccs: 'b9', hex: '#F3E13B', desc: 'ミカン科キハダ（黄檗）の内皮で染めた鮮やかな緑みの黄' },
  { id: 'j16', type: '和色', name: '海松色', reading: 'みるいろ', sys: '暗い灰みの黄緑', pccs: 'dkg10', hex: '#5B6241', desc: '浅海の緑藻「ミル（海松）」に由来する暗いオリーブグリーン系' },
  { id: 'j17', type: '和色', name: '鶸色', reading: 'ひわいろ', sys: 'つよい黄緑', pccs: 'b10', hex: '#C6D124', desc: '小鳥のマヒワ（鶸）の羽のような鮮やかで強い黄緑' },
  { id: 'j18', type: '和色', name: '常盤色', reading: 'ときわいろ', sys: 'こい緑', pccs: 'dp12', hex: '#007B43', desc: '松や杉など常緑樹（常盤木）の葉のように年中変わらない深い緑' },
  { id: 'j19', type: '和色', name: '緑青色', reading: 'ろくしょういろ', sys: 'くすんだ緑', pccs: 'd12', hex: '#47885E', desc: '銅の錆や孔雀石から作られる日本画の岩絵具（緑青）のくすんだ緑' },
  { id: 'j20', type: '和色', name: '鉄色', reading: 'てついろ', sys: 'ごく暗い青緑', pccs: 'dkg14', hex: '#1B3B36', desc: '加熱した鉄のような、ごく暗い青緑色' },
  { id: 'j21', type: '和色', name: '新橋色', reading: 'しんばしいろ', sys: '明るい緑みの青', pccs: 'b16', hex: '#59B9C6', desc: '明治末期に東京・新橋の芸妓の間で化学染料により大流行した明るい青緑' },
  { id: 'j22', type: '和色', name: '納戸色', reading: 'なんどいろ', sys: 'つよい緑みの青', pccs: 's16', hex: '#007B93', desc: '江戸時代の納戸（衣装部屋）の垂れ幕などに使われた強い緑みの青' },
  { id: 'j23', type: '和色', name: '甕覗', reading: 'かめのぞき', sys: 'やわらかい緑みの青', pccs: 'p16', hex: '#A2D7DD', desc: '藍甕（あいがめ）をほんの少し覗いた程度にごく淡く染めた水色' },
  { id: 'j24', type: '和色', name: '縹色', reading: 'はなだいろ', sys: 'つよい青', pccs: 'd17', hex: '#2A6E9B', desc: 'ツユクサ（月草）や藍の単一染による日本古来の代表的な青' },
  { id: 'j25', type: '和色', name: '江戸紫', reading: 'えどむらさき', sys: 'こい青みの紫', pccs: 'dp21', hex: '#65318E', desc: '京紫（赤み）に対し、江戸で好まれた青みの強い粋な紫（紫根染め）' },
  { id: 'j26', type: '和色', name: '古代紫', reading: 'こだいむらさき', sys: 'くすんだ紫', pccs: 'd22', hex: '#895B8A', desc: '奈良・平安の王朝時代を思わせる、ややくすんだ落ち着きのある紫' },
  { id: 'j27', type: '和色', name: '藤色', reading: 'ふじいろ', sys: '明るい青みの紫', pccs: 'lt20', hex: '#AFB4DB', desc: 'フジ（藤）の花房のような明るくやさしい青みの紫' },
  { id: 'j28', type: '和色', name: '銀鼠', reading: 'ぎんねず', sys: '明るい灰色', pccs: 'ltGy', hex: '#AFAFB0', desc: '銀色のようなほんのり青み・輝きを感じさせる明るい鼠色（灰色）' },
  { id: 'j29', type: '和色', name: '茶鼠', reading: 'ちゃねずみ', sys: '灰みの赤みを帯びた黄', pccs: 'g6', hex: '#9D8E87', desc: '江戸時代の「四十八茶百鼠」の一つで、茶色みを含んだ灰色' },
  { id: 'j30', type: '和色', name: '利休鼠', reading: 'りきゅうねずみ', sys: '灰みの黄緑', pccs: 'g10', hex: '#7B8174', desc: '茶人・千利休の好みとされる、抹茶のような緑みを含んだ渋い灰色' },
  { id: 'j31', type: '和色', name: '煤竹色', reading: 'すすたけいろ', sys: '暗い灰みの黄赤', pccs: 'dkg6', hex: '#5E493E', desc: '囲炉裏の煙で長年いぶされた古民家の竹のような暗い茶褐色' },

  // 【外来色名 32色】
  { id: 'j32', type: '外来色', name: 'ローズピンク', reading: 'ろーずぴんく', sys: '明るい赤紫', pccs: 'lt24', hex: '#F19CA7', desc: 'ピンクのバラの花のような明るく華やかな赤紫系のピンク' },
  { id: 'j33', type: '外来色', name: 'オールドローズ', reading: 'おーるどろーず', sys: 'くすんだ赤', pccs: 'sf1', hex: '#C97586', desc: '年月を経たバラの花のような、くすみのある上品なピンク（赤）' },
  { id: 'j34', type: '外来色', name: 'ポピーレッド', reading: 'ぽぴーれっど', sys: 'あざやかな赤', pccs: 'v2', hex: '#EA352D', desc: 'ヒナゲシ（ポピー）の花のような純色の赤（PCCS 2:Rの代表色名）' },
  { id: 'j35', type: '外来色', name: 'マルーン', reading: 'まるーん', sys: '暗い赤', pccs: 'dk2', hex: '#6A1D24', desc: 'フランス語のマロン（栗）に由来する暗い赤褐色' },
  { id: 'j36', type: '外来色', name: 'バーガンディー', reading: 'ばーがんでぃー', sys: 'ごく暗い紫みの赤', pccs: 'dkg1', hex: '#4E1E2B', desc: 'フランス・ブルゴーニュ地方の赤ワインに由来するごく暗い紫みの赤' },
  { id: 'j37', type: '外来色', name: 'テラコッタ', reading: 'てらこった', sys: 'くすんだ黄みの赤', pccs: 'd3', hex: '#BD624B', desc: 'イタリア語で「焼いた土」を意味する素焼きの陶器・レンガの色' },
  { id: 'j38', type: '外来色', name: 'バーントシェンナ', reading: 'ばーんとしぇんな', sys: '暗い黄赤', pccs: 'd4', hex: '#A54D32', desc: 'イタリア・シエナ地方の黄土（ローシェンナ）を焼いて赤みを強めた顔料の色' },
  { id: 'j39', type: '外来色', name: 'ローシェンナ', reading: 'ろーしぇんな', sys: 'つよい黄赤', pccs: 'd6', hex: '#C67B33', desc: 'イタリア・シエナ地方産の天然の黄土顔料（生シエナ）の色' },
  { id: 'j40', type: '外来色', name: 'タン', reading: 'たん', sys: 'くすんだ黄赤', pccs: 'd6', hex: '#B47744', desc: '動物の皮をなめすオークの樹皮（タンニン）に由来する明るい茶色' },
  { id: 'j41', type: '外来色', name: 'エクルベイジュ', reading: 'えくるべいじゅ', sys: 'うすい黄赤', pccs: 'p6', hex: '#F3E5CE', desc: 'フランス語で「未晒し（生成り）」を意味する、麻や絹の自然な淡いベージュ' },
  { id: 'j42', type: '外来色', name: 'アンバー', reading: 'あんばー', sys: 'くすんだ赤みの黄', pccs: 'd7', hex: '#C28938', desc: '琥珀（アンバー）に由来する透明感のある黄褐色' },
  { id: 'j43', type: '外来色', name: 'ゴールデンイエロー', reading: 'ごーるでんいえろー', sys: 'つよい赤みの黄', pccs: 'v7', hex: '#F7B500', desc: '黄金（ゴールド）のような輝きを感じさせる赤みの強い黄色' },
  { id: 'j44', type: '外来色', name: 'ネープルスイエロー', reading: 'ねーぷるすいえろー', sys: '明るい黄', pccs: 'lt8', hex: '#F9DB6D', desc: 'イタリア・ナポリ（ネープルス）の火山土から作られた歴史的な黄色顔料' },
  { id: 'j45', type: '外来色', name: 'ローアンバー', reading: 'ろーあんばー', sys: '暗い赤みの黄', pccs: 'dk7', hex: '#6E5127', desc: '天然のアンバー土顔料による暗い黄褐色' },
  { id: 'j46', type: '外来色', name: 'バーントアンバー', reading: 'ばーんとあんばー', sys: 'ごく暗い赤みの黄', pccs: 'dkg7', hex: '#4E3924', desc: 'ローアンバーを焼成（バーント）してさらに暗く深みを増した焦げ茶色' },
  { id: 'j47', type: '外来色', name: 'オリーブドラブ', reading: 'おりーぶどらぶ', sys: '暗い灰みの黄緑', pccs: 'g9', hex: '#686A4E', desc: 'くすんだオリーブ色。軍服やミリタリージャケットの定番色' },
  { id: 'j48', type: '外来色', name: 'ミントグリーン', reading: 'みんとぐりーん', sys: '明るい緑', pccs: 'lt12', hex: '#88CB9E', desc: 'ハッカ（ミント）の葉のような爽やかで明るい緑' },
  { id: 'j49', type: '外来色', name: 'エメラルドグリーン', reading: 'えめらるどぐりーん', sys: 'つよい緑', pccs: 'b13', hex: '#00A968', desc: '宝石のエメラルドのような鮮やかで明るい青みの緑' },
  { id: 'j50', type: '外来色', name: 'ビリジアン', reading: 'びりじあん', sys: 'くすんだ青みの緑', pccs: 'dp13', hex: '#007B66', desc: '水酸化クロムを主成分とする深みのある青みの緑の絵具色' },
  { id: 'j51', type: '外来色', name: 'ターコイズブルー', reading: 'たーこいずぶるー', sys: '明るい緑みの青', pccs: 'b16', hex: '#009DCB', desc: 'トルコ石（ターコイズ）のような明るい緑みの青' },
  { id: 'j52', type: '外来色', name: 'ピーコックブルー', reading: 'ぴーこっくぶるー', sys: 'こい緑みの青', pccs: 'dp16', hex: '#006E8A', desc: '孔雀（ピーコック）の首の羽のような鮮やかで濃い緑みの青' },
  { id: 'j53', type: '外来色', name: 'サックスブルー', reading: 'さっくすぶるー', sys: 'くすんだ青', pccs: 'sf17', hex: '#5D87A8', desc: 'ドイツ・ザクセン（サクソニー）地方の藍染に由来するくすんだ青' },
  { id: 'j54', type: '外来色', name: 'インディゴ', reading: 'いんでぃご', sys: '暗い青', pccs: 'dk17', hex: '#1E466E', desc: 'インド原産の藍（インディゴ）染料による暗い青（デニムの染色など）' },
  { id: 'j55', type: '外来色', name: 'ロイヤルブルー', reading: 'ろいやるぶるー', sys: 'こい紫みの青', pccs: 'dp18', hex: '#1B499F', desc: 'イギリス王室（ロイヤル）の公式カラーとされる気品ある濃い青' },
  { id: 'j56', type: '外来色', name: 'ネイビーブルー', reading: 'ねいびーぶるー', sys: '暗い紫みの青', pccs: 'dk19', hex: '#1B294B', desc: 'イギリス海軍（ネイビー）の制服に採用された濃紺色' },
  { id: 'j57', type: '外来色', name: 'ウルトラマリン', reading: 'うるとらまりん', sys: 'こい紫みの青', pccs: 'v19', hex: '#2743A5', desc: '「海を越えてきた青」を意味し、宝石ラピスラズリから作られた群青色' },
  { id: 'j58', type: '外来色', name: 'バイオレット', reading: 'ばいおれっと', sys: 'あざやかな青紫', pccs: 'v20', hex: '#633C9E', desc: 'スミレ（バイオレット）の花に由来する鮮やかな青紫' },
  { id: 'j59', type: '外来色', name: 'ラベンダー', reading: 'らべんだー', sys: '灰みの青紫', pccs: 'ltg21', hex: '#9D93B8', desc: 'ハーブのラベンダーの花のような、やや灰みを帯びた上品な薄紫' },
  { id: 'j60', type: '外来色', name: 'マゼンタ', reading: 'まぜんた', sys: 'あざやかな赤紫', pccs: 'v24', hex: '#D7006D', desc: 'イタリアの地名マジェンタに由来する鮮やかな赤紫（色料の三原色M）' },
  { id: 'j61', type: '外来色', name: 'アイボリー', reading: 'あいぼりー', sys: 'うすい黄みの灰色', pccs: 'ltg8', hex: '#EDE8D5', desc: '象牙（アイボリー）のような黄みがかった温かい白〜明るい灰色' },
  { id: 'j62', type: '外来色', name: 'オフホワイト', reading: 'おふほわいと', sys: '黄みの白', pccs: 'W', hex: '#F3F1EA', desc: '純白（ピュアホワイト）からわずかに外れた、ごく淡い黄みや灰みのある白' },
  { id: 'j63', type: '外来色', name: 'チャコールグレイ', reading: 'ちゃこーるぐれい', sys: '暗い灰色', pccs: 'dkg22', hex: '#4B484C', desc: '木炭（チャコール）のようなごく暗い灰色（わずかに紫みを含む）' }
];

function hslToHex(h, s, l) {
  l = Math.max(8, Math.min(95, l)) / 100;
  const a = (Math.max(0, Math.min(100, s)) * Math.min(l, 1 - l)) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

function isHexDark(hex) {
  const c = hex.replace('#', '');
  if (c.length !== 6) return false;
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

function getPCCSColor(notation) {
  if (!notation) return { code: '', hex: '#CCCCCC', isDark: false };
  const clean = notation.trim();

  if (PCCS_ACHROMATIC[clean]) {
    const ach = PCCS_ACHROMATIC[clean];
    return { code: ach.code, name: ach.name, hex: ach.hex, isDark: ach.lightnessVal < 5.5 };
  }

  if (clean.startsWith('#')) {
    const [hexPart, labelPart] = clean.split('|');
    return { code: labelPart || hexPart, name: labelPart || hexPart, hex: hexPart, isDark: isHexDark(hexPart) };
  }

  const match = clean.match(/^(ltg|dkg|dp|lt|sf|dk|v|b|s|d|p|g)(\d{1,2})\+?$/);
  if (!match) return { code: clean, name: clean, hex: '#888888', isDark: true };

  const toneCode = match[1];
  const hueNum = parseInt(match[2], 10);
  const hueObj = PCCS_HUES[hueNum] || PCCS_HUES[2];
  const toneObj = PCCS_TONES[toneCode] || PCCS_TONES.v;
  const baseL = V_BASE_LIGHTNESS[hueNum] || 50;

  let targetL;
  switch (toneCode) {
    case 'p':   targetL = 84 + (baseL - 50) * 0.16; break;
    case 'lt':  targetL = 73 + (baseL - 50) * 0.24; break;
    case 'b':   targetL = 61 + (baseL - 50) * 0.34; break;
    case 'v':   targetL = baseL; break;
    case 'dp':  targetL = 33 + (baseL - 50) * 0.22; break;
    case 'dk':  targetL = 22 + (baseL - 50) * 0.16; break;
    case 'ltg': targetL = 72 + (baseL - 50) * 0.14; break;
    case 'sf':  targetL = 60 + (baseL - 50) * 0.20; break;
    case 's':   targetL = 48 + (baseL - 50) * 0.26; break;
    case 'd':   targetL = 45 + (baseL - 50) * 0.18; break;
    case 'g':   targetL = 42 + (baseL - 50) * 0.14; break;
    case 'dkg': targetL = 21 + (baseL - 50) * 0.10; break;
    default:    targetL = baseL;
  }

  let targetS = 90 * toneObj.sScale;
  if (toneCode === 'v' && (hueNum >= 6 && hueNum <= 9)) targetS = 98;
  const hex = hslToHex(hueObj.h, targetS, targetL);

  return {
    code: clean,
    name: `${toneObj.modifier}${hueObj.name} (${clean})`,
    hueCode: hueObj.code,
    hueNum: hueNum,
    hex: hex,
    isDark: targetL < 53
  };
}

function renderSwatchGroupHTML(codes, opts = {}) {
  const showCode = opts.showCode !== undefined ? opts.showCode : true;
  const showDetail = opts.showDetail || false;
  const sizeClass = opts.size ? `swatch-${opts.size}` : 'swatch-md';
  const chips = codes.map(code => {
    const info = getPCCSColor(code);
    const textColor = info.isDark ? '#FFFFFF' : '#1E293B';
    const subLabel = showDetail && info.hueCode ? `<span class="swatch-sub">${info.hueCode}</span>` : '';
    return `
      <div class="color-swatch-card ${sizeClass}" style="background-color: ${info.hex}; color: ${textColor};" title="${info.name}">
        ${showCode ? `<span class="swatch-code">${info.code}</span>` : ''}
        ${subLabel}
      </div>
    `;
  }).join('');
  return `<div class="swatch-strip">${chips}</div>`;
}

/**
 * 色彩検定2級 本試験で頻出の「分光反射率曲線（380nm〜780nm）」SVGグラフを描画
 * @param {string} curveType - 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'white_gray_black'
 */
function renderSpectralCurveSVG(curveType) {
  const curves = {
    red: {
      path: 'M 45,128 L 135,128 Q 165,128 180,90 Q 195,40 225,35 L 285,32',
      label: '長波長（600〜780nm）で反射率が高く、短〜中波長を吸収する曲線'
    },
    yellow: {
      path: 'M 45,128 L 105,126 Q 125,124 140,42 Q 150,24 175,24 L 285,24',
      label: '中波長〜長波長（500〜780nm：緑＋赤）の両方で反射率が70〜80%と高い曲線'
    },
    green: {
      path: 'M 45,128 L 95,125 Q 115,120 135,55 Q 150,45 165,60 Q 185,120 215,126 L 285,128',
      label: '中波長（500〜560nm付近）に山型のピークを持ち、両端（青と赤）を吸収する曲線'
    },
    blue: {
      path: 'M 45,42 L 95,40 Q 120,45 140,105 Q 155,126 185,128 L 285,128',
      label: '短波長（400〜480nm）で反射率が高く、中〜長波長を吸収する曲線'
    },
    purple: {
      path: 'M 45,48 Q 85,48 110,115 Q 155,128 200,115 Q 230,52 285,42',
      label: '短波長（青紫）と長波長（赤）の両端で反射率が高く、中波長（緑）が凹む谷型の曲線'
    },
    white_gray_black: {
      path: 'M 45,25 L 285,25 M 45,82 L 285,82 M 45,132 L 285,132',
      label: '全波長域にわたってほぼフラット（水平）な3本の曲線（上：白、中：灰色、下：黒）'
    }
  };

  const c = curves[curveType] || curves.red;
  return `
    <div class="spectral-graph-wrap">
      <svg viewBox="0 0 320 175" class="spectral-svg">
        <defs>
          <linearGradient id="specGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6B21A8"/>
            <stop offset="22%" stop-color="#2563EB"/>
            <stop offset="45%" stop-color="#10B981"/>
            <stop offset="65%" stop-color="#FACC15"/>
            <stop offset="82%" stop-color="#F97316"/>
            <stop offset="100%" stop-color="#EF4444"/>
          </linearGradient>
        </defs>
        <!-- 背景グリッド -->
        <rect x="45" y="15" width="240" height="125" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
        <line x1="45" y1="46" x2="285" y2="46" stroke="#F1F5F9" stroke-width="1"/>
        <line x1="45" y1="77" x2="285" y2="77" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3 3"/>
        <line x1="45" y1="108" x2="285" y2="108" stroke="#F1F5F9" stroke-width="1"/>
        <!-- Y軸ラベル -->
        <text x="40" y="22" text-anchor="end" font-size="10" fill="#64748B">100%</text>
        <text x="40" y="81" text-anchor="end" font-size="10" fill="#64748B">50%</text>
        <text x="40" y="138" text-anchor="end" font-size="10" fill="#64748B">0%</text>
        <text x="14" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#334155" transform="rotate(-90 14,80)">反射率</text>
        <!-- 分光スペクトルバー -->
        <rect x="45" y="142" width="240" height="6" fill="url(#specGrad)" rx="2"/>
        <!-- X軸波長ラベル -->
        <text x="45" y="162" text-anchor="middle" font-size="10" fill="#64748B">380</text>
        <text x="105" y="162" text-anchor="middle" font-size="10" fill="#64748B">480</text>
        <text x="165" y="162" text-anchor="middle" font-size="10" fill="#64748B">580</text>
        <text x="225" y="162" text-anchor="middle" font-size="10" fill="#64748B">680</text>
        <text x="285" y="162" text-anchor="middle" font-size="10" fill="#64748B">780(nm)</text>
        <!-- 分光反射率曲線 -->
        <path d="${c.path}" fill="none" stroke="#1E293B" stroke-width="3.2" stroke-linecap="round"/>
      </svg>
    </div>
  `;
}
