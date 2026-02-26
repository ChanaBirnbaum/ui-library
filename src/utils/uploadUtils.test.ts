import { buildUploadUrl } from './uploadUtils'

describe('buildUploadUrl', () => {

  // ── Basic construction ────────────────────────────────────────────────────

  test('builds correct URL from sviva + system', () => {
    expect(buildUploadUrl('dev', 'my-site')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload'
    )
  })

  test('uses different environments correctly', () => {
    expect(buildUploadUrl('staging', 'hr-portal')).toBe(
      'https://staging.company.com/sharepoint/hr-portal/upload'
    )
    expect(buildUploadUrl('prod', 'finance')).toBe(
      'https://prod.company.com/sharepoint/finance/upload'
    )
  })

  // ── uploadMethod ──────────────────────────────────────────────────────────

  test('appends uploadMethod as extra path segment', () => {
    expect(buildUploadUrl('dev', 'my-site', 'custom-handler')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload/custom-handler'
    )
  })

  test('returns base URL when uploadMethod is undefined', () => {
    expect(buildUploadUrl('dev', 'my-site', undefined)).toBe(
      'https://dev.company.com/sharepoint/my-site/upload'
    )
  })

  test('returns base URL when uploadMethod is empty string', () => {
    expect(buildUploadUrl('dev', 'my-site', '')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload'
    )
  })

  // ── No double slashes ─────────────────────────────────────────────────────

  test('strips leading slash from system', () => {
    expect(buildUploadUrl('dev', '/my-site')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload'
    )
  })

  test('strips trailing slash from sviva', () => {
    expect(buildUploadUrl('dev/', 'my-site')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload'
    )
  })

  test('strips surrounding slashes from uploadMethod', () => {
    expect(buildUploadUrl('dev', 'my-site', '/custom-handler/')).toBe(
      'https://dev.company.com/sharepoint/my-site/upload/custom-handler'
    )
  })

  test('no double slash when both system and uploadMethod have slashes', () => {
    const url = buildUploadUrl('dev', '/my-site/', '/handler/')
    // https:// is valid — check no double slash in the path portion only
    const path = url.replace('https://', '')
    expect(path).not.toContain('//')
    expect(url).toBe(
      'https://dev.company.com/sharepoint/my-site/upload/handler'
    )
  })

  // ── Return type ───────────────────────────────────────────────────────────

  test('always returns a string', () => {
    expect(typeof buildUploadUrl('dev', 'site')).toBe('string')
  })

  test('result never ends with a slash', () => {
    expect(buildUploadUrl('dev', 'site')).not.toMatch(/\/$/)
    expect(buildUploadUrl('dev', 'site', 'method')).not.toMatch(/\/$/)
  })

})
