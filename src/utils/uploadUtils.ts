/**
 * Builds the SharePoint upload endpoint URL.
 *
 * Pattern:
 *   https://{sviva}.company.com/sharepoint/{system}/upload[/{uploadMethod}]
 *
 * @param sviva        - Environment identifier (dev / staging / prod)
 * @param system       - SharePoint site name
 * @param uploadMethod - Optional override path segment appended after /upload
 * @returns            - Fully qualified upload URL (no trailing slash)
 */
export function buildUploadUrl(
  sviva: string,
  system: string,
  uploadMethod?: string
): string {
  // Normalise inputs — strip surrounding slashes so we never get double slashes
  const env    = sviva.replace(/^\/|\/$/g, '').trim()
  const site   = system.replace(/^\/|\/$/g, '').trim()
  const method = uploadMethod?.replace(/^\/|\/$/g, '').trim()

  const base = `https://${env}.company.com/sharepoint/${site}/upload`

  return method ? `${base}/${method}` : base
}
