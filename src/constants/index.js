export const mockData = count =>  Array(count).fill().map((_, i) => ({title:  `title_${i+1}`, id: i}));

export const ItemTypes = {
  ITEM: 'item',
}