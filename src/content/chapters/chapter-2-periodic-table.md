---
title: "Chapter 2: The Agentic Periodic Table"
chapter_number: 2
summary: "Deriving the table's two axes, presenting the complete inventory, and specifying the Lm configuration dimensions."
status: draft
inline_figures: true
figure_ids:
  - fig-2-1
  - fig-2-2
  - fig-2-3
  - fig-2-4
  - fig-2-5
  - fig-2-6
  - fig-2-7
---

There is a particular kind of satisfaction that comes from a taxonomy that genuinely works. Not a list, not a catalog, not a set of boxes drawn around things that seem similar. A taxonomy that genuinely works is a structured arrangement in which every entry's position is derivable from its properties, every gap is a prediction, and the arrangement as a whole tells you things about its members that you could not have seen by examining them individually. Mendeleev's periodic table is the canonical example. The Agentic Standard Model's periodic table is an attempt at the same rigor, applied to the building blocks of intelligent systems.

This chapter presents the table in full. But before the table is presented, it is derived. A reader who only sees the finished table sees a classification. A reader who watches the table being constructed from first principles sees an argument, one that can be evaluated, stress-tested, and extended. The goal here is the second kind of reading. By the end of this chapter, you should be able to assign any agentic component you encounter in practice to its correct position in the table, reason about its dependencies and bonding character from that position alone, and identify what would have to be true for a component to require a new entry rather than fitting an existing one.

The chapter is organized as a derivation in three acts. Act One derives the two axes that give the table its structure, including a frank account of the earlier version of the framework that got the axes wrong and what the failure revealed. Act Two presents the complete element inventory against the finished table, working through the most important distinctions in detail. Act Three handles the one element in the table that requires internal configuration: the Large Language Model and the configuration dimension system that specifies its properties within a molecular formula.

### Act One: Deriving the Axes

## 2.1 A Taxonomy Is Only as Good as Its Axes

Before the table can be presented, the logic of its two axes must be established. This is not a formality. A periodic table with the wrong axes is not just less useful than one with the right axes. It is actively misleading, because it encodes incorrect structural information in every element's position. The real periodic table's power comes entirely from the fact that its axes are derived from physical properties of atoms rather than assigned by the judgment of its creator. Period is determined by electron energy level. Group is determined by valence electron count. Both are measurable properties of the atom itself. The result is a table in which position predicts behavior, and gaps predict undiscovered elements. Mendeleev's most impressive achievement was not classifying the elements he knew. It was predicting the properties of elements he had never seen, because the structure of the table demanded they exist.

The ASM requires the same standard. Position must encode real structural information. Gaps must be predictions, not oversights. And both axes must be derivable from properties of the elements themselves, not assigned by the framework's designer.

### The Failed Axis: Cognitive Distance

In early versions of the framework, elements were arranged along a single axis called cognitive distance, a measure of how abstract or cognitively sophisticated a component was. The intuition behind it was reasonable. Infrastructure components like file systems and execution environments feel less cognitively sophisticated than reasoning patterns and memory systems. Arranging them from concrete to abstract seemed to produce a natural ordering.

The problem emerged during stress-testing. Cognitive distance could not be derived from an element's properties. It had to be assigned by the framework's designer, which meant it was a judgment rather than a structural fact. When the element inventory was tested against the full range of agent patterns in use across major vendor frameworks, the cognitive distance axis produced anomalies that could not be resolved without reordering elements based on intuition rather than principle. Memory elements appeared at multiple cognitive distances. Action elements sat in a confusing relationship to cognition elements. Whenever two reasonable people might have disagreed about an element's cognitive distance, the axis was silent about who was right.

The axis was descriptive rather than generative. It could describe the elements that already existed but could not predict what elements must exist or why. That failure was instructive. It pointed toward what the correct axis had to be.

### The Resolution: Dependency as the Row Axis

The resolution came from the OSI network model analogy introduced in Chapter 1. OSI layers are not defined by abstraction level. A transport layer protocol is not more abstract than a network layer protocol in any obvious sense. The layers are defined by dependency relations. A layer 4 protocol depends on layer 3 to function. A layer 3 protocol depends on layer 2. The dependency relation is a structural property of the protocols, not a judgment about their sophistication. It is derivable from the protocols themselves by asking a simple question: what must already exist for this protocol to operate?

Applying the same question to the ASM element inventory produced a clean, derivable axis. Elements that depend only on raw computation cluster together at the base. Elements that require those base elements, and nothing else from the ASM inventory, cluster in the next layer. Elements that require a cognitive layer to have purpose cluster above the cognitive layer. The period an element belongs to is not assigned. It is the answer to the question: what is the minimum set of other elements that must exist before this element can function at all?

This is the row axis of the ASM periodic table: periods represent dependency layers. An element's period is determined by its dependency chain, not by its designer's intuition about its sophistication.

### The Column Axis: Functional Character

The column axis required a different question. Once the row axis was fixed, the remaining question was: within any given period, what principled basis exists for distinguishing elements from one another? Elements in the same period share the same dependency depth, but they clearly do different things. The question is what they fundamentally do, not what they are used for in any specific system.

