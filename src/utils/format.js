// 格式化商品规格/属性为字符串，兼容多种后端/前端字段
export function formatAttrs(item) {
  if (!item) return ''
  // 优先使用统一字段 attrsText
  if (item.attrsText) return item.attrsText
  // 兼容旧字段 specsText
  if (item.specsText) return item.specsText
  // 若后端返回的是 specs 数组，尝试拼接 valueName/value
  if (item.specs && Array.isArray(item.specs)) {
    return item.specs.map(s => s?.valueName || s?.value || String(s)).join(' ')
  }
  // 兼容可能的 attrs 数组
  if (item.attrs && Array.isArray(item.attrs)) {
    return item.attrs.map(a => a?.valueName || a?.value || String(a)).join(' ')
  }
  return ''
}
