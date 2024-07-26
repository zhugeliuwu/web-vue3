<template>
    <div>
        <!-- 搜索内容 -->
    </div>
    <div>
        <transition name="content-header">
            <div class="content-header" v-show="isHeader">
                <el-menu router :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect"
                    style="width: 100%;border: none" class="menu">
                    <el-tooltip class="box-item" effect="light" content="点击回到首页" placement="bottom">
                        <el-link href="/">
                            <!--              <el-image class="logo" src="https://element-plus.org/images/element-plus-logo.svg"/>-->
                            <div style="font-size: 1rem;font-weight: bold;margin-left: 0.2rem">
                                <span>silenceJay</span>
                            </div>
                        </el-link>
                    </el-tooltip>

                    <el-menu-item index="/" class="index">
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        首页
                    </el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <Files />
                            </el-icon>
                            归档
                        </template>
                        <el-menu-item index="/timeline">
                            <el-icon>
                                <Clock />
                            </el-icon>
                            时间轴
                        </el-menu-item>
                        <el-menu-item index="/category">
                            <el-icon>
                                <DocumentCopy />
                            </el-icon>
                            分类
                        </el-menu-item>
                        <el-menu-item index="/tags">
                            <el-icon>
                                <PriceTag />
                            </el-icon>
                            标签
                        </el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <IceCreamRound />
                            </el-icon>
                            其他
                        </template>
                        <el-menu-item index="/tree-hole">
                            <el-icon>
                                <Fries />
                            </el-icon>
                            树洞
                        </el-menu-item>
                        <el-menu-item index="/message">
                            <el-icon>
                                <Postcard />
                            </el-icon>
                            留言版
                        </el-menu-item>
                        <el-menu-item index="/chat-gpt">
                            <el-icon>
                                <Bowl />
                            </el-icon>
                            ChatGPT
                        </el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="/link">
                        <el-icon>
                            <Link />
                        </el-icon>
                        友链
                    </el-menu-item>
                    <el-menu-item index="/music">
                        <el-icon>
                            <Headset />
                        </el-icon>
                        音乐
                    </el-menu-item>
                    <el-menu-item index="/about">
                        <el-icon>
                            <UserFilled />
                        </el-icon>
                        关于
                    </el-menu-item>
                    <div class="flex-grow"></div>
                    <!-- 日夜切换 -->
                    <!-- <div style="margin-right: 4.5rem;margin-top: -0.2rem">
                        <toggle-button @change="changeToggle" size="1"></toggle-button>
                    </div> -->
                    <!-- 搜索按钮 -->
                    <!-- <div class="search" @click="dialogVisible = true">
                        <SvgIcon name="search" width="30" height="30" color="#409EFF" class="icon" />
                    </div> -->
                    <!-- <div class="user-info">
                        <div>
                            <el-tooltip class="box-item" effect="light" content="点击去登录" placement="right">
                                <el-avatar style="margin-right: 3rem">登录</el-avatar>
                            </el-tooltip>
                        </div>
                        <div style="display: flex">
                            <div class="profile">
                                <div style="font-size: 15px;font-weight: bold;color: black">用户名称</div>
                                <div style="font-size: 14px;color: #363636;margin-top: 3px">
                                    email
                                </div>
                                <div style="font-size: 14px;color: #363636;margin-top: 3px">
                                    Github登录
                                </div>
                            </div>
                            <el-dropdown>
                                <el-avatar style="margin-right: 3rem">头像地址</el-avatar>
                                <template #dropdown>
                                    <el-dropdown-item @click="router.push('/setting')">
                                        <template #default>
                                            <el-icon>
                                                <Setting />
                                            </el-icon>
                                            个人设置
                                        </template>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <template #default>
                                            <el-icon>
                                                <Promotion />
                                            </el-icon>
                                            退出登录
                                        </template>
                                    </el-dropdown-item>
                                </template>
                            </el-dropdown>
                        </div>
                    </div> -->
                </el-menu>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import DayNightToggleButton from "@/components/DayNightToggle"

const isHeader = ref(true)
const activeIndex = ref('1')


onMounted(async () => {
    customElements.define("toggle-button", DayNightToggleButton);
})
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
// 监听滚轮事件
window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        // 向下滚动
        // console.log('向下滚动');
        isHeader.value = false
    } else if (event.deltaY < 0) {
        // 向上滚动
        // console.log('向上滚动');
        isHeader.value = true
    }
});



</script>

<style lang="less" scoped></style>