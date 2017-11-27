<template>
    <div>
       <el-tabs active-name="first">
            <el-tab-pane label="我的消息" name="first">
                <p>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option label="全部" value=""></el-option>
                        <el-option label="已读" value="1"></el-option>
                        <el-option label="未读" value="0"></el-option>
                    </el-select>
                </p>
                <div>
                    <el-checkbox-group v-model="checkedCities" >
                        <div v-for="item in msgData.lists" :key="item.id" class="msg-item">
                            <el-checkbox :label="item.id" ></el-checkbox>
                            <span class="msg-type apply-msg" v-if="item.source_type == 5 && item.type == 6">申请消息</span>
                            <span class="msg-type" v-else>系统消息</span>
                            {{item.title}}
                            <span class="f-r">{{item.create_time}}</span>
                        </div>
                    </el-checkbox-group>
                </div>
                <div>
                    
                </div>
            </el-tab-pane>
       </el-tabs> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: '',
            queryParameter: {
                type: '',
                pageNumber: 1,
                pageSize: 10
            },
            msgData: {

            },
            checkedCities: []
        };
    },
    created () {
        this.getData();
    },
    methods: {
        getData () {
            this.http({url: 'bxg/user/msg', params: this.queryParameter})
                .then(res => {
                    if (res.success) {
                        this.msgData = res.resultObject;
                    }
                });
        }
    }
};
</script>
<style lang="stylus" scoped>
    .msg-item
        height :75px;
        line-height :75px;
        border-bottom: 1px solid #f0f0f0;
        color: #737373;
        .msg-type 
            padding :0 10px;
        .f-r
            color: #333;
        .apply-msg
            color: #36b774;
</style>
