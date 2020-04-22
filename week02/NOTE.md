# 写一个正则表达式 匹配所有 Number 直接量
    /^(\.\d+|(0|[1-9]\d*)\.?\d*?)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
# 写一个 UTF-8 Encoding 的函数
    function utf8Encoding(arr) {
        const code = encodeURIComponent(arr);
        const bytes = [];
        for (var i = 0; i < arr.length; i++) {
            const c = arr.charAt(i);
            if (c === '%') {
                const hex = code.charAt(i + 1) + code.charAt(i + 2);
                const hexVal = parseInt(hex, 16);
                bytes.push(hexVal);
                i += 2;
            } else bytes.push(c.charCodeAt(0));
        }
        return bytes;
    }
# 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
    /"(?:\\.|[^"])*"|'(?:\\.|[^'])*'/g 


