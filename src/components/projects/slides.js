const slides = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, rem!',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor rerum mollitia, porro nulla nobis fugit? Culpa, sint repudiandae? Quia, praesentium eveniet molestiae obcaecati ab mollitia, repellendus repudiandae voluptatum quasi fugit excepturi sed eos voluptas at. Assumenda repellendus ea, tempora optio magnam iusto eveniet, officia facere quibusdam dicta laborum? Adipisci!',
    img1: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVhdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    img2: 'https://images.unsplash.com/photo-1611421964776-f33860ba2894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    img3: 'https://images.unsplash.com/photo-1600137541899-c6de40300ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZlYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'At vero eos et accusamus et iusto odio dignissimos',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor rerum mollitia, porro nulla nobis fugit? Culpa, sint repudiandae? Quia, praesentium eveniet molestiae obcaecati ab mollitia, repellendus repudiandae voluptatum quasi fugit excepturi sed eos voluptas at. Assumenda repellendus ea, tempora optio magnam iusto eveniet, officia facere quibusdam dicta laborum? Adipisci!',
    img1: 'https://images.unsplash.com/photo-1641979284150-c0a5fae70674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img2: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img3: 'https://images.unsplash.com/photo-1641984286013-d45a1d1e602d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor rerum mollitia, porro nulla nobis fugit? Culpa, sint repudiandae? Quia, praesentium eveniet molestiae obcaecati ab mollitia, repellendus repudiandae voluptatum quasi fugit excepturi sed eos voluptas at. Assumenda repellendus ea, tempora optio magnam iusto eveniet, officia facere quibusdam dicta laborum? Adipisci!',
    img1: 'https://images.unsplash.com/photo-1641948775529-60e5e80eda90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img2: 'https://images.unsplash.com/photo-1641931290523-47ba84e9cfc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img3: 'https://images.unsplash.com/photo-1641966961473-5b083fd62fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    title: 'Temporibus autem quibusdam et aut officiis debitis aut rerum',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor rerum mollitia, porro nulla nobis fugit? Culpa, sint repudiandae? Quia, praesentium eveniet molestiae obcaecati ab mollitia, repellendus repudiandae voluptatum quasi fugit excepturi sed eos voluptas at. Assumenda repellendus ea, tempora optio magnam iusto eveniet, officia facere quibusdam dicta laborum? Adipisci!',
    img1: 'https://images.unsplash.com/photo-1641924875397-5324016b96bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img2: 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    img3: 'https://images.unsplash.com/photo-1641912194154-4a61a4b5b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
]

export default slides
