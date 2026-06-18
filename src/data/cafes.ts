export interface CafeMenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  emoji: string;
  imageUrl?: string;
  category: 'food' | 'drink' | 'dessert';
  inspiredBy: string;
}

export interface CollabCafe {
  id: string;
  name: string;
  subtitle: string;
  bannerEmoji: string;
  bannerGradient: string;
  bannerUrl?: string;
  period: string;
  location: string;
  description: string;
  themeColor: string;
  themeColorLight: string;
  menuItems: CafeMenuItem[];
}

export const cafes: CollabCafe[] = [
  {
    id: 'sakura-neko',
    name: '桜猫カフェ',
    subtitle: '× ハルカ',
    bannerEmoji: '🌸',
    bannerGradient: 'from-pink-300 via-rose-200 to-pink-100',
    period: '2024年3月15日 〜 4月30日',
    location: '架空渋谷店',
    themeColor: '#F06292',
    themeColorLight: '#FCE4EC',
    description: '春のあたたかさをテーマにした、ハルカとのコラボカフェ。桜モチーフの限定スイーツとドリンクが勢揃い。ハルカが全力でおすすめするいちごスイーツをぜひ！',
    menuItems: [
      {
        id: 'sakura-1',
        name: 'ハルカのミルクレープ',
        price: '¥980',
        emoji: '🍰',
        category: 'dessert',
        inspiredBy: 'ハルカ',
        description: '何層にも重ねたクレープ生地と、いちごクリームが交互に重なる贅沢な一品。桜の花びら型のいちごをトッピング。',
      },
      {
        id: 'sakura-2',
        name: 'さくらソーダ',
        price: '¥780',
        emoji: '🌸',
        category: 'drink',
        inspiredBy: 'ハルカ',
        description: '桜シロップベースの淡いピンク色のソーダ。バニラアイスと桜の塩漬けをトッピングした春限定ドリンク。',
      },
      {
        id: 'sakura-3',
        name: 'ハルカのメロンパンサンド',
        price: '¥850',
        emoji: '🍈',
        category: 'food',
        inspiredBy: 'ハルカ',
        description: 'サクサクのメロンパン生地でいちごとホイップクリームをサンド。温かいうちに食べるのがベスト。',
      },
      {
        id: 'sakura-4',
        name: 'ねこ耳ポテト',
        price: '¥680',
        emoji: '🍟',
        category: 'food',
        inspiredBy: 'ハルカ',
        description: 'ねこ耳の形に成型したポテトフライ。ハルカのトレードマークをイメージした一品。',
      },
      {
        id: 'sakura-5',
        name: 'いちごラテ',
        price: '¥720',
        emoji: '🍓',
        category: 'drink',
        inspiredBy: 'ハルカ',
        description: '完熟いちごのピューレを使った濃厚ラテ。ミルクフォームにはハルカのシルエットを描いてお届け。',
      },
      {
        id: 'sakura-6',
        name: '桜あんパフェ',
        price: '¥1,100',
        emoji: '🍡',
        category: 'dessert',
        inspiredBy: 'ハルカ',
        description: '桜風味のあんこと抹茶アイス、桜餅を組み合わせた和風パフェ。春の訪れを感じる一品。',
      },
    ],
  },
  {
    id: 'nocturne',
    name: '夜想曲カフェ',
    subtitle: '× レン',
    bannerEmoji: '🌙',
    bannerGradient: 'from-indigo-700 via-purple-600 to-indigo-400',
    period: '2024年10月1日 〜 11月30日',
    location: '架空新宿店',
    themeColor: '#5C6BC0',
    themeColorLight: '#E8EAF6',
    description: '夜の静寂と美しさをテーマにしたレンとのコラボカフェ。辛さと深みのあるフードと、幻想的なドリンクで、レンの世界観を表現。',
    menuItems: [
      {
        id: 'nocturne-1',
        name: 'レンの担々麺',
        price: '¥1,280',
        emoji: '🍜',
        category: 'food',
        inspiredBy: 'レン',
        description: 'レン監修の本格担々麺。花椒と豆板醤をたっぷり使った、痺れる辛さが特徴。辛さレベルは1〜3から選択可能。',
      },
      {
        id: 'nocturne-2',
        name: '漆黒コーラゼリーパフェ',
        price: '¥1,050',
        emoji: '🖤',
        category: 'dessert',
        inspiredBy: 'レン',
        description: '黒いコーラゼリーとバニラアイスの対比が美しいパフェ。食用炭で漆黒に染めたクッキーをアクセントに。',
      },
      {
        id: 'nocturne-3',
        name: '月夜のラテ',
        price: '¥820',
        emoji: '🌙',
        category: 'drink',
        inspiredBy: 'レン',
        description: 'ブラックコーヒーベースに金色のシロップをたらした、夜空の月をイメージしたラテ。ほろ苦く甘い一杯。',
      },
      {
        id: 'nocturne-4',
        name: '氷の麻婆豆腐丼',
        price: '¥1,180',
        emoji: '🌶️',
        category: 'food',
        inspiredBy: 'レン',
        description: 'レンの好きな麻婆豆腐をご飯にのせた丼。花椒をふんだんに使い、辛さと旨みが凝縮。',
      },
      {
        id: 'nocturne-5',
        name: 'ブルームーンソーダ',
        price: '¥780',
        emoji: '💙',
        category: 'drink',
        inspiredBy: 'レン',
        description: 'インディゴブルーのソーダに銀色の食用パール。幻想的な見た目のレモンソーダベースのドリンク。',
      },
      {
        id: 'nocturne-6',
        name: 'ビターチョコレートテリーヌ',
        price: '¥920',
        emoji: '🍫',
        category: 'dessert',
        inspiredBy: 'レン',
        description: 'カカオ70%以上のビターチョコを使った濃厚テリーヌ。レンが「実は好きだ」と渋々認めた味。',
      },
    ],
  },
  {
    id: 'sunshine',
    name: 'サンシャインダイナー',
    subtitle: '× ミコト',
    bannerEmoji: '⚡',
    bannerGradient: 'from-orange-400 via-amber-300 to-yellow-200',
    period: '2024年8月1日 〜 9月15日',
    location: '架空池袋店',
    themeColor: '#F57C00',
    themeColorLight: '#FFF8F0',
    description: 'ミコトの元気パワーを全力で注ぎ込んだコラボダイナー！大盛り・アツアツ・ガッツリが基本方針。食べ終わったら満腹確定。',
    menuItems: [
      {
        id: 'sunshine-1',
        name: 'ミコトの大盛りカレー',
        price: '¥1,100',
        emoji: '🍛',
        category: 'food',
        inspiredBy: 'ミコト',
        description: '通常の2倍量のルーと特大ライス。鶏もも肉がゴロゴロ入った本格カレー。「普通盛り」という概念はない。',
      },
      {
        id: 'sunshine-2',
        name: 'たこ焼きパーティープレート',
        price: '¥1,380',
        emoji: '🐙',
        category: 'food',
        inspiredBy: 'ミコト',
        description: '20個のたこ焼きが勢ぞろい。ソース・塩・チーズの3種ソースで楽しめる。アツアツ提供！',
      },
      {
        id: 'sunshine-3',
        name: '元気タピオカドリンク',
        price: '¥780',
        emoji: '🧋',
        category: 'drink',
        inspiredBy: 'ミコト',
        description: '極太タピオカのミルクティー。黒糖シロップのパンチが効いている。ミコトが毎日でも飲みたいと言う一杯。',
      },
      {
        id: 'sunshine-4',
        name: 'サンライズパフェ',
        price: '¥1,050',
        emoji: '🌅',
        category: 'dessert',
        inspiredBy: 'ミコト',
        description: 'オレンジ・マンゴー・バニラアイスが層になった朝日カラーのパフェ。甘さと爽やかさのバランス抜群。',
      },
      {
        id: 'sunshine-5',
        name: 'ミコトのオレンジスカッシュ',
        price: '¥680',
        emoji: '🍊',
        category: 'drink',
        inspiredBy: 'ミコト',
        description: '搾りたてオレンジジュースの炭酸割り。元気が出る爽快な味。ミコトの笑顔みたいな明るい色！',
      },
      {
        id: 'sunshine-6',
        name: 'がっつりナポリタン',
        price: '¥980',
        emoji: '🍝',
        category: 'food',
        inspiredBy: 'ミコト',
        description: '太麺ナポリタンのデカ盛り。ケチャップベースの濃い味でパワーチャージ。ミコトが「これが最強の食べ物」と主張する一品。',
      },
    ],
  },
];
