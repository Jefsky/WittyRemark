document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getQuote').addEventListener('click', () => {
        const quoteDisplay = document.getElementById('quoteDisplay');
        const authorDisplay = document.getElementById('authorDisplay');

        // 清空内容区域
        authorDisplay.innerText = '';
        quoteDisplay.innerText = ''; // 将句子清空
        quoteDisplay.innerText = '加载中...'; // 显示加载信息

        fetch('https://v1-yy.jefsky.com/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('网络响应错误');
                }
                return response.json();
            })
            .then(data => {
                const quote = data.hitokoto;
                const author = data.from_who ? `${data.from_who} - ${data.from}` : data.from; // 构建作者信息
                quoteDisplay.innerText = quote; // 显示句子
                authorDisplay.innerText = author; // 显示作者信息
            })
            .catch(error => {
                console.error('获取句子时发生错误:', error);
                quoteDisplay.innerText = '获取句子失败，请重试。';
                authorDisplay.innerText = ''; // 清空作者信息
            });
    });
});
