const challenges = {
    1: {
        id: 1,
        title: "HTML基礎：基本タグ",
        steps: [
            {
                title: "1-1. 見出し（h1）",
                points: ["h1タグは「見出し」を意味する", "1ページに1つが基本", "SEOにとって非常に重要"],
                desc: "ウェブページの顔となる最も重要な見出しを作ってみましょう。",
                reqs: ["<h1>タグを使用すること", "「Hello World」と入力すること"],
                initialCode: "",
                prefixCode: "<!-- 見出しを書いてみよう -->\n",
                check: (code) => /<h1.*?>Hello World<\/h1>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>h1タグ</strong>（エイチワン・タグ）は、Webページの中で<strong>最も重要な見出し</strong>を表すタグです。</p>
                        <p>本のタイトルや、新聞の一面の見出しのようなものだとイメージしてください。</p>
                        <p>検索エンジン（Googleなど）も、このh1タグを見て「このページは何について書かれているのか」を判断します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;h1&gt;私のプロフィール&lt;/h1&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>ルール：</strong> h1タグは、1つのページに1回だけ使うのが基本です。</p>
                    </div>
                `
            },
            {
                title: "1-2. 段落（p）",
                points: ["pタグは「段落（Paragraph）」を意味する", "文章を論理的なまとまりに分ける", "ブラウザが前後に余白を自動で入れる"],
                desc: "文章を書くための段落タグを使ってみましょう。見出しの下に説明を追加します。",
                reqs: ["<p>タグを使用すること", "「HTMLを学んでいます」と入力すること"],
                initialCode: "",
                prefixCode: "<h1>Hello World</h1>\n<!-- ここに段落を追加 -->\n",
                check: (code) => /<p.*?>HTMLを学んでいます<\/p>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>pタグ</strong>（ピー・タグ）は、文章の<strong>段落（Paragraph）</strong>を表すタグです。</p>
                        <p>Webページ内での普通の文章は、基本的にこのpタグを使って書きます。</p>
                        <p>pタグで囲むと、ブラウザが自動的に前後に少し隙間（改行）を入れてくれるので、文章が読みやすくなります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;p&gt;こんにちは。今日はいい天気ですね。&lt;/p&gt;
&lt;p&gt;ここからは別の話題です。&lt;/p&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>ポイント：</strong> 見出し（h1など）以外の普通の文章は、とりあえずpタグで囲みましょう。</p>
                    </div>
                `
            },
            {
                title: "1-3. 改行（br）",
                points: ["brタグは閉じるタグがいらない（空要素）", "強制的に改行を入れるときに使う", "段落を変えるときはpタグを使うべき"],
                desc: "長い文章の途中で強制的に改行を入れてみましょう。「こんにちは」と「さようなら」の間に改行を入れます。",
                reqs: ["<br>タグを使用すること"],
                initialCode: "<p>こんにちはさようなら</p>",
                prefixCode: "<!-- 文字の間に改行を入れてみよう -->\n",
                check: (code) => /<br.*?>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>brタグ</strong>（ブレイク・タグ）は、文章の途中で<strong>強制的に改行</strong>を入れるためのタグです。</p>
                        <p>pタグの終了でも改行されますが、brタグは「同じ段落の中で行を変えたい」時（住所や歌詞など）に使います。</p>
                        <p>このタグには「閉じタグ（&lt;/br&gt;）」が存在しない特別なタグ（<strong>空要素</strong>といいます）です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;p&gt;
  東京都千代田区1-1&lt;br&gt;
  テックビル 3F
&lt;/p&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>注意：</strong> 単にスペースを空けたいからといって、brタグを何個も連続で使うのは良くありません。</p>
                    </div>
                `
            },
            {
                title: "1-4. 範囲（span）",
                points: ["spanタグは意味を持たないインライン要素", "文章の一部だけ色を変えたい時などに使う", "divのインライン版のようなもの"],
                desc: "文章の特定の一部だけを囲んで、特別な意味や装飾をつける準備をしましょう。",
                reqs: ["<span>タグを使用すること", "「特別」という文字を囲むこと"],
                initialCode: "<p>今日は特別な記念日です。</p>",
                prefixCode: "<!-- 文字を囲んでみよう -->\n",
                check: (code) => /<span.*?>特別<\/span>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>spanタグ</strong>（スパン・タグ）は、文章の一部分を<strong>グループ化</strong>するためのタグです。</p>
                        <p>このタグ自体には特別な意味も、見た目の変化もありません。</p>
                        <p>しかし、CSSで「ここだけ赤文字にしたい」という時や、JavaScriptで「ここだけ書き換えたい」という時に非常に役立ちます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;p&gt;値段は&lt;span style="color:red"&gt;100円&lt;/span&gt;です。&lt;/p&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>イメージ：</strong> 透明な袋で文字を包むようなものです。中身は見えますが、袋ごと持ち運べるようになります。</p>
                    </div>
                `
            },
            {
                title: "1-5. 水平線（hr）",
                points: ["hrタグは話題の区切りを表す", "水平線（Horizontal Rule）として表示される", "見た目だけでなく意味的な区切り"],
                desc: "文章の区切りに水平線を入れて、話題が変わることを示しましょう。",
                reqs: ["<hr>タグを使用すること"],
                initialCode: "",
                prefixCode: "<p>ここまでが自己紹介です。</p>\n<!-- ここに区切り線を入れる -->\n<p>ここからが趣味の話です。</p>",
                check: (code) => /<hr.*?>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>hrタグ</strong>（エイチアール・タグ）は、話題の区切りを表す<strong>水平線（Horizontal Rule）</strong>を引くタグです。</p>
                        <p>話のテーマが大きく変わる場所などに置くことで、読み手が「ああ、ここで話が変わるんだな」と視覚的に理解しやすくなります。</p>
                        <p>brタグと同じく、これも閉じタグがいらない<strong>空要素</strong>です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;p&gt;ここまでが第1章です。&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;ここから第2章が始まります。&lt;/p&gt;</pre>
                    </div>
                `
            },
            {
                title: "1-6. 強調（strong）",
                points: ["strongタグは「強い重要性」を意味する", "デフォルトで太字で表示される", "見た目だけでなく意味も強調する"],
                desc: "重要なキーワードを太字にして強調してみましょう。",
                reqs: ["<strong>タグを使用すること", "「重要」という文字を囲むこと"],
                initialCode: "<p>これはレベル1の<span>重要</span>なポイントです。</p>",
                prefixCode: "",
                check: (code) => /<strong.*?>重要<\/strong>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>strongタグ</strong>（ストロング・タグ）は、文章の中の<strong>特に重要な部分</strong>を強調するためのタグです。</p>
                        <p>このタグで囲まれた文字は、ブラウザ上では通常<strong>太字</strong>で表示されます。</p>
                        <p>見た目を太くするだけでなく、音声読み上げソフトなどで「ここが重要だよ！」と伝える役割もあります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;p&gt;この商品の価格は&lt;strong&gt;無料&lt;/strong&gt;です。&lt;/p&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>使い分け：</strong> ただ太字にしたいだけならCSSを使いますが、意味として強調したい場合はstrongを使います。</p>
                    </div>
                `
            }
        ]
    },
    2: {
        id: 2,
        title: "HTML基礎：リンクとリスト",
        steps: [
            {
                title: "2-1. 箇条書き（ul, li）",
                points: ["ulは順序のないリストを意味する", "liはリストの各項目を意味する", "liは必ずul（またはol）の中で使う"],
                desc: "情報を整理して見やすくするために、リストタグを使ってみましょう。",
                reqs: ["<ul>タグを使用すること", "<li>タグを3つ以上使用すること"],
                initialCode: "<ul>\n  <li>りんご</li>\n</ul>",
                prefixCode: "<!-- 好きな食べ物リストを作ろう -->\n",
                check: (code) => {
                    const liCount = (code.match(/<li.*?>/gi) || []).length;
                    return /<ul.*?>/i.test(code) && liCount >= 3;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>ulタグ</strong>（Unordered List）と<strong>liタグ</strong>（List Item）は、箇条書きリストを作るための最強のコンビです。</p>
                        <p>買い物リストやTo-Doリストなど、<strong>順番に関係のない</strong>項目を並べるならこれを使います。</p>
                        <p>どんなに項目が増えても、ulの中にliを増やしていくだけでOKです。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;ul&gt;
  &lt;li&gt;りんご&lt;/li&gt;
  &lt;li&gt;バナナ&lt;/li&gt;
&lt;/ul&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>ルール：</strong> ulタグの直下には liタグしか置いてはいけません（文字などを直接書いてはダメ）。</p>
                    </div>
                `
            },
            {
                title: "2-2. ハイパーリンク（a）",
                points: ["aタグは他のページへのリンクを作る", "href属性に飛び先のURLを書く", "target=\"_blank\"で別タブで開く"],
                desc: "他のサイトやページへ繋がるリンクを作成しましょう。",
                reqs: ["<a>タグを使用すること", "「googleへ」という文字を押したらhttps://google.comに行けるようにする", "target=\"_blank\"を追加して新しいタブで開くようにする"],
                initialCode: "",
                prefixCode: "<p>検索はこちらから：</p>\n<!-- ここにリンクを追加 -->\n",
                check: (code) => /<a\s+href=["']https:\/\/google\.com["']\s+target=["']_blank["'].*?>googleへ<\/a>/i.test(code) || /<a\s+target=["']_blank["']\s+href=["']https:\/\/google\.com["'].*?>googleへ<\/a>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>aタグ</strong>（アンカー・タグ）は、別のページへの<strong>リンク（ハイパーリンク）</strong>を作成するタグです。</p>
                        <p>「Anchor（船の錨）」が語源で、情報の海をつなぎ止めるという意味があります。</p>
                        <p>href属性（エイチレフ）に飛び先のURLを指定することでリンクとして機能します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;a href="https://google.com" target="_blank"&gt;Googleへ&lt;/a&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>Tips：</strong> <code>target="_blank"</code>をつけると、新しいタブで開くようになります。</p>
                    </div>
                `
            },
            {
                title: "2-3. 画像の表示（img）",
                points: ["imgタグは画像を表示する", "src属性に画像の場所をかく", "alt属性には説明（代替えテキスト）をかく"],
                desc: "ページに画像を表示させてみましょう。",
                reqs: ["<img>タグを使用すること", "src属性に「https://placehold.co/300」を指定すること", "alt属性を「背景」にすること"],
                initialCode: "",
                prefixCode: "<!-- 画像を表示してみよう -->\n",
                check: (code) => /<img\s+src=["']https:\/\/placehold\.co\/300["']\s+alt=["']背景["'].*?>/i.test(code) || /<img\s+alt=["']背景["']\s+src=["']https:\/\/placehold\.co\/300["'].*?>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>imgタグ</strong>（イメージ・タグ）は、画像を表示するためのタグです。</p>
                        <p>このタグには閉じタグがありません（空要素）。</p>
                        <p><strong>src属性</strong>（ソース）に画像のファイル名やURLを指定し、<strong>alt属性</strong>（オルト）に画像の説明を書きます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;img src="cat.jpg" alt="かわいい猫の写真"&gt;</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>重要：</strong> alt属性は、画像が表示できなかった時や、目の不自由な方が使う読み上げソフトのために必須です。</p>
                    </div>
                `
            },
            {
                title: "2-4. 順序付きリスト（ol）",
                points: ["olは順序のあるリスト（Ordered List）", "手順やランキングなどに使う", "自動的に1, 2, 3...と番号がつく"],
                desc: "手順やランキングを作るために、順序付きリストを使ってみましょう。",
                reqs: ["<ol>タグで順序付きリストを作ること", "1つ目の<li>に「野菜を切る」と書くこと", "2つ目の<li>に「鍋で煮る」と書くこと"],
                initialCode: "",
                prefixCode: "<h3>カレーの作り方</h3>\n<!-- カレーの作り方 -->\n",
                check: (code) => {
                    const hasOl = /<ol.*?>/i.test(code);
                    const hasVegetable = /野菜を切る/i.test(code);
                    const hasCook = /鍋で煮る/i.test(code);
                    return hasOl && hasVegetable && hasCook;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>olタグ</strong>（Ordered List）は、<strong>順序のあるリスト</strong>を作るタグです。</p>
                        <p>料理のレシピや、ランキングトップ3など、<strong>順番に意味がある</strong>場合に使います。</p>
                        <p>自動的に「1. 2. 3.」と番号が振られるので、自分で数字を書く必要はありません。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;ol&gt;
  &lt;li&gt;お湯を沸かす&lt;/li&gt;
  &lt;li&gt;麺を入れる&lt;/li&gt;
  &lt;li&gt;3分待つ&lt;/li&gt;
&lt;/ol&gt;</pre>
                    </div>
                `
            },
            {
                title: "2-5. 簡単な表（table）",
                points: ["tableで表全体を囲む", "trで行（Row）を作る", "tdでセル（Data）を作る"],
                desc: "データを見やすく整理するために、表を作ってみましょう。名前と年齢の表を作成します。",
                reqs: ["<tr>タグで新しい行を追加すること", "1つ目の<td>に「太郎」と書くこと", "2つ目の<td>に「20」と書くこと"],
                initialCode: "\n</table>",
                prefixCode: "<!-- メンバー表 -->\n<table>\n  <tr>\n    <td>名前</td>\n    <td>年齢</td>\n  </tr>\n  <!-- ここに行を追加 -->\n",
                check: (code) => {
                    const hasTable = /<table.*?>/i.test(code);
                    const hasTaro = /太郎/i.test(code);
                    const hasAge = /20/i.test(code);
                    const trCount = (code.match(/<tr.*?>/gi) || []).length;
                    return hasTable && hasTaro && hasAge && trCount >= 2;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>tableタグ</strong>は、表を作るためのタグです。少し複雑ですが、基本は3つのタグのセットです。</p>
                        <ul>
                            <li><strong>table</strong>：表全体を囲む</li>
                            <li><strong>tr</strong>（Table Row）：横の行を作る</li>
                            <li><strong>td</strong>（Table Data）：1つ1つのマス目（セル）を作る</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;りんご&lt;/td&gt;
    &lt;td&gt;100円&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>
                    </div>
                `
            }
        ]
    },
    3: {
        id: 3,
        title: "HTML応用：フォーム",
        steps: [
            {
                title: "3-1. テキスト入力（input）",
                points: ["inputは多様な入力パーツを作る", "type=\"text\"で1行の入力欄になる", "placeholderは入力例を表示する"],
                desc: "ユーザーが文字を入力できるボックスを作ってみましょう。",
                reqs: ["<input>タグを使用すること", "type属性に「text」を指定すること", "placeholder属性に「名前」と入力すること"],
                initialCode: "",
                prefixCode: "<!-- 入力欄を作ろう -->\n",
                check: (code) => /<input\s+type=["']text["']\s+placeholder=["']名前["'].*?>/i.test(code) || /<input\s+placeholder=["']名前["']\s+type=["']text["'].*?>/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>inputタグ</strong>（インプット・タグ）は、ユーザーが文字を入力できるパーツを作ります。</p>
                        <p><code>type="text"</code> と指定すると、一番基本的な1行のテキスト入力欄になります。</p>
                        <p><strong>placeholder属性</strong>（プレースホルダー）は、入力欄が空の時にうっすら表示されるヒント文字です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;input type="text" placeholder="ここに名前を入力"&gt;</pre>
                    </div>
                `
            },
            {
                title: "3-2. ボタンと送信（form, button）",
                desc: "入力した情報を送信するためのボタンとフォームを作成しましょう。",
                points: ["formは入力データをグループ化する", "buttonはクリックイベントを発生させる", "type=\"submit\"でデータを送信する"],
                reqs: ["<form>タグで囲むこと", "<button>タグを使用すること", "ボタンのテキストを「送信」にすること"],
                initialCode: "",
                prefixCode: "<input type=\"text\" placeholder=\"名前\">\n<!-- formで囲んでbuttonを追加 -->\n",
                check: (code) => /<form.*?>.*?<button.*?>送信<\/button>.*?<\/form>/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>formタグ</strong>（フォーム）は、入力されたデータをサーバーに送るための「入れ物」です。</p>
                        <p>入力欄や送信ボタンを、このformタグで囲んでグループ化します。</p>
                        <p><strong>buttonタグ</strong>は、クリックできるボタンを作ります。formの中で使うと、データを送信する役割を持ちます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;form&gt;
  &lt;input type="text"&gt;
  &lt;button&gt;送信する&lt;/button&gt;
&lt;/form&gt;</pre>
                    </div>
                `
            },
            {
                title: "3-3. セレクトボックス（select, option）",
                points: ["selectはドロップダウンメニューを作る", "optionで選択肢を1つずつ定義する", "value属性で送信する値を指定する"],
                desc: "選択肢から選ぶプルダウンメニューを作ってみましょう。",
                reqs: ["2つ目の<option>に「青」と書くこと", "3つ目の<option>に「黄」と書くこと"],
                initialCode: "<select>\n  <option>赤</option>\n</select>",
                prefixCode: "<!-- 好きな色を選べるようにしよう -->\n",
                check: (code) => {
                    const hasSelect = /<select.*?>/i.test(code);
                    const hasRed = /赤/i.test(code);
                    const hasBlue = /青/i.test(code);
                    const hasYellow = /黄/i.test(code);
                    return hasSelect && hasRed && hasBlue && hasYellow;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>selectタグ</strong>と<strong>optionタグ</strong>を使うと、クリックして選ぶドロップダウンメニューが作れます。</p>
                        <p>都道府県の選択や、誕生日の「月」を選ぶ時などによく使われます。</p>
                        <ul>
                          <li><strong>select</strong>：メニュー全体</li>
                          <li><strong>option</strong>：一つ一つの選択肢</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;select&gt;
  &lt;option&gt;東京&lt;/option&gt;
  &lt;option&gt;大阪&lt;/option&gt;
&lt;/select&gt;</pre>
                    </div>
                `
            },
            {
                title: "3-4. チェックボックス（checkbox）",
                points: ["type=\"checkbox\"でチェックボックスになる", "複数選択が可能", "labelタグで囲むと文字もクリックできる"],
                desc: "興味のある項目を複数選べるチェックボックスを作りましょう。",
                reqs: ["<input>タグでtype=\"checkbox\"を作ること", "「利用規約に同意する」というテキストを追加すること"],
                initialCode: "",
                prefixCode: "<!-- チェックボックスを作ろう -->\n",
                check: (code) => {
                    const hasCheckbox = /<input\s+.*?type=["']checkbox["'].*?>/i.test(code);
                    const hasAgreement = /利用規約に同意する/i.test(code);
                    return hasCheckbox && hasAgreement;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>&lt;input type="checkbox"&gt;</code> と書くと、四角いチェックボックスになります。</p>
                        <p>これは「はい/いいえ」のようなON/OFFの状態や、複数選択ができる項目（興味のある趣味など）に使います。</p>
                        <p>チェックができる四角形が表示されるだけなので、隣に文字を置いてあげる必要があります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;input type="checkbox"&gt; 利用規約に同意する</pre>
                    </div>
                `
            },
            {
                title: "3-5. ラジオボタン（radio）",
                points: ["type=\"radio\"でラジオボタンになる", "name属性を同じにすると1つだけ選べる", "「はい/いいえ」などに適している"],
                desc: "1つだけ選べる選択肢を作ってみましょう。グループ名を揃えるのがポイントです。",
                reqs: [
                    "inputタグでtype=\"radio\"を2つ作ること",
                    "両方のname属性を「roland」にすること",
                    "それぞれの選択肢に「俺」と「俺以外」のテキストを書くこと"
                ],
                initialCode: "",
                prefixCode: "<!-- あなたは？ -->\n",
                check: (code) => {
                    const hasRadio = (code.match(/type=["']radio["']/gi) || []).length >= 2;
                    const hasName = (code.match(/name=["']roland["']/gi) || []).length >= 2;
                    const hasMe = /俺/i.test(code);
                    const hasNotMe = /俺以外/i.test(code);
                    return hasRadio && hasName && hasMe && hasNotMe;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>&lt;input type="radio"&gt;</code> はラジオボタンです。丸い選択ボタンです。</p>
                        <p>チェックボックスと違い、<strong>グループの中で1つしか選べない</strong>のが特徴です（性別など）。</p>
                        <p>同じグループにするために、<code>name="xxx"</code> という属性を同じ名前に揃える必要があります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;input type="radio" name="plan"&gt; プランA
&lt;input type="radio" name="plan"&gt; プランB</pre>
                    </div>
                    <div class="lecture-note">
                        <p>💡 <strong>注意：</strong> name属性がバラバラだと、両方とも選べてしまいます。</p>
                    </div>
                `
            },
            {
                title: "3-6. 文章入力（textarea）",
                points: ["textareaは複数行の入力欄", "閉じタグが必要（<input>とは違う）", "rows属性で高さを指定できる"],
                desc: "ユーザーが感想や意見を自由に書ける、複数行の入力欄を作ってみましょう。",
                reqs: [
                    "<textarea>タグを使用すること",
                    "rows属性を「5」に指定すること",
                    "「ご意見をお聞かせください」という文字を中に入れること"
                ],
                initialCode: "",
                prefixCode: "<!-- 感想を入力 -->\n",
                check: (code) => {
                    const hasTextarea = /<textarea[^>]*?rows=["']5["'][^>]*?>.*?ご意見をお聞かせください.*?<\/textarea>/is.test(code);
                    return hasTextarea;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>textareaタグ</strong>（テキストエリア）は、複数行の長い文章を入力するための場所を作ります。</p>
                        <p><strong>rows属性</strong>を使うと、入力欄の「高さ（行数）」を指定することができます。例えば <code>rows="5"</code> と書くと、最初から5行分の高さが表示されます。</p>
                        <p>inputタグとは違い、<strong>閉じタグが必要</strong>なことに注意しましょう。タグの間に書いた文字が、最初から入力された状態（初期値）になります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;textarea rows="5"&gt;ここに感想を書いてください&lt;/textarea&gt;</pre>
                    </div>
                `
            }
        ]
    },
    4: {
        id: 4,
        title: "HTML応用：レイアウト",
        steps: [
            {
                title: "4-1. ヘッダー（header）",
                points: ["headerはページやセクションの上部を表す", "ロゴやナビゲーションを入れることが多い", "h1タグなどを中に書く"],
                desc: "ページの看板となるヘッダーを作成し、サイトのタイトルを入れましょう。",
                reqs: ["<header>タグでヘッダーを作ること", "その中に<h1>タグを入れること", "見出しを「マイ・ブログ」にすること"],
                initialCode: "",
                prefixCode: "<!-- サイトの上部を作ろう -->\n",
                check: (code) => {
                    const hasHeader = /<header.*?>/i.test(code);
                    const hasH1 = /<h1.*?>.*?<\/h1>/i.test(code);
                    const hasTitle = /マイ・ブログ/i.test(code);
                    return hasHeader && hasH1 && hasTitle;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>headerタグ</strong>は、ページやセクションの<strong>導入部（看板）</strong>を表すタグです。</p>
                        <p>一般的には、サイトのロゴ、タイトル、メインナビゲーションなどを配置します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;header&gt;
  &lt;h1&gt;マイ・ブログ&lt;/h1&gt;
&lt;/header&gt;</pre>
                    </div>
                `
            },
            {
                title: "4-2. メインコンテンツ（main）",
                points: ["mainはページの主要な内容を表す", "1ページに1つだけ使う", "記事の本文などをここに入れる"],
                desc: "ページのメイン部分を作成しましょう。",
                reqs: ["<main>タグでメイン部分を作ること", "その中に<p>タグを入れること", "本文を「今日はHTMLの勉強をしました。」にすること"],
                initialCode: "",
                prefixCode: "<header><h1>マイ・ブログ</h1></header>\n<!-- メインコンテンツを作ろう -->\n",
                check: (code) => {
                    const hasMain = /<main.*?>/i.test(code);
                    const hasP = /<p.*?>.*?<\/p>/i.test(code);
                    const hasText = /今日はHTMLの勉強をしました。/i.test(code);
                    return hasMain && hasP && hasText;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>mainタグ</strong>は、そのページの<strong>一番メインとなるコンテンツ</strong>を囲むタグです。</p>
                        <p>1つのページに1つだけしか使えないというルールがあります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;main&gt;
  &lt;p&gt;ここがページの主役です。&lt;/p&gt;
&lt;/main&gt;</pre>
                    </div>
                `
            },
            {
                title: "4-3. フッター（footer）",
                points: ["footerはページの下部を表す", "著作権表示（Copyright）やリンク集を入れる", "ページの締めくくり"],
                desc: "ページの最下部にフッターを追加し、Copyrightを書きましょう。",
                reqs: ["<footer>タグを使用すること", "「2026」という数字を含めること"],
                initialCode: "",
                prefixCode: "<main>...</main>\n<!-- 最後にフッターを追加 -->\n",
                check: (code) => /<footer.*?>.*?2026.*?<\/footer>/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>footerタグ</strong>は、ページやセクションの<strong>下部（フッター）</strong>を表すタグです。</p>
                        <p>著作権表示（Copyright）や連絡先を載せるのが一般的です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;footer&gt;
  &lt;p&gt;&copy; 2026 My Site&lt;/p&gt;
&lt;/footer&gt;</pre>
                    </div>
                `
            },
            {
                title: "4-4. セクション（section）",
                points: ["sectionは意味のある「まとまり」を表す", "見出し（h2など）とセットで使うのが基本", "divよりも意味が明確になる"],
                desc: "メインコンテンツの中に、記事のセクションを作ってみましょう。",
                reqs: [
                    "<section>タグを使用してコンテンツをまとめること",
                    "中に<h2>タグで「プロフィール」と書くこと",
                    "その下に「趣味は旅行です。」と書くこと"
                ],
                initialCode: "",
                prefixCode: "<main>\n<!-- 記事のまとまりを作ろう -->\n",
                check: (code) => {
                    const hasSection = /<section.*?>/i.test(code);
                    const hasH2 = /<h2>プロフィール<\/h2>/i.test(code);
                    const hasText = /趣味は旅行です。/i.test(code);
                    return hasSection && hasH2 && hasText;
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>sectionタグ</strong>は、章や節といった、<strong>意味のある文章のまとまり</strong>を表します。</p>
                        <p>通常、中には見出し（h2など）を入れるのが基本です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;section&gt;
  &lt;h2&gt;サービス紹介&lt;/h2&gt;
  &lt;p&gt;詳細な説明が入ります。&lt;/p&gt;
&lt;/section&gt;</pre>
                    </div>
                `
            },
            {
                title: "4-5. 汎用的な箱（div）",
                points: ["divは意味を持たない汎用的なブロック", "デザインのためにグループ化する際によく使う", "CSSでレイアウトするときに必須"],
                desc: "複数の要素をdivタグで囲んで、グループ化してみましょう。",
                reqs: ["<div>タグを使用すること", "divの中に2つ以上の要素を入れること"],
                initialCode: "<p>テキスト1</p>\n<p>テキスト2</p>",
                prefixCode: "<!-- これらをdivで囲んでグループ化 -->\n",
                check: (code) => /<div.*?>.+?<\/div>/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>divタグ</strong>は、特別な意味を持たない<strong>「汎用的な箱」</strong>です。</p>
                        <p>主にCSSでデザインを当てるために、要素をグループ化する目的で使われます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;div class="box"&gt;
  &lt;p&gt;まとめたい内容&lt;/p&gt;
&lt;/div&gt;</pre>
                    </div>
                `
            }
        ]
    },
    5: {
        id: 5,
        title: "CSS基礎：カスケードスタイルシート",
        steps: [
            {
                title: "5-1. 文字の色を変える",
                points: ["「style.css」タブにCSSを書く", "h1 { color: red; } のように書く", "セレクタ（h1）でどの要素か指定する"],
                desc: "「Hello」の文字を赤色にしてみましょう。エディタの「style.css」タブに切り替えてCSSを記述してください。",
                reqs: [
                    "style.cssタブに切り替えて記述すること",
                    "h1セレクタ（見出し）に対してプロパティを書くこと",
                    "color: red; のように末尾にセミコロン（;）を付けること"
                ],
                initialCode: "<h1>プロフィールの紹介</h1>",
                initialCSS: "",
                prefixCSS: "h1 {\n  /* ここに文字色を指定 */\n",
                suffixCSS: "\n}",
                defaultFile: "html",
                prefixCode: "<!-- HTML側にはタグだけを書きます -->\n",
                check: (code) => /h1\s*{[^}]*?color:\s*red;/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>Cascading Style Sheets（CSS）</strong>は、HTMLを装飾するための言語です。</p>
                        <p>通常、HTMLファイルとは別に<strong>「.css」</strong>という拡張子のファイルを作り、そこにデザインを記述します。</p>
                        <p>エディタ上部の<strong>「style.css」</strong>タブを切り替えて、CSSを書いてみましょう。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例（style.css）</h4>
                        <pre>h1 {
  color: blue;
}</pre>
                    </div>
                `
            },
            {
                title: "5-2. 背景色をつける",
                points: ["background-colorで背景色を指定する", "複数のプロパティを並べて書ける", "セミコロン(;)で区切るのがルール"],
                desc: "pタグの背景を水色（lightblue）にしてみましょう。style.cssタブに記述します。",
                reqs: ["pセレクタに使用すること", "background-color: lightblue;（セミコロン含む）を指定すること"],
                initialCode: "<p>背景色が変わります</p>",
                initialCSS: "",
                prefixCSS: "p {\n  /* ここに背景色を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /p\s*{[^}]*?background-color:\s*lightblue;/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>background-colorプロパティ</strong>は、要素の背景に色をつけます。</p>
                        <p>style.cssに記述することで、全てのpタグに一括で背景色を適用できます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>p {
  color: white;
  background-color: black;
}</pre>
                    </div>
                `
            },
            {
                title: "5-3. 文字の大きさと太さ",
                points: ["font-sizeで大きさを調整", "font-weightで太さを調整", "spanタグなどの特定の要素も狙える"],
                desc: "spanタグの文字を大きく（24px）、太く（bold）してみましょう。",
                reqs: ["spanセレクタを使用すること", "font-size: 24px; を指定すること", "font-weight: bold; を指定すること"],
                initialCode: "<p>普通の文字の中に<span>目立つ文字</span>があります。</p>",
                initialCSS: "",
                prefixCSS: "span {\n  /* ここにサイズと太さを指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /span\s*{\s*[^}]*?font-size:\s*24px;[^}]*?font-weight:\s*bold;[^}]*?}/is.test(code) || /span\s*{\s*[^}]*?font-weight:\s*bold;[^}]*?font-size:\s*24px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>文字を読みやすくするために、サイズ（font-size）と太さ（font-weight）を調整しましょう。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>span {
  font-size: 30px;
  font-weight: bold;
}</pre>
                    </div>
                `
            },
            {
                title: "5-4. フォントの種類（font-family）",
                points: ["font-familyでフォント（書体）を指定する", "sans-serif（ゴシック体）とserif（明朝体）が基本", "サイトの雰囲気を大きく左右する"],
                desc: "本文（pタグ）のフォントを「sans-serif」（ゴシック体）にして、モダンな雰囲気にしましょう。",
                reqs: ["pセレクタを使用すること", "font-family: sans-serif; を指定すること"],
                initialCode: "",
                initialCSS: "",
                prefixCSS: "p {\n  font-size: 16px;\n  /* ここにフォントの種類を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "<p>書体によってページの印象は大きく変わります。読みやすいフォントを選びましょう。</p>",
                check: (code) => /p\s*{\s*[^}]*?font-family:\s*sans-serif;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>font-familyプロパティ</strong>を使うと、文字の<strong>書体（フォント）</strong>を変更できます。</p>
                        <p><code>sans-serif</code>（ゴシック体）はスクリーンで見やすく、<code>serif</code>（明朝体）は伝統的な印象を与えます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>p {
  font-family: sans-serif;
}</pre>
                    </div>
                `
            },
            {
                title: "5-5. 行間の調整（line-height）",
                points: ["line-heightで行の高さを指定", "1.5 や 1.8 のように単位なしで指定するのが一般的", "読みやすさ（可読性）に直結する重要な要素"],
                desc: "文章が読みやすくなるように、pタグの行間を「1.8」に設定しましょう。",
                reqs: ["pセレクタを使用すること", "line-height: 1.8; を指定すること"],
                initialCode: "",
                initialCSS: "",
                prefixCSS: "p {\n  font-size: 16px;\n  /* ここに行間を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "<p>行間が狭すぎると文章は読みづらくなります。<br>適度な余白を持たせることで、<br>ユーザーはずっと快適に文字を読むことができます。</p>",
                check: (code) => /p\s*{\s*[^}]*?line-height:\s*1\.8;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>line-heightプロパティ</strong>は、テキストの<strong>「行の高さ」</strong>を指定します。</p>
                        <p><code>1.5</code>（文字サイズの1.5倍）〜<code>1.8</code>程度に設定すると、読みやすくなります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>p {
  line-height: 1.8;
}</pre>
                    </div>
                `
            }
        ]
    },
    6: {
        id: 6,
        title: "CSS基礎：配置と空白",
        steps: [
            {
                title: "6-1. 文字位置の調整（text-align）",
                points: ["text-alignプロパティで文字の水平方向の配置を決める", "center（中央）、right（右）、left（左）", "ブロック要素に対して指定する"],
                desc: "見出しを中央揃え（center）にしてみましょう。",
                reqs: ["h1セレクタに使用すること", "text-align: center;（セミコロン含む）を指定すること"],
                initialCode: "<h1>中央揃えタイトル</h1>",
                initialCSS: "",
                prefixCSS: "h1 {\n  /* ここに文字位置を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /h1\s*{[^}]*?text-align:\s*center;/i.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>text-alignプロパティ</strong>は、テキストの「行揃え」を指定します。</p>
                        <p>デフォルトは左揃えですが、タイトルなどを中央に寄せたい時に <code>center</code> をよく使います。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>h2 {
  text-align: center;
}</pre>
                    </div>
                `
            },
            {
                title: "6-2. 内側の余白（padding）",
                points: ["paddingは枠線から内側に向かってできる余白", "中身の要素と枠の間にスペースを持たせる", "ボタンなどを大きく見せたい時にも使う"],
                desc: "ボタンの内側に20pxの余白を入れて、大きく押しやすいボタンにしましょう。",
                reqs: ["buttonセレクタに使用すること", "padding: 20px;（セミコロン含む）を指定すること"],
                initialCode: "<button>クリック</button>",
                initialCSS: "",
                prefixCSS: "button {\n  border: 1px solid black;\n  /* ここに内側の余白を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /button\s*{\s*[^}]*?padding:\s*20px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>padding</strong>は、要素の中身と境界線の間の「内側の余白」です。</p>
                        <p>これがないと、文字が枠にギリギリまで詰まってしまい、読みにくくなります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>button {
  padding: 10px;
}</pre>
                    </div>
                `
            },
            {
                title: "6-3. 外側の余白（margin）",
                points: ["marginは枠線から外側に向かってできる余白", "隣り合う要素との間隔を作る", "要素全体を移動させる時にも使える"],
                desc: "クラス名「box2」の箱に、上方向（top）の余白を30px入れましょう。style.cssタブに記述します。",
                reqs: [".box2セレクタを使用すること", "margin-top: 30px;（セミコロン含む）を指定すること"],
                initialCode: "<div style=\"background: pink; padding: 10px;\">箱1</div>\n<div class=\"box2\" style=\"background: lightgreen; padding: 10px;\">箱2</div>",
                initialCSS: "",
                prefixCSS: ".box2 {\n  /* ここに外側の余白を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /\.box2\s*{\s*[^}]*?margin-top:\s*30px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>margin</strong>は、要素の境界線の外側の余白です。</p>
                        <p>要素同士がくっつきすぎないように「距離」を持たせる役割があります。</p>
                        <p>クラスを指定してデザインを変える時は、<code>.クラス名</code> のように頭にドットをつけます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.box {
  margin-top: 20px;
}</pre>
                    </div>
                `
            },
            {
                title: "6-4. 要素の幅と高さ（width/height）",
                points: ["widthで幅、heightで高さを指定", "px（ピクセル）や %（パーセント）を使う", "レイアウトの基本単位"],
                desc: "クラス名「box」の要素の幅を200px、高さを100pxに指定しましょう。",
                reqs: [".boxセレクタを使用すること", "width: 200px; を指定すること", "height: 100px; を指定すること"],
                initialCode: "<div class=\"box\">サイズを変えよう</div>",
                initialCSS: "",
                prefixCSS: ".box {\n  background: orange;\n  /* ここに幅と高さを指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.box\s*{\s*[^}]*?width:\s*200px;[^}]*?height:\s*100px;[^}]*?}/is.test(code) || /\.box\s*{\s*[^}]*?height:\s*100px;[^}]*?width:\s*200px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>width</strong>（幅）と<strong>height</strong>（高さ）を使って、要素のサイズを自由に決められます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.box {
  width: 300px;
  height: 200px;
}</pre>
                    </div>
                `
            },
            {
                title: "6-5. ブロックの中央揃え（margin: auto）",
                points: ["左右のmarginにautoを指定すると中央に寄る", "margin: 0 auto; という書き方が定番", "width（幅）が決まっている必要がある"],
                desc: "クラス名「container」を画面の中央（左右中央）に配置しましょう。margin: 0 auto; を使います。",
                reqs: [".containerセレクタを使用すること", "margin: 0 auto; を指定すること"],
                initialCode: "<div class=\"container\">中央に配置</div>",
                initialCSS: "",
                prefixCSS: ".container {\n  width: 200px;\n  background: skyblue;\n  padding: 20px;\n  text-align: center;\n  /* ここに中央揃えを指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.container\s*{\s*[^}]*?margin:\s*0\s+auto;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>ブロック要素を<strong>左右中央</strong>に配置するには、<code>margin: 0 auto;</code> という魔法の指定を使います。</p>
                        <p>「上下は0、左右は自動（auto）」という意味です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.box {
  width: 50%;
  margin: 0 auto;
}</pre>
                    </div>
                `
            }
        ]
    },
    7: {
        id: 7,
        title: "CSS応用：デザイン",
        steps: [
            {
                title: "7-1. 枠線の装飾（border）",
                points: ["borderプロパティで線の太さ・種類・色を一度に指定できる", "実線（solid）の他に点線（dotted）などがある", "画像（img）などの要素にも適用可能"],
                desc: "画像の周りに3pxの赤い実線（solid）の枠をつけてみましょう。style.cssに記述してください。",
                reqs: ["imgセレクタに使用すること", "border: 3px solid red;（セミコロン含む）を指定すること"],
                initialCode: "<img src=\"https://via.placeholder.com/150\">",
                initialCSS: "",
                prefixCSS: "img {\n  width: 150px;\n  /* ここに枠線を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /img\s*{\s*[^}]*?border:\s*3px\s+solid\s+red;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>borderプロパティ</strong>を使うと、要素の周りに<strong>「枠線」</strong>を引くことができます。</p>
                        <p>「太さ」「種類」「色」の3つをスペースで区切って指定します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>img {
  border: 10px solid pink;
}</pre>
                    </div>
                `
            },
            {
                title: "7-2. 角を丸くする（border-radius）",
                points: ["border-radiusプロパティで角の丸みを調整する", "大きな値を指定するほど丸くなる", "10px程度で柔らかい印象になる"],
                desc: "クラス名「round-btn」のボタンの角を10px丸くしてみましょう。style.cssで記述します。",
                reqs: [".round-btnセレクタを使用すること", "border-radius: 10px;（セミコロン含む）を指定すること"],
                initialCode: "<button class=\"round-btn\">丸いボタン</button>",
                initialCSS: "",
                prefixCSS: ".round-btn {\n  background: orange;\n  padding: 10px;\n  border: none;\n  /* ここに角丸を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /\.round-btn\s*{\s*[^}]*?border-radius:\s*10px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>border-radiusプロパティ</strong>は、要素の<strong>「角」を丸く</strong>します。</p>
                        <p>ボタンやカードデザインを、モダンで柔らかい印象にするのに最適なプロパティです。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.btn {
  border-radius: 5px;
}</pre>
                    </div>
                `
            },
            {
                title: "7-3. 影をつける（box-shadow）",
                points: ["box-shadowで要素に影を落とす", "Xずれ Yずれ ぼかし 色 の順で指定", "立体感を出すのによく使われる"],
                desc: "クラス名「card」に影をつけて浮かび上がっているように見せましょう。style.cssで記述します。",
                reqs: [".cardセレクタを使用すること", "box-shadow: 5px 5px 10px gray;（セミコロン含む）を指定すること"],
                initialCode: "<div class=\"card\">カード</div>",
                initialCSS: "",
                prefixCSS: ".card {\n  padding: 20px;\n  border: 1px solid #ccc;\n  /* ここに影を指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /\.card\s*{\s*[^}]*?box-shadow:\s*5px\s+5px\s+10px\s+gray;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>box-shadowプロパティ</strong>を使うと、要素に<strong>「影」</strong>をつけて立体感を出すことができます。</p>
                        <p>指定の順番は <code>右方向のずれ 下方向のずれ ぼかしの強さ 色</code> です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}</pre>
                    </div>
                `
            },
        ]
    },
    8: {
        id: 8,
        title: "CSS応用：フレックスボックス",
        steps: [
            {
                title: "8-1. 要素を横並びにする（flex）",
                points: ["display: flexを指定すると子が横並びになる", "親要素に指定する（Flexコンテナ）", "レイアウトの基本中の基本"],
                desc: "3つの箱を横一列に並べてみましょう。親要素（container）に設定します。",
                reqs: ["style.cssタブを使用すること", ".containerセレクタに対して display: flex; を指定すること"],
                initialCode: "<div class=\"container\">\n  <div style=\"background:red\">1</div>\n  <div style=\"background:blue\">2</div>\n  <div style=\"background:green\">3</div>\n</div>",
                initialCSS: "",
                prefixCSS: ".container {\n  /* ここにフレックスボックスを指定 */\n",
                suffixCSS: "\n}",
                prefixCode: "",
                check: (code) => /\.container\s*{\s*[^}]*?display:\s*flex;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>Flexbox</strong>は、要素を<strong>横並び</strong>にするための最もモダンで強力な手法です。</p>
                        <p>親要素に <code>display: flex;</code> を指定するだけで、中の要素が横に並びます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;div style="display: flex;"&gt;
  &lt;div&gt;左&lt;/div&gt;&lt;div&gt;右&lt;/div&gt;
&lt;/div&gt;</pre>
                    </div>
                `
            },
            {
                title: "8-2. 横方向の配置（justify-content）",
                points: ["justify-contentで水平方向の揃えを指定", "center（中央）、space-between（均等配置）など", "flexとセットで使う"],
                desc: "箱を中央揃え（center）に配置してみましょう。style.cssで記述します。",
                reqs: ["justify-content: center; に設定すること"],
                initialCode: "<div class=\"container\">\n  <div style=\"background:red\">1</div>\n  <div style=\"background:blue\">2</div>\n</div>",
                initialCSS: "",
                prefixCSS: ".container {\n  display: flex;\n  /* ここに横方向の配置を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.container\s*{\s*[^}]*?justify-content:\s*center;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>justify-content</strong>は、横並びになった要素の<strong>水平方向の配置</strong>を決めます。</p>
                        <ul>
                            <li><code>center</code>：中央寄せ</li>
                            <li><code>space-between</code>：均等配置</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.container {
  display: flex;
  justify-content: center;
}</pre>
                    </div>
                `
            },
            {
                title: "8-3. 縦方向の揃え（align-items）",
                points: ["align-itemsで垂直方向の揃えを指定", "centerで上下中央、flex-endで下揃え", "高さが違う要素を揃えるのに便利"],
                desc: "要素を上下中央（center）に揃えてみましょう。style.cssで記述します。",
                reqs: ["align-items: center; に設定すること"],
                initialCode: "<div class=\"container\">\n  <div style=\"background:red\">1</div>\n</div>",
                initialCSS: "",
                prefixCSS: ".container {\n  display: flex;\n  height: 100px;\n  background: #eee;\n  /* ここに縦方向の配置を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.container\s*{\s*[^}]*?align-items:\s*center;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>align-items</strong>は、横ならびになった要素の<strong>垂直方向（高さ）の揃え方</strong>を指定します。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.container {
  display: flex;
  align-items: center;
}</pre>
                    </div>
                `
            }
        ]
    },
    9: {
        id: 9,
        title: "CSS応用：アニメーションとスマホ対応",
        steps: [
            {
                title: "9-1. 滑らかな変化（transition）",
                points: ["transitionで変化にかける時間を指定する", "0.3s のように秒数で指定", "hoverと組み合わせると効果的"],
                desc: "マウスを乗せた時に0.5秒かけて色が変化するように設定しましょう。style.cssで記述します。",
                reqs: ["transition: 0.5s; を指定すること"],
                initialCode: "<button class=\"btn\">Hover Me</button>",
                initialCSS: "",
                prefixCSS: ".btn {\n  background: red;\n  /* 変化の時間を指定 */\n",
                suffixCSS: "\n}\n\n.btn:hover {\n  background: blue;\n}",
                check: (code) => /\.btn\s*{\s*[^}]*?transition:\s*0\.5s;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>transitionプロパティ</strong>を使うと、色の変化などを<strong>アニメーション</strong>のように滑らかにできます。</p>
                        <p>「変化にかける時間」を指定します（例：<code>0.3s</code> は0.3秒）。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.btn {
  transition: 0.5s;
}</pre>
                    </div>
                `
            },
            {
                title: "9-2. スマホ対応（Media Query）",
                points: ["@media (max-width: 600px) {...} のように書く", "画面幅が狭い時だけスタイルを適用", "レスポンシブデザインの要"],
                desc: "スマホ画面（幅600px以下）の時だけ、文字色が赤になるように設定しましょう。",
                reqs: ["メディアクエリの中で color: red; を指定すること"],
                initialCode: "<p>画面幅を変えてみよう</p>",
                initialCSS: "",
                prefixCSS: "p { color: black; }\n\n@media (max-width: 600px) {\n  p {\n    /* ここにスマホ用の色を指定 */\n",
                suffixCSS: "\n  }\n}",
                check: (code) => /@media\s*\(max-width:\s*600px\)\s*{\s*p\s*{\s*[^}]*?color:\s*red;[^}]*?}\s*}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><strong>メディアクエリ（@media）</strong>を使うと、画面のサイズに合わせてスタイルを切り替えることができます。</p>
                        <p>これが<strong>レスポンシブデザイン</strong>（スマホ対応）の基本となります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>@media (max-width: 600px) {
  p {
    color: red;
  }
}</pre>
                    </div>
                `
            }
        ]
    },
    10: {
        id: 10,
        title: "実践編：プロフィールサイト",
        steps: [
            {
                title: "10-1. 土台の作成（レイアウト）",
                points: ["header, main, footerを用意する", "全体のレイアウト構成を決める"],
                desc: "ウェブサイトの骨組みを作ります。HTMLタブで header, main, footer タグを書いてください。",
                reqs: ["<header>タグを書くこと", "<main>タグを書くこと", "<footer>タグを書くこと"],
                initialCode: "",
                prefixCode: "<!-- ここに骨組みを書こう -->\n",
                initialCSS: "",
                prefixCSS: "",
                suffixCSS: "",
                defaultFile: "html",
                check: (code) => /<header>.*?<\/header>/is.test(code) && /<main>.*?<\/main>/is.test(code) && /<footer>.*?<\/footer>/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>Webページの基本構造は、<strong>ヘッダー・メイン・フッター</strong>の3つで構成されます。</p>
                        <ul>
                            <li><code>&lt;header&gt;</code>: サイトのタイトルなど</li>
                            <li><code>&lt;main&gt;</code>: 本文やコンテンツ</li>
                            <li><code>&lt;footer&gt;</code>: コピーライトなど</li>
                        </ul>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;header&gt;
  &lt;h1&gt;My Site&lt;/h1&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;p&gt;ようこそ&lt;/p&gt;
&lt;/main&gt;
&lt;footer&gt;
  &lt;p&gt;© 2026&lt;/p&gt;
&lt;/footer&gt;</pre>
                    </div>
                `
            },
            {
                title: "10-2. 自己紹介セクション",
                points: ["画像を丸く切り抜いて配置", "紹介文を見やすくレイアウト"],
                desc: "プロフィール画像を丸く（border-radius: 50%）し、幅を100pxに設定しましょう。style.cssで記述します。",
                reqs: ["imgタグに対してスタイルを指定すること", "width: 100px; を指定すること", "border-radius: 50%; を指定すること"],
                initialCode: "<div class=\"profile\">\n  <img src=\"https://placehold.co/150\" alt=\"Profile\">\n  <h2>山田 太郎</h2>\n  <p>Webデザイナーを目指して勉強中です。</p>\n</div>",
                initialCSS: "",
                prefixCSS: ".profile {\n  text-align: center;\n  padding: 20px;\n}\n\nimg {\n  /* ここにスタイルを指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /img\s*{\s*[^}]*?width:\s*100px;[^}]*?border-radius:\s*50%;[^}]*?}/is.test(code) || /img\s*{\s*[^}]*?border-radius:\s*50%;[^}]*?width:\s*100px;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>画像を丸く切り抜くには、<code>border-radius: 50%;</code> を使います。</p>
                        <p>正方形の画像に対して行うと、綺麗な円になります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>img {
  width: 100px;
  border-radius: 50%;
}</pre>
                    </div>
                `
            },
            {
                title: "10-3. スキル一覧のデザイン",
                points: ["flexboxで横並びにする", "flex-wrap: wrapで折り返す", "gapで間隔をあける"],
                desc: "スキル一覧（liタグ）を横並びにし、要素の間に10pxの間隔（gap）を入れましょう。",
                reqs: [".skillsセレクタ（ulタグ）に対して指定すること", "display: flex; を指定すること", "gap: 10px; を指定すること"],
                initialCode: "<ul class=\"skills\">\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
                initialCSS: "",
                prefixCSS: "li {\n  list-style: none;\n  background: #eee;\n  padding: 5px 10px;\n  border-radius: 4px;\n}\n\n.skills {\n  padding: 0;\n  /* ここに横並びの設定を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.skills\s*{\s*[^}]*?display:\s*flex;[^}]*?gap:\s*10px;[^}]*?}/is.test(code) || /\.skills\s*{\s*[^}]*?gap:\s*10px;[^}]*?display:\s*flex;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>リストを横並びにするには、親要素（ul）に <code>display: flex;</code> を指定します。</p>
                        <p>さらに <code>gap</code> を使うと、要素同士の間隔を簡単に空けることができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.list {
  display: flex;
  gap: 10px;
}</pre>
                    </div>
                `
            }
        ]
    },
    11: {
        id: 11,
        title: "実践編：ブログ記事ページ",
        steps: [
            {
                title: "11-1. 記事レイアウトの構築",
                points: ["articleタグで記事を囲む", "timeタグで日付を表す", "h1タグで記事タイトル"],
                desc: "ブログ記事の構造を作ります。HTMLタブで、articleタグの中に、h1タグ（タイトル）とpタグ（本文）を入れてください。",
                reqs: ["<article>タグを使用すること", "その中に<h1>タグがあること", "その中に<p>タグがあること"],
                initialCode: "",
                initialCSS: "",
                defaultFile: "html",
                prefixCode: "<!-- ここに記事構造を書こう -->\n",
                check: (code) => /<article>.*?<h1>.*?<\/h1>.*?<p>.*?<\/p>.*?<\/article>/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>ブログ記事などの独立したコンテンツは <code>&lt;article&gt;</code> タグで囲むのがセマンティック（意味論的）に正しいHTMLです。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;article&gt;
  &lt;h1&gt;今日のランチ&lt;/h1&gt;
  &lt;p&gt;カレーを食べました。&lt;/p&gt;
&lt;/article&gt;</pre>
                    </div>
                `
            },
            {
                title: "11-2. 見出しのデザイン装飾",
                points: ["左側に線をつけるデザイン", "border-leftとpadding-leftの組み合わせ"],
                desc: "見出し（h2）の左側に5pxの青い実線（solid）をつけ、文字との間隔（padding-left）を10px空けましょう。",
                reqs: ["h2セレクタを使用すること", "border-left: 5px solid blue; を指定すること", "padding-left: 10px; を指定すること"],
                initialCode: "<h2>セクションタイトル</h2>\n<p>本文です。</p>",
                initialCSS: "",
                prefixCSS: "h2 {\n  /* ここに装飾を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /h2\s*{\s*[^}]*?border-left:\s*5px\s+solid\s+blue;[^}]*?padding-left:\s*10px;[^}]*?}/is.test(code) || /h2\s*{\s*[^}]*?padding-left:\s*10px;[^}]*?border-left:\s*5px\s+solid\s+blue;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>見出しの左側に線を引くデザインは、ブログなどでよく使われます。</p>
                        <p><code>border-left</code> で線を引き、<code>padding-left</code> で文字との距離を調整するのがコツです。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>h2 {
  border-left: 5px solid red;
  padding-left: 10px;
}</pre>
                    </div>
                `
            },
            {
                title: "11-3. リッチなボタン作成",
                points: ["box-shadowで影をつける", "hover時に影をなくして押した感を出す"],
                desc: "「続きを読む」ボタンに影（box-shadow: 0 4px grey;）をつけて立体的にしましょう。",
                reqs: [".btnセレクタを使用すること", "box-shadow: 0 4px grey; を指定すること"],
                initialCode: "<a href=\"#\" class=\"btn\">続きを読む</a>",
                initialCSS: "",
                prefixCSS: ".btn {\n  display: inline-block;\n  padding: 10px 20px;\n  background: orange;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  /* ここに影を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.btn\s*{\s*[^}]*?box-shadow:\s*0\s+4px\s+grey;[^}]*?}/is.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p><code>box-shadow</code> を使うと、要素に影をつけて立体的に見せることができます。</p>
                        <p><code>0 4px grey</code> は、「横方向0、縦方向4px、色グレー」の影という意味です。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.btn {
  box-shadow: 0 4px grey;
}</pre>
                    </div>
                `
            }
        ]
    },
    12: {
        id: 12,
        title: "実践編：ランディングページ",
        steps: [
            {
                title: "12-1. インパクトのあるヒーローエリア",
                points: ["画面いっぱいの背景画像", "中央揃えのキャッチコピー", "余白をたっぷりとる"],
                desc: "トップ画面（heroクラス）の背景を黒（black）、文字色を白（white）にし、内側の余白（padding）を100pxにして大きく見せましょう。",
                reqs: [".heroセレクタを使用すること", "background: black; を指定すること", "color: white; を指定すること", "padding: 100px; を指定すること"],
                initialCode: "<div class=\"hero\">\n  <h1>HTML Masterへようこそ</h1>\n  <p>プログラミングを始めよう</p>\n</div>",
                initialCSS: "",
                prefixCSS: ".hero {\n  text-align: center;\n  /* ここに背景と余白を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => /\.hero\s*{\s*[^}]*?background:\s*black;[^}]*?color:\s*white;[^}]*?padding:\s*100px;[^}]*?}/is.test(code) ||
                    /\.hero\s*{\s*[^}]*?padding:\s*100px;[^}]*?color:\s*white;[^}]*?background:\s*black;[^}]*?}/is.test(code), // Simple permutation check needed or robust regex
                // Note: Regex permutation is hard, simpler to check presence of all 3 within block.
                // Improved check logic:
                check: (code) => {
                    const block = code.match(/\.hero\s*{([^}]*)}/);
                    if (!block) return false;
                    const content = block[1];
                    return /background:\s*black;/.test(content) && /color:\s*white;/.test(content) && /padding:\s*100px;/.test(content);
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p>LP（ランディングページ）の顔となる部分は「ヒーローエリア」と呼ばれます。</p>
                        <p>大胆な配色と大きな余白を使って、ユーザーの興味を惹きつけましょう。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.hero {
  background: navy;
  color: white;
  padding: 80px;
}</pre>
                    </div>
                `
            },
            {
                title: "12-2. カード型レイアウトの配置",
                points: ["枠線と影でカードらしさを表現", "border-radiusで柔らかさを出す"],
                desc: "特徴カード（.card）に、1pxのグレーの実線（border）と、軽い影（box-shadow: 0 2px 5px #ccc;）をつけてください。",
                reqs: [".cardセレクタを使用すること", "border: 1px solid grey; (色は自由) を指定すること", "box-shadow: 0 2px 5px #ccc; (近似値可) を指定すること"],
                initialCode: "<div class=\"card\">\n  <h3>高速学習</h3>\n  <p>最短でスキルが身につきます。</p>\n</div>",
                initialCSS: "",
                prefixCSS: ".card {\n  padding: 20px;\n  width: 200px;\n  border-radius: 8px;\n  /* ここに枠線と影を指定 */\n",
                suffixCSS: "\n}",
                check: (code) => {
                    const block = code.match(/\.card\s*{([^}]*)}/);
                    if (!block) return false;
                    const content = block[1];
                    return /border:\s*1px solid/.test(content) && /box-shadow:/.test(content);
                },
                lectureHTML: `
                    <div class="lecture-text">
                        <p>情報を整理して見せる「カード型デザイン」は現代のWebサイトの主流です。</p>
                        <p>微かな影（box-shadow）をつけることで、背景から浮き上がっているように見せることができます。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>.card {
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}</pre>
                    </div>
                `
            },
            {
                title: "12-3. お問い合わせフォーム",
                points: ["formタグで囲む", "inputとtextarea", "buttonで送信"],
                desc: "お問い合わせフォームを作ります。HTMLタブで、<input type=\"text\">（名前用）と、<button>送信</button>を作成してください。",
                reqs: ["<input>タグを作成し、type=\"text\"を指定すること", "<button>タグを作成し、中に「送信」などの文字を入れること"],
                initialCode: "",
                initialCSS: "",
                defaultFile: "html",
                prefixCode: "<!-- フォームを作ろう -->\n<form>\n",
                suffixCode: "\n</form>",
                check: (code) => /<input\s+type=["']text["']/.test(code) && /<button>.*?<\/button>/.test(code),
                lectureHTML: `
                    <div class="lecture-text">
                        <p>ユーザーからの入力を受け付けるには、<code>&lt;input&gt;</code> タグなどを使います。</p>
                        <p>ボタンは <code>&lt;button&gt;送信&lt;/button&gt;</code> のように作ります。</p>
                    </div>
                    <div class="lecture-example">
                        <h4>書き方の例</h4>
                        <pre>&lt;input type="text" placeholder="名前"&gt;
&lt;button&gt;送信&lt;/button&gt;</pre>
                    </div>
                `
            }
        ]
    }
};

let currentLevel = 1;
let currentStep = 0;
let completedSteps = {};
let currentFile = 'html';
let userHTML = "";
let userCSS = "";
let prefixHTML = "";
let prefixCSS = "";
let suffixHTML = "";
let suffixCSS = "";

const codeEditor = document.getElementById('code-editor');
const codePrefix = document.getElementById('code-prefix');
const codeSuffix = document.getElementById('code-suffix');
const editorScrollContainer = document.getElementById('editor-scroll-container');
const previewFrame = document.getElementById('preview-frame');
const checkBtn = document.getElementById('check-btn');
const progressText = document.getElementById('progress-text');
const challengeTitle = document.getElementById('challenge-title');
const challengeDesc = document.getElementById('challenge-desc');
const challengePoints = document.getElementById('challenge-points');
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

const getFullCode = () => {
    return `<style>${prefixCSS}${userCSS}${suffixCSS}</style>${prefixHTML}${userHTML}${suffixHTML}`;
};

function updatePreview() {
    const code = getFullCode();
    const previewContent = `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: sans-serif; padding: 20px; color: #1e293b; background: white; }
                header, footer { background: #f8fafc; padding: 20px; text-align: center; border: 1px solid #e2e8f0; margin-bottom: 20px; }
                h1 { border-bottom: 2px solid #38bdf8; padding-bottom: 10px; }
                h2 { margin-top: 20px; margin-bottom: 10px; color: #0f172a; }
                ul { background: #f1f5f9; padding: 20px 40px; border-radius: 8px; }
                ol { background: #fdf2f8; padding: 20px 40px; border-radius: 8px; }
                form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; margin: 20px 0; }
                input, select, textarea { padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }
                button { padding: 8px; background: #38bdf8; border: none; border-radius: 4px; color: white; cursor: pointer; }
                img { max-width: 100%; border-radius: 8px; }
                table { border-collapse: collapse; width: 100%; margin-top: 10px; }
                th, td { border: 1px solid #cbd5e1; padding: 8px; text-align: left; }
                hr { border: 0; height: 1px; background: #cbd5e1; margin: 20px 0; }
                article { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px dashed #cbd5e1; }
                time { color: #64748b; font-size: 0.9em; display: block; margin-bottom: 0.5em; }
            </style>
        </head>
        <body>
            ${code}
        </body>
        </html>
    `;
    const blob = new Blob([previewContent], { type: 'text/html' });
    previewFrame.src = URL.createObjectURL(blob);
}

function updateLineNumbers() {
    const pText = currentFile === 'html' ? prefixHTML : prefixCSS;
    const eText = currentFile === 'html' ? userHTML : userCSS;
    const sText = currentFile === 'html' ? suffixHTML : suffixCSS;

    const pLines = pText === "" ? 0 : pText.split(/\r\n|\r|\n/).length;
    // Prefix might have a trailing newline if it ends a block, but pre-wrap handle it
    let totalPrefixLines = pLines;
    if (pText !== "" && pText.endsWith('\n')) totalPrefixLines--;

    const eLines = eText.split(/\r\n|\r|\n/).length;
    const sLines = sText === "" ? 0 : sText.split(/\r\n|\r|\n/).length;

    const totalLines = totalPrefixLines + eLines + sLines;

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

function showLecture(stepData) {
    lectureTitle.textContent = stepData.title;

    if (stepData.lectureHTML) {
        lecturePoints.innerHTML = stepData.lectureHTML;
    } else {
        // Fallback to points list if no rich content exists
        lecturePoints.innerHTML = stepData.points.map(point => `
            <div class="lecture-point-item">
                <div class="point-icon">💡</div>
                <div class="point-text">${point}</div>
            </div>
        `).join('');
    }

    // Reset scroll position to top
    lecturePoints.scrollTop = 0;
    lectureModal.classList.remove('hidden');
}

startLectureBtn.addEventListener('click', () => {
    lectureModal.classList.add('hidden');
    // Remove locks when starting
    editorLock.classList.add('hidden');
    previewLock.classList.add('hidden');
});

showLectureBtn.addEventListener('click', () => {
    // Just re-show the current data since modal content is already set
    lectureModal.classList.remove('hidden');
});


function loadChallenge(level, step = 0) {
    // Reset code state before loading new challenge
    userHTML = "";
    userCSS = "";

    currentLevel = parseInt(level);
    currentStep = step;

    // Reset scroll positions to top
    const mainArea = document.querySelector('main');
    const contentArea = document.querySelector('.instructions-content');
    if (mainArea) mainArea.scrollTop = 0;
    if (contentArea) contentArea.scrollTop = 0;

    if (!challenges[currentLevel]) {
        console.error("Level not found:", currentLevel);
        return;
    }

    const levelData = challenges[currentLevel];
    const stepData = levelData.steps[currentStep];

    // Update Header
    levelLabel.textContent = `Level ${currentLevel}`;
    levelTitle.textContent = levelData.title;

    challengeTitle.textContent = stepData.title;
    challengeDesc.textContent = stepData.desc;

    // Save current status to hash and localStorage
    window.location.hash = `level${currentLevel}-${currentStep + 1}`;
    localStorage.setItem('ag_last_level', currentLevel);
    localStorage.setItem('ag_last_step', currentStep);

    // challengePoints removed from DOM, so no need to update it here

    challengeReqs.innerHTML = stepData.reqs.map(req =>
        `<li>${req.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</li>`
    ).join('');

    prefixHTML = stepData.prefixCode || "";
    userHTML = stepData.initialCode || "";
    suffixHTML = stepData.suffixCode || "";
    prefixCSS = stepData.prefixCSS || "";
    userCSS = stepData.initialCSS || "";
    suffixCSS = stepData.suffixCSS || "";

    // Switch tab based on content
    if (stepData.defaultFile) {
        switchFile(stepData.defaultFile, true);
    } else if (stepData.initialCSS !== undefined) {
        switchFile('css', true);
    } else {
        switchFile('html', true);
    }

    // Show/Hide CSS tab
    const cssTab = document.getElementById('css-tab');
    if (currentLevel >= 5) {
        cssTab.classList.remove('hidden');
    } else {
        cssTab.classList.add('hidden');
    }

    updatePreview();
    updateEditorHeight();
    updateLineNumbers();
    updateStepDots();
    updateProgress();

    // Show/Hide Prev Button based on current position
    // If we are at Level 1, Step 1, hide it. Otherwise show it.
    if (currentLevel === 1 && currentStep === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    // SHOW LECTURE MODAL
    showLecture(stepData);
}

// Old buttons removed

function checkCode() {
    const code = getFullCode();
    const levelData = challenges[currentLevel];
    const stepData = levelData.steps[currentStep];

    if (stepData.check(code)) {
        if (!completedSteps[currentLevel]) completedSteps[currentLevel] = new Set();
        completedSteps[currentLevel].add(currentStep);
        updateStepDots();
        updateProgress();
        showModal();
    } else {
        alert("まだ条件を満たしていないようです。ヒントを参考にコードを見直してみてね！");
    }
}

function updateProgress() {
    const levelData = challenges[currentLevel];
    const finishedInLevel = (completedSteps[currentLevel] || new Set()).size;
    const totalInLevel = levelData.steps.length;

    progressText.textContent = `${finishedInLevel}/${totalInLevel}`;
}

function showModal() {
    modal.classList.remove('hidden');
    const isFirstTimeInLevel = (completedSteps[currentLevel] || new Set()).size === 1 && currentStep === 0;
    const isLastStep = currentStep === challenges[currentLevel].steps.length - 1;
    const isLastLevel = currentLevel === 12; // Updated max level

    if (isLastStep && isLastLevel) {
        document.getElementById('modal-title').textContent = "祝・全レベル制覇！";
        document.getElementById('modal-desc').textContent = "おめでとうございます！HTMLとCSSの実践スキルも含め、全てをマスターしました。あなたならもうどんなサイトでも作れます！";
        nextBtn.textContent = "最初からやり直す";
    } else if (isLastStep) {
        document.getElementById('modal-title').textContent = "レベルクリア！";
        document.getElementById('modal-desc').textContent = `Level ${currentLevel} の全てのステップを完了しました。次のレベルに進みますか？`;
        nextBtn.textContent = "次のレベルへ";
    } else {
        document.getElementById('modal-title').textContent = "ナイスステップ！";
        document.getElementById('modal-desc').textContent = "このステップをクリアしました！次のステップへ進みましょう。";
        nextBtn.textContent = "次のステップへ";
    }
}

codeEditor.addEventListener('input', () => {
    if (currentFile === 'html') {
        userHTML = codeEditor.value;
    } else {
        userCSS = codeEditor.value;
    }
    // Storage saving removed to ensure fresh start on revisit
    updatePreview();
    updateEditorHeight();
    updateLineNumbers();
});

function switchFile(file, skipSave = false) {
    // Save current content unless skipped
    if (!skipSave) {
        if (currentFile === 'html') {
            userHTML = codeEditor.value;
        } else {
            userCSS = codeEditor.value;
        }
    }

    currentFile = file;

    // Update UI
    document.querySelectorAll('.file-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.file === file);
    });

    if (file === 'html') {
        codePrefix.innerText = prefixHTML;
        codeEditor.value = userHTML;
        codeSuffix.innerText = suffixHTML;
        codeEditor.placeholder = "ここにHTMLを入力してください...";
    } else {
        codePrefix.innerText = prefixCSS;
        codeEditor.value = userCSS;
        codeSuffix.innerText = suffixCSS;
        codeEditor.placeholder = "ここにCSSを入力してください...";
    }

    codePrefix.style.display = (file === 'html' ? prefixHTML : prefixCSS) ? 'block' : 'none';
    codeSuffix.style.display = (file === 'html' ? suffixHTML : suffixCSS) ? 'block' : 'none';

    updateEditorHeight();
    updateLineNumbers();
}

document.getElementById('file-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.file-tab');
    if (tab) {
        switchFile(tab.dataset.file);
    }
});

editorScrollContainer.addEventListener('scroll', () => {
    lineNumbers.scrollTop = editorScrollContainer.scrollTop;
});

checkBtn.addEventListener('click', checkCode);

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        // Go to previous step in same level
        loadChallenge(currentLevel, currentStep - 1);
    } else if (currentLevel > 1) {
        // Go to previous level's last step
        const prevLevel = currentLevel - 1;
        const prevLevelData = challenges[prevLevel];
        if (prevLevelData && prevLevelData.steps) {
            loadChallenge(prevLevel, prevLevelData.steps.length - 1);
        }
    }
});

nextBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    const isLastStep = currentStep === challenges[currentLevel].steps.length - 1;

    if (isLastStep) {
        if (currentLevel < 12) { // Updated max level
            loadChallenge(currentLevel + 1, 0);
        } else {
            completedSteps = {};
            loadChallenge(1, 0);
        }
    } else {
        loadChallenge(currentLevel, currentStep + 1);
    }
});

refreshBtn.addEventListener('click', updatePreview);

// Initial load and hash change handling
function loadFromHash() {
    const hash = window.location.hash;
    const stepMatch = hash.match(/#level(\d+)-(\d+)/);

    if (stepMatch) {
        const level = parseInt(stepMatch[1]);
        const step = parseInt(stepMatch[2]) - 1;
        if (challenges[level] && challenges[level].steps[step]) {
            loadChallenge(level, step);
            return true;
        }
    } else if (hash.startsWith('#level')) {
        const level = parseInt(hash.replace('#level', ''));
        if (challenges[level]) {
            loadChallenge(level, 0);
            return true;
        }
    }
    return false;
}

window.addEventListener('DOMContentLoaded', () => {
    if (!loadFromHash()) {
        const lastLevel = localStorage.getItem('ag_last_level');
        const lastStep = localStorage.getItem('ag_last_step');
        if (lastLevel !== null) {
            loadChallenge(parseInt(lastLevel), parseInt(lastStep || 0));
        } else {
            loadChallenge(1, 0);
        }
    }
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const levelMatch = hash.match(/#level(\d+)-(\d+)/);
    if (levelMatch) {
        const level = parseInt(levelMatch[1]);
        const step = parseInt(levelMatch[2]) - 1;
        if (level !== currentLevel || step !== currentStep) {
            loadFromHash();
        }
    }
});
