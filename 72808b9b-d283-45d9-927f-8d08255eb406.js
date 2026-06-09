/* @ds-bundle: {"format":3,"namespace":"ChillTravelDesignSystem_ed09f3","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ActivityCard","sourcePath":"components/cards/ActivityCard.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Chip","sourcePath":"components/chips/Chip.jsx"},{"name":"DayHeader","sourcePath":"components/day/DayHeader.jsx"},{"name":"Tip","sourcePath":"components/feedback/Tip.jsx"},{"name":"CheckItem","sourcePath":"components/forms/CheckItem.jsx"},{"name":"Hero","sourcePath":"components/hero/Hero.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"6252a006f283","components/buttons/Button.jsx":"d097638d89a1","components/cards/ActivityCard.jsx":"cf5f619f4d77","components/cards/Card.jsx":"d6750c13f123","components/chips/Chip.jsx":"16ae0bc870da","components/day/DayHeader.jsx":"1fb05f76f4cc","components/feedback/Tip.jsx":"9934ee640785","components/forms/CheckItem.jsx":"cc4aa675e628","components/hero/Hero.jsx":"6719fd00f1b0","ui_kits/travel-handbook/Handbook.jsx":"d3ed9dadead1","ui_kits/travel-handbook/Timeline.jsx":"c7d3a656993e","ui_kits/travel-handbook/data.js":"f8aeb5dce4c5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChillTravelDesignSystem_ed09f3 = window.ChillTravelDesignSystem_ed09f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — itinerary category pill (sight / food / onsen / shop / move / stay).
 * Tinted background + darker text are derived from one category hue via color-mix.
 */
const CATEGORY = {
  sight: {
    color: "var(--tg-c-sight)",
    emoji: "🗻",
    label: "景點"
  },
  food: {
    color: "var(--tg-c-food)",
    emoji: "🍜",
    label: "美食"
  },
  onsen: {
    color: "var(--tg-c-onsen)",
    emoji: "♨️",
    label: "溫泉"
  },
  shop: {
    color: "var(--tg-c-shop)",
    emoji: "🛍️",
    label: "購物"
  },
  move: {
    color: "var(--tg-c-move)",
    emoji: "🚗",
    label: "交通"
  },
  stay: {
    color: "var(--tg-c-stay)",
    emoji: "🏨",
    label: "住宿"
  }
};
function Badge({
  category = "sight",
  children,
  showEmoji = true,
  style,
  ...rest
}) {
  const c = CATEGORY[category] || CATEGORY.sight;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--f-body)",
      fontSize: "0.74rem",
      fontWeight: 700,
      lineHeight: 1,
      padding: "5px 10px",
      borderRadius: "var(--r-pill)",
      background: `color-mix(in srgb, ${c.color} 16%, #fff)`,
      color: `color-mix(in srgb, ${c.color} 70%, #000)`,
      ...style
    }
  }, rest), showEmoji && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, c.emoji), children ?? c.label);
}
Badge.CATEGORY = CATEGORY;
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — pill-shaped action button.
 * Primary = persimmon sunset fill; ghost = steam-tinted outline.
 * Styling references Chill Travel CSS custom properties (link styles.css).
 */
