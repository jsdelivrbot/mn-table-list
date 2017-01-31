[![npm version](https://badge.fury.io/js/mn-table-list.svg)](https://badge.fury.io/js/mn-table-list)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-table-list.svg)](https://gemnasium.com/github.com/minimalist-components/mn-table-list)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   

# mn-table-list

Table list with a minimalist design

<a href="https://minimalist-components.github.io/mn-table-list/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-table-list/master/preview.png">
</a>

See the [demo](https://minimalist-components.github.io/mn-table-list/)

### Install

```sh
npm install --save mn-table-list
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-table-list/tree/master/dist) with your preferred tool.


### Usage

Just use the class `.mn-table-list` in a div, and inside of them, `.mn-item`.

```html
<div class="mn-table-list">
  <div class="mn-item">
    <span>John Snow</span>
    <span>snow@iknownothing.com</span>
  </div>
</div>
```


If you want a header, just use the tag header before items, each title need be h1, h2, ... h6, e.g.

```html
<div class="mn-table-list">
  <header>
    <h2>Name</h2>
    <h2>Email</h2>
  </header>
  <!-- .mn-item's here -->
</div>
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




