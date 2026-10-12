// Prefixes local public/ paths with the deploy base (e.g. "/my-portfolio/" on GitHub Pages)
export const asset = (path) =>
  path.startsWith("http") ? path : import.meta.env.BASE_URL + path.replace(/^\//, "")
