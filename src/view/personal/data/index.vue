<template>
  <div>
      <el-tabs active-name="first">
            <el-tab-pane label="个人资料" name="first">
                <form>
                    <div class="form-item">
                        
                    </div>
                </form>
            </el-tab-pane>
       </el-tabs> 
  </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                nick_name: '',
                login_name: '',
                email: '',
                qq: ''
            }
        };
    }
};
</script>
