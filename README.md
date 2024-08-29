# kjkent.dev

## What is this?

This repo holds the source code for [kjkent.dev](https://kjkent.dev), a simple
static site compiled with [Eleventy](https://11ty.dev).

## Package structure

```Bash
@
├── dist         # Eleventy build output (VCS-ignored)
│
└── src          # Eleventy template base dir
    ├── data     # Template data
    ├── include  # Template consumables
    └── layout   # Higher order templates
```

## TODO

- [ ] About Me page
- [ ] Initial blog/tutorial posts
- [ ] Contact options
- [ ] CV for jobs

## Eleventy quirks

These may well be a result of my familiarity with templating (ie., a
lack thereof) rather than peculiarities with Eleventy itself. Regardless, it's
at least useful (for me) to note:

- What I may refer to as "content", or "posts", Eleventy refers to as
  "templates". This makes logical sense, as the base level of information, such
  as metadata and links, is injected into the template during compilation.
  Templates that _wrap other templates_, to provide page formatting, structure,
  and reusable components, are called **layouts**.
