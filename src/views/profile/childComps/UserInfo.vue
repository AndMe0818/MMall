<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <div class="user-icon left">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="login-info left">
        <div name="user-nickname">
          <div>登录/注册</div>
        </div>
        <div class="phone">
          <span><img src="~assets/img/profile/phone.svg" alt="" /></span>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="next right"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
#user-info {
  background-color: var( --color-active-text);
  border-top: 1px dotted #ccc;
  padding: 15px;
  margin-top: -5px;
}

#user-info .user-icon {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  /* background-color: #fff; */
}
.user-icon img {
  width: 100%;
  height: 100%;
}

.left {
  float: left;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;
  font-size: 13px;
  margin-top: 9px;
  margin-left: 15px;
  font-weight: 300;
}

#user-info .login-info .phone img {
  position: absolute;
  left: -21px;
  top: -5px;
  width: 26px;
  height: 27px;
}
.next {
  margin-top: 27px;
  width: 7px;
  height: 7px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}
</style>