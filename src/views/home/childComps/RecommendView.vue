<template>
  <div id='recommend'>
    <div class='recommend'>
      <div v-for="(item, index) in recommends[0]"
           :key="index">
        <a href="#">
          <img :src="item.img"
               alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecommendView',
  props: ['recommends'],
  data () {
    return {

    }
  },
  mounted () {
    // console.log('recomends');
    // console.log(this.recommends);
  },
}

</script>
<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
}
.recommend > div {
  width: 20%;
  text-align: center;
}
.recommend img {
  width: 40px;
  height: 40px;
}
.recommend a div {
  font-size: 0.6rem;
  color: #666;
}
</style>
