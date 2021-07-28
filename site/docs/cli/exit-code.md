---
title: 退出码
---

执行`skr`命令时，所有已知的退出码与对应情况如下，剩余异常退出均使用`99`为退出码。

- `10`：Node版本不符合要求。
- `11`：指定的命令不存在或初始化错误。
- `12`：未指定具体的命令。
- `20`：编译单个文件时出现错误。
- `21`：配置或命令行参数相关错误。
- `22`：构建过程内部错误。
- `23`：构建产出检查错误。
- `24`：项目结构相关错误。
- `25`：代码规范检查错误。
- `99`：未知错误。