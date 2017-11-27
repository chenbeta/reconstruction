<template>
    <div>
        <header-box></header-box>  
        <router-view/>
        <footer-box></footer-box>
    </div>
</template>

<script>
import headerBox from './header';
import footerBox from './footer';

export default {
    components: {
        headerBox,
        footerBox
    }
};
</script>
