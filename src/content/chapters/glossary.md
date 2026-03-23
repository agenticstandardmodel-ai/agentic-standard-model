---
title: "Glossary"
chapter_number: 10
summary: "Framework terms organized by layer, from general posture through the biology and context layers."
status: draft
figure_ids: []
---

This glossary defines the technical terms used in the Agentic Standard Model. Entries are organized by framework layer rather than alphabetically, reflecting the dependency structure of the theory itself. Within each layer section, entries appear in the order most useful for a first reading. Each entry states the definition, the load-bearing structural property the term names, and the chapter where it is developed in full.

Terms borrowed from physics or chemistry, including element, fermion, boson, molecule, bond, and force law, are structural classifications rather than decorative analogies. Each is used because the underlying structure is genuinely isomorphic. See the Preface for the full explanation of this choice.

## General Framework Terms

Terms that apply across all layers of the framework and define its core scientific posture.

### Agentic Standard Model (ASM)

The structural theory of intelligent agentic systems presented in this book. The ASM defines irreducible functional elements, the rules governing their composition into molecules, the force laws that constrain valid interactions, and the biological layer at which bounded autonomous behavior emerges. It is a proto-theory in active construction, not a completed system.

**Developed in:** Chapter 1: Foundations

### Completeness Claim

The assertion that the 22 confirmed elements in the Periodic Table are sufficient to construct any agentic system that exists or could be constructed from currently understood components. "Confirmed" means each element survived a systematic reduction test against agent patterns documented at the time of locking. The claim is a falsifiable conjecture: a single useful composition that cannot be reduced to existing elements would require revision.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Confirmed Element

An element that survived the stress-test reduction methodology: it could not be decomposed into other ASM elements, and no known agent pattern required matter outside the table to express it. Confirmed status is a point-in-time assessment, not a permanent classification.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Dependency Layer

The structural principle that organizes elements into periods. An element belongs to the lowest layer at which it can function given its dependencies. Dependency layers are derived from the actual dependency relations between elements, not assigned by judgment. This is the same principle that governs the OSI model: layers are real because dependencies are real.

**Developed in:** Chapter 1: Foundations

### Falsification Condition

The explicit condition under which a claim in the ASM would require revision. For the completeness claim: a single useful composition that cannot be reduced to existing elements. For a force law: a structurally valid interaction that violates the stated channel constraint without producing the predicted failure mode. Stating falsification conditions is what distinguishes theory from taxonomy.

**Developed in:** Chapter 1: Foundations; Chapter 6: Structural Proofs and Stress-Tests

### Functional Abstraction Level

The level of description at which the ASM operates. Elements are defined by what they do, not by how they do it. Two implementations of the same functional role are the same ASM element regardless of their internal architecture. This level sits above implementation and below business logic.

**Developed in:** Chapter 1: Foundations

### Predicted Gap

An element or boson whose existence is demanded by the structure of the framework before it has been formally instantiated. Predicted gaps are structural claims about what must exist, not placeholders for things that have not been built yet. The Interaction Skill and A2T termination boson are current predicted gaps.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Stress-Test

The reduction methodology used to validate the element inventory. A stress-test takes a known agent pattern or composition and asks whether it can be expressed entirely using existing ASM elements and bonding rules, or whether it requires new matter. A stress-test that reduces cleanly is evidence for the completeness claim. One that does not is a candidate for a new element.

**Developed in:** Chapter 6: Structural Proofs and Stress-Tests

## Physics Layer Terms

Terms governing the element table: the irreducible building blocks of agentic systems and the protocols that mediate their interactions.

### Element

An irreducible functional primitive at the level of abstraction the framework operates at. An element cannot be decomposed into other ASM elements. If a proposed element can be decomposed, it is not an element by definition. The test is structural, not intuitive. There are currently 22 confirmed elements organized across 6 periods and 7 functional groups.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Fermion-Class Element

