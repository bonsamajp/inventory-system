-- run_migrations.sql
-- sqlcmd -S server_name -U username -P password -d database_name -i run_migrations.sql

PRINT '開始: テーブル作成'

:r create_products.sql
:r create_categories.sql
:r create_orders.sql
:r create_stock_movements.sql
:r create_indexes.sql

PRINT '完了: すべてのテーブルが作成されました'
