(function () {
// handbook-app.jsx — root App + ReactDOM mount

const {
  Hero,
  Button
} = window.ChillTravelDesignSystem_ed09f3;
const {
  StickyNav,
  BasicInfoSection,
  OverviewSection,
  AccommodationSection,
  PracticalSection,
  NavigationSection,
  AllDays
} = window;
const {
  meta
} = window.HandbookData;
const SECTIONS = [{
  id: 'section-basic',
  label: '✈️ 基本資訊'
}, {
  id: 'section-overview',
  label: '📋 總覽'
}, {
  id: 'section-days',
  label: '🗓️ 逐日行程'
}, {
  id: 'section-accom',
  label: '🏨 住宿'
}, {
  id: 'section-practical',
  label: '📌 實用資訊'
}, {
  id: 'section-nav',
  label: '🚗 導航速查'
}];
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--f-body)',
      background: 'var(--tg-paper)',
      minHeight: '100vh',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--app-max)',
      margin: '0 auto',
      padding: 'var(--s5) var(--s5) 0'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: meta.eyebrow,
    title: meta.title,
    meta: meta.metaItems
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--s3)',
      marginBottom: 'var(--s1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'color-mix(in srgb,var(--tg-steam) 16%,#fff)',
      color: 'color-mix(in srgb,var(--tg-steam) 70%,#000)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 16px',
      fontSize: '0.82rem',
      fontWeight: 700
    }
  }, "\u2705 \u5B9A\u6848\u7248"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--app-max)',
      margin: '0 auto',
      padding: '0 var(--s5) var(--s7)'
    }
  }, /*#__PURE__*/React.createElement(StickyNav, {
    sections: SECTIONS
  }), /*#__PURE__*/React.createElement(BasicInfoSection, null), /*#__PURE__*/React.createElement(OverviewSection, null), /*#__PURE__*/React.createElement(AllDays, null), /*#__PURE__*/React.createElement(AccommodationSection, null), /*#__PURE__*/React.createElement(PracticalSection, null), /*#__PURE__*/React.createElement(NavigationSection, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--s7)',
      paddingTop: 'var(--s5)',
      borderTop: '1px solid var(--tg-line)',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.78rem',
      lineHeight: 2.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.4rem',
      marginBottom: 'var(--s2)'
    }
  }, "\u2668\uFE0F"), /*#__PURE__*/React.createElement("p", null, "\u4E5D\u5DDE\u5927\u5206\u4E94\u5929\u56DB\u591C\u81EA\u99D5\u884C\u7A0B\u624B\u518A\uFF08\u5B9A\u6848\u7248\uFF09"), /*#__PURE__*/React.createElement("p", null, "5 \u4EBA\u5718 \xB7 2026.10.17\u201310.21 \xB7 Oita, Kyushu"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--s2)',
      fontSize: '0.72rem',
      opacity: 0.6
    }
  }, "\u5BE6\u969B\u958B\u653E\u6642\u9593\u8207\u50F9\u683C\u8ACB\u4EE5\u5404\u5B98\u65B9\u516C\u544A\u70BA\u6E96"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})();
