export const delay = async (timer: number = 1000) => {
    await new Promise(res => setTimeout(res, timer))
}