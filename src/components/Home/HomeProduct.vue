<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getGoodsProductApi } from '@/api/goods'
import type { ProductMainCategory } from '@/types/goods'

const product = ref<ProductMainCategory[] | null>([])

onMounted(async () => {
  const res = await getGoodsProductApi()
  // console.log(res)
  product.value = res.data.result
  // console.log(product.value)
})
</script>

<template>
  <div class="home-product">
    <HomePanel v-for="item in product" :key="item.id" :cate="item"></HomePanel>
  </div>
</template>

<style scoped lang="scss">
.home-product {
  background: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: column; // 多个 HomePanel 纵向堆叠
  align-items: center; // 让每个 HomePanel 水平居中
  width: 100%;
  position: relative;
  background-color: #fff;
  .sub {
    margin-bottom: 2px;
    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }
}
</style>
