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

Juse use the class `.mn-list` in a tag table, and use inside their, thead, and tbody to content.

```html
<div class="mn-list">
  <header>
    <h3>Name</h3>
    <h3>Email</h3>
  </header>

  <div class="mn-list-item">
    <span>John Snow</span>
    <span>snow@iknownothing.com</span>
  </div>
  <div class="mn-list-item">
    <span>Khaleesi</span>
    <span>motherofdragons@targaryen.com</span>
  </div>
</div>
```


## Responsive

In screens smaller than 600px, only the first td in every line will be displayed. If you want force a td to always be visible, use the class `.sm-visible`, e.g.

```html
<header>
  <h3>Name</h3>
  <h3 class="sm-visible">Email</h3>
</header>

<div class="mn-list-item">
  <span>John Snow</span>
  <span class="sm-visible">snow@iknownothing.com</span>
</div>
```




