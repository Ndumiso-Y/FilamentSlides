const assetMap = {
  "source-diagrams/poogi-performance-source.png": new URL("../assets/source-diagrams/poogi-performance-source.png", import.meta.url).href,
  "source-diagrams/chasm-source.png": new URL("../assets/source-diagrams/chasm-source.png", import.meta.url).href,
  "reference-letters/reference-letters-right-side-up.pdf": new URL("../assets/reference-letters/reference-letters-right-side-up.pdf", import.meta.url).href,
  "team/monique.png": new URL("../assets/team/monique-white-background.png", import.meta.url).href,
  "team/vincent.png": new URL("../assets/team/vincent-white-background.png", import.meta.url).href,
  "team/sadha-govender.jpg": new URL("../assets/team/sadha-white-background.png", import.meta.url).href,
  "team/marc-corcoran.jpg": new URL("../assets/team/marc-white-background.png", import.meta.url).href,
  "team/zweli.png": new URL("../assets/team/zweli-white-background.png", import.meta.url).href,
  "team/lefu.png": new URL("../assets/team/lefu-white-background.png", import.meta.url).href,
  "team/dr-rudy.jpg": new URL("../assets/team/dr-rudy-white-background.png", import.meta.url).href,
  "team/mxolisi-kobus.jpg": new URL("../assets/team/mxolisi-white-background.png", import.meta.url).href,
  "partners/barloworld.jpg": new URL("../assets/partners/barloworld.jpg", import.meta.url).href,
  "partners/chasm-bridge.png": new URL("../assets/partners/chasm-bridge.png", import.meta.url).href
};

const asset = (path) => assetMap[path] || "";

function is(step, at) {
  return step >= at ? "is-on" : "";
}

function buildList(items, step, start = 1) {
  return items.map((item, index) => `<li class="${is(step, start + index)}">${item}</li>`).join("");
}

function lanes(items, step) {
  return `<div class="lane-diagram">${items.map((item, i) => `<div class="${is(step, i + 1)}"><span>${i + 1}</span><strong>${item}</strong></div>`).join("")}</div>`;
}

