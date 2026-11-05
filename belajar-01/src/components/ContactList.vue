<template>
    <div>
        <h1>Preview</h1>
        <div>
            <p>Name : {{name }}</p>
            <p>Email : {{email }}</p>
            <p>Age : {{age }}</p>
            <p>Type : {{type }}</p>
            <p>Complain : {{complain }}</p>
            <p>Message : {{message }}</p>
        </div>
    </div>
</template>

<script setup>

const name = defineModel("name",{
    type:String
})
const email = defineModel("email",{
    type:String
})
const age = defineModel("age",{
    type:Number
})
const type = defineModel("type",{
    type:String
})
const complain = defineModel("complain",{
    type:Boolean
})
const message = defineModel("message",{
    type:String
})


</script>

<style scoped>
</style>