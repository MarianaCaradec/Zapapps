const items = [
    {
        id: 1,
        title: 'Nike Air Max 270',
        img: 'img/nike-air-max-270.jpg',
        desc: 'Las Nike Air Max 270 son la fusión perfecta entre estilo y comodidad. Diseñadas con la unidad Air más grande de Nike hasta la fecha, estas zapatillas ofrecen una amortiguación increíble y un look contemporáneo. El diseño elegante y aerodinámico se complementa con una parte superior de malla transpirable, ideal para mantener tus pies frescos durante todo el día. Perfectas para tus entrenamientos o para un estilo casual diario.',
        price: '$360.000',
        category: 'urbana'
    },
    {
        id: 2,
        title: 'Puma RS-X',
        img: 'img/puma-rsx.jpg',
        desc: 'Las Puma RS-X son un icono de la moda urbana y la comodidad. Con un diseño audaz y futurista, estas zapatillas destacan por sus líneas gruesas y detalles llamativos. La tecnología RS en la suela proporciona una amortiguación superior, mientras que la combinación de materiales en la parte superior ofrece un ajuste y soporte excelentes. Ideales para quienes buscan destacar con un calzado versátil y lleno de estilo.',
        price: '$270.000',
        category: 'deportiva'
    },
    {
        id: 3,
        title: 'Adidas Ultraboost 22',
        img: 'img/adidas-ultraboost-22.jpg',
        desc: 'Las Adidas Ultraboost 22 están diseñadas para ofrecer el máximo rendimiento en cada paso. Equipadas con la tecnología Boost, estas zapatillas garantizan una energía sin fin y una comodidad incomparable. La parte superior Primeknit se adapta al pie como un guante, brindando un soporte flexible y ligero. Son perfectas tanto para corredores como para aquellos que buscan un calzado cómodo y estiloso para el día a día.',
        price: '$310.000',
        category: 'deportiva'
    },
    {
        id: 4,
        title: 'New Balance 574',
        img: 'img/new-balance-574.jpg',
        desc: 'Las New Balance 574 combinan un diseño clásico con una comodidad moderna. Con su inconfundible silueta retro, estas zapatillas son un icono atemporal que se adapta a cualquier look. La tecnología ENCAP en la suela proporciona una excelente amortiguación y soporte, mientras que los materiales de alta calidad aseguran durabilidad y confort. Ideales para el uso diario, tanto en actividades casuales como deportivas.',
        price: '$210.000',
        category: 'formal'
    },
    {
        id: 5,
        title: 'Topper Ultralight',
        img: 'img/topper-ultralight.jpg',
        desc: 'Las Topper Ultralight destacan por su ligereza y comodidad, perfectas para tus actividades diarias. Su diseño minimalista y moderno se complementa con una parte superior de malla transpirable que mantiene tus pies frescos. La suela de goma antideslizante ofrece tracción y durabilidad, mientras que la plantilla acolchada brinda un confort adicional. Son la elección perfecta para quienes buscan un calzado funcional y con estilo.',
        price: '$245.000',
        category: 'deportiva'
    },
    {
        id: 6,
        title: 'Vans Old Skool',
        img: 'img/vans-old-skool.jpg',
        desc: 'Las Vans Old Skool son un clásico atemporal que ha marcado tendencia desde su lanzamiento. Con su inconfundible banda lateral y su diseño robusto, estas zapatillas ofrecen un estilo retro que nunca pasa de moda. La parte superior de lona y ante proporciona durabilidad y soporte, mientras que la suela waffle de goma asegura una tracción óptima. Perfectas para el skateboarding o para añadir un toque casual y vintage a tu atuendo diario.',
        price: '$187.000',
        category: 'urbana'
    },
    {
        id: 7,
        title: 'John Foos 182',
        img: 'img/john-foos-182.jpg',
        desc: 'Las John Foos 182 combinan un diseño moderno con la esencia del calzado clásico urbano. Estas zapatillas están confeccionadas con materiales de alta calidad que aseguran durabilidad y confort. La parte superior de lona resistente se complementa con detalles de cuero sintético, ofreciendo un look versátil y contemporáneo. Con una suela de goma vulcanizada, las 182 proporcionan una excelente tracción y soporte, ideales para el día a día.',
        price: '$155.000',
        category: 'urbana'
    },
    {
        id: 8,
        title: 'Atomik Runner',
        img: 'img/atomik-runner.jpg',
        desc: 'Las Atomik Runner están diseñadas para aquellos que buscan rendimiento y estilo en cada paso. Con una construcción ligera y una parte superior de malla transpirable, estas zapatillas aseguran comodidad y frescura durante todo el día. La entresuela acolchada ofrece una excelente amortiguación, mientras que la suela de goma antideslizante proporciona tracción y estabilidad. Son perfectas para actividades deportivas y para un look deportivo casual.',
        price: '$170.000',
        category: 'deportiva'
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);

    }) 
}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id.toString() === id))
        }, 1000);
    })
}

export const getProductByCategory = (cat) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items.filter(e => e.category === cat))
        }, 1000);
    })
}