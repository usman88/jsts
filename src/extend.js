export default function (target, source) {
  Object.keys(source).forEach(key => target[key] = source[key])
}
