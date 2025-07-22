<script setup>
defineOptions({ name: 'CheckOut' })
import { getCheckoutInfoAPI } from '@/apis/checkout';
import { ref, onMounted } from 'vue';
const checkInfo = ref({})  // 订单对象
const curAddress = ref({})  // 默认地址
// 地址对象
const getCheckInfo = async () => {
  const res = await getCheckoutInfoAPI();
  checkInfo.value = res.result;
  // 适配默认地址
  const item = checkInfo.value?.userAddresses?.find(item => item.isDefault === 0)
  curAddress.value = item
}
onMounted(() => {
  getCheckInfo();
});
</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <div class="none" v-if="!curAddress">您需要先添加收货地址才可提交订单。</div>
              <ul v-else>
                <li><span>收<i />货<i />人：</span>{{ curAddress.receiver }}</li>
                <li><span>联系方式：</span>{{ curAddress.contact }}</li>
                <li><span>收货地址：</span>{{ curAddress.fullLocation }} {{ curAddress.address }}</li>
              </ul>
            </div>
            <div class="action">
              <el-button size="large" @click="toggleFlag = true">切换地址</el-button>
              <el-button size="large" @click="addFlag = true">添加地址</el-button>
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in checkInfo.goods" :key="i.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="i.picture" alt="">
                    <div class="right">
                      <p>{{ i.name }}</p>
                      <p>{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>¥{{ i.price }}</td>
                <td>{{ i.price }}</td>
                <td>¥{{ i.totalPrice }}</td>
                <td>¥{{ i.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
        <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color:#999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">{{ checkInfo.summary?.totalPayPrice.toFixed(2) }}</dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button type="primary" size="large">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- 切换地址 -->
  <!-- 添加地址 -->
</template>

<style scoped lang="scss">
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    >ul {
      flex: 1;
      padding: 20px;

      li {
        line-height: 30px;

        span {
          color: #999;
          margin-right: 5px;

          >i {
            width: 0.5em;
            display: inline-block;
            vertical-align: middle;
            content: '';
            border-left: 1px solid #e5e5e5;
            margin-left: 5px;
          }
        }
      }
    }
  }

  .action {
    padding: 0 20px;
  }
}

.goods {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th {
    text-align: left;
    color: #999;
    padding: 10px 0;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      text-align: right;
    }
  }

  td {
    padding: 10px 0;
    border-top: 1px solid #f5f5f5;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      text-align: right;
    }

    .info {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 10px;
      }

      .right {
        p {
          margin: 0;
          line-height: 1.2;

          &:first-child {
            color: #333;
            font-weight: bold;
          }

          &:last-child {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.my-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  background: #f5f5f5;
  color: #333;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  transition: background 0.3s;

  &.active {
    background: #409eff;
    color: #fff;
  }
}

.total {
  padding: 10px 0;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;

  dl {
    display: flex;
    justify-content: space-between;
    line-height: 30px;

    dt {
      color: #999;
    }

    dd {
      margin: 0;
      color: #333;
    }
  }

  .price {
    color: #e63946;
    font-weight: bold;
    font-size: 18px;
  }
}

.submit {
  margin-top: 20px;
  text-align: center;

  .el-button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
  }
}
</style>