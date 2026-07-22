import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/MarginRail.tsx
var relocateScript = `
function relocateFootnotes() {
  const footnotes = document.querySelector(".markdown-preview-view .footnotes")
  const rail = document.querySelector(".margin-rail")
  if (footnotes && rail && !rail.contains(footnotes)) {
    rail.appendChild(footnotes)
  }
}
document.addEventListener("nav", relocateFootnotes)
document.addEventListener("render", relocateFootnotes)
`;
var MarginRail_default = (() => {
  const MarginRail = ({ fileData }) => {
    if (!fileData.frontmatter?.type) return null;
    return /* @__PURE__ */ u2("div", { class: "margin-rail" });
  };
  MarginRail.afterDOMLoaded = relocateScript;
  return MarginRail;
});

// src/components/PencilFilter.tsx
var PencilFilter = () => {
  return /* @__PURE__ */ u2("svg", { width: "0", height: "0", style: { position: "absolute" }, children: /* @__PURE__ */ u2("defs", { children: /* @__PURE__ */ u2("filter", { id: "pencil", x: "-40%", y: "-40%", width: "180%", height: "180%", children: [
    /* @__PURE__ */ u2("feTurbulence", { type: "fractalNoise", baseFrequency: "0.4 0.9", numOctaves: 2, seed: 3, result: "grain" }),
    /* @__PURE__ */ u2("feColorMatrix", { in: "grain", type: "matrix", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.6 -0.35", result: "grainA" }),
    /* @__PURE__ */ u2("feComposite", { in: "SourceGraphic", in2: "grainA", operator: "in", result: "tex1" }),
    /* @__PURE__ */ u2("feTurbulence", { type: "fractalNoise", baseFrequency: "0.02", numOctaves: 2, seed: 9, result: "wob" }),
    /* @__PURE__ */ u2("feDisplacementMap", { in: "tex1", in2: "wob", scale: 2.5 })
  ] }) }) });
};
var PencilFilter_default = (() => PencilFilter);

export { MarginRail_default as MarginRail, PencilFilter_default as PencilFilter };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map