function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    md: {
      padding: "11px 20px",
      fontSize: "0.92rem"
    },
    sm: {
      padding: "8px 14px",
      fontSize: "0.82rem"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--f-body)",
    fontWeight: 700,
    lineHeight: 1,
    borderRadius: "var(--r-pill)",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background .15s ease, box-shadow .15s ease, color .15s ease",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--tg-sunset-d)" : "var(--tg-sunset)",
      color: "var(--text-on-accent)",
      boxShadow: "var(--sh-1)"
    },
    ghost: {
      background: hover && !disabled ? "color-mix(in srgb, var(--tg-steam) 10%, #fff)" : "transparent",
      color: "var(--tg-steam)",
      boxShadow: "inset 0 0 0 2px color-mix(in srgb, var(--tg-steam) 50%, #fff)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base warm-paper card. White fill, hairline border, soft shadow,
 * lifts on hover. The container for activity content and other panels.
 * Pass `tint` for the stay-card style (low-% category colour into white).
 */
function Card({
  tint,
  hoverable = true,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tinted = tint ? {
    background: `color-mix(in srgb, ${tint} 8%, #fff)`,
    border: `1px solid color-mix(in srgb, ${tint} 25%, #fff)`
  } : {
    background: "var(--surface-card)",
    border: "1px solid var(--border-line)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--r)",
      padding: "var(--s4)",
      boxShadow: hoverable && hover ? "var(--sh-2)" : "var(--sh-1)",
      transform: hoverable && hover ? "translateY(-2px)" : "translateY(0)",
      transition: "transform .18s ease, box-shadow .18s ease",
      ...tinted,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/chips/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — small info pill on a panel background (duration, parking, map link…).
 * Leads with a context emoji; an embedded link renders in steam green.
 */
function Chip({
  icon,
  href,
  linkText,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--f-body)",
      fontSize: "0.8rem",
      color: "var(--text-secondary)",
      background: "var(--surface-panel)",
      padding: "5px 10px",
      borderRadius: "var(--r-pill)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), children, href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: "var(--text-link)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, linkText || "地圖"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chips/Chip.jsx", error: String((e && e.message) || e) }); }

// components/day/DayHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayHeader — handwritten "Day N" + a route summary heading and one-line mood note.
 */
function DayHeader({
  day = 1,
  route,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--s3)",
      margin: "var(--s7) 0 var(--s4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-hand)",
      fontWeight: 700,
      fontSize: "2.4rem",
      lineHeight: 0.9,
      color: "var(--tg-sunset)",
      flex: "none"
    }
  }, "Day ", day), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--f-display)",
      fontWeight: 600,
      fontSize: "var(--fs-h2)",
      color: "var(--text-primary)"
    }
  }, route), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      fontSize: "0.88rem"
    }
  }, note)));
}
Object.assign(__ds_scope, { DayHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/day/DayHeader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tip — amber callout note. Leads with 💡; bold label + advice.
 */
function Tip({
  icon = "💡",
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--s2)",
      background: "color-mix(in srgb, var(--tg-amber) 14%, #fff)",
      border: "1px solid color-mix(in srgb, var(--tg-amber) 35%, #fff)",
      borderRadius: "var(--r-sm)",
      padding: "var(--s2) var(--s3)",
      fontFamily: "var(--f-body)",
      fontSize: "0.86rem",
      lineHeight: 1.6,
      color: "#8a5a14",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#6f4810"
    }
  }, label), children));
}
Object.assign(__ds_scope, { Tip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tip.jsx", error: String((e && e.message) || e) }); }

// components/cards/ActivityCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ActivityCard — a single itinerary stop: category badge + title, description,
 * info chips, and an optional tip. Composes Card, Badge, Chip and Tip.
 */
function ActivityCard({
  category = "sight",
  title,
  badgeLabel,
  description,
  chips = [],
  tip,
  tipLabel,
  children,
  ...rest
}) {
  const stayTint = category === "stay" ? "var(--tg-c-stay)" : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tint: stayTint
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s2)",
      flexWrap: "wrap",
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    category: category
  }, badgeLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-display)",
      fontWeight: 600,
      fontSize: "var(--fs-title)",
      color: "var(--text-primary)"
    }
  }, title)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      fontSize: "0.92rem",
      lineHeight: 1.6
    }
  }, description), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--s2)",
      marginTop: "var(--s3)"
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: i,
    icon: c.icon,
    href: c.href,
    linkText: c.linkText
  }, c.text))), tip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--s3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tip, {
    label: tipLabel
  }, tip)), children);
}
Object.assign(__ds_scope, { ActivityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ActivityCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CheckItem — a packing-checklist row with a custom rounded checkbox.
 * Checked state shows a steam-green box + strike-through label.
 */
function CheckItem({
  label,
  defaultChecked = false,
  checked,
  onChange,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--s3)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-line)",
      borderRadius: "var(--r-sm)",
      padding: "var(--s3) var(--s4)",
      fontFamily: "var(--f-body)",
      fontSize: "0.92rem",
      cursor: "pointer",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      width: "22px",
      height: "22px",
      flex: "none",
      border: on ? "2px solid var(--tg-steam)" : "2px solid var(--tg-route)",
      background: on ? "var(--tg-steam)" : "transparent",
      borderRadius: "7px",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      fontSize: "0.8rem",
      fontWeight: 700,
      transition: "background .15s, border-color .15s"
    }
  }, on ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      color: on ? "var(--text-secondary)" : "var(--text-primary)",
      textDecoration: on ? "line-through" : "none"
    }
  }, label));
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/hero/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero — the gradient sunset cover. Eyebrow (handwritten locale) + title +
 * meta capsule, closed by the hand-drawn hill silhouette that melts into the page.
 */
