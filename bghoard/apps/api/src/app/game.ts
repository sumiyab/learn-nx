import { Game } from '@bghoard/api-interfaces';

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
const randomReviews = (game: string) => {
  return new Array(randomInteger(1, 3)).fill({}).map(() => ({
    game,
    rating: randomInteger(0, 5),
    content: 'Lorem ipsum dolor sit amet',
  }));
};

export const games: Game[] = [
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image:
      'https://macphunsoftware.cachefly.net/upload/SkylumHowto/fruit-1160552_960_7201x.jpg',
    description: 'here is your description',
    price: 35,
    reviews: randomReviews('settlers-in-the-can'),
  },
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image:
      'data:image/jpeg;base64,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YFlq6rGqr1q44+ampZJGaIa1nEtPQfDyUDahAuoquMHFVnYmTAV3HFrfbEMzniITVHwM16T6T+kX4kipVmnQz4PqDg3g3/l4cRQ2JQptIe8b7tJ/SP8A11PVeyw+3DxXWwdHPnJ+FPL1U24h7XCU6dNjadNoaxohrRkApw9eVobWnVX6W0JXRVHc3klc2ni1YbXQWpWVA2qtw9BIi1lZlBlFiVlAREQEREBERBgrRzlsVo4IIaj1TrVFcexQPooORiXFcfFUiV6aph1Xfg0HisXgC5cevsKTK+ivwHJQu2dyQfOzsmoMnu8Son7KqfuK+iO2aOCidszko/RxzO+2PxDO5fPTsup+53itf9IdqSvoB2XyWp2XySMOOPFY/BuXgm7FVmjsqNF7T/TOSyNmclvERHhh5ijhCFeo0Cu63Z3JSswCyOdh2FdHDyp2YRWGYdBmi4q3Teo2UlMxiCdj1M16ga1StCCdrluHKIBbhBKCsrQLZBsiwFlAREQEREGIWIWyINC1alilWIQQmktDRVmEhBTNBaHDq9CbqDnnDLU4VdHdWNxBzThVqcLyXU3Fj7aDl/2qf2q6f20+2g5n9ss/266X21j7aCgMOthRV37azuIKYpLcU1Z3FncQQBi3DVLurMINA1bALaFmEGIWUhZQEREBERAREQEREBERAREQEREBERAWIRECEhEQISERAhIRECEhEQISERBlERAREQEREH//2Q==',
    description: 'here is your description',
    price: 35,
    reviews: randomReviews('settlers-in-the-can'),
  },
  {
    id: 'settlers-in-the-can',
    name: 'Settlers in the Can',
    image:
      'data:image/png;base64,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',
    description: 'here is your description',
    price: 35,
    reviews: randomReviews('settlers-in-the-can'),
  },
];