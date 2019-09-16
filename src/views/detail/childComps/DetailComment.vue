<template>
  <div id='comment'>
    <div>
      <div class="row1">
        <div>评价<span v-if="!comment.data">暂无评价</span></div>
        <div>
        </div>
        <div><span class="">更多</span></div>
      </div>
      <div class="row2">
        <span v-for="(item, index) in comment.hotCommentTag"
              :key="index"
              class='tag'>{{item.name}}({{item.count}})</span>
      </div>
      <div class="row3"
           v-if="comment.data">
        <div v-for="(item, index) in comment.data.slice(0,2)"
             :key="index">
          <div class='user'>
            <img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png"
                 alt="">
            <span>{{item.nickname}}</span>
            <div></div>
            <div class="time">{{item.creationTime}}</div>
          </div>
          <div class="content">
            <p>{{item.content}}</p>
            <div v-if="item.images">
              <img :src="i.imgUrl"
                   alt=""
                   v-for="(i, ind) in item.images"
                   :key="ind">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail_gap"></div>
  </div>
</template>

<script>

export default {
  name: 'DetailComment',
  props: ['comment'],
  data () {
    return {

    }
  }
}

</script>
<style  scoped>
#comment > div:first-child {
  padding: 10px;
}
.row1 {
  display: flex;
  /* min-height: 45px; */
  border-bottom: 1px solid #ddd;
}
.row1 > div {
  font-size: 16px;
  color: #333;
  padding: 10px 0;
}
.row1 > div:nth-child(2) {
  flex: 1;
}
.row1 span {
  margin-right: 10px;
}

.row2 {
  margin-top: 15px;
}
.row2 .tag {
  display: inline-block;
  /* flex-wrap: wrap; */
  padding: 0 10px;
  height: 25px;
  border-radius: 3px;
  background: #fdf0f0;
  margin: 0 10px 10px 0;
  line-height: 25px;
  font-size: 10px;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
}

.row3 {
  margin-top: 10px;
}
.user {
  display: flex;
}
.user span {
  margin-left: 10px;
  display: inline-block;
  color: #333;
  max-width: 8.2em;
  vertical-align: middle;
  font-size: 14px;
}
.user > img {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  vertical-align: middle;
  border: 0 none;
}
.user div:nth-child(3) {
  flex: 1;
}
.time {
  margin-right: -63px;
  color: #999;
  font-size: 14px;
}
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #666;
  font-size: 14px;
}

.content img {
  margin-right: 10px;
}

.detail_gap {
  padding-top: 10px;
  background: #e8e8ed;
  margin: -1px 0;
  position: relative;
  z-index: 2;
}
</style>
