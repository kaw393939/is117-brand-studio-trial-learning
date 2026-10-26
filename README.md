# Off Hours — completed IS117 coaching simulation

A fictional white T-shirt brand built through the IS117 Brand Studio assignment. A separate AI agent played the learner; the SSH clone, files, browser operations and checks are real. This is a worked example, not evidence of an actual student's learning or customer demand. AI supplied substantial design and code assistance.

**Starting the assignment?** Use the unfinished [IS117 Brand Studio template](https://github.com/kaw393939/is117-brand-studio#readme). This repository preserves the completed trial for instructor review.

## Review the work

- [Storefront](https://kaw393939.github.io/is117-brand-studio-trial-learning/) and [live style guide](https://kaw393939.github.io/is117-brand-studio-trial-learning/styleguide.html)
- [Two same-offer design studies](https://kaw393939.github.io/is117-brand-studio-trial-learning/explorations/) and [logo-size study](https://kaw393939.github.io/is117-brand-studio-trial-learning/logo-study.html)
- [SPEC.md](SPEC.md): audience hypotheses, brief, decisions and actual checks
- [LEARNING.md](LEARNING.md): short AI-drafted record, reviewed for accuracy by the simulated learner before commit/push
- [Worked rubric review](docs/rubric-example.md): illustrative instructor use, no real student grade
- [Issue #1](https://github.com/kaw393939/is117-brand-studio-trial-learning/issues/1): actual PR, merge and publication evidence

The role-play learner chose Off Hours for the transition from studying to meeting friends, revised the copy, preferred the curved/italic direction, and requested a smaller phone image. The shop and guide share CSS and the original SVG wordmark. The $28 price is fictional. The temporary demo bag takes no payments or orders.

## Run the local preview

Use Node.js 22.16+ on the 22 LTS line (recommended), or 24+, and npm. From this clone:

```sh
npm ci
npm run dev
```

Open the address printed in the terminal, normally [http://localhost:5173](http://localhost:5173), and leave the server running. Saving HTML, CSS, JavaScript or assets under `public/` refreshes the browser automatically. Unsaved edits do not appear. Refreshing resets the temporary bag.

`npm start` starts the same development mode. Optional `npm run preview` serves a plain preview; refresh the browser yourself after saving. Stop either mode with **Ctrl+C**. Local edits do not publish to GitHub Pages.

## Verify

```sh
npm run setup:browser
npm run check
```

The first command installs the prepared Chromium dependency if missing. The complete check runs formatting/lint, 7 server cases and 13 real-browser cases, including bag behavior, shared identity, phone layout and live refresh. Passing checks support those assertions, not audience demand, persuasion effectiveness or complete accessibility. Actual desktop/keyboard operations and phone screenshots are linked from the learning record.
