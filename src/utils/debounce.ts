const debounce = (callback: CallableFunction, timeout: number) => {
    let timer: number | undefined
    return (...args: unknown[]) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, timeout)
    }
}

export default debounce