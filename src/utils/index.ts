export function prefixBasePath(path: `/${string}`) {
  const hasBasePath = process.env.NEXT_PUBLIC_BASEPATH || "";
  return `${hasBasePath}${path}`;
}