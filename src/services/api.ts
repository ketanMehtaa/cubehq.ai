import { Customer } from '../types/customer';

const generateCustomers = (count: number): Customer[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    title: `Title ${i + 1}`,
    address: `Address ${i + 1}`,
  }));
};

export const fetchCustomers = (): Promise<Customer[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateCustomers(1000));
    }, 500);
  });
};
// in max just put till where you want random number
function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

export const fetchPhotos = async (): Promise<string[]> => {

  const response = await fetch(`https://picsum.photos/v2/list?page=${getRandomInt(98)}&limit=10`);
  const data = await response.json();
  return data.map((photo: any) => photo.download_url);
};