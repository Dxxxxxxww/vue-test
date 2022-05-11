<template>
    <div class="container">
        <van-button @click="showUp = true">show</van-button>
        <van-button @click="showChildren">show</van-button>
        <div v-show="showUp">
            <van-uploader
                v-model="fileList"
                multiple
                accept="image/png,image/jpeg,image/jpg"
                :max-count="5"
                :max-size="400 * 1024"
                :before-read="beforeRead"
                @oversize="onOversize"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "TestUpload",
    data() {
        return {
            fileList: [],
            showUp: false
        };
    },
    computed: {
        sayHi() {
            const len = this.fileList.length;
            console.log("hi~~~~");
            return len;
        }
    },
    methods: {
        goBack() {
            this.isShowUpload = false;
            this.$emit("");
        },
        onOversize() {
            // Toast("文件大小不能超过 400kb");
        },
        beforeRead(file) {
            const str = "image/png,image/jpg,image/jpeg";
            if (str.indexOf(file.type) < 0) {
                // Toast("请上传 jpeg/jpg/png 格式图片");
                return false;
            }
            return true;
        }
    }
};
</script>

<style scoped>
.container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
</style>
