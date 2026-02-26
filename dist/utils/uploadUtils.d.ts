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
export declare function buildUploadUrl(sviva: string, system: string, uploadMethod?: string): string;
