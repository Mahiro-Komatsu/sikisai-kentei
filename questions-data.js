/**
 * 色彩検定2級 過去問徹底分析・難易度ステージ別 予想問題データベース（全125問）
 * 公式テキスト全8章準拠 × 4段階ステージ制（Stage 1:必修基礎 / Stage 2:頻出標準 / Stage 3:実戦応用 / Stage 4:発展・記述＆穴埋め）
 */

const STAGES = {
  1: {
    stage: 1,
    code: 'stage1',
    name: 'Stage 1：必修基礎レベル',
    shortName: 'Lv.1 必修基礎',
    badgeClass: 'stage-badge-1',
    targetAccuracy: 80,
    description: '3級復習〜2級の基本定義・PCCSとマンセルの基礎・基本照明・UDの基本など、絶対に落とせない土台固めステージ（32問）'
  },
  2: {
    stage: 2,
    code: 'stage2',
    name: 'Stage 2：頻出標準レベル',
    shortName: 'Lv.2 頻出標準',
    badgeClass: 'stage-badge-2',
    targetAccuracy: 75,
    description: '毎年本試験で出題される配色技法・分光反射率曲線・演色性・JIS慣用色名・視覚効果の王道パターン（36問）'
  },
  3: {
    stage: 3,
    code: 'stage3',
    name: 'Stage 3：実戦応用レベル',
    shortName: 'Lv.3 実戦応用',
    badgeClass: 'stage-badge-3',
    targetAccuracy: 70,
    description: '合否を分ける照度計算（逆二乗の法則）・複数条件の配色カード判定・マンセル等色相面・カラーマネジメント・景観基準（32問）'
  },
  4: {
    stage: 4,
    code: 'stage4',
    name: 'Stage 4：発展・記述＆長文穴埋め',
    shortName: 'Lv.4 発展・記述',
    badgeClass: 'stage-badge-4',
    targetAccuracy: 70,
    description: '本試験の大問形式（長文空欄補充）と、最終大問で出題される「慣用色名・専門用語の記述式（直接入力）」完全対策（25問）'
  }
};

const CATEGORIES = {
  ch1_system: {
    id: 'ch1_system',
    name: '第1章：色の表示（マンセル・PCCS）',
    shortName: '1章:マンセル・PCCS',
    icon: '📐',
    description: 'マンセル表色系(H V/C)、色立体と最高彩度、PCCSトーンとマンセル値の対応'
  },
  ch1_names: {
    id: 'ch1_names',
    name: '第1章：JIS慣用色名（和色31・外来32）',
    shortName: '1章:JIS慣用色名',
    icon: '🏷️',
    description: '2級新出63色＋3級重要色名の色見本識別、系統色名、由来、記述対策'
  },
  ch2_light: {
    id: 'ch2_light',
    name: '第2章：光と色・照明・混色',
    shortName: '2章:光・照明・混色',
    icon: '💡',
    description: '分光反射率曲線、色温度(K)、演色評価数(Ra/Ri)、照度計算(逆二乗則)、並置・回転混色'
  },
  ch3_harmony: {
    id: 'ch3_harmony',
    name: '第3章：色彩調和と配色技法',
    shortName: '3章:配色技法・調和論',
    icon: '🎨',
    description: 'ナチュラル/コンプレックス、カマイユ/フォカマイユ、ビコロール、スプリットコンプリメンタリー、調和論史'
  },
  ch4_image: {
    id: 'ch4_image',
    name: '第4章：配色イメージ',
    shortName: '4章:配色イメージ',
    icon: '✨',
    description: 'ウォーム/クール・ソフト/ハード軸、エレガント・クラシック・カジュアル・モダン等の配色判定'
  },
  ch5_perception: {
    id: 'ch5_perception',
    name: '第5章：視覚効果と色のUD',
    shortName: '5章:視覚効果・色のUD',
    icon: '👁️',
    description: 'リープマン効果、マッハバンド、ベンハムのコマ、プルキンエ、条件等色、高齢者・色覚多様性・JIS安全色'
  },
  ch6_visual: {
    id: 'ch6_visual',
    name: '第6章：ビジュアル・メディア色彩',
    shortName: '6章:メディア・色管理',
    icon: '🖥️',
    description: 'カラーマネジメント(ICCプロファイル)、CIELAB、sRGB/AdobeRGB、ガモット、視認性・誘目性'
  },
  ch78_design: {
    id: 'ch78_design',
    name: '第7・8章：ファッション・インテリア・景観',
    shortName: '7-8章:ファッション・空間・景観',
    icon: '🏛️',
    description: 'インターカラー/JAFCA、プロダクトCMF、インテリア明度配分・照明、エクステリア、景観法マンセル基準'
  }
};