function Hero({
  eyebrow,
  title,
  meta = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-lg)",
      padding: "var(--s7) var(--s5) 0",
      background: "linear-gradient(150deg, var(--tg-sky-1) 0%, var(--tg-sky-2) 38%, var(--tg-sky-3) 100%)",
      color: "#fff",
      boxShadow: "var(--sh-2)",
      textAlign: "center",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-hand)",
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: ".5px",
      opacity: 0.95
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-display)",
      fontWeight: 700,
      fontSize: "var(--fs-hero)",
      lineHeight: 1.1,
      margin: "var(--s1) 0 var(--s3)",
      textShadow: "0 2px 12px rgba(120,60,20,.25)"
    }
  }, title), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexWrap: "wrap",
      gap: "var(--s2) var(--s4)",
      justifyContent: "center",
      fontSize: "0.92rem",
      fontWeight: 500,
      background: "rgba(255,255,255,.18)",
      backdropFilter: "blur(4px)",
      padding: "var(--s2) var(--s4)",
      borderRadius: "var(--r-pill)",
      marginBottom: "var(--s6)"
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    }
  }, m))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 90",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      marginBottom: "-2px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 90 L0 55 Q80 20 160 48 Q240 75 320 40 Q420 0 520 45 Q580 70 640 42 L640 90 Z",
    fill: "var(--tg-paper)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 50 q6 -14 12 0 M158 44 q5 -10 10 0 M470 48 q6 -14 12 0 M478 42 q5 -10 10 0",
    stroke: "var(--tg-route)",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    opacity: ".8"
  })));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/travel-handbook/Handbook.jsx
try { (() => {
// Handbook.jsx — the travel-handbook app. Composes Hero, DayHeader, Timeline,
// a budget table, packing checklist (CheckItem) and a sticky share bar.
const {
  Hero,
  DayHeader,
  Button,
  CheckItem
} = window.ChillTravelDesignSystem_ed09f3;
function SectionHeading({
  children
}) {
  return /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--f-display)",
      fontWeight: 700,
      fontSize: "1.05rem",
      color: "var(--tg-sunset-d)",
      margin: "var(--s7) 0 var(--s4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "22px",
      height: "3px",
      background: "var(--tg-sunset)",
      borderRadius: "2px"
    }
  }), children);
}
function BudgetTable({
  rows,
  total
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      background: "var(--surface-card)",
      borderRadius: "var(--r)",
      overflow: "hidden",
      boxShadow: "var(--sh-1)",
      fontSize: "0.9rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: thStyle
  }, "\u9805\u76EE"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...thStyle,
      textAlign: "right"
    }
  }, "\u91D1\u984D\uFF0F\u4EBA"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: tdStyle
  }, r.item), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, r.amount))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      borderBottom: "none",
      fontWeight: 700,
      color: "var(--tg-sunset-d)"
    }
  }, total.item), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdStyle,
      borderBottom: "none",
      textAlign: "right",
      fontWeight: 700,
      color: "var(--tg-sunset-d)",
      fontVariantNumeric: "tabular-nums"
    }
  }, total.amount))));
}
const thStyle = {
  padding: "var(--s3) var(--s4)",
  textAlign: "left",
  borderBottom: "1px solid var(--border-line)",
  background: "var(--surface-panel)",
  fontWeight: 700,
  fontSize: "0.82rem",
  color: "var(--text-secondary)"
};
const tdStyle = {
  padding: "var(--s3) var(--s4)",
  textAlign: "left",
  borderBottom: "1px solid var(--border-line)"
};
function DayTabs({
  days,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s2)",
      margin: "var(--s5) 0 0"
    }
  }, days.map(d => {
    const on = d.day === active;
    return /*#__PURE__*/React.createElement("button", {
      key: d.day,
      onClick: () => onSelect(d.day),
      style: {
        flex: 1,
        padding: "10px 12px",
        borderRadius: "var(--r-pill)",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--f-display)",
        fontWeight: 700,
        fontSize: "0.9rem",
        background: on ? "var(--tg-sunset)" : "var(--surface-card)",
        color: on ? "#fff" : "var(--text-secondary)",
        boxShadow: on ? "var(--sh-1)" : "inset 0 0 0 1px var(--border-line)",
        transition: "background .15s"
      }
    }, "Day ", d.day);
  }));
}
function Toast({
  show,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: "92px",
      transform: `translateX(-50%) translateY(${show ? "0" : "16px"})`,
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      background: "var(--tg-ink)",
      color: "#fff",
      fontSize: "0.86rem",
      fontWeight: 500,
      padding: "10px 18px",
      borderRadius: "var(--r-pill)",
      boxShadow: "var(--sh-2)",
      transition: "opacity .25s ease, transform .25s ease",
      zIndex: 50
    }
  }, children);
}
function Handbook() {
  const data = window.HANDBOOK;
  const [activeDay, setActiveDay] = React.useState(1);
  const [packing, setPacking] = React.useState(data.packing.map(p => p.checked));
  const [toast, setToast] = React.useState(false);
  const day = data.days.find(d => d.day === activeDay);
  const share = () => {
    setToast(true);
    clearTimeout(window.__t);
    window.__t = setTimeout(() => setToast(false), 1800);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--app-max)",
      margin: "0 auto",
      padding: "var(--s4) var(--s4) 120px"
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: data.cover.eyebrow,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, data.cover.title[0], /*#__PURE__*/React.createElement("br", null), data.cover.title[1]),
    meta: data.cover.meta
  }), /*#__PURE__*/React.createElement(DayTabs, {
    days: data.days,
    active: activeDay,
    onSelect: setActiveDay
  }), /*#__PURE__*/React.createElement(DayHeader, {
    day: day.day,
    route: day.route,
    note: day.note
  }), /*#__PURE__*/React.createElement(window.Timeline, {
    stops: day.stops
  }), /*#__PURE__*/React.createElement(SectionHeading, null, "\u9810\u7B97\u5C0F\u8868 Budget"), /*#__PURE__*/React.createElement(BudgetTable, {
    rows: data.budget,
    total: data.budgetTotal
  }), /*#__PURE__*/React.createElement(SectionHeading, null, "\u6253\u5305\u6E05\u55AE Checklist"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--s2)"
    }
  }, data.packing.map((p, i) => /*#__PURE__*/React.createElement(CheckItem, {
    key: i,
    label: p.label,
    checked: packing[i],
    onChange: v => setPacking(prev => prev.map((x, j) => j === i ? v : x))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      gap: "var(--s3)",
      padding: "var(--s3) var(--s4)",
      background: "color-mix(in srgb, var(--tg-paper) 86%, transparent)",
      backdropFilter: "blur(8px)",
      borderTop: "1px solid var(--border-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--s3)",
      width: "100%",
      maxWidth: "var(--app-max)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "\uD83D\uDCE4",
    onClick: share,
    style: {
      flex: 1,
      justifyContent: "center"
    }
  }, "\u5206\u4EAB\u5230 LINE"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "\uFF0B",
    onClick: share,
    style: {
      justifyContent: "center"
    }
  }, "\u52A0\u666F\u9EDE"))), /*#__PURE__*/React.createElement(Toast, {
    show: toast
  }, "\u5DF2\u8907\u88FD\u624B\u518A\u9023\u7D50 \u2726"));
}
window.Handbook = Handbook;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/travel-handbook/Handbook.jsx", error: String((e && e.message) || e) }); }

