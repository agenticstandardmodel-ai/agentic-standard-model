---
title: "Chapter 1: Foundations"
chapter_number: 1
summary: "Problem framing, historical precedents, and core ASM distinctions."
status: draft
figure_ids:
  - fig-1-1
  - fig-1-2
  - fig-1-3
  - fig-1-4
  - fig-1-5
  - fig-1-6
  - fig-1-7
---

This chapter establishes why the Agentic Standard Model is structured the way it is. It does not begin with a list of components. It begins with a problem, works through the historical methods that solved analogous problems in other fields, and derives the architecture of the framework from first principles. The ASM is a proto-theory: a structured, falsifiable conjecture about the building blocks of agentic systems, not a closed or proven system. A reader who finishes this chapter should not merely know what the ASM contains. They should understand why it is structured the way it is, what it would take to falsify it, and why that structure could not have been arbitrary.

## 1.1 The Problem: An Inventory Without a Theory

Anyone building intelligent agentic systems in 2026 faces the same situation Mendeleev faced in 1869. There is a large and growing inventory of components. Language models, memory stores, tool interfaces, orchestration frameworks, workflow engines, embedding models, protocol layers. New entries appear constantly. Some are genuinely novel. Others are variants of things that already exist under different names. Some combinations work well. Others fail in ways that are hard to diagnose because there is no shared vocabulary for what failed and why.

The field currently treats this inventory as a catalog. Practitioners learn by accumulating examples: here is a ReAct agent, here is a RAG pipeline, here is an orchestration pattern. This is not without value. But a catalog is not a theory. A catalog tells you what exists. A theory tells you what must exist, what cannot exist, and why the things that exist have the structure they do. Without a theory, every new component requires a new example. Every failure requires a new debugging heuristic. Every architectural decision requires re-learning from scratch rather than deriving from principle.

<figure class="figure-embed inline-chapter-figure" id="fig-1-1" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Catalogue vs Theory">
    <iframe
      src="/interactive/fig1_1_catalogue_vs_theory.html"
      title="Catalogue vs Theory"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.1.</strong> Catalogue vs Theory. A catalog names what exists. A theory predicts what must exist, explains what cannot, and provides a shared vocabulary for failure.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Two-panel conceptual comparison between a scattered catalogue of agentic patterns and a structured theory view.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-1/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_1_catalogue_vs_theory.html">Open interactive figure directly</a>
  </div>
</figure>

The Agentic Standard Model is a proto-theory: a structured, falsifiable framework for reasoning about agentic systems from first principles. Its central conjecture is that agentic systems are not arbitrary assemblies of components chosen by convention or accumulated by trial and error. They are structured compositions of irreducible building blocks that combine under rules derived from the dependency relations between them. The structure is not imposed on the field. It is proposed as a description of it, with an explicit falsification condition: a single useful composition that cannot be reduced to the elements defined here would require revision.

<div class="callout">
  <p class="callout-title">The Core Conjecture</p>
  <p class="callout-body">This is a proto-theory: a structured, falsifiable framework rather than a proven system. The conjecture is that any agent or agentic system documented in the literature or implemented in major frameworks at the time of writing can be constructed from the 22 elements defined here. Tool molecules were stress-tested against the documented range of tool types and held in each case. A single useful composition that cannot be reduced to existing elements would require revision. The framework invites that test.</p>
</div>

## 1.2 The Historical Method: Taxonomy Before Theory

The ASM draws its structure from three landmarks in scientific history. They are not chosen for rhetorical effect. They are chosen because they solved the same problem in other domains, using the same sequence: first organize the inventory, then discover the rules that govern it, then find the unifying principle that explains why those rules and no others hold.

<figure class="figure-embed inline-chapter-figure" id="fig-1-2" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Three Historical Precedents">
    <iframe
      src="/interactive/fig1_2_three_precedents.html"
      title="Three Historical Precedents"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.2.</strong> Three Historical Precedents. The three historical precedents and their distinct contributions to the ASM method.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Three-column comparison chart covering Mendeleev, the Standard Model, and OSI with their problems and contributions.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-2/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_2_three_precedents.html">Open interactive figure directly</a>
  </div>
</figure>

### Mendeleev and the Periodic Table