const QUESTIONS_DB = [
  // =========================================================================
  // 🟢 STAGE 1：必修基礎レベル（32問：s1_01 〜 s1_32）
  // =========================================================================
  {
    id: 's1_01', stage: 1, freq: '毎年頻出', category: 'ch1_system', hasVisual: true,
    promptSwatches: [{ label: 'マンセル基本5色相（R, Y, G, B, P）', codes: ['v2', 'v8', 'v12', 'v17', 'v22'] }],
    question: 'マンセル表色系の色相環において、「基本5色相」の組み合わせとして正しいものはどれか。',
    options: [
      { text: 'R（赤）・Y（黄）・G（緑）・B（青）・P（紫）' },
      { text: 'R（赤）・YR（黄赤）・Y（黄）・G（緑）・B（青）' },
      { text: 'R（赤）・Y（黄）・G（緑）・BG（青緑）・V（青紫）' },
      { text: 'R（赤）・O（橙）・Y（黄）・G（緑）・B（青）' }
    ],
    answer: 0,
    explanation: 'マンセル色相環は、<strong>R（赤）・Y（黄）・G（緑）・B（青）・P（紫）</strong>の<strong>基本5色相</strong>と、その中間に位置する<strong>YR（黄赤）・GY（黄緑）・BG（青緑）・PB（青紫）・RP（赤紫）</strong>の<strong>中間5色相</strong>を合わせた10色相を基本としています（OやVはPCCSの記号なので混同しないよう注意）。'
  },
  {
    id: 's1_02', stage: 1, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセル表色系における有彩色の表記法「5R 4/14」について、各記号が表す意味として正しいものはどれか。',
    options: [
      { text: '色相（H）が 5R、明度（V）が 4、彩度（C）が 14' },
      { text: '色相（H）が 5R、彩度（C）が 4、明度（V）が 14' },
      { text: '明度（V）が 5R、色相（H）が 4、彩度（C）が 14' },
      { text: 'トーンが 5R、明度（V）が 4、色相番号が 14' }
    ],
    answer: 0,
    explanation: 'マンセル表色系の有彩色は<strong>「H V/C（色相 明度/彩度）」</strong>の順で表記します。したがって「5R 4/14」は色相5R、明度4、彩度14を意味します。無彩色は「N5」のようにN（Neutral）と明度のみで表記します。'
  },
  {
    id: 's1_03', stage: 1, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセル表色系の「明度（Value）」と、PCCSの「明度（Lightness）」の数値範囲の違いとして正しいものはどれか。',
    options: [
      { text: 'マンセルは理想的な黒を0・理想的な白を10とするが、PCCSは実在する色票として黒（Bk）を1.5・白（W）を9.5としている。' },
      { text: 'マンセルは黒を1.5・白を9.5とし、PCCSは黒を0・白を100としている。' },
      { text: 'マンセルもPCCSも、実在する白を10、黒を1として完全に一致させている。' },
      { text: 'マンセルは白を1・黒を10と逆順に定義している。' }
    ],
    answer: 0,
    explanation: 'マンセル明度（V）は理論上の完全な黒を<strong>0</strong>、完全な白を<strong>10</strong>と定義し、実際に色票として存在するのは1〜9.5程度です。一方、PCCSは最初から実用的な色票として白（W）を<strong>9.5</strong>、黒（Bk）を<strong>1.5</strong>と定めています。'
  },
  {
    id: 's1_04', stage: 1, freq: '毎年頻出', category: 'ch1_system', hasVisual: true,
    question: '純色（vトーン）に「白（W）」のみを混ぜてできるトーン群（p, lt, b）をPCCSでは何と呼ぶか。',
    options: [
      { text: '明清色（ティントカラー）', swatches: ['p2', 'lt2', 'b2'] },
      { text: '暗清色（シェードカラー）', swatches: ['dp2', 'dk2'] },
      { text: '中間色（トーンカラー）', swatches: ['ltg2', 'sf2', 'd2', 'g2'] },
      { text: '無彩色（アクロマティック）', swatches: ['W', 'mGy', 'Bk'] }
    ],
    answer: 0,
    explanation: '純色に<strong>白だけ</strong>を混ぜた澄んだ明るい色を<strong>明清色（ティント：p, lt, b）</strong>、純色に<strong>黒だけ</strong>を混ぜた澄んだ暗い色を<strong>暗清色（シェード：dp, dk）</strong>、純色に<strong>灰色（白＋黒）</strong>を混ぜた色を<strong>中間色（ltg, sf, s, d, g, dkg）</strong>と呼びます。'
  },
  {
    id: 's1_05', stage: 1, freq: '頻出', category: 'ch1_system', hasVisual: true,
    question: 'PCCS 24色相環において、心理四原色（赤・黄・緑・青）に対応する色相番号と記号の組み合わせとして正しいものはどれか。',
    options: [
      { text: '2:R（赤）・ 8:Y（黄）・ 12:G（緑）・ 18:B（青）', swatches: ['v2', 'v8', 'v12', 'v18'] },
      { text: '1:pR（赤）・ 7:rY（黄）・ 13:bG（緑）・ 19:pB（青）', swatches: ['v1', 'v7', 'v13', 'v19'] },
      { text: '2:R（赤）・ 6:yO（橙）・ 12:G（緑）・ 20:V（青紫）', swatches: ['v2', 'v6', 'v12', 'v20'] },
      { text: '4:rO（赤）・ 8:Y（黄）・ 14:BG（緑）・ 18:B（青）', swatches: ['v4', 'v8', 'v14', 'v18'] }
    ],
    answer: 0,
    explanation: 'PCCSの色相環は、心理四原色である <strong>2:R（赤）、8:Y（黄）、12:G（緑）、18:B（青）</strong> と、その心理補色（14:BG、20:V、24:RP、6:yO）を基準に24色相が配置されています。'
  },
  {
    id: 's1_06', stage: 1, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（あざやかな赤 / PCCS v2 相当）', codes: ['#EA352D|？'] }],
    question: 'ヒナゲシの花に由来し、PCCSの「2:R（冴えた赤）」の代表色名としても使われる外来色名はどれか。',
    options: [
      { text: 'ポピーレッド（Poppy Red）' },
      { text: 'バーガンディー（Burgundy）' },
      { text: 'オールドローズ（Old Rose）' },
      { text: 'マルーン（Maroon）' }
    ],
    answer: 0,
    explanation: '<strong>ポピーレッド</strong>はヒナゲシ（ポピー）の花に由来する「あざやかな赤（v2）」です。バーガンディーはごく暗い紫みの赤、オールドローズはくすんだ赤、マルーンは暗い赤（栗色）です。'
  },
  {
    id: 's1_07', stage: 1, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（あざやかな赤紫 / PCCS v24 相当）', codes: ['#D7006D|？'] }],
    question: 'イタリアの戦場の地名に由来し、印刷のプロセスインキ（CMYK）の三原色の一つでもある「あざやかな赤紫」の外来色名はどれか。',
    options: [
      { text: 'マゼンタ（Magenta）' },
      { text: 'バイオレット（Violet）' },
      { text: 'ラベンダー（Lavender）' },
      { text: 'ローズピンク（Rose Pink）' }
    ],
    answer: 0,
    explanation: '<strong>マゼンタ（Magenta）</strong>は1859年のイタリア独立戦争の激戦地マジェンタにちなんで名付けられた合成染料に由来し、色料の三原色（シアン・マゼンタ・イエロー）の「あざやかな赤紫（v24）」です。'
  },
  {
    id: 's1_08', stage: 1, freq: '頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（くすんだ黄みの赤 / 素焼きの陶器色）', codes: ['#BD624B|？'] }],
    question: 'イタリア語で「焼いた土」を意味し、素焼きの陶器や植木鉢・レンガのような「くすんだ黄みの赤」を指す外来色名はどれか。',
    options: [
      { text: 'テラコッタ（Terracotta）' },
      { text: 'エクルベイジュ（Ecru Beige）' },
      { text: 'ネープルスイエロー（Naples Yellow）' },
      { text: 'チャコールグレイ（Charcoal Gray）' }
    ],
    answer: 0,
    explanation: '<strong>テラコッタ（Terracotta）</strong>はイタリア語の terra（土）＋ cotta（焼いた）が語源で、素焼きの陶器や建築用タイルに見られる「くすんだ黄みの赤（d3〜d4）」です。2級の記述問題でも超頻出の色名です！'
  },
  {
    id: 's1_09', stage: 1, freq: '頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（明るい紫みの赤）', codes: ['#F4A7B9|？'] }],
    question: '国際保護鳥であるトキ（朱鷺）の風切羽の色に由来する「明るい紫みの赤」の和色名はどれか。',
    options: [
      { text: '鴇色（ときいろ）' },
      { text: '鶸色（ひわいろ）' },
      { text: '鳶色（とびいろ）' },
      { text: '新橋色（しんばしいろ）' }
    ],
    answer: 0,
    explanation: '鳥の名前がつく2級の和色名3つはセットで覚えましょう：<br>・<strong>鴇色（ときいろ）</strong>：明るい紫みの赤（トキの羽のピンク）<br>・<strong>鳶色（とびいろ）</strong>：暗い黄みの赤（トビの羽の茶褐色）<br>・<strong>鶸色（ひわいろ）</strong>：つよい黄緑（マヒワの羽の黄緑）'
  },
  {
    id: 's1_10', stage: 1, freq: '毎年頻出', category: 'ch2_light', hasVisual: false,
    question: '光源の「色温度（単位：K ケルビン）」について、最も正しい記述はどれか。',
    options: [
      { text: '色温度が低い（約2800K）と赤みが強い暖かな光色になり、色温度が高い（約6500K）と青みが強い涼しげな光色になる。' },
      { text: '色温度が高いほど赤みが強い光色になり、夕日の色温度は約10000Kである。' },
      { text: '色温度とは光源の実際の表面温度のことであり、LED電球は実際に6500℃に発熱している。' },
      { text: '色温度の単位「K」はカンデラと読み、光の照度を表す。' }
    ],
    answer: 0,
    explanation: '色温度（K：ケルビン）は黒体（完全放射体）を加熱した際の色と対応づけた尺度です。<strong>低いほど赤み（電球色：約2800K）</strong>、<strong>中間で白（昼白色：約5000K）</strong>、<strong>高いほど青み（昼光色：約6500K）</strong>になります。'
  },
  {
    id: 's1_11', stage: 1, freq: '毎年頻出', category: 'ch2_light', hasVisual: false,
    question: '照明光が物体の色の見え方に影響を及ぼす性質を「演色性」といい、基準光と同じ見え方をする理想的な状態を「100」として表す指標を何というか。',
    options: [
      { text: '平均演色評価数（Ra）' },
      { text: '分光反射率（ρ）' },
      { text: '明所視比視感度（V(λ)）' },
      { text: '色温度（K）' }
    ],
    answer: 0,
    explanation: '試験色No.1〜No.8の8色を用いて算出する演色性の代表指標を<strong>平均演色評価数（$R_a$）</strong>といいます。基準光との色差がない状態を $R_a = 100$ とします。'
  },
  {
    id: 's1_12', stage: 1, freq: '毎年頻出', category: 'ch2_light', hasVisual: false,
    question: '新印象派の点描画や、カラーテレビ・液晶モニターのRGB画素のように、微細な色点を密接して並べることで網膜上で混ざって見える混色を何というか。',
    options: [
      { text: '並置加法混色（中間混色）' },
      { text: '継時加法混色（回転混色）' },
      { text: '減法混色' },
      { text: '条件等色' }
    ],
    answer: 0,
    explanation: '微細な色点を並べて網膜の解像限界により混ざって見える現象を<strong>並置加法混色</strong>といいます。混ぜた後の明るさが各色の平均になるため、回転混色（継時加法混色）とあわせて<strong>中間混色（平均混色）</strong>と呼ばれます。'
  },
  {
    id: 's1_13', stage: 1, freq: '頻出', category: 'ch2_light', hasVisual: false,
    question: '照明された「面」に入射する単位面積あたりの光束（光の量）を表し、机の上の明るさなどの基準に使われる測光量と単位の組み合わせはどれか。',
    options: [
      { text: '照度 ── ルクス（lx）' },
      { text: '光束 ── ルーメン（lm）' },
      { text: '光度 ── カンデラ（cd）' },
      { text: '輝度 ── カンデラ毎平方メートル（cd/m²）' }
    ],
    answer: 0,
    explanation: '照らされる<strong>面</strong>が受ける単位面積あたりの光束は<strong>照度（単位：lx ルクス ＝ $\\text{lm/m}^2$）</strong>です。光源から出る光の総量が「光束（lm）」、特定方向への光の強さが「光度（cd）」、輝く面のまぶしさが「輝度（$\\text{cd/m}^2$）」です。'
  },
  {
    id: 's1_14', stage: 1, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    question: '自然界の光の順列にならい、隣接・類似色相において「黄（8:Y）に近い色相を高明度（明るく）」「青紫（20:V）に近い色相を低明度（暗く）」にする配色を何というか。',
    options: [
      { text: 'ナチュラルハーモニー', swatches: ['lt8', 'd10'] },
      { text: 'コンプレックスハーモニー', swatches: ['d8', 'lt10'] },
      { text: 'ダイアード配色', swatches: ['v2', 'v14'] },
      { text: 'モノトーン配色', swatches: ['W', 'mGy', 'Bk'] }
    ],
    answer: 0,
    explanation: '<strong>ナチュラルハーモニー</strong>は、自然光の下で葉のひなたが黄み（高明度）に、日陰が青緑み（低明度）に見える自然の明度順列（8:Yが最も明るく、20:Vが最も暗い）に従ったなじみやすい調和配色です。'
  },
  {
    id: 's1_15', stage: 1, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: '配色例（p4 と ltg4）', codes: ['p4', 'ltg4'] }],
    question: '上の配色のように、同一または隣接色相（色相差0〜1）かつ同一・隣接トーンを組み合わせ、一見すると単色に見えるほど差の小さい配色技法を何というか。',
    options: [
      { text: 'カマイユ配色' },
      { text: 'ビコロール配色' },
      { text: 'トリコロール配色' },
      { text: 'テトラード配色' }
    ],
    answer: 0,
    explanation: '<strong>カマイユ（camaïeu）配色</strong>は、同一・隣接色相かつ同一・隣接トーンによる微差の配色です。これより少し色相差（2〜3）やトーン差を広げたものを<strong>フォカマイユ（偽のカマイユ）配色</strong>と呼びます。'
  },
  {
    id: 's1_16', stage: 1, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: '配色例（lt16 と dk16）', codes: ['lt16', 'dk16'] }],
    question: '上の配色のように、同一色相（または類似色相）の中で「明度差を大きく」とって濃淡のコントラストをつける配色技法を何というか。',
    options: [
      { text: 'トーンオントーン配色' },
      { text: 'トーンイントーン配色' },
      { text: 'トーナル配色' },
      { text: 'カマイユ配色' }
    ],
    answer: 0,
    explanation: '<strong>トーンオントーン（tone on tone）配色</strong>は、同一・類似色相で明度差を大きくとる濃淡配色です。一方、同一・類似トーンで統一する配色は<strong>トーンイントーン（ドミナントトーン）</strong>です。'
  },
  {
    id: 's1_17', stage: 1, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    question: 'PCCS 24色相環において、補色関係（向かい合う位置＝色相差12）の2色を組み合わせる配色を何というか。',
    options: [
      { text: 'ダイアード（補色配色）', swatches: ['v2', 'v14'] },
      { text: 'トライアド（3色配色）', swatches: ['v2', 'v10', 'v18'] },
      { text: 'テトラード（4色配色）', swatches: ['v2', 'v8', 'v14', 'v20'] },
      { text: 'スプリットコンプリメンタリー', swatches: ['v2', 'v13', 'v15'] }
    ],
    answer: 0,
    explanation: '24色相環で向かい合う補色（色相差12）の2色配色を<strong>ダイアード（dyad）</strong>と呼びます。'
  },
  {
    id: 's1_18', stage: 1, freq: '頻出', category: 'ch3_harmony', hasVisual: false,
    question: '1704年に著書『光学（Opticks）』を発表し、太陽の白色光をプリズムで7色のスペクトルに分光する実験を行ったイギリスの物理学者は誰か。',
    options: [
      { text: 'アイザック・ニュートン（I. Newton）' },
      { text: 'ゲーテ（J.W. von Goethe）' },
      { text: 'シュヴルール（M.E. Chevreul）' },
      { text: 'ジャッド（D.B. Judd）' }
    ],
    answer: 0,
    explanation: '<strong>ニュートン</strong>はプリズムの分光実験により「白色光は波長（屈折率）の異なる単色光の集まりである」ことを証明し、7色の色相環を示しました。'
  },
  {
    id: 's1_19', stage: 1, freq: '毎年頻出', category: 'ch4_image', hasVisual: true,
    promptSwatches: [
      { label: '軸A：暖色系 ⇔ 寒色系', codes: ['v4', 'v18'] },
      { label: '軸B：高明度・淡い ⇔ 低明度・濃い', codes: ['p4', 'dk18'] }
    ],
    question: '配色イメージ（色彩の感情効果）を整理する際、基本となる2つの対極軸（イメージスケール）の組み合わせとして正しいものはどれか。',
    options: [
      { text: '「ウォーム（暖かい）⇔ クール（冷たい）」軸 と 「ソフト（柔らかい）⇔ ハード（硬い）」軸' },
      { text: '「大きい ⇔ 小さい」軸 と 「速い ⇔ 遅い」軸' },
      { text: '「高価 ⇔ 安価」軸 と 「都会的 ⇔ 田舎的」軸' },
      { text: '「加法混色 ⇔ 減法混色」軸 と 「明所視 ⇔ 暗所視」軸' }
    ],
    answer: 0,
    explanation: '配色イメージの基本2軸は、主に色相が関与する<strong>「ウォーム ⇔ クール」軸</strong>と、主に明度・トーンが関与する<strong>「ソフト ⇔ ハード」軸</strong>です。'
  },
  {
    id: 's1_20', stage: 1, freq: '頻出', category: 'ch4_image', hasVisual: true,
    promptSwatches: [{ label: 'ピンク・パステル調の配色', codes: ['p2', 'p4', 'lt24'] }],
    question: '上の配色のように、赤〜赤紫系のペール（p）やライト（lt）トーンといった高明度・明清色を中心にまとめた、甘くかわいらしい・夢見るような配色イメージはどれか。',
    options: [
      { text: 'ロマンチック（またはプリティ）' },
      { text: 'ダンディ（マニッシュ）' },
      { text: 'クラシック' },
      { text: 'ワイルド' }
    ],
    answer: 0,
    explanation: '暖色系（特にピンク系）の<code>p, lt</code>トーンを中心に明度差・色相差を小さくまとめた配色は<strong>ロマンチック（またはプリティ）</strong>の代表的なイメージです。'
  },
  {
    id: 's1_21', stage: 1, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    promptSwatches: [{ label: '高齢者が特に見分けにくい組み合わせ', codes: ['W', 'p8', 'dk18', 'Bk'] }],
    question: '加齢に伴う「高齢者の視覚特性」として、水晶体が黄変（黄色化）することで生じる色の見え方の変化はどれか。',
    options: [
      { text: '短波長（青〜紫）の光が吸収されるため、白と淡い黄色や、紺色（暗い青）と黒の区別がつきにくくなる。' },
      { text: '長波長（赤）の光だけが吸収されるため、赤と白の区別がつかなくなる。' },
      { text: '瞳孔が大きく開くため、暗い場所での視力が若年者より高くなる。' },
      { text: '高彩度の色同士だけが見分けにくくなり、低明度・低彩度の識別力は向上する。' }
    ],
    answer: 0,
    explanation: '加齢により水晶体が<strong>黄変</strong>すると、短波長光（青・紫）が吸収されて黄色いフィルターを通したような視界になります。そのため<strong>「白と淡い黄色（Wとp8）」</strong>や<strong>「紺と黒（dk18とBk）」</strong>が混同されやすくなります。'
  },
  {
    id: 's1_22', stage: 1, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    question: 'JIS安全色（JIS Z 9101）において、「安全状態・進行・非常口・救護」を表す安全色と、その対比色の組み合わせはどれか。',
    options: [
      { text: '安全色：緑 ── 対比色：白', swatches: ['#008E5B|緑', 'W'] },
      { text: '安全色：黄 ── 対比色：黒', swatches: ['#F5B100|黄', 'Bk'] },
      { text: '安全色：赤 ── 対比色：黒', swatches: ['#D91E2A|赤', 'Bk'] },
      { text: '安全色：青 ── 対比色：黄', swatches: ['#0068B7|青', '#F5B100|黄'] }
    ],
    answer: 0,
    explanation: '非常口や救護所などの「安全・進行」を表すJIS安全色は<strong>緑</strong>で、明度差を確保するための対比色は<strong>白</strong>です。'
  },
  {
    id: 's1_23', stage: 1, freq: '毎年頻出', category: 'ch5_perception', hasVisual: false,
    question: '小さな色見本帳で選んだ色を広い壁面や建物の外壁に塗ると、見本よりも「明るい色はより明るく・鮮やかに、暗い色はより暗く」見える現象を何というか。',
    options: [
      { text: '面積効果' },
      { text: 'プルキンエ現象' },
      { text: 'ベンハム効果' },
      { text: 'ハーマングリッド現象' }
    ],
    answer: 0,
    explanation: '同じ色でも面積が大きくなるほど明度・彩度が強調されて見える現象を<strong>面積効果</strong>といいます。外壁や壁紙を選ぶ際は、希望のイメージより<strong>少し低明度・低彩度の色見本</strong>を選ぶのが鉄則です。'
  },
  {
    id: 's1_24', stage: 1, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    promptSwatches: [{ label: '等明度の赤と緑', codes: ['v2', 'v12'] }],
    question: '図と地の色相差は大きくても、2色の「明度差がほとんどない（等明度）」場合、形の輪郭がぼやけて認識しにくくなる現象を何というか。',
    options: [
      { text: 'リープマン効果' },
      { text: 'マッハバンド' },
      { text: '条件等色（メタメリズム）' },
      { text: '色順応' }
    ],
    answer: 0,
    explanation: '<strong>リープマン効果</strong>は、図と地の明度差が小さいと、たとえ補色同士であっても境界が曖昧になり形が判別しにくくなる現象です。文字やサインの視認性には<strong>明度差</strong>が不可欠である根拠となります。'
  },
  {
    id: 's1_25', stage: 1, freq: '頻出', category: 'ch6_visual', hasVisual: true,
    promptSwatches: [{ label: '黒地に黄色の図形（踏切・標識など）', codes: ['Bk', 'v8'] }],
    question: '背景（地）との明度差が大きいほど図形や文字の輪郭がくっきりと見分けやすくなる性質を何というか。また、人目をひきつける性質（赤や黄などの高彩度暖色が高い）を何というか。',
    options: [
      { text: '見分けやすさ：視認性（明視性） ── 人目のひきやすさ：誘目性' },
      { text: '見分けやすさ：誘目性 ── 人目のひきやすさ：恒常性' },
      { text: '見分けやすさ：演色性 ── 人目のひきやすさ：視認性' },
      { text: '見分けやすさ：彩度対比 ── 人目のひきやすさ：色順応' }
    ],
    answer: 0,
    explanation: '対象物の発見しやすさ・輪郭のくっきりさを<strong>視認性</strong>（明度差が支配的）、無意識に人の注意・視線を引きつける度合いを<strong>誘目性</strong>（高彩度の赤・橙・黄が高い）と呼びます。'
  },
  {
    id: 's1_26', stage: 1, freq: '頻出', category: 'ch6_visual', hasVisual: false,
    question: 'モニター画面（RGB）でデザインしたデータをカラープリンター（CMYK）で印刷すると、鮮やかな青や緑がくすんで変化してしまう主な理由はどれか。',
    options: [
      { text: '加法混色（RGB）と減法混色（CMYK）では再現できる色域（カラースペース／ガモット）が異なり、CMYKの方が高彩度域が狭いため。' },
      { text: 'プリンターの解像度がモニターよりも低いため。' },
      { text: 'CMYKは光の三原色であり、黒を表現できないため。' },
      { text: 'RGBは減法混色であり、色を重ねるほど暗くなるため。' }
    ],
    answer: 0,
    explanation: 'デバイスが再現できる色の領域を<strong>カラースペース（色空間）またはガモット（色域）</strong>と呼びます。発光するモニター（RGB）に比べ、インキの反射で見る印刷（CMYK）は特に鮮やかな緑〜青〜赤紫の再現色域が狭いため、色変換（カラーマネジメント）が必要になります。'
  },
  {
    id: 's1_27', stage: 1, freq: '毎年頻出', category: 'ch78_design', hasVisual: true,
    promptSwatches: [
      { label: 'ベースカラー (70%)', codes: ['ltg6'] },
      { label: 'アソートカラー (25%)', codes: ['d6'] },
      { label: 'アクセントカラー (5%)', codes: ['v16'] }
    ],
    question: 'インテリアやファッションの色彩計画における「ベースカラー（基調色）」「アソートカラー（配合色）」「アクセントカラー（強調色）」の標準的な面積比率はどれか。',
    options: [
      { text: 'ベースカラー 70% ： アソートカラー 25% ： アクセントカラー 5%' },
      { text: 'ベースカラー 50% ： アソートカラー 40% ： アクセントカラー 10%' },
      { text: 'ベースカラー 33% ： アソートカラー 33% ： アクセントカラー 34%' },
      { text: 'ベースカラー 20% ： アソートカラー 70% ： アクセントカラー 10%' }
    ],
    answer: 0,
    explanation: '空間や装いのバランスを整える基本面積比は、<strong>ベースカラー約70%：アソートカラー約25%：アクセントカラー約5%</strong>です。'
  },
  {
    id: 's1_28', stage: 1, freq: '毎年頻出', category: 'ch78_design', hasVisual: true,
    promptSwatches: [
      { label: '天井', codes: ['W'] },
      { label: '壁', codes: ['ltg6'] },
      { label: '床', codes: ['dk6'] }
    ],
    question: '一般的な住宅インテリアにおいて、自然界の「大地・木々・空」の配置にならい、空間に安定感と天井の開放感を与える明度配分はどれか。',
    options: [
      { text: '床を低〜中明度、壁を中〜高明度、天井を最も高明度にする。' },
      { text: '天井を最も低明度（黒）にし、床を最も高明度（白）にする。' },
      { text: '床・壁・天井のすべてを最高彩度のビビッドトーンにする。' },
      { text: '壁を最も低明度にし、床と天井を同じ純色にする。' }
    ],
    answer: 0,
    explanation: '<strong>床（低〜中明度）＜ 壁（中〜高明度）＜ 天井（高明度）</strong>の順に明るくすることで、重心が下がって落ち着き、天井が高く開放的に感じられます。'
  },
  {
    id: 's1_29', stage: 1, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: 'プロダクトデザイン（工業製品デザイン）において、商品の魅力や質感を左右する3大要素「CMF」とは何の頭文字か。',
    options: [
      { text: 'Color（色）・ Material（素材）・ Finish（表面仕上げ）' },
      { text: 'Chroma（彩度）・ Munsell（マンセル）・ Form（形態）' },
      { text: 'Contrast（対比）・ Mode（流行）・ Function（機能）' },
      { text: 'Cyan（シアン）・ Magenta（マゼンタ）・ Fluorescent（蛍光）' }
    ],
    answer: 0,
    explanation: 'プロダクトデザインにおける<strong>CMF</strong>は、<strong>Color（色彩）・Material（素材）・Finish（仕上げ加工）</strong>を指します。'
  },
  {
    id: 's1_30', stage: 1, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: 'ファッションのトレンドカラー（流行色）は、実シーズンの約何年前に国際機関「インターカラー（国際流行色委員会）」で選定されるか。また日本の代表加盟団体はどこか。',
    options: [
      { text: '約2年前 ── JAFCA（日本流行色協会）' },
      { text: '約5年前 ── JIS（日本産業標準調査会）' },
      { text: '約3ヶ月前 ── CIE（国際照明委員会）' },
      { text: '約10年前 ── AFT（色彩検定協会）' }
    ],
    answer: 0,
    explanation: '国際的な流行色は、実シーズンの<strong>約2年前</strong>（24ヶ月前）に<strong>インターカラー（INTERCOLOR）</strong>で選定され、日本では<strong>JAFCA（日本流行色協会）</strong>が代表機関として情報を発信しています。'
  },
  {
    id: 's1_31', stage: 1, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: '日本の「景観法」に基づく自治体の景観計画において、建築物の外壁などの色彩基準（色相・明度・彩度の制限）を数値で定める際に最も広く使われている表色系はどれか。',
    options: [
      { text: 'マンセル表色系（JIS Z 8721）' },
      { text: 'オストワルト表色系' },
      { text: 'PCCS（日本色研配色体系）' },
      { text: 'CMYK表色系' }
    ],
    answer: 0,
    explanation: '日本の景観計画（景観色彩ガイドライン）では、JIS規格（JIS Z 8721）として標準化されている<strong>マンセル表色系</strong>を用いて外壁の明度・彩度の許容範囲を規定しています。'
  },
  {
    id: 's1_32', stage: 1, freq: '頻出', category: 'ch5_perception', hasVisual: false,
    question: '明るい場所から急に暗い場所へ入ったときに徐々に目が慣れる現象を「暗順応」、その逆を「明順応」という。両者の完了時間について正しいものはどれか。',
    options: [
      { text: '明順応は数十秒〜1分程度で完了するが、暗順応には約30〜40分程度の時間がかかる。' },
      { text: '暗順応は数秒で完了するが、明順応には約40分かかる。' },
      { text: '明順応も暗順応も1秒以内に完了する。' },
      { text: '暗順応では網膜の錐体細胞だけが働き、桿体細胞は休止する。' }
    ],
    answer: 0,
    explanation: '暗い所から明るい所へ出る<strong>明順応は1分以内</strong>に終わりますが、暗い所へ入る<strong>暗順応は桿体（ロドプシン）の感度が最大になるまで約30〜40分</strong>かかります。'
  },

  // =========================================================================
  // 🔵 STAGE 2：頻出標準レベル（36問：s2_01 〜 s2_36）
  // =========================================================================
  {
    id: 's2_01', stage: 2, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセル表色系の10色相環において、互いに向かい合う位置（補色関係）にある色相の組み合わせとして【誤っているもの】を1つ選びなさい。',
    options: [
      { text: '5YR（黄赤） と 5PB（青紫）' },
      { text: '5R（赤） と 5BG（青緑）' },
      { text: '5Y（黄） と 5PB（青紫）' },
      { text: '5GY（黄緑） と 5P（紫）' }
    ],
    answer: 0,
    explanation: 'マンセル10色相環の向かい合うペア（5ステップ離れた色相）は本試験で毎年のように問われます：<br>・<strong>R ⇔ BG</strong><br>・<strong>YR ⇔ B</strong><br>・<strong>Y ⇔ PB</strong><br>・<strong>GY ⇔ P</strong><br>・<strong>G ⇔ RP</strong><br>したがって、5YRの向かいは<strong>5B（青）</strong>であり、5PB（5Yの向かい）ではありません。'
  },
  {
    id: 's2_02', stage: 2, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセルの色立体（等色相面）における「最高彩度（最も鮮やかな色の彩度値と明度値）」の特徴として正しいものはどれか。',
    options: [
      { text: '5Y（黄）は高明度（V=8付近）で最高彩度（C=14）に達し、5PB（青紫）は低明度（V=3〜4付近）で最高彩度に達する。' },
      { text: 'すべての色相が明度V=5において最高彩度C=14に達するため、色立体は完全な球体である。' },
      { text: '5BG（青緑）は全色相の中で最も彩度が高く、C=20に達する。' },
      { text: '5R（赤）は高明度（V=9）で最高彩度に達する。' }
    ],
    answer: 0,
    explanation: 'マンセル色立体の重要ポイントです：<br>・<strong>5Y（黄）</strong>：<strong>高明度（V=8）</strong>で最高彩度（C=14程度）<br>・<strong>5R（赤）</strong>：<strong>中低明度（V=4〜5）</strong>で最高彩度（C=14程度）<br>・<strong>5BG（青緑）</strong>：中明度（V=5）で最高彩度が<strong>低い（C=8〜10程度）</strong><br>・<strong>5PB（青紫）</strong>：<strong>低明度（V=3〜4）</strong>で最高彩度（C=10〜12程度）'
  },
  {
    id: 's2_03', stage: 2, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセル色相環の細分化について、10色相のそれぞれをさらに1〜10の10段階に分け（全100色相）、各色相の代表を「5（例：5R, 5YR）」としたとき、色相環上で「5R」から時計回りに「5YR」へ向かう途中にある色相記号はどれか。',
    options: [
      { text: '10R（または 7.5R, 2.5YR）' },
      { text: '2.5R（または 10RP）' },
      { text: '7.5YR（または 10YR）' },
      { text: '5RP' }
    ],
    answer: 0,
    explanation: 'マンセル色相環は時計回りに <strong>RP → R → YR → Y...</strong> と進み、各色相の中で数値が <strong>2.5 → 5 → 7.5 → 10</strong> と増えます。したがって <code>5R</code> から <code>5YR</code> へ向かう間にあるのは <code>7.5R → 10R → 2.5YR</code> です（20色相環では5と10のつく色相が使われます）。'
  },
  {
    id: 's2_04', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（明るい緑みの青 / 明治末期に流行）', codes: ['#59B9C6|？'] }],
    question: '明治末期から大正時代にかけて、東京・新橋の芸妓たちが化学染料で染めた着物を着たことから大流行した「明るい緑みの青」の和色名はどれか。',
    options: [
      { text: '新橋色（しんばしいろ）' },
      { text: '納戸色（なんどいろ）' },
      { text: '甕覗（かめのぞき）' },
      { text: '縹色（はなだいろ）' }
    ],
    answer: 0,
    explanation: '<strong>新橋色（しんばしいろ）</strong>は明治末期に輸入された合成染料によって生まれた「明るい緑みの青（b16付近）」で、新橋の芸者衆から流行した色名です。'
  },
  {
    id: 's2_05', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（つよい黄赤 / 皇太子の礼服色）', codes: ['#F05E23|？'] }],
    question: '紅花とクチナシの交染によって染められ、古来より皇太子の礼服（袍）の色として定められてきた「つよい黄赤」の和色名はどれか。',
    options: [
      { text: '黄丹（おうに）' },
      { text: '代赭（たいしゃ）' },
      { text: '蘇芳（すおう）' },
      { text: '鬱金色（うこんいろ）' }
    ],
    answer: 0,
    explanation: '<strong>黄丹（おうに）</strong>は、太陽が昇る色になぞらえた皇太子の専用色（禁色）で、系統色名は「つよい黄赤（b4〜v5付近）」です。読み方（おうに）も頻出です！'
  },
  {
    id: 's2_06', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [{ label: '色見本（江戸の紫 vs 京の紫）', codes: ['#65318E|江戸紫', '#895B8A|古代紫'] }],
    question: '2級の和色名における「江戸紫」「古代紫」「藤色」の系統色名・特徴の記述として正しいものはどれか。',
    options: [
      { text: '江戸紫は「こい青みの紫」、古代紫は「くすんだ紫」、藤色は「明るい青みの紫」である。' },
      { text: '江戸紫は「あざやかな赤紫」、古代紫は「うすい黄緑」、藤色は「ごく暗い紫」である。' },
      { text: '江戸紫と古代紫はどちらも無彩色の灰色（鼠色）の一種である。' },
      { text: '藤色はバラの花に由来する「明るい赤」である。' }
    ],
    answer: 0,
    explanation: '紫系の和色名3種の区別は超頻出です：<br>・<strong>江戸紫</strong>：<strong>こい青みの紫</strong>（dp21）<br>・<strong>古代紫</strong>：<strong>くすんだ紫</strong>（d22）<br>・<strong>藤色</strong>：<strong>明るい青みの紫</strong>（lt20）'
  },
  {
    id: 's2_07', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: '銀鼠', codes: ['#AFAFB0|銀鼠'] },
      { label: '茶鼠', codes: ['#9D8E87|茶鼠'] },
      { label: '利休鼠', codes: ['#7B8174|利休鼠'] }
    ],
    question: '江戸時代に町人文化で発達した「四十八茶百鼠」に関連する和色名のうち、抹茶のように緑みを含んだ「灰みの黄緑」の鼠色はどれか。',
    options: [
      { text: '利休鼠（りきゅうねずみ）' },
      { text: '銀鼠（ぎんねず）' },
      { text: '茶鼠（ちゃねずみ）' },
      { text: '煤竹色（すすたけいろ）' }
    ],
    answer: 0,
    explanation: '茶人・千利休にちなむ<strong>利休鼠（りきゅうねずみ）</strong>は、抹茶を思わせる緑みを含んだ「灰みの黄緑（g10）」です。銀鼠は「明るい灰色」、茶鼠は「灰みの赤みを帯びた黄」です。'
  },
  {
    id: 's2_08', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'ローシェンナ', codes: ['#C67B33|ローシェンナ'] },
      { label: 'バーントシェンナ', codes: ['#A54D32|バーントシェンナ'] },
      { label: 'ローアンバー', codes: ['#6E5127|ローアンバー'] },
      { label: 'バーントアンバー', codes: ['#4E3924|バーントアンバー'] }
    ],
    question: '天然の土顔料に由来する外来色名「ローシェンナ」「バーントシェンナ」「ローアンバー」「バーントアンバー」に関する記述として正しいものはどれか。',
    options: [
      { text: '「ロー（Raw）」は生（天然のまま）、「バーント（Burnt）」は焼いたという意味で、バーントシェンナはローシェンナを焼いて赤みと暗さを増した色である。' },
      { text: 'ローシェンナとバーントシェンナはどちらも鮮やかな青緑色の顔料である。' },
      { text: 'アンバーよりもシェンナの方が黒に近い無彩色である。' },
      { text: 'バーントアンバーは「うすい黄みの白（生成り色）」を指す。' }
    ],
    answer: 0,
    explanation: '画材の土顔料4色は2級の大定番です：<br>・<strong>ローシェンナ</strong>（生シエナ土）：つよい黄赤<br>・<strong>バーントシェンナ</strong>（焼シエナ土）：暗い黄赤（赤茶色）<br>・<strong>ローアンバー</strong>（生アンバー土）：暗い赤みの黄<br>・<strong>バーントアンバー</strong>（焼アンバー土）：ごく暗い赤みの黄（焦げ茶色）'
  },
  {
    id: 's2_09', stage: 2, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'ロイヤルブルー', codes: ['#1B499F|ロイヤル'] },
      { label: 'ネイビーブルー', codes: ['#1B294B|ネイビー'] },
      { label: 'ウルトラマリン', codes: ['#2743A5|ウルトラマリン'] },
      { label: 'サックスブルー', codes: ['#5D87A8|サックス'] }
    ],
    question: '青系の外来色名に関する説明として【誤っているもの】を1つ選びなさい。',
    options: [
      { text: 'サックスブルーは「ごく暗い紫みの青」であり、英国海軍の制服に由来する。' },
      { text: 'ウルトラマリンは「海を越えてきた青」を意味し、宝石ラピスラズリから作られた群青色に由来する。' },
      { text: 'ロイヤルブルーは英国王室の公式カラーとされる「こい紫みの青」である。' },
      { text: 'ピーコックブルーは孔雀の羽のような「こい緑みの青」である。' }
    ],
    answer: 0,
    explanation: '英国海軍の制服に由来する「暗い紫みの青（濃紺）」は<strong>ネイビーブルー</strong>です。<strong>サックスブルー</strong>はドイツ・ザクセン（サクソニー）地方に由来する「くすんだ青（sf17）」です。'
  },
  {
    id: 's2_10', stage: 2, freq: '毎年頻出', category: 'ch2_light', hasVisual: true,
    spectralCurve: 'yellow',
    question: '上の「分光反射率曲線」が示している物体の色（色相）として、最も適切なものはどれか。',
    options: [
      { text: '黄（Yellow）', swatches: ['v8'] },
      { text: '青（Blue）', swatches: ['v18'] },
      { text: '緑（Green）', swatches: ['v12'] },
      { text: '紫（Purple）', swatches: ['v22'] }
    ],
    answer: 0,
    explanation: '<strong>分光反射率曲線</strong>の読み取りは第2章の最重要問題です！<br>このグラフは500nm〜780nm（<strong>中波長の緑〜長波長の赤</strong>）の両方を70〜80%と高く反射しています。緑の光＋赤の光の加法混色は<strong>「黄（Yellow）」</strong>になり、かつ反射光の総量が多いため純色の中で最も高明度になります。'
  },
  {
    id: 's2_11', stage: 2, freq: '毎年頻出', category: 'ch2_light', hasVisual: true,
    spectralCurve: 'purple',
    question: '上の「分光反射率曲線」のように、短波長（青紫）と長波長（赤）の両端の反射率が高く、中波長（緑：500〜560nm付近）が大きく凹んでいる（吸収されている）物体の色はどれか。',
    options: [
      { text: '紫・赤紫（Purple / Magenta）', swatches: ['v22', 'v24'] },
      { text: '緑（Green）', swatches: ['v12'] },
      { text: '黄（Yellow）', swatches: ['v8'] },
      { text: '白（White）', swatches: ['W'] }
    ],
    answer: 0,
    explanation: '短波長（青）と長波長（赤）の両端を反射し、中波長（緑）を吸収する「谷型（凹型）」の分光反射率曲線は<strong>紫〜赤紫（マゼンタ）系</strong>の特徴です。逆に中波長（500〜560nm）だけが盛り上がる「山型（凸型）」は<strong>緑</strong>です。'
  },
  {
    id: 's2_12', stage: 2, freq: '毎年頻出', category: 'ch2_light', hasVisual: false,
    question: '演色評価数において、平均演色評価数（Ra）の算出には使われない「特殊演色評価数（R9〜R15）」に含まれる試験色として正しいものはどれか。',
    options: [
      { text: '高彩度の赤（R9）・黄（R10）・緑（R11）・青（R12）、西洋人の肌色（R13）、木の葉の色（R14）、日本人の肌色（R15）' },
      { text: '純白（R9）から純黒（R15）までの7段階の無彩色グレースケール' },
      { text: '蛍光ピンクやメタリックシルバーなどの特殊塗料7色' },
      { text: 'JIS安全色の6色と紫を加えた7色' }
    ],
    answer: 0,
    explanation: '平均演色評価数（$R_a$）は中彩度の試験色No.1〜No.8の平均値ですが、実用上重要な<strong>高彩度の赤・黄・緑・青（$R_9 \\sim R_{12}$）</strong>や<strong>肌色（$R_{13}, R_{15}$）・木の葉（$R_{14}$）</strong>の7色は<strong>特殊演色評価数（$R_i$）</strong>として個別に評価されます。'
  },
  {
    id: 's2_13', stage: 2, freq: '毎年頻出', category: 'ch2_light', hasVisual: false,
    question: '蛍光ランプの「光源色（光色）」の分類において、色温度が低い（赤みが強い）ものから高い（青みが強い）ものへ正しく並べたものはどれか。',
    options: [
      { text: '電球色（約2800K） → 温白色（約3500K） → 白色（約4200K） → 昼白色（約5000K） → 昼光色（約6500K）' },
      { text: '昼光色 → 昼白色 → 白色 → 温白色 → 電球色' },
      { text: '白色 → 電球色 → 温白色 → 昼光色 → 昼白色' },
      { text: '温白色 → 昼光色 → 電球色 → 白色 → 昼白色' }
    ],
    answer: 0,
    explanation: 'JISで定められた蛍光ランプ・LEDの5つの光色と色温度の順序は頻出です：<br><strong>電球色(L:約2800K) ＜ 温白色(WW:約3500K) ＜ 白色(W:約4200K) ＜ 昼白色(N:約5000K) ＜ 昼光色(D:約6500K)</strong>'
  },
  {
    id: 's2_14', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    question: '次の4つの2色配色のうち、PCCSにおける「ナチュラルハーモニー」になっているものを1つ選びなさい。',
    options: [
      { text: 'b6（黄みの橙） と dp4（赤みの橙）', swatches: ['b6', 'dp4'] },
      { text: 'dp8（黄） と lt10（黄緑）', swatches: ['dp8', 'lt10'] },
      { text: 'dk16（緑みの青） と lt18（青）', swatches: ['dk16', 'lt18'] },
      { text: 'd7（赤みの黄） と p5（橙）', swatches: ['d7', 'p5'] }
    ],
    answer: 0,
    explanation: '<code>6:yO</code>と<code>4:rO</code>では、黄色（8:Y）に近い<strong>6:yOの方が自然の明度が高い</strong>ため、6番を高明度の<code>b6</code>、4番を低明度の<code>dp4</code>にしたものが<strong>ナチュラルハーモニー</strong>です（他の選択肢はすべて明度関係が逆のコンプレックスハーモニーです）。'
  },
  {
    id: 's2_15', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    question: '次の4つの2色配色のうち、「コンプレックスハーモニー」になっているものを1つ選びなさい。',
    options: [
      { text: 'd8（黄） と lt10（黄緑）', swatches: ['d8', 'lt10'] },
      { text: 'lt8（黄） と d10（黄緑）', swatches: ['lt8', 'd10'] },
      { text: 'p12（緑） と dk14（青緑）', swatches: ['p12', 'dk14'] },
      { text: 'b18（青） と dp20（青紫）', swatches: ['b18', 'dp20'] }
    ],
    answer: 0,
    explanation: '8:Y（黄）は全色相で最も明るい色相ですが、あえて8:Yを低明度の<code>d8</code>にし、10:YGを高明度の<code>lt10</code>に逆転させているため、<code>d8 と lt10</code>が<strong>コンプレックスハーモニー</strong>です。'
  },
  {
    id: 's2_16', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: '基準色：v6（黄みの橙）', codes: ['v6'] }],
    question: 'PCCS 24色相環において、基準色を「v6（黄みの橙）」としたときの「スプリットコンプリメンタリー（分裂補色配色）」となる残り2色はどれか。',
    options: [
      { text: 'v17 と v19（または v16 と v20）', swatches: ['v6', 'v17', 'v19'] },
      { text: 'v14 と v22', swatches: ['v6', 'v14', 'v22'] },
      { text: 'v12 と v18 と v24', swatches: ['v6', 'v12', 'v18', 'v24'] },
      { text: 'v5 と v7', swatches: ['v5', 'v6', 'v7'] }
    ],
    answer: 0,
    explanation: '基準色<code>6:yO</code>の補色は 6 ＋ 12 ＝ <strong>18:B</strong> です。スプリットコンプリメンタリーは補色の両隣（隣接または類似色相）をとるため、18番の両隣である<strong>17番と19番</strong>（または16番と20番）が正解です（14と22は色相差8のトライアドです）。'
  },
  {
    id: 's2_17', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    question: 'フランス語で「2色配色」「3色配色」を意味し、高彩度色同士や純色と白・黒などの「強いコントラスト（明快な対比）」を持つ配色技法をそれぞれ何というか。',
    options: [
      { text: '2色：ビコロール ── 3色：トリコロール', swatches: ['v18', 'W', 'v2'] },
      { text: '2色：カマイユ ── 3色：フォカマイユ', swatches: ['p2', 'ltg2'] },
      { text: '2色：トーンオントーン ── 3色：トーナル', swatches: ['d2', 'd6', 'ltg8'] },
      { text: '2色：ダイアード ── 3色：テトラード', swatches: ['v2', 'v14'] }
    ],
    answer: 0,
    explanation: '明快な対比を持つ2色配色を<strong>ビコロール（bicolore）</strong>、3色配色を<strong>トリコロール（tricolore）</strong>と呼びます。カマイユ／フォカマイユが「微差・同系」であるのと対極にある技法です。'
  },
  {
    id: 's2_18', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: '配色例（d4, sf6, ltg8, g10）', codes: ['d4', 'sf6', 'ltg8', 'g10'] }],
    question: '上の配色のように、PCCSトーン図の中央付近にある中間色（sf, d, ltg, gトーン）を中心にまとめ、控えめで落ち着いた印象を与える配色技法を何というか。',
    options: [
      { text: 'トーナル配色' },
      { text: 'ビコロール配色' },
      { text: 'トーンオントーン配色' },
      { text: 'トリコロール配色' }
    ],
    answer: 0,
    explanation: '中明度・中〜低彩度の中間色トーン（<strong>sf, d, ltg, g</strong>）を主役にした穏やかな配色を<strong>トーナル（tonal）配色</strong>と呼びます。'
  },
  {
    id: 's2_19', stage: 2, freq: '毎年頻出', category: 'ch3_harmony', hasVisual: false,
    question: 'アメリカの色彩学者ジャッド（D.B. Judd）が提唱した「色彩調和の4つの原理」の正しい組み合わせはどれか。',
    options: [
      { text: '秩序の原理 ・ なじみ（親近性）の原理 ・ 類似性（共通性）の原理 ・ 明瞭性（曖昧さの否定）の原理' },
      { text: '対比の原理 ・ 補色の原理 ・ 残像の原理 ・ 面積の原理' },
      { text: '白色量の原理 ・ 黒色量の原理 ・ 純色量の原理 ・ 等価値の原理' },
      { text: '第一曖昧の原理 ・ 第二曖昧の原理 ・ 眩輝の原理 ・ 同一の原理' }
    ],
    answer: 0,
    explanation: 'ジャッドの4原理は毎年出る超重要項目です：<br>1. <strong>秩序の原理</strong>（規則的に選ばれた色は調和する）<br>2. <strong>なじみの原理</strong>（自然界の明度順列など見慣れた変化は調和する＝ナチュラルハーモニー）<br>3. <strong>類似性の原理</strong>（色相やトーンに共通性があると調和する）<br>4. <strong>明瞭性（曖昧さの否定）の原理</strong>（差が中途半端でない方が調和する）'
  },
  {
    id: 's2_20', stage: 2, freq: '頻出', category: 'ch3_harmony', hasVisual: false,
    question: '19世紀フランスの化学者であり、ゴブラン織の染色研究所長として『色彩の同時対比の法則』を著し、新印象派にも影響を与えた人物は誰か。',
    options: [
      { text: 'シュヴルール（M.E. Chevreul）' },
      { text: 'オストワルト（W. Ostwald）' },
      { text: 'ムーン（P. Moon）' },
      { text: 'マンセル（A.H. Munsell）' }
    ],
    answer: 0,
    explanation: '<strong>シュヴルール</strong>はゴブラン織の黒糸が周囲の色によって違って見える原因が「同時対比」にあることを解明し、類似の調和と対比の調和を体系化しました。'
  },
  {
    id: 's2_21', stage: 2, freq: '毎年頻出', category: 'ch4_image', hasVisual: true,
    promptSwatches: [
      { label: '配色A（紫〜赤紫系のltg, sfトーン）', codes: ['ltg22', 'sf24', 'p22'] },
      { label: '配色B（茶・暖色系のdk, dp, dkgトーン）', codes: ['dk4', 'dp6', 'dkg8'] }
    ],
    question: '上の配色Aと配色Bが表す代表的なカラーイメージの組み合わせとして、最も適切なものはどれか。',
    options: [
      { text: '配色A：エレガント（優雅・女性的） ── 配色B：クラシック（伝統的・格調高い）' },
      { text: '配色A：スポーティ（快活） ── 配色B：ロマンチック（可憐）' },
      { text: '配色A：ワイルド（野性的） ── 配色B：クリア（澄んだ）' },
      { text: '配色A：カジュアル（気軽な） ── 配色B：プリティ（かわいい）' }
    ],
    answer: 0,
    explanation: '・<strong>エレガント</strong>：紫〜赤紫系を中心に<code>ltg, sf, p</code>トーンで明度差を抑えた気品ある配色<br>・<strong>クラシック</strong>：暖色〜茶系の<code>dk, dp, dkg</code>トーンを用いた重厚で伝統的な配色'
  },
  {
    id: 's2_22', stage: 2, freq: '頻出', category: 'ch4_image', hasVisual: true,
    promptSwatches: [
      { label: '配色C（無彩色＋寒色系低彩度）', codes: ['W', 'mGy', 'Bk', 'dkg18'] },
      { label: '配色D（高彩度v・bトーンの対比）', codes: ['v2', 'b8', 'v18', 'W'] }
    ],
    question: '上の配色Cと配色Dが表すカラーイメージの組み合わせとして最も適切なものはどれか。',
    options: [
      { text: '配色C：モダン（都会的・シャープ） ── 配色D：スポーティ／カジュアル（活動的・快活）' },
      { text: '配色C：エスニック（民族的） ── 配色D：シック（粋な・渋い）' },
      { text: '配色C：ナチュラル（自然的） ── 配色D：エレガント（優雅）' },
      { text: '配色C：ロマンチック ── 配色D：クラシック' }
    ],
    answer: 0,
    explanation: '・<strong>モダン</strong>：無彩色（W, Gy, Bk）や寒色系の硬質なトーンによる人工的・都会的な配色<br>・<strong>スポーティ／カジュアル</strong>：<code>v, b</code>トーンの鮮やかな色と白などを組み合わせた躍動感のある配色'
  },
  {
    id: 's2_23', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    promptSwatches: [{ label: '段階的な灰色のグラデーション帯', codes: ['Gy-8.5', 'ltGy', 'mGy', 'dkGy', 'Gy-2.5'] }],
    question: '明度が段階的に変化する灰色の帯を並べたとき、各帯の境界部分で明るい側はより明るく、暗い側はより暗く強調されて見える現象を何というか。',
    options: [
      { text: 'マッハバンド（マッハの帯）' },
      { text: 'ハーマングリッド（ヘルマン格子）現象' },
      { text: 'リープマン効果' },
      { text: 'ベンハムのコマ' }
    ],
    answer: 0,
    explanation: '<strong>マッハバンド（マッハの帯）</strong>は、明度段階の境界で網膜の側抑制（明暗の同時対比）が強く働き、境界の明暗差が強調されて見える現象です。'
  },
  {
    id: 's2_24', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: false,
    question: '白と黒の円弧模様だけが描かれた円盤を適切な速度で回転させると、赤・緑・青などの淡い有彩色（主観色）が知覚される器具を何というか。',
    options: [
      { text: 'ベンハムのコマ' },
      { text: 'マックスウェルのコマ' },
      { text: 'ニュートンの色円盤' },
      { text: 'マンセルの回転混色器' }
    ],
    answer: 0,
    explanation: '白黒模様の回転で主観色（フェヒナーの色）が見える円盤を<strong>ベンハムのコマ</strong>と呼びます。網膜のL・M・S錐体の光刺激に対する反応・減衰時間のズレによって生じます（マックスウェルのコマは有彩色を塗って継時加法混色を調べる器具なので区別しましょう）。'
  },
  {
    id: 's2_25', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    promptSwatches: [
      { label: '昼間（明所視：555nmピーク）', codes: ['v2', 'v8'] },
      { label: '薄暮（暗所視：507nmピーク）', codes: ['v16', 'v18'] }
    ],
    question: '夕暮れ時など、明るい場所（明所視）から暗い場所（薄明視〜暗所視）に移行するとき、赤色が早く暗く沈んで見え、青色の方が相対的に明るく見えるようになる現象を何というか。',
    options: [
      { text: 'プルキンエ現象' },
      { text: 'ベゾルト・ブリュッケ現象' },
      { text: 'アブニー効果' },
      { text: 'メタメリズム' }
    ],
    answer: 0,
    explanation: '<strong>プルキンエ現象</strong>は、明所視（錐体：最高感度555nm付近）から暗所視（桿体：最高感度507nm付近）へ移行する際、比視感度のピークが短波長側へ移動するために、赤が暗く青が明るく見える現象です。'
  },
  {
    id: 's2_26', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: false,
    question: '2つの色見本の「分光反射率」は異なっているにもかかわらず、昼光の下では同じ色に見え、白熱電球の下では違う色に見える現象を何というか。',
    options: [
      { text: '条件等色（メタメリズム）' },
      { text: '無条件等色（アイソメリズム）' },
      { text: '色の恒常性' },
      { text: '色順応' }
    ],
    answer: 0,
    explanation: '分光反射率が異なるのに特定光源下で同じ色に見える現象を<strong>条件等色（メタメリズム）</strong>といいます。反対に、分光反射率曲線そのものが完全に一致し、どんな光源下でも同じ色に見えることを<strong>無条件等色（アイソメリズム）</strong>といいます。'
  },
  {
    id: 's2_27', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    promptSwatches: [
      { label: '1型(P型)・2型(D型)で混同しやすい色', codes: ['v2', 'd12', 'dp2', 'Bk'] },
      { label: '識別しやすい改善配色（朱色＋青緑＋明度差）', codes: ['v3', 'dp14'] }
    ],
    question: '先天赤緑色覚（1型色覚＝P型、2型色覚＝D型）の視覚特性と配慮について、最も適切な記述はどれか。',
    options: [
      { text: '1型（P型）色覚では長波長（赤）の感度が低いため、赤が暗く見えて黒や焦げ茶と混同しやすい。赤を使う際は黄みの赤（朱色・橙寄り）にし、緑は青緑寄りにして明度差をつける。' },
      { text: '1型・2型色覚では青と黄色のみを混同し、赤と緑は一般色覚より鮮明に区別できる。' },
      { text: '明度差をなくして同じ明度の赤と緑を隣接させると最も見分けやすくなる。' },
      { text: '色覚多様性に配慮する場合、文字や記号・境界線の併用は避けるべきである。' }
    ],
    answer: 0,
    explanation: '<strong>1型（P型：L錐体欠損）</strong>は特に長波長の赤が暗く沈んで見えるため、濃い赤と黒・こげ茶を混同しやすいのが特徴です。<strong>赤は黄みの赤（朱色）へ、緑は青みの緑（青緑）へ寄せ、明度差＋文字・形・境界線（セパレーション）を併用する</strong>のが鉄則です。'
  },
  {
    id: 's2_28', stage: 2, freq: '毎年頻出', category: 'ch5_perception', hasVisual: true,
    question: 'JIS安全色（JIS Z 9101）において、安全色を見やすくするための「対比色」が「黒」と定められている安全色の組み合わせはどれか。',
    options: [
      { text: '黄（注意・警告） と 黄赤（危険）', swatches: ['#F5B100|黄', '#EC5C13|黄赤', 'Bk'] },
      { text: '赤（防火・禁止） と 緑（安全・非常口）', swatches: ['#D91E2A|赤', '#008E5B|緑', 'Bk'] },
      { text: '青（指示） と 赤紫（放射能）', swatches: ['#0068B7|青', '#A61E69|赤紫', 'Bk'] },
      { text: '緑（安全） と 青（指示）', swatches: ['#008E5B|緑', '#0068B7|青', 'Bk'] }
    ],
    answer: 0,
    explanation: 'JIS安全色のうち、明度が高い<strong>「黄（V=8）」と「黄赤（V=6）」の対比色は「黒」</strong>、明度が低い<strong>「赤（V=4）」「緑（V=4）」「青（V=3.5）」の対比色は「白」</strong>、そして「赤紫（放射能）」の背景対比色は「黄」です。'
  },
  {
    id: 's2_29', stage: 2, freq: '毎年頻出', category: 'ch6_visual', hasVisual: false,
    question: '異なるデバイス（スキャナー・モニター・プリンター）間で色の再現性を一致させる「カラーマネジメントシステム（CMS）」において、各デバイスの色特性を記録したファイルを何というか。また、その国際標準規格を策定した団体はどこか。',
    options: [
      { text: 'ICCプロファイル ── ICC（国際カラーコンソーシアム）' },
      { text: 'JAFCAプロファイル ── JAFCA（日本流行色協会）' },
      { text: 'PCCSファイル ── 日本色彩研究所' },
      { text: 'JIS安全プロファイル ── 日本産業標準調査会' }
    ],
    answer: 0,
    explanation: 'カラーマネジメントでは、<strong>ICC（International Color Consortium：国際カラーコンソーシアム）</strong>が策定した<strong>ICCプロファイル</strong>を用いて、デバイス固有のRGB/CMYK値をデバイスに依存しない共通の色空間（PCS：CIEXYZやCIELAB）を介して変換します。'
  },
  {
    id: 's2_30', stage: 2, freq: '頻出', category: 'ch6_visual', hasVisual: false,
    question: 'RGB色空間の規格のうち、一般的なWebブラウザや標準的なモニターで標準採用されている「sRGB」と、DTP・商業印刷やデジタル一眼レフカメラで使われる「Adobe RGB」の比較として正しいものはどれか。',
    options: [
      { text: 'Adobe RGBの方がsRGBよりも色域（ガモット）が広く、特に緑（G）〜シアン（C）の高彩度領域を広くカバーしている。' },
      { text: 'sRGBの方がAdobe RGBよりも色域が2倍広く、人間の目に見えるすべての色を表現できる。' },
      { text: 'Adobe RGBは減法混色（CMYK）の規格であり、モニターでは表示できない。' },
      { text: 'sRGBとAdobe RGBの色域は完全に同一である。' }
    ],
    answer: 0,
    explanation: '<strong>Adobe RGB</strong>はsRGBよりも色域（ガモット）が広く、特に<strong>緑（G）から青緑（シアン）</strong>にかけての鮮やかな色域を広く表現できるため、CMYK印刷の色域をほぼカバーでき、プロのDTPや写真現像で重宝されます。'
  },
  {
    id: 's2_31', stage: 2, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: '住宅の部屋ごとの照明計画（色温度・演色性・照度）として、最も適切なものはどれか。',
    options: [
      { text: '食卓（ダイニング）や寝室には色温度が低め（電球色〜温白色）で演色性の高い光源が適し、勉強部屋や書斎での読書・学習には色温度が高め（昼白色〜昼光色）で高照度の照明が適する。' },
      { text: '寝室でくつろぐ際には、色温度6500Kの昼光色で1500lx以上の強い直接照明を天井全面に配置するのが最も適する。' },
      { text: '食卓で料理をおいしく見せるには、赤色成分を全く含まない低圧ナトリウムランプが最適である。' },
      { text: '化粧室の鏡の照明には、演色評価数Raが40以下の光源を選ぶべきである。' }
    ],
    answer: 0,
    explanation: '<strong>クルーゾフ効果</strong>や心理効果により、くつろぎの空間（寝室・団らん）や料理を温かく見せるダイニングには<strong>低色温度（電球色〜温白色）・中低照度</strong>が適し、集中して文字を読む書斎・学習室・オフィスには<strong>中高色温度（昼白色〜昼光色）・高照度</strong>が適します。'
  },
  {
    id: 's2_32', stage: 2, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: '景観色彩における「建築物の外壁（基調色）」のマンセル値基準について、一般的な自治体の景観計画で最も広く推奨・許容されている色の傾向はどれか。',
    options: [
      { text: '自然の土壌や樹木となじみやすい「YR（黄赤）〜Y（黄）系」の「中〜高明度・低彩度（ベージュ・アイボリー・茶系）」の色。' },
      { text: '遠方からでも目立つ「RP（赤紫）〜P（紫）系」の「彩度10以上の高彩度色」。' },
      { text: '空の色と競合する「PB（青紫）系」の純色。' },
      { text: '面積効果で色が薄く見えるのを防ぐため、マンセル彩度12以上のビビッドカラー。' }
    ],
    answer: 0,
    explanation: '日本の景観計画では、木材や土壁などの自然素材になじむ<strong>YR〜Y（暖色）系の低彩度色</strong>が基調色として推奨されます。一般的な基準では、YR〜Y系は彩度4〜6以下、R系や寒色系（B・PB・P）は彩度2〜4以下といった厳しい彩度制限が設けられています。'
  },
  {
    id: 's2_33', stage: 2, freq: '頻出', category: 'ch78_design', hasVisual: false,
    question: 'ファッションにおける「素材（テクスチャ）と色の見え方」の関係について、同じ染料で染めた生地であっても、サテン（繻子織）のように表面が滑らかで光沢が強い素材と、ツイードのように表面に凹凸がある素材ではどのように異なって見えるか。',
    options: [
      { text: '表面が滑らかで光沢のある素材は、正反射光と深い色みの対比により「高彩度で鮮やか（暗い部分はより深く）」に見え、凹凸のある素材は拡散反射により「やわらかく低彩度（穏やか）」に見える。' },
      { text: '凹凸のあるツイード素材の方が、サテンよりも常に彩度が2倍高く鮮やかに見える。' },
      { text: '素材の織り方や光沢が変わっても、染料が同じであれば色の見え方は一切変化しない。' },
      { text: '起毛素材（ベルベットなど）は光を全く吸収しないため、常に純白に見える。' }
    ],
    answer: 0,
    explanation: '繊維・染色分野の頻出知識です。シルクやサテンなど<strong>表面が平滑な素材</strong>は光が規則的に反射（正反射）し、生地内部を透過した光が鮮やかに返るため<strong>彩度が高く華やか</strong>に見えます。一方、ウールや麻など<strong>凹凸のある素材</strong>は光があらゆる方向に乱反射（拡散反射）するため、白っぽく混ざって<strong>ソフトで落ち着いた（低彩度な）印象</strong>になります。'
  },
  {
    id: 's2_34', stage: 2, freq: '頻出', category: 'ch3_harmony', hasVisual: false,
    question: 'ドイツの化学者オストワルト（W. Ostwald）の表色系と色彩調和論に関する記述として、正しいものはどれか。',
    options: [
      { text: 'すべての色を「白色量（W）＋ 黒色量（B）＋ 純色量（C）＝ 100%」の混色比で表し、等価値色環（白色量と黒色量が等しい色同士など）は調和すると説いた。' },
      { text: '色立体を非対称の樹木の形（カラーツリー）で表し、最高彩度を色相ごとに変えた。' },
      { text: '人間の心理四原色ではなく、CMYKインキの網点面積率だけを基に調和論を作った。' },
      { text: '第1曖昧領域と第2曖昧領域という不調和領域を提唱した。' }
    ],
    answer: 0,
    explanation: '<strong>オストワルト表色系</strong>は、理想的な色表面において<strong>「W（白色量）＋ B（黒色量）＋ C（純色量）＝ 100%」</strong>が成り立つとし、正三角形の等色相面と二重円錐の色立体を作りました。「秩序の原理（等白色系列・等黒色系列・等純色系列＝シャドウ系列・等価値色環）」による調和論の代表です。'
  },
  {
    id: 's2_35', stage: 2, freq: '頻出', category: 'ch3_harmony', hasVisual: false,
    question: 'ムーン（P. Moon）とスペンサー（D.E. Spencer）の色彩調和論において、「調和する領域」と「不調和になる領域」の分類として正しいものはどれか。',
    options: [
      { text: '調和領域は「同一・類似・対比」の3つであり、その間にある中途半端な差の領域を「第1曖昧・第2曖昧（不調和）」とした。' },
      { text: 'すべての色相差は調和し、不調和になる領域は存在しないとした。' },
      { text: '補色対比（コントラスト）を最も不調和な領域と定義した。' },
      { text: '黄に近い色を暗くするコンプレックスハーモニーだけを唯一の調和と定義した。' }
    ],
    answer: 0,
    explanation: '<strong>ムーン＆スペンサー</strong>は、オメガ空間上で2色の関係を幾何学的に分類し、<strong>調和＝「同一・類似・対比」</strong>、<strong>不調和＝「第1曖昧（同一と類似の間）・第2曖昧（類似と対比の間）・眩輝（グレア）」</strong>と定義しました。'
  },
  {
    id: 's2_36', stage: 2, freq: '頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'アイボリー', codes: ['#EDE8D5|アイボリー'] },
      { label: 'エクルベイジュ', codes: ['#F3E5CE|エクルベイジュ'] },
      { label: 'チャコールグレイ', codes: ['#4B484C|チャコールグレイ'] }
    ],
    question: '白〜ベージュ・灰色系の外来色名に関する記述として、正しいものはどれか。',
    options: [
      { text: 'アイボリーは象牙に由来する「うすい黄みの灰色」、エクルベイジュは未晒し（生成り）の麻や絹を意味する「うすい黄赤」、チャコールグレイは木炭を意味する「暗い灰色」である。' },
      { text: 'アイボリーは木炭に由来する黒色、チャコールグレイは象牙に由来する白色である。' },
      { text: 'エクルベイジュは「ごく暗い青緑」であり、軍服に使われる色である。' },
      { text: 'オフホワイトはマンセル明度1.5の漆黒を指す。' }
    ],
    answer: 0,
    explanation: 'ファッションやインテリアでも頻出の3色です：<br>・<strong>アイボリー（象牙）</strong>：うすい黄みの灰色<br>・<strong>エクルベイジュ（生成り）</strong>：うすい黄赤<br>・<strong>チャコールグレイ（木炭）</strong>：暗い灰色（わずかに紫み）'
  }
];