Any of the 22 confirmed elements in periods P1 through P6. Fermion-class elements instantiate as components inside compositions. They hold state, execute functions, and can be versioned, registered, governed, and substituted. They exist inside agent molecules, not in the exchanges between them.

**Developed in:** Chapter 1: Foundations; Chapter 2: The Agentic Periodic Table

### Boson-Class Protocol

One of the three exchange protocols, Mc, A2, and A3, that mediate interactions between components. Boson-class protocols do not live inside any component. They exist in the exchange itself, between components. They cannot be versioned, registered, or governed the same way fermion-class elements can, because they do not inhabit components. They inhabit the spaces between them.

**Developed in:** Chapter 1: Foundations; Chapter 4: The Force Laws

### Period (P1-P6)

A row in the Agentic Periodic Table. An element's period is the lowest dependency layer at which it can function. Period is derived from dependency relations, not assigned. Elements in the same period have the same dependency depth. Period 1 contains substrate elements (Ce, Fs, Db, Ex). Period 6 contains reasoning pattern elements (Rs, Ts, Gs, Ds, and the predicted Interaction Skill).

**Developed in:** Chapter 2: The Agentic Periodic Table

### Group

A column in the Agentic Periodic Table encoding functional character. Elements in the same group share a family of functional properties regardless of their period. The seven groups are: Substrate, State, Retention, Semantic Processing, Governance, Cognitive, and Reasoning Patterns.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Quantum Number

A dimension of configuration for the Language Model element (Lm). Quantum numbers specify the operational characteristics of a specific Lm instance: scale (lambda), reasoning mode (rho), modality (tau), context window (kappa), and provider (sigma). Two Lm instances with different quantum numbers are structurally distinct in ways that affect composition properties.

**Developed in:** Chapter 2: The Agentic Periodic Table

### Sub-Atomic Layer

The hardware substrate beneath the element table: CPU, GPU, RAM, Storage, and Network. Every ASM element reduces to a configuration of sub-atomic primitives. The sub-atomic layer is not part of the element table but defines the physical instantiation space within which elements operate.

**Developed in:** Chapter 1: Foundations

### Mc (Tool Invocation Protocol)

The boson-class protocol mediating contract-declared capability discovery and invocation between a cognitive element and a tool molecule. Mc exists in the exchange between the agent and the tool, not inside either. The current dominant instantiation is the Model Context Protocol (MCP). Mc is topology-agnostic in the ASM: any arrangement enabling contract-declared tool discovery and invocation is a valid Mc surface.

**Developed in:** Chapter 4: The Force Laws

### A2 (Governed Delegation Protocol)

The boson-class protocol mediating intent-and-authority-carrying delegation between registered cognitive molecules. A2 carries task, intent, and authority signals. It is only valid between two cognitive molecules: agent-to-tool interaction uses Mc, not A2. A2 is the mechanism through which intent chains are propagated across delegation boundaries. The current dominant instantiation is the Agent-to-Agent (A2A) protocol.

**Developed in:** Chapter 4: The Force Laws

### A3 (Human Interface Protocol)

The boson-class protocol mediating the delivery of legible output from an agentic system to the human whose intent initiated the execution. A3 is the only boson that closes an intent chain. It is transport-agnostic in the ASM. The current dominant instantiation is A2UI.

**Developed in:** Chapter 4: The Force Laws

## Chemistry Layer Terms

Terms governing composition: how elements bond into molecules, which bonds are load-bearing, and what structural properties emerge from specific configurations.

### Molecule

A stable composition of ASM elements governed by bonding rules. Molecules are not elements: they are not irreducible. A molecule can be decomposed into its constituent elements and bonds. The two primary molecule classes are tool molecules, Action archetype bonded with Infrastructure substrate, and agent molecules, cognitive elements bonded with retention, state, and tool molecules.

**Developed in:** Chapter 3: The Chemistry Layer

### Tool Molecule

