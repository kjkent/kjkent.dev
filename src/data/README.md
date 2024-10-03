# Notes

## Generating ASCII-art headshot

Uses [`chafa`](https://github.com/hpjansson/chafa) and
[`ansisvg`](https://github.com/wader/ansisvg).

### Generate the ASCII-art ANSI terminal output

Settings for diagonal-symbol art (16 colors):

```shell

chafa --format symbols \
			--symbols diagonal \
			--colors 16 \
			--color-space=din99d \
			--dither bayer \
			--fg-only \
			--optimize 9 \
			--work 6 \
			--polite true \
			headshot.png > headshot.ans

```

Settings for braille-character art (truecolor)

```shell

chafa --format symbols \
			--symbols braille \
			--colors full \
			--color-space din99d \
			--dither bayer \
			--fg-only \
			--optimize 9 \
			--work 6 \
			--polite true \
			headshot.png > headshot.ans

```

Ensure that any blank lines (with just one ESC sequence) are removed from the start of the ANSI output.

### Option: Generate an SVG

The generated SVG has quirks. The `line-height`is also a bit high, with no easy way to fix.
The `letter-spacing` and color values are also changed a bit.

```shell

cat headshot.ans |
	ansisvg --transparent \
	        --fontsize 16 \
					--colorscheme ChallengerDeep \
	        > headshot.svg

```

The amendments on the diagonal version:

```html
    <style>
        * {
            font-family: monospace;
            font-size: 16px;
						letter-spacing: -2px;
        }
        tspan, text {
            font-variant-ligatures: none;
            dominant-baseline: central;
            white-space: pre;
            fill: #fffafa;
        }
        .bg {
            stroke-width: "0.5px";
        }
        <!-- Foreground ANSI colors
					Based on the ChallengerDeep color scheme
					https://challenger-deep-theme.github.io/

					(with some tweaks)
				-->
        .fa0 { fill: #242932; }
        .fa1 { fill: #ffb378; }
        .fa6 { fill: #65b2ff; }
        .fa4 { fill: #bb9af7; }
        .fa3 { fill: #ffe9aa; }
        .fa7 { fill: #fffafa; }
        .fa8 { fill: #565575; }
        .fa9 { fill: #ffe9aa; }
        .fa12 { fill: #906cff; }
        .fa15 { fill: #fffafa; }
    </style>

```

### Option: Generate HTML from the ANSI output

Option 1: [`to-html`](https://github.com/Aloso/to-html)

```shell

to-html --no-prompt --doc 'cat headshot.ans' > headshot.html

```

Option 2: [`terminal-to-html`](https://github.com/buildkite/terminal-to-html)

```shell

cat headshot.ans | terminal-to-html -preview > headshot.html

```

### Option: Generate a PNG (easiest :D)

For this, I took a screenshot of the terminal and cropped it in GIMP. I ended up going with this for
compatibility and preciseness of output.