In 1869, Dmitri Mendeleev faced a catalog. Over sixty elements had been identified. Chemists had observed patterns in their behavior but had no systematic explanation for them. Mendeleev's method was empirical and structural. He arranged elements by atomic weight and observed that elements with similar chemical properties appeared at regular intervals. When he committed to the structure implied by the data, the table had gaps. Rather than treating those gaps as failures, he treated them as predictions. He named elements that had not yet been discovered and described their expected properties from their position in the table.

Gallium was discovered in 1875. Scandium in 1879. Germanium in 1886. Each confirmed a Mendeleev prediction. The Periodic Table was not merely descriptive. It was generative. It told chemists where to look and what to expect before they looked. That is the standard a good taxonomy must meet: it must predict, not merely classify.

### The Standard Model of Particle Physics

The Standard Model arrived a century later and did something Mendeleev's table could not. It explained why the table had the structure it did. Quantum mechanics revealed that the periodic structure of elements was a consequence of electron shell configuration, which was itself a consequence of the Pauli exclusion principle and the quantum numbers governing atomic structure. The taxonomy was not arbitrary. It was demanded by deeper physics.

The Standard Model also introduced a distinction that the Periodic Table did not contain: the difference between matter and force. Fermions are the substance of matter. Bosons are the carriers of force between matter particles. A photon does not exist inside an atom the way an electron does. It exists in the interaction between atoms. This distinction between substance and interaction is not a philosophical nicety. It has architectural consequences for what can be versioned, governed, and composed, and what cannot.

### The OSI Model

A third precedent is less celebrated but more directly relevant to engineering. The OSI Reference Model, published in 1984, organized the complexity of network communication into seven discrete layers. Each layer performs a defined function, depends only on the layer immediately below it, and exposes a clean interface to the layer above. Physical bits become data frames become packets become reliable connections become application-level meaning.

The OSI model is powerful not because it lists protocols but because it explains why the boundaries between layers are where they are. A protocol at Layer 3 cannot be responsible for reliable delivery because reliable delivery requires knowing about connections, which is Layer 4 territory. The boundaries are not arbitrary. They follow from the dependency relations between functions. A higher layer cannot exist without the layers beneath it being present and functioning correctly.

The ASM follows exactly this logic. Its period structure is not a ranking of components by complexity or cognitive distance. It is a dependency map. An element's period is the lowest layer at which it can function given its dependencies. Period is derived, not assigned.

### The Three Precedents and What Each Contributes

Mendeleev's Periodic Table contributes the method: organize by observable structure, commit to gaps as predictions, let the table demand what must exist. The Standard Model contributes the distinction between matter and force, between fermion-class components and boson-class interaction protocols. The OSI model contributes the derivation principle: layer boundaries are determined by dependency relations, not by convention. The ASM applies all three.

## 1.3 Deriving the Period Structure

The period structure of the ASM is not a design choice. It is a consequence of a single rule applied consistently to the inventory of agentic components. The rule is this: an element's period equals the lowest layer at which it can function given what it depends on. If an element requires other ASM elements to exist, it lives above those elements. If it requires nothing from the ASM inventory, only raw computation, it lives at the bottom.

<figure class="figure-embed inline-chapter-figure" id="fig-1-3" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Period Structure Derivation">
    <iframe
      src="/interactive/fig1_3_period_structure_derivation.html"
      title="Period Structure Derivation"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.3.</strong> Period Structure Derivation. The period structure derived from dependency. Each layer can only exist if all layers beneath it are present and functioning.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Layered dependency diagram showing ASM periods from P1 through P6 over a sub-atomic base.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-3/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_3_period_structure_derivation.html">Open interactive figure directly</a>
  </div>
</figure>

Working through the derivation makes the structure concrete. At the base is Layer 0, the sub-atomic layer: CPU, GPU, RAM, Storage, Network. These are not ASM elements. They are the substrate on which ASM elements run. Every element in the table reduces to a configuration of these primitives, but none of them is definable purely in computational terms. They are functional concepts that require the sub-atomic layer to instantiate.

Period 1 contains the elements that depend only on Layer 0. The Code Execution Environment needs CPU and RAM and nothing else from the ASM inventory. The File System Environment needs Storage. The Structured Data Store needs Storage and Ce. The External System Interface needs Network. None of these require any cognitive function, any state management, or any other ASM element. They are the computational floor.