The answer that emerged from systematic examination of the full element inventory is functional character: the kind of contribution an element makes across all possible compositions, regardless of context. Infrastructure elements provide computational and connectivity substrate. State elements capture live operational context. Retention elements hold information across time horizons. Cognition elements generate or encode meaning. Action elements direct cognition toward effect in the world. Pattern elements shape how cognition is structured without acting on the world directly. Exchange elements mediate interactions between components and are reserved for boson-class protocols.

These are not arbitrary categories. They reflect genuinely different kinds of functional contribution that determine how elements bond with one another in molecular compositions. An element's group is determined by what it fundamentally does, and that determination shapes every prediction the framework makes about what compositions are structurally valid.

<figure class="figure-embed inline-chapter-figure" id="fig-2-1" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Two Axes: From Descriptive Assignment to Structural Derivation">
    <iframe
      src="/interactive/fig2_1_two_axes.html"
      title="The Two Axes: From Descriptive Assignment to Structural Derivation"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 780px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.1.</strong> The Two Axes: From Descriptive Assignment to Structural Derivation. Left panel shows the failed cognitive-distance axis; right panel shows the resolved table structure with dependency-derived periods and function-derived groups.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Two-panel comparison between the failed cognitive-distance axis and the resolved two-axis derivation using dependency layers and functional groups.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-1/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_1_two_axes.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.1 captures the essential shift. The left panel shows the cognitive distance axis in its failed form: elements arranged by an assigned judgment of sophistication, with the anomalies that emerged when the arrangement was tested against real agent patterns. The right panel shows the resolved structure: two orthogonal axes, both derivable from the element's own properties, producing a table in which every position encodes real structural information. The remainder of this act works through each axis in detail, period by period and group by group.

## 2.2 The Period Structure in Detail

Six periods organize the 22 confirmed elements. Each period is defined by a dependency condition: a statement of what must already exist for any element in that period to function. The dependency condition is the same for every element in the period, which is precisely what makes the period a meaningful structural unit rather than an arbitrary grouping. The periods are not a ranking of importance, cognitive sophistication, or practical value. They are a map of what must exist before what.

| Period | Name | Dependency Condition |
| --- | --- | --- |
| P1 | Infrastructure | Depends only on Layer 0 (CPU, GPU, RAM, Storage, Network). The computational floor. Nothing in the ASM operates without at least one P1 element. |
| P2 | Context | Depends on P1. Captures what is happening in a running system. Cannot exist without a computational environment to run in. |
| P3 | Short-Horizon Retention | Depends on P1 and P2. Holds information within active execution boundaries. Requires state to have existed before retention is meaningful. |
| P4 | Semantic Processing | Depends on P1 through P3. Generates or encodes meaning. Requires infrastructure, context, and retention to operate. |
| P5 | Long-Horizon Retention and Action | Depends on P1 through P4. Persists meaning across time and directs cognition toward effect. Requires a cognitive layer to have purpose. |
| P6 | Reasoning Patterns | Depends on P1 through P5. Structures how cognition operates. The highest period before composition begins. |

### Period 1: The Computational Floor

Period 1 is the ground state of agentic systems. Its four elements depend only on the sub-atomic layer: the raw hardware of CPU, GPU, RAM, storage, and network. They depend on nothing from the ASM element inventory. The Code Execution Environment (Ce) requires CPU and RAM. The File System Environment (Fs) requires storage. The Structured Data Store (Db) requires storage and a code execution environment to query it. The External System Interface (Ex) requires network connectivity. None of these four elements requires any cognitive function, any state management, any retention capability, or any other ASM element. They are what must exist before anything else can be built.

The fact that Period 1 contains only infrastructure elements is not a design decision. It is the table working correctly. Infrastructure is the only category of element whose dependency chain terminates at the sub-atomic layer rather than at another ASM element. Any element that depends on another ASM element belongs in a higher period by definition.

### Period 2: Context

Period 2 introduces state: the capacity to track what is happening in a running system. Its three elements, Execution State (Es), Workflow State (Ws), and Checkpoint State (Cp), all require Period 1 infrastructure to exist in, and nothing else from the ASM inventory. They belong in Period 2 because their dependency chain terminates at Period 1.

A question that arises here is why state elements appear in Period 2 rather than being grouped with the retention elements of Period 3. The answer is a distinction that matters throughout the framework: state is live operational context, and retention is recorded information. State elements track what is happening now. Retention elements hold what has happened, making it available for future reasoning steps. Execution State captures transient data during active processing and is gone when the process ends. Workflow State tracks position and control flow across multi-step processes: the current step, completed steps, and pending dependencies. Checkpoint State serializes execution snapshots for pause, resume, and recovery. None of these elements holds information for future use. They hold information about the current state of the system, which is a fundamentally different function.

