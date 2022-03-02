module.exports = {
  title: "前端修炼",
  description: "学起来 搞懂它",
  base: "/vuepress-blog/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "博客",
        items: [{ text: "Github", link: "" }],
      },
    ],
    sidebar: [
      {
        title: "js", // 必要的
        path: "/javascript", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: "基础",
            path: "/javascript/one",
          },
          {
            title: "进阶",
            path: "/javascript/two",
          },
        ],
      },
      {
        title: "node",
        children: [
          {
            title: "基础",
            path: "/nodeJS/one",
          },
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
