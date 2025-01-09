export function generatePath(file, folders, subfolders) {
  let path = file.name; // Start with the file name

  const subfolder = subfolders.find((s) => s.id === file.folder_id);
  if (subfolder) {
    path = `${subfolder.name} => ${path}`;
    const parentFolder = folders.find((f) => f.id === subfolder.parent_id);
    if (parentFolder) {
      path = `${parentFolder.name} => ${path}`;
    }
  }

  return path;
}
