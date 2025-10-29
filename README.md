# vue-rabbit 在线商城系统

vue-rabbit是一款基于Vue 3生态开发的在线商城前端项目，专注于实现完整的电商购物流程（商品浏览、详情查看、购物车管理、订单结算、用户中心等），适合学习Vue 3全家桶实战应用及电商业务逻辑实现的实践项目。

## 学习目的
1. 掌握美妆电商核心业务流程设计（商品展示、购物车交互、订单系统、用户信息管理）
2. 学会Vue 3生态系统的综合应用（Composition API、Pinia状态管理、Vue Router路由控制）
3. 理解前端数据模拟与交互（API 接口设计、请求封装、状态同步）
4. 掌握现代前端工程化实践（Vite 构建、组件封装、样式模块化、状态持久化）

## 核心技术
- 开发语言：JavaScript
- 前端技术：Vue 3
- 构建工具：Vite
- 状态管理：Pinia
- 路由管理：Vue Router
- UI组件库：Element Plus
- HTTP客户端：Axios
- 样式方案：SCSS（模块化样式）
- 其他工具：
  - 图片懒加载：自定义指令
  - 代码规范：ESLint
  - 本地存储：pinia-persist（状态持久化）


## 功能模块

### 1. 普通用户功能
- 账号管理：登录（账号密码验证，支持预设测试账号）、个人信息查看（头像、手机号、邮箱）
- 商品操作：浏览商品列表、查看商品详情（名称、价格、规格、库存、详情描述）、按分类筛选商品
- 购物车：添加商品（关联商品ID与用户ID）、修改商品数量、查看购物车列表
- 订单管理：提交订单（关联收货地址）、查看个人订单列表、查看订单详情（商品、价格、状态）
- 收货地址：查看默认地址、管理地址列表（添加、修改、删除地址信息）
- 商品收藏：收藏商品、查看收藏列表

### 1. 商品模块
- 商品展示：首页商品列表、分类商品筛选、商品卡片展示（包含图片、名称、价格、描述）
- 商品详情：商品图片预览、规格选择（SKU）、数量调整、商品属性展示、加入购物车功能
### 2. 购物车模块
- 购物车管理：添加商品、修改商品数量、删除商品、全选/单选功能
- 购物车计算：自动计算商品总价、已选商品数量、合计金额
- 状态同步：登录/未登录状态下的购物车数据同步（本地存储与服务器同步）
### 3. 订单模块
- 订单创建：从购物车选择商品、确认收货地址、提交订单
- 订单管理：查看订单列表、订单状态展示（待付款、待发货、待收货等）、订单详情查看
- 支付流程：模拟支付跳转、支付结果回调处理
### 4. 用户模块
- 账号管理：登录功能、个人信息展示（头像、账号）
- 地址管理：默认地址展示、地址切换功能
- 收藏管理：查看收藏商品列表
### 5. 公共模块
- 导航栏：分类导航、购物车入口、用户中心入口
- 面包屑：页面导航路径展示
- 分页：订单列表分页功能

## 成品展示
- 商城首页：展示商品列表、分类导航及推荐商品
![商城首页](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/mainPage.png)
- 购物车页面：展示已选商品、支持数量修改和删除操作
![购物车页面](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/cartList.png)
- 商品详情页：包含商品图片预览、规格选择、加入购物车功能
![商品详情页](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/productDetail.png)
- 个人中心：展示用户信息、收藏商品及订单入口
![个人中心](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/member.png)
- 登录页：
![登录页](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/login.png)
- 分类页：
![分类页](https://github.com/Fairy0724/vue-rabbit/blob/master/src/images/screenshot/category.png)

## 快速开始

### 0. 克隆项目
```sh
# 克隆远程仓库到本地
git clone [仓库地址]

# 进入项目目录
cd onlineshop
```
### 1. 启动前端开发服务器
```sh
npm run dev
```