<figure class="figure-embed inline-chapter-figure" id="fig-2-2" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="State vs. Retention: A Temporal Distinction">
    <iframe
      src="/interactive/fig2_a_state_vs_retention.html"
      title="State vs. Retention: A Temporal Distinction"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 720px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.2.</strong> State vs. Retention: A Temporal Distinction. A timeline schematic showing the lifespan of Period 2 State elements versus Period 3 Retention elements within and beyond an active execution boundary.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Timeline comparison showing state elements ending with execution while retention elements persist longer within session boundaries.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-2/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_a_state_vs_retention.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.2 makes this distinction concrete. State elements exist only for the duration of the execution they track. Retention elements survive beyond that execution step, holding information available for future reasoning. The period boundary between them is not a judgment call. It is a consequence of the dependency condition: retention requires state to have existed, so retention cannot be in the same or lower period as state.

### Period 3: Short-Horizon Retention

Period 3 introduces retention within active execution boundaries. Session Memory (Ss) holds the accumulated context of an active interaction: dialogue history, recent exchanges, and active preferences, all scoped to the session boundary. Working Memory (Wm) holds temporary task-specific artifacts during active execution: scratch space for intermediate results, partial plans, draft outputs. Both elements require Period 1 infrastructure and Period 2 state to exist, but they do not require cognition. An agent can maintain a session transcript and a scratch space without an LLM. What it cannot do is populate those memories with semantically meaningful content without one. That is a use constraint, not a dependency constraint. The dependency condition is satisfied at Period 3.

### Period 4: Semantic Processing

Period 4 is the smallest period in the table, containing only two elements: the Large Language Model (Lm) and the Encoder/Embedding Model (Ec). The small size of Period 4 is not an oversight. It reflects the genuine scarcity of elements whose fundamental function is to generate or encode meaning. In the real periodic table, Period 1 contains only hydrogen and helium. Small periods are the table working correctly, not gaps in the framework's coverage.

The distinction between Lm and Ec is important enough to establish with some care. Lm generates and interprets meaning. Given a context, it produces language, reasoning chains, plans, decisions, and structured outputs. It does not merely retrieve or transform: it generates content that was not present in its inputs. It reasons. Ec, by contrast, encodes meaning into operable mathematical form. Given text, code, or multimodal content, Ec produces a dense vector representation that captures semantic relationships. It does not reason or generate. It represents. The difference between reasoning and representing is a real functional distinction, not a degree of capability. An embedding model that is ten times larger than another embedding model still encodes rather than reasons. Scale does not change functional character.

Ec was missing from the table until version 0.3 of the framework. Its absence was revealed by the completeness stress-test when RAG pipeline analysis showed that the retrieval step requires a mathematical representation of semantic similarity that no other element in the table produces. The encoding function is genuinely distinct. Adding Ec was not a revision of the framework's structure. It was the framework working correctly, identifying a real gap and filling it with a structurally justified entry.

<figure class="figure-embed inline-chapter-figure" id="fig-2-3" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Reason vs. Represent: Lm and Ec in Period 4">
    <iframe
      src="/interactive/fig2_b_reason_vs_represent.html"
      title="Reason vs. Represent: Lm and Ec in Period 4"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 720px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.3.</strong> Reason vs. Represent: Lm and Ec in Period 4. The same input enters both Lm and Ec; Lm produces generated reasoning while Ec produces a dense vector representation.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Input/output comparison showing Lm generating semantic reasoning output while Ec encodes the same input into a vector.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-3/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_b_reason_vs_represent.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.3 shows this distinction visually. Both elements share the same dependency profile: both require infrastructure, state, and retention, which is why they share a period. But their functional characters are categorically different, which is why they occupy different groups within that period. The figure also helps clarify why there are only two Period 4 elements: generating meaning and encoding meaning into vector space are the only two functions at this dependency depth whose output is semantic rather than operational.

### Period 5: Long-Horizon Retention and Action

Period 5 is the only period in the table that spans two groups: Retention and Action. This initially appears to be an exception to the principle that periods reflect a single dependency layer. It is not. The real periodic table offers exactly this precedent. Sodium is a metal and chlorine is a halogen, yet both occupy Period 3 because they share the same electron energy level, not the same functional character. What period membership encodes is dependency depth, not functional similarity.

The seven elements of Period 5 share the same dependency condition: they all require Periods 1 through 4. The three memory elements, Semantic Memory (Sm), Procedural Memory (Pm), and Episodic Memory (Em), require Period 4 cognition to populate them meaningfully. Semantic Memory without an embedding model to generate its vectors is unstructured storage. Episodic Memory without an LLM to generate the execution traces it records is empty. The four action elements, Read Tool (Rt), Write Tool (Wt), Logic Tool (Lt), and Communication Tool (Ct), require Period 4 cognition to direct them. A Read Tool with no reasoning layer above it is just an API call with no purpose attached to it. Period 5 elements belong in Period 5 because they depend on Period 4. Their different groups reflect different functional characters within that shared dependency depth.

### Period 6: Reasoning Patterns