Period 2 contains elements that depend on Period 1. Execution State, Workflow State, and Checkpoint State all require a running computation environment to exist in. You cannot have execution state without execution. You cannot have workflow state without a substrate to track and store it. These elements capture what is happening right now in a running system. They are the live operational context. Their period is Period 2 because that is the lowest layer at which they can function, given their dependency on Period 1 infrastructure.

Period 3 contains elements that depend on Periods 1 and 2. Session Memory requires a running context (Period 2) and storage infrastructure (Period 1) to hold the record of an active interaction. Working Memory requires execution infrastructure and active state. These elements hold information across the scope of an active execution. They are short-horizon retention.

Period 4 is where cognition enters. The Large Language Model and the Encoder/Embedding Model both depend on Periods 1 through 3. An LLM requires compute infrastructure, the ability to maintain working context, and storage for its weights. Crucially, it requires the layers below it to be functional before it can reason about anything. An embedding model requires the same infrastructure and additionally depends on having content to encode, which implies the existence of state and retention layers beneath it. Period 4 is the first period where meaning is generated or encoded rather than merely stored or executed.

Period 5 contains elements that depend on cognition existing. Semantic Memory requires an embedding model to populate it meaningfully. Procedural Memory requires a cognitive layer to interpret and apply its contents. Episodic Memory requires execution and correction signals to generate entries. The action tools (Read, Write, Logic, Communication) all require a cognitive layer to direct them. A Read Tool that has no reasoning layer above it is just an API call with no agent behind it. The tools are in Period 5 because they require Period 4 cognition to have purpose.

Period 6 contains the reasoning patterns: Information Skill, Transformation Skill, Generation Skill, Decision Skill. These are not tools. They do not act on the world directly. They shape how cognition is structured and directed. A Decision Skill requires a cognitive layer to implement the decision, retention layers to hold the context being decided over, and action layers to execute the chosen path. These patterns sit at the highest dependency depth before composition into agents begins.

<div class="callout">
  <p class="callout-title">Dependency Rule</p>
  <p class="callout-body">An element's period equals the lowest layer at which it can function. Period is not a measure of complexity or cognitive sophistication. It is a structural consequence of what must already exist for the element to function at all. This derivation is the theoretical justification for the period structure. Every element's position in the table is deducible from its dependencies, not assigned by convention.</p>
</div>

## 1.4 The Sub-atomic Layer

The sub-atomic layer sits beneath the Periodic Table. It is not part of the table. It is the computational substrate on which every element in the table runs. Understanding its role is important for two reasons. First, it grounds the framework in physical reality without collapsing the distinctions the framework needs to preserve. Second, it explains why the framework's elements are not just software components: they are functional abstractions over physical substrate, and their physical substrate determines their operational characteristics.

Every ASM element reduces to a configuration of five sub-atomic primitives: CPU, GPU, RAM, Storage, and Network. A Language Model is GPU-heavy and RAM-intensive. A File System Environment is Storage-backed. An External System Interface is Network-dependent. An Execution State element is RAM-resident and CPU-bound. These are not implementation details. They are load-bearing properties that determine latency, cost, parallelism, and failure modes.

<figure class="figure-embed inline-chapter-figure" id="fig-1-4" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Sub-atomic Layer">
    <iframe
      src="/interactive/fig1_4_subatomic_layer.html"
      title="The Sub-atomic Layer"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.4.</strong> The Sub-atomic Layer. Every ASM element reduces to a configuration of five sub-atomic primitives. Functional identity lives at the element level; physical instantiation lives at the sub-atomic level.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Diagram connecting representative ASM elements to five underlying compute primitives in the sub-atomic layer.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-4/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_4_subatomic_layer.html">Open interactive figure directly</a>
  </div>
</figure>

| Primitive | Role | Load-bearing for |
| --- | --- | --- |
| CPU | Sequential processing and logic execution. | Ce, Es, Ws, Cp, Ss, Wm, all P6 elements |
| GPU | Parallel processing and matrix operations. | Lm, Ec (primary load) |
| RAM | Fast volatile working storage. | Wm, Es, Ss |
| Storage | Persistent non-volatile storage. | Fs, Sm, Pm, Em, Db |
| Network | Connectivity and I/O. | Ex and all protocol bosons |

