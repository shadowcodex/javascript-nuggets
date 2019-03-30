/* eslint-disable */
const fs = require("fs");
const { tweets } = require("./src/data/nuggets.js");

const path = "./public/rss.xml";

let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <title>JavaScript Nuggets</title>
    <author>JavaScript Nuggets</author>
    <description>
    Where little nuggets of javascript are posted, via twitter.
    </description>
    <link>https://www.javascriptnuggets.com</link>
    <language>en</language>
`;

for (let i = 0; i < tweets.length; i++) {
  let item = `<item>
        <title>${tweets[i].description}</title>
        <author>Shannon Duncan</author>
        <link>${tweets[i].link}</link>
        <pubDate>${tweets[i].date}</pubDate>
        <description>${encodeURIComponent(tweets[i].embed)}</description>
    </item>
  `;
  xml += item;
}

xml += `</rss>`;

fs.writeFileSync(path, xml);
