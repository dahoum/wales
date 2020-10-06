<template>
    <HelloWorld name="Rado" :data="arr"></HelloWorld>
</template>

<script>
import HelloWorld from "./HelloWorld";

export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            arr: [1, 2, 3]
        }
    }
}
</script>