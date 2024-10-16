# WittyRemark
A Edge extension.When you're bored, click me, and I'll give you a quote.


### 1. 扩展文件结构

```
my-edge-extension/
│
├── manifest.json
├── background.js
├── popup.html
└── popup.js
```

### 2. 编写 `manifest.json`
描述了扩展及其权限。

```json
{
  "manifest_version": 3,
  "name": "鸡汤扩展",
  "version": "1.0",
  "description": "每次打开浏览器时显示一句话。",
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  },
  "permissions": ["notifications"]
}
```

### 3. 编写 `background.js`
此脚本将在浏览器启动时运行，显示通知。

```javascript
chrome.runtime.onStartup.addListener(() => {
  showQuote();
});

function showQuote() {
  const quotes = [
    "生活就是一场冒险，勇敢去追梦。",
    "今天的努力，是为了明天的成功。",
    "幸福是奋斗出来的。",
    "不要等待机会，而要创造机会。"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon48.png",
    title: "鸡汤",
    message: randomQuote,
    priority: 2
  });
}
```

### 4. 编写 `popup.html`
这是扩展的弹出窗口。

```html
<!DOCTYPE html>
<html>
<head>
  <title>鸡汤</title>
  <script src="popup.js"></script>
</head>
<body>
  <h1>鸡汤扩展</h1>
  <button id="getQuote">获取鸡汤</button>
  <p id="quoteDisplay"></p>
</body>
</html>
```

### 5. 编写 `popup.js`
处理按钮点击事件，获取并显示鸡汤。

```javascript
document.getElementById('getQuote').addEventListener('click', () => {
  const quotes = [
    "生活就是一场冒险，勇敢去追梦。",
    "今天的努力，是为了明天的成功。",
    "幸福是奋斗出来的。",
    "不要等待机会，而要创造机会。"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteDisplay').innerText = randomQuote;
});
```

### 6. 添加图标
在项目目录中放置图标文件（`icon16.png`、`icon48.png`、`icon128.png`），它们将用于扩展的图标和通知。

### 7. 打包和安装扩展
1. 打开 Edge 浏览器，进入 `edge://extensions/`。
2. 开启开发者模式。
3. 点击“加载已解压的扩展”，选择项目目录。
