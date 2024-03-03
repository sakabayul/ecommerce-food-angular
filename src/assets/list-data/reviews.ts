export interface review {
    id:number;
    star:number;
    description:string;
    img:string;
    name:string;
    status:string;
}

export const reviews = [
    {
        id: 1,
        star: 4,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium
        enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam
        nesciunt eaque nulla dignissimos.`,
        img: '../assets/image/pic-assets/pic-1.jpg',
        name: 'Kadita Puspita',
        status: 'Happy Customer'
    },
    {
        id: 2,
        star: 5,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium
        enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam
        nesciunt eaque nulla dignissimos.`,
        img: '../assets/image/pic-assets/pic-2.jpg',
        name: 'Lestari Nestle',
        status: 'Happy Customer'
    },
    {
        id: 3,
        star: 4,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium
        enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam
        nesciunt eaque nulla dignissimos.`,
        img: '../assets/image/pic-assets/pic-3.jpg',
        name: 'Raditya',
        status: 'Happy Customer'
    },
    {
        id: 4,
        star: 4,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium
        enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam
        nesciunt eaque nulla dignissimos.`,
        img: '../assets/image/pic-assets/pic-4.jpg',
        name: 'Tia Wulandari',
        status: 'Happy Customer'
    }
]