A molecule formed by a covalent bond between an Action archetype element (Rt, Wt, Lt, Ct) and an Infrastructure substrate element (Ce, Fs, Db, Ex). Every tool that exists or could exist reduces to this bond. The tool molecule completeness claim was stress-tested against the documented range of tool types at the time of writing and held in each case.

**Developed in:** Chapter 3: The Chemistry Layer

### Agent Molecule

A stable composition of a Language Model element with retention elements, state elements, and tool molecules that exhibits bounded autonomous behavior when registered as a stable bound state. Agent molecules are the first level of composition at which autonomous behavior emerges. An agent molecule that is not registered is an assembly, not an agent.

**Developed in:** Chapter 3: The Chemistry Layer

### Bond

The structural relationship between two elements or molecules in a composition. Bonds carry information about dependency, substitutability, and load-bearing function. The ASM defines four bond types: covalent, load-bearing and identity-defining; coordination, functional but substitutable; protocol, mediated by a boson-class protocol; and dashed, optional but structural when present.

**Developed in:** Chapter 3: The Chemistry Layer

### Load-Bearing Bond

A covalent bond whose removal changes the fundamental properties or viability of the composition. Removing a load-bearing bond does not merely reduce performance: it changes the structural identity of the molecule or renders it non-functional. Load-bearing status is recorded in the bond manifest.

**Developed in:** Chapter 3: The Chemistry Layer

### Bond Manifest

The explicit record of all bonds in a molecular formula, specifying for each bond which elements or molecules are connected, the bond type, whether the bond is load-bearing, and the structural rationale. The bond manifest is the primary artifact for architectural review and stress-testing.

**Developed in:** Chapter 3: The Chemistry Layer

### Molecular Notation

The formal notation system for expressing ASM compositions. Level-1 notation references bare element symbols. Level-2 notation references named tool molecules rather than bare archetypes, enabling more precise specification of real system configurations. Quantum number tuples can be appended to specify element configuration.

**Developed in:** Chapter 3: The Chemistry Layer

### Action Archetype

One of four element types that define the operational class of a tool molecule: Read (Rt), Write (Wt), List (Lt), and Call (Ct). Every tool molecule contains exactly one Action archetype. The Action archetype determines the fundamental operation the tool performs.

**Developed in:** Chapter 3: The Chemistry Layer

### Infrastructure Substrate

One of four element types that define the resource class a tool molecule operates on: Compute Environment (Ce), File System (Fs), Database (Db), and External System (Ex). Every tool molecule contains exactly one Infrastructure substrate. The Infrastructure substrate determines what the tool operates on.

**Developed in:** Chapter 3: The Chemistry Layer

### ReAct Molecule

The minimum viable agent molecule configuration: Language Model (Lm) bonded with Working Memory (Wm), Execution State (Es), and at least one tool molecule via protocol bond. The ReAct molecule is the first stable configuration that exhibits bounded autonomous behavior. It is the reference molecule for the cell principle and the baseline for more complex agent configurations.

**Developed in:** Chapter 3: The Chemistry Layer

### Orchestrator

A cognitive molecule that coordinates the behavior of sub-agent molecules through A2 delegation bonds. An orchestrator does not perform work directly: it directs, delegates, and synthesizes. In the biology layer, the orchestrator corresponds to the nucleus of the cell.

**Developed in:** Chapter 3: The Chemistry Layer; Chapter 5: The Biology Layer

## Force Law Terms

Terms governing the three interaction channels, their conservation laws, and the structural violations that arise when they are used incorrectly.

### Force Law

A constraint on valid interaction channels in an agentic system. Each force law names the channel, states what the channel conserves, and identifies the forbidden patterns that result from violation. Force laws are not stylistic guidelines: violations produce specific, predictable failure modes rather than reduced performance.

**Developed in:** Chapter 4: The Force Laws

### Strong Agentic Force

