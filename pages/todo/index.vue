<template>
  <div class="updatePage">
    <div class="up_banner">
      <img src="https://ws1.sinaimg.cn/large/006tNc79gy1g249p7iy6uj31hc0u0aea.jpg" alt="banner...">
    </div>
    <section class='updateLine'>
      <h3>更新日志</h3>
      <div class="up_wrap">
        <h4 class="up_time">2019-04-17</h4>
        <p class="up_text">- 增加图片card中图片预览功能</p>
        <p class="up_text">- 解决首页下滑时候内容区不自然的Bug</p>
        <p class="up_text">- 重构好友页</p>
      </div>
      <div class="up_wrap">
        <h4 class="up_time">2019-04-16</h4>
        <p class="up_text">- 增加掉线提醒</p>
        <p class="up_text">- 增加底部全局提醒组件 默认第一次打开 关闭后默认cookie有效期为两天  后面会又显示</p>
        <p class="up_text">- 解决左边栏在页面下拉到底部的时候被header组件覆盖的bug</p>
        <p class="up_text">- 增加返回顶部功能</p>
        <p class="up_text">- 修复首页文章顶部导航条分类点击无效的问题；增加文章无更多的显示</p>
      </div>
      <div class="up_wrap">
        <h4 class="up_time">2019-04-15</h4>
        <p class="up_text">- 文章card仿知乎，并增加说说Card、图片Card、加密文章Card</p>
        <p class="up_text">- 去掉todo页并合并到更新日志页</p>
        <p class="up_text">- 修复关于我页面的bugs</p>
      </div>
      <div class="up_wrap">
        <h4 class="up_time">2019-04-14</h4>
        <p class="up_text">- 重置首页样式，删除瀑布流布局</p>
        <p class="up_text">- 重置页面模板layout，更新布局为双栏布局，左边栏下滑时浮动布局</p>
      </div>
    </section>
    <section class='todo'>
      <h3>待做清单</h3>
      <p>前端</p>
      <div class="todo_item complete">重置首页样式</div>
      <div class="todo_item complete">重置文章详情页</div>
      <div class="todo_item">修复音乐切换页面Bug</div>
      <div class="todo_item complete">文章详情页接口对接</div>
      <div class="todo_item">完成极简页</div>
      <div class="todo_item">完成文章评论功能</div>
      <div class="todo_item">新增用户留言功能</div>
      <div class="todo_item complete">给每个页面和标签增加icon</div>
      <div class="todo_item">文章的形式：置顶、普通博文、说说、相片模式、电影模式(类似于B站的)</div>
      <div class="todo_item">Ipad端和移动端的适配(移动端打算再做一套)</div>
      <div class="todo_item">首页新增下一页功能</div>
      <div class="todo_item complete">首页文章增加类似知乎赞同功能</div>
      <p>后端</p>
      <div class="todo_item complete">废除原先的后台模板 新起后台项目 保留接口代码</div>
      <div class="todo_item">增加管理员登录功能</div>
      <div class="todo_item">增加管理员资料查看修改功能</div>
      <div class="todo_item">增加管理员对所有文章评论功能查看、删除功能</div>
      <div class="todo_item">增加文章统计接口并在后台进行排序</div>
      <div class="todo_item">增加友链接口(crud)</div>
      <div class="todo_item">部署一套后端代码到服务器上</div>
      <h3>目前不明确需求清单</h3>
      <p>迷茫中</p>
      <div class="todo_item">想一个有趣的主题名</div>
      <div class="todo_item complete">是否需要做多用户(ps. 不需要)</div>
      <div class="todo_item">评论功能是才用类wordpress那种还是多用户注册那种</div>
      <div class="todo_item complete">是否要备案呢....有点想买国外的服务器 国内事儿太多(ps.不备案)</div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "custom",
  data() {
    return {
      userInfo: ""
    };
  },
  async asyncData({ app, route }) {},
  methods: {},
  mounted() {}
};
</script>
<style src='~/assets/css/index.less' lang="less"></style>