<template>
  <div class="content">
    <!-- 顶部轮播 -->
    <van-swipe
      :autoplay="3000"
      lazy-render
      class="swipe"
      :show-indicators="false"
    >
      <van-swipe-item v-for="(image, index) in data.images" :key="index">
        <img :src="image.carouselImg" @click="navigetImage(index)" />
        <div class="introduce">{{ image.carouselName }}</div>
      </van-swipe-item>
    </van-swipe>
    <!-- 查看更多办事处 -->
    <!-- 中间banner -->
    <div class="main">
      <div
        class="main_item"
        v-for="(item, index) in data.litterArea"
        :key="index"
      >
        <div class="main_title" @click="item.show = !item.show">
          <img
            v-show="item.show"
            class="img1"
            src="../../assets/08.png"
            alt=""
          />
          <img
            v-show="!item.show"
            class="img2"
            src="../../assets/09.png"
            alt=""
          />
          <div class="main_areaName">
            {{ item.areaName }}
          </div>
        </div>

        <!-- 社区下属的办事处 -->
        <div class="parent_office" v-show="item.show">
          <div
            class="office"
            v-for="(office, number) in item.areaList"
            :key="number"
            @click="navigetItem(office)"
          >
            <img :src="office.community_img" alt="" />
            <div class="office_introduce">
              {{ office.community_name }}
            </div>
          </div>
        </div>
      </div>
      <div class="moreOffice" @click="moreClick" v-show="data.moreOfficeShow">
        点击查看更多办事处
      </div>
    </div>
    <!-- 下方新闻 -->
    <div class="foot">
      <div class="foot_title">办事处新闻</div>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          class="foot_news"
          v-for="(item, index) in data.list"
          :key="index"
          @click="navigetNews(index)"
        >
          <div class="news_text">
            <div class="news_title">{{ item.newsTitle }}</div>
            <text class="from"> 来自： </text>
            <text class="fromName">{{ item.communityName }}</text>
          </div>
          <div class="news_img"><img :src="item.newsImg" alt="" /></div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import homepagedata from "@/api/office/homepagedata";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";

const loading = ref(false);
const finished = ref(false);
const data = reactive({
  moreOfficeShow: true,
  litterArea: [],
  page_index: 0,
  list: [],
  images: [],
  area: [],
});

//点击查看更多
function moreClick() {
  data.litterArea = data.area;
  data.moreOfficeShow = false;
}

//点击图片跳转相应链接
function navigetImage(index) {
  window.open(data.images[index].action, "_self");
}
//点击跳转中间社区
function navigetItem(e) {
  window.open(
    `https://news.dahebao.cn/index.html?communityId=${e.community_id}`
  );
}
//点击新闻跳转相应链接
function navigetNews(index) {
  window.open(data.list[index].newsUrl);
}

//获取新闻
function getNews() {
  axios({
    url: `https://news.dahebao.cn/dahe/apphomepage/homepagenews`,
    method: "POST",
    params: {
      sign: "637586292ebf2c5fabab863734fc6a12",
      data: JSON.stringify({
        type: 1000,
        page_index: data.page_index,
        page_count: 10,
      }),
    },
  }).then((res) => {
    if (res.state == 1) {
      data.list = [...data.list, ...res.data];
    } else {
      finished.value = true;
    }
  });
}

//获取main数据
function getData() {
  homepagedata()
    .then((res) => {
      data.litterArea.push(
        res.data.area[0],
        res.data.area[1],
        res.data.area[2]
      );
      data.area = res.data.area;
      data.images = res.data.carousel;
      for (let i of data.area) {
        i.show = false;
        for (let j of i.areaList) {
          if (j.community_name.indexOf("办事处") != -1) {
            j.community_name = j.community_name.replace("办事处", "");
          }
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
//刷新列表
function onLoad() {
  setTimeout(() => {
    getNews();
    data.page_index = data.page_index + 1;
    // 加载状态结束
    loading.value = false;
  }, 1000);
}

//初始化获取数据
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.content {
  background: white;
  width: 100vw;
  min-height: 100vh;
  .swipe {
    width: 100%;
    height: 460px;
    img {
      width: 100%;
      height: 100%;
    }
    .introduce {
      color: white;
      font-size: 42px;
      font-weight: 700;
      position: absolute;
      top: 60%;
      left: 10%;
    }
  }
  .main {
    background: white;

    .main_item {
      .main_title {
        margin: 40px 20px;

        img {
          width: 25px;
          height: 25px;
        }
        .main_areaName {
          margin-left: 30px;
          display: inline-block;
          font-size: 30px;
          font-weight: 400;
        }
      }
      .parent_office {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .office {
          background: #f5f5f5;
          border-radius: 10px;
          margin-left: 30px;
          margin-bottom: 30px;
          width: 150px;
          height: 150px;
          text-align: center;
          line-height: 50px;
          padding-top: 25px;
          box-sizing: border-box;
          font-size: 25px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
    .moreOffice {
      margin-left: 220px;
      color: red;
      font-weight: 500;
      font-size: 30px;
    }
  }
  .foot {
    .foot_title {
      height: 80px;
      line-height: 80px;
      margin: 30px 30px 0 30px;
      border-bottom: 1px solid #f5f5f5;
      font-size: 35px;
      font-weight: 500;
    }
    .foot_news {
      width: 100vw;
      height: 200px;
      .news_text {
        vertical-align: top;
        font-size: 30px;
        font-weight: 500;
        width: 460px;
        display: inline-block;
        .news_title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .from {
          font-size: 20px;
          font-weight: 400;
          color: #aaa;
        }
        .fromName {
          font-weight: 400;
          font-size: 20px;
          color: red;
        }
      }
      .news_img {
        margin-left: 20px;
        display: inline-block;
        height: 160px;
        width: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
