# Fontawesome SVG
A little app for creating an icon system based on [Fontawesome](http://fontawesome.io). This system will generate an SVG defs from a directory of SVG icons.

## Usage
- Clone the repo then run `npm install` and `gulp svg` to create an SVG defs file.
- Grab the contents from the `/images/icons/svgdefs.svg` file for your definition file.
- Reference the icon in the SVG defs file like this:

```
<svg role="img" class="svg-icon">
  <use xlink:href="#icon-arrow-right"></use>
</svg>
```
