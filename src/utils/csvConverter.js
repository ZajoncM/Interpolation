const csvConverter = data => {
  const row = data.split('\n');

  const res = row.map((item, id) => {
    const currentItem = item.split(',');
    const x = currentItem[0];
    const y = currentItem[1];
    return { x, y, id };
  });

  return res;
};

export default csvConverter;
