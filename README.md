# kjkent.dev

## What is this?

This repo holds the source code for [kjkent.dev](https://kjkent.dev), a simple
static site compiled with [Astro](https://astro.build), using React (for component-oriented development), TypeScript, Tailwind CSS, and MDX.

## Package structure

```Bash
@
├── dist         # Build output (VCS-ignored)
│
└── src          # Layouts, components, content, utilities, etc.
    ├── data     # Content
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

## Notes

For typing React components that use `{children,` and/or `...props}`, [this page](https://mortenbarklund.com/blog/react-typescript-props-spread/) presents a compelling argument for using `ComponentPropsWithoutRef<>` for the following reasons:

- Easy to write
- Excludes `ref`, which should never be passed in code.
- Includes specific properties
- Excludes invalid properties

Point 2 & 4 seem the same, but Barklund separates them presumably because the alternatives all fail to exclude `ref`, even if otherwise successful.

## src/content

This directory is reserved for Astro during the transition to the new Content
Collections API. Aside from `config.ts`, do not add files to this directory.
