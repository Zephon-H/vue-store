<template>
  <div class="back-top">
    <span class="iconfont icon-up"></span>
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  props: [''],
  data () {
    return {

    }
  }

}

</script>
<style scoped>
.back-top {
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  position: fixed;
  right: 10px;
  bottom: 80px;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.back-top span {
  font-size: 25px;
  color: #ccc;
}
</style>
