export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory = useLocalStorage('history', []);
  const toPath = to.path as never
  navigationHistory.value.push(toPath);
})
