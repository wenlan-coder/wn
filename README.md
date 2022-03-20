<!--
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-03-20 13:19:28
 * @LastEditors: wenlan
 * @LastEditTime: 2022-03-20 14:43:24
-->

# wn

exec generator

## useage

```
const wn = require("wnrun");

function* getData() {
    const res1 = yield requestData("why");
    const res2 = yield requestData(res1 + "bbb");
    const res3 = yield requestData(res2 + "ccc");
    console.log("res3", res3);
}
wn.execGenerator(getData);
```
