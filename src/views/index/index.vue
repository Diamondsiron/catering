<template>
  <div class="container">
    <div class="bar">
      <div class="bar-banner">
         <Carousel v-model="value1" loop>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="static/1.jpg" alt="">
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <div class="bar-index-quick-nav">
          <div class="col">
            排餐
          </div>
          <div class="col">
           同楼拼餐
          </div>
          <div class="col">
            邀请好友
          </div>
          <div class="col">
            充值
          </div>
      </div>
    </div>
    <div class="img-box">

    </div>
    <Row>
        <Col span="12">图片一</Col>
        <Col span="12">图片二</Col>
    </Row>
    <div>
      <h3>线体健身</h3>
        <Row>
            <Col span="8">图片一</Col>
            <Col span="8">图片二</Col>
            <Col span="8">图片三</Col>
        </Row>
    </div>
    <div>
      <h3>清新沙拉</h3>
        <Row>
            <Col span="8">图片一</Col>
            <Col span="8">图片二</Col>
            <Col span="8">图片三</Col>
        </Row>
    </div>
    <div>
      <h3>母婴营养</h3>
        <Row>
            <Col span="8">图片一</Col>
            <Col span="8">图片二</Col>
            <Col span="8">图片三</Col>
        </Row>
    </div>
    <div>
      <h3>美味</h3>
        <Row>
            <Col span="8">图片一</Col>
            <Col span="8">图片二</Col>
            <Col span="8">图片三</Col>
        </Row>
    </div>
    <Tabs></Tabs>
    
  
  </div>
</template>
<script>
export default{
  name:'index',
  data () {
            return {
                value1: 0
            }
        },
  components:{
   'Tabs': () => import('@/components/common/tabs.vue'),
  }

}
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: block;
}
.demo-carousel{
  background-color: red;
  height: 200px;
}
.bar-index-quick-nav{
  display: flex;
  padding: 15px;
}
.col{
  flex: 1;
}
.img-box{
      padding: 0 10px;
    background: none;
    height: 30px;
}
footer{
 position: fixed;
 display: flex;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background-color: yellow
}

</style>

