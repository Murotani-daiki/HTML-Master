
// Python Master Script with Pyodide
let pyodideReadyPromise = null;
let pyodide = null;

// Initialize Pyodide
async function main() {
    if (!window.loadPyodide) {
        console.error("Pyodide not loaded");
        return;
    }
    pyodide = await loadPyodide();
    console.log("Pyodide ready");
    // Setup stdout capture
    pyodide.runPython(`
import sys
import io
class CatchOut:
    def __init__(self):
        self.value = ""
    def write(self, txt):
        self.value += txt
    def flush(self):
        pass
sys.stdout = CatchOut()
    `);
}
pyodideReadyPromise = main();

const challenges = {
    1: {
        id: 1,
        title: "Python基礎：基本構文",
        steps: [
            {
                title: "1-1. print関数と出力",
                points: ["print(\"文字列\") で文字を表示できる", "文字列は \" (ダブルクォート) または ' (シングルクォート) で囲む"],
                desc: "Pythonの第一歩です。<code>print</code>関数を使って、「Hello Python」と出力してください。",
                reqs: ["print関数を使うこと", "「Hello Python」と出力すること"],
                prefixCode: "# ここにコードを書く\n",
                initialCode: "",
                check: (code, output) => {
                    return output.trim() === "Hello Python" || output.includes("Hello Python");
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>print()</strong> は、括弧の中身を画面に表示する命令です。</p>
                        <p>文字を表示する場合は、<code>"</code>（ダブルクォーテーション）または <code>'</code>（シングルクォーテーション）で囲みます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>print("こんにちは")  # -> こんにちは
print('Hello')        # -> Hello
print(123)            # -> 123</pre>
                    </div>
                `
            },
            {
                title: "1-2. 変数の定義",
                points: ["変数名 = 値 で代入する", "変数はデータを入れる「箱」のようなもの"],
                desc: "変数 <code>message</code> に \"Welcome\" を代入し、それを <code>print</code> で表示してください。",
                reqs: ["変数 message を作成する", "\"Welcome\" を代入する", "print(message) で表示する"],
                prefixCode: "# 変数を使ってみよう\n",
                initialCode: "",
                check: (code, output) => {
                    return /message\s*=\s*["']Welcome["']/.test(code) && output.includes("Welcome");
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>変数（Variables）</strong>は、データに名前を付けて保存しておくための仕組みです。</p>
                        <p>Pythonでは <code>=</code> を使って変数に値を代入します。</p>
                        <p>値を変数に入れておくことで、後からその名前を使ってデータを再利用したり、書き換えたりすることができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>name = "Python"
print(name)  # -> Python と表示される</pre>
                    </div>
                `
            },
            {
                title: "1-3. 数値計算の基本",
                points: ["+ (足す), - (引く), * (掛ける), / (割る)", "計算結果をprintで表示できる"],
                desc: "<code>100 + 50</code> の計算結果を <code>print</code> で表示してください。",
                reqs: ["演算子 + を使う", "計算結果 150 が表示される"],
                prefixCode: "# 計算してみよう\n",
                initialCode: "",
                check: (code, output) => {
                    return output.includes("150");
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p>Pythonは電卓のように計算を行うことができます。</p>
                        <p>基本的な演算子は以下の通りです：</p>
                        <ul>
                            <li><code>+</code> : 足し算</li>
                            <li><code>-</code> : 引き算</li>
                            <li><code>*</code> : 掛け算</li>
                            <li><code>/</code> : 割り算</li>
                        </ul>
                        <p>計算式をそのまま <code>print()</code> の中に入れると、計算結果が表示されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>print(10 + 5)  # -> 15
print(3 * 4)   # -> 12</pre>
                    </div>
                `
            }
        ]
    },
    2: {
        id: 2,
        title: "Python基礎：データ型",
        steps: [
            {
                title: "2-1. 文字列（str）",
                points: ["文字データは str (string) 型と呼ばれる", "文字列同士は + で連結できる"],
                desc: "2つの文字列 \"Python\" と \"Master\" を <code>+</code> で連結して表示してください。",
                reqs: ["+ を使って連結する", "「PythonMaster」と表示される"],
                prefixCode: "",
                initialCode: 'text1 = "Python"\ntext2 = "Master"\n# ここで連結して表示\n',
                check: (code, output) => output.includes("PythonMaster"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>Pythonでは、文字データを<strong>文字列（string）</strong>と呼びます。</p>
                        <p>文字列同士を <code>+</code> でつなぐと、2つの文字が連結されて1つの文字列になります。</p>
                        <p>数値の足し算とは異なる動作をするので注意してください。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>str1 = "Hello"
str2 = "World"
print(str1 + str2)  # -> HelloWorld</pre>
                    </div>
                `
            },
            {
                title: "2-2. 数値型（int / float）",
                points: ["整数は int、小数は float", "type(値) で型を確認できる"],
                desc: "整数 <code>10</code> と 小数 <code>3.5</code> を掛け算（*）して表示してください。",
                reqs: ["* を使う", "35.0 が表示される"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => output.includes("35.0") || output.includes("35"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>数値には主に2つの種類があります。</p>
                        <ul>
                            <li><strong>int</strong>（整数）：1, 2, -5 など</li>
                            <li><strong>float</strong>（浮動小数点数）：1.5, 3.14, -0.01 など</li>
                        </ul>
                        <p>整数と小数を計算すると、結果は自動的に小数（float）になります。</p>
                        <p>データの型を調べたいときは <code>type()</code> 関数を使います。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>x = 10
y = 1.5
print(x * y)  # -> 15.0</pre>
                    </div>
                `
            },
            {
                title: "2-3. 型変換（cast）",
                points: ["str(数値) で数値を文字に変換できる", "int(文字) で文字を整数に変換できる"],
                desc: "数値の <code>2026</code> を <code>str()</code> を使って文字に変換し、「Year: 2026」のように連結して表示してください。",
                reqs: ["str() 関数を使う", "+ で連結する"],
                prefixCode: "year = 2026\n",
                initialCode: "",
                check: (code, output) => /str\(year\)/.test(code) && output.includes("Year: 2026"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>データ型が違うもの同士（例：文字と数値）は、そのままでは連結したり計算したりできません。</p>
                        <p>そのような時は、<strong>型変換（キャスト）</strong>を行います。</p>
                        <ul>
                            <li><code>str()</code>：値を文字列に変換</li>
                            <li><code>int()</code>：値を整数に変換</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>age = 18
print("私は" + str(age) + "歳です")
# -> 私は18歳です</pre>
                    </div>
                `
            }
        ]
    },
    3: {
        id: 3,
        title: "Python応用：リスト",
        steps: [
            {
                title: "3-1. リストの作成",
                points: ["[値1, 値2, ...] で複数のデータをまとめる", "これをリスト（List）と呼ぶ"],
                desc: "1, 2, 3 の3つの数字が入ったリストを作成し、<code>numbers</code> という変数に代入して表示してください。",
                reqs: ["変数 numbers を作る", "リスト [1, 2, 3] を代入", "printで表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /numbers\s*=\s*\[.*1.*2.*3.*\]/.test(code) && (output.includes("[1, 2, 3]") || output.includes("[1, 2, 3]")),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>リスト（List）</strong>は、複数のデータをひとつにまとめて管理できるデータ構造です。他の言語では「配列（Array）」と呼ばれることもあります。</p>
                        <p>リストを作るには、データを <code>[]</code>（角括弧）で囲み、カンマ <code>,</code> で区切ります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>colors = ["Red", "Green", "Blue"]
print(colors)</pre>
                    </div>
                `
            },
            {
                title: "3-2. 要素の取得",
                points: ["リスト[インデックス] で中身を取り出せる", "インデックスは0から始まる（重要！）"],
                desc: "リスト <code>fruits</code> の 2番目（インデックス1）の要素「Banana」を取り出して表示してください。",
                reqs: ["fruits[1] を使う", "Banana と表示する"],
                prefixCode: "fruits = [\"Apple\", \"Banana\", \"Cherry\"]\n",
                initialCode: "",
                check: (code, output) => /fruits\[1\]/.test(code) && output.includes("Banana"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>リストの中にあるひとつひとつのデータを「要素」と呼びます。</p>
                        <p>特定の要素を取り出すには、何番目のデータかを指定する番号（<strong>インデックス</strong>）を使います。</p>
                        <p class="warning">⚠️ プログラミングの世界では、数は<strong>0から数え始めます</strong>。つまり、最初の要素は「0番目」です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>team = ["Aさん", "Bさん", "Cさん"]
print(team[0])  # -> Aさん
print(team[1])  # -> Bさん</pre>
                    </div>
                `
            },
            {
                title: "3-3. appendとremove",
                points: ["リスト.append(値) で末尾に追加", "リスト.remove(値) で削除"],
                desc: "空のリスト <code>my_list</code> に、<code>append</code> を使って <code>100</code> を追加し、その結果を表示してください。",
                reqs: ["appendを使う", "printで[100]が表示される"],
                prefixCode: "my_list = []\n",
                initialCode: "",
                check: (code, output) => /append\(100\)/.test(code) && output.includes("[100]"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>作成したリストは、後からデータを追加したり削除したりできます。</p>
                        <ul>
                            <li><code>append(値)</code>：リストの一番後ろにデータを追加します。</li>
                            <li><code>remove(値)</code>：指定した値と同じデータをリストから削除します。</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>box = []
box.append("おもちゃ")
print(box)  # -> ['おもちゃ']</pre>
                    </div>
                `
            }
        ]
    },
    4: {
        id: 4,
        title: "Python応用：条件分岐とループ",
        steps: [
            {
                title: "4-1. if文の基礎",
                points: ["if 条件: で条件分岐を行う", "条件がTrueのときだけ実行される", "インデント（字下げ）が重要"],
                desc: "変数 <code>age</code> が18以上の場合に「成人です」と表示するif文を書いてください。",
                reqs: ["if文を使う", "age >= 18 で条件判定する", "「成人です」と表示する"],
                prefixCode: "age = 20\n",
                initialCode: "",
                check: (code, output) => /if\s+age\s*>=\s*18/.test(code) && output.includes("成人です"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>if文</strong>は、条件によって処理を分岐させるための構文です。</p>
                        <p>条件が真（True）のときだけ、インデントされたブロック内のコードが実行されます。</p>
                        <p class="warning">⚠️ Pythonでは、<strong>インデント（字下げ）</strong>が構文の一部です。if文の中身は必ず4スペース（またはTab）でインデントしてください。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>score = 85
if score >= 80:
    print("合格です")  # -> 合格です</pre>
                    </div>
                `
            },
            {
                title: "4-2. if-else文",
                points: ["else: で「そうでなければ」を表現", "条件に応じて2つの処理を切り替えられる"],
                desc: "変数 <code>temperature</code> が30以上なら「暑い」、そうでなければ「涼しい」と表示してください。",
                reqs: ["if-else文を使う", "temperature >= 30 で判定", "適切なメッセージを表示"],
                prefixCode: "temperature = 25\n",
                initialCode: "",
                check: (code, output) => /if\s+temperature\s*>=\s*30/.test(code) && /else:/.test(code) && output.includes("涼しい"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>else</strong>は、if文の条件が偽（False）だったときに実行される処理を指定します。</p>
                        <p>「もし〜ならA、そうでなければB」という分岐を実現できます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>number = 5
if number > 10:
    print("大きい")
else:
    print("小さい")  # -> 小さい</pre>
                    </div>
                `
            },
            {
                title: "4-3. forループ（リストの反復）",
                points: ["for 変数 in リスト: でリストの各要素を順に処理", "繰り返し処理の基本"],
                desc: "リスト <code>colors</code> の各要素を1つずつ <code>print</code> で表示してください。",
                reqs: ["for文を使う", "colors の各要素を順に表示"],
                prefixCode: "colors = [\"Red\", \"Green\", \"Blue\"]\n",
                initialCode: "",
                check: (code, output) => /for\s+\w+\s+in\s+colors/.test(code) && output.includes("Red") && output.includes("Green") && output.includes("Blue"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>forループ</strong>は、リストや範囲の各要素に対して同じ処理を繰り返すための構文です。</p>
                        <p>「for 変数名 in リスト:」と書くと、リストの要素が1つずつ変数に代入されて処理が実行されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>numbers = [1, 2, 3]
for num in numbers:
    print(num)
# -> 1
# -> 2
# -> 3</pre>
                    </div>
                `
            },
            {
                title: "4-4. whileループ",
                points: ["while 条件: で条件を満たす間ループ", "条件がFalseになると終了"],
                desc: "変数 <code>count</code> を0から始めて、3未満の間、countの値を表示し続けるwhileループを書いてください。最後にcountを1ずつ増やすのを忘れずに。",
                reqs: ["while文を使う", "count < 3 で条件判定", "count を1ずつ増やす"],
                prefixCode: "count = 0\n",
                initialCode: "",
                check: (code, output) => /while\s+count\s*<\s*3/.test(code) && /count\s*\+=\s*1|count\s*=\s*count\s*\+\s*1/.test(code) && output.includes("0") && output.includes("1") && output.includes("2"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>whileループ</strong>は、条件が真（True）である限り処理を繰り返します。</p>
                        <p>無限ループにならないよう、ループ内で必ず条件を変化させる処理を入れましょう。</p>
                        <p class="warning">⚠️ カウンタ変数を増やし忘れると、永遠にループが終わらなくなります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>i = 0
while i < 3:
    print(i)
    i += 1  # iを1増やす
# -> 0
# -> 1
# -> 2</pre>
                    </div>
                `
            }
        ]
    },
    5: {
        id: 5,
        title: "Python応用：関数",
        steps: [
            {
                title: "5-1. 関数の定義",
                points: ["def 関数名(): で関数を定義", "処理をまとめて名前をつけて再利用できる", "関数名() で呼び出す"],
                desc: "「Hello, Function!」と表示する関数 <code>greet</code> を定義し、その関数を呼び出してください。",
                reqs: ["def greet(): で関数を定義", "print(\"Hello, Function!\") を含む", "greet() で関数を呼び出す"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /def\s+greet\s*\(\s*\):/.test(code) && /greet\s*\(\s*\)/.test(code) && output.includes("Hello, Function!"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>関数</strong>は、処理をひとまとまりにして名前を付けたものです。</p>
                        <p><code>def</code> キーワードを使って定義し、関数名の後に <code>()</code> と <code>:</code> を付けます。</p>
                        <p>関数の中身はインデントして書き、関数名に <code>()</code> を付けて呼び出すことで実行されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>def say_hello():
    print("こんにちは")

say_hello()  # -> こんにちは</pre>
                    </div>
                `
            },
            {
                title: "5-2. 引数を持つ関数",
                points: ["関数に値を渡すことができる", "def 関数名(引数): の形で定義", "呼び出し時に値を渡す"],
                desc: "名前を引数として受け取り、「こんにちは、〇〇さん！」と表示する関数 <code>greet_name</code> を定義し、「太郎」を渡して呼び出してください。",
                reqs: ["def greet_name(name): で関数を定義", "引数nameを使って挨拶を表示", "greet_name(\"太郎\") で呼び出す"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /def\s+greet_name\s*\(\s*\w+\s*\):/.test(code) && /greet_name\s*\(\s*["']太郎["']\s*\)/.test(code) && output.includes("太郎"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>引数（ひきすう）</strong>は、関数に渡す値のことです。</p>
                        <p>関数定義時に括弧の中に引数名を書き、関数内でその引数を変数として使えます。</p>
                        <p>関数を呼び出す時に、実際の値を渡すことで、その値が引数に代入されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>def introduce(name):
    print("私は" + name + "です")

introduce("花子")  # -> 私は花子です</pre>
                    </div>
                `
            },
            {
                title: "5-3. 戻り値（return）",
                points: ["return で値を返す", "関数の結果を受け取って使える", "returnで関数が終了する"],
                desc: "2つの数を受け取って、その合計を <code>return</code> で返す関数 <code>add</code> を定義し、5と3を渡した結果を表示してください。",
                reqs: ["def add(a, b): で関数を定義", "return a + b で合計を返す", "結果を変数に代入してprintで表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /def\s+add\s*\(\s*\w+\s*,\s*\w+\s*\):/.test(code) && /return/.test(code) && output.includes("8"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>return</strong>は、関数の実行結果を呼び出し元に返すキーワードです。</p>
                        <p>returnを使うことで、関数の計算結果を受け取って、変数に代入したり別の処理に使ったりできます。</p>
                        <p>returnが実行されると、その時点で関数の処理は終了します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>def multiply(x, y):
    return x * y

result = multiply(4, 5)
print(result)  # -> 20</pre>
                    </div>
                `
            },
            {
                title: "5-4. デフォルト引数",
                points: ["引数にデフォルト値を設定できる", "呼び出し時に省略可能", "def 関数名(引数=デフォルト値): の形"],
                desc: "挨拶文を引数として受け取る関数 <code>say</code> を作成し、デフォルト値を「おはよう」に設定してください。引数なしで呼び出すとデフォルト値が使われることを確認してください。",
                reqs: ["def say(message=\"おはよう\"): の形で定義", "print(message) で表示", "say() で引数なしで呼び出す"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /def\s+say\s*\(\s*\w+\s*=\s*["']おはよう["']\s*\):/.test(code) && /say\s*\(\s*\)/.test(code) && output.includes("おはよう"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>デフォルト引数</strong>は、引数に初期値を設定する機能です。</p>
                        <p>関数定義時に <code>引数名=デフォルト値</code> の形で書くと、呼び出し時に引数を省略できます。</p>
                        <p>引数を省略した場合はデフォルト値が使われ、値を渡した場合はその値が優先されます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>def greet(name="ゲスト"):
    print("ようこそ、" + name + "さん")

greet()         # -> ようこそ、ゲストさん
greet("太郎")   # -> ようこそ、太郎さん</pre>
                    </div>
                `
            }
        ]
    },
    6: {
        id: 6,
        title: "Python実践：クラス",
        steps: [
            {
                title: "6-1. クラスの定義",
                points: ["class クラス名: でクラスを定義", "データと処理をまとめる設計図", "オブジェクト指向プログラミングの基本"],
                desc: "<code>Dog</code> というクラスを定義し、その中に <code>bark</code> というメソッドを作成してください。<code>bark</code>は「ワンワン！」と表示します。",
                reqs: ["class Dog: でクラスを定義", "def bark(self): でメソッドを定義", "print(\"ワンワン!\") を含む"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /class\s+Dog\s*:/.test(code) && /def\s+bark\s*\(\s*self\s*\):/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>クラス</strong>は、データ（属性）と処理（メソッド）をひとまとめにした「設計図」です。</p>
                        <p><code>class</code>キーワードを使って定義し、クラス名は慣習的に大文字で始めます。</p>
                        <p>クラス内の関数は<strong>メソッド</strong>と呼ばれ、第一引数に<code>self</code>を取るのがPythonの特徴です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>class Cat:
    def meow(self):
        print("ニャー")

# クラスの定義だけでは実行されない</pre>
                    </div>
                `
            },
            {
                title: "6-2. インスタンスの作成",
                points: ["クラス名() でインスタンスを作成", "インスタンスはクラスから作られた実体", "インスタンス.メソッド() で呼び出す"],
                desc: "先ほど定義した <code>Dog</code> クラスのインスタンスを作成し、変数 <code>my_dog</code> に代入してください。そして <code>bark</code> メソッドを呼び出して「ワンワン！」と表示してください。",
                reqs: ["my_dog = Dog() でインスタンス作成", "my_dog.bark() でメソッド呼び出し", "「ワンワン!」が表示される"],
                prefixCode: "class Dog:\n    def bark(self):\n        print(\"ワンワン!\")\n\n",
                initialCode: "",
                check: (code, output) => /my_dog\s*=\s*Dog\s*\(\s*\)/.test(code) && /my_dog\.bark\s*\(\s*\)/.test(code) && output.includes("ワンワン!"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>インスタンス</strong>は、クラスという設計図から実際に作られた「モノ」です。</p>
                        <p>クラス名に <code>()</code> を付けて呼び出すことで、インスタンスが作成されます。</p>
                        <p>インスタンスに対して <code>.</code> （ドット）でメソッドを呼び出すことができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>class Cat:
    def meow(self):
        print("ニャー")

my_cat = Cat()    # インスタンス作成
my_cat.meow()     # -> ニャー</pre>
                    </div>
                `
            },
            {
                title: "6-3. 属性（データ）の追加",
                points: ["self.属性名 でインスタンスごとのデータを持つ", "メソッド内で self.属性 にアクセス"],
                desc: "<code>Person</code> クラスを定義し、<code>introduce</code> メソッドで自己紹介させてください。<code>introduce</code>内で <code>self.name = \"太郎\"</code> を設定し、「私は太郎です」と表示してください。",
                reqs: ["class Person: でクラス定義", "def introduce(self): でメソッド定義", "self.name = \"太郎\" を設定", "自己紹介を表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /class\s+Person\s*:/.test(code) && /self\.name\s*=\s*["']太郎["']/.test(code) && output.includes("太郎"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>属性</strong>は、インスタンスが持つデータのことです。</p>
                        <p><code>self.属性名</code> の形で、インスタンスごとに異なる値を保持できます。</p>
                        <p><code>self</code>は「このインスタンス自身」を表す特別な変数です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>class Student:
    def set_name(self, n):
        self.name = n
    
    def greet(self):
        print("私は" + self.name)

s = Student()
s.set_name("花子")
s.greet()  # -> 私は花子</pre>
                    </div>
                `
            },
            {
                title: "6-4. コンストラクタ（__init__）",
                points: ["__init__ はインスタンス作成時に自動で呼ばれる", "初期化処理を書く特別なメソッド", "引数で初期値を受け取れる"],
                desc: "<code>Book</code> クラスを定義し、<code>__init__</code> メソッドでタイトルを受け取って <code>self.title</code> に保存してください。そして <code>show_title</code> メソッドでタイトルを表示してください。「Python入門」というタイトルで本を作成して表示してください。",
                reqs: ["class Book: でクラス定義", "def __init__(self, title): を定義", "self.title = title でタイトル保存", "show_titleメソッドで表示", "インスタンス作成と呼び出し"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /class\s+Book\s*:/.test(code) && /def\s+__init__\s*\(\s*self\s*,\s*\w+\s*\):/.test(code) && /Book\s*\(\s*["']Python入門["']\s*\)/.test(code) && output.includes("Python入門"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>__init__</strong>（イニット）は、インスタンス作成時に自動的に呼ばれる特別なメソッドです。</p>
                        <p>これを<strong>コンストラクタ</strong>と呼び、インスタンスの初期化処理を書きます。</p>
                        <p>インスタンス作成時に渡した引数は、__init__で受け取ることができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def info(self):
        print(self.name + "(" + str(self.age) + "歳)")

p = Person("太郎", 20)
p.info()  # -> 太郎(20歳)</pre>
                    </div>
                `
            }
        ]
    },
    7: {
        id: 7,
        title: "Python実践：辞書とタプル",
        steps: [
            {
                title: "7-1. 辞書の基礎",
                points: ["辞書はキーと値のペアでデータを管理", "{キー: 値} の形で作成", "dict[キー] で値を取得"],
                desc: "名前（\"name\"）を\"太郎\"、年齢（\"age\"）を20とする辞書 <code>person</code> を作成し、名前を表示してください。",
                reqs: ["辞書 person を作成", "\"name\": \"太郎\" を含む", "person[\"name\"] で名前を取得して表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /person\s*=\s*\{/.test(code) && /["']name["']\s*:\s*["']太郎["']/.test(code) && /person\s*\[\s*["']name["']\s*\]/.test(code) && output.includes("太郎"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>辞書（Dictionary）</strong>は、キーと値のペアでデータを管理するデータ構造です。</p>
                        <p>リストが数字のインデックスで要素を管理するのに対し、辞書は任意の名前（キー）でデータを管理できます。</p>
                        <p><code>{キー: 値, キー: 値, ...}</code> の形で作成し、<code>辞書[キー]</code> で値を取得します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>student = {"name": "花子", "score": 85}
print(student["name"])   # -> 花子
print(student["score"])  # -> 85</pre>
                    </div>
                `
            },
            {
                title: "7-2. 辞書への追加と削除",
                points: ["dict[キー] = 値 で追加・更新", "del dict[キー] で削除", "in演算子でキーの存在確認"],
                desc: "空の辞書 <code>book</code> を作成し、\"title\"キーに\"Python入門\"を追加して表示してください。",
                reqs: ["book = {} で空の辞書を作成", "book[\"title\"] = \"Python入門\" で追加", "printで辞書を表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /book\s*=\s*\{\s*\}/.test(code) && /book\s*\[\s*["']title["']\s*\]\s*=\s*["']Python入門["']/.test(code) && output.includes("Python入門"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>辞書には後から自由にデータを追加したり、更新したり、削除したりできます。</p>
                        <ul>
                            <li><code>辞書[キー] = 値</code>：キーが存在しなければ追加、存在すれば更新</li>
                            <li><code>del 辞書[キー]</code>：指定したキーと値のペアを削除</li>
                            <li><code>キー in 辞書</code>：キーが存在するかチェック（TrueまたはFalse）</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>data = {}
data["city"] = "東京"     # 追加
data["city"] = "大阪"     # 更新
print(data)               # -> {'city': '大阪'}</pre>
                    </div>
                `
            },
            {
                title: "7-3. 辞書のループ処理",
                points: ["for key in dict: でキーを順に取得", "dict.items() でキーと値を同時に取得", "dict.values() で値だけを取得"],
                desc: "辞書 <code>scores</code> の各キーと値を「科目: 点数」の形で表示してください。scores.items() を使ってください。",
                reqs: ["for key, value in scores.items(): を使う", "各科目と点数を表示"],
                prefixCode: "scores = {\"数学\": 90, \"英語\": 85, \"国語\": 92}\n",
                initialCode: "",
                check: (code, output) => /for\s+\w+\s*,\s*\w+\s+in\s+scores\.items\s*\(\s*\):/.test(code) && (output.includes("数学") || output.includes("90")),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>辞書もforループで走査できます。いくつかの方法があります。</p>
                        <ul>
                            <li><code>for key in dict:</code>：キーだけを順に取得</li>
                            <li><code>for key, value in dict.items():</code>：キーと値を同時に取得</li>
                            <li><code>for value in dict.values():</code>：値だけを順に取得</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>fruits = {"apple": "赤", "banana": "黄"}
for name, color in fruits.items():
    print(name + "は" + color + "色")
# -> appleは赤色
# -> bananaは黄色</pre>
                    </div>
                `
            },
            {
                title: "7-4. タプルの基礎",
                points: ["(値1, 値2, ...) で作成", "変更できないリスト", "複数の値をまとめて返すのに便利"],
                desc: "座標を表すタプル <code>point</code> を (10, 20) で作成し、x座標（0番目）とy座標（1番目）をそれぞれ表示してください。",
                reqs: ["point = (10, 20) でタプル作成", "point[0] と point[1] を表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /point\s*=\s*\(\s*10\s*,\s*20\s*\)/.test(code) && /point\s*\[\s*0\s*\]/.test(code) && output.includes("10") && output.includes("20"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>タプル（Tuple）</strong>は、リストと似ていますが、<strong>一度作ったら変更できない</strong>データ構造です。</p>
                        <p>括弧 <code>()</code> で囲んで作成し、リストと同じようにインデックスでアクセスできます。</p>
                        <p>変更されたくないデータや、関数から複数の値を返す時によく使われます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>rgb = (255, 128, 0)  # RGB色
print(rgb[0])        # -> 255

# タプルは変更できない
# rgb[0] = 100  # エラーになる</pre>
                    </div>
                `
            }
        ]
    },
    8: {
        id: 8,
        title: "実践：数当てゲーム",
        steps: [
            {
                title: "8-1. ランダムな数の生成",
                points: ["import random でランダム機能を使う", "random.randint(a, b) で範囲内の整数を生成"],
                desc: "1から10の範囲でランダムな整数を生成し、変数 <code>answer</code> に代入して表示してください。",
                reqs: ["import random を使う", "random.randint(1, 10) で生成", "answerを表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /import\s+random/.test(code) && /random\.randint\s*\(\s*1\s*,\s*10\s*\)/.test(code) && output.trim().length > 0,
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>random</strong>モジュールを使うと、ランダムな数を生成できます。</p>
                        <p><code>import random</code> でモジュールを読み込み、<code>random.randint(a, b)</code> でa以上b以下のランダムな整数を取得します。</p>
                        <p>これはゲーム作りの基本となる重要な機能です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>import random
dice = random.randint(1, 6)  # サイコロ
print(dice)  # -> 1〜6のどれか</pre>
                    </div>
                `
            },
            {
                title: "8-2. ユーザー入力の受付",
                points: ["input() でユーザーからの入力を受け取る", "int() で文字列を数値に変換"],
                desc: "「数を入力してください: 」と表示し、ユーザーの入力を受け取って整数に変換し、変数 <code>guess</code> に代入してください。そして入力値を表示してください。（注: input()はPyodideでは動作しないため、模擬的に guess = 5 などで代用してください）",
                reqs: ["guess に数値を代入", "printで表示"],
                prefixCode: "# input()の代わりに直接代入します\n",
                initialCode: "",
                check: (code, output) => /guess\s*=\s*\d+/.test(code) && output.trim().length > 0,
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>input()</strong>関数は、ユーザーからキーボード入力を受け取ります。</p>
                        <p>入力された値は文字列として返されるため、数値として使う場合は<code>int()</code>で変換します。</p>
                        <p class="warning">⚠️ ブラウザ版Pythonでは制限があるため、このレッスンでは直接値を代入します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre># 通常のPythonでは:
# name = input("名前: ")
# age = int(input("年齢: "))

# このレッスンでは:
guess = 7
print(guess)</pre>
                    </div>
                `
            },
            {
                title: "8-3. 数の比較と判定",
                points: ["if-elif-else で複数の条件分岐", "比較演算子で大小を判定"],
                desc: "正解の数 <code>answer = 7</code> と予想 <code>guess = 5</code> を比較し、guessが小さければ「もっと大きい！」、大きければ「もっと小さい！」、同じなら「正解！」と表示してください。",
                reqs: ["if-elif-else を使う", "3つの条件を判定", "適切なメッセージを表示"],
                prefixCode: "answer = 7\nguess = 5\n",
                initialCode: "",
                check: (code, output) => /if.*guess.*<.*answer|if.*answer.*>.*guess/.test(code) && /elif/.test(code) && output.includes("大きい"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>if-elif-else</strong>を使うと、3つ以上の条件分岐ができます。</p>
                        <p>数当てゲームでは、予想が正解より「小さい」「大きい」「等しい」の3パターンを判定します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>score = 75
if score >= 80:
    print("優秀")
elif score >= 60:
    print("合格")
else:
    print("不合格")</pre>
                    </div>
                `
            }
        ]
    },
    9: {
        id: 9,
        title: "実践：じゃんけんゲーム",
        steps: [
            {
                title: "9-1. 選択肢のリスト作成",
                points: ["リストで選択肢を管理", "random.choice() でランダムに選択"],
                desc: "じゃんけんの手 [\"グー\", \"チョキ\", \"パー\"] をリスト <code>choices</code> に格納し、<code>random.choice()</code> でコンピュータの手をランダムに選んで表示してください。",
                reqs: ["import random を使う", "choices リストを作成", "random.choice(choices) で選択"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /import\s+random/.test(code) && /choices\s*=\s*\[/.test(code) && /random\.choice\s*\(\s*choices\s*\)/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>random.choice(リスト)</strong>は、リストからランダムに1つの要素を選びます。</p>
                        <p>ゲームの選択肢をリストで管理すると、コードがシンプルで分かりやすくなります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>import random
fruits = ["りんご", "バナナ", "みかん"]
selected = random.choice(fruits)
print(selected)  # -> どれか1つ</pre>
                    </div>
                `
            },
            {
                title: "9-2. 勝敗判定ロジック（1）",
                points: ["辞書で勝ち負けの関係を定義", "論理的な勝敗判定"],
                desc: "プレイヤーが\"グー\"、コンピュータが\"チョキ\"の場合、「あなたの勝ち！」と表示するif文を書いてください。",
                reqs: ["player = \"グー\" を使う", "computer = \"チョキ\" を使う", "条件判定して勝利メッセージ表示"],
                prefixCode: "player = \"グー\"\ncomputer = \"チョキ\"\n",
                initialCode: "",
                check: (code, output) => /if.*player.*==.*["']グー["'].*and.*computer.*==.*["']チョキ["']|if.*computer.*==.*["']チョキ["'].*and.*player.*==.*["']グー["']/.test(code) && output.includes("勝ち"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>じゃんけんの勝敗は、<strong>and演算子</strong>を使って2つの条件を組み合わせて判定できます。</p>
                        <p>グーがチョキに勝つ、チョキがパーに勝つ、パーがグーに勝つという3つのパターンがあります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>if player == "グー" and computer == "チョキ":
    print("勝ち")
elif player == computer:
    print("引き分け")</pre>
                    </div>
                `
            },
            {
                title: "9-3. 完全な勝敗判定",
                points: ["複数の条件をor演算子で結合", "すべてのパターンを網羅"],
                desc: "player と computer を比較し、勝ち・負け・引き分けのすべてのパターンを判定して結果を表示してください。",
                reqs: ["3つの勝ちパターンを判定", "引き分けパターンを判定", "残りは負けと判定"],
                prefixCode: "player = \"パー\"\ncomputer = \"グー\"\n",
                initialCode: "",
                check: (code, output) => (/if|elif/.test(code) && /else/.test(code)) || output.includes("勝ち") || output.includes("負け") || output.includes("引き分け"),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>すべてのパターンを<strong>or演算子</strong>でつなぐと、複雑な条件も1つのif文で書けます。</p>
                        <p>引き分けは <code>player == computer</code> で簡単に判定できます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>if (player == "グー" and computer == "チョキ") or \\
   (player == "チョキ" and computer == "パー") or \\
   (player == "パー" and computer == "グー"):
    print("勝ち")
elif player == computer:
    print("引き分け")
else:
    print("負け")</pre>
                    </div>
                `
            }
        ]
    },
    10: {
        id: 10,
        title: "実践：RPG戦闘システム",
        steps: [
            {
                title: "10-1. キャラクタークラスの作成",
                points: ["クラスでキャラクターを設計", "HPと攻撃力を持つ"],
                desc: "<code>Character</code> クラスを作成し、__init__で名前、HP、攻撃力を設定してください。そして勇者（HP=100, 攻撃力=20）を作成して情報を表示してください。",
                reqs: ["class Character を定義", "__init__で name, hp, attack を設定", "インスタンス作成と情報表示"],
                prefixCode: "",
                initialCode: "",
                check: (code, output) => /class\s+Character/.test(code) && /__init__/.test(code) && /self\.hp/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>RPGのキャラクターは<strong>クラス</strong>で表現するのが最適です。</p>
                        <p>名前、HP、攻撃力などの<strong>属性</strong>をクラスにまとめることで、複数のキャラクターを簡単に管理できます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>class Character:
    def __init__(self, name, hp, attack):
        self.name = name
        self.hp = hp
        self.attack = attack

hero = Character("勇者", 100, 20)
print(hero.name + " HP:" + str(hero.hp))</pre>
                    </div>
                `
            },
            {
                title: "10-2. 攻撃メソッドの実装",
                points: ["メソッドで行動を定義", "他のキャラクターに影響を与える"],
                desc: "Character クラスに <code>attack_enemy</code> メソッドを追加し、相手のHPを自分の攻撃力分減らす処理を実装してください。",
                reqs: ["def attack_enemy(self, enemy): を定義", "enemy.hp -= self.attack を実行", "攻撃メッセージを表示"],
                prefixCode: "class Character:\n    def __init__(self, name, hp, attack):\n        self.name = name\n        self.hp = hp\n        self.attack = attack\n    \n",
                initialCode: "",
                check: (code, output) => /def\s+attack_enemy\s*\(\s*self\s*,\s*\w+\s*\):/.test(code) && /\.hp\s*-=\s*self\.attack|\.hp\s*=\s*\.hp\s*-\s*self\.attack/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>メソッド</strong>は、クラスの中に定義された関数です。</p>
                        <p>他のオブジェクトを引数として受け取り、そのオブジェクトの属性を変更することができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>def attack_enemy(self, enemy):
    print(self.name + "の攻撃！")
    enemy.hp -= self.attack
    print(enemy.name + "に" + str(self.attack) + "のダメージ！")</pre>
                    </div>
                `
            },
            {
                title: "10-3. 戦闘ループの実装",
                points: ["whileループで繰り返し処理", "HPが0以下になったら終了"],
                desc: "勇者とモンスターが交互に攻撃し、どちらかのHPが0以下になるまで戦闘を続けるプログラムを完成させてください。",
                reqs: ["while ループを使う", "両者のHPをチェック", "交互に攻撃", "勝敗を表示"],
                prefixCode: "class Character:\n    def __init__(self, name, hp, attack):\n        self.name = name\n        self.hp = hp\n        self.attack = attack\n    def attack_enemy(self, enemy):\n        enemy.hp -= self.attack\n\nhero = Character(\"勇者\", 100, 25)\nmonster = Character(\"モンスター\", 80, 15)\n\n",
                initialCode: "",
                check: (code, output) => /while/.test(code) && (/hero\.hp\s*>\s*0|monster\.hp\s*>\s*0/.test(code) || /\.hp\s*<=\s*0/.test(code)),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>戦闘ループ</strong>は、どちらかが倒れるまで繰り返す処理です。</p>
                        <p>while文の条件で「両者のHPが0より大きい」ことをチェックし続けます。</p>
                        <p>ループ内で交互に攻撃を行い、各ターン後にHPを確認します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>while hero.hp > 0 and monster.hp > 0:
    # 勇者の攻撃
    hero.attack_enemy(monster)
    if monster.hp <= 0:
        print("勝利！")
        break
    # モンスターの攻撃
    monster.attack_enemy(hero)
    if hero.hp <= 0:
        print("敗北...")</pre>
                    </div>
                `
            }
        ]
    }
};

// --- UI Logic (Adapted from js_script.js) ---

const codeEditor = document.getElementById('code-editor');
const lineNumbers = document.querySelector('.line-numbers');
const checkBtn = document.getElementById('check-btn');
const consoleOutput = document.getElementById('console-output');
const lectureModal = document.getElementById('lecture-modal');
const showLectureBtn = document.getElementById('show-lecture-btn');
const startLectureBtn = document.getElementById('start-lecture-btn');
const lectureTitle = document.getElementById('lecture-title');
const lecturePoints = document.getElementById('lecture-points');
const editorLock = document.getElementById('editor-lock');
const previewLock = document.getElementById('preview-lock');
const modal = document.getElementById('modal');
const nextBtn = document.getElementById('next-btn');
const stepDotsContainer = document.getElementById('step-dots');
const progressText = document.getElementById('progress-text');
const challengeTitle = document.getElementById('challenge-title');
const challengeDesc = document.getElementById('challenge-desc');
const requirementsList = document.getElementById('requirements-list');
const prevBtn = document.getElementById('prev-btn');
const codePrefix = document.getElementById('code-prefix');
const codeSuffix = document.getElementById('code-suffix');

let currentLevel = 1;
let currentStep = 0;
let userCode = "";
let prefixCodeStr = "";
let initialCodeStr = "";

// Get URL Params
function getLevelFromURL() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#level')) {
        const parts = hash.replace('#level', '').split('-');
        if (parts.length === 2) {
            return { l: parseInt(parts[0]), s: parseInt(parts[1]) - 1 };
        }
    }
    return { l: 1, s: 0 };
}

async function init() {
    const { l, s } = getLevelFromURL();
    loadChallenge(l, s);

    // Wait for Pyodide
    if (pyodideReadyPromise) {
        checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 準備中...';
        checkBtn.disabled = true;
        await pyodideReadyPromise;
        checkBtn.innerHTML = '<i class="fas fa-play"></i> 実行してチェック';
        checkBtn.disabled = false;
        challengeDesc.innerHTML = challenges[currentLevel].steps[currentStep].desc; // Restore desc if overwritten by "loading"
    }
}

function loadChallenge(level, step) {
    currentLevel = level;
    currentStep = step;

    // Validate level/step exists
    if (!challenges[level] || !challenges[level].steps[step]) {
        console.warn("Level/Step not found, resetting to 1-1");
        currentLevel = 1;
        currentStep = 0;
    }

    const levelData = challenges[currentLevel];
    const stepData = levelData.steps[currentStep];

    // Reset scroll positions to top
    const contentArea = document.querySelector('.instructions-content');
    if (contentArea) contentArea.scrollTop = 0;


    // UI Updates
    document.getElementById('current-level-label').textContent = `Lv. ${currentLevel}`;
    document.getElementById('current-level-title').textContent = levelData.title;
    challengeTitle.textContent = stepData.title;
    challengeDesc.innerHTML = stepData.desc;

    // Learning Points (Lecture)
    showLectureBtn.classList.remove('hidden'); // Always show hint button

    // Requirements
    requirementsList.innerHTML = stepData.reqs.map(req => `<li>${req}</li>`).join('');

    // Code Editor
    prefixCodeStr = stepData.prefixCode || "";
    codePrefix.textContent = prefixCodeStr;
    codeSuffix.textContent = "";

    // Load initial code only if not already attempting (simplification: always load for now or localstorage?)
    // For simplicity, always load initial
    codeEditor.value = stepData.initialCode || "";
    userCode = codeEditor.value;
    updateLineNumbers();

    // Progress
    updateStepDots();
    updateProgress();

    // Navigation Buttons
    prevBtn.classList.toggle('hidden', currentStep === 0 && currentLevel === 1);

    // Initial Lecture
    showLecture(stepData);

    // Reset Console
    consoleOutput.innerHTML = '<div style="color: #666; font-style: italic;"># 出力がここに表示されます...</div>';
}

// --- Execution Logic ---

checkBtn.addEventListener('click', async () => {
    if (checkBtn.disabled) return;

    checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 実行中...';
    checkBtn.disabled = true;
    consoleOutput.innerHTML = ''; // Clear console

    const fullCode = prefixCodeStr + "\n" + userCode;

    try {
        // Clear captured stdout
        pyodide.runPython("sys.stdout.value = ''");

        // Run code
        await pyodide.runPythonAsync(fullCode);

        // Get output
        const output = pyodide.runPython("sys.stdout.value");

        // Render output
        consoleOutput.textContent = output;

        // Check logic
        const stepData = challenges[currentLevel].steps[currentStep];
        const passed = stepData.check(userCode, output);

        if (passed) {
            consoleOutput.insertAdjacentHTML('beforeend', '\n<div style="color: #10b981; margin-top: 1rem;">>>> 正解！よくできました！</div>');
            showModal();
        } else {
            consoleOutput.insertAdjacentHTML('beforeend', '\n<div style="color: #eab308; margin-top: 1rem;">>>> まだ条件を満たしていないようです。</div>');
        }

    } catch (err) {
        consoleOutput.textContent = err.toString();
        // Simple error coloring
        consoleOutput.style.color = '#ef4444';
        // Reset color after a moment or on next run?
        setTimeout(() => consoleOutput.style.color = '#e5e7eb', 5000);
    }

    checkBtn.innerHTML = '<i class="fas fa-play"></i> 実行してチェック';
    checkBtn.disabled = false;
});

// --- Helper Functions ---

function updateLineNumbers() {
    const prefixCount = prefixCodeStr ? (prefixCodeStr.endsWith('\n') ? prefixCodeStr.split('\n').length - 1 : prefixCodeStr.split('\n').length) : 0;
    const userCount = userCode.split('\n').length;
    const totalLines = prefixCount + userCount;
    lineNumbers.innerHTML = Array.from({ length: totalLines }, (_, i) => `<div>${i + 1}</div>`).join('');
}

codeEditor.addEventListener('input', () => {
    userCode = codeEditor.value;
    updateLineNumbers();
});

codeEditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        // Python prefers 4 spaces
        codeEditor.value = codeEditor.value.substring(0, start) + "    " + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
        userCode = codeEditor.value;
    }
});

function updateStepDots() {
    const levelData = challenges[currentLevel];
    stepDotsContainer.innerHTML = '';
    levelData.steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === currentStep) dot.classList.add('active');
        stepDotsContainer.appendChild(dot);
    });
}

function updateProgress() {
    const total = challenges[currentLevel].steps.length;
    progressText.textContent = `${currentStep + 1}/${total}`;
}

function showLecture(stepData) {
    lectureTitle.textContent = stepData.title;
    if (stepData.lectureHTML) {
        lecturePoints.innerHTML = stepData.lectureHTML;
    } else {
        // Display points in a structured card format
        lecturePoints.innerHTML = stepData.points.map(p => `
            <div class="lecture-point-item">
                <div class="point-icon">💡</div>
                <div class="point-text">${p}</div>
            </div>
        `).join('');
    }
    lectureModal.classList.remove('hidden');
    editorLock.classList.remove('hidden');
}

startLectureBtn.addEventListener('click', () => {
    lectureModal.classList.add('hidden');
    editorLock.classList.add('hidden');
});

showLectureBtn.addEventListener('click', () => {
    lectureModal.classList.remove('hidden');
});

function showModal() {
    modal.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    const totalSteps = challenges[currentLevel].steps.length;
    if (currentStep + 1 < totalSteps) {
        // Next step in same level
        loadChallenge(currentLevel, currentStep + 1);
        window.location.hash = `level${currentLevel}-${currentStep + 1}`;
    } else {
        // Next level? or Finish
        alert("このレベルは完了です！次のレベルへ進みましょう（未実装の場合は一覧へ）");
        window.location.href = "py_levels.html";
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        loadChallenge(currentLevel, currentStep - 1);
        window.location.hash = `level${currentLevel}-${currentStep + 1}`;
    } else if (currentLevel > 1) {
        const prevLevel = currentLevel - 1;
        if (challenges[prevLevel]) {
            const prevLevelSteps = challenges[prevLevel].steps.length;
            loadChallenge(prevLevel, prevLevelSteps - 1);
            window.location.hash = `level${currentLevel}-${currentStep + 1}`;
        }
    }
});

// Initialize
init();