function compare(items, step) {
  return `<div class="compare-board">${items.map((item, i) => `<article class="${is(step, i + 1)}"><small>${item.eyebrow}</small><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}</div>`;
}

function timeline(items, step) {
  return `<div class="timeline">${items.map((item, i) => `<article class="${is(step, i + 1)}"><span>${item.phase}</span><strong>${item.title}</strong><p>${item.text}</p></article>`).join("")}</div>`;
}

function matrix(items, step) {
  return `<div class="capability-matrix">${items.map((item, i) => `<article class="${is(step, i + 1)}"><strong>${item.name}</strong><span>${item.role}</span>${item.text ? `<p>${item.text}</p>` : ""}</article>`).join("")}</div>`;
}

function partnerMatrix(visual, step) {
  const logo = visual.logo ? `<div class="partner-logo-strip ${is(step, 1)}"><small>${visual.logo.label}</small><img src="${asset(visual.logo.src)}" alt="${visual.logo.alt || visual.logo.label}" /></div>` : "";
  return `<div class="partner-matrix-visual">${logo}${matrix(visual.items, step)}</div>`;
}

function sourcePlate(visual, step) {
  return `<div class="source-plate ${visual.orientation || "portrait"} ${is(step, 1)}">
    <figure><img src="${asset(visual.src)}" alt="${visual.caption}" /><figcaption>${visual.caption}</figcaption></figure>
    <aside class="${is(step, 2)}"><small>${visual.label || "Source visual"}</small><strong>${visual.insight || "Source evidence retained."}</strong>${visual.note ? `<p>${visual.note}</p>` : ""}</aside>
  </div>`;
}

function magnifier(visual, step) {
  return `<div class="magnifier-layout ${is(step, 1)}">
    <figure><img src="${asset(visual.src)}" alt="${visual.caption}" /><figcaption>${visual.caption}</figcaption></figure>
    <div class="magnifier-callout ${is(step, 2)}"><span></span><small>${visual.label || "What to notice"}</small><strong>${visual.insight}</strong><p>${visual.note || "Source visual - values not independently extracted."}</p></div>
  </div>`;
}

function profile(visual, step) {
  const badge = visual.badge
    ? `<div class="profile-badge ${is(step, 2)}"><img src="${asset(visual.badge.src)}" alt="${visual.badge.alt}" />${visual.badge.label ? `<span>${visual.badge.label}</span>` : ""}</div>`
    : "";
  return `<div class="profile-layout">
    <div class="profile-photo ${is(step, 1)}"><img src="${asset(visual.src)}" alt="${visual.name}" /></div>
    <article class="${is(step, 2)}">${badge}<small>${visual.role}</small><h2>${visual.name}</h2><p>${visual.summary}</p><ul>${buildList(visual.points || [], step, 3)}</ul></article>
  </div>`;
}

function evidenceWall(visual, step) {
  return `<div class="evidence-wall">
    <div class="evidence-callout ${is(step, 1)}"><small>${visual.label || "Source evidence"}</small><strong>${visual.insight}</strong><p>${visual.note || "Original source documents are shown directly."}</p></div>
    <div class="evidence-docs">${visual.items.map((item, i) => {
      const url = asset(item.src);
      const media = item.kind === "pdf"
        ? `<div class="evidence-zoom pdf-frame"><iframe src="${url}#page=${item.page || 1}&view=FitV" title="${item.caption}"></iframe><a href="${url}" target="_blank" rel="noreferrer">Open full PDF</a></div>`
        : `<a class="evidence-zoom" href="${url}" target="_blank" rel="noreferrer"><img src="${url}" alt="${item.caption}" /><span>Open full size</span></a>`;
      return `<figure class="${item.kind === "pdf" ? "pdf-evidence" : ""} ${is(step, i + 2)}">${media}<figcaption>${item.caption}</figcaption></figure>`;
    }).join("")}</div>
  </div>`;
}

function engineeringDieselFlow(step) {
  return `<div class="engineering-flow diesel-study">
    <div class="flow-zone surface">Surface</div>
    <div class="flow-zone underground">Underground</div>
    <div class="flow-node oval fuel diesel ${is(step, 1)}">Diesel</div>
    <div class="flow-node oval fuel oil ${is(step, 1)}">Oil</div>
    <div class="flow-node bay ${is(step, 1)}">Diesel Bay</div>
    <div class="flow-node workshop ${is(step, 1)}">Drill Rig Eng. W/shop</div>
    <div class="flow-node uv ${is(step, 1)}">Utility Vehicle</div>
    <div class="flow-node central ${is(step, 1)}">Central Fueling Location</div>
    <div class="flow-node mine ${is(step, 1)}">Mine Workings</div>
    <div class="flow-arrow drums ${is(step, 1)}">Drums</div>
    <div class="flow-arrow cassettes ${is(step, 1)}">Cassettes</div>
    <div class="flow-arrow refuel ${is(step, 1)}">Re-fuel diesel cassettes</div>
    <div class="flow-arrow refueled ${is(step, 1)}">Re-fueled cassette</div>
    <aside class="flow-callout bay-issues ${is(step, 2)}"><strong>Diesel bay losses</strong><span>Arrival time</span><span>Reporting procedure</span><span>Traffic / queuing</span><span>Contaminated containers</span><span>D/Bay used as P/Bay at E.O.S.</span></aside>
    <aside class="flow-callout uv-issues ${is(step, 3)}"><strong>Utility vehicle constraint</strong><span>1 UV</span><span>1 operator</span><span>No operator on A/S and N/S</span><span>Under utilisation of UV</span><span>Communication: no radio</span></aside>
    <aside class="flow-callout section-gap ${is(step, 4)}"><strong>Execution gap</strong><span>UV never goes to the section</span></aside>
  </div>`;
}

function tmmReadinessModel(step) {
  const systems = [
    ["Maintenance", "PM compliance, field service, defects, backlog"],
    ["Infrastructure", "Workshops, power, ventilation, dewatering, roads"],
    ["Supply chain", "Spares, tyres, lubricants, rotables, lead times"],
    ["Compliance", "TMM COP, inspections, brakes, steering, fire suppression"],
    ["People", "Artisans, planners, supervisors, operators, OEM support"],
    ["Data", "CMMS, asset hierarchy, KPIs, reliability evidence"]
  ];
  const gates = ["Technical", "Legal", "Safety", "CMMS", "Spares", "Training", "OEM", "Emergency"];
  return `<div class="tmm-readiness-model">
    <div class="tmm-ramp ${is(step, 1)}"><small>Fleet growth pressure</small><strong>4-5x TMM ramp-up</strong><span>Six-month absorption test</span></div>
    <div class="tmm-question ${is(step, 2)}">Can the mine safely absorb, maintain, operate, support, govern and improve the expanded fleet?</div>
    <div class="tmm-systems">${systems.map((item, i) => `<article class="${is(step, i + 3)}"><strong>${item[0]}</strong><span>${item[1]}</span></article>`).join("")}</div>
    <div class="tmm-control ${is(step, 9)}"><small>Engineering Growth Control Room</small><strong>Constraint review + readiness governance</strong><span>Engineering, Mining, SHEQ, Supply Chain, HR, Finance, OEMs and contractors</span></div>
    <div class="tmm-gates ${is(step, 10)}"><small>Fleet induction gates</small>${gates.map((gate) => `<span>${gate}</span>`).join("")}</div>
    <div class="tmm-roadmap">
      <article class="${is(step, 11)}"><small>0-30 days</small><strong>Stabilise and protect</strong></article>
      <article class="${is(step, 12)}"><small>31-90 days</small><strong>Build capacity</strong></article>
      <article class="${is(step, 13)}"><small>91-180 days</small><strong>Scale and institutionalise</strong></article>
    </div>
  </div>`;
}

function engineeringFlowChart(visual, step) {
  return `<div class="engineering-chart">
    <div class="chart-path">${visual.path.map((item, i) => `<article class="${is(step, i + 1)}"><span>${String(i + 1).padStart(2, "0")}</span><strong>${item}</strong></article>`).join("")}</div>
    <div class="chart-risks">${visual.risks.map((item, i) => `<aside class="${is(step, visual.path.length + i + 1)}"><strong>${item.title}</strong><p>${item.text}</p></aside>`).join("")}</div>
  </div>`;
}

function engineeringConstraintMap(step) {
  const groups = [
    ["Material flow", ["Diesel", "Oil", "Cassettes", "Drums", "Re-fueled cassette"]],
    ["Reporting losses", ["Arrival time", "Reporting procedure", "Poor control-room reporting", "Late oil ordering"]],
    ["Utility vehicle capacity", ["1 UV", "1 operator", "No operator on A/S and N/S", "Under-utilisation", "No radio"]],
    ["Underground delivery", ["Central fueling location", "Drill rig eng. workshop", "Mine workings", "UV never goes to the section"]]
  ];
  return `<div class="engineering-constraint-map-wrap">
    <div class="engineering-constraint-map">
      <div class="constraint-core ${is(step, 1)}"><strong>Engineering study signal</strong><span>Small delays become lost face time</span></div>
      ${groups.map((group, i) => `<article class="constraint-group group-${i + 1} ${is(step, i + 2)}"><strong>${group[0]}</strong>${group[1].map((item) => `<span>${item}</span>`).join("")}</article>`).join("")}
    </div>
    <div class="constraint-outcome ${is(step, 6)}">Micro-schedule the constraint before it reaches the production face</div>
  </div>`;
}

function pipelineProtection(step) {
  const phases = ["Development", "Construction", "Equipping", "Stoping"];
  return `<div class="pipeline-protection">
    <div class="stoping-panels">${[1, 2, 3, 4].map((n, i) => `<span class="${is(step, i + 1)}">Stoping Panel</span>`).join("")}</div>
    <div class="pipeline-row">${phases.map((phase, i) => `<article class="${is(step, i + 2)}"><strong>${phase}</strong></article>`).join("")}</div>
    <div class="pipeline-buffer ${is(step, 5)}">Pipeline Buffer</div>
    <div class="pipeline-actions">
      <article class="${is(step, 6)}"><strong>Stagger buffered pipelines</strong><p>Protect the stoping pipeline before it collides with shared resources.</p></article>
      <article class="${is(step, 7)}"><strong>Integrate pipelines</strong><p>Connect development, construction, equipping and stoping into one protected execution sequence.</p></article>
      <article class="${is(step, 8)}"><strong>Resource contention</strong><p>Surface contention early instead of overloading resources already under pressure to recover BP08.</p></article>
    </div>
  </div>`;
}

function businessModel(visual, step) {
  return `<div class="business-model">
    <section class="${is(step, 1)}">
      <small>Purpose</small>
      <h2>${visual.purpose.title}</h2>
      <p>${visual.purpose.text}</p>
    </section>
    <div class="business-pillars">
      ${visual.pillars.map((item, i) => `<article class="${is(step, i + 2)}"><span>0${i + 1}</span><strong>${item.title}</strong><p>${item.text}</p></article>`).join("")}
    </div>
    <div class="business-detail ${is(step, 5)}">
      <h3>${visual.detail.title}</h3>
      <ul>${visual.detail.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  </div>`;
}

function goalSystem(step) {
  const resources = ["Finance", "Human", "Physical", "Information"];
  const controls = ["Plan", "Organise", "Lead", "Control"];
  const outcomes = ["MHS", "Tonnes", "Grade", "Cost", "Share Price"];
  return `<div class="goal-system">
    <div class="resource-stack">${resources.map((r, i) => `<div class="${is(step, i + 1)}">${r}</div>`).join("")}</div>
    <svg viewBox="0 0 820 270" aria-label="Resource management goal system">
      <defs><marker id="arrow-goal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z"/></marker></defs>
      <path class="sys-line ${is(step, 2)}" d="M110 135H238" />
      <rect class="sys-box ${is(step, 5)}" x="245" y="55" width="320" height="160" rx="18" />
      ${controls.map((c, i) => `<text class="sys-text ${is(step, 5 + i)}" x="${325 + (i % 2) * 160}" y="${105 + Math.floor(i / 2) * 62}">${c}</text>`).join("")}
      <path class="sys-line ${is(step, 9)}" d="M565 135H638" />
      <circle class="goal-core ${is(step, 10)}" cx="700" cy="135" r="58" />
      <text class="goal-label ${is(step, 10)}" x="700" y="128">THE GOAL</text>
      <text class="goal-sub ${is(step, 10)}" x="700" y="150">Now + future</text>
    </svg>
    <div class="outcome-strip">${outcomes.map((o, i) => `<span class="${is(step, 10 + i)}">${o}</span>`).join("")}</div>
  </div>`;
}

function roiSystem(step) {
  const items = ["Resources", "Mining sequence", "Tonnes @ g/t", "Revenue", "Share price", "ROI"];
  return `<div class="roi-system">${items.map((item, i) => `<article class="${is(step, i + 1)}"><span>${String(i + 1).padStart(2, "0")}</span><strong>${item}</strong>${i < items.length - 1 ? "<b></b>" : ""}</article>`).join("")}<div class="roi-equation ${is(step, 7)}">Mining productivity = disciplined flow converted into return</div></div>`;
}

function miningProcess(step) {
  const items = ["Drill", "Blast", "Clean", "Support", "Haul", "Hoist"];
  return `<div class="mining-process">${items.map((item, i) => `<div class="${is(step, i + 1)}"><strong>${item}</strong><span>${["face prep", "release", "remove", "secure", "move", "output"][i]}</span></div>`).join("")}<p class="${is(step, 7)}">Conceptual recreation from source logic - not a measured chart.</p></div>`;
}

function flowline(mode, step) {
  if (mode === "balanced") {
    const stations = ["A", "B", "C", "D"];
    return `<div class="balanced-flowline">
      <section class="${is(step, 1)}"><small>Balanced flowline: 100% efficiency</small><div>${stations.map((s) => `<span>${s} - 100%</span>`).join("")}<strong>T = 100%</strong></div></section>
      <section class="${is(step, 2)}"><small>Balanced flowline: 90% efficiency</small><div>${stations.map((s) => `<span>${s} - 90%</span>`).join("")}<strong>T ~= 59%</strong></div></section>
      <aside class="${is(step, 3)}">Statistical fluctuations + dependent events = throughput loss</aside>
      <p class="${is(step, 4)}">Source logic: Mother Nature / Murphy - POOGI Consulting.</p>
    </div>`;
  }
  const rows = [
    { label: "A", value: "2", eff: "50%" },
    { label: "B", value: "1", eff: "CONSTRAINT" },
    { label: "C", value: "3", eff: "33%" },
    { label: "D", value: "4", eff: "25%" },
    { label: "E", value: "5", eff: "20%" }
  ];
  return `<div class="flow-system unbalanced">
    ${rows.map((item, i) => `<article class="${is(step, i + 1)}"><span>(${item.label}) = ${item.value}</span><strong>${item.eff}</strong><em>${item.label === "B" ? "throughput of the constraint" : "local efficiency is not system output"}</em></article>`).join("")}
    <p class="${is(step, 6)}">Inventory accumulates before the constraint: R1m to R2m to R3m to R4m to R5m. System throughput = throughput of the constraint.</p>
  </div>`;
}

function bufferLogic(step) {
  return `<div class="buffer-system">
    <section class="${is(step, 1)}"><small>Before focus</small><div class="system-track"><span>Input</span><b>Starvation</b><strong>Constraint</strong><b>Blockage</b><span>Output</span></div></section>
    <section class="${is(step, 2)}"><small>After buffer logic</small><div class="system-track protected"><span>Input</span><b>Buffer</b><strong>Constraint protected</strong><b>Buffer</b><span>Output</span></div></section>
    <aside class="${is(step, 3)}">Constraint focus improves output by protecting the highest-leverage point in the line.</aside>
  </div>`;
}

function improvementMethod(step) {
  const items = ["Identify bottlenecks / constraints", "Time and motion study", "Interviews", "Recommendations", "Generate buy-in", "Workshop in classroom setting", "Coaching at the face"];
  return `<div class="method-wheel">${items.map((item, i) => `<article class="${is(step, i + 1)}"><span>${i + 1}</span><strong>${item}</strong></article>`).join("")}</div>`;
}

function leanArchitecture(step) {
  const layers = ["Cultural transformation - leadership and mindset", "Management system - governance", "Leader standard work, DIM and KPI architecture", "Operating system - tools and processes", "5S, value stream, problem solving and standard work", "Sustainment architecture and infrastructure"];
  return `<div class="lean-architecture">${layers.map((item, i) => `<div class="${is(step, i + 1)}"><strong>${item}</strong></div>`).join("")}<p class="${is(step, 7)}">Layered architecture recreated from the client's Lean Transformation A&I logic.</p></div>`;
}

