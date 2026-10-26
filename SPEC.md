# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: Branded implementation, simulated browser review and record accuracy review complete.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Checked implementation; actual keep/merge/publication evidence is recorded in issue #1. Learner replies are role-play.
- Next small decision: No follow-up feature selected; see issue #1 for actual delivery.
- Issue: https://github.com/kaw393939/is117-brand-studio-trial-learning/issues/1
- Branch: feat/1-brand-studio, created before decisions/previews.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                       | Secondary audience                                |
| ------------------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Person in a concrete situation        | Afternoon study session to casual meet-up with friends | Quiet-day wearer                                  |
| Goal or meaning they seek             | Easy everyday identity with some personality           | Personality without a loud page                   |
| Concern before choosing               | Generic/forgettable identity                           | Brand feels too loud                              |
| What the page should help them decide | Whether the identity fits their after-study plans      | Whether the small accent still feels easy to wear |
| Evidence or assumption                | Assumption; not validated                              | Assumption; not validated                         |

## Early brand brief

| Decision                                 | Agreement                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand name                               | Off Hours, fictional classroom brand; no trademark clearance claimed                                                                                       |
| One-sentence promise                     | An easy everyday identity for time after studying                                                                                                          |
| Primary archetype: the brand's character | Everyperson — proposed welcoming, nonexclusive character                                                                                                   |
| Three voice traits                       | Warm, plainspoken, lightly playful                                                                                                                         |
| One example line in this voice           | Out of study mode. / A white tee for casual plans and quiet days.                                                                                          |
| Learner's predicted audience effect      | B curves/italic type feel relaxed for leaving study mode; small blue/yellow accents add personality. Role-play preference, not measured audience response. |

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Shared headline / support / action                | Out of study mode. / A white tee for casual plans and quiet days. / Add to demo bag                                                                                                                                                                                                                          |
| Modernist preview, reference, and annotations     | public/explorations/modernist.html; Edward McKnight Kauffer drawing, 1934, V&A E.3770-2004. Actual linked image inspected in Computer Use: segmented figure, bars/circular joints, spiral, diagonal plane; translated modular grouping. https://www.vam.ac.uk/articles/what-was-modernism                    |
| Postmodernist preview, reference, and annotations | public/explorations/postmodernist.html; Martine Bedin, Super lamp prototype, 1981, V&A M.1-2011. Actual image inspected: blue semicircle, black wheels, radial bulbs/colored holders, lamp/toy relationship; translated restrained arch and mixed type. https://www.vam.ac.uk/articles/what-is-postmodernism |
| Chosen direction and reason                       | B, relaxed curve/type with small accents. Learner requested smaller phone image to reach controls sooner.                                                                                                                                                                                                    |
| Original SVG logo                                 | public/assets/wordmark.svg, original italic wordmark/curved underline; no trademark clearance claimed.                                                                                                                                                                                                       |
| Monochrome and small-size variants                | Same flat navy SVG at 156px desktop/130px phone. Rejected 110px stress sample; minimum 130 enforced. public/logo-study.html                                                                                                                                                                                  |
| Logo review at actual use size                    | Actual rendered sizes inspected and kept in coaching simulation at 130px minimum.                                                                                                                                                                                                                            |
| Shared palette, typography, spacing, and assets   | Shared styles.css: off-white/navy/cobalt/small yellow; real brand-headline, brand-support, add-button classes and SVG shared by shop/guide/studio.                                                                                                                                                           |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle   | Actual copy or interaction                                       | Visitor benefit / factual support                                                                                       |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Reciprocity | Two free outfit ideas: jeans and light overshirt, below purchase | Helps picture study-to-friends use without burying controls. No signup, payment condition or measured conversion claim. |
| Liking      | Study time. Friend time. / Out of study mode.                    | Familiar situation/warm voice; no invented endorsements or guaranteed response.                                         |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                            | Issue / PR                                | Actual checks and observations                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | public/index.html, styles.css, styleguide.html, assets/wordmark.svg, logo-study.html, explorations/, tests/browser/branding.spec.js, LEARNING.md | Issue #1; actual PR/delivery linked there | Final check: format/lint, 7 server + 13 Chromium cases passed. Real CUA desktop/keyboard review and 375px screenshots; role-play interpretation/phone revision/keep reason. No actual student learning evidence. |

## Later

No follow-up is selected. After keeping `BRAND-001`, choose one next cycle: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.
