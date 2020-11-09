# trump-tweets

This is being used to grab the Trump tweets that have a passing relationship to China.

## Instructions

1. Add a valid `BEARER_TOKEN` to `.env`.
2. Run search query in the browser: https://twitter.com/search?q=from%3Arealdonaldtrump%20YOUR_QUERY_HERE&src=typed_query&f=live
3. On the search results page scroll to the bottom of the search results to pre-execute all of the network requests.
4. Paste the contents of `0_capture.js` into the browser console.
5. Wait for script execution to complete.
6. Paste `copy(JSON.stringify(output, null, 2));` into the browser console.
7. Paste that JSON blob into `1_generate_script.js`.
8. Run `./execute.sh`

## Searches Included

Most of these searches have been manually stemmed as well.

### Places:
- China (Chinese)
- Hong Kong (HK)
- Taiwan
- Tibet
- Mongolia
- Xinjiang
- Beijing
- Shenzhen
- Taipei
- Shanghai
- Wuhan

### Topics:
- Trade War
- Trans-Pacific Partnership (TPP)
- Uyghurs
- Tiananmen
- World Trade Organization (WTO)
- World Health Organization (WHO)

### Companies:
- TikTok
- Alibaba
- Baidu
- Huawei
- ZTE
- FoxConn
- Lenovo
- Tencent
- Weibo
- WeChat
- Xiaomi

### People:
- Xi Jinping
- Meng Wanzhou
- Guo Wengui