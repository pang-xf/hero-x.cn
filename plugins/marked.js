import marked from 'marked'
import Hljs from './highlight'
import buildTagLink from '~/utils/article-tag-releted-parse'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return Hljs.highlightAuto(code).value
  }
})

const renderer = new marked.Renderer()

// 段落解析
// const paragraphParse = text => `<p>${text}</p>`


export default (content, tags, parseHtml = false) => {
  // 所有非链接的关键字进行内链处理
  if (tags && tags.length) {
    renderer.text = text => buildTagLink(text, tags)
  } else {
    renderer.text = text => text
  }

  // 如果是解析评论，则不解析html内容
  marked.setOptions({ sanitize: !parseHtml })

  if (typeof content != 'string') {
    return ''
  }

  // 返回解析内容
  return marked(content, { renderer })
}