The distinction between sub-atomic primitives and ASM elements matters for architectural reasoning. A practitioner choosing between two implementations of a Semantic Memory component is choosing between configurations of Storage and GPU at the sub-atomic level, while preserving the same ASM element identity at the table level. The framework allows this substitution precisely because it separates functional identity (the element) from physical instantiation (the sub-atomic configuration).

## 1.5 Fermions and Bosons: The Two-Class System

The Standard Model of particle physics distinguishes two fundamental classes of particle. Fermions are matter particles: quarks, electrons, neutrinos. They have mass, they occupy space, they compose into structures. Bosons are force carriers: photons, W and Z bosons, gluons. They mediate the interactions between fermions. A photon does not live inside an atom. It exists in the exchange between atoms. This distinction is not philosophical. It has consequences for what particles can do, how they behave under superposition, and what role they play in the structure of matter.

The ASM makes the same distinction. All P1 through P6 elements are fermion-class. They instantiate as components, hold state, execute, reason, and compose into agents. They exist inside compositions. They can be versioned, registered, governed, and substituted. The three protocol elements, Mc, A2, and A3, are boson-class. They do not live inside any component. They exist in the exchange itself: in the interaction between a cognitive element and a tool, between one agent and another, between an agent and the human whose intent initiated the execution. They mediate interactions rather than participating in them as substance.

<figure class="figure-embed inline-chapter-figure" id="fig-1-5" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Fermions vs Bosons">
    <iframe
      src="/interactive/fig1_5_fermions_vs_bosons.html"
      title="Fermions vs Bosons"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.5.</strong> Fermions vs Bosons. Fermion-class elements exist inside compositions and can be versioned and governed. Boson-class protocols exist in the space between components and cannot be governed from inside either party.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Side-by-side comparison of component-like fermions and exchange-like bosons with an interaction channel between two agents.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-5/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_5_fermions_vs_bosons.html">Open interactive figure directly</a>
  </div>
</figure>

The architectural consequences are significant. A fermion-class element can be registered with a specific version, assigned an operational scope, given a governance policy, and substituted with an equivalent. A boson-class protocol cannot be governed this way. You cannot version the MCP protocol the same way you version a specific Language Model instance. You cannot register an A2 delegation the way you register a tool molecule. The protocol exists across the boundary between components, and governance that lives inside one component cannot govern what exists between components.

<div class="callout">
  <p class="callout-title">Why Protocols Are Bosons, Not Tools</p>
  <p class="callout-body">A tool molecule lives inside an agent composition. It is part of the agent's operational surface. A protocol like Mc does not belong to either the agent or the tool it connects. It exists in the capability discovery and invocation interaction itself. A photon does not belong to either electron it connects. MCP does not belong to either party in a tool invocation. This is not a metaphor. It is a structural claim with architectural consequences: protocols cannot be versioned, governed, or registered the same way components are, because they do not inhabit components. They inhabit the spaces between them.</p>
</div>

There are currently three known bosons in the ASM. Mc mediates the interaction between cognitive elements and tool molecules. A2 mediates the delegation of intent and authority between cognitive molecules. A3 mediates the delivery of legible output from an agentic system to the human whose intent initiated the execution. These three bosons correspond to the three force channels of the framework: the strong agentic force, the weak agentic force family, and the human closure force. The force laws governing each channel are developed in Chapter 4.

## 1.6 The Four-Layer Hierarchy

The ASM organizes agentic systems into four layers. Each layer has a precise definition, a defined scope of what it contains, and a clear interface to the layers above and below it. The structure follows the OSI principle: layers are real because dependency relations are real. A higher layer cannot function without the layers beneath it.

<figure class="figure-embed inline-chapter-figure" id="fig-1-6" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Four-Layer Hierarchy">
    <iframe
      src="/interactive/fig1_6_four_layer_hierarchy.html"
      title="The Four-Layer Hierarchy"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.6.</strong> The Four-Layer Hierarchy. The four-layer hierarchy. Each layer is defined by what it contains and by its interface to adjacent layers. Layer boundaries derive from dependency relations.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Four stacked layers labeled Physics, Chemistry, Biology, and Context above a Layer 0 substrate note.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-6/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_6_four_layer_hierarchy.html">Open interactive figure directly</a>
  </div>
