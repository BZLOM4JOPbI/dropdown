
export default function throttle(callback: CallableFunction, timeout: number) {
    let timer: number | undefined; 
  
    return function perform(...args: unknown[]) {
      if (timer) return
  
      timer = setTimeout(() => {
        callback(...args)
  
        // По окончании очищаем таймер:
        clearTimeout(timer)
        timer = undefined
      }, timeout)
    }
  }
  