The force channel governing tool invocation, mediated by Mc. The strong agentic force conserves capability contract fidelity: the capability invoked must match the capability declared. Violations occur when a component invokes a tool through a channel that cannot carry the capability contract, or when the capability contract is absent.

**Developed in:** Chapter 4: The Force Laws

### Weak Agentic Force Family

The force channel family governing delegation between cognitive molecules, mediated by A2 and its predicted variants. The weak agentic force family conserves authority scope: authority granted to a sub-agent must be a subset of authority held by the delegating agent. Violations produce authority scope creep, intent drift, and unauditable execution chains.

**Developed in:** Chapter 4: The Force Laws

### Human Closure Force

The force channel governing the delivery of legible output to the human whose intent initiated execution, mediated by A3. The human closure force conserves intent legibility: the output delivered to the human must be interpretable in terms of the intent that initiated the execution. Violations produce outputs that cannot be traced back to the initiating intent.

**Developed in:** Chapter 4: The Force Laws

### Conservation Law

The quantity that a force law preserves across an interaction. Each of the three force channels conserves a specific property: capability contract fidelity in the strong force, authority scope in the weak force family, and intent legibility in the human closure force. The joint conservation law of all three forces is the Symmetry Principle.

**Developed in:** Chapter 4: The Force Laws

### Symmetry Principle

The joint conservation law of the three agentic forces, derived as a theorem from the force laws rather than stated as a separate postulate. The Symmetry Principle states that legibility of intent across the governance boundary is jointly conserved by all three force channels. A system that violates any one of the three force laws will fail to conserve intent legibility across the governance boundary.

**Developed in:** Chapter 4: The Force Laws

### Intent Chain

The traceable sequence of delegations from the initiating human prompt through every A2 delegation in an agentic execution. The intent chain is a first-class object in the ASM. A valid agentic system must be able to reconstruct the intent chain for any execution trace. The human prompt is a boundary injection mechanism that initializes the intent chain.

**Developed in:** Chapter 4: The Force Laws

### Forbidden Pattern

A composition or interaction configuration that violates a force law. Forbidden patterns are not merely inadvisable: they produce specific, predictable failure modes that the force law predicts in advance. The most common forbidden pattern is invoking a sub-agent through Mc, the tool channel, rather than A2, the delegation channel, which breaks the intent chain and corrupts authority scope.

**Developed in:** Chapter 4: The Force Laws

### Authority Scope

The set of operations and resources a cognitive molecule is permitted to act on, on behalf of a specific principal. Authority scope must be conserved across A2 delegations: a sub-agent cannot be granted authority the delegating agent does not hold. Authority scope violation is the primary failure mode of the weak agentic force family.

**Developed in:** Chapter 4: The Force Laws

### Boson Surface

The logical protocol surface defined by a force law, independent of its physical topology or current instantiation. The boson surface determines what a channel can and cannot carry. Mc's boson surface carries capability contracts and execution results. A2's boson surface carries intent, authority, and task. A3's boson surface carries legible output for human interpretation.

**Developed in:** Chapter 4: The Force Laws

## Biology Layer Terms

Terms governing the cell-level organization of agentic systems. The biology analogy is bounded precisely at the cell: nothing above the cell is named or claimed in the current framework.

### Agentic System (Cell)

A bounded, self-regulating collection of agent molecules with shared memory, shared state, and coordinated behavior under a governance boundary. The agentic system is the cell-level emergence in the ASM: the first organizational level at which properties like homeostasis, lifecycle, and governance boundary become meaningful. The cell analogy is structurally grounded, not decorative.

**Developed in:** Chapter 5: The Biology Layer

### Governance Boundary (Membrane)

The operational boundary of an agentic system that defines what the system is permitted to do, on whose behalf, and under what constraints. The governance boundary corresponds to the cell membrane in the biology analogy. Agents inside the boundary are governed; interactions across the boundary are subject to force law constraints.

