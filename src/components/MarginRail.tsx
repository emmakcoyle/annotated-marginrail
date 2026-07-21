import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

const relocateScript = `
function relocateFootnotes() {
  const footnotes = document.querySelector(".markdown-preview-view .footnotes")
  const rail = document.querySelector(".margin-rail")
  if (footnotes && rail && !rail.contains(footnotes)) {
    rail.appendChild(footnotes)
  }
}
document.addEventListener("nav", relocateFootnotes)
document.addEventListener("render", relocateFootnotes)
`

export default (() => {
  const MarginRail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (!fileData.frontmatter?.type) return null
    return <div class="margin-rail"></div>
  }
  MarginRail.afterDOMLoaded = relocateScript
  return MarginRail
}) satisfies QuartzComponentConstructor