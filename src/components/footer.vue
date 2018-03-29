<template lang="html">
  <footer class="footer">
    <router-link to="/" class="nav-links">Home</router-link>|
    <router-link to="/archives" class="nav-links">Archives</router-link>|
    <router-link to="/about" class="nav-links">About</router-link> 
    <div>written by DORARO</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    width: 100%;
    font-size: 90%;
    height: 60px;
    padding: 20px 0 5px;
    text-align: center;
    background: #404040;
    color: #A8AA94;
    margin: 0;
    padding-bottom: 20px;
    p {
        line-height: 1.7em;
        padding: 0 0 10px;
        margin: 3px 0;
        line-height: 1.7em;
        display: block;

    }
    a {
        color: #A8AA94;
        text-decoration: none;
        &:hover {
            text-decoration: none;
            outline: none;
        }
    }
}
</style>
