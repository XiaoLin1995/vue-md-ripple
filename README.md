
# vue-md-ripple

## Install
```
yarn add vue-md-ripple
```
or
```
npm install vue-md-ripple
```

## Demo

[点击查看 Demo](https://xiaolin1995.github.io/vue-md-ripple/demo/)

## Usage

```js
// main.js

// ...
import VueRipple from 'vue-md-ripple'
import 'vue-md-ripple/dist/ripple.css'

Vue.use(VueRipple)
// ...
```

```html
<template>
  <div>
    <div class="btn" v-ripple>Button</div>
    <div class="btn" v-ripple="{center: true, ios: true}">Center</div>
    <div class="btn" v-ripple style="color: red">Red Ripple</div>
  </div>
</template>
```
