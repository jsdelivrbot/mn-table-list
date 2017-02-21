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


## Grid system

To setup the flow of itens, we use another module, called [mn-layout](https://github.com/minimalist-components/mn-layout/)`, but you can use whatever grid system that you wish.

In example below, we use the classes `.mn-layout-column`, `.mn-layout-sm-row` and `.flex` to define a flex direction to content.

```html
<div class="mn-table-list">
  <header class="mn-layout-column mn-layout-sm-row">
    <h3 class="flex">Name</h3>
    <h3 class="flex">Email</h3>
  </header>

  <div class="mn-item mn-layout-column mn-layout-sm-row">
    <span class="flex">John Snow</span>
    <span class="flex">snow@iknownothing.com</span>
  </div>
</div>
```




