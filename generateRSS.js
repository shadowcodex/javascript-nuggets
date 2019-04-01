/* eslint-disable */
const fs = require("fs");
const { tweets } = require("./src/data/nuggets.js");

const path = "./public/rss.xml";

const encode = data => {
  return data.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return "&#" + i.charCodeAt(0) + ";";
  });
};

let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
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
        <description>Todays javascript nugget can be found at the following link: ${
          tweets[i].link
        }. On topic: ${tweets[i].description}
        </description>
        <content:encoded>
          Todays javascript nugget can be found at the following link: ${
            tweets[i].link
          }.
          ${encode("<br>")} 
          ${encode(tweets[i].embed)}
        </content:encoded>
    </item>
  `;
  xml += item;
}

xml += `</rss>`;

fs.writeFileSync(path, xml);
