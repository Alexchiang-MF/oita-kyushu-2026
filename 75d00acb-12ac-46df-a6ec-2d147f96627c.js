// handbook-data.js — 九州大分行程手冊 · 所有資料
'use strict';

window.HandbookData = {

  meta: {
    eyebrow: 'Oita, Kyushu · 2026',
    title: '九州大分五天四夜',
    subtitle: '大分慢遊・溫泉小旅',
    metaItems: ['🗓️ 10.17–10.21', '🚗 Toyota Alphard 自駕', '👥 5 人 · 5天4夜'],
  },

  basicInfo: {
    outbound: 'IT750 桃園 12:00 → 大分 15:00',
    inbound: 'IT751 大分 16:30 → 桃園 17:55',
    groupSize: '5 位成人',
    groupComp: '夫妻 A、夫妻 B + 成年女兒（一家三口）',
    car: 'Toyota Alphard（預約號 00010486642）',
    luggage: '26 吋 ×4 + 隨身包',
    theme: '中津唐揚 → 耶馬溪奇岩 → 杖立秘湯 → 久住花公園 → 由布院 → 別府纜車賞楓 → 大分採買 → 皮克敏聖地。動線為弧線，每個住宿點都是當天行程終點，無回頭路。',
  },

  overview: [
    { day: 1, date: '10/17 五', main: '機場取車 → 中津唐揚 + 商店街喝一杯', stay: '中津 Toyoko Inn', dinner: '中津唐揚名店' },
    { day: 2, date: '10/18 六', main: '中津 → 耶馬溪奇岩 → 杖立溫泉秘湯', stay: '杖立 溪流之宿大自然', dinner: '溫泉街自理' },
    { day: 3, date: '10/19 日', main: '杖立 → 久住花公園 → 由布院散策', stay: '由布院 金鱗湖豐國', dinner: '由布院自理' },
    { day: 4, date: '10/20 一', main: '★ 金鱗湖晨霧 → 別府纜車賞楓 → 大分採買', stay: '大分 Toyoko Inn', dinner: '大分居酒屋' },
    { day: 5, date: '10/21 二', main: '⭐ Park Place 任天堂 + AEON → 還車', stay: '—', dinner: '—' },
  ],

  days: [
    {
      day: 1, date: '2026 / 10 / 17 (週五)',
      route: '大分機場 → 中津',
      note: '抵達中津・唐揚之夜 + 商店街喝一杯',
      stops: [
        { time: '15:00', category: 'move', title: '抵達大分機場・辦理取車', desc: '領行李，Toyota Rent-a-Car 辦理手續，Alphard 出發', chips: [{ icon: '🚗', text: '預約號 00010486642' }] },
        { time: '15:45', endTime: '17:00', category: 'move', title: '大分機場 → 中津市', desc: '走大分自動車道，宇佐 IC 下，沿途平順', chips: [{ icon: '⏱️', text: '約 75 分鐘' }, { icon: '🛣️', text: '50 km' }] },
        { time: '17:00', endTime: '18:00', category: 'stay', title: 'Toyoko Inn 中津駅前 Check-in', desc: '中津站步行 1 分鐘，放行李、休息', chips: [{ icon: '📍', text: '中津駅前' }] },
        { time: '18:00', endTime: '20:00', category: 'food', title: '中津唐揚名店晚餐', desc: '中津是雞肉唐揚炸雞發源地，站前名店密集，酥脆多汁', chips: [{ icon: '⏱️', text: '約 2 小時' }] },
        { time: '20:00', endTime: '22:00', category: 'food', title: '中津本通商店街居酒屋', desc: '拱頂商店街密集分布居酒屋，步行可解決，不需開車', chips: [{ icon: '⏱️', text: '約 2 小時' }] },
      ],
      notes: [
        { type: 'info', text: '中津站前商店街一帶步行可解決所有覓食和喝酒需求，不需開車，輕鬆第一夜。' },
      ],
    },
    {
      day: 2, date: '2026 / 10 / 18 (週六)',
      route: '中津 → 耶馬溪 → 杖立溫泉',
      note: '山間秘湯，人少靜謐的一天',
      stops: [
        { time: '09:00', endTime: '10:00', category: 'stay', title: '飯店早餐・退房', desc: '睡到自然醒，悠閒吃早餐' },
        { time: '10:00', endTime: '10:40', category: 'move', title: '中津 → 耶馬溪', desc: '國道 212 號，山路約 30 分鐘', chips: [{ icon: '⏱️', text: '約 40 分鐘' }, { icon: '⚠️', text: '山路彎多' }] },
        { time: '10:40', endTime: '12:00', category: 'sight', title: '青之洞門 + 羅漢寺', desc: '江戶時代禪海和尚耗費 30 年人力鑿穿的岩石隧道，是日本三大奇勝之一', chips: [{ icon: '⏱️', text: '約 1.5 小時' }] },
        { time: '12:00', endTime: '13:30', category: 'food', title: 'ほのぼの茶屋えっちゃん・午餐', desc: '山女魚鹽燒定食，山間樸實小食堂', chips: [{ icon: '⏱️', text: '約 1.5 小時' }] },
        { time: '13:30', endTime: '14:30', category: 'sight', title: '一目八景展望台', desc: '八個奇岩地形一覽無遺的絕景展望台，彷彿山水畫', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '14:30', endTime: '15:20', category: 'move', title: '耶馬溪 → 杖立溫泉', desc: '國道 212 號繼續南下，約 50 分鐘', chips: [{ icon: '⏱️', text: '約 50 分鐘' }] },
        { time: '15:20', category: 'onsen', title: '杖立溫泉旅館 Check-in・慢泡湯', desc: '溪流之宿大自然，48㎡ 山景河景。有 5 處共同浴場可做湯巡', chips: [{ icon: '♨️', text: '弱食鹽泉' }, { icon: '🛏️', text: '雙人房 + 三人房' }], tip: '共有 5 處共同浴場，可悠閒湯巡，泡到飽為止。', tipLabel: '泡湯提示：' },
        { time: '18:30', category: 'food', title: '溫泉街晚餐（自理）', desc: '旅館僅附早餐，自行到溫泉街覓食', chips: [{ icon: '⏱️', text: '自由時間' }] },
      ],
      notes: [
        { type: 'highlight', title: '♨️ 杖立溫泉（つえたて）', text: '熊本縣跨大分縣的縣境秘湯，約 1800 年歷史，沿杖立川溪谷而建，昭和氛圍濃厚，觀光客少，相當閑靜。泉質弱食鹽泉，對神經痛、肌肉痛、疲勞回復有效。' },
        { type: 'warn', title: '⚠️ 山路駕駛注意', text: '國道 212 號從中津往耶馬溪、再南下杖立都是山路，彎度多，十月可能有山霧。建議由有山路經驗者駕駛，出發前在中津市區先加滿油。' },
      ],
    },
    {
      day: 3, date: '2026 / 10 / 19 (週日)',
      route: '杖立溫泉 → 久住花公園 → 由布院',
      note: '秋花盛開，悠閒散策日',
      stops: [
        { time: '09:30', category: 'stay', title: '杖立溫泉退房', desc: '睡飽再出發，不趕' },
        { time: '09:30', endTime: '10:30', category: 'move', title: '杖立 → 久住花公園', desc: '約 1 小時車程', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '10:30', endTime: '12:30', category: 'sight', title: '久住花公園賞花', desc: '阿蘇九重國立公園內，10 月秋季花卉：萬壽菊、鼠尾草、雞冠花，以九重連山為背景，園區平坦好走', chips: [{ icon: '⏱️', text: '約 2 小時' }, { icon: '🕐', text: '8:30–17:30' }, { icon: '📞', text: '0974-76-1422' }], tip: '出發前可電話確認開花狀況，10 月是最美季節。', tipLabel: '小提醒：' },
        { time: '12:30', endTime: '13:30', category: 'food', title: '久住花公園內午餐', desc: '園內餐廳，有景觀座位，邊吃邊看連山' },
        { time: '13:30', endTime: '14:30', category: 'move', title: '久住花公園 → 由布院', desc: '約 1 小時車程', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '14:30', endTime: '16:30', category: 'shop', title: '湯之坪街道散策 + 採買', desc: '龍貓、B-speak 蛋糕捲、Milch 布丁，邊走邊吃才是重點', chips: [{ icon: '⏱️', text: '約 2 小時' }, { icon: '🛍️', text: 'B-speak · Milch · 龍貓' }] },
        { time: '16:30', category: 'onsen', title: '由布院旅館 Check-in・泡湯', desc: '金鱗湖豐國度假村，近金鱗湖，旅館僅附早餐', chips: [{ icon: '♨️', text: '溫泉旅館' }, { icon: '🛏️', text: '雙人房 ×3' }] },
        { time: '18:30', category: 'food', title: '由布院找晚餐（自理）', desc: '由布院街道選擇多元，自行覓食', chips: [{ icon: '⏱️', text: '自由時間' }] },
      ],
      notes: [
        { type: 'info', text: '金鱗湖留到 Day 4 早晨欣賞晨霧（10 月最美時段），Day 3 下午純散策採買，節奏輕鬆。' },
      ],
    },
    {
      day: 4, date: '2026 / 10 / 20 (週一)',
      route: '金鱗湖晨霧 → 別府纜車 → 大分採買',
      note: '★ 賞楓重頭戲 + 主購物日',
      highlight: true,
      stops: [
        { time: '07:00', endTime: '08:00', category: 'sight', title: '金鱗湖晨霧散步', desc: '10 月是晨霧最美季節，湖面蒸霧飄渺，光線絕美', chips: [{ icon: '⏱️', text: '約 1 小時' }, { icon: '🌡️', text: '約 7°C，帶外套' }] },
        { time: '08:00', endTime: '09:00', category: 'stay', title: '回旅館早餐・退房', desc: '享用旅館早餐後退房' },
        { time: '09:00', endTime: '09:25', category: 'move', title: '由布院 → 別府纜車', desc: '九州橫斷道路，約 25 分鐘', chips: [{ icon: '⏱️', text: '約 25 分鐘' }] },
        { time: '09:25', endTime: '11:45', category: 'sight', title: '別府纜車（鶴見岳）賞楓', desc: '九州最大級 101 人乘，約 10 分鐘到標高 1,300m 山頂。山上步道走一圈約 40 分–1 小時', chips: [{ icon: '⏱️', text: '約 2.5 小時' }, { icon: '💰', text: '來回 ¥1,600 / 人' }, { icon: '🕐', text: '9:00–17:00' }, { icon: '🌡️', text: '山上約 5°C' }], tip: '10/20 山上紅葉已開，比山下更紅。山上站比別府市街低約 10 度，厚外套 + 圍巾務必帶！', tipLabel: '賞楓提示：' },
        { time: '11:45', endTime: '12:30', category: 'move', title: '別府 → 大分市區', desc: '約 45 分鐘', chips: [{ icon: '⏱️', text: '約 45 分鐘' }] },
        { time: '12:30', endTime: '13:30', category: 'food', title: '大分站前午餐', desc: 'とり天定食（大分名物炸雞天婦羅）', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '13:30', endTime: '17:30', category: 'shop', title: '大分商店街主購物', desc: '中央町商店街 / OPA·Forus / TOKIWA / 唐吉訶德 / AMU PLAZA，完整 4 小時', chips: [{ icon: '⏱️', text: '4 小時' }, { icon: '🅿️', text: 'ガレリア竹町駐車場' }], tip: '停車建議：ガレリア竹町駐車場 或 セントポルタ中央町，連通拱頂商店街，下雨也不用撐傘。', tipLabel: '停車提示：' },
        { time: '17:30', endTime: '18:30', category: 'stay', title: 'Toyoko Inn 大分駅前 Check-in', desc: '大分市金池町，近 JR 大分站，整理戰利品', chips: [{ icon: '📍', text: '大分駅前' }] },
        { time: '19:30', endTime: '21:30', category: 'food', title: '大分居酒屋晚餐', desc: '炸物・串燒・燒肉，品嚐大分在地風味', chips: [{ icon: '⏱️', text: '約 2 小時' }] },
      ],
      notes: [
        { type: 'info', title: '🚠 別府纜車（鶴見岳）', text: '九州最大級 101 人乘，約 10 分鐘到標高 1,300m。10 月中旬山上開始紅葉，10/20 山上能看到比山下更紅的楓葉，是本趟賞楓重點。' },
        { type: 'warn', title: '⚠️ 保暖提醒', text: '鶴見山上站標高 1,300m，比別府市街低約 10 度，10 月下旬山上可能 5 度以下，務必帶厚外套。' },
      ],
    },
    {
      day: 5, date: '2026 / 10 / 21 (週二)',
      route: 'Park Place 皮克敏聖地 → 機場',
      note: '⭐ 任天堂專區・悠閒收尾',
      stops: [
        { time: '08:00', endTime: '10:00', category: 'stay', title: '飯店早餐・悠閒整裝・退房', desc: '10:00 退房，不趕' },
        { time: '10:00', endTime: '10:30', category: 'move', title: '大分飯店 → Park Place 大分', desc: '約 30 分鐘', chips: [{ icon: '⏱️', text: '約 30 分鐘' }] },
        { time: '10:30', endTime: '12:00', category: 'shop', title: '🎮 任天堂專門店・皮克敏周邊', desc: '2F「Kids Republic」任天堂專區：皮克敏、瑪利歐、星之卡比等官方周邊，慢慢挑', chips: [{ icon: '⏱️', text: '約 1.5 小時' }, { icon: '🕐', text: '10:00–21:00' }, { icon: '🅿️', text: '停車免費' }] },
        { time: '12:00', endTime: '13:00', category: 'shop', title: 'AEON 永旺逛街', desc: '伴手禮、藥妝、雜貨補貨，同棟一站購足', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '13:00', endTime: '14:00', category: 'food', title: 'Park Place 美食街午餐', desc: '館內多家餐廳，吃飽再走，行李放車上省事', chips: [{ icon: '⏱️', text: '約 1 小時' }] },
        { time: '14:00', endTime: '14:30', category: 'move', title: '前往機場周邊加油', desc: '加滿油、保留加油單據，約 30 分鐘', chips: [{ icon: '⏱️', text: '約 30 分鐘' }] },
        { time: '14:45', category: 'move', title: '抵達 Toyota Rent-a-Car 大分機場店', desc: '預留緩衝時間', chips: [{ icon: '🚗', text: '預約號 00010486642' }] },
        { time: '15:00', category: 'move', title: '✅ 還車', desc: '（視 Day 1 取車時與櫃台確認的還車時間為準）', chips: [{ icon: '⚠️', text: 'Day 1 取車時確認還車時間' }], tip: '若櫃台只能 14:00 還車，則 12:30 結束購物，機場午餐。未確認前先以保守安排為準。', tipLabel: '注意：' },
        { time: '15:00', endTime: '16:00', category: 'move', title: '機場報到 → 出境 → 退稅', desc: '退稅商品需在機場海關核驗，預留 30 分鐘', chips: [{ icon: '⏱️', text: '預留 1 小時' }] },
        { time: '16:30', category: 'move', title: 'IT751 起飛！', desc: '16:30 大分 → 17:55 桃園國際機場，旅程結束', chips: [{ icon: '✈️', text: 'IT751 16:30' }] },
      ],
      notes: [
        { type: 'info', title: '📍 Park Place 大分', text: '大分市公園通西 2-1。2F「Kids Republic」任天堂專區：皮克敏、瑪利歐、星之卡比等官方周邊。同棟 AEON 永旺一站購足，多家餐廳直接解決午餐，停車免費。' },
        { type: 'warn', title: '⚠️ 還車時間確認', text: '租車預約的還車時點原為 14:00（預約號 00010486642）。因班機 15:00 才落地，Day 1 取車會延後，請務必於取車時當面向大分機場店確認還車可否延到 15:00 / 是否需加費。' },
      ],
    },
  ],

  accommodations: [
    { night: 1, date: '10/17 五', name: 'Toyoko Inn 大分中津駅前', nameJa: '東横INN大分中津駅前', note: '中津站步行 1 分鐘', rooms: '雙床房 ×2 + 單人房 ×1（2/2/1）', status: '✅ 已訂', tel: '+81 979-25-1045', address: '大分県中津市豊田町10-11' },
    { night: 2, date: '10/18 六', name: '杖立溪流之宿 大自然', nameJa: 'つえたて温泉 ひぜんや 大自然', note: '小國町（熊本縣）· 48㎡ 山景河景', rooms: '雙人房 ×1 + 三人房 ×1（2/3）', status: '✅ 已下訂', tel: '+81 967-48-0041', address: '熊本県阿蘇郡小国町下城4205' },
    { night: 3, date: '10/19 日', name: '金鱗湖豐國度假村', nameJa: '金鱗湖豊国リゾート', note: '湯布院 Kawakami · 近金鱗湖', rooms: '雙人房 ×3（2/2/1）', status: '✅ 已訂', tel: '—', address: '大分県由布市湯布院町川上1561' },
    { night: 4, date: '10/20 一', name: 'Toyoko Inn 大分駅前', nameJa: '東横INN大分駅前', note: '大分市金池町 · 近 JR 大分站', rooms: '雙床房 ×2 + 單人房 ×1（2/2/1）', status: '✅ 已訂', tel: '+81 97-534-1045', address: '大分県大分市金池町2-2-5' },
  ],

  shopping: [
    { name: '中央町商店街 + Galleria 竹町', desc: '拱頂連通商店街，雨天不撐傘' },
    { name: '大分 OPA・Forus', desc: 'Beams、Urban Research、Lowrys Farm 等女性品牌' },
    { name: 'TOKIWA 百貨大分店', desc: '化妝品、日系品牌伴手禮' },
    { name: '唐吉訶德大分中央町店', desc: '藥妝、零食、家電 24 小時' },
    { name: 'JR 大分站 AMU PLAZA', desc: '豐後牛便當、地酒、柚子胡椒' },
  ],

  emergency: [
    { label: '警察 / 救護車', value: '110 / 119' },
    { label: '台北駐福岡辦事處', value: '+81 92-734-2810（急難 +81 90-1922-9740）' },
    { label: '外交部緊急聯絡中心', value: '+886 800-085-095' },
    { label: 'JAF 道路救援', value: '#8139' },
    { label: '必備 App', value: 'Google Maps、Yahoo! Car Navi、NAVITIME、食べlog、LINE' },
  ],

  navAddresses: {
    stays: [
      { label: 'Day 1 中津', nameJa: '東横INN大分中津駅前', address: '大分県中津市豊田町10-11', tel: '+81 979-25-1045', note: '中津站步行 1 分' },
      { label: 'Day 2 杖立', nameJa: 'つえたて温泉 ひぜんや 大自然', address: '熊本県阿蘇郡小国町下城4205', tel: '+81 967-48-0041', note: '山間秘湯' },
      { label: 'Day 3 由布院', nameJa: '金鱗湖豊国リゾート', address: '大分県由布市湯布院町川上1561', tel: '—', note: '近金鱗湖' },
      { label: 'Day 4 大分', nameJa: '東横INN大分駅前', address: '大分県大分市金池町2-2-5', tel: '+81 97-534-1045', note: '近 JR 大分站' },
    ],
    spots: [
      { label: '取車／還車', nameJa: 'トヨタレンタカー 大分空港店', address: '大分県国東市武蔵町糸原', tel: '—', note: '預約號 00010486642' },
      { label: 'Day 2', nameJa: '青の洞門', address: '大分県中津市本耶馬渓町曽木', tel: '—', note: '禪海和尚隧道' },
      { label: 'Day 2', nameJa: '一目八景展望台', address: '大分県中津市耶馬溪町深耶馬', tel: '—', note: '八奇岩眺望' },
      { label: 'Day 3', nameJa: 'くじゅう花公園', address: '大分県竹田市久住町大字久住4050', tel: '+81 974-76-1422', note: '出發前電話確認花況' },
      { label: 'Day 3/4', nameJa: '金鱗湖', address: '大分県由布市湯布院町川上1561-1', tel: '—', note: 'Day 4 晨霧散步同點' },
      { label: 'Day 4', nameJa: '別府ロープウェイ', address: '大分県別府市南立石字寒原10-7', tel: '+81 977-22-2278', note: '鶴見岳賞楓' },
      { label: 'Day 5', nameJa: 'パークプレイス大分', address: '大分県大分市公園通り西2丁目1', tel: '+81 97-520-7777', note: '2F 任天堂 + AEON' },
    ],
  },
};
