---
noindex: true
title: Consumer app model
dek: "A proposed consumer application estimates metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. Coverage includes ingredient parsing, recipe proportions, uncertainty and vulnerable population flags."
description: Design documentation for a future consumer-facing application that estimates heavy-metal contamination from ingredient lists.
audience: [researcher, commercial]
updated: 2026-04-24
status: planning
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating consumer app model research context."
---

## Overview

Design documentation for a future consumer-facing application that estimates heavy-metal contamination likelihood in packaged foods from ingredient lists and nutrition facts. The app consumes the structured `contamination_profile` blocks in [ingredient](/ingredients) page frontmatter as its primary data input. Pages in this section describe ingredient-string parsing, recipe-proportion inference, per-ingredient profile combination with uncertainty handling, vulnerable-population flags, and consumer-facing disclaimer language.
