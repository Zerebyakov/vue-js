<template>
    <div>
        <MyButton @click="clickHandler" class="button" name="zoy"/>
    </div>
</template>

<script setup>
import MyButton from './MyButton.vue';


function clickHandler(){
    alert("You Click Me!");
    setTimeout(() => {
        alert("Uwuu");
    }, 1000);
}

</script>

<style scoped>

.button {
    display: inline-flex;
    justify-content: center;
    padding: 1rem;
}

.button :deep(button) {
    appearance: none;
    border: 0;
    border-radius: 0.75rem;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    box-shadow: 0 8px 18px rgb(79 70 229 / 28%);
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-weight: 650;
    transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.button :deep(button:hover) {
    background: linear-gradient(135deg, #6d28d9, #4338ca);
    box-shadow: 0 11px 22px rgb(79 70 229 / 35%);
    transform: translateY(-2px);
}

.button :deep(button:active) {
    box-shadow: 0 4px 10px rgb(79 70 229 / 25%);
    transform: translateY(0);
}

.button :deep(button:focus-visible) {
    outline: 3px solid #a78bfa;
    outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
    .button :deep(button) {
        transition: none;
    }
}


</style>