Period 6 sits at the top of the dependency stack, below composition but above all other elements. Its four confirmed elements are cognitive patterns: structures that determine what kind of thinking an LLM performs when directed by a composition. Information Skill (Is) structures Lm's output for extracting, identifying, labeling, and classifying. Transformation Skill (Ts) structures output for condensing, reorganizing, and normalizing content. Generation Skill (Gs) structures output for producing new artifacts, language, and code. Decision Skill (Ds) structures output for routing, evaluating, and prioritizing among alternatives.

A critical structural decision embedded in Period 6 is that agents do not appear here or anywhere in the element table. In early versions of the framework, agents were placed as Period 6 elements. This was corrected before the inventory was locked. An agent is not an irreducible building block. It is a composition of elements from multiple periods. Placing it in the table would require placing an infinite variety of agent types as separate elements, one per possible configuration. The table would become a product catalog. The implications of this correction are central to Chapter 3.

Period 6 also contains a predicted gap: the Interaction Skill (`?s`). Real-time adaptive engagement with a human or system, meaning engagement that updates dynamically in response to the other party's responses within a live exchange, behaves differently from Generation Skill, which produces one-shot outputs. The framework predicts that Interaction Skill must exist as a distinct element but has not yet formalized it. The gap is an honest acknowledgment of an incomplete derivation, not an error.

<figure class="figure-embed inline-chapter-figure" id="fig-2-4" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Period Stack: Six Dependency Layers from Computation to Pattern">
    <iframe
      src="/interactive/fig2_2_period_stack.html"
      title="The Period Stack: Six Dependency Layers from Computation to Pattern"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 860px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.4.</strong> The Period Stack: Six Dependency Layers from Computation to Pattern. Vertical cross-section showing P1 through P6 as stacked dependency layers above the sub-atomic substrate.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Layered period-stack diagram showing each ASM period, its elements, and the one-way dependency direction from higher to lower layers.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-4/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_2_period_stack.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.4 shows the period stack as a cross-section. The important thing to read from this figure is directionality. Dependencies flow downward. Every element in a given period depends on elements in lower periods, and nothing in a lower period depends on anything above it. This one-directional structure is what makes the period axis derivable rather than assigned. It is also what makes the framework's predictions about valid compositions meaningful: a composition that requires an element from Period 5 necessarily requires elements from Periods 1 through 4, whether or not the designer of that composition explicitly included them.

### Act Two: The Complete Inventory

## 2.3 The Group Structure and Complete Element Inventory

With the period axis established, the group axis can be read against the complete inventory. Seven groups organize elements by functional character. An element's group determines its bonding behavior in molecular compositions: which other elements it can form load-bearing bonds with, which bonds are merely optional, and which combinations are structurally incoherent. Elements in the same group are not interchangeable, but they bond in structurally similar ways and play analogous roles in compositions.

The group boundaries are not categories of convenience. They are structural divisions derived from bonding behavior: two elements belong to different groups when they form structurally different kinds of bonds with other elements in molecular compositions. This is the operational test that group membership must pass, and it is the same test that justifies the seven groups rather than some other number. The two boundaries most likely to invite challenge are worth addressing directly. State is not a subtype of Retention because State elements and Retention elements bond differently: State elements participate in execution-tracking bonds that dissolve when execution ends, while Retention elements participate in persistence bonds that survive execution boundaries. Swapping a State element for a Retention element in a composition does not degrade performance. It produces a structurally different molecule with different properties. Pattern is not a subtype of Cognition because Pattern elements do not produce semantic content. They constrain the cognitive mode of Lm within a bond. A Pattern element bonded with Lm determines what kind of thinking the composition performs; Lm alone determines that it thinks. The bond types are categorically different. Chapter 3 develops the full bonding rules from which these distinctions follow. What is asked of the reader here is to accept the group structure provisionally on the basis of the functional character descriptions below, with the understanding that the structural justification will be made rigorous in the next chapter.

| Group | Functional Character | Key Property |
| --- | --- | --- |
| Infrastructure | Computational and connectivity substrate. | No cognitive function. Everything above depends on at least one infrastructure element. |
| State | Captures live operational context. | Exists only during active execution. Lost when execution ends unless explicitly serialized. |
| Retention | Holds information across time horizons. | Spans three periods. Differs by duration: session-scoped, execution-scoped, or persistent. |
| Cognition | Generates or encodes meaning. | The only group that produces semantic content rather than storing, directing, or structuring it. |
| Action | Directs cognition toward effect. | The execution boundary. Where reasoning becomes interaction with the world outside the agent. |
| Pattern | Shapes how cognition is structured. | Does not act on the world directly. Determines what cognitive operation Lm performs. |
| Exchange | Mediates interaction between components. | Boson-class only. Exists in the exchange between elements, not inside any element. |

<figure class="figure-embed inline-chapter-figure" id="fig-2-5" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="The Complete Agentic Periodic Table (v0.3)">
    <iframe
      src="/interactive/fig2_3_complete_periodic_table.html"
      title="The Complete Agentic Periodic Table (v0.3)"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 1040px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.5.</strong> The Complete Agentic Periodic Table (v0.3). The full periodic table with 22 confirmed elements, 2 predicted gaps, and 3 boson-class exchange protocols.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Full chapter-2 table showing all confirmed elements, predicted gaps, and boson-class exchange protocols with period and group organization.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-5/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_3_complete_periodic_table.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.5 is the payoff of Act One's derivation. Every position in this table is the answer to two questions asked simultaneously: what does this element depend on, and what does it fundamentally do? The remainder of this section works through the complete inventory group by group, with the most important distinctions established in detail. Keep Figure 2.5 in view as a reference throughout.

