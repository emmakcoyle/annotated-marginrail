import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const MarginRail: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (!fileData.frontmatter?.type) return null
    const notes = fileData.frontmatter?.marginnotes as string[] | undefined
    if (!Array.isArray(notes) || notes.length === 0) return null

    return (
      <div class="margin-rail">
        {notes.map((n, i) => {
          const paragraphs = String(n).trim().split(/\n\s*\n/)
          return (
            <div class="margin-scribble" key={i}>
              {paragraphs.map((p, pi) => (
                <p key={pi}>{p.trim()}</p>
              ))}
            </div>
          )
        })}
      </div>
    )
  }
  return MarginRail
}) satisfies QuartzComponentConstructor