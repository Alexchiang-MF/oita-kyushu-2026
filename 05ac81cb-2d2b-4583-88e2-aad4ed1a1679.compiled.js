(function () {
// handbook-components.jsx — shared UI components for the Oita handbook

const {
  Badge,
  ActivityCard,
  Chip,
  Tip,
  Card
} = window.ChillTravelDesignSystem_ed09f3;
const CAT_EMOJI = {
  sight: '🗻',
  food: '🍜',
  onsen: '♨️',
  shop: '🛍️',
  move: '🚗',
  stay: '🏨'
};
const CAT_COLOR = {
  sight: 'var(--tg-c-sight)',
  food: 'var(--tg-c-food)',
  onsen: 'var(--tg-c-onsen)',
  shop: 'var(--tg-c-shop)',
  move: 'var(--tg-c-move)',
  stay: 'var(--tg-c-stay)'
};
function TimelineStop({
  time,
  endTime,
  category,
  title,
  desc,
  chips = [],
  tip,
  tipLabel,
  isLast
}) {
  const color = CAT_COLOR[category] || CAT_COLOR.sight;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--f-hand)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--tg-sunset)',
      width: '52px',
      textAlign: 'right',
      flexShrink: 0,
      paddingTop: '8px',
      lineHeight: 1.2
    }
  }, time, endTime && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      opacity: 0.65
    }
  }, "\u2193", endTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
      width: '30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: '#fff',
      boxShadow: `0 0 0 3px var(--tg-paper), 0 0 0 5px ${color}`,
      display: 'grid',
      placeItems: 'center',
      fontSize: '13px',
      marginTop: '8px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 1
    }
  }, CAT_EMOJI[category]), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      flex: 1,
      minHeight: '16px',
      borderLeft: '2px dashed var(--tg-route)',
      marginTop: '4px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: '10px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ActivityCard, {
    category: category,
    title: title,
    description: desc,
    chips: chips,
    tip: tip,
    tipLabel: tipLabel
  })));
}
function Timeline({
  stops
}) {
  return /*#__PURE__*/React.createElement("div", null, stops.map((s, i) => /*#__PURE__*/React.createElement(TimelineStop, {
    key: i,
    time: s.time,
    endTime: s.endTime,
    category: s.category,
    title: s.title,
    desc: s.desc,
    chips: s.chips || [],
    tip: s.tip,
    tipLabel: s.tipLabel,
    isLast: i === stops.length - 1
  })));
}
function SectionTitle({
  emoji,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--s3)',
      margin: 'var(--s7) 0 var(--s4)',
      paddingTop: 'var(--s2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '4px',
      height: '28px',
      flexShrink: 0,
      background: 'linear-gradient(180deg, var(--tg-sunset) 0%, var(--tg-amber) 100%)',
      borderRadius: '2px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--f-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, emoji && /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: '6px'
    }
  }, emoji), title));
}
function InfoBox({
  type = 'info',
  title,
  children
}) {
  const cfg = {
    info: {
      bg: 'color-mix(in srgb,var(--tg-steam) 12%,#fff)',
      border: 'color-mix(in srgb,var(--tg-steam) 25%,#fff)',
      color: '#1a6660'
    },
    warn: {
      bg: 'color-mix(in srgb,#d94f4f 10%,#fff)',
      border: 'color-mix(in srgb,#d94f4f 28%,#fff)',
      color: '#8b2020'
    },
    highlight: {
      bg: 'color-mix(in srgb,var(--tg-amber) 13%,#fff)',
      border: 'color-mix(in srgb,var(--tg-amber) 30%,#fff)',
      color: '#7a4f10'
    }
  };
  const s = cfg[type] || cfg.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: s.bg,
      border: `1px solid ${s.border}`,
      borderRadius: 'var(--r-sm)',
      padding: 'var(--s3) var(--s4)',
      margin: 'var(--s3) 0',
      fontSize: '0.87rem',
      lineHeight: 1.7,
      color: s.color
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '4px'
    }
  }, title), /*#__PURE__*/React.createElement("div", null, children));
}
function FlightGrid({
  data
}) {
  const rows = [{
    label: '去程班機',
    value: data.outbound
  }, {
    label: '回程班機',
    value: data.inbound
  }, {
    label: '同行人數',
    value: data.groupSize
  }, {
    label: '同行組成',
    value: data.groupComp
  }, {
    label: '租車車型',
    value: data.car
  }, {
    label: '行李規格',
    value: data.luggage
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--s2) var(--s4)',
      background: 'color-mix(in srgb,var(--tg-steam) 8%,#fff)',
      border: '1px solid color-mix(in srgb,var(--tg-steam) 22%,#fff)',
      borderRadius: 'var(--r)',
      padding: 'var(--s4)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-secondary)',
      marginBottom: '2px'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.87rem',
      fontWeight: 600,
      color: 'var(--text-primary)',
      lineHeight: 1.4
    }
  }, r.value))));
}
function OverviewRow({
  item
}) {
  const palettes = ['#2F9E94', '#E08A3C', '#B5577E', '#5C7CB5', '#7177CB'];
  const c = palettes[(item.day - 1) % palettes.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s3) var(--s4)',
      borderBottom: '1px solid var(--tg-line)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `color-mix(in srgb,${c} 15%,#fff)`,
      color: `color-mix(in srgb,${c} 70%,#000)`,
      borderRadius: 'var(--r-pill)',
      padding: '4px 10px',
      fontWeight: 700,
      fontSize: '0.75rem',
      flexShrink: 0,
      textAlign: 'center',
      lineHeight: 1.5,
      whiteSpace: 'nowrap'
    }
  }, "Day ", item.day, /*#__PURE__*/React.createElement("br", null), item.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.9rem',
      color: 'var(--text-primary)',
      lineHeight: 1.5
    }
  }, item.main), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      marginTop: '3px',
      flexWrap: 'wrap'
    }
  }, item.stay !== '—' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)'
    }
  }, "\uD83C\uDFE8 ", item.stay), item.dinner !== '—' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)'
    }
  }, "\uD83C\uDF7D\uFE0F ", item.dinner))));
}
function AccomCard({
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s3) var(--s4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-line)',
      borderRadius: 'var(--r)',
      boxShadow: 'var(--sh-1)',
      marginBottom: 'var(--s3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'color-mix(in srgb,var(--tg-c-stay) 15%,#fff)',
      color: 'color-mix(in srgb,var(--tg-c-stay) 65%,#000)',
      borderRadius: 'var(--r-pill)',
      padding: '4px 10px',
      fontWeight: 700,
      fontSize: '0.73rem',
      flexShrink: 0,
      textAlign: 'center',
      lineHeight: 1.5,
      minWidth: '58px'
    }
  }, "\u7B2C ", item.night, " \u665A", /*#__PURE__*/React.createElement("br", null), item.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: '0.95rem',
      color: 'var(--text-primary)'
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.77rem',
      color: 'var(--text-secondary)',
      margin: '2px 0'
    }
  }, item.nameJa), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)'
    }
  }, item.note), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--tg-steam)',
      marginTop: '4px'
    }
  }, "\uD83D\uDECF\uFE0F ", item.rooms), item.tel !== '—' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      marginTop: '2px'
    }
  }, "\uD83D\uDCDE ", item.tel)), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'color-mix(in srgb,var(--tg-steam) 14%,#fff)',
      color: 'color-mix(in srgb,var(--tg-steam) 65%,#000)',
      borderRadius: 'var(--r-pill)',
      padding: '3px 10px',
      fontSize: '0.76rem',
      fontWeight: 700
    }
  }, item.status)));
}
function NavRow({
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      padding: 'var(--s3) var(--s4)',
      borderBottom: '1px solid var(--tg-line)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'color-mix(in srgb,var(--tg-c-move) 14%,#fff)',
      color: 'color-mix(in srgb,var(--tg-c-move) 65%,#000)',
      borderRadius: 'var(--r-pill)',
      padding: '3px 8px',
      fontWeight: 700,
      fontSize: '0.72rem',
      flexShrink: 0,
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontSize: '0.87rem'
    }
  }, item.nameJa), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: '0.75rem',
      marginTop: '2px',
      lineHeight: 1.5
    }
  }, item.address), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s3)',
      marginTop: '3px',
      flexWrap: 'wrap'
    }
  }, item.tel !== '—' && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--tg-steam)',
      fontWeight: 600,
      fontSize: '0.75rem'
    }
  }, item.tel), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: '0.75rem'
    }
  }, item.note))));
}
function StickyNav({
  sections
}) {
  const [active, setActive] = React.useState(sections[0]?.id || '');
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    }), {
      rootMargin: '-20% 0px -70% 0px'
    });
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 60,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(253,247,239,0.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--tg-line)',
      padding: 'var(--s2) 0',
      margin: '0 calc(-1 * var(--s5))',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s2)',
      padding: '0 var(--s5)',
      minWidth: 'max-content'
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => go(s.id),
    style: {
      fontFamily: 'var(--f-body)',
      fontSize: '0.78rem',
      fontWeight: active === s.id ? 700 : 500,
      color: active === s.id ? '#fff' : 'var(--text-secondary)',
      background: active === s.id ? 'var(--tg-sunset)' : 'transparent',
      border: active === s.id ? 'none' : '1px solid var(--tg-line)',
      borderRadius: 'var(--r-pill)',
      padding: '5px 12px',
      cursor: 'pointer',
      transition: 'all .18s ease',
      whiteSpace: 'nowrap'
    }
  }, s.label))));
}
Object.assign(window, {
  Timeline,
  TimelineStop,
  SectionTitle,
  InfoBox,
  FlightGrid,
  OverviewRow,
  AccomCard,
  NavRow,
  StickyNav
});
})();
