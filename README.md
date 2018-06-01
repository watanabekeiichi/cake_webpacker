## Installation

```
$ git clone git@github.com:ayasamind/cake_webpacker.git
$ cd cake_webpacker
$ composer install
$ yarn install
```

## Settings

Edit src/Template/Layouts/default.ctp

```
<!-- ルートドメイン:3000/bundle.js を追記　 -->
<script src='http://localhost:3000/bundle.js'></script>
```

## Run

```
$ yarn run dev
```