**Developed in:** Chapter 5: The Biology Layer

### Nucleus (Orchestrator Role)

The orchestrating cognitive molecule that coordinates sub-agent behavior within an agentic system. The nucleus directs work, synthesizes results, and maintains the integrity of the intent chain across delegations. In multi-agent systems, the nucleus is the agent molecule that holds the primary A2 delegation surface.

**Developed in:** Chapter 5: The Biology Layer

### Organelle (Sub-Agent)

A sub-agent molecule operating within an agentic system under orchestration. Organelles perform specific specialized functions and are delegated work through A2 bonds by the nucleus. Like biological organelles, sub-agents are not autonomous in isolation: their function is defined by their role within the larger system.

**Developed in:** Chapter 5: The Biology Layer

### Cytoplasm (Shared State)

A shared Semantic Memory and Structured Data Store accessible to all agent molecules within an agentic system. The cytoplasm carries the working state, shared context, and accumulated knowledge of the system. It is the medium through which organelles communicate without direct A2 delegation.

**Developed in:** Chapter 5: The Biology Layer

### Operational Mass

The property conferred on an agent molecule by registration in the Registry. An unregistered composition has no operational mass: it cannot be discovered, governed, or invoked through valid protocol surfaces. Registration is the mechanism by which a molecule transitions from an assembly to a functioning agent with a defined operational surface.

**Developed in:** Chapter 5: The Biology Layer

### Cell Principle

The structural claim that the agent is the fundamental unit of autonomous behavior in the ASM, and that it is not an element but the first molecular configuration complex enough to exhibit bounded autonomy. No single element is sufficient for autonomous behavior. The agent emerges from the correct assembly and registration of elements into a stable bound state.

**Developed in:** Chapter 1: Foundations; Chapter 5: The Biology Layer

### Episodic Memory (Matter-Antimatter)

The ASM correspondence between episodic memory formation and the matter-antimatter annihilation concept. An execution trace paired with its episodic memory record constitutes a complete operational event. The episodic memory is not a copy of the execution: it is the structured record that survives the execution and feeds into future behavior.

**Developed in:** Chapter 5: The Biology Layer

## Context Layer Terms

Terms governing the operational environment in which agentic systems are deployed, governed, and evaluated.

### Registry

The bond-formation mechanism and governance field of the context layer. The Registry is the surface through which agent molecules acquire operational mass: registration declares a molecule's capabilities, dependencies, and operational boundaries. The Registry is the gauge field of the ASM: it gives compositions the operational properties that make them discoverable, governable, and auditable.

**Developed in:** Chapter 5: The Biology Layer

### Governance

The set of constraints defining what an agentic system is permitted to do, on whose behalf, and within what operational boundaries. Governance is not a layer separate from the framework: it is enforced through the force laws, the governance boundary, and the Registry. A system without governance has no defined failure mode when it acts outside its intended scope.

**Developed in:** Chapter 4: The Force Laws; Chapter 5: The Biology Layer

### Evaluation Cycle

The process through which execution traces become episodic memory and feed into future system behavior. The evaluation cycle closes the operational loop of an agentic system: execution produces traces, traces are evaluated, evaluations produce episodic memories, and episodic memories inform future composition and configuration decisions.

**Developed in:** Chapter 5: The Biology Layer

### Boundary Injection

The mechanism by which a human prompt initializes an intent chain and enters the agentic system. The human prompt is not a boson: it does not mediate interaction between two agentic components. It is a boundary injection that crosses the governance boundary and initializes an execution. The boundary injection is the starting point from which the intent chain must be traceable.

**Developed in:** Chapter 4: The Force Laws

This glossary reflects the framework at v0.3. As the element inventory is refined, as Sessions B and C complete the Biology layer and formalize the Symmetry Principle, and as community stress-tests produce new documented reductions, entries will be added and existing entries will be updated to reflect the current state of the theory.
