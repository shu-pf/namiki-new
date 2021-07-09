# namiki-new

## デプロイ場所

https://namiki.shop/


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## firebase

デプロイ方法

```
firebase deploy
```

## 命名規則

### CSS

FLOCSS を使用

参考 https://github.com/hiloki/flocss

### 画像

#### フォルダ分け

- ページごとに画像フォルダを分ける
- 共通の画像は common フォルダに入れる

#### ファイル名

- ファイル名は「使用場所\_用途(連番)」
- 同じ用途の画像が複数あった場合には、連番を付ける

#### 例

サイドバーで使用しているバナー画像の場合 ⇒ side_bnr01.png

参考 https://laraweb.net/surrounding/7452/
