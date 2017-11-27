<template>
  <div class="footer">
      <div class="footer-content-box">
        <p class="footer-top">北京传智播客教育科技有限公司  地址：北京市昌平区西三旗建材城西路金燕龙办公楼一层   邮编：100096   电话：010-82935150/60/70</p>
        <p>Copyright @ 2016 <!--博学谷--> All Rights Reserved 京ICP备08001421号 京公网安备110108007702
        <!-- <a href="http://www.cnzz.com/stat/website.php?web_id=1264517564" target="_blank" title="站长统计">
            <img src="http://icon.cnzz.com/img/pic1.gif" vspace="0" hspace="0" border="0">
        </a> -->
        </p>
        <p class="footer-logo"></p>
          
      </div>
  </div>
</template>

<style lang="stylus" scoped>
    @import '../style/vars.styl';
    .footer{
        height: 220px;
        background-image: url(../assets/img/sy_footer_bj.png);
        .footer-content-box{
            width: $limit-width;
            margin: auto;
            text-align: center;
            color: #bbb;
            font-size: 14px;
            padding-top: 46px;
            .footer-top{
                margin: 20px 0 24px 0;
            }
        }
        .footer-logo{
            background: url(../assets/img/sy_LOGO.png) no-repeat;;
            height: 36px;
        }
    }
</style>