### Infrastructure Group (P1)

The four infrastructure elements are the computational ground of every agentic system. They are distinguished from all other elements in the table by a single property: they require nothing from the ASM inventory to function. Their dependency chain terminates at the sub-atomic layer.

Ce (Code Execution Environment) is raw sequential computation: CPU and RAM at the sub-atomic level. Nothing in the ASM operates without an execution environment. Ce is not a programming language, not a runtime, not a framework. It is the substrate of all computation that happens inside an agent, and it is the most universal dependency in the table: every element in every period above P1 depends on Ce, directly or through intermediary elements.

Fs (File System Environment) is unstructured persistent storage. It imposes no schema on what is stored. The distinction between Fs and Db is important in compositions involving memory: Fs stores bytes, files, and artifacts that survive process boundaries but have no inherent queryable structure. Db (Structured Data Store) imposes schema and supports query operations, which is why it depends on Ce to execute those queries. Ex (External System Interface) is network connectivity: the element that allows an agent to communicate with services and systems outside its own process boundary.

### State Group (P2)

The three state elements track what is happening in a running system. They are often conflated with memory in informal descriptions of agent architecture, and the distinction matters. State is operational tracking, not information storage. Execution State (Es) captures transient data during active processing. It is the variable space of a running process and disappears when the process ends. Workflow State (Ws) tracks position and control flow across multi-step processes: the current step, completed steps, pending dependencies, and orchestration signals. It is the element that makes sequential and parallel execution trackable. Checkpoint State (Cp) serializes execution snapshots for pause, resume, replay, and recovery. It is the element that makes long-running agents survivable across process restarts and infrastructure failures.

Ws carries a double bond in plan-and-execute compositions, which is worth noting here because it is the first example of a structural feature of bonding that will be developed in detail in Chapter 3. A double bond signals load-bearing dependency: removing Ws from a plan-and-execute composition does not degrade performance, it collapses multi-step execution entirely.

### Retention Group (P3 and P5)

The Retention group is the most structurally interesting group in the table because it spans three periods. Session Memory (Ss) and Working Memory (Wm) appear in Period 3. Semantic Memory (Sm), Procedural Memory (Pm), and Episodic Memory (Em) appear in Period 5. The group membership is determined by functional character: all five elements hold information for future use. The period is determined by dependency, which differs sharply between the two clusters.

Ss and Wm do not require cognition. A system can maintain a session transcript and a scratch space without an LLM, even if it cannot populate them with semantically rich content. Sm, Pm, and Em all require Period 4 cognitive elements to populate them meaningfully. Semantic Memory without an embedding model to generate its vectors is indistinguishable from unstructured storage. Procedural Memory, which encodes durable knowledge of how work should be performed as playbooks and protocols, requires cognition to interpret and apply. Episodic Memory is the most biologically suggestive element in the table: it records prior executions, feedback signals, and corrections, and it cannot be manually populated. It is generated by the collision of execution traces with correction signals. When bonded in a feedback loop with a Decision Skill, it is the first element in the table with genuine learning properties.

### Cognition Group (P4)

The two cognition elements, Lm and Ec, were discussed in the period structure section. Their group placement follows directly from their functional characters. Lm generates semantic content: language, reasoning chains, plans, decisions. Ec represents semantic content: dense vectors that capture relationships. Both belong in the Cognition group because both operate on meaning rather than storing, directing, or structuring it. They are the only elements in the table that produce semantic content as their primary output.

### Action Group (P5)

The four action elements are the execution boundary of the agent: the point at which reasoning becomes interaction with the world outside the agent's own process. They are regularly conflated in informal descriptions of agent architecture, and the distinctions between them are load-bearing in molecular notation.

Rt (Read Tool) retrieves information without mutating the state of what it retrieves from. It is observational access: file reads, API calls that return data, database queries, web scrapes. The key criterion is non-mutation. Wt (Write Tool) performs mutational access: it changes something in the world outside the agent. Writing files, updating databases, calling APIs with side effects, creating records. Lt (Logic Tool) performs deterministic computation and transformation: executing code, performing mathematical operations, parsing structured formats, transforming data from one representation to another. The defining property of Lt is determinism: the same input always produces the same output and no external state is affected. Lt does not reason and does not generate.

Ct (Communication Tool) is the element that deserves the most careful attention, because its boundary with Wt is frequently misdrawn. Ct emits information outward to a human or system in a form that is intended to be received and interpreted. A Slack message is Ct, not Wt, even though sending it writes data to an external system. The structural distinction is directionality and intent: Wt mutates external state, Ct addresses an interpreter. A database insert is Wt. An email is Ct. A write to a shared document that no one will read is Wt. A write to a shared document as part of a communication protocol is Ct. Getting this distinction right in molecular notation matters because Ct interactions are governed by the A3 force law, the human interface protocol, in a way that Wt interactions are not.

