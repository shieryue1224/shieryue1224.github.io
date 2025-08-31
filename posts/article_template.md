---
title: 文章模板
date: 2024-04-16
tags: [template]
pinned: false
---

简要介绍了文章模板.

---

## 文章模板
下面是文章模板信息, 一篇文章必须包含以下信息.

```template
---
title: HelloWorld
date: 2024-04-16
tags: [tag1, tag2]
pinned: true
head:
  - - meta
    - name: description
      content: vitepress-theme-bluearchive HelloWorld
  - - meta
    - name: keywords
      content: vitepress theme bluearchive HelloWorld
---

文章摘要，会在文章列表中显示

---

文章主体内容

```

## 说明
- title: 文章主题
- date: 发文日期, 时间格式为: YYYY-MM-DD
- tags: 文章标签, 可以有多个标签, 标签可以帮助文章归类/查找
- pinned: 是否置顶, true|false, 默认false
- head: 这里的content最后一个词填文章标题





