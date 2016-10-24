# Minimalist table list

Table list with a minimalist design

![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-table-list/master/sources/imgs/preview.png)

<!-- See the [demo](https://codepen.io/darlanmendonca/full/vKqLOx) -->

### Install

With bower

```sh
bower install --save mn-table-list
```

Or just download the main file ```dist/mn-table-list.css``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-table-list.css">
```


### Usage

Just use the class `.mn-table-list` in a div, and inside of them, `.mn-item`.

```pug
.mn-table-list
  .mn-item
    span John Snow
    span snow@iknownothing.com

  .mn-item
    span Khaleesi
    span motherofdragons@targaryen.com
```


If you want a header, just use the tag header before items, each title need be h1, h2, ... h6, e.g.

```pug
.mn-table-list
  header
    h2 Name
    h3 Email

  .mn-item
    span John Snow
    span snow@iknownothing.com
```


## Responsive

In screens smaller than 600px, only the first content of in every .mn-item will be displayed. If you want force to always be visible, use the class `.sm-visible`, e.g.

```html
.mn-table-list
  header
    h3 Name
    h3.sm-visible Email

  .mn-item
    span John Snow
    span.sm-visible snow@iknownothing.com
```




