const slugify = (name: string): string => {
  return name.toLowerCase().replaceAll(' ', '-');
}

export default slugify;
