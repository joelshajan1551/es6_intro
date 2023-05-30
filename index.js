function resolveafter3seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
}
// resolveafter3seconds().then((data) => {
//   console.log(data);
// });

async function getAsyncData() {
  const result = await resolveafter3seconds();
  console.log(result);
}
getAsyncData();
