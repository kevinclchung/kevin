export function debounce(method: any, delay: number) {
  clearTimeout(method._tId)
  method._tId = setTimeout(function () {
    method()
  }, delay)
}
