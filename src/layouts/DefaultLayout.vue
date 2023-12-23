<template>
    <div>
        <app-nav-bar />
        <app-side-bar />
        <div class="content-wrapper">
            <div class="container-fluid">
                <router-view />
            </div>
        </div>
        <app-footer />
        <control-side-bar />
        <app-side-bar-over-lay />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>