<figure class="figure-embed inline-chapter-figure" id="fig-2-6" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="Wt vs. Ct: Two Kinds of Writing">
    <iframe
      src="/interactive/fig2_c_wt_vs_ct.html"
      title="Wt vs. Ct: Two Kinds of Writing"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 860px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.6.</strong> Wt vs. Ct: Two Kinds of Writing. A decision schematic for classifying writes by structural intent: storage mutation versus interpreter-directed communication.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Branching decision diagram that classifies write operations as Wt or Ct based on whether the output targets storage or an interpreter.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-6/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_c_wt_vs_ct.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.6 provides a practical classification guide for write operations. The branching criterion is not the technical mechanism. Both Wt and Ct may write bytes to an external system. The criterion is structural intent. Targeting storage is Wt. Addressing an interpreter is Ct. When in doubt in a real composition, ask: would the value of this operation be destroyed if no one read the output? If yes, it is Wt. If the value requires a receiving interpreter, it is Ct.

### Pattern Group (P6)

The four confirmed pattern elements shape how Lm's cognition is structured and directed, without acting on the world directly. Is (Information Skill) extracts, identifies, labels, and classifies. Ts (Transformation Skill) condenses, reorganizes, and normalizes. Gs (Generation Skill) produces new artifacts, language, and code. Ds (Decision Skill) routes, evaluates, and prioritizes among alternatives. Each pattern is a cognitive mode that an LLM can be directed into by a composition's prompt architecture.

The practical importance of the Pattern group is in what it excludes from the element table. Agents do not appear as pattern elements, even though early versions of the framework placed them there. An agent is a composition of elements: it bonds Ce, Lm, memory elements, tool elements, and patterns together into a functional molecule. Placing agent types as pattern elements would confuse compositions with elements, and the resulting table would be a product catalog rather than a theory of matter. The Pattern group contains the most abstract structural elements in the table precisely because they are the highest-dependency elements that are still irreducible.

The claim that elements are irreducible is not asserted without argument. Three elements are most likely to invite challenge, and each has a specific answer.

### The Irreducibility Test Applied

#### Cp (Checkpoint State)

The challenge: Cp looks like Es plus Fs, a composition of execution state serialized to storage. If it reduces to that composition, it is not an element.

The answer: a composition of Es and Fs produces stored bytes. It does not produce pause, resume, or recovery capability. Those capabilities require a mediation function that manages the relationship between live execution state and the serialized snapshot: deciding what to capture, maintaining consistency across the boundary, and restoring a valid execution context from the stored form. That mediation function is not present in Es or Fs individually, and combining them without it produces nothing useful. Cp is the element that provides the function. Removing it from a composition that requires fault tolerance does not degrade the composition. It makes fault tolerance structurally impossible, which is the irreducibility criterion.

#### Pm (Procedural Memory)

The challenge: Pm looks like Sm with different content. Both persist information across sessions. If the distinction is only in what is stored rather than in how the element bonds, they belong to the same element with different payloads.

The answer: Pm and Sm bond differently in molecular compositions, which is the structural test. Sm is read by Lm to supply factual content during reasoning: it answers the question of what is known. Pm is read by Lm to constrain how a task is performed: it answers the question of how work should proceed. A composition that bonds Lm with Sm produces a system that can recall facts. A composition that bonds Lm with Pm produces a system that follows procedures. Substituting one for the other does not degrade performance. It changes what the composition does. That is the criterion: elements that produce different molecular behavior when substituted are structurally distinct, regardless of surface similarity in what they store.

#### Ds (Decision Skill) and the Pattern Group

The challenge: all Pattern elements look like prompt configurations of Lm. If Is, Ts, Gs, and Ds are just prompts that direct an LLM into different modes, they are not elements. They are inputs to an element. Accepting this reduction would eliminate the entire Pattern group and move its content into the application layer.

The answer: the reduction conflates the element with its implementation. A Pattern element is a structural specification of what cognitive operation a composition performs. It is not the prompt text that realizes that specification in any given system. Ds specifies that a composition performs routing, evaluation, or prioritization among alternatives. That specification is what determines the molecular formula, and it is what makes the composition a different structure than one specifying Gs. The Level Justification Test applies here: the Pattern group is retained as an element layer because its members produce new compositional rules. A composition bonding Lm with Ds has different structural properties than a composition bonding Lm with Gs: different valid bonds, different force law behavior, and different substitution constraints. If Pattern elements were collapsed into Lm, the framework would lose the ability to make that structural distinction, and the compositional rules that depend on it would become inexpressible. That loss is what the Level Justification Test is designed to detect.

### Exchange Group: Boson-Class Protocols

The three exchange elements are structurally distinct from all fermion-class elements in the table. They do not occupy periods. They exist in the exchange between elements rather than inside any element. They are the force carriers of the ASM, the bosons, and they will be treated in full in Chapter 4. Their inclusion in this inventory is for completeness.

