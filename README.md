# Store Inventory Disclosure(店舗在庫情報公開アプリケーション)

## 概要

このアプリケーションは、店舗の在庫情報を外部に公開するサンプルです。
お客様側で商品の在庫状況を確認できるようにすることで、集客・問い合わせの増加を狙います。
また、検索されたワードを蓄積することで、商品需要の分析に繋げることができます。

## 機能

- 在庫検索サイト
  - 商品名による在庫検索
  - 商品カテゴリごとの取り扱い品目数の集計・表示
  - 商品ごとの詳細ページの表示
- 商品情報・在庫情報の登録 API
- 販売管理システム(商蔵奉行)から商品情報・在庫情報の CSV 出力、及び在庫情報の登録
  - Power Automate Desktop による作業自動化

## デモサイト

- [ライフポイント 在庫検索](https://store-inventory-disclosure-poc.pages.dev/)

## 使用技術

| カテゴリ       | 利用技術                                           |
| -------------- | -------------------------------------------------- |
| Frontend       | TypeScript, React, Next.js(SSG + SPA), TailwindCSS |
| Backend        | TypeScript                                         |
| Infrastructure | CloudFlare, Supabase                               |
| Database       | PostgreSQL                                         |
| etc...         | Power Automate Desktop                             |

## システム構成図

TODO

## ER 図

TODO

## 設定手順

### 在庫検索サイト

1. Supabase のセットアップ
   1. 新規プロジェクトの作成
   2. Databases -> Extensions から下記拡張機能を有効化
      - pgroonga
   3. database フォルダ内の`.sql`ファイルを全て実行し、Table 及び Function を作成
      - TODO: Row Level Security について記載
   4. 各マスタに商品情報、在庫情報を登録
2. 本プロジェクトの設定
   1. 本プロジェクトを clone
   2. `.env`ファイルを`.env.local`にコピーし、環境変数に Supabase プロジェクトの情報を設定
      - `NEXT_PUBLIC_SUPABASE_URL` : Project Settings -> Database -> API -> Project URL の`URL`から転記
      - `NEXT_PUBLIC_SUPABASE_ANON_KEY` : Project Settings -> Database -> Project API keys から転記
   3. `npm run dev`で起動

### 商品情報・在庫情報の登録 API

TODO
