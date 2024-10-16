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