</figure>

| Layer | Contents | Defined by |
| --- | --- | --- |
| Physics | P1-P6 elements and boson-class protocols | Irreducible building blocks. The Periodic Table. |
| Chemistry | Tool molecules, agent molecules, orchestrators | Bonding rules governing valid compositions. |
| Biology (Cell) | Agentic systems | Bounded, self-regulating systems with lifecycle properties. |
| Context | Operational environment | Registry, governance, and evaluation cycle. |

The Physics layer contains the elements. These are the proposed irreducible building blocks of agentic cognition. No element in the table can be decomposed into other ASM elements. Each one is primitive at the level of functional abstraction the framework operates at. The completeness conjecture of the table is that any agent pattern documented in the literature or instantiated in major frameworks at the time of writing can be constructed from these elements. This is a falsifiable claim, not a proven one. A single pattern that requires additional matter would require the table to be revised.

The Chemistry layer contains molecules. Molecules are stable compositions of elements governed by bonding rules. They are not elements. An agent is not a new kind of matter. It is a specific organization of existing matter that, when assembled correctly and registered as a stable bound state, exhibits a property none of its constituent elements possess: bounded autonomous behavior. The Chemistry layer is where the first emergence occurs.

The Biology layer currently extends to the cell level and no further. An agentic system is a bounded, self-regulating collection of agents with shared memory, shared state, and coordinated behavior under a governance boundary. The correspondence to a biological cell is structurally grounded, not decorative. The governance boundary is the membrane. The orchestrator is the nucleus. Sub-agents are organelles. Shared Semantic Memory and Structured Data Store are the cytoplasm. The cell wall corresponds to operational constraints, rate limits, and permission scopes.

Levels above the cell are left open. Multi-system emergence, if the framework eventually yields it, will be named when it is earned by the lower layers being solid enough to generate it. Naming organism-level or ecosystem-level structure before those lower layers are complete would weaken the theoretical foundation. The framework's strength comes from every claim being structural rather than illustrative.

<div class="callout">
  <p class="callout-title">Biology Boundary</p>
  <p class="callout-body">The cell level is well-grounded and worth developing in full. Levels above the cell are deliberately left open. Not named, not claimed, not forced. Multi-system emergence may be a genuine property the framework yields once the lower layers are solid. The strongest version of the ASM is one where every claim is structurally earned. Borrowed vocabulary that has not been earned weakens the framework rather than extending it.</p>
</div>

The Context layer is the operational environment in which agentic systems are deployed, discovered, governed, and evaluated. It contains the Registry, which is the bond-formation mechanism and the field that gives compositions operational mass. It contains the governance apparatus that defines what agentic systems are permitted to do and on whose behalf. It contains the evaluation cycle through which execution traces become episodic memory. The Context layer does not require a biology metaphor. It is real and worth formalizing in its own terms.

## 1.7 The Agent as Cell: The First Emergence

One of the earliest and most consequential structural decisions in the ASM was removing agents from the Periodic Table. In earlier versions of the framework, agents appeared as Period 6 elements. This was wrong, and understanding why it was wrong is important for understanding what the table actually contains.

An element is irreducible. It cannot be decomposed into other ASM elements. An agent is not irreducible. It is a composition: a Language Model bonded with retention elements, state elements, and tool molecules, registered as a stable bound state. If agents were elements, the table would need to contain an infinite variety of them, one for every possible configuration. The table would stop being a table of matter and become a catalog of products. That is precisely the kind of catalog the framework exists to replace.

The right analogy is biology. A mitochondrion is not alive. A strand of DNA is not alive. A ribosome is not alive. But assemble these components correctly into a cell and something categorically new emerges: self-regulating, bounded, autonomous behavior. The individual components are necessary but not sufficient. The cell is the first level of organization at which life appears.

