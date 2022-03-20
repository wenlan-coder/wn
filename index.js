/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-03-20 12:00:59
 * @LastEditors: wenlan
 * @LastEditTime: 2022-03-20 12:11:36
 */
//自动执行生成器函数
//recursion
module.exports = {
     execGenerator(genFn) {
        const generator = genFn();
        function exec(res) {
            const result = generator.next(res);
            if (result.done) {
                return result.value;
            }
            result.value.then(res => {
                exec(res);
            });
        }
        exec(); //
    }
}
