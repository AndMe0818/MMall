<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user" >
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
      <div class="info-images">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.comment-info {
  padding: 12px 10px;
  border-bottom: 5px solid #f2f5f8;
  color: #333;
}
.info-header {
  display: flex;
  justify-content: space-between;

  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  font-size: 15px;
}
.header-more {
  font-size: 13px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user span {
  font-size: 15px;
  margin-left: 8px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-detail {
  margin-top: 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 20px;
}
.info-images {
  margin-top: 10px;
}
.info-images img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>