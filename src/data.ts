type dataType = {
  Products: {
    image: string;
    imgBanner: string;
    title: string;
    startingPrice: string;
    lotStartsIn: { count: number; type: string }[];
    fav: boolean;
  }[];
  Articles: {}[];
  Reviews: {}[];
};

export const data: dataType = {
  Products: [
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
    {
      image: "/product.png",
      imgBanner: "Live auction",
      title: "Six-piece clothing set (blouse - pants - hat and ...",
      startingPrice: "1000 EGP",
      lotStartsIn: [
        {
          count: 2,
          type: "Days",
        },
        {
          count: 10,
          type: "Hours",
        },
        {
          count: 20,
          type: "Minutes",
        },
      ],
      fav: false,
    },
  ],
  Articles: [],
  Reviews: [],
};
