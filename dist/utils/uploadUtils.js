function $(n, e, r) {
  const s = n.replace(/^\/|\/$/g, "").trim(), i = e.replace(/^\/|\/$/g, "").trim(), t = r == null ? void 0 : r.replace(/^\/|\/$/g, "").trim(), c = `https://${s}.company.com/sharepoint/${i}/upload`;
  return t ? `${c}/${t}` : c;
}
export {
  $ as buildUploadUrl
};
