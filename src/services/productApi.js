const getProducts = () => {
  return {
    data: [
      {
        id: 0,
        name: "Blinky",
        images: {
          big: "blinky-big.png",
          small: "blinky-small.png",
        },
        description: {
          short: "Pack leader",
          long:
            "Natural leader. Gets a speed boost when pack pellets are cleared.",
        },
        price: 1337,
      },
      {
        id: 1,
        name: "Inky",
        images: {
          big: "inky-big.png",
          small: "inky-small.png",
        },
        description: {
          short: "Hungover but swift",
          long:
            "Had a big night yesterday, but brace yourself, he is still pretty fast.",
        },
        price: 3141,
      },
      {
        id: 2,
        name: "Pinky",
        images: {
          big: "pinky-big.png",
          small: "pinky-small.png",
        },
        description: {
          short: "Natural ambusher",
          long: "Natural ambusher. Will cut you off. Be careful when you turn!",
        },
        price: 2718,
      },
      {
        id: 3,
        name: "Clyde",
        images: {
          big: "clyde-big.png",
          small: "clyde-small.png",
        },
        description: {
          short: "Got chaotic moves",
          long: "moves = Math.random() * Math.floor(10000000)",
        },
        price: 1235,
      },
    ],
  };
};

exports.getProducts = getProducts;
