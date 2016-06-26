# Fontawesome SVG
A little app for creating an icon system based on [Fontawesome](http://fontawesome.io). This system will generate an SVG defs from a directory of SVG icons. This same project can be used to convert any folder of .svg files into an SVG defs file as well :)

<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/fontawesome-svg.png" alt="screenshot of application" style="width: 100%; height: auto;">

## Usage
- Clone the repo then run `npm install` and `gulp svg` to create an SVG defs file.
- Grab the contents from the `/images/icons/svgdefs.svg` file for your definition file.
- Reference the icon in the SVG defs file like this:

```html
<svg aria-hidden="true" class="svg-icon">
  <use xlink:href="#twitter"></use>
</svg>
```

### Hint
Only grab the a chunk from the svgdefs.svg file that you need for you icon set. e.g.

```html
<svg style="display: none">
  <symbol id="twitter" viewBox="0 0 30 32">
    <path d="M28.93 7.286q-1.197 1.75-2.894 2.982.018.25.018.75 0 2.32-.68 4.634t-2.062 4.437-3.295 3.758-4.607 2.607-5.768.973q-4.84 0-8.857-2.59.625.072 1.393.072 4.018 0 7.16-2.464-1.874-.036-3.356-1.152t-2.036-2.848q.59.09 1.09.09.767 0 1.517-.197-2-.412-3.313-1.992t-1.313-3.67v-.07q1.214.678 2.607.73-1.18-.785-1.875-2.053t-.697-2.75q0-1.57.786-2.91 2.16 2.66 5.258 4.258t6.634 1.777q-.143-.68-.143-1.32 0-2.394 1.687-4.08t4.08-1.69q2.5 0 4.214 1.822Q26.428 6.017 28.143 5q-.66 2.053-2.536 3.178 1.66-.18 3.32-.893z"
    />
  </symbol>
</svg>
```
