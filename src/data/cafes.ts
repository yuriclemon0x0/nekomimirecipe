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
    id: 'astol-garden',
    name: 'Astol Garden Tea Salon',
    subtitle: '〜セレスティアと、ふたりの紳士の午後〜',
    bannerEmoji: '🫖',
    bannerGradient: 'from-purple-200 via-pink-100 to-rose-100',
    period: '架空の春〜初夏',
    location: '架空ヴィクトリア・グレイ＝フィールド邸別館',
    themeColor: '#9B72A8',
    themeColorLight: '#F5EFF8',
    description: '上品なヴィクトリア調のティーサロンを舞台に、セレスティアの可憐さ・イライアスの紳士感・レオニスの過保護な兄心を詰め込んだ架空コラボカフェ。「甘やかす支配人」VS「守りすぎる兄」の構図をどうぞお楽しみください。',
    menuItems: [
      {
        id: 'ag-drink-1',
        name: 'セレスティアのアメジスト・アイスティー',
        price: '¥880',
        emoji: '💜',
        category: 'drink',
        inspiredBy: 'セレスティア',
        description: '透き通る紅茶ベースのアイスティー。ラベンダーシロップ、レモン、ベリーを使用。アメジスト色のゼリー入り。甘さ控えめで可憐な味。昼下がりにセレスティアが飲んでいそうな、涼しげで上品な一杯。',
      },
      {
        id: 'ag-drink-2',
        name: 'イライアスのグレイ・アールグレイ',
        price: '¥920',
        emoji: '🫖',
        category: 'drink',
        inspiredBy: 'イライアス',
        description: 'アールグレイベースのホットティー。ミルクフォームつき、仕上げに金箔風シュガー。小さなダークチョコ付き。支配人の執務室で出てきそうな、落ち着いた大人の一杯。',
      },
      {
        id: 'ag-drink-3',
        name: 'レオニスのミント・ブラックティー',
        price: '¥780',
        emoji: '🌿',
        category: 'drink',
        inspiredBy: 'レオニス',
        description: '無糖寄りのブラックティー。ミントとレモンで後味すっきり。グラスも装飾もシンプル。「甘すぎる」と言いながらも、妹のドリンクを一口味見する兄のイメージ。',
      },
      {
        id: 'ag-drink-4',
        name: 'イラリリの秘密のミルクティー',
        price: '¥950',
        emoji: '☕',
        category: 'drink',
        inspiredBy: 'イライアス × セレスティア',
        description: 'ロイヤルミルクティー、はちみつとバニラの香り、ハート型の紅茶ゼリー入り。カップスリーブに白手袋モチーフ。イライアスがセレスティアのために甘く淹れた、特別扱いのミルクティー。',
      },
      {
        id: 'ag-drink-5',
        name: 'レオリリの兄妹レモネードティー',
        price: '¥860',
        emoji: '🍋',
        category: 'drink',
        inspiredBy: 'レオニス × セレスティア',
        description: 'レモネード＋紅茶の爽やかドリンク。ピンクグレープフルーツ入り、兄妹カラーのリボンピック付き。夏の兄妹旅行、白ワンピと麦わら帽子の思い出から。甘酸っぱく、少し懐かしい味。',
      },
      {
        id: 'ag-drink-6',
        name: 'イライアス＆レオニスの犬猿ビターコーヒー',
        price: '¥820',
        emoji: '☕',
        category: 'drink',
        inspiredBy: 'イライアス × レオニス',
        description: 'ブラックコーヒー、ビターチョコソース。別添えで小さな角砂糖つき。砂糖を入れるかどうかで"和解度"が変わる仕様。セレスティアの前では取り繕うが、内心バチバチな男二人。',
      },
      {
        id: 'ag-food-1',
        name: 'セレスティアのサーモンサンド・プレート',
        price: '¥1,480',
        emoji: '🥪',
        category: 'food',
        inspiredBy: 'セレスティア',
        description: 'スモークサーモン、クリームチーズ、きゅうりのサンドイッチ。小さなサラダとピクルス添え。セレスティアの好きな昼食メニュー。アイスティーとセットにしたい。',
      },
      {
        id: 'ag-food-2',
        name: 'イライアス支配人のビーフシチュー',
        price: '¥1,980',
        emoji: '🥘',
        category: 'food',
        inspiredBy: 'イライアス',
        description: '濃厚ビーフシチュー、マッシュポテト添え、赤ワイン風味、ミニバゲット付き。落ち着いた大人のメイン料理。夜会帰りの軽い食事にも似合う。',
      },
      {
        id: 'ag-food-3',
        name: 'レオニスのきのこリゾット',
        price: '¥1,680',
        emoji: '🍄',
        category: 'food',
        inspiredBy: 'レオニス',
        description: 'きのこたっぷりのクリームリゾット、ハーブチキン添え、黒胡椒強め。見た目はシンプル、味はしっかり。几帳面な兄らしい、派手すぎないけど完成度の高い一皿。',
      },
      {
        id: 'ag-food-4',
        name: 'アストル兄妹の朝食オムレツ',
        price: '¥1,380',
        emoji: '🍳',
        category: 'food',
        inspiredBy: 'レオニス × セレスティア',
        description: 'ハーブ入りオムレツ、トースト、ミニサラダ、いちごジャム添え。休日の朝、レオニスが妹のために整えそうな朝食プレート。',
      },
      {
        id: 'ag-food-5',
        name: 'グレイ＝フィールド邸のアフタヌーンセット',
        price: '¥2,200',
        emoji: '🫖',
        category: 'food',
        inspiredBy: 'イライアス',
        description: 'ミニサンド、スコーン、クロテッドクリーム、小さな焼き菓子、紅茶つき。イライアスがセレスティアを招いて、当然のように一番良い席へ通すやつ。',
      },
      {
        id: 'ag-dessert-1',
        name: 'セレスティアのウィークエンドシトロン',
        price: '¥980',
        emoji: '🍋',
        category: 'dessert',
        inspiredBy: 'セレスティア',
        description: 'レモン風味のパウンドケーキ、白いアイシング、小花の砂糖飾り、アメジスト色のベリーソース添え。可憐で清楚。セレスティアの雰囲気に一番似合う定番デザート。',
      },
      {
        id: 'ag-dessert-2',
        name: 'イライアスのダークチョコレート・テリーヌ',
        price: '¥1,100',
        emoji: '🍫',
        category: 'dessert',
        inspiredBy: 'イライアス',
        description: '濃厚チョコテリーヌ、金箔風トッピング、ベリーソース。甘さ控えめで重め。イライアスの隠れた独占欲みたいなデザート。',
      },
      {
        id: 'ag-dessert-3',
        name: 'レオニスのレモンミント・パルフェ',
        price: '¥1,050',
        emoji: '🌿',
        category: 'dessert',
        inspiredBy: 'レオニス',
        description: 'レモンゼリー、ミントクリーム、ヨーグルトアイス、銀色の飾りピック。甘さ控えめで清潔感のある味。兄らしく、後味がすっきりしている。',
      },
      {
        id: 'ag-dessert-4',
        name: 'イラリリの白手袋ショートケーキ',
        price: '¥1,150',
        emoji: '🍓',
        category: 'dessert',
        inspiredBy: 'イライアス × セレスティア',
        description: 'いちごのショートケーキ、白いクリーム多め、白手袋型チョコプレート、小さなリボン飾り。「お口についていますよ」と言いながら、イライアスが自然に拭ってくる危険メニュー。',
      },
      {
        id: 'ag-dessert-5',
        name: 'レオリリの思い出ミルクプリン',
        price: '¥920',
        emoji: '🍮',
        category: 'dessert',
        inspiredBy: 'レオニス × セレスティア',
        description: 'ミルクプリン、ピンクベリーソース、猫耳型クッキー、小さな麦わら帽子風チョコ飾り。兄妹の思い出メニュー。甘くて優しくて、少しだけ切ない。',
      },
    ],
  },
];
