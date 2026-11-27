# data-query

AI に CSV や JSON を集計させると、pandas を入れてスクリプトを書き、動かして直す往復が始まりがちです。data-query を入れると、エージェントはスクリプトを書かず、自分で SQL を1本書いて DuckDB の CLI で走らせます。DuckDB は、CSV・JSON・Parquet のファイルを、取り込まずにそのまま SQL で読めるデータベースです（`FROM '売上.csv'` と書けます）。

## 使い方

入れたあとは、ふだんどおりに頼みます。

> 売上.csv を部門ごとに合計して、多い順に並べて

エージェントは次のような SQL を書いて走らせ、結果を読んで答えます。

```
duckdb -agent -c "SELECT 部門, SUM(金額) AS 金額 FROM '売上.csv' GROUP BY ALL ORDER BY 金額 DESC"
```

`GROUP BY ALL` は、集計していない列（ここでは部門）で束ねる DuckDB の書き方です。`-agent` は DuckDB 2.0 で入った、エージェント向けの出力の形です。結果の行が多いと最初と最後の20行だけを出し、省いたことを最後の行で知らせるので、エージェントが読む量が減り、省かれた結果を全部と取り違えることもありません。

SKILL.md には、エージェントが従う決まりとして、ほかに次のことを書いています。

- Windows の Excel が書いた日本語の CSV（Shift_JIS）は、`cp932` を指定して読む。`shift_jis` を指定すると、`①`・`㈱`・`髙` などの字で読み込みがエラーになります
- 金額は DECIMAL にして合計し、`28468682.40000003` のような小数の端数を出さない
- 出した数を、元の件数と合計で突き合わせてから答える
- 結果をファイルにするときは SQL の `COPY` で新しいファイルに書き、元のファイルは書き換えない
- JSON の入れ子をほどく書き方、複数のファイルをまとめて読む書き方、集計の前に列と型を見る書き方

## 速さとメモリ

200万行・82MB の売上の CSV で、3つの集計を DuckDB と pandas と polars（pandas より速いとされる、Python の表の処理のライブラリ）で比べました。DuckDB は pandas の約5倍速く、メモリは pandas の0.6〜0.9倍で済みました。polars とは、速さはほぼ同じで、メモリは DuckDB のほうが少なくなりました。

| 集計 | DuckDB | pandas | polars |
|---|---|---|---|
| 部門ごとの合計 | 0.32秒・157MB | 1.63秒・226MB | 0.28秒・281MB |
| 部門ごとの上位3件（窓関数） | 0.57秒・303MB | 2.91秒・343MB | 0.76秒・452MB |
| 商品の一覧と結合して分類ごとの合計 | 0.35秒・161MB | 1.88秒・254MB | 0.40秒・389MB |

pandas との差は、1回の集計で1〜2秒です。それよりも、エージェントがスクリプトを書いて動かし、エラーを直す往復が無くなることのほうが効きます。ただし、その往復の時間は測っていません。

- 3回の中央値です。時間は、ライブラリを読み込んでから集計を終えるまでです。
- DuckDB は Python のモジュールで測りました。SKILL.md が使う CLI とは、中の処理は同じですが、CLI では測っていません。
- 測った環境：2026年11月14日、クラウドの Linux（x64、4コア）、DuckDB 2.0.0、pandas 3.0.5、polars 2.1.0。3つの道具の答えが同じことを、計測のスクリプトが確かめています。Windows と Mac では測っていません。

手元で測り直すには、Linux か Mac（メモリの測り方が Windows に無いため）に Python 3 と pandas・duckdb（polars は入っていれば測ります）を入れて、このリポジトリの `tools/data-query/bench.py` を実行します。CSV はスクリプトが作ります。`--duckdb <duckdb の実行ファイルのパス>` を付けると、DuckDB を CLI で測ります。

```
python3 tools/data-query/bench.py --rows 2000000
```

## 入れ方

先に、DuckDB の CLI（2.0 以降）を、エージェントが動く PC に入れます。Windows は `winget install DuckDB.cli`、Mac は `brew install duckdb` です。winget に 2.0 がまだ無いときは、DuckDB の GitHub のリリースから CLI を落として置きます（[SKILL.md](../skills/data-query/SKILL.md) の「道具の場所」）。

次に、Skill を入れます。Claude Code・Codex・Cursor・GitHub Copilot・Antigravity に入ります。

```
npx skills add itoken-lab-jp/skills -g --skill data-query
```

`-g` は、全部のプロジェクトで使える置き場に入れる指定です。入れ方の詳しい説明は [README](../README.md#入れ方) にあります。

## 変更履歴

- 2026-11-16：説明文（description）を、「〜が要る作業を頼まれたら、手を付ける前に読む」の形に直した。本文は同じ。集計の頼みに当たるほかの Skill の説明文を同じ形に直すと、こちらが読まれなくなった（6回中3回が 12回中0回）ため、そろえた。直したあとは 12回中8回