function proofResults(step) {
  return `<div class="proof-results">
    <article class="${is(step, 1)}"><small>Source Slide 37</small><h3>TMM Development Performance</h3><strong>48% improvement</strong><ul><li>Development crew intervention</li><li>Baseline = 132m</li><li>Source values from the client proof section</li></ul></article>
    <article class="${is(step, 2)}"><small>Source Slide 38</small><h3>TMM Stoping Performance</h3><strong>170% month-five improvement</strong><ul><li>New crew ramp-up = 704 m2</li><li>Client baseline = 750 m2</li><li>Average performance Mar-Jul = 75%</li></ul></article>
    <aside class="${is(step, 3)}"><span>Additional evidence</span>Refereed technical papers, Sasol Mining PhD intervention context, Impala Platinum 11 Shaft Section 114 and endorsements are retained as proof references.</aside>
  </div>`;
}

function graduatePipeline(step) {
  const items = ["Unemployed graduates", "Onboarding", "Training", "Coaching at the face", "Sustainment", "Employer value / opportunity"];
  return `<div class="graduate-pipeline">${items.map((item, i) => `<article class="${is(step, i + 1)}"><span>${i + 1}</span><strong>${item}</strong></article>`).join("")}</div>`;
}

function winModel(step) {
  const items = [["Businesses", "measurable productivity value"], ["Sponsors / mining", "opportunity and operating proof"], ["Unemployed graduates", "capability and employment pathway"], ["Consultant / facilitator", "method, coaching and transfer"]];
  return `<div class="premium-win-model">${items.map((item, i) => `<article class="${is(step, i + 1)}"><strong>${item[0]}</strong><span>${item[1]}</span></article>`).join("")}<div class="shared-value ${is(step, 5)}">Shared value</div></div>`;
}

