main()

async function main () {
  const a = 10
  a = 11
  console.log(a)
  
  await sleep(60 * 1000)
  console.log("ok")
}

async function sleep(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, time)
  })
}
