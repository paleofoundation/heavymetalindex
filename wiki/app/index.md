---
title: Consumer app model
description: Design documentation for a future consumer-facing application that estimates heavy-metal contamination from ingredient lists.
audience: [researcher, commercial]
updated: 2026-04-24
status: planning
---

Design documentation for a future consumer-facing application that estimates heavy-metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. The app consumes the structured `contamination_profile` blocks in [ingredient](/ingredients) page frontmatter as its primary data input. Pages in this section describe ingredient-string parsing, recipe-proportion inference, per-ingredient profile combination with uncertainty handling, vulnerable-population flags, and consumer-facing disclaimer language.
