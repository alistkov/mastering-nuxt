<script setup lang="ts">
  const error = useError();

  const handleError = () => {
    clearError({
      redirect:
        '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
    });
  };
</script>

<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Dang</h1>
      <p>Something went wrong!</p>
      <p>
        <strong>
          {{ error.message }}
        </strong>
      </p>
      <p>
        Go to the
        <a class="hover:cursor-pointer" @click="handleError">first lesson</a>
      </p>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
