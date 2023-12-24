const getDataByCategory = (
  data: { [key: string]: any },
  category: string
): object[] => {
  const newData = data[category];

  return newData;
};

export default getDataByCategory;
