export interface product{
    id: number;
    discount: number;
    img: string;
    name: string;
    price: number;
}

export const products = [
    {
        id: 1,
        discount: 10,
        img: '../../assets/image/product-assets/img-1.jpg',
        name: 'Gelato Chocolate',
        price: 15
    },
    {
        id: 2,
        discount: 20,
        img: '../../assets/image/product-assets/img-2.jpg',
        name: 'Gelato Vanilla x Strawbarry',
        price: 20
    },
    {
        id: 3,
        discount: 15,
        img: '../../assets/image/product-assets/img-3.jpg',
        name: 'Gelato Matcha',
        price: 10
    },
    {
        id: 4,
        discount: 15,
        img: '../../assets/image/product-assets/img-4.jpg',
        name: 'Gelato Vanilla',
        price: 12
    },
    {
        id: 5,
        discount: 15,
        img: '../../assets/image/product-assets/img-5.jpg',
        name: 'Gelato Orange',
        price: 17
    },
    {
        id: 6,
        discount: 15,
        img: '../../assets/image/product-assets/img-6.jpg',
        name: 'Gelato Matcha',
        price: 19
    }
];