// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const mockData = [
  {
    id: 0,
    name: "Blinky",
    images: {
      big: "~/assets/ghosts/big/blinky.png",
      small: "~/assets/ghosts/small/blinky.png"
    },
    description: {
      short: "Pack leader",
      long: "Natural leader. Gets a speed boost when pack pellets are cleared."
    }
  },
  {
    id: 1,
    name: "Inky",
    images: {
      big: "~/assets/ghosts/big/inky.png",
      small: "~/assets/ghosts/small/inky.png"
    },
    description: {
      short: "Hungover but swift",
      long: "Had a big night yesterday, but brace yourself, he is still pretty fast.",
    }
  },
  {
    id: 2,
    name: "Pinky",
    images: {
      big: "~/assets/ghosts/big/pinky.png",
      small: "~/assets/ghosts/small/pinky.png"
    },
    description: {
      short: "Natural ambusher",
      long: "Natural ambusher. Will cut you off. Be careful when you turn!"
    }
  },
  {
    id: 3,
    name: "Clyde",
    images: {
      big: "~/assets/ghosts/big/clyde.png",
      small: "~/assets/ghosts/small/clyde.png"
    },
    description: {
      short: "Got chaotic moves",
      long: "moves = Math.random() * Math.floor(10000000)",
    }
  }
]

module.exports = function (api) {
  api.loadSource( async actions => {
    const collection = actions.addCollection('Product')

    const data = mockData

    data.forEach(element => {
      collection.addNode({
        id: element.id,
        name: element.name,
        images: {
          big: element.images.big,
          small: element.images.small
        },
        description: {
          short: element.description.short,
          long: element.description.long
        }
      })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
