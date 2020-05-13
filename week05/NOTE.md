# 每周总结可以写在这里
## 浏览器基本原理-HTTP协议
  - 七层网络模型
    - 应用
    - 表示
    - 会话
    - 传输
    - 网络
    - 数据链路
    - 物理层

  - 前端开发工作不需要过多掌握上面的七层网络模型，要关注下面的四个方面，分别对应七层网络的某部分
    - HTTP（应用层）
    - TCP（传输层）
    - Internet（网络层）
    - 4G/5G/WIFI（数据链路层）

  - HTTP协议以文本的形式传输信息，通过换行符区分不同的信息块，分为请求和响应，采用一问一答的形式进行信息传递，必须先由客户端发起请求

  - HTTP请求头格式如下

    这里显示的其实是将\r\n显示为换行的效果，实际传输的是纯文本，每一行信息后面有\r\n换行符
    ```
    POST {PATH} /HTTP/1.1                           // 请求行: {PATH}->实际请求的路径
    Host: 127.0.0.1                                 // 请求头，从第二行开始是请求头
    Content-Type: application/x-www-form-urlencoded // 请求头
                                                    // 必须的空白换行符，将请求头与请求体分隔
    field1=aaa&code=x%3D1                           // 请求体
    ```

  - HTTP响应头格式如下

    这里显示的其实是将\r\n显示为换行的效果，实际传输的是纯文本，每一行信息后面有\r\n换行符
    ```
    HTTP/1.1 200 OK                             // 请求状态行
    Content-Type: text/html                     // 响应头，从第二行开始是响应头
    Date: Mon, 23 Dec 2019 06:46:19 GMT         // 响应头
    Connection: keep-alive                      // 响应头
    Transfer-Encoding: chunked                  // 响应头，响应体的传输方式
                                                // 必须的空白换行符，将响应头与响应体分隔
    26                                          // 响应体，当响应体的内容过长的时候会以chunk的形式将内容分段传输
    <html><body> Hello World<body></html>       // 前面一行代表chunk的大小，此行是chunk的内容
    26                                          // 另外一个chunk的大小
    <html><body> Hello World<body></html>       // 另外一个chunk的内容
    0                                           // '0'代表整个响应体内容传输完毕
    ```
    **以chunk的方式传输响应体的时候，是一个不断传输不断接收的过程，每一个chunk传输当前chunk的大小和chunk的内容**