function closingImpact(visual, step) {
  return `<div class="closing-impact">
    <div class="closing-ribbon ${is(step, 1)}">filament</div>
    <div class="closing-cards">${visual.items.map((item, i) => `<article class="${is(step, i + 1)}"><span>0${i + 1}</span><strong>${item.title}</strong><p>${item.text}</p></article>`).join("")}</div>
  </div>`;
}

function pressure(step) {
  return `<div class="pressure-map">${[["VUCA", "volatile operating context"], ["Governance", "oversight intensity"], ["MHSA", "compliance obligations"], ["Interdependence", "linked mining system"], ["Time", "not enough hours"], ["ROI", "capital return pressure"]].map((item, i) => `<article class="${is(step, i + 1)}"><strong>${item[0]}</strong><span>${item[1]}</span></article>`).join("")}<div>Employer bandwidth</div></div>`;
}

export function renderVisual(visual, step) {
  if (visual.type === "lanes") return lanes(visual.items, step);
  if (visual.type === "compare") return compare(visual.items, step);
  if (visual.type === "timeline") return timeline(visual.items, step);
  if (visual.type === "matrix") return matrix(visual.items, step);
  if (visual.type === "partnerMatrix") return partnerMatrix(visual, step);
  if (visual.type === "sourcePlate") return sourcePlate(visual, step);
  if (visual.type === "magnifier") return magnifier(visual, step);
  if (visual.type === "profile") return profile(visual, step);
  if (visual.type === "evidenceWall") return evidenceWall(visual, step);
  if (visual.type === "engineeringDieselFlow") return engineeringDieselFlow(step);
  if (visual.type === "tmmReadinessModel") return tmmReadinessModel(step);
  if (visual.type === "engineeringFlowChart") return engineeringFlowChart(visual, step);
  if (visual.type === "engineeringConstraintMap") return engineeringConstraintMap(step);
  if (visual.type === "pipelineProtection") return pipelineProtection(step);
  if (visual.type === "businessModel") return businessModel(visual, step);
  if (visual.type === "goalSystem") return goalSystem(step);
  if (visual.type === "roiSystem") return roiSystem(step);
  if (visual.type === "miningProcess") return miningProcess(step);
  if (visual.type === "toc") {
    const focusingSteps = [
      { label: "Identify", text: "Find the system constraint." },
      { label: "Exploit", text: "Get the most out of the constraint as it stands." },
      { label: "Subordinate", text: "Align everything else to the constraint's pace." },
      { label: "Elevate", text: "Invest to raise the constraint's capacity." },
      { label: "Repeat", text: "Beware: Inertia / complacency. If constraint moves, go back to Step 1." }
    ];
    return `<div class="toc-loop">${focusingSteps.map((item, i) => `<div class="${is(step, i + 1)}"><span>${i + 1}</span><strong>${item.label}</strong><p>${item.text}</p></div>`).join("")}</div>`;
  }
  if (visual.type === "flowline") return flowline(visual.mode, step);
  if (visual.type === "bufferLogic") return bufferLogic(step);
  if (visual.type === "improvementMethod") return improvementMethod(step);
  if (visual.type === "leanArchitecture") return leanArchitecture(step);
  if (visual.type === "proofResults") return proofResults(step);
  if (visual.type === "graduatePipeline") return graduatePipeline(step);
  if (visual.type === "winModel") return winModel(step);
  if (visual.type === "closingImpact") return closingImpact(visual, step);
  if (visual.type === "orbit") return pressure(step);
  return "";
}
