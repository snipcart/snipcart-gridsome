const getProducts = () => {
  return {
    data: [
      {
        id: 0,
        name: "Blinky",
        images: {
          big: "~/assets/ghosts/big/blinky.png",
          small: "blinky.png",
        },
        description: {
          short: "Pack leader",
          long:
            "Natural leader. Gets a speed boost when pack pellets are cleared.",
        },
        price: 1337
      },
      {
        id: 1,
        name: "Inky",
        images: {
          big: "~/assets/ghosts/big/inky.png",
          small: "inky.png",
        },
        description: {
          short: "Hungover but swift",
          long:
            "Had a big night yesterday, but brace yourself, he is still pretty fast.",
        },
        price: 3141
      },
      {
        id: 2,
        name: "Pinky",
        images: {
          big: "~/assets/ghosts/big/pinky.png",
          small: "pinky.png",
        },
        description: {
          short: "Natural ambusher",
          long: "Natural ambusher. Will cut you off. Be careful when you turn!",
        },
        price: 2718
      },
      {
        id: 3,
        name: "Clyde",
        images: {
          big: "~/assets/ghosts/big/clyde.png",
          small: "clyde.png",
        },
        description: {
          short: "Got chaotic moves",
          long: "moves = Math.random() * Math.floor(10000000)",
        },
        price: 1235
      },
    ],
  };
};

exports.getProducts = getProducts;
