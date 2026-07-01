import { slides } from "../data/slides.js";
import { renderVisual } from "./visuals.js";

const state = {
  index: 0,
  step: 1,
  overview: false
};

const app = document.createElement("main");
app.className = "presentation-shell";

function visible(html, step, at = 1) {
  return `<div class="build ${step >= at ? "is-visible" : ""}">${html}</div>`;
}

function meta(slide, index) {
  return `
    <div class="slide-meta">
      <span>${slide.section}</span>
      <span>${String(index + 1).padStart(2, "0")} / ${slides.length}</span>
    </div>
  `;
}

function renderDetails(details) {
  if (!details?.items?.length) return "";
  const items = details.items.map((item) => `<li>${item}</li>`).join("");
  return `
    <aside class="copy-panel">
      <small>${details.label || "Full source copy"}</small>
      <strong>${details.title || "Presenter copy"}</strong>
      <ul>${items}</ul>
    </aside>
  `;
}

function derivedDetails(slide) {
  const items = [];
  if (slide.statement) items.push(slide.statement);
  if (slide.visual?.items?.length) {
    slide.visual.items.forEach((item) => {
      if (typeof item === "string") items.push(item);
      if (item?.title || item?.text) items.push([item.eyebrow, item.title, item.text].filter(Boolean).join(": "));
      if (item?.name || item?.role) items.push([item.name, item.role].filter(Boolean).join(": "));
      if (item?.caption) items.push(item.caption);
    });
  }
  if (slide.visual?.caption) items.push(slide.visual.caption);
  if (slide.visual?.insight) items.push(slide.visual.insight);
  if (slide.visual?.note) items.push(slide.visual.note);
  if (slide.visual?.summary) items.push(slide.visual.summary);
  if (slide.visual?.points?.length) items.push(...slide.visual.points);
  if (slide.tags?.length) items.push(`Tags: ${slide.tags.join(", ")}`);
  if (!items.length) return null;
  return { label: "Page copy", title: "Complete on-page copy", items };
}

function renderSlide(slide, index, forcedStep = null) {
  const step = forcedStep ?? state.step;
  const tags = (slide.tags || []).map((tag) => `<span>${tag}</span>`).join("");
  const body = [
    slide.kicker ? `<p class="kicker">${slide.kicker}</p>` : "",
    `<h1>${slide.title}</h1>`,
    slide.statement ? `<p class="statement">${slide.statement}</p>` : "",
    slide.visual ? renderVisual(slide.visual, step) : "",
    renderDetails(slide.details || derivedDetails(slide)),
    slide.points?.length ? `<div class="point-grid">${slide.points.map((p, i) => visible(`<article><strong>${p.label}</strong><p>${p.text}</p></article>`, step, i + 1)).join("")}</div>` : "",
    slide.quote ? visible(`<blockquote>${slide.quote}</blockquote>`, step, 1) : "",
    tags ? `<div class="tag-row">${tags}</div>` : "",
    slide.note ? `<p class="confirmation-note">${slide.note}</p>` : "",
    `<div class="source-pill">${slide.source}</div>`
  ].join("");

  return `
    <section class="slide ${slide.tone || "light"} ${slide.layout || ""}">
      ${meta(slide, index)}
      <div class="brand-mark"><img src="${new URL("../assets/Filament logo.png", import.meta.url).href}" alt="Filament" /></div>
      <div class="slide-content">${body}</div>
    </section>
  `;
}

function renderOverview() {
  return `
    <section class="overview-panel">
      <div class="overview-head">
        <div>
          <p class="kicker">Section navigation</p>
          <h1>Presentation Overview</h1>
        </div>
        <button class="text-button" data-action="overview">Return</button>
      </div>
      <div class="thumb-grid">
        ${slides.map((slide, i) => `
          <button class="thumb ${i === state.index ? "active" : ""}" data-jump="${i}">
            <span>${String(i + 1).padStart(2, "0")}</span>
            <strong>${slide.title}</strong>
            <small>${slide.section}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPrintDeck() {
  return `<div class="print-deck">${slides.map((slide, i) => renderSlide(slide, i, slide.steps || 1)).join("")}</div>`;
}

function renderChrome() {
  const progress = ((state.index + state.step / Math.max(slides[state.index].steps || 1, 1)) / slides.length) * 100;
  return `
    <div class="deck-chrome">
      <button class="icon-button" title="Previous" data-action="prev">‹</button>
      <button class="icon-button" title="Next" data-action="next">›</button>
      <button class="icon-button" title="Overview" data-action="overview">▦</button>
      <button class="icon-button" title="Fullscreen" data-action="fullscreen">⛶</button>
    </div>
    <div class="progress-track"><div style="width:${progress}%"></div></div>
  `;
}

function render() {
  app.innerHTML = `
    <div class="stage">
      <div class="slide-frame">
        ${state.overview ? renderOverview() : renderSlide(slides[state.index], state.index)}
      </div>
    </div>
    ${renderPrintDeck()}
    ${renderChrome()}
  `;
}

function next() {
  const maxStep = slides[state.index].steps || 1;
  if (state.step < maxStep) {
    state.step += 1;
  } else if (state.index < slides.length - 1) {
    state.index += 1;
    state.step = 1;
  }
  render();
}

function prev() {
  if (state.step > 1) {
    state.step -= 1;
  } else if (state.index > 0) {
    state.index -= 1;
    state.step = slides[state.index].steps || 1;
  }
  render();
}

function jump(i) {
  state.index = Math.max(0, Math.min(slides.length - 1, i));
  state.step = 1;
  state.overview = false;
  render();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function bind() {
  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", " ", "PageDown", "Enter"].includes(event.key)) {
      event.preventDefault();
      next();
    }
    if (["ArrowLeft", "Backspace", "PageUp"].includes(event.key)) {
      event.preventDefault();
      prev();
    }
    if (event.key.toLowerCase() === "o") {
      state.overview = !state.overview;
      render();
    }
    if (event.key.toLowerCase() === "f") {
      toggleFullscreen();
    }
    if (event.key === "Escape" && state.overview) {
      state.overview = false;
      render();
    }
  });

  app.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    const jumpTo = event.target.closest("[data-jump]")?.dataset.jump;
    if (jumpTo) jump(Number(jumpTo));
    if (action === "next") next();
    if (action === "prev") prev();
    if (action === "overview") {
      state.overview = !state.overview;
      render();
    }
    if (action === "fullscreen") toggleFullscreen();
  });
}

export function createDeck(root) {
  root.appendChild(app);
  render();
  bind();
}