const QUESTIONS_PART2 = [
  // =========================================================================
  // 🟠 STAGE 3：実戦応用レベル（32問：s3_01 〜 s3_32）
  // =========================================================================
  {
    id: 's3_01', stage: 3, freq: '毎年頻出・計算', category: 'ch2_light', hasVisual: false,
    question: '【照度計算・逆二乗の法則】ある点光源から直下 1m の位置にある机面の照度が「1,600 lx（ルクス）」であった。光源からの距離を 2m に遠ざけたとき、机面の照度は何 lx になるか。',
    options: [
      { text: '400 lx（距離が2倍になると照度は 1/4 になる）' },
      { text: '800 lx（距離が2倍になると照度は 1/2 になる）' },
      { text: '200 lx（距離が2倍になると照度は 1/8 になる）' },
      { text: '3,200 lx（距離が2倍になると照度は 2倍 になる）' }
    ],
    answer: 0,
    explanation: '2級の照明分野で毎年のように出題される<strong>「距離の逆二乗の法則」</strong>です！<br>照度 $E\\text{ (lx)}$ は光源からの距離 $r\\text{ (m)}$ の<strong>2乗に反比例</strong>します（$E = I / r^2$）。<br>・距離が2倍（$1\\text{m} \\rightarrow 2\\text{m}$）になると、照度は $1 / 2^2 = 1/4$ となるため、$1600 \\div 4 = \\mathbf{400\\text{ lx}}$ です。<br>・もし距離が3倍になれば $1/9$、距離が半分（$1/2$）になれば照度は $4$倍になります。'
  },
  {
    id: 's3_02', stage: 3, freq: '毎年頻出・計算', category: 'ch2_light', hasVisual: false,
    question: '【光度と照度の計算】光度 $I = 900\\text{ cd（カンデラ）}$ の点光源がある。この光源から直下 $3\\text{ m}$ 離れた床面（光に対して垂直な面）の照度 $E$ は何 $\\text{lx（ルクス）}$ か。',
    options: [
      { text: '100 lx（900 ÷ 3² ＝ 100）' },
      { text: '300 lx（900 ÷ 3 ＝ 300）' },
      { text: '2,700 lx（900 × 3 ＝ 2,700）' },
      { text: '8,100 lx（900 × 3² ＝ 8,100）' }
    ],
    answer: 0,
    explanation: '公式 <strong>$\\text{照度 } E\\text{ [lx]} = \\text{光度 } I\\text{ [cd]} \\div (\\text{距離 } r\\text{ [m]})^2$</strong> に代入します。<br>$E = 900 \\div 3^2 = 900 \\div 9 = \\mathbf{100\\text{ lx}}$ となります。距離の「2乗」で割ることを忘れないようにしましょう！'
  },
  {
    id: 's3_03', stage: 3, freq: '毎年頻出', category: 'ch2_light', hasVisual: true,
    spectralCurve: 'green',
    question: '上の「分光反射率曲線」のように、中波長（500〜560nm付近）に山型のピークを持ち、短波長（青）と長波長（赤）の両端を吸収している物体の色と、対応する2級JIS慣用色名の組み合わせとして最も適切なものはどれか。',
    options: [
      { text: '緑系 ── 常盤色（ときわいろ） / ビリジアン', swatches: ['#007B43|常盤色', '#007B66|ビリジアン'] },
      { text: '赤系 ── 韓紅花（からくれない） / ポピーレッド', swatches: ['#E9003F|韓紅花', '#EA352D|ポピーレッド'] },
      { text: '黄系 ── 鬱金色（うこんいろ） / ネープルスイエロー', swatches: ['#EFB80B|鬱金色', '#F9DB6D|ネープルス'] },
      { text: '青紫系 ── 江戸紫 / ウルトラマリン', swatches: ['#65318E|江戸紫', '#2743A5|ウルトラマリン'] }
    ],
    answer: 0,
    explanation: '500〜560nmの中波長域に山型のピークを持つ曲線は<strong>緑（Green）系</strong>の物体色です。2級ではこのように「分光反射率曲線」と「慣用色名やPCCS色相」を結びつける複合問題が頻出します。'
  },
  {
    id: 's3_04', stage: 3, freq: '毎年頻出', category: 'ch2_light', hasVisual: true,
    spectralCurve: 'white_gray_black',
    question: '上の「分光反射率曲線」のように、可視光線の全波長域（380〜780nm）にわたって反射率がほぼ一定（フラット）である3本のグラフ（上・中・下）が表す色の組み合わせはどれか。',
    options: [
      { text: '無彩色（上が「白」、中が「灰色」、下が「黒」）', swatches: ['W', 'mGy', 'Bk'] },
      { text: '光の三原色（上が「赤」、中が「緑」、下が「青」）', swatches: ['v2', 'v12', 'v18'] },
      { text: '色料の三原色（上が「イエロー」、中が「マゼンタ」、下が「シアン」）', swatches: ['v8', 'v24', 'v16'] },
      { text: '純色の明度順（上が「黄」、中が「赤」、下が「青紫」）', swatches: ['v8', 'v2', 'v20'] }
    ],
    answer: 0,
    explanation: '特定の波長を偏って反射せず、全波長を一様に反射する物体は<strong>無彩色（白・灰色・黒）</strong>になります。全体の反射率が80〜90%と高い直線が<strong>白（W）</strong>、中程度の直線が<strong>灰色（Gy）</strong>、数%と低い直線が<strong>黒（Bk）</strong>です。'
  },
  {
    id: 's3_05', stage: 3, freq: '毎年頻出・実技', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: 'ベース色：lt10（黄緑）', codes: ['lt10'] }],
    question: '【本試験型・配色カード判定】ベース色を「lt10（浅い黄緑）」としたとき、次の2つの条件をどちらも満たす配色カードを1つ選びなさい。<br>・条件1：色相が「12:G（緑）」である<br>・条件2：ベース色（lt10）との組み合わせが「ナチュラルハーモニー」になる',
    options: [
      { text: 'd12（くすんだ緑）', swatches: ['lt10', 'd12'] },
      { text: 'p12（薄い緑）', swatches: ['lt10', 'p12'] },
      { text: 'lt8（浅い黄）', swatches: ['lt10', 'lt8'] },
      { text: 'b10（明るい黄緑）', swatches: ['lt10', 'b10'] }
    ],
    answer: 0,
    explanation: '本試験の大問3で必ず出る2段階推論問題です！<br>1. <code>10:YG（黄緑）</code>と<code>12:G（緑）</code>を比較すると、8:Y（黄）に近いのは<strong>10:YG</strong>、20:V（青紫）に近いのは<strong>12:G</strong>です。<br>2. ナチュラルハーモニーにするには、12:Gの方を<code>lt10</code>よりも<strong>低明度（暗いトーン）</strong>にする必要があります。<br>3. 色相が12番で、かつ<code>lt</code>より低明度なのは<strong><code>d12</code></strong>です（<code>p12</code>はltより高明度なのでコンプレックスハーモニーになります）。'
  },
  {
    id: 's3_06', stage: 3, freq: '毎年頻出・実技', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: '第1色：dp4（赤みの橙） / 第2色：dp12（緑）', codes: ['dp4', 'dp12'] }],
    question: '【本試験型・配色カード判定】「dp4」と「dp12」に第3色を加えて「トーンイントーン（ドミナントトーン）」かつ「トライアド（3色配色）」を完成させたい。第3色として正しいものはどれか。',
    options: [
      { text: 'dp20（濃い青紫）', swatches: ['dp4', 'dp12', 'dp20'] },
      { text: 'v20（冴えた青紫）', swatches: ['dp4', 'dp12', 'v20'] },
      { text: 'dp16（濃い緑みの青）', swatches: ['dp4', 'dp12', 'dp16'] },
      { text: 'lt20（浅い青紫）', swatches: ['dp4', 'dp12', 'lt20'] }
    ],
    answer: 0,
    explanation: '1. <strong>トライアド</strong>は24色相環を8色相間隔で3等分するため、<code>4 → 12 → 20</code> より色相番号は<strong>20</strong>です。<br>2. さらに<strong>トーンイントーン（同一・類似トーン）</strong>の条件から、<code>dp4</code>・<code>dp12</code>と同じ<code>dp</code>トーンを選ぶため、正解は<strong><code>dp20</code></strong>です。'
  },
  {
    id: 's3_07', stage: 3, freq: '毎年頻出・実技', category: 'ch3_harmony', hasVisual: true,
    question: '【本試験型・配色カード判定】PCCSの6色配色「ヘクサード」の構成方法として正しい2パターンの組み合わせはどれか。',
    options: [
      { text: 'パターンA：24色相環で色相差4の6色を選ぶ ／ パターンB：テトラード（色相差6の4色）に白（W）と黒（Bk）を加える', swatches: ['v2', 'v8', 'v14', 'v20', 'W', 'Bk'] },
      { text: 'パターンA：色相差3の8色を選ぶ ／ パターンB：ダイアードの2色に灰色を4色加える' },
      { text: 'パターンA：隣接する6色相を順番に並べる ／ パターンB：トライアドに純色を3色ランダムに足す' },
      { text: 'パターンA：無彩色だけで6段階並べる ／ パターンB：同一色相で6トーン並べる' }
    ],
    answer: 0,
    explanation: '2級の多色配色（ペンタード・ヘクサード）の定義は頻出です：<br>・<strong>ペンタード（5色）</strong>：①色相環をほぼ5等分する5色、または ②<strong>トライアド（3色）＋ W ＋ Bk</strong><br>・<strong>ヘクサード（6色）</strong>：①24色相環を6等分（<strong>色相差4</strong>）する6色、または ②<strong>テトラード（4色）＋ W ＋ Bk</strong>'
  },
  {
    id: 's3_08', stage: 3, freq: '毎年頻出', category: 'ch1_system', hasVisual: false,
    question: 'マンセル表色系における「色相環の配置」と「PCCS色相環の配置」の根本的な違いに関する記述として、最も適切なものはどれか。',
    options: [
      { text: 'マンセルは回転混色（継時加法混色）したときに無彩色（N）になる「物理補色（混色補色）」が向かい合うように配置されているが、PCCSは残像現象に基づく「心理補色」が向かい合うように配置されている。' },
      { text: 'マンセルは心理四原色（赤・黄・緑・青）を90度間隔で配置しているが、PCCSは5原色を72度間隔で配置している。' },
      { text: 'マンセルもPCCSも色相数はまったく同じ24色相である。' },
      { text: 'マンセルでは5Rの補色は5Gであり、PCCSでは2:Rの補色は12:Gである。' }
    ],
    answer: 0,
    explanation: '表色系の超重要比較ポイントです！<br>・<strong>マンセル表色系</strong>：基本5色相（R, Y, G, B, P）を等間隔に置き、向かい合う色同士を回転混色すると灰色（無彩色）になる<strong>混色補色</strong>に近い配置（例：<code>5R ⇔ 5BG</code>、<code>5Y ⇔ 5PB</code>）<br>・<strong>PCCS</strong>：心理四原色（2:R, 8:Y, 12:G, 18:B）を基準に、向かい合う色が<strong>心理補色（残像補色）</strong>になるよう24色相を配置（例：<code>2:R ⇔ 14:BG</code>、<code>8:Y ⇔ 20:V</code>）'
  },
  {
    id: 's3_09', stage: 3, freq: '頻出', category: 'ch2_light', hasVisual: false,
    question: '人工光源のうち、高輝度放電灯「HIDランプ」に分類される3つのランプの組み合わせとして正しいものはどれか。',
    options: [
      { text: '高圧水銀ランプ ・ メタルハライドランプ ・ 高圧ナトリウムランプ' },
      { text: '白熱電球 ・ ハロゲン電球 ・ クリプトン電球' },
      { text: '昼光色蛍光ランプ ・ 温白色蛍光ランプ ・ 3波長形蛍光ランプ' },
      { text: '白色LEDランプ ・ 有機EL（OLED） ・ キセノン電球' }
    ],
    answer: 0,
    explanation: 'スタジアム、道路・トンネル、商業施設の吹き抜け天井などで使われる<strong>HIDランプ（高輝度放電灯）</strong>の代表3種は：<br>1. <strong>高圧水銀ランプ</strong><br>2. <strong>メタルハライドランプ</strong>（HIDの中で最も演色性が高く白色に近い）<br>3. <strong>高圧ナトリウムランプ</strong>（オレンジ色がかった光で発光効率が高い）です。'
  },
  {
    id: 's3_10', stage: 3, freq: '毎年頻出', category: 'ch5_perception', hasVisual: false,
    question: '光の強さ（輝度）を変化させたとき、同じ波長（単色光）であっても色の見え方（色相）が変化して知覚される現象を何というか。また、単色光に白色光を加えて彩度（純度）を下げたときに色相が変化して見える現象を何というか。',
    options: [
      { text: '輝度による変化：ベゾルト・ブリュッケ現象 ── 白色光添加による変化：アブニー効果' },
      { text: '輝度による変化：プルキンエ現象 ── 白色光添加による変化：リープマン効果' },
      { text: '輝度による変化：マッハバンド ── 白色光添加による変化：ハーマングリッド現象' },
      { text: '輝度による変化：ベンハム効果 ── 白色光添加による変化：メタメリズム' }
    ],
    answer: 0,
    explanation: '第5章の紛らわしい知覚現象3つの整理です：<br>・<strong>プルキンエ現象</strong>：明所視から暗所視へ移るとき、赤が暗く青が明るく見える（<strong>明度</strong>の逆転）<br>・<strong>ベゾルト・ブリュッケ現象</strong>：光の強さ（<strong>輝度</strong>）が変わると、同じ波長でも<strong>色相</strong>が変わって見える（強い光では黄と青みが強まる）<br>・<strong>アブニー効果</strong>：単色光に<strong>白色光</strong>を混ぜて純度（彩度）を変えると、<strong>色相</strong>が変化して見える'
  },
  {
    id: 's3_11', stage: 3, freq: '頻出', category: 'ch5_perception', hasVisual: false,
    question: '黒の背景に白い格子線を描いたとき交差点に灰色の影が見える「ハーマングリッド現象」に対し、黒い格子線の交差点部分だけを一部の色（例：赤やシアン）に変えると、その色が周囲の透明な円盤のように広がって発光して見える主観的輪郭・混色現象を何というか。',
    options: [
      { text: 'ネオンカラー現象（ネオン色拡散）' },
      { text: '水彩効果（ウォーターカラーイリュージョン）' },
      { text: 'マッカロー効果' },
      { text: 'ランドの2色投影実験' }
    ],
    answer: 0,
    explanation: '格子線の一部を別の色に変えた際、その色が主観的輪郭の内部にネオン管の光のように淡くにじみ出て見える錯視を<strong>ネオンカラー現象</strong>といいます。なお、2重の波線（外側が濃い色、内側が明るい色）で囲まれた内側全体が薄く色づいて見える現象は<strong>水彩効果</strong>です。'
  },
  {
    id: 's3_12', stage: 3, freq: '毎年頻出', category: 'ch6_visual', hasVisual: false,
    question: 'CIE（国際照明委員会）が1976年に制定した、知覚的に均等な色空間「CIE 1976 L*a*b* 表色系（CIELAB）」における $L^*$, $a^*$, $b^*$ の各座標軸が表す意味として正しいものはどれか。',
    options: [
      { text: 'L* は明度（0〜100）、+a* は赤方向、-a* は緑方向、+b* は黄方向、-b* は青方向を表す。' },
      { text: 'L* は彩度、+a* は白方向、-a* は黒方向、+b* は紫方向、-b* は橙方向を表す。' },
      { text: 'L* は色温度、a* は演色評価数、b* は分光反射率を表す。' },
      { text: 'L* はシアン、a* はマゼンタ、b* はイエローのインキ量を表す。' }
    ],
    answer: 0,
    explanation: 'カラーマネジメントや工業製品の色彩管理で必須の<strong>CIELAB（エル・スター・エイ・スター・ビー・スター）表色系</strong>では：<br>・<strong>$L^*$（明度指数）</strong>：0（黒）〜100（白）<br>・<strong>$a^*$軸</strong>：<strong>$+a^*$が赤方向</strong>、<strong>$-a^*$が緑方向</strong><br>・<strong>$b^*$軸</strong>：<strong>$+b^*$が黄方向</strong>、<strong>$-b^*$が青方向</strong>（心理四原色の対立色応答に対応）を表します。'
  },
  {
    id: 's3_13', stage: 3, freq: '毎年頻出・実務', category: 'ch78_design', hasVisual: false,
    question: '【景観基準のマンセル値判定】ある自治体の景観計画において、商業地域の建築物外壁（基調色）の基準が次のように定められている。<br>『色相が YR（黄赤）系の場合は、明度 6以上 8.5以下、かつ彩度 4以下 とする』<br>次の4つのマンセル値のうち、この基準に【適合しているもの】はどれか。',
    options: [
      { text: '10YR 7/3' },
      { text: '5YR 5/3' },
      { text: '10YR 7.5/6' },
      { text: '2.5YR 9/2' }
    ],
    answer: 0,
    explanation: '本試験の第8章（景観色彩）で毎年出題される<strong>マンセル規制値の適合判定問題</strong>です！<br>マンセル表記「H V/C（色相 明度/彩度）」に当てはめて確認します：<br>・<code>10YR 7/3</code>：明度 $V=7$（6〜8.5の範囲内⭕）、彩度 $C=3$（4以下⭕）→ <strong>適合！</strong><br>・<code>5YR 5/3</code>：明度 $V=5$ が6未満で不適合❌<br>・<code>10YR 7.5/6</code>：彩度 $C=6$ が4を超えており不適合❌<br>・<code>2.5YR 9/2</code>：明度 $V=9$ が8.5を超えており不適合❌'
  },
  {
    id: 's3_14', stage: 3, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: '住宅の「エクステリア（外観・外構）」の色彩計画に関する記述として、最も適切なものを1つ選びなさい。',
    options: [
      { text: '屋根の色は外壁よりも低明度（暗い色）にすると建物全体に安定感が生まれ、また外壁材は太陽光（自然昼光）の下で見ると面積効果も加わって色見本より明るく見えるため注意する。' },
      { text: '屋根を純白（高明度）にし、1階外壁を漆黒（低明度）にすると最も重心が下がり安定して見える。' },
      { text: '玄関アプローチの床タイルには、雨の日に滑りやすくまぶしい鏡面光沢（グロス）仕上げの高彩度色を選ぶのが安全上最も望ましい。' },
      { text: '門扉やフェンスなどの外構は、植栽の緑とハレーションを起こす高彩度の赤紫（v24）に統一するのが原則である。' }
    ],
    answer: 0,
    explanation: 'エクステリアでは、<strong>屋根を外壁より低明度</strong>にすることで視覚的な重心が安定します（上重心を防ぐ）。また屋外は晴天時に数万〜10万lxという非常に強い太陽光の下で見るため、室内で見た小さな色見本よりも<strong>大幅に高明度・高彩度に見える</strong>点に配慮が必要です。'
  },
  {
    id: 's3_15', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: '蘇芳（すおう）', codes: ['#9E3D4B|蘇芳'] },
      { label: '弁柄色（べんがらいろ）', codes: ['#8F3527|弁柄色'] },
      { label: '代赭（たいしゃ）', codes: ['#B35C37|代赭'] },
      { label: '桧皮色（ひわだいろ）', codes: ['#7B4B3A|桧皮色'] }
    ],
    question: '赤〜黄赤（茶）系の2級和色名について、「由来（原料）」と「系統色名」の組み合わせとして正しいものはどれか。',
    options: [
      { text: '弁柄色（べんがらいろ）はインドのベンガル地方に由来する酸化鉄顔料の色で「暗い黄みの赤」、蘇芳（すおう）はマメ科の植物染料に由来する「くすんだ赤」である。' },
      { text: '代赭（たいしゃ）はヒノキの樹皮に由来する「あざやかな青緑」である。' },
      { text: '桧皮色（ひわだいろ）はウコンの根に由来する「つよい黄」である。' },
      { text: '蘇芳（すおう）は銅の錆に由来する「くすんだ緑」である。' }
    ],
    answer: 0,
    explanation: '混同しやすい赤茶系の和色名4つを整理しましょう：<br>・<strong>蘇芳（すおう）</strong>：マメ科植物の心材 → <strong>くすんだ赤</strong><br>・<strong>弁柄色（べんがらいろ）</strong>：ベンガル地方・酸化第二鉄 → <strong>暗い黄みの赤</strong><br>・<strong>代赭（たいしゃ）</strong>：中国代州の赤土（代赭石） → <strong>くすんだ黄赤</strong><br>・<strong>桧皮色（ひわだいろ）</strong>：ヒノキの樹皮 → <strong>暗い灰みの黄赤</strong>'
  },
  {
    id: 's3_16', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: '刈安色（かりやすいろ）', codes: ['#E9DC6E|刈安色'] },
      { label: '黄蘗色（きはだいろ）', codes: ['#F3E13B|黄蘗色'] },
      { label: '鬱金色（うこんいろ）', codes: ['#EFB80B|鬱金色'] },
      { label: '海松色（みるいろ）', codes: ['#5B6241|海松色'] }
    ],
    question: '黄〜黄緑系の2級和色名に関する記述として【誤っているもの】を1つ選びなさい。',
    options: [
      { text: '海松色（みるいろ）は松の木の葉に由来する「あざやかな緑」である。' },
      { text: '鬱金色（うこんいろ）はカレー粉にも使われるショウガ科ウコンの根茎で染めた「つよい赤みの黄」である。' },
      { text: '黄蘗色（きはだいろ）はミカン科キハダの内皮で染めた「明るい緑みの黄」であり、防虫効果があるため公文書や経典の紙にも使われた。' },
      { text: '刈安色（かりやすいろ）はイネ科のススキに似たカリヤスで染めた「うすい緑みの黄」である。' }
    ],
    answer: 0,
    explanation: '<strong>海松色（みるいろ）</strong>は、松の木ではなく浅海の緑藻<strong>「ミル（海松）」</strong>に由来する「暗い灰みの黄緑（オリーブグリーン系：dkg10）」です。常緑樹の松や杉の葉に由来する「こい緑」は<strong>常盤色（ときわいろ）</strong>です！'
  },
  {
    id: 's3_17', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: '甕覗（かめのぞき）', codes: ['#A2D7DD|甕覗'] },
      { label: '新橋色（しんばしいろ）', codes: ['#59B9C6|新橋色'] },
      { label: '納戸色（なんどいろ）', codes: ['#007B93|納戸色'] },
      { label: '鉄色（てついろ）', codes: ['#1B3B36|鉄色'] }
    ],
    question: '藍染めに関連する青緑〜緑みの青系の和色名を、明度が高い（淡い）ものから低い（暗い）ものへ順番に並べたとき、正しいものはどれか。',
    options: [
      { text: '甕覗（やわらかい緑みの青） → 新橋色（明るい緑みの青） → 納戸色（つよい緑みの青） → 鉄色（ごく暗い青緑）' },
      { text: '鉄色 → 納戸色 → 新橋色 → 甕覗' },
      { text: '納戸色 → 甕覗 → 鉄色 → 新橋色' },
      { text: '新橋色 → 鉄色 → 甕覗 → 納戸色' }
    ],
    answer: 0,
    explanation: '藍甕（あいがめ）をちょっと覗いたくらいの極淡い水色が<strong>甕覗（p16）</strong>、明るい青緑が<strong>新橋色（b16）</strong>、強い緑みの青が<strong>納戸色（s16）</strong>、黒に近いごく暗い青緑が<strong>鉄色（dkg14）</strong>です。明度順で覚えると一発で整理できます！'
  },
  {
    id: 's3_18', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'ミントグリーン', codes: ['#88CB9E|ミント'] },
      { label: 'エメラルドグリーン', codes: ['#00A968|エメラルド'] },
      { label: 'ビリジアン', codes: ['#007B66|ビリジアン'] },
      { label: 'オリーブドラブ', codes: ['#686A4E|オリーブドラブ'] }
    ],
    question: '緑〜青緑系の外来色名とJIS系統色名の組み合わせとして、正しいものはどれか。',
    options: [
      { text: 'ミントグリーン：明るい緑 ／ エメラルドグリーン：つよい緑 ／ ビリジアン：くすんだ青みの緑 ／ オリーブドラブ：暗い灰みの黄緑' },
      { text: 'ミントグリーン：ごく暗い青緑 ／ ビリジアン：うすい黄緑' },
      { text: 'エメラルドグリーン：暗い灰みの黄緑 ／ オリーブドラブ：あざやかな青緑' },
      { text: 'ビリジアン：明るい紫みの赤 ／ ミントグリーン：こい青紫' }
    ],
    answer: 0,
    explanation: '緑系の外来色名4色の系統色名は本試験の穴埋め・選択で頻出です：<br>・<strong>ミントグリーン</strong>：明るい緑（lt12）<br>・<strong>エメラルドグリーン</strong>：つよい緑（b13）<br>・<strong>ビリジアン</strong>：くすんだ青みの緑（dp13〜d13）<br>・<strong>オリーブドラブ</strong>：暗い灰みの黄緑（g9〜dkg10）'
  },
  {
    id: 's3_19', stage: 3, freq: '毎年頻出・実技', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [
      { label: '配色ア', codes: ['v4', 'v16'] },
      { label: '配色イ', codes: ['lt6', 'd8'] },
      { label: '配色ウ', codes: ['sf14', 'sf16'] },
      { label: '配色エ', codes: ['p20', 'dk20'] }
    ],
    question: '上の4つの配色（ア〜エ）と配色技法の名称の組み合わせとして、すべて正しいものはどれか。',
    options: [
      { text: 'ア：ダイアード（補色配色） ／ イ：コンプレックスハーモニー ／ ウ：フォカマイユ ／ エ：トーンオントーン' },
      { text: 'ア：カマイユ ／ イ：ナチュラルハーモニー ／ ウ：ビコロール ／ エ：トーンイントーン' },
      { text: 'ア：トライアド ／ イ：ナチュラルハーモニー ／ ウ：トーナル ／ エ：セパレーション' },
      { text: 'ア：ダイアード ／ イ：ナチュラルハーモニー ／ ウ：カマイユ ／ エ：トリコロール' }
    ],
    answer: 0,
    explanation: '1つずつ検証しましょう：<br>・<strong>ア（v4とv16）</strong>：色相差 16 - 4 ＝ 12（補色）かつ高彩度2色 → <strong>ダイアード（またはビコロール）</strong><br>・<strong>イ（lt6とd8）</strong>：8:Y（黄）の方が自然明度が高いのに暗い<code>d8</code>、6:yOを明るい<code>lt6</code>に逆転させている → <strong>コンプレックスハーモニー</strong><br>・<strong>ウ（sf14とsf16）</strong>：色相差2の類似色相＋同一トーン → <strong>フォカマイユ</strong><br>・<strong>エ（p20とdk20）</strong>：同一色相（20:V）で高明度pと低明度dkの濃淡対比 → <strong>トーンオントーン</strong>'
  },
  {
    id: 's3_20', stage: 3, freq: '頻出', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [{ label: 'リズムを生む繰り返し配色', codes: ['v2', 'W', 'v18', 'v2', 'W', 'v18'] }],
    question: '多色配色において、少数の色（2〜3色）を一定の順序・規則で繰り返すことでリズム感や統一感を生み出す配色手法を何というか。',
    options: [
      { text: 'レピティション（repetition：繰り返し）' },
      { text: 'グラデーション（gradation：段階的変化）' },
      { text: 'セパレーション（separation：分離）' },
      { text: 'ドミナントカラー（dominant color：色相支配）' }
    ],
    answer: 0,
    explanation: '配色に規則的な周期（繰り返し）を持たせてリズム感を生む手法を<strong>レピティション（repetition）</strong>といいます。ストライプ柄やガーランド、WebのカードUIデザインなどでもよく使われます。'
  },
  {
    id: 's3_21', stage: 3, freq: '頻出', category: 'ch4_image', hasVisual: true,
    promptSwatches: [
      { label: '配色1（アースカラー・テラコッタ・黄土系）', codes: ['d4', 'dk6', 'dp8', 'dkg12'] },
      { label: '配色2（中低明度・グレイッシュ・無彩色混じり）', codes: ['g18', 'dkg20', 'dkGy', 'ltg16'] }
    ],
    question: '上の配色1と配色2が表すファッション・インテリアのカラーイメージ語として、最も適切な組み合わせはどれか。',
    options: [
      { text: '配色1：エスニック（民族的・民俗調） ── 配色2：シック（渋い・粋な・洗練された）' },
      { text: '配色1：クリア（澄んだ） ── 配色2：プリティ（かわいい）' },
      { text: '配色1：ロマンチック ── 配色2：スポーティ' },
      { text: '配色1：モダン ── 配色2：カジュアル' }
    ],
    answer: 0,
    explanation: '・<strong>エスニック</strong>：土や植物染料を思わせる暖色系の<code>d, dp, dk, g</code>トーンに強いアクセントを加えた民俗調のイメージ<br>・<strong>シック（chic）</strong>：グレイッシュトーン（<code>g, dkg, ltg</code>）や無彩色を用いた、落ち着いて洗練された大人っぽいイメージ'
  },
  {
    id: 's3_22', stage: 3, freq: '頻出', category: 'ch5_perception', hasVisual: false,
    question: '色の心理的効果において、実際の時間よりも長く感じさせたり短く感じさせたりする「時間経過の錯覚」や、「重さの錯覚（明度と重量感）」に関する記述として正しいものはどれか。',
    options: [
      { text: '重量感には「明度」が最も大きく影響し、高明度（白やパステル）の箱は軽く見え、低明度（黒や濃紺）の箱は約1.8倍近く重く感じられる。' },
      { text: '重量感には色相だけが影響し、白よりも黄色の方が常に3倍重く見える。' },
      { text: '暖色系の囲まれた空間では時間が実際より短く感じられ、寒色系の空間では時間が長く感じられるのが一般的である。' },
      { text: '工場の段ボール箱を黒色にすると作業員が軽く感じて腰痛が減る。' }
    ],
    answer: 0,
    explanation: '色の<strong>軽重感（重さの感覚）</strong>には<strong>明度</strong>が支配的に働き、暗い色（低明度）は重い色（重量色）、明るい色（高明度）は軽い色（軽量色）と感じられます。そのため引越しや物流の段ボールには白や明るいベージュ・水色を使うと作業負担感が軽減されます。'
  },
  {
    id: 's3_23', stage: 3, freq: '頻出', category: 'ch6_visual', hasVisual: false,
    question: 'カラーマネジメントにおいて、ある色空間（例：Adobe RGB）から、それより狭い色空間（例：CMYK印刷）へ色を変換する際、色域（ガモット）の外にはみ出した色をどのように圧縮・置き換えるかの変換方式を何というか。',
    options: [
      { text: 'レンダリング・インテント（知覚的・相対的な色域を維持・彩度優先・絶対的など）' },
      { text: 'メタメリズム変換' },
      { text: 'ハーフトーン・スクリーニング' },
      { text: 'プルキンエ・シフト' }
    ],
    answer: 0,
    explanation: 'ICCプロファイルを用いて異なるガモット間で色空間変換を行う際のマッピング方式を<strong>レンダリング・インテント（Rendering Intent）</strong>といいます。写真向きの「知覚的（Perceptual）」、ロゴやグラフ向きの「彩度（Saturation）」、校正向きの「相対的な色域を維持」「絶対的な色域を維持」の4種類があります。'
  },
  {
    id: 's3_24', stage: 3, freq: '頻出', category: 'ch6_visual', hasVisual: false,
    question: 'Webデザインやデジタルサイネージ・パッケージデザインにおける色彩設計の留意点として、最も適切なものはどれか。',
    options: [
      { text: '長文のテキストを読ませる画面では、背景と文字の明度差を十分に確保して「可読性」を高め、背景の彩度を抑えることで目の疲労（ハレーション）を防ぐ。' },
      { text: '食品パッケージでは、中身がどんな食品であっても常に青紫（20:V）を基調色にすると最も食欲が増進する。' },
      { text: '道路標識の案内文字は、一瞬で判読できなくてもデザイン性を優先して等明度のカマイユ配色にするべきである。' },
      { text: '誘目性と視認性は全く同じ意味であり、暗い背景の上では黒色が最も視認性が高い。' }
    ],
    answer: 0,
    explanation: '文字の読みやすさである<strong>可読性（リーダビリティ）</strong>を高めるには、文字と背景の<strong>明度差</strong>を大きくとり、背景に高彩度色を避けて視覚疲労を防ぐことが重要です。'
  },
  {
    id: 's3_25', stage: 3, freq: '毎年頻出', category: 'ch78_design', hasVisual: false,
    question: 'オフィスや病院・学校・商業施設などの「機能的インテリア空間」における色彩・照明計画として、最も適切なものはどれか。',
    options: [
      { text: '外科手術室では、医師が赤い血液を長時間見続けた後に白い壁やガーゼを見ると青緑色の「補色残像」が生じて視認を妨げるため、壁や手術着にはあらかじめ赤の補色である「青緑（浅い青緑〜くすんだ青緑）」が用いられる。' },
      { text: '病院の病室では、患者の血圧と心拍数を高めるために壁全面をビビッドレッド（v2）で塗装する。' },
      { text: '精密作業を行う工場では、危険標識と同じ高彩度の黄色と黒のストライプで床と作業台全面を塗装し、常に緊張感を与える。' },
      { text: 'オフィスのデスク天板は、照明光を100%鏡面反射する純白のガラス面にするのがグレア防止に最も有効である。' }
    ],
    answer: 0,
    explanation: '手術着や手術室の壁が<strong>青緑（ペール〜ダルトーンのBG）</strong>である理由は、赤い血液を凝視した後の<strong>継時対比（負の残像＝補色残像）</strong>を打ち消して目の疲労を防ぐためであり、2級・3級を通じて超頻出の事例です。またオフィスのデスク天板はグレア（まぶしさ）を防ぐため、反射率30〜50%程度（中〜高明度・低彩度、艶消し）が推奨されます。'
  },
  {
    id: 's3_26', stage: 3, freq: '頻出', category: 'ch78_design', hasVisual: false,
    question: 'ファッションの色彩計画における「定番色（ベーシックカラー）」と「流行色（トレンドカラー）」の役割に関する記述として、最も適切なものはどれか。',
    options: [
      { text: 'コートやスーツなどの高価格・長期着用アイテムには着回ししやすいベーシックカラー（黒・紺・グレー・ベージュ・茶など）が多く使われ、インナーや小物には季節感や新鮮さを出すトレンドカラーが取り入れられやすい。' },
      { text: 'ベーシックカラーは毎年インターカラーによって全く新しい高彩度色に入れ替えられる。' },
      { text: 'トレンドカラーは実シーズンの1週間前にJAFCAが単独で決定する。' },
      { text: 'アパレル商品企画では、すべてのアイテムをビビッドトーンの流行色のみで生産するのが原則である。' }
    ],
    answer: 0,
    explanation: 'ファッション商品企画（マーチャンダイジング）では、売上の土台となる<strong>ベーシックカラー（定番色：無彩色や紺・ベージュ・キャメル・カーキなど）</strong>と、店頭でのアイキャッチや時代の空気感を演出する<strong>トレンドカラー（流行色）</strong>をバランスよく組み合わせてカラーパレットを構成します。'
  },
  {
    id: 's3_27', stage: 3, freq: '毎年頻出', category: 'ch1_system', hasVisual: true,
    promptSwatches: [
      { label: 'v8 (黄)', codes: ['v8'] },
      { label: 'v2 (赤)', codes: ['v2'] },
      { label: 'v12 (緑)', codes: ['v12'] },
      { label: 'v20 (青紫)', codes: ['v20'] }
    ],
    question: 'PCCSの「vトーン（純色）」に属する各色相の「明度（PCCS明度）」について、明るい（高明度）ものから暗い（低明度）ものへ正しく並んでいるものはどれか。',
    options: [
      { text: 'v8（黄） ＞ v12（緑） ＞ v2（赤） ＞ v20（青紫）' },
      { text: 'v2（赤） ＞ v8（黄） ＞ v20（青紫） ＞ v12（緑）' },
      { text: 'v20（青紫） ＞ v12（緑） ＞ v2（赤） ＞ v8（黄）' },
      { text: 'v8 ＝ v12 ＝ v2 ＝ v20（すべて同じ明度5.5である）' }
    ],
    answer: 0,
    explanation: 'PCCSの純色（vトーン）は色相ごとに明度が大きく異なります：<br>・最高明度は <strong>8:Y（明度8.0）</strong><br>・中明度は <strong>12:G（明度5.5）</strong><br>・やや低明度は <strong>2:R（明度4.5）</strong><br>・最低明度は <strong>20:V（明度3.0）</strong><br>この純色の明度差があるからこそ、ナチュラルハーモニーの明度調整が必要になります。'
  },
  {
    id: 's3_28', stage: 3, freq: '頻出', category: 'ch2_light', hasVisual: false,
    question: '照明方式の分類において、光源からの光の90%以上を天井や壁に当てて反射光で部屋全体を照らす方式を何というか。また、その特徴はどれか。',
    options: [
      { text: '間接照明 ── 影が柔らかくグレア（まぶしさ）が少ない落ち着いた空間になるが、直接照明に比べて照明効率（同じ消費電力での机面照度）は低くなる。' },
      { text: '直接照明 ── 光がすべて天井に吸収されるため、グレアが全く生じない。' },
      { text: '全般拡散照明 ── 特定の1点だけを強いビーム光で照らすスポットライトのことである。' },
      { text: 'タスク・アンビエント照明 ── 部屋の照明をすべて消して自然光だけで作業する方式である。' }
    ],
    answer: 0,
    explanation: '建築・インテリア照明の配光分類です：<br>・<strong>直接照明</strong>：光の90%以上が直接下方へ向かう（効率は高いがグレアや強い影が出やすい）<br>・<strong>間接照明</strong>：光の90%以上を天井や壁に反射させる（<strong>グレアが少なく柔らかい雰囲気</strong>になるが、反射ロスがあるため照明効率は低い）<br>・<strong>タスク・アンビエント照明</strong>：部屋全体（アンビエント）は控えめな照度に抑え、作業机の上（タスク）だけをスタンド等で明るく照らす省エネで快適な方式'
  },
  {
    id: 's3_29', stage: 3, freq: '頻出', category: 'ch5_perception', hasVisual: false,
    question: '色の同化現象（フォン・ベゾルト効果）と対比現象の違いについて、正しい記述はどれか。',
    options: [
      { text: '囲まれた図の面積がある程度大きいときは周囲の色と反対方向へ変化して見える「同時対比」が起きやすいが、細い線や細かい網目模様が均一に並んでいるときは周囲の色に近づいて見える「同化現象」が起きやすい。' },
      { text: '線が太く面積が巨大になるほど同化現象が強く起きる。' },
      { text: 'みかんを赤いネットに入れると、同時対比によってみかんが青緑色に見えて美味しそうに見える。' },
      { text: '同化現象では明度同化は絶対に起こらず、色相同化しか起こらない。' }
    ],
    answer: 0,
    explanation: '細かい線やメッシュ柄では、隣り合う色同士が視覚的に歩み寄って見える<strong>同化現象（フォン・ベゾルト効果：明度同化・彩度同化・色相同化）</strong>が起こります。オレンジ色のみかんを赤いネットに入れると赤みが同化して完熟に見え、緑の枝豆を緑のネットに入れると緑みが同化して新鮮に見えるのは同化現象の代表応用例です。'
  },
  {
    id: 's3_30', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'バーガンディー', codes: ['#4E1E2B|バーガンディー'] },
      { label: 'マルーン', codes: ['#6A1D24|マルーン'] },
      { label: 'オールドローズ', codes: ['#C97586|オールドローズ'] },
      { label: 'ローズピンク', codes: ['#F19CA7|ローズピンク'] }
    ],
    question: '赤〜赤紫系の2級外来色名4色（バーガンディー・マルーン・オールドローズ・ローズピンク）のうち、フランスのブルゴーニュ地方産の赤ワインに由来し、JIS系統色名が「ごく暗い紫みの赤」であるものはどれか。',
    options: [
      { text: 'バーガンディー（Burgundy）' },
      { text: 'マルーン（Maroon）' },
      { text: 'オールドローズ（Old Rose）' },
      { text: 'ローズピンク（Rose Pink）' }
    ],
    answer: 0,
    explanation: 'ブルゴーニュ（英語名：<strong>Burgundy バーガンディー</strong>）の赤ワインに由来する「ごく暗い紫みの赤（dkg1）」です。一方、栗（マロン）に由来する「暗い赤（dk2）」が<strong>マルーン</strong>です（3級ではボルドー＝ごく暗い赤が登場するため、バーガンディーとセットで押さえましょう）。'
  },
  {
    id: 's3_31', stage: 3, freq: '毎年頻出', category: 'ch1_names', hasVisual: true,
    promptSwatches: [
      { label: 'バイオレット', codes: ['#633C9E|バイオレット'] },
      { label: 'ラベンダー', codes: ['#9D93B8|ラベンダー'] },
      { label: 'インディゴ', codes: ['#1E466E|インディゴ'] },
      { label: 'ターコイズブルー', codes: ['#009DCB|ターコイズ'] }
    ],
    question: '青〜紫系の2級外来色名とJIS系統色名の対応として【誤っているもの】を1つ選びなさい。',
    options: [
      { text: 'ラベンダー ── あざやかな赤紫（v24）' },
      { text: 'バイオレット ── あざやかな青紫（v20）' },
      { text: 'インディゴ ── 暗い青（dk17）' },
      { text: 'ターコイズブルー ── 明るい緑みの青（b16）' }
    ],
    answer: 0,
    explanation: '<strong>ラベンダー</strong>はハーブのラベンダーの花に由来する<strong>「灰みの青紫（ltg21）」</strong>です。「あざやかな赤紫（v24）」は<strong>マゼンタ</strong>です。'
  },
  {
    id: 's3_32', stage: 3, freq: '毎年頻出・実技', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [
      { label: '配色A（同一色相・トーン変化）', codes: ['p16', 'lt16', 'd16', 'dk16'] },
      { label: '配色B（同一トーン・色相変化）', codes: ['sf2', 'sf6', 'sf12', 'sf18'] }
    ],
    question: 'ドミナント配色（支配配色）の2種類について、上の「配色A」と「配色B」の正しい名称の組み合わせはどれか。',
    options: [
      { text: '配色A：ドミナントカラー（色相ドミナント） ── 配色B：ドミナントトーン（トーンイントーン）' },
      { text: '配色A：ドミナントトーン ── 配色B：ドミナントカラー' },
      { text: '配色A：トリコロール ── 配色B：ビコロール' },
      { text: '配色A：スプリットコンプリメンタリー ── 配色B：ダイアード' }
    ],
    answer: 0,
    explanation: '・<strong>配色A</strong>：すべて色相番号<code>16:gB</code>で統一（支配）しトーンを変化させているため、<strong>ドミナントカラー（色相ドミナント）</strong>です。<br>・<strong>配色B</strong>：すべて<code>sf（ソフト）</code>トーンで統一（支配）し色相を変化させているため、<strong>ドミナントトーン（トーンイントーン）</strong>です。'
  },

  // =========================================================================
  // 🔴 STAGE 4：発展・記述＆長文穴埋めステージ（25問：s4_01 〜 s4_25）
  // 本試験の大問穴埋め形式 ＋ 直接タイピング記述式（4択切替可能）
  // =========================================================================
  {
    id: 's4_01', stage: 4, freq: '本試験穴埋め形式', category: 'ch1_system', hasVisual: false,
    question: '【本試験型・空欄補充】次の文章の空欄［ ア ］〜［ ウ ］に入る語句・数値の組み合わせとして正しいものを選びなさい。<br>「マンセル表色系では、有彩色を色相（H）・明度（V）・彩度（C）の三属性で表し、例えば色相5R、明度4、彩度14の色は［ ア ］と記述する。また、色相によって到達できる最高彩度やそのときの明度が異なるため、マンセルの色立体は［ イ ］な形状をしており、例えば5Yは高明度（V=8付近）で最高彩度となり、その補色である［ ウ ］は低明度（V=3〜4付近）で最高彩度となる。」',
    options: [
      { text: 'ア：5R 4/14 ── イ：非対称（歪んだ凹凸） ── ウ：5PB' },
      { text: 'ア：5R 14/4 ── イ：左右対称の球体 ── ウ：5BG' },
      { text: 'ア：4/14 5R ── イ：正三角形の二重円錐 ── ウ：5G' },
      { text: 'ア：v2 4/14 ── イ：非対称 ── ウ：20:V' }
    ],
    answer: 0,
    explanation: 'マンセル表色系の総合穴埋め問題です。表記は<strong><code>5R 4/14</code></strong>、色立体は最高彩度・明度が色相ごとに異なるため<strong>非対称</strong>な形状（カラーツリー）となり、<code>5Y</code>の向かい合う補色は<strong><code>5PB</code></strong>です。'
  },
  {
    id: 's4_02', stage: 4, freq: '本試験穴埋め形式', category: 'ch2_light', hasVisual: false,
    question: '【本試験型・空欄補充】次の文章の空欄［ ア ］〜［ ウ ］に入る語句・数値の組み合わせとして正しいものを選びなさい。<br>「光源の演色性を評価する際、8種類の試験色（中彩度）の平均で算出する指標を［ ア ］といい、基準光と同じ見え方のとき最高値［ イ ］となる。さらに、高彩度の赤（R9）や日本人の肌色（R15）、木の葉の色（R14）など7つの試験色を個別に評価したものを［ ウ ］と呼ぶ。」',
    options: [
      { text: 'ア：平均演色評価数（Ra） ── イ：100 ── ウ：特殊演色評価数（Ri）' },
      { text: 'ア：特殊演色評価数（Ri） ── イ：10 ── ウ：平均演色評価数（Ra）' },
      { text: 'ア：相関色温度（Tcp） ── イ：6500 ── ウ：分光反射率' },
      { text: 'ア：明所視比視感度 ── イ：555 ── ウ：暗所視比視感度' }
    ],
    answer: 0,
    explanation: 'No.1〜8の平均が<strong>平均演色評価数（$R_a$）</strong>で最高値は<strong>100</strong>、No.9〜15の7つの個別評価が<strong>特殊演色評価数（$R_i$）</strong>です。'
  },
  {
    id: 's4_03', stage: 4, freq: '本試験穴埋め形式', category: 'ch3_harmony', hasVisual: true,
    promptSwatches: [
      { label: '組み合わせ①', codes: ['lt7', 'd9'] },
      { label: '組み合わせ②', codes: ['d7', 'lt9'] }
    ],
    question: '【本試験型・空欄補充】次の文章の空欄［ ア ］〜［ ウ ］に入る語句の組み合わせとして正しいものを選びなさい。<br>「アメリカの色彩学者ジャッドが提唱した4原理の一つである［ ア ］の原理は、自然界の光の順列のように人々が見慣れている明度変化は調和するという考え方であり、PCCSの［ イ ］ハーモニーの理論的根拠となっている。一方、上の7:rY（赤みの黄）と9:gY（緑みの黄）を比べた場合、8:Y（黄）からの距離は同じであるが、PCCSの純色明度および自然連鎖では9:gYよりも7:rYの方がわずかに低いため、一般には8:Yを頂点として黄に近い側を明るく、青紫に近い側を暗くする。」',
    options: [
      { text: 'ア：なじみ（親近性） ── イ：ナチュラル' },
      { text: 'ア：明瞭性（曖昧さの否定） ── イ：コンプレックス' },
      { text: 'ア：秩序 ── イ：カマイユ' },
      { text: 'ア：類似性 ── イ：ビコロール' }
    ],
    answer: 0,
    explanation: 'ジャッドの4原理のうち「見慣れた自然界の明度変化は調和する」という原理は<strong>なじみ（親近性）の原理</strong>であり、<strong>ナチュラルハーモニー</strong>の根拠です。'
  },
  {
    id: 's4_04', stage: 4, freq: '本試験穴埋め形式', category: 'ch5_perception', hasVisual: false,
    question: '【本試験型・空欄補充】次の文章の空欄［ ア ］〜［ ウ ］に入る語句の組み合わせとして正しいものを選びなさい。<br>「人間の網膜には、明るい場所（明所視）で働き色を見分ける3種類の［ ア ］と、暗い場所（暗所視）で働き明暗のみを感じる［ イ ］の2種類の視細胞がある。明所視では波長約555nm（黄緑）の感度が最も高いが、暗所視に移行すると感度ピークが短波長側の約507nm（青緑）へ移動する。このため薄暮時には赤よりも青の方が明るく見える［ ウ ］現象が生じる。」',
    options: [
      { text: 'ア：錐体（すいたい） ── イ：桿体（かんたい） ── ウ：プルキンエ' },
      { text: 'ア：桿体（かんたい） ── イ：錐体（すいたい） ── ウ：リープマン' },
      { text: 'ア：水晶体 ── イ：毛様体 ── ウ：マッハバンド' },
      { text: 'ア：視神経 ── イ：黄斑 ── ウ：メタメリズム' }
    ],
    answer: 0,
    explanation: '明所視で働く色覚視細胞が<strong>錐体（L・M・Sの3種、555nmピーク）</strong>、暗所視で働く高感度な明暗視細胞が<strong>桿体（507nmピーク）</strong>、その移行による明度逆転現象が<strong>プルキンエ現象</strong>です。'
  },
  {
    id: 's4_05', stage: 4, freq: '本試験穴埋め形式', category: 'ch78_design', hasVisual: false,
    question: '【本試験型・空欄補充】次の文章の空欄［ ア ］〜［ ウ ］に入る語句の組み合わせとして正しいものを選びなさい。<br>「2004年に制定された［ ア ］に基づき、全国の多くの自治体が景観計画を策定している。建築物の外壁などの色彩基準にはJIS規格の［ イ ］表色系が用いられ、周辺環境との調和から色相ごとに明度や［ ウ ］の上限値が定められていることが多い。」',
    options: [
      { text: 'ア：景観法 ── イ：マンセル ── ウ：彩度' },
      { text: 'ア：建築基準法 ── イ：オストワルト ── ウ：色温度' },
      { text: 'ア：都市計画法 ── イ：PCCS ── ウ：演色評価数' },
      { text: 'ア：色彩検定法 ── イ：CIELAB ── ウ：輝度' }
    ],
    answer: 0,
    explanation: '2004年制定の<strong>景観法</strong>に基づく景観計画では、<strong>マンセル表色系</strong>を用いて主に色相ごとの<strong>彩度（および明度）</strong>の範囲を規制しています。'
  },

  // --- ここからは本試験の最終問題対策「記述式（直接入力＋選択肢切替対応）」20問！ ---
  {
    id: 's4_06', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['テラコッタ', 'てらこった', 'terracotta'],
    promptSwatches: [{ label: '記述対象の色見本（くすんだ黄みの赤）', codes: ['#BD624B|？'] }],
    question: '【記述対策】イタリア語で「焼いた土」を意味し、素焼きの陶器や植木鉢のような「くすんだ黄みの赤」を指す外来色名をカタカナ5文字で答えなさい。',
    options: [
      { text: 'テラコッタ' },
      { text: 'バーントシェンナ' },
      { text: 'マルーン' },
      { text: 'アンバー' }
    ],
    answer: 0,
    explanation: '正解は<strong>「テラコッタ（Terracotta）」</strong>です。2級の記述問題で最も狙われやすい外来色名の一つです。'
  },
  {
    id: 's4_07', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['新橋色', 'しんばしいろ', 'シンバシイロ', '新橋'],
    promptSwatches: [{ label: '記述対象の色見本（明るい緑みの青）', codes: ['#59B9C6|？'] }],
    question: '【記述対策】明治末期〜大正期に東京・新橋の芸妓衆の間で化学染料によって大流行した「明るい緑みの青」の和色名を答えなさい（漢字またはひらがな）。',
    options: [
      { text: '新橋色（しんばしいろ）' },
      { text: '納戸色（なんどいろ）' },
      { text: '甕覗（かめのぞき）' },
      { text: '縹色（はなだいろ）' }
    ],
    answer: 0,
    explanation: '正解は<strong>「新橋色（しんばしいろ）」</strong>です。系統色名「明るい緑みの青」とあわせて漢字でも書けるようにしておきましょう。'
  },
  {
    id: 's4_08', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['ポピーレッド', 'ぽぴーれっど'],
    promptSwatches: [{ label: '記述対象の色見本（あざやかな赤 / PCCS v2）', codes: ['#EA352D|？'] }],
    question: '【記述対策】ヒナゲシの花に由来し、PCCSの「2:R（あざやかな赤）」の代表色名である外来色名をカタカナ6文字で答えなさい。',
    options: [
      { text: 'ポピーレッド' },
      { text: 'ローズピンク' },
      { text: 'バーガンディー' },
      { text: 'オールドローズ' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ポピーレッド（Poppy Red）」</strong>です。'
  },
  {
    id: 's4_09', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['マゼンタ', 'まぜんた', 'magenta'],
    promptSwatches: [{ label: '記述対象の色見本（あざやかな赤紫 / PCCS v24）', codes: ['#D7006D|？'] }],
    question: '【記述対策】イタリアの地名に由来し、色料の三原色（プロセスカラー）の一つでもある「あざやかな赤紫」の外来色名をカタカナ4文字で答えなさい。',
    options: [
      { text: 'マゼンタ' },
      { text: 'バイオレット' },
      { text: 'ラベンダー' },
      { text: 'ウルトラマリン' }
    ],
    answer: 0,
    explanation: '正解は<strong>「マゼンタ（Magenta）」</strong>です。'
  },
  {
    id: 's4_10', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['ウルトラマリン', 'うるとらまりん'],
    promptSwatches: [{ label: '記述対象の色見本（こい紫みの青）', codes: ['#2743A5|？'] }],
    question: '【記述対策】ラテン語で「海を越えてきた（青）」を意味し、宝石ラピスラズリから作られる群青色の顔料に由来する「こい紫みの青」の外来色名をカタカナ7文字で答えなさい。',
    options: [
      { text: 'ウルトラマリン' },
      { text: 'ロイヤルブルー' },
      { text: 'ネイビーブルー' },
      { text: 'ピーコックブルー' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ウルトラマリン（Ultramarine）」</strong>です。'
  },
  {
    id: 's4_11', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['黄丹', 'おうに', 'オウニ'],
    promptSwatches: [{ label: '記述対象の色見本（つよい黄赤）', codes: ['#F05E23|？'] }],
    question: '【記述対策】紅花とクチナシで染められ、古来より皇太子の礼服の色とされてきた「つよい黄赤」の和色名（漢字2文字、または読み仮名3文字）を答えなさい。',
    options: [
      { text: '黄丹（おうに）' },
      { text: '代赭（たいしゃ）' },
      { text: '蘇芳（すおう）' },
      { text: '琥珀色（こはくいろ）' }
    ],
    answer: 0,
    explanation: '正解は<strong>「黄丹（おうに）」</strong>です。'
  },
  {
    id: 's4_12', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['利休鼠', 'りきゅうねずみ', 'リキュウネズミ'],
    promptSwatches: [{ label: '記述対象の色見本（灰みの黄緑）', codes: ['#7B8174|？'] }],
    question: '【記述対策】安土桃山時代の茶人・千利休にちなむ、抹茶のような緑みを含んだ「灰みの黄緑」の和色名を答えなさい（漢字3文字、またはひらがな）。',
    options: [
      { text: '利休鼠（りきゅうねずみ）' },
      { text: '銀鼠（ぎんねず）' },
      { text: '茶鼠（ちゃねずみ）' },
      { text: '海松色（みるいろ）' }
    ],
    answer: 0,
    explanation: '正解は<strong>「利休鼠（りきゅうねずみ）」</strong>です。'
  },
  {
    id: 's4_13', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['ビリジアン', 'びりじあん', 'viridian'],
    promptSwatches: [{ label: '記述対象の色見本（くすんだ青みの緑）', codes: ['#007B66|？'] }],
    question: '【記述対策】水酸化クロムを主成分とする緑色顔料に由来し、絵具の定番色としても知られる「くすんだ青みの緑」の外来色名をカタカナ5文字で答えなさい。',
    options: [
      { text: 'ビリジアン' },
      { text: 'エメラルドグリーン' },
      { text: 'ミントグリーン' },
      { text: 'オリーブドラブ' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ビリジアン（Viridian）」</strong>です。'
  },
  {
    id: 's4_14', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['エクルベイジュ', 'エクルベージュ', 'えくるべいじゅ', 'えくるべーじゅ'],
    promptSwatches: [{ label: '記述対象の色見本（うすい黄赤 / 生成り色）', codes: ['#F3E5CE|？'] }],
    question: '【記述対策】フランス語で「未晒し（生成り）」を意味し、漂白していない麻や絹のような「うすい黄赤」を指す外来色名をカタカナ7文字で答えなさい。',
    options: [
      { text: 'エクルベイジュ' },
      { text: 'アイボリー' },
      { text: 'オフホワイト' },
      { text: 'ネープルスイエロー' }
    ],
    answer: 0,
    explanation: '正解は<strong>「エクルベイジュ（Ecru Beige）」</strong>です（JIS表記は「エクルベイジュ」である点も要チェックです）。'
  },
  {
    id: 's4_15', stage: 4, freq: '記述式・超頻出', category: 'ch3_harmony', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['カマイユ', 'かまいゆ', 'カマイユ配色', 'かまいゆはいしょく'],
    promptSwatches: [{ label: '微差の配色（p6 と ltg6）', codes: ['p6', 'ltg6'] }],
    question: '【記述対策】フランス語で「単色画法」を意味し、同一・隣接色相かつ同一・隣接トーンを組み合わせて一見単色に見えるほど差を小さくした配色技法を何というか（カタカナ4文字）。',
    options: [
      { text: 'カマイユ' },
      { text: 'フォカマイユ' },
      { text: 'ビコロール' },
      { text: 'トリコロール' }
    ],
    answer: 0,
    explanation: '正解は<strong>「カマイユ（camaïeu）」</strong>です。'
  },
  {
    id: 's4_16', stage: 4, freq: '記述式・超頻出', category: 'ch3_harmony', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['ビコロール', 'びころーる', 'ビコロール配色'],
    promptSwatches: [{ label: '明快な対比の2色配色', codes: ['v2', 'W'] }],
    question: '【記述対策】フランス語で「2色配色」を意味し、コントラストの強い明快な2色を組み合わせる配色技法をカタカナ5文字で答えなさい。',
    options: [
      { text: 'ビコロール' },
      { text: 'トリコロール' },
      { text: 'ダイアード' },
      { text: 'トーナル' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ビコロール（bicolore）」</strong>です。3色の場合は「トリコロール」です。'
  },
  {
    id: 's4_17', stage: 4, freq: '記述式・超頻出', category: 'ch3_harmony', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['スプリットコンプリメンタリー', 'すぷりっとこんぷりめんたりー', '分裂補色配色', '分裂補色'],
    promptSwatches: [{ label: '基準色v8と補色の両隣v19・v21', codes: ['v8', 'v19', 'v21'] }],
    question: '【記述対策】基準色に対し、その補色の両隣（隣接・類似色相）の2色を組み合わせる「分裂補色配色」をカタカナ14文字で何というか。',
    options: [
      { text: 'スプリットコンプリメンタリー' },
      { text: 'コンプレックスハーモニー' },
      { text: 'ナチュラルハーモニー' },
      { text: 'トーンオントーン' }
    ],
    answer: 0,
    explanation: '正解は<strong>「スプリットコンプリメンタリー（Split Complementary：分裂補色配色）」</strong>です。'
  },
  {
    id: 's4_18', stage: 4, freq: '記述式・超頻出', category: 'ch5_perception', hasVisual: false,
    isInputQuestion: true,
    acceptedAnswers: ['メタメリズム', 'めためりずむ', '条件等色', 'じょうけんとうしょく'],
    question: '【記述対策】分光反射率が異なる2つの物体が、ある特定の光源下でのみ同じ色に見え、別の光源下では異なる色に見える現象を何というか（カタカナ6文字、または漢字4文字）。',
    options: [
      { text: 'メタメリズム（条件等色）' },
      { text: 'アイソメリズム（無条件等色）' },
      { text: 'プルキンエ現象' },
      { text: 'リープマン効果' }
    ],
    answer: 0,
    explanation: '正解は<strong>「メタメリズム（条件等色）」</strong>です。'
  },
  {
    id: 's4_19', stage: 4, freq: '記述式・超頻出', category: 'ch5_perception', hasVisual: false,
    isInputQuestion: true,
    acceptedAnswers: ['プルキンエ', 'ぷるきんえ', 'プルキンエ現象', 'ぷるきんえげんしょう'],
    question: '【記述対策】明所視から暗所視へ移行する薄暮時に、視細胞の働きが錐体から桿体へ切り替わることで赤が暗く、青が明るく見える現象を「［ 　 ］現象」というか。人名部分のカタカナ5文字を答えなさい。',
    options: [
      { text: 'プルキンエ' },
      { text: 'リープマン' },
      { text: 'ベンハム' },
      { text: 'シュヴルール' }
    ],
    answer: 0,
    explanation: '正解は<strong>「プルキンエ（プルキンエ現象）」</strong>です。'
  },
  {
    id: 's4_20', stage: 4, freq: '記述式・超頻出', category: 'ch5_perception', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['リープマン', 'りーぷまん', 'リープマン効果', 'りーぷまんこうか'],
    promptSwatches: [{ label: '等明度の図と地', codes: ['v2', 'v12'] }],
    question: '【記述対策】図と地の色相差が大きくても、明度差が小さい（等明度）と形の輪郭がぼやけて認識しにくくなる視覚効果を「［ 　 ］効果」というか。カタカナ5文字を答えなさい。',
    options: [
      { text: 'リープマン' },
      { text: 'マッハバンド' },
      { text: 'ハーマングリッド' },
      { text: 'アブニー' }
    ],
    answer: 0,
    explanation: '正解は<strong>「リープマン（リープマン効果）」</strong>です。'
  },
  {
    id: 's4_21', stage: 4, freq: '記述式・超頻出', category: 'ch5_perception', hasVisual: false,
    isInputQuestion: true,
    acceptedAnswers: ['ベンハム', 'べんはむ', 'ベンハムのコマ', 'べんはむのこま'],
    question: '【記述対策】白と黒の円弧模様だけが描かれた円盤を回転させると有彩色（主観色）が知覚される器具を「［ 　 ］のコマ」というか。カタカナ4文字を答えなさい。',
    options: [
      { text: 'ベンハム' },
      { text: 'マックスウェル' },
      { text: 'ニュートン' },
      { text: 'マンセル' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ベンハム（ベンハムのコマ）」</strong>です。'
  },
  {
    id: 's4_22', stage: 4, freq: '記述式・超頻出', category: 'ch3_harmony', hasVisual: false,
    isInputQuestion: true,
    acceptedAnswers: ['ジャッド', 'じゃっど', 'Judd'],
    question: '【記述対策】過去の色彩調和論を研究し、「秩序の原理」「なじみの原理」「類似性の原理」「明瞭性（曖昧さの否定）の原理」という色彩調和の4原理を提唱したアメリカの色彩学者は誰か（カタカナ4文字）。',
    options: [
      { text: 'ジャッド' },
      { text: 'シュヴルール' },
      { text: 'オストワルト' },
      { text: 'ゲーテ' }
    ],
    answer: 0,
    explanation: '正解は<strong>「ジャッド（D.B. Judd）」</strong>です。'
  },
  {
    id: 's4_23', stage: 4, freq: '記述式・超頻出', category: 'ch78_design', hasVisual: false,
    isInputQuestion: true,
    acceptedAnswers: ['インターカラー', 'いんたーからー', '国際流行色委員会'],
    question: '【記述対策】実シーズンの約2年前に世界各国の代表が集まり、国際的なトレンドカラー（流行色）を選定する国際機関の通称をカタカナ7文字で答えなさい（日本代表はJAFCA）。',
    options: [
      { text: 'インターカラー' },
      { text: 'カラーコンソーシアム' },
      { text: 'パントン' },
      { text: 'マンセル' }
    ],
    answer: 0,
    explanation: '正解は<strong>「インターカラー（国際流行色委員会：INTERCOLOR）」</strong>です。'
  },
  {
    id: 's4_24', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['韓紅花', '韓紅', 'からくれない', 'カラクレナイ'],
    promptSwatches: [{ label: '記述対象の色見本（あざやかな赤 / 和色名）', codes: ['#E9003F|？'] }],
    question: '【記述対策】中国（韓）から渡来した最上級の紅花で染めたことに由来する、百人一首の和歌（ちはやぶる神代も聞かず竜田川…）でも有名な「あざやかな赤」の和色名を答えなさい（漢字3文字、またはひらがな6文字）。',
    options: [
      { text: '韓紅花（からくれない）' },
      { text: '蘇芳（すおう）' },
      { text: '弁柄色（べんがらいろ）' },
      { text: '鴇色（ときいろ）' }
    ],
    answer: 0,
    explanation: '正解は<strong>「韓紅花（からくれない）」</strong>です。2級和色名の中で唯一の「あざやかな赤（v1〜v2）」です。'
  },
  {
    id: 's4_25', stage: 4, freq: '記述式・超頻出', category: 'ch1_names', hasVisual: true,
    isInputQuestion: true,
    acceptedAnswers: ['甕覗', '瓶覗', 'かめのぞき', 'カメノゾキ'],
    promptSwatches: [{ label: '記述対象の色見本（やわらかい緑みの青）', codes: ['#A2D7DD|？'] }],
    question: '【記述対策】藍染めの入った藍甕（あいがめ）をほんの少し覗いた程度のごく薄い染色に由来する「やわらかい緑みの青」の和色名を答えなさい（漢字2文字、またはひらがな5文字）。',
    options: [
      { text: '甕覗（かめのぞき）' },
      { text: '新橋色（しんばしいろ）' },
      { text: '納戸色（なんどいろ）' },
      { text: '縹色（はなだいろ）' }
    ],
    answer: 0,
    explanation: '正解は<strong>「甕覗（かめのぞき）」</strong>です。藍染めの最も淡い色として2級の試験で非常に好まれる和色名です。'
  }
];

QUESTIONS_DB.push(...QUESTIONS_PART2);
