<template>
  <div>
    <div class="arrange-header">
      <div>
        <p>你购买的套餐还剩余0</p>
        <span>详情</span>
      </div>
      <div>
        <table class="w100" border="0" >
           <tbody>
            <tr>
              <th>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              </th>
              <th>
                早餐
              </th>
              <th>
                午餐
              </th>
              <th>
                晚餐
              </th>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
    <div class="arrange-table">
      <table class="w100">
          <tbody>
            <tr>
              <td>
              0329
              </td>
              <td>
                已约满
              </td>
              <td>
                已约满
              </td>
              <td>
                已约满
              </td>
            </tr>
          </tbody>
      </table>

    </div>
    
  </div>
</template>
<script>
export default{
  
}
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrange-header{
  width: 100%;
  position: fixed;
    top: 0;
 
}
.arrange-table{
  width: 100%;
  margin-top: 80px;
}
.w100{
  width:100%
}
</style>