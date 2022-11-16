<template>
    <form class="row gx-3 align-items-center m-0" @submit.prevent="">
        <div class="col-auto">
            <label class="visually-hidden" for="Search">Name</label>
            <input type="text" class="form-control" id="Search" placeholder="Search">
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-secondary">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchComponent'
}
</script>

<style lang="scss" scoped>

</style>