// ui_kits/travel-handbook/Timeline.jsx
try { (() => {
// Timeline.jsx — the signature hand-drawn timeline.
// A dashed rail threads circular category nodes; each row pairs a
// handwritten time + node with an ActivityCard. Composes DS primitives.
const {
  ActivityCard,
  Badge
} = window.ChillTravelDesignSystem_ed09f3;
const CAT_EMOJI = {
  sight: "🗻",
  food: "🍜",
  onsen: "♨️",
  shop: "🛍️",
  move: "🚗",
  stay: "🏨"
};
function TimelineStop({
  stop,
  first,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "64px 1fr",
      gap: "var(--s3)",
      paddingBottom: "var(--s5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "31px",
      top: first ? "26px" : 0,
      bottom: last ? "calc(100% - 26px)" : 0,
      borderLeft: "2px dashed var(--tg-route)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-hand)",
      fontWeight: 700,
      fontSize: "1.15rem",
      color: "var(--text-secondary)"
    }
  }, stop.time), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 2,
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      fontSize: "1.1rem",
      background: "var(--surface-card)",
      boxShadow: `0 0 0 3px var(--tg-paper), 0 0 0 5px var(--tg-c-${stop.category})`
    }
  }, CAT_EMOJI[stop.category])), /*#__PURE__*/React.createElement(ActivityCard, {
    category: stop.category,
    title: stop.title,
    description: stop.description,
    chips: stop.chips,
    tip: stop.tip,
    tipLabel: stop.tipLabel
  }));
}
function Timeline({
  stops
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement(TimelineStop, {
    key: i,
    stop: s,
    first: i === 0,
    last: i === stops.length - 1
  })));
}
window.Timeline = Timeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/travel-handbook/Timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/travel-handbook/data.js
try { (() => {
// Sample itinerary data for the travel-handbook UI kit.
// Mirrors the reference "大分慢遊 · 溫泉小旅" (Oita, Kyushu).
window.HANDBOOK = {
  cover: {
    eyebrow: "Oita, Kyushu",
    title: ["大分慢遊", "溫泉小旅"],
    meta: ["🗓️ 5天4夜", "🚗 自駕", "👥 5人"]
  },
  days: [{
    day: 1,
    route: "由布院 → 金鱗湖 → 溫泉宿",
    note: "不趕路的一天,街道散策配溫泉",
    stops: [{
      time: "10:00",
      category: "shop",
      title: "湯之坪街道",
      description: "由布院車站走過去的主街,小店、可樂餅、布丁邊走邊吃。",
      chips: [{
        icon: "⏱️",
        text: "約 2 小時"
      }, {
        icon: "🅿️",
        text: "站前停車場"
      }, {
        icon: "📍",
        href: "#",
        linkText: "地圖"
      }],
      tip: "早上 11 點前人少,光線也好拍。",
      tipLabel: "小提醒:"
    }, {
      time: "12:30",
      category: "food",
      title: "豐後牛午餐",
      description: "在地豐後牛丼或燒肉定食,份量足、慢慢吃。",
      chips: [{
        icon: "💰",
        text: "¥2,000／人"
      }, {
        icon: "🕐",
        text: "不需預約"
      }]
    }, {
      time: "14:30",
      category: "sight",
      title: "金鱗湖",
      description: "湖面冒煙、倒映由布岳,繞一圈約 20 分鐘,旁邊有咖啡店。",
      chips: [{
        icon: "⏱️",
        text: "約 1 小時"
      }, {
        icon: "📍",
        href: "#",
        linkText: "地圖"
      }]
    }, {
      time: "17:00",
      category: "stay",
      title: "由布院溫泉宿",
      description: "附半露天風呂,晚餐會席料理。Check-in 後先泡一輪再吃飯。",
      chips: [{
        icon: "🛏️",
        text: "和室 ×2"
      }, {
        icon: "♨️",
        text: "24h 溫泉"
      }, {
        icon: "🍶",
        text: "含晚餐"
      }]
    }]
  }, {
    day: 2,
    route: "別府地獄 → 海地獄 → 竹瓦溫泉",
    note: "蒸氣與海色的一天,泡到天黑",
    stops: [{
      time: "09:30",
      category: "move",
      title: "由布院 → 別府",
      description: "山路自駕約 50 分鐘,沿途展望台可停車拍湯煙。",
      chips: [{
        icon: "🚗",
        text: "約 50 分"
      }, {
        icon: "⛽",
        text: "別府市區加油"
      }]
    }, {
      time: "10:30",
      category: "sight",
      title: "海地獄",
      description: "鈷藍色的溫泉池,蒸氣騰騰,園內有足湯與溫室。",
      chips: [{
        icon: "💰",
        text: "¥450／人"
      }, {
        icon: "⏱️",
        text: "約 1.5 小時"
      }, {
        icon: "📍",
        href: "#",
        linkText: "地圖"
      }],
      tip: "地獄套票可一次逛七處,愛泡湯的人很值。",
      tipLabel: "划算:"
    }, {
      time: "13:00",
      category: "food",
      title: "地獄蒸料理",
      description: "用溫泉蒸氣蒸的蔬菜海鮮,清爽原味,排隊但值得。",
      chips: [{
        icon: "💰",
        text: "¥1,800／人"
      }, {
        icon: "🕝",
        text: "建議避開正午"
      }]
    }, {
      time: "16:00",
      category: "onsen",
      title: "竹瓦溫泉",
      description: "百年木造老湯屋,招牌砂湯把全身埋進溫熱黑砂裡。",
      chips: [{
        icon: "💰",
        text: "砂湯 ¥1,500"
      }, {
        icon: "🧖",
        text: "毛巾另租"
      }, {
        icon: "📍",
        href: "#",
        linkText: "地圖"
      }]
    }]
  }],
  budget: [{
    item: "住宿(4 晚)",
    amount: "¥38,000"
  }, {
    item: "租車 + 油資",
    amount: "¥9,500"
  }, {
    item: "餐飲",
    amount: "¥18,000"
  }],
  budgetTotal: {
    item: "合計",
    amount: "¥65,500"
  },
  packing: [{
    label: "護照 / 駕照日文譯本",
    checked: true
  }, {
    label: "泡湯小毛巾",
    checked: false
  }, {
    label: "充電器 / 行動電源",
    checked: false
  }, {
    label: "薄外套(早晚溫差大)",
    checked: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/travel-handbook/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ActivityCard = __ds_scope.ActivityCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.DayHeader = __ds_scope.DayHeader;

__ds_ns.Tip = __ds_scope.Tip;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.Hero = __ds_scope.Hero;

})();
