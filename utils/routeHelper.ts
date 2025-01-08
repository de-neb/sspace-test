export default {
  pathToArray(path: string) {
    const segments = path.split("/").filter(Boolean);
    let currentPath = "";

    return segments.map((segment: string) => {
      currentPath += `/${segment}`;

      return {
        name: segment,
        path: currentPath,
      };
    });
  },
};
