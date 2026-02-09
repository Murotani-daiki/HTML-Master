const challenges = {
    1: {
        id: 1,
        title: "JS基礎：変数と定数",
        steps: [
            {
                title: "1-1. コンソール出力（console.log）",
                points: ["console.log()で文字を表示できる", "文字列はクォート（'または\"）で囲む", "デバッグ（不具合修正）の基本ツール"],
                desc: "プログラミングの第一歩は「Hello」と表示させることです。console.logを使ってコンソールに出力しましょう。",
                reqs: ["console.logを使用すること", "「Hello」という文字列を出力すること"],
                prefixCode: "// ここにコードを書く\n",
                initialCode: "",
                check: (code, logs) => {
                    const hasLog = /console\.log/.test(code);
                    const helloLog = logs.some(log => typeof log[0] === 'string' && log[0].includes('Hello'));
                    return hasLog && helloLog;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>console.log()</strong>は、プログラムの結果を確認するための最も基本的な命令です。</p>
                        <p>括弧の中に書いた文字や数値が、画面右側の「コンソール」に表示されます。</p>
                        <p>文字を表示する場合は、クォーテーション（<code>"</code> または <code>'</code>）で囲む必要があります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>console.log("こんにちは");</pre>
                        <pre>console.log(123);</pre>
                    </div>
                `
            },
            {
                title: "1-2. 変数（let）の宣言",
                points: ["let 変数名 = 値; で変数を宣言する", "変数は「入れ物」のようなもの", "中身を入れたり出したりできる"],
                desc: "変数「message」を作り、「JavaScript」という文字を代入してください。",
                reqs: ["letを使って変数を宣言すること", "変数名を「message」にすること", "「JavaScript」という文字を代入すること"],
                prefixCode: "// 変数を作ってみよう\n",
                initialCode: "",
                check: (code, logs) => /let\s+message\s*=\s*["']JavaScript["']/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>変数（Variables）</strong>は、データを入れるための名前付きの「箱」です。</p>
                        <p>JavaScriptでは <code>let</code> を使ってこの箱を作ります（宣言といいます）。</p>
                        <p><code>=</code> は「等しい」という意味ではなく、<strong>「右の値を左の箱に入れる（代入）」</strong>という意味です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>let name = "田中";
console.log(name);</pre>
                    </div>
                `
            },
            {
                title: "1-3. 定数（const）の宣言",
                points: ["constは「変更できない変数（定数）」", "再代入しようとするとエラーになる", "基本的にはletよりconstを使うのがモダン"],
                desc: "定数「pi」を作り、円周率のような値「3.14」を代入してください。",
                reqs: ["constを使用すること", "定数名を「pi」にすること", "数値「3.14」を代入すること"],
                prefixCode: "// 定数を作ってみよう\n",
                initialCode: "",
                check: (code) => /const\s+pi\s*=\s*3\.14/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>const</strong>（コンスト）は、一度値を入れたら<strong>後から変更できない</strong>変数（定数）を作ります。</p>
                        <p>「この値は絶対に変わらない」ということをコードを読む人に伝えるため、現代のJavaScript開発では <code>let</code> よりも <code>const</code> を使うことが推奨されています。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>const tax = 1.1;
// tax = 1.05;  <- エラーになります！</pre>
                    </div>
                `
            },
            {
                title: "1-4. 再代入（let）",
                points: ["letで作った変数は、後から別の値を入れられる（再代入）", "constで作った定数は、再代入しようとするとエラーになる", "値が変わる予定がある時だけletを使う"],
                desc: "変数 score を宣言して 100 を代入し、その後 score の値を 150 に書き換えてください。",
                reqs: ["let score = 100; を書くこと", "score = 150; で値を書き換えること"],
                prefixCode: "// 変数の値を書き換えてみよう\n",
                initialCode: "let score = 100;\n// ここで150を再代入\n",
                check: (code) => /let\s+score\s*=\s*100/.test(code) && /score\s*=\s*150/.test(code) && !/let\s+score\s*=\s*150/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>let</code> で宣言した変数は、<code>=</code> を使うことで後から中身を入れ替えることができます。これを<strong>再代入</strong>といいます。</p>
                        <p>2回目以降は <code>let</code> を付ける必要はありません。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>let count = 1;
count = 2; // 中身が2に変わる</pre>
                    </div>
                `
            }
        ]
    },
    2: {
        id: 2,
        title: "JS基礎：データ型",
        steps: [
            {
                title: "2-1. 文字列と数値の区別",
                points: ["クォートで囲むと「文字列」になる", "囲まないと「数値」になる", "混ざると予期せぬ結果になることがある"],
                desc: "文字列の '5' と、数値の 5 をそれぞれ console.log で出力してください。見た目は似ていても別物です。",
                reqs: ["console.log('5') を書くこと", "console.log(5) を書くこと"],
                initialCode: "",
                check: (code, logs) => {
                    const strLog = logs.some(l => l[0] === '5');
                    const numLog = logs.some(l => l[0] === 5);
                    return strLog && numLog;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p>プログラミングでは「文字としての5」と「数としての5」は厳密に区別されます。</p>
                        <ul>
                            <li><strong>文字列 (String)</strong>: <code>"5"</code> ... 計算できない（文字としてつながる）</li>
                            <li><strong>数値 (Number)</strong>: <code>5</code> ... 計算できる</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "2-2. 真偽値（Boolean）",
                points: ["true（真）とfalse（偽）の2つだけ", "条件分岐（もし〜なら）で使う重要な型", "Yes/Noを表す"],
                desc: "「今日は晴れですか？」という変数 isSunny を定義し、true（はい）を代入してください。",
                reqs: ["let または const を使うこと", "変数名 isSunny", "true を代入すること"],
                initialCode: "",
                check: (code) => /(let|const)\s+isSunny\s*=\s*true/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>Boolean（ブーリアン）</strong>は、正しい(true)か間違い(false)かの2つの状態だけを持つ型です。</p>
                        <p>スイッチのON/OFFのようなもので、プログラムの流れを制御するのによく使われます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>let isLogin = true;
let isError = false;</pre>
                    </div>
                `
            },
            {
                title: "2-3. 型の確認（typeof）",
                points: ["typeof 値 でその値の型がわかる", "\"string\", \"number\", \"boolean\" などが返る"],
                desc: "typeof を使って、文字列 \"Hello\" の型をコンソールに出力してください。",
                reqs: ["console.logを使うこと", "typeof \"Hello\" （または'Hello'）を確認すること"],
                initialCode: "",
                check: (code, logs) => /typeof\s+["']Hello["']/.test(code) && logs.some(l => l[0] === 'string'),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>typeof</code> という命令を使うと、「これって数字？文字？」と迷った時に型を調べることができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>console.log(typeof 123); // "number"
console.log(typeof "あ"); // "string"</pre>
                    </div>
                `
            }
        ]
    },
    3: {
        id: 3,
        title: "JS基礎：演算子",
        steps: [
            {
                title: "3-1. 足し算と引き算",
                points: ["+ (足す), - (引く)", "数値同士の計算ができる", "変数を計算に使うこともできる"],
                desc: "50 + 30 の結果を console.log で出力してください。続けて、100 - 40 の結果も出力してください。",
                reqs: ["console.log(50 + 30) (または変数経由)を書くこと", "console.log(100 - 40) を書くこと"],
                prefixCode: "// 計算をしてみよう\n",
                initialCode: "",
                check: (code, logs) => logs.some(l => l[0] == 80) && logs.some(l => l[0] == 60),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>プログラミングでも算数と同じように <code>+</code> や <code>-</code> を使って計算ができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>console.log(10 + 20); // 30
console.log(50 - 10); // 40</pre>
                    </div>
                `
            },
            {
                title: "3-2. 掛け算と割り算",
                points: ["* (掛ける), / (割る)", "% (余り)", "掛け算は x ではなく * を使う"],
                desc: "10 かける 5 の結果と、100 わる 4 の結果をそれぞれ表示してください。",
                reqs: ["* 記号を使うこと", "/ 記号を使うこと"],
                prefixCode: "// 掛け算と割り算\n",
                initialCode: "",
                check: (code, logs) => logs.some(l => l[0] == 50) && logs.some(l => l[0] == 25),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>掛け算には <code>*</code>（アスタリスク）、割り算には <code>/</code>（スラッシュ）を使います。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>console.log(5 * 4);  // 20
console.log(10 / 2); // 5</pre>
                    </div>
                `
            },
            {
                title: "3-3. 文字列の連結",
                points: ["+ 記号で文字同士をつなげることができる", "数値と文字を足すと、文字としてつながる（重要）"],
                desc: "変数 name（値は自分の名前など）と \"さん\" を連結して、「〇〇さん」と表示させてください。",
                reqs: ["変数 name を定義すること", "+ 記号を使って連結すること", "console.logで出力すること"],
                prefixCode: "let name = \"ムロタニ\";\n// ここで連結して表示\n",
                initialCode: "",
                check: (code, logs) => /\+\s*["']さん["']/.test(code) || /["']さん["']\s*\+/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>+</code> 記号は、数字の足し算だけでなく、文字同士をくっつける「糊（のり）」の役割も果たします。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>let firstName = "Taro";
let lastName = "Yamada";
console.log(lastName + firstName); // "YamadaTaro"</pre>
                    </div>
                `
            },
            {
                title: "3-4. テンプレートリテラル",
                points: ["`（バッククォート）で囲む", "${変数} で中に変数を埋め込める", "+ でつなぐより読みやすい"],
                desc: "テンプレートリテラルを使って、定数 age の値を用いて「私は20歳です」のように表示してください。",
                reqs: ["const age = 20; (など)を定義すること", "`（バッククォート）を使うこと", "${age} の形式で埋め込むこと"],
                prefixCode: "const age = 20;\n// テンプレートリテラルを使ってみよう\n",
                initialCode: "",
                check: (code) => /`.*?\${age}.*?`/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>テンプレートリテラル</strong>は、Shift + @ キーで入力できる \`（バッククォート）を使います。</p>
                        <p>この中では <code>\${変数名}</code> と書くことで、簡単に変数を文章の中に埋め込むことができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>const name = "田中";
console.log(\`こんにちは、\${name}さん\`);</pre>
                    </div>
                `
            }
        ]
    },
    4: {
        id: 4,
        title: "JS基礎：条件分岐",
        steps: [
            {
                title: "4-1. if文（もし〜なら）",
                points: ["if (条件) { ... }", "条件がtrue（真）の時だけ実行される", "条件がfalse（偽）の時は無視される"],
                desc: "変数 <code>score</code> が 80 です。if文を使って、「scoreが60以上」の時に「合格！」と出力してください。",
                reqs: ["if文を使うこと", "score >= 60 という条件を書くこと", "console.logで「合格！」と出力すること"],
                prefixCode: "let score = 80;\n// ここにif文を書く\n",
                initialCode: "",
                check: (code, logs) => /if\s*\(.*(score|80)\s*(>=|>)\s*(60|59).*\)/.test(code) && logs.some(l => typeof l[0] === 'string' && l[0].includes('合格')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>if文</strong>を使うと、「もし〇〇なら、××する」という条件分岐を作ることができます。</p>
                        <p>条件が成り立った（true）時だけ、<code>{}</code> の中の処理が実行されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>let temp = 30;
if (temp >= 25) {
    console.log("暑いです");
}</pre>
                    </div>
                `
            },
            {
                title: "4-2. if...else（さもなくば）",
                points: ["else { ... } を続けると「そうでなければ」の処理が書ける", "どちらか片方だけが必ず実行される"],
                desc: "変数 <code>score</code> が 40 です。if...else文を使って、60以上なら「合格」、それ以外なら「不合格」と出力してください。",
                reqs: ["if (score >= 60) { ... }", "else { ... }", "それぞれのブロックでログ出力"],
                prefixCode: "let score = 40;\n",
                initialCode: "",
                check: (code, logs) => /if.*else/.test(code.replace(/\n/g, ' ')) && logs.some(l => l[0].includes('不合格')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>else</code> を使うと、条件に当てはまらなかった場合の処理を書くことができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>if (isSunny) {
    console.log("外で遊ぶ");
} else {
    console.log("家で読む");
}</pre>
                    </div>
                `
            },
            {
                title: "4-3. 比較演算子と論理演算子",
                points: ["=== (等しい), !== (等しくない)", "&& (かつ), || (または)", "これらを組み合わせて複雑な条件を作る"],
                desc: "変数 <code>age</code> (年齢) が 18歳以上、<strong>かつ (&&)</strong>、変数 <code>hasTicket</code> (チケット有無) が true の時だけ「入場可」と出力してください。",
                reqs: ["条件式に && を使うこと", "age >= 18", "hasTicket が true"],
                prefixCode: "let age = 20;\nlet hasTicket = true;\n",
                initialCode: "",
                check: (code, logs) => /&&\s*hasTicket/.test(code) && logs.some(l => l[0].includes('入場可')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>複数の条件を組み合わせるには、<strong>論理演算子</strong>を使います。</p>
                        <ul>
                            <li><code>A && B</code> (AND): AもBも正しい時</li>
                            <li><code>A || B</code> (OR): AかBのどちらかが正しい時</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "4-4. switch文",
                points: ["ある変数の値によって細かく分岐する場合に見やすい", "case 値: ... break; のセットで書く", "default: はどれにも当てはまらない場合"],
                desc: "変数 <code>fruit</code> が \"apple\" です。switch文を使って、\"apple\"なら「リンゴ」、\"banana\"なら「バナナ」、それ以外なら「その他」と出力してください。",
                reqs: ["switch (fruit) { ... } を書く", "case \"apple\": ... break; を書く", "default: ... break; を書く"],
                prefixCode: "let fruit = \"apple\";\n",
                initialCode: "",
                check: (code, logs) => /switch\s*\(fruit\)/.test(code) && /case\s*["']apple["']/.test(code) && logs.some(l => l[0].includes('リンゴ')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>特定の値（例えばフルーツの名前など）によって処理を分けたい場合、if文をたくさん書くよりも <strong>switch文</strong> の方がスッキリ書けることがあります。</p>
                        <p>各 case の最後に <code>break;</code> を忘れないようにしましょう。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>switch (color) {
    case "red":
        console.log("赤");
        break;
    default:
        console.log("その他");
        break;
}</pre>
                    </div>
                `
            }
        ]
    },
    5: {
        id: 5,
        title: "JS応用：関数",
        steps: [
            {
                title: "5-1. 関数の定義",
                points: ["function 関数名() { ... } で定義すると、処理をまとめることができます。", "定義しただけでは動きません。関数名() で呼び出す必要があります。"],
                desc: "「<code>hello</code>」という名前の関数を作成し、その中で <code>console.log(\"こんにちは\");</code> を実行する処理を書いてください。<br>そして、最後にその関数を呼び出してください。",
                reqs: ["function hello() { ... } を定義する", "中に console.log を書く", "hello() を呼び出す"],
                prefixCode: "// 関数を定義して呼び出そう\n",
                initialCode: "",
                check: (code, logs) => /function\s+hello/.test(code) && /hello\(\)/.test(code) && logs.some(l => typeof l[0] === 'string' && l[0].includes('こんにちは')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>関数 (Function)</strong> は、複数の処理をひとつにまとめて名前をつけたものです。</p>
                        <p>例えば「料理する」という関数の中に「切る」「焼く」「盛り付ける」という処理を書いておけば、「料理する」と呼ぶだけで全ての工程を行ってくれます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>function greet() {
    console.log("Welcome!");
}

// 呼び出し
greet();</pre>
                    </div>
                `
            },
            {
                title: "5-2. 引数と戻り値",
                points: ["引数（ひきすう）：関数に渡すデータ", "戻り値（もどりち）：関数から返ってくる結果", "return を使う"],
                desc: "2つの引数 a, b を受け取り、その合計を <code>return</code> する関数 <code>add</code> を作成してください。<br>その後、<code>console.log(add(10, 20));</code> で結果（30）を表示してください。",
                reqs: ["function add(a, b) を定義", "return a + b を書く", "console.log(add(...)) で呼び出す"],
                prefixCode: "// 足し算をする関数\n",
                initialCode: "",
                check: (code, logs) => /function\s+add/.test(code) && /return/.test(code) && logs.some(l => l[0] == 30),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>関数は「材料（引数）」を受け取って、「完成品（戻り値）」を返すことができます。</p>
                        <p><code>return</code> を使うと、関数の呼び出し元に値を渡すことができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>function double(num) {
    return num * 2;
}

let result = double(10);
console.log(result); // 20</pre>
                    </div>
                `
            },
            {
                title: "5-3. アロー関数",
                points: ["() => { ... } という書き方", "function というキーワードを使わない", "モダンな書き方"],
                desc: "以下の関数を<strong>アロー関数</strong>に書き換えて、定数 <code>sayHi</code> に代入してください。<br><pre>function sayHi() { console.log(\"Hi\"); }</pre>",
                reqs: ["const sayHi = () => { ... } の形式にする", "console.log(\"Hi\") を実行する", "sayHi() を呼び出す"],
                prefixCode: "// アロー関数に書き換えよう\n",
                initialCode: "function sayHi() {\n    console.log(\"Hi\");\n}\n\nsayHi();",
                check: (code, logs) => /const\s+sayHi\s*=\s*\(?\)?\s*=>/.test(code) && logs.some(l => l[0] === 'Hi'),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>アロー関数 (Arrow Function)</strong> は、<code>function</code> の代わり <code>=></code> (矢印) を使う省略記法です。</p>
                        <p>最近のJavaScript開発では、こちらが主流になっています。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>// 従来
const sum = function(a, b) {
    return a + b;
};

// アロー関数
const sum = (a, b) => {
    return a + b;
};</pre>
                    </div>
                `
            }
        ]
    },
    10: {
        id: 10,
        title: "実践：DOM操作",
        steps: [
            {
                title: "10-1. getElementById",
                html: `<h1 id="title" style="color: #fff;">元のタイトル</h1>`,
                points: ["HTML要素をIDで取得する基本メソッド", "document.getElementById('ID名')"],
                desc: "IDが「title」の要素があります。<code>document.getElementById('title')</code> を使ってこの要素を取得し、コンソールに出力してください。",
                reqs: ["document.getElementById('title') を使う", "取得した要素を console.log する"],
                prefixCode: "// 要素を取得してみよう\n",
                initialCode: "",
                check: (code, logs) => /document\.getElementById\(['"]title['"]\)/.test(code) && logs.some(l => l[0] && (l[0].id === 'title' || (l[0].toString && l[0].toString().includes('HTMLHeadingElement')))),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>JavaScriptを使うと、HTMLの要素を捕まえて操作することができます。</p>
                        <p>最も基本的な方法は、IDを使って要素を特定する <code>getElementById</code> です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>const elem = document.getElementById("main");
console.log(elem);</pre>
                    </div>
                `
            },
            {
                title: "10-2. querySelector",
                html: `<div class="box" style="background: #facc15; padding: 10px; color: #000; border-radius: 4px;">Box 1</div><div class="box" style="margin-top: 5px;">Box 2</div>`,
                points: ["CSSセレクタを使って要素を取得できる", ".class名 や h1 など", "最初の1つだけ取得する"],
                desc: "クラス名「box」を持つ最初の要素を <code>document.querySelector</code> で取得し、コンソールに出力してください。",
                reqs: ["document.querySelector('.box') を使う", "取得した要素を console.log する"],
                prefixCode: "// クラス名で取得してみよう\n",
                initialCode: "",
                check: (code, logs) => /document\.querySelector\(['"]\.box['"]\)/.test(code) && logs.length > 0,
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>querySelector</code> は、CSSのセレクタ（<code>.class</code> や <code>#id</code>、<code>div p</code> など）を使って要素を取得できる便利なメソッドです。</p>
                        <p>同じ条件の要素が複数ある場合は、<strong>最初の1つ</strong>だけを取得します。</p>
                    </div>
                `
            },
            {
                title: "10-3. コンテンツの書き換え",
                html: `<p id="msg" style="font-size: 1.2rem;">変更前のテキスト</p>`,
                points: ["要素.textContent = '新しい文字'", "画面の表示がJavaScriptで変わる"],
                desc: "IDが「msg」の要素を取得し、そのテキスト（textContent）を「<strong>変更しました！</strong>」に書き換えてください。<br>確認のため、書き換えた後の <code>textContent</code> をコンソールに出力してください。",
                reqs: ["要素を取得する", "textContent に「変更しました！」を代入する", "console.log(要素.textContent) をする"],
                prefixCode: "// テキストを書き換えてみよう\n",
                initialCode: "",
                check: (code, logs) => /textContent\s*=\s*["']変更しました！["']/.test(code) && logs.some(l => l[0] && l[0].includes('変更しました！')),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>取得した要素の <code>textContent</code> プロパティに新しい文字を代入すると、画面上の文字がその瞬間に変わります。</p>
                        <p>これが「動的なWebページ」の基本です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>const title = document.getElementById("title");
title.textContent = "新しいタイトル";</pre>
                    </div>
                `
            }
        ]
    }
};

let currentLevel = 1;
let currentStep = 0;
let completedSteps = {};
let currentFile = 'js'; // Default to JS
let userJS = "";
// We keep HTML/CSS variables to maintain compatibility or for future levels where DOM is needed
let userHTML = "";
let userCSS = "";
// But generic helper uses these:
let prefixCode = ""; // In JS script context
let suffixCode = ""; // In JS script context

// Console logs capture
let consoleLogs = [];

const codeEditor = document.getElementById('code-editor');
const previewFrame = document.getElementById('preview-frame');
const checkBtn = document.getElementById('check-btn');
const progressText = document.getElementById('progress-text');
const challengeTitle = document.getElementById('challenge-title');
const challengeDesc = document.getElementById('challenge-desc');
const challengeReqs = document.getElementById('challenge-reqs');
const modal = document.getElementById('modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const refreshBtn = document.getElementById('refresh-preview');
const lineNumbers = document.getElementById('line-numbers');
const levelLabel = document.getElementById('current-level-label');
const levelTitle = document.getElementById('current-level-title');
const stepDotsContainer = document.getElementById('step-dots');
const lectureModal = document.getElementById('lecture-modal');
const lectureTitle = document.getElementById('lecture-title');
const lecturePoints = document.getElementById('lecture-points');
const startLectureBtn = document.getElementById('start-lecture-btn');
const showLectureBtn = document.getElementById('show-lecture-btn');
const editorLock = document.getElementById('editor-lock');
const previewLock = document.getElementById('preview-lock');
const consoleOutput = document.getElementById('console-output');
const codePrefix = document.getElementById('code-prefix');
const codeSuffix = document.getElementById('code-suffix');

// Initial setup logic
window.addEventListener('DOMContentLoaded', () => {
    // Determine level from URL or storage
    const hash = window.location.hash;
    let initLevel = 1;
    let initStep = 0;

    if (hash && hash.startsWith('#level')) {
        const parts = hash.replace('#level', '').split('-');
        if (parts.length === 2) {
            initLevel = parseInt(parts[0]);
            initStep = parseInt(parts[1]) - 1;
        }
    } else {
        const storedLvl = localStorage.getItem('ag_js_last_level');
        const storedStep = localStorage.getItem('ag_js_last_step');
        if (storedLvl) initLevel = parseInt(storedLvl);
        if (storedStep) initStep = parseInt(storedStep);
    }

    loadChallenge(initLevel, initStep);

    // Listen for messages from iframe
    window.addEventListener('message', (event) => {
        if (event.data.type === 'console') {
            const args = event.data.args;
            consoleLogs.push(args);
            // Render to console div
            const logLine = document.createElement('div');
            logLine.textContent = "> " + args.map(arg =>
                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
            ).join(' ');
            logLine.style.borderBottom = "1px solid #333";
            logLine.style.padding = "2px 0";
            consoleOutput.appendChild(logLine);
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }
        if (event.data.type === 'error') {
            const logLine = document.createElement('div');
            logLine.textContent = "Error: " + event.data.error;
            logLine.style.color = "#ff6b6b";
            consoleOutput.appendChild(logLine);
        }
        if (event.data.type === 'script_finished') {
            handleScriptFinished();
        }
    });
});

codeEditor.addEventListener('input', () => {
    userJS = codeEditor.value;
    updateLineNumbers();
});

codeEditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + "  " + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
        userJS = codeEditor.value; // Sync
    }
    // Ctrl+Enter to check/run
    if (e.ctrlKey && e.key === 'Enter') {
        checkBtn.click();
    }
});

let isChecking = false;
let checkTimeout = null;

checkBtn.addEventListener('click', () => {
    if (isChecking) return;

    checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 判定中...';
    checkBtn.disabled = true;
    isChecking = true;

    // Run code first (update preview) then wait for finished message
    updatePreview();

    // Fallback: if script_finished doesn't arrive in 5 seconds (e.g. alert left open or error)
    checkTimeout = setTimeout(() => {
        if (isChecking) {
            handleScriptFinished();
        }
    }, 5000);
});

function handleScriptFinished() {
    if (!isChecking) return;
    if (checkTimeout) clearTimeout(checkTimeout);

    // User requested 1000ms delay to see the preview/console output AFTER script run
    setTimeout(() => {
        checkCode();
        checkBtn.innerHTML = '実行してチェック';
        checkBtn.disabled = false;
        isChecking = false;
    }, 1000);
}

refreshBtn.addEventListener('click', updatePreview);

nextBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    const levelData = challenges[currentLevel];
    if (currentStep < levelData.steps.length - 1) {
        loadChallenge(currentLevel, currentStep + 1);
    } else {
        // Next Level
        if (challenges[currentLevel + 1]) {
            loadChallenge(currentLevel + 1, 0);
        } else {
            // Finished all
            window.location.href = 'js_levels.html';
        }
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        loadChallenge(currentLevel, currentStep - 1);
    } else if (currentLevel > 1) {
        const prevLevelData = challenges[currentLevel - 1];
        loadChallenge(currentLevel - 1, prevLevelData.steps.length - 1);
    }
});


function loadChallenge(level, step = 0) {
    currentLevel = parseInt(level);
    currentStep = step;

    if (!challenges[currentLevel]) {
        return;
    }

    const levelData = challenges[currentLevel];
    const stepData = levelData.steps[currentStep];

    // Reset scroll positions to top
    const contentArea = document.querySelector('.instructions-content');
    if (contentArea) contentArea.scrollTop = 0;


    levelLabel.textContent = `Level ${currentLevel}`;
    levelTitle.textContent = levelData.title;
    challengeTitle.textContent = stepData.title;
    challengeDesc.innerHTML = stepData.desc; // Allow HTML in desc for bolding etc

    // Toggle iframe visibility based on challenge type
    if (stepData.html) {
        previewFrame.style.display = 'block';
        consoleOutput.style.height = '50%';
    } else {
        previewFrame.style.display = 'none';
        consoleOutput.style.height = '100%';
    }

    window.location.hash = `level${currentLevel}-${currentStep + 1}`;
    localStorage.setItem('ag_js_last_level', currentLevel);
    localStorage.setItem('ag_js_last_step', currentStep);

    challengeReqs.innerHTML = stepData.reqs.map(req => `<li>${req}</li>`).join('');

    prefixCode = stepData.prefixCode || "";
    suffixCode = stepData.suffixCode || "";
    userJS = stepData.initialCode || "";

    codePrefix.textContent = prefixCode;
    codeEditor.value = userJS;
    codeSuffix.textContent = suffixCode;

    updateEditorHeight();
    updateLineNumbers();
    updateStepDots();
    updateProgress();

    // Clear state
    isChecking = false;
    if (checkTimeout) clearTimeout(checkTimeout);
    checkBtn.innerHTML = '実行してチェック';
    checkBtn.disabled = false;

    // Clear console
    consoleOutput.innerHTML = "";
    consoleLogs = [];

    // Show/Hide Prev Button based on current position
    if (currentLevel === 1 && currentStep === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    showLecture(stepData);
}

function updatePreview() {
    // In JS Master, updatePreview means running the JS in the iframe.
    // We clear the output first
    consoleOutput.innerHTML = "";
    consoleLogs = []; // Reset logs

    // Combined code for execution
    const combinedCode = (prefixCode ? prefixCode + "\n" : "") + userJS + (suffixCode ? "\n" + suffixCode : "");

    // Get HTML for this challenge if any
    const levelData = challenges[currentLevel];
    const stepData = levelData ? levelData.steps[currentStep] : null;
    const challengeHTML = (stepData && stepData.html) || "";

    // Wrap user code in a try-catch and console override
    const scriptContent = `
        <meta charset="UTF-8">
        <style>
            body {
                font-family: 'Inter', sans-serif;
                padding: 1rem;
                margin: 0;
                color: #fff;
            }
            </style>
        ${challengeHTML}
        <script>
            (function() {
                const originalLog = console.log;
                console.log = function(...args) {
                    // Send to parent
                    try {
                        // Clone args to avoid clone error if possible, or just stringify if simple
                        // But postMessage can handle structured clones usually.
                        // However, DOM elements won't clone.
                        const safeArgs = args.map(a => {
                            if (typeof a === 'object' && a !== null) {
                                try {
                                    JSON.stringify(a); // Check simple serializability
                                    return a;
                                } catch(e) {
                                    return '[Complex Object]';
                                }
                            }
                            return a;
                        });
                        window.parent.postMessage({ type: 'console', args: safeArgs }, '*');
                    } catch(e) {
                         window.parent.postMessage({ type: 'console', args: ['[Log Error]'] }, '*');
                    }
                    originalLog.apply(console, args);
                };
                
                window.onerror = function(msg, url, line) {
                    window.parent.postMessage({ type: 'error', error: msg }, '*');
                };
            })();
        </script>
        <script>
            try {
                ${combinedCode}
            } catch(e) {
                console.error(e);
            } finally {
                // Inform parent that execution is done (even if error)
                window.parent.postMessage({ type: 'script_finished' }, '*');
            }
        </script>
    `;

    const blob = new Blob([scriptContent], { type: 'text/html' });
    previewFrame.src = URL.createObjectURL(blob);
}

function checkCode() {
    const levelData = challenges[currentLevel];
    const stepData = levelData.steps[currentStep];
    const combinedCode = (prefixCode ? prefixCode + "\n" : "") + userJS + (suffixCode ? "\n" + suffixCode : "");

    // Pass code and captured logs to check function
    if (stepData.check(combinedCode, consoleLogs)) {
        if (!completedSteps[currentLevel]) completedSteps[currentLevel] = new Set();
        completedSteps[currentLevel].add(currentStep);
        updateStepDots();
        updateProgress();
        showModal();
    } else {
        // Make sure to alert ONLY if simple checks failed. 
        // If check logic is "run this and see", the user might just be running for fun.
        // But here we press "Check".
        alert("まだ条件を満たしていないようです。ヒントやコンソール出力を確認してみてね！");
    }
}

function updateLineNumbers() {
    const prefixCount = prefixCode ? (prefixCode.endsWith('\n') ? prefixCode.split('\n').length - 1 : prefixCode.split('\n').length) : 0;
    const userCount = userJS.split('\n').length;
    const suffixCount = suffixCode ? (suffixCode.startsWith('\n') ? suffixCode.split('\n').length - 1 : suffixCode.split('\n').length) : 0;

    const totalLines = prefixCount + userCount + suffixCount;
    lineNumbers.innerHTML = Array.from({ length: totalLines }, (_, i) => `<div>${i + 1}</div>`).join('');
}

function updateEditorHeight() {
    codeEditor.style.height = 'auto';
    codeEditor.style.height = (codeEditor.scrollHeight) + 'px';
}

function updateStepDots() {
    const levelData = challenges[currentLevel];
    stepDotsContainer.innerHTML = '';
    levelData.steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === currentStep) dot.classList.add('active');
        if (completedSteps[currentLevel] && completedSteps[currentLevel].has(index)) {
            dot.classList.add('completed');
        }
        stepDotsContainer.appendChild(dot);
    });
}

function updateProgress() {
    const levelData = challenges[currentLevel];
    const finishedInLevel = (completedSteps[currentLevel] || new Set()).size;
    const totalInLevel = levelData.steps.length;
    progressText.textContent = `${finishedInLevel}/${totalInLevel}`;
}

function showLecture(stepData) {
    lectureTitle.textContent = stepData.title;
    if (stepData.lectureHTML) {
        lecturePoints.innerHTML = stepData.lectureHTML;
    } else {
        lecturePoints.innerHTML = stepData.points.map(point => `<div>${point}</div>`).join('');
    }
    lecturePoints.scrollTop = 0;
    lectureModal.classList.remove('hidden');
}

startLectureBtn.addEventListener('click', () => {
    lectureModal.classList.add('hidden');
    editorLock.classList.add('hidden');
    previewLock.classList.add('hidden');
});

showLectureBtn.addEventListener('click', () => {
    lectureModal.classList.remove('hidden');
});

function showModal() {
    modal.classList.remove('hidden');
    // Logic for last level messages etc.
    document.getElementById('modal-title').textContent = "ナイス！";
    document.getElementById('modal-desc').textContent = "クリアしました！";
}

// File tabs switching (stub for now as we focus on JS)
document.querySelectorAll('.file-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.file-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Logic to switch editor content if we were supporting HTML/CSS editing
        // For now, simpler to just keep JS active
    });
});
