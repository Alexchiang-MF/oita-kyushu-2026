(function () {
// handbook-info.jsx — 基本資訊、總覽、住宿、實用、導航 sections

const {
  Tip,
  CheckItem,
  Button
} = window.ChillTravelDesignSystem_ed09f3;
const {
  SectionTitle,
  InfoBox,
  FlightGrid,
  OverviewRow,
  AccomCard,
  NavRow
} = window;
const {
  basicInfo,
  overview,
  accommodations,
  shopping,
  emergency,
  navAddresses
} = window.HandbookData;

/* ── Sub-heading ─────────────────────────── */
function SubHeading({
  children
}) {
  return /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--tg-sunset-d)',
      margin: 'var(--s5) 0 var(--s3)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, children);
}

/* ── 基本資訊 ────────────────────────────── */
function BasicInfoSection() {
  return /*#__PURE__*/React.createElement("div", {
    id: "section-basic",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\u2708\uFE0F",
    title: "\u57FA\u672C\u8CC7\u8A0A"
  }), /*#__PURE__*/React.createElement(FlightGrid, {
    data: basicInfo
  }), /*#__PURE__*/React.createElement(InfoBox, {
    type: "info",
    title: "\u884C\u7A0B\u4E3B\u8EF8"
  }, basicInfo.theme));
}

/* ── 行程總覽 ────────────────────────────── */
function OverviewSection() {
  return /*#__PURE__*/React.createElement("div", {
    id: "section-overview",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\uD83D\uDCCB",
    title: "\u884C\u7A0B\u7E3D\u89BD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      boxShadow: 'var(--sh-1)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s2) var(--s4)',
      background: 'var(--tg-sunset)',
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70px',
      flexShrink: 0
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, "\u4E3B\u8EF8 \xB7 \u4F4F\u5BBF \xB7 \u665A\u9910")), overview.map(item => /*#__PURE__*/React.createElement(OverviewRow, {
    key: item.day,
    item: item
  }))));
}

/* ── 住宿總表 ────────────────────────────── */
function AccommodationSection() {
  return /*#__PURE__*/React.createElement("div", {
    id: "section-accom",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\uD83C\uDFE8",
    title: "\u4F4F\u5BBF\u7E3D\u8868"
  }), /*#__PURE__*/React.createElement(InfoBox, {
    type: "highlight"
  }, "\u5206\u623F\u6A21\u5F0F\uFF1A\u592B\u59BB A\u3001\u592B\u59BB B + \u6210\u5E74\u5973\u5152\uFF08\u4E00\u5BB6\u4E09\u53E3\uFF09\u3002\u6756\u7ACB\u6EAB\u6CC9\u4E00\u5BB6\u4E09\u53E3\u540C\u4F4F\u4E09\u4EBA\u623F\uFF0C\u5176\u9918\u4E09\u665A\u5973\u5152\u81EA\u5DF1\u4E00\u9593\u3002"), accommodations.map((item, i) => /*#__PURE__*/React.createElement(AccomCard, {
    key: i,
    item: item
  })), /*#__PURE__*/React.createElement(InfoBox, {
    type: "highlight",
    title: "\uD83D\uDCCC \u8A02\u623F\u5F8C\u7E8C"
  }, "\u2460 \u67E5\u6E05\u695A\u56DB\u9593\u7684\u514D\u8CBB\u53D6\u6D88\u671F\u9650\uFF0C\u8A18\u4E0B\u4F86\u3002 \u2461 \u5169\u9593 Toyoko Inn\uFF08\u4E2D\u6D25 + \u5927\u5206\uFF09\u53EF\u52A0\u5165\u514D\u8CBB\u6703\u54E1\u7D2F\u7A4D\u3002 \u2462 \u7531\u5E03\u9662\u91D1\u9C57\u6E56\u5EA6\u5047\u6751\u53EF\u78BA\u8A8D\u623F\u578B\uFF08\u6EAB\u6CC9 / \u98A8\u5442\uFF09\u3002"));
}

