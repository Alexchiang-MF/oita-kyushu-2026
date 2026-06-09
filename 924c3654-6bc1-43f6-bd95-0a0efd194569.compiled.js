(function () {
// handbook-days.jsx — 逐日行程 section

const {
  DayHeader
} = window.ChillTravelDesignSystem_ed09f3;
const {
  Timeline,
  SectionTitle,
  InfoBox
} = window;
const {
  days
} = window.HandbookData;
function DaySection({
  d
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: `day-${d.day}`,
    "data-screen-label": `Day ${d.day}`,
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(DayHeader, {
    day: d.day,
    route: d.route,
    note: `${d.date} · ${d.note}`,
    style: d.highlight ? {
      background: 'color-mix(in srgb,var(--tg-sunset) 5%,transparent)',
      borderRadius: 'var(--r)',
      padding: 'var(--s3)'
    } : {}
  }), /*#__PURE__*/React.createElement(Timeline, {
    stops: d.stops
  }), d.notes && d.notes.map((n, i) => /*#__PURE__*/React.createElement(InfoBox, {
    key: i,
    type: n.type,
    title: n.title
  }, n.text)));
}
function AllDays() {
  return /*#__PURE__*/React.createElement("div", {
    id: "section-days",
    style: {
      scrollMarginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    emoji: "\uD83D\uDDD3\uFE0F",
    title: "\u9010\u65E5\u884C\u7A0B"
  }), days.map(d => /*#__PURE__*/React.createElement(DaySection, {
    key: d.day,
    d: d
  })));
}
Object.assign(window, {
  AllDays,
  DaySection
});
})();
