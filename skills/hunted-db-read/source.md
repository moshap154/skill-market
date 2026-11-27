# db-read

AI に DB を読ませると、Python のドライバを入れ、接続のスクリプトを書き、動かして直す往復が始まります。Oracle の Instant Client や SQL Server の ODBC のドライバのように、ドライバの前にクライアントのライブラリが要る DB もあります。db-read は、Skill に同梱した実行ファイル1つで PostgreSQL・MySQL・SQL Server・Oracle を読み、問い合わせの結果を CSV か JSON Lines で渡します。Python もクライアントのライブラリも要りません。

次の例の `sales` は、設定に書いた接続の名前です。エージェントは、Skill のフォルダーの `scripts/` にある実行ファイルをフルパスで呼びます（例ではパスを略しています）。

```
db-read tables sales
db-read columns sales 売上明細
db-read query sales "SELECT 部門, SUM(金額) AS 金額 FROM 売上明細 GROUP BY 部門" --out 結果.csv
```

つなぎ先は `~/.config/db-read/db.toml` に名前を付けて書きます。パスワードはファイルに書かず、パスワードを入れた環境変数の名前を書きます。書き方は [references/connections.md](../skills/db-read/references/connections.md) にあります。コマンドの一覧は `db-read --help` で出ます。

使えないものもあります。Intel の Mac と ARM の Windows では動きません。書き換え、ストアドプロシージャの呼び出し、バインド変数、Oracle のウォレット、Kerberos の認証にも対応していません。一覧は [SKILL.md](../skills/db-read/SKILL.md) の「できないこと」にあります。

## 読むだけの守り

db-read は読むための道具です。`SELECT` などで始まる文を1つ通し、書き換える文は DB につなぐ前に断ります。そのうえで、DB の側でもセッションかトランザクションを読み取り専用にしてから走らせます（SQL Server は最後に巻き戻します）。

ただし、これは誤操作よけです。本当の守りは、読むだけの権限のユーザーでつなぐことです。入れる前に、そのユーザーを用意しておくことを勧めます。どの DB で何を断るかは [references/guard.md](../skills/db-read/references/guard.md) にあります。

## 速さとメモリ

20万行×5列（連番・日付・文字・金額・日時）の表を全部 CSV に出す作業を、db-read と、同じ CSV を作る Python のスクリプト2通りで比べました。db-read は、ドライバと csv のスクリプトの1.3〜4倍、pandas の1.8〜6倍の速さでした。メモリは、db-read が 8MB 以下で、Python のスクリプトは 29〜219MB でした。集計して数十行を返すような問い合わせは測っていません。そうした問い合わせでも、ドライバを入れずに済む点は変わりません。

| DB | db-read | Python のドライバと csv | pandas の read_sql |
|---|---|---|---|
| PostgreSQL 17 | 0.37秒・3MB | 0.77秒・73MB | 1.53秒・219MB |
| MySQL 8.4 | 0.45秒・8MB | 1.86秒・111MB | 2.67秒・197MB |
| SQL Server 2022 | 0.86秒・5MB | 2.22秒・29MB | 2.82秒・179MB |
| Oracle 23 Free | 0.94秒・5MB | 1.27秒・49MB | 1.67秒・190MB |

- Python のドライバと csv：psycopg・PyMySQL・pymssql・python-oracledb でつなぎ、既定のカーソルで実行して、1万行ずつ取り出しながら標準の csv で書くスクリプトです（既定のカーソルでは、psycopg と PyMySQL は結果を一度に全部受け取ります）。
- pandas の read_sql：同じドライバの接続を `pandas.read_sql` に渡し、`to_csv` で書くスクリプトです。
- 時間は、どれも1回ずつ別のプロセスで起動してから CSV を書き終わるまで（Python は import も含む）を3回測った中央値です。メモリは最大の使用量（RSS）です。
- 測った環境：2026年11月14日、クラウドの Linux（x64、4コア）。DB は同じ機械の Docker の PostgreSQL 17・MySQL 8.4・SQL Server 2022・Oracle 23 Free です。Python 3.13、psycopg 3.3.9、PyMySQL 2.2.8、pymssql 2.4.6、python-oracledb 26.1.0、pandas 3.0.5 です。Windows と Mac では測っていません。ネットワークの先の DB では、転送の時間が両方に同じだけ足されます。

手元で測り直すには、[tools/db-read/bench/bench.py](../tools/db-read/bench/bench.py) の先頭に書いた手順で DB を立ててから、次を実行します。

```
python3 tools/db-read/bench/bench.py --rows 200000 --repeat 3
```

AI にスクリプトを書かせると、ドライバを入れてスクリプトを書き、動かして直す往復の時間も加わります。この表には、その時間は入っていません。

## 実行ファイルについて

同梱の実行ファイルは Windows（x64）・Mac（Apple シリコン）・Linux（x64）の3つで、1つ 6〜8MB です。Rust で書いたソースは [tools/db-read](../tools/db-read) にあり、実行ファイルにはソースの指紋が入っています。このリポジトリの CI は、指紋がソースと合うことと、3つの OS で実行ファイルが動くことを確かめています。本物の DB につなぐ試験（[fixtures](../tools/db-read/fixtures) の表を流し込んだ4つの DB と、自分の CA を使う MySQL・PostgreSQL）は、作者の側の CI で走らせています。手元で走らせる手順は [test/db-read.test.mjs](../test/db-read.test.mjs) の先頭にあります。

- Oracle には、Oracle が公開している Rust のドライバ（oracledb）を使っています。このドライバはまだ beta です。作者の側の CI で、本物の Oracle 23 Free に毎回つないで確かめています。
- MySQL のドライバは、`ca_cert` を書いたときにその CA だけを信じるように1か所を手直ししています（[tools/db-read/vendor](../tools/db-read/vendor/README.md)）。
- Windows と Linux の実行ファイルは [tools/db-read/build-all.sh](../tools/db-read/build-all.sh) で Linux の上で作り直せます。Mac の実行ファイルは Mac の上で `cargo build --release` で作ります。

## 入れ方

```
npx skills add itoken-lab-jp/skills -g --skill db-read
```

手順の本文は [SKILL.md](../skills/db-read/SKILL.md) です。入れ方の詳しい説明は [README](../README.md#入れ方) にあります。

## 変更履歴

- 2026-11-18：references を指す文を、何が書いてあるかと、いつ読むかを動作で書く形にそろえた（中身は同じ）