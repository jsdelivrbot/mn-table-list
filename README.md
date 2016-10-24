# Minimalist table list

Table list with a minimalist design

<!-- See the [demo](https://codepen.io/darlanmendonca/full/vKqLOx) -->

### Install

With bower

```sh
bower install --save mn-list
```

Or just download the main file ```dist/mn-list.css``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-list.css">
```


### Usage

Just use the class `.mn-list` in a div, and inside of them, `.mn-list-item`.

```pug
.mn-list
  .mn-list-item
    span John Snow
    span snow@iknownothing.com

  .mn-list-item
    span Khaleesi
    span motherofdragons@targaryen.com
```


If you want a header, just use the tag header before items, each title need be h1, h2, ... h6, e.g.

```pug
.mn-list
  header
    h2 Name
    h3 Email
    
  .mn-list-item
    span John Snow
    span snow@iknownothing.com
```


## Responsive

In screens smaller than 600px, only the first td in every line will be displayed. If you want force a td to always be visible, use the class `.sm-visible`, e.g.

```html
.mn-list
  header
    h3 Name
    h3.sm-visible Email

  .mn-list-item
    span John Snow
    span.sm-visible snow@iknownothing.com
```