/* ── 實用資訊 ────────────────────────────── */
function PracticalSection() {
  return /*#__PURE__*/React.createElement("div", {
    id: "section-practical",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\uD83D\uDCCC",
    title: "\u5BE6\u7528\u8CC7\u8A0A"
  }), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83D\uDECD\uFE0F \u8CFC\u7269\u5730\u9EDE\uFF08Day 4 \u4E0B\u5348 4 \u5C0F\u6642\u30FB\u5927\u5206\u5E02\u5340\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      overflow: 'hidden',
      boxShadow: 'var(--sh-1)'
    }
  }, shopping.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s2) var(--s4)',
      borderBottom: i < shopping.length - 1 ? '1px solid var(--tg-line)' : 'none',
      fontSize: '0.86rem',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)',
      minWidth: '160px',
      flexShrink: 0
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, s.desc)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      margin: 'var(--s2) 0 var(--s3)'
    }
  }, "\uD83C\uDD7F\uFE0F \u505C\u8ECA\uFF1A\u300C\u30AC\u30EC\u30EA\u30A2\u7AF9\u753A\u99D0\u8ECA\u5834\u300D\u6216\u300C\u30BB\u30F3\u30C8\u30DD\u30EB\u30BF\u4E2D\u592E\u753A\u300D\uFF0C\u9023\u901A\u62F1\u9802\u5546\u5E97\u8857\u3002"), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83D\uDE97 \u79DF\u8ECA\u91CD\u9EDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      padding: 'var(--s4)',
      fontSize: '0.87rem',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 'var(--s5)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "Toyota Rent-a-Car \u5927\u5206\u6A5F\u5834\u30FB\u8ECA\u578B ", /*#__PURE__*/React.createElement("strong", null, "Toyota Alphard"), "\uFF085 \u4EBA\u4E58\u5750\u5BEC\u655E\uFF0C\u884C\u674E\u5EC2\u53EF\u5BB9 4 \u500B 26 \u540B\uFF09"), /*#__PURE__*/React.createElement("li", null, "\u5FC5\u5099\uFF1A\u65E5\u672C\u99D5\u99DB\u8B6F\u672C\uFF08\u76E3\u7406\u6240\u7533\u8FA6\uFF09\uFF0B \u4FE1\u7528\u5361 \uFF0B ETC \u5361"), /*#__PURE__*/React.createElement("li", null, "\u5EFA\u8B70\u52A0\u8CFC\u5168\u96AA\uFF08CDW \uFF0B NOC\uFF09\uFF0C\u9084\u8ECA\u524D\u81F3\u6307\u5B9A\u52A0\u6CB9\u7AD9\u52A0\u6EFF\uFF0C\u4FDD\u7559\u55AE\u64DA"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\u5927\u8ECA\u63D0\u9192\uFF1A"), "Alphard \u8ECA\u9577\u7D04 5 \u7C73\uFF0C\u8ECA\u5BEC 1.85 \u7C73\uFF0C\u6756\u7ACB\u6EAB\u6CC9\u8207\u7531\u5E03\u9662\u7684\u5C71\u5340\u5C0F\u5DF7 \uFF0F \u8001\u65C5\u9928\u505C\u8ECA\u5834\u8F03\u7DCA\uFF0C\u505C\u8ECA\u591A\u7559\u610F"))), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83C\uDF42 \u5B63\u7BC0\u6CE8\u610F\uFF0810 \u6708\u4E0B\u65EC\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      padding: 'var(--s4)',
      fontSize: '0.87rem',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 'var(--s5)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u5E73\u5730\u6C23\u6EAB 10\u201318 \u5EA6\uFF0C\u65E5\u591C\u6EAB\u5DEE\u5927\uFF0C\u6D0B\u8525\u5F0F\u7A7F\u642D"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "\u5225\u5E9C\u7E9C\u8ECA\u5C71\u4E0A\uFF081,300m\uFF09\u7D04 5 \u5EA6\u4EE5\u4E0B\u3001\u91D1\u9C57\u6E56\u6668\u9727\uFF087 \u5EA6\u4EE5\u4E0B\uFF09"), "\uFF0C\u52D9\u5FC5\u5E36\u539A\u5916\u5957 \uFF0B \u570D\u5DFE"), /*#__PURE__*/React.createElement("li", null, "\u5C71\u5340\u8DEF\u6BB5\uFF08Day 2\u20133\uFF09\u53EF\u80FD\u5C71\u9727\uFF0C\u51FA\u767C\u524D\u5E02\u5340\u52A0\u6EFF\u6CB9"), /*#__PURE__*/React.createElement("li", null, "10/19\u300110/20 \u70BA\u9031\u65E5\u3001\u9031\u4E00\uFF0C\u666F\u9EDE\u4EBA\u6F6E\u5C11\uFF0C\u597D\u62CD\u597D\u901B"))), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83D\uDCB4 \u9000\u7A05"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      padding: 'var(--s4)',
      fontSize: '0.87rem',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 'var(--s5)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u55AE\u7B46\u6EFF 5,500 \u65E5\u5E63\uFF08\u542B\u7A05\uFF09\u53EF\u9000\u7A05\uFF0C\u9700\u51FA\u793A\u8B77\u7167\u672C\u4EBA"), /*#__PURE__*/React.createElement("li", null, "2026 \u65B0\u5236\uFF1A\u9000\u7A05\u5546\u54C1\u96E2\u5883\u6642\u65BC\u6A5F\u5834\u6D77\u95DC\u6838\u9A57\uFF0C\u9810\u7559 30 \u5206\u9418"), /*#__PURE__*/React.createElement("li", null, "\u5927\u984D\u6D88\u8CBB\u5EFA\u8B70\u7528 JCB \u6216\u7121\u570B\u5916\u624B\u7E8C\u8CBB\u4FE1\u7528\u5361"))), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83C\uDD98 \u7DCA\u6025\u806F\u7D61 & App"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      overflow: 'hidden',
      boxShadow: 'var(--sh-1)'
    }
  }, emergency.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s2) var(--s4)',
      borderBottom: i < emergency.length - 1 ? '1px solid var(--tg-line)' : 'none',
      fontSize: '0.85rem',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)',
      minWidth: '140px',
      flexShrink: 0
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, item.value)))));
}