<figure class="figure-embed inline-chapter-figure" id="fig-1-7" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Agent as Cell">
    <iframe
      src="/interactive/fig1_7_agent_as_cell.html"
      title="The Agent as Cell"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 1.7.</strong> The Agent as Cell. The Cell Principle. Individual elements are necessary but not sufficient for autonomy. Assembly, bonding, and registration under a governance boundary yield the first emergent autonomous behavior.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Diagram showing isolated elements transforming through bonding and registration into a bounded cell-like agent structure.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-1-7/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig1_7_agent_as_cell.html">Open interactive figure directly</a>
  </div>
</figure>

The agent is the agentic equivalent of the cell. Every element from P1 through P6 is necessary for a fully capable agent but no element is sufficient on its own. Even an LLM alone is not an agent. It is a cognitive substrate. It generates and interprets meaning, but it does not act, does not persist state across executions, does not direct its own reasoning toward a goal without structure around it. The agent is the first composition that exhibits bounded autonomous behavior. It is the first thing in the framework that can be said, in a meaningful sense, to be doing something.

<div class="callout">
  <p class="callout-title">The Cell Principle</p>
  <p class="callout-body">The Agent is the fundamental unit of autonomous behavior. It is not an element. It is the first molecular configuration complex enough to exhibit bounded autonomy. Everything from P1 through P6 is necessary but not sufficient for autonomy. The agent is sufficient, but it must be constituted through deliberate assembly and registered as a stable bound state. It cannot be found. It must be built.</p>
</div>

This principle has a practical implication that practitioners often miss. An agent does not become an agent by running. It becomes an agent by being constituted: assembled from the right elements in the right bonding configuration, registered in a way that declares its capabilities, dependencies, and operational boundaries, and deployed within a governance boundary that defines what it is permitted to do and on whose behalf. A process that runs an LLM in a loop without registration is not an agent in the ASM sense. It is an assembly. The distinction matters because unregistered assemblies have no governance surface, no observable intent chain, and no defined failure mode when components fail or change.

## 1.8 How This Textbook Is Organized

This textbook follows the same sequence as the historical method it draws on. Taxonomy first, then bonding rules, then force laws, then the emergent properties that arise at higher levels of organization.

Chapter 2 presents the Agentic Periodic Table in full: all 22 confirmed elements, 2 predicted gaps, and 3 boson-class protocols, organized across the 6 dependency-layer periods and 7 functional-character groups. It also presents the quantum number system for specifying the configuration of Language Model elements. A reader who finishes Chapter 2 should be able to identify any agentic component they encounter in practice, assign it its correct period and group, and understand its dependency relationships.

Chapter 3 presents the Chemistry Layer: bond types, tool molecules, known stable agent molecules, and predicted novel configurations. It includes the tool molecule completeness argument: tool molecules were stress-tested against the documented range of tool types and the bond between an Action archetype and an Infrastructure substrate held in each case. A reader who finishes Chapter 3 should be able to write the molecular formula of any agent they encounter or design, identify which bonds are load-bearing, and predict what happens when specific bonds are removed.

Chapter 4 presents the Force Laws: the three force channels that govern all interactions in a valid agentic system, the conservation laws each channel enforces, and the forbidden patterns that result from conservation violation. It also derives the Symmetry Principle as a theorem from the three force laws rather than as a separate postulate. A reader who finishes Chapter 4 should be able to identify structural violations in any agentic system design and reason about what the violation implies for governance and auditability.

Chapter 5 presents the Biology Layer at the cell level: the agentic system as a bounded, self-regulating entity with membrane, nucleus, organelles, and cytoplasm, along with the matter-antimatter correspondence for episodic memory and the operational mass mechanism. Chapter 6 presents the current completeness assessment and the research agenda for the remaining sessions: Cell Layer depth, and the Symmetry Principle formalization.

<div class="callout">
  <p class="callout-title">A Note on Incompleteness</p>
  <p class="callout-body">Mendeleev's original table had gaps. The Standard Model predicted particles decades before they were confirmed. This framework is explicitly designed to have gaps. Predicted but uninstantiated elements and molecules are marked throughout. The gap for the Interaction Skill in Period 6 is not a failure of the inventory. It is the framework predicting that a real-time engagement pattern element must exist and has not yet been formally defined. The A2T termination boson is not a missing feature. It is a structural prediction about what the weak agentic force family requires. Incompleteness handled this way is the framework working correctly, not failing.</p>
</div>
