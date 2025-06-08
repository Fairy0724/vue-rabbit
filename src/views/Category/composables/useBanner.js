//封装banner数据

import { getBannerAPI } from "@/apis/home";
import { ref , onMounted } from "vue";
export function useBanner() {
  //获取banner
const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerAPI({
    distributionSite: "2",
  });
  bannerList.value = res.result;
  };
  // 调用
onMounted(() => {
  getBanner();
});
  return {
    bannerList
  }
}
