<template>
  <section  class="todo">
    <h3>待做清单</h3>
    <p>- 前端</p>
    <div class="todo_item complete">重置首页样式</div>
    <div class="todo_item complete">重置文章详情页</div>
    <div class="todo_item">修复音乐切换页面Bug</div>
    <div class="todo_item">文章详情页接口对接</div>
    <div class="todo_item">完成极简页</div>
    <div class="todo_item">完成文章评论功能</div>
    <div class="todo_item">新增用户留言功能</div>
    <div class="todo_item">给每个页面和标签增加icon</div>
    <div class="todo_item">文章的形式：置顶、普通博文、说说、相片模式、电影模式(类似于B站的)</div>
    <div class="todo_item">Ipad端和移动端的适配(移动端打算再做一套)</div>
    <div class="todo_item">首页新增下一页功能</div>
    <div class="todo_item">首页文章增加类似知乎赞同功能</div>
    <p>- 后端</p>
    <div class="todo_item">废除原先的后台模板 新起后台项目 保留接口代码</div>
    <div class="todo_item">增加管理员登录功能</div>
    <div class="todo_item">增加管理员资料查看修改功能</div>
    <div class="todo_item">增加管理员对所有文章评论功能查看、删除功能</div>
    <div class="todo_item">增加文章统计接口并在后台进行排序</div>
    <div class="todo_item">增加友链接口(crud)</div>
    <div class="todo_item">部署一套后端代码到服务器上</div>
    <h3>目前不明确需求清单</h3>
    <p>- 迷茫中</p>
    <div class="todo_item">想一个有趣的主题名</div>
    <div class="todo_item">是否需要做多用户</div>
    <div class="todo_item">评论功能是才用类wordpress那种还是多用户注册那种</div>
    <div class="todo_item">是否要备案呢....有点想买国外的服务器 国内事儿太多</div>
  </section>
</template>
<script>
export default {
  data () {
    return {
        userInfo:'',
    }
  },
  async asyncData ({app,route}) {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style src='~/assets/css/index.less' lang="less"></style>