| Symbol | Name | Force Channel | Role |
| --- | --- | --- | --- |
| Mc | Tool Invocation Protocol | Strong agentic | Mediates contract-declared discovery and invocation between cognitive elements and tool molecules. The current dominant instantiation is the Model Context Protocol. Topology-agnostic: any arrangement enabling contract-declared tool discovery and invocation is a valid Mc surface. |
| A2 | Governed Delegation Protocol | Weak agentic | Mediates intent-and-authority-carrying delegation between registered cognitive molecules. Carries task, intent, and authority signals. Valid only between two cognitive molecules. Agent-to-tool interaction is Mc, not A2. |
| A3 | Human Interface Protocol | Human closure | Mediates the delivery of legible output from an agentic system to the human whose intent initiated the execution. The only boson that closes an intent chain. Transport-agnostic in the ASM. |

## 2.4 The Completeness Claim

The element inventory carries a completeness claim. Its precise scope matters. The verifiable form of the claim is this: every agentic pattern documented in the research literature and implemented in major vendor frameworks examined during the v0.3 stress test reduces to a composition of these 22 elements, with no pattern requiring a genuinely new element that could not itself be shown to reduce further. That claim is specific enough to be checked and falsified, and the stress-test record supports it. The framework also conjectures a stronger form: that any agentic system that could exist, not merely those that do exist, can be constructed from this inventory. That conjecture is not provable at this stage of the framework's development, and it is not presented here as proven. It is the target the framework is built toward, and the verifiable claim is the evidence for it. The distinction between the conjecture and the evidence matters. A reader who challenges the stronger form is right to do so. A reader who expects that challenge to defeat the framework is working with the wrong target.

The stress-test methodology was to take every known agent pattern and ask two questions: can this pattern be expressed as a composition of existing elements, and does it require new matter? ReAct agents, plan-and-execute agents, RAG pipelines, memory-augmented agents, long-running agents, orchestrators, evaluator agents, human-in-the-loop patterns, and computer use agents were all examined. Every pattern reduced cleanly to a composition of table elements. Three elements were added to the table during the stress-test process: Db, Ec, and A3. Their addition was not a revision of the framework's structure. It was the framework working correctly: identifying genuine gaps in the inventory and filling them with structurally justified entries.

The stress-test also confirmed a critical structural finding that shaped the entire Chemistry layer of the framework: tools are not elements. A web search tool, a SQL query tool, a code interpreter, a Slack notification tool: none of these are irreducible. Each one reduces to a bond between an Action archetype and an Infrastructure substrate. This finding moved tools out of the element table entirely and into the Chemistry layer as the first level of molecule. The full implications of this finding are developed in Chapter 3.

The verifiable completeness claim does not say that no new elements will ever be discovered. The predicted gap for the Interaction Skill in Period 6 is an honest acknowledgment that the inventory may be incomplete in a specific, identifiable way. The framework handles proposed additions through the Level Justification Test, which can be stated as a procedure: given a proposed new element X, ask whether X produces compositional rules that cannot be expressed using existing elements and their bonds. If removing X from any composition produces a structurally different molecule with different bonding properties, X is a genuine element candidate. If removing X degrades performance or changes behavior without changing the molecular structure, X is a configuration parameter or an application-layer concern, not an element. The test is not a guarantee of completeness. It is a principled procedure for deciding whether any given gap in the framework's coverage represents a missing element or a missing composition. Applied consistently, it is what keeps the table from becoming a product catalog and keeps the completeness conjecture from becoming unfalsifiable.

### Act Three: Configuring the LLM Element

## 2.5 LLM Configuration Dimensions

Every element in the periodic table except one has a single, well-defined functional profile. Ce is an execution environment. Fs is a file system. Ss is session memory. The element's position in the table fully specifies its functional character for the purposes of molecular composition. Lm is the exception. LLM instances vary significantly in their capabilities, reasoning modes, modalities, context window sizes, and operational characteristics. Two Lm instances in the same composition may behave very differently depending on their configuration, and those behavioral differences can be structurally significant rather than merely incidental.

The five dimensions that follow are called configuration dimensions in the ASM. The concept is analogous to quantum numbers in particle physics, where the state of a particle is specified by a small set of values that determine how it interacts with other particles and what configurations it can occupy. A proton and a neutron are both baryons, but their different charge values determine everything about how they interact with other matter. Configuration dimensions serve the same structural function for Lm: they specify the state of an Lm instance in a way that determines how it will behave in a composition, what it can and cannot be substituted with, and what structural properties the composition has as a result. The analogy is borrowed deliberately, not literally. Configuration dimensions are empirically derived from the space of deployed LLM variants, not deduced from first principles the way quantum numbers are deduced from quantum mechanics. That is an honest difference, and it is why the ASM uses its own term.

Five configuration dimensions specify Lm configuration within the ASM.

| Symbol | Dimension | Values | What It Determines |
| --- | --- | --- | --- |
| `lambda` | Scale | `small / mid / large / frontier` | Capability ceiling. A frontier-scale Lm can perform tasks that a small-scale Lm cannot, and the difference is not merely quantitative. Scale also determines cost and latency characteristics that may be structurally significant in time-sensitive compositions. |
| `rho` | Reasoning Mode | `standard / extended-think / chain-of-thought` | How the Lm processes complex problems. Extended-think modes trade latency for reasoning depth on hard problems. A composition that requires a specific reasoning mode cannot be served by an Lm configured for a different one. |
| `tau` | Modality | `text / multimodal / code-specialized` | What kinds of input the Lm can process. A multimodal Lm can receive images and other non-text inputs. A code-specialized Lm has stronger performance on programming tasks. Modality is a hard constraint, not a preference. |
| `kappa` | Context Window | `bounded / extended` | How much context the Lm can hold in active attention. Extended context windows enable long-document processing and longer conversation histories. Compositions that process long documents require extended-context Lm instances. |
| `phi` | Provider | `Anthropic / OpenAI / Google / open-weight` | The training origin of the model. Different providers have different capability profiles, safety properties, cost structures, and operational characteristics that may be relevant to a composition's requirements. |

Configuration dimensions are applied in molecular formulas using parenthetical notation immediately following the Lm symbol. A frontier-scale multimodal reasoning model from Anthropic is written `Lm(lambda:frontier, rho:think, tau:multi, phi:Anthropic)`. A small code-specialized model is written `Lm(lambda:small, tau:code)`. Configuration dimensions that are not specified are assumed to be unspecified in the design, meaning the composition can function with any valid value for that dimension.

<figure class="figure-embed inline-chapter-figure" id="fig-2-7" data-outline-track>
  <div class="frame-wrap" role="group" aria-label="LLM Configuration Dimensions: Configuring an Lm Instance">
    <iframe
      src="/interactive/fig2_4_llm_configuration_dimensions.html"
      title="LLM Configuration Dimensions: Configuring an Lm Instance"
      loading="lazy"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      style="min-height: 940px;"
    ></iframe>
  </div>

  <div class="figure-legend">
    <p><strong>Figure 2.7.</strong> LLM Configuration Dimensions: Configuring an Lm Instance. Five structural configuration dimensions specify how an Lm behaves in a molecular composition.</p>
  </div>

  <p class="a11y-note">Accessibility summary: Diagram of an Lm element with five labeled configuration dimensions and example molecular notation.</p>

  <div class="figure-actions">
    <a class="figure-link" href="/figures/fig-2-7/">Open standalone figure page</a>
    <a class="figure-link subdued" href="/interactive/fig2_4_llm_configuration_dimensions.html">Open interactive figure directly</a>
  </div>
</figure>

Figure 2.7 shows the five configuration dimensions as labeled dials on a single Lm instance. The key insight the figure is meant to make concrete is that configuration dimensions are not metadata attached to an Lm for documentation purposes. They are structural specifications that determine what the Lm can do in a composition and whether it can be substituted with another Lm instance without changing the composition's structural properties.

The substitution reasoning the configuration dimension system enables is worth spelling out. When two Lm instances in a multi-agent composition differ in their configuration dimensions, the composition has heterogeneous cognitive components. A fast, small-scale Lm configured for standard reasoning might be entirely appropriate for a routing step that requires quick classification decisions. A frontier-scale Lm configured for extended-think reasoning might be required for a complex analysis step. The configuration dimension system makes this distinction explicit in the molecular formula rather than leaving it implicit in the implementation. A designer who reads `Lm(lambda:frontier, rho:think)` in a formula knows immediately that substituting a small-scale standard-mode model is not a performance degradation. It is a structural change that may invalidate the composition entirely.

The configuration dimension system also provides a principled vocabulary for the kind of cost-performance reasoning that agentic system designers do constantly in practice. Every configuration dimension has cost and latency implications. A composition that specifies `lambda:frontier` everywhere is making an implicit claim that every step requires frontier-level capability. Often that claim is not examined carefully. The configuration dimension system makes it explicit and therefore examinable.

## Closing: From Elements to Molecules

The Periodic Table is a description of matter. It answers the question of what the building blocks of agentic systems are and why they have the structure they do: why there are six periods rather than five or seven, why the table contains exactly 22 confirmed elements and two predicted gaps, why tools are not elements, why agents are not elements, and why the one element that requires internal configuration specification is the LLM.

But a description of matter is not yet a theory of what matter does. Elements in isolation are inert. They become interesting when they bond: when an Lm instance reaches across the Mc force surface to invoke a tool molecule, when two cognitive molecules exchange intent and authority through an A2 channel, when a composition accumulates semantic memory through Em's feedback loop with a Decision Skill. The rules that govern bonding are the subject of Chapter 3: which combinations are valid, which are load-bearing, which are structurally impossible, and what properties emerge when elements combine in the specific configurations the framework permits.

The completeness of the element table is what makes the Chemistry layer tractable. Because the table is closed, and the space of possible elements is bounded, the space of possible molecules is constrained. And because the space of molecules is constrained, the framework can make predictions about what molecules must exist before anyone builds them. Chapter 3 develops those predictions in full.