/* ── 導航速查 ────────────────────────────── */
function NavigationSection() {
  const TableWrap = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      overflow: 'hidden',
      boxShadow: 'var(--sh-1)',
      marginBottom: 'var(--s5)'
    }
  }, children);
  const TableHead = ({
    title
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--s2) var(--s4)',
      background: 'color-mix(in srgb,var(--tg-c-move) 14%,#fff)',
      borderBottom: '1px solid var(--tg-line)',
      fontSize: '0.8rem',
      fontWeight: 700,
      color: 'color-mix(in srgb,var(--tg-c-move) 65%,#000)'
    }
  }, title);
  return /*#__PURE__*/React.createElement("div", {
    id: "section-nav",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\uD83D\uDE97",
    title: "\u5C0E\u822A\u5730\u5740\u901F\u67E5\u8868"
  }), /*#__PURE__*/React.createElement(InfoBox, {
    type: "info"
  }, "\u7D66\u4E3B\u8981\u53F8\u6A5F\uFF1A\u4EE5\u4E0B\u70BA\u6BCF\u65E5\u666F\u9EDE\u8207\u4F4F\u5BBF\u7684", /*#__PURE__*/React.createElement("strong", null, "\u65E5\u6587\u8A2D\u65BD\u540D\u7A31 \uFF0F \u5730\u5740 \uFF0F \u96FB\u8A71"), "\u3002 \u65E5\u672C Google Map \u7528", /*#__PURE__*/React.createElement("strong", null, "\u65E5\u6587\u540D\u7A31\u6216\u96FB\u8A71\u865F\u78BC"), "\u641C\u5C0B\u5B9A\u4F4D\u6700\u7CBE\u6E96\u3002"), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83C\uDFE8 \u4F4F\u5BBF\uFF084 \u665A\uFF09"), /*#__PURE__*/React.createElement(TableWrap, null, /*#__PURE__*/React.createElement(TableHead, {
    title: "\u4F4F\u5BBF\u5730\u9EDE"
  }), navAddresses.stays.map((item, i) => /*#__PURE__*/React.createElement(NavRow, {
    key: i,
    item: item
  }))), /*#__PURE__*/React.createElement(SubHeading, null, "\uD83D\uDCCD \u666F\u9EDE & \u91CD\u8981\u5730\u9EDE"), /*#__PURE__*/React.createElement(TableWrap, null, /*#__PURE__*/React.createElement(TableHead, {
    title: "\u666F\u9EDE & \u91CD\u8981\u5730\u9EDE"
  }), navAddresses.spots.map((item, i) => /*#__PURE__*/React.createElement(NavRow, {
    key: i,
    item: item
  }))), /*#__PURE__*/React.createElement(InfoBox, {
    type: "highlight"
  }, "\uD83D\uDCA1 \u5C0F\u6280\u5DE7\uFF1A\u5728 Google Map \u641C\u5C0B\u6B04\u8CBC\u4E0A\u96FB\u8A71\u865F\u78BC\uFF08\u542B +81\uFF09\u5373\u53EF\u7CBE\u6E96\u5B9A\u4F4D\uFF0C\u662F\u7576\u5730\u5E38\u7528\u65B9\u5F0F\u3002\u6C92\u6709\u96FB\u8A71\u7684\u666F\u9EDE\u7528\u65E5\u6587\u540D\u7A31\u641C\u5C0B\u3002"));
}
Object.assign(window, {
  BasicInfoSection,
  OverviewSection,
  AccommodationSection,
  PracticalSection,
  NavigationSection
});
})();
