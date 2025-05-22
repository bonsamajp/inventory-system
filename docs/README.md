inventory_sample/
│── backend/                   # バックエンド（Node.js, TypeScript, SQL Server）
│   ├── src/                    # ソースコード
│   │   ├── controllers/        # APIの処理
│   │   │   ├── products.ts     # 商品API
│   │   │   ├── orders.ts       # 発注API
│   │   │   ├── suppliers.ts    # 仕入先API
│   │   │   ├── stock.ts        # 在庫API
│   │   │
│   │   ├── models/             # データベースのスキーマ定義
│   │   │   ├── productModel.ts # 商品テーブルの定義
│   │   │   ├── orderModel.ts   # 発注テーブルの定義
│   │   │
│   │   ├── routes/             # APIルート
│   │   │   ├── productRoutes.ts # 商品ルート
│   │   │   ├── orderRoutes.ts   # 発注ルート
│   │   │
│   │   ├── database/           # DB接続
│   │   │   ├── db.ts           # SQL Server接続設定
│   │   │
│   │   ├── config/             # 環境変数や設定ファイル
│   │   │   ├── env.ts          # 設定管理
│   │   │
│   │   ├── utils/              # ヘルパー関数
│   │   │   ├── logger.ts       # ログ管理
│   │   │
│   │   ├── server.ts           # メインのサーバー設定
│   │
│   ├── .gitignore              # Git管理除外ファイル
│   ├── package.json            # npm 設定
│   ├── tsconfig.json           # TypeScript 設定
│   ├── README.md               # バックエンドの説明
│   ├── .env                    # 環境変数
│
│── frontend/                   # フロントエンド（ReactやVueなど）
│   ├── public/                  # 公開用ファイル（favicon, index.html など）
│   ├── src/                     # フロントエンドソースコード
│   │   ├── components/          # UIコンポーネント
│   │   ├── pages/               # 各ページ（Home.tsx, Inventory.tsx など）
│   │   ├── services/            # API通信処理（Axiosなど）
│   │   ├── utils/               # ヘルパー関数
│   │   ├── App.tsx              # アプリのルートコンポーネント
│   │   ├── main.tsx             # エントリーポイント
│   │
│   ├── .gitignore               # Git管理除外ファイル
│   ├── package.json             # npm 設定
│   ├── tsconfig.json            # TypeScript 設定
│   ├── README.md                # フロントエンドの説明
│
│── .gitignore                    # 全体のGit管理除外ファイル
│── README.md                     # プロジェクト全体の説明
│── docker-compose.yml             # Docker管理ファイル（任意）