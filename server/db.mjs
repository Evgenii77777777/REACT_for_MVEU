import { MongoClient } from 'mongodb';
import { randomUUID } from 'crypto';

const mongoString = "mongodb://127.0.0.1:27017/";
const dbName = 'plumber_db';

async function initAsync() {
    const mongoClient = new MongoClient(mongoString);

    try {
        await mongoClient.connect();
        const db = mongoClient.db(dbName);
        const serviceCollections = db.collection('services');
        if (await serviceCollections.countDocuments() === 0) {
            await serviceCollections.insertMany([
                {
                    name: 'Эспрессо',
                    description: 'Вкусный Эспрессо',
                    price: 100,
                    mesurement: 'чашка',
                    img: '/statics/k1.jpg'
                },
                                {
                    name: 'Капичино',
                    description: 'Вкусный Капучино',
                    price: 105,
                    mesurement: 'чашка',
                    img: '/statics/k2.jpg'
                },
                                {
                    name: 'Латте',
                    description: 'Вкусный Латте',
                    price: 120,
                    mesurement: 'чашка',
                    img: '/statics/k3.jpg'
                },
                {
                    name: 'Тост',
                    description: 'Вкусный тост',
                    price: 50,
                    mesurement: 'шт',
                    img: '/statics/k4.jpg'
                },
                {
                    name: 'Авторский напиток',
                    description: 'Авторский напиток',
                    price: 110,
                    mesurement: 'шт',
                    img: '/statics/k5.jpg'
                },                
                {
                    name: 'Вкусный завтрак #1',
                    description: 'Авторский напиток',
                    price: 500,
                    mesurement: 'шт',
                    img: '/statics/k6.jpg'
                },    
                                {
                    name: 'Вкусный завтрак #2',
                    description: 'Авторский напиток',
                    price: 500,
                    mesurement: 'шт',
                    img: '/statics/k7.jpg'
                },   
                                {
                    name: 'Вкусный завтрак #3',
                    description: 'Авторский напиток',
                    price: 500,
                    mesurement: 'шт',
                    img: '/statics/k8.jpg'
                },   
                                {
                    name: 'Вкусный завтрак #4',
                    description: 'Авторский напиток',
                    price: 500,
                    mesurement: 'шт',
                    img: '/statics/k9.jpg'
                },                                   {
                    name: 'Вкусный завтрак #5',
                    description: 'Авторский напиток',
                    price: 500,
                    mesurement: 'шт',
                    img: '/statics/k10.jpg'
                },   
                

            ]);
        }

        const exampleCollections = db.collection('examples');
        if (await exampleCollections.countDocuments() === 0) {
            await exampleCollections.insertMany([
                {
                    service: 'Эспрессо',
                    img: '/statics/k1.jpg'
                },{
                    service: 'Эспрессо',
                    img: '/statics/k2.jpg'
                },{
                    service: 'Капичино',
                    img: '/statics/k3.jpg'
                },{
                    service: 'Вкусный завтрак #3',
                    img: '/statics/k4.jpg'
                },
                {
                    service: 'Латте',
                    img: '/statics/k5.jpg'
                },{
                    service: 'Вкусный завтрак #1',
                    img: '/statics/k6.jpg'
                },{
                    service: 'Вкусный завтрак #1',
                    img: '/statics/k7.jpg'
                },{
                    service: 'Вкусный завтрак #2',
                    img: '/statics/k8.jpg'
                },{
                    service: 'Вкусный завтрак #3',
                    img: '/statics/k9.jpg'
                },{
                    service: 'Вкусный завтрак #3',
                    img: '/statics/k10.jpg'
                },{
                    service: 'Авторский напиток',
                    img: '/statics/gallery/g1.jpg'
                },{
                    service: 'Тост',
                    img: '/statics/gallery/g2.jpg'
                },{
                    service: 'Вкусный завтрак #5',
                    img: '/statics/gallery/g10.jpg'
                },{
                    service: 'Вкусный завтрак #5',
                    img: '/statics/gallery/g11.jpg'
                },{
                    service: 'Вкусный завтрак #4',
                    img: '/statics/gallery/g7.jpg'
                },{
                    service: 'Авторский напиток',
                    img: '/statics/gallery/g2.jpg'
                },{
                    service: 'Авторский напиток',
                    img: '/statics/gallery/g3.jpg'
                },{
                    service: 'Авторский напиток',
                    img: '/statics/gallery/g4.avif'
                },



            ]);
        }

        const blogsCollections = db.collection('blogs');
        if (await blogsCollections.countDocuments() === 0) {
            await blogsCollections.insertMany([
                {
                    guid: randomUUID(),
                    title: 'Марина',
                    preview: 'Зашла сюда спонтанно, проходя мимо, и не пожалела! Атмосфера очень...',
                    text: 'Зашла сюда спонтанно, проходя мимо, и не пожалела! Атмосфера очень уютная, играет приятная музыка, нет навязчивого шума. Бариста встретила с улыбкой, помогла определиться с выбором — я взяла раф с карамелью. Кофе приготовили буквально за 5 минут, напиток получился просто божественный — насыщенный, с приятным ароматом и идеальным балансом сладости. Обязательно вернусь ещё!',
                    comments: [
                        'спасибо, было полезно',
                        'Узнал много нового!'
                    ]
                },
                {
                    guid: randomUUID(),
                    title: 'Ольга',
                    preview: ' Посещаю эту кофейню уже второй месяц подряд, практически...',
                    text: 'Посещаю эту кофейню уже второй месяц подряд, практически каждый день. Здесь работает замечательный бариста, который всегда помнит мои предпочтения и готовит идеальный эспрессо. Особенно радует, что в кофейне чисто и аккуратно, есть удобные столики, где можно спокойно поработать с ноутбуком. Ценник более чем адекватный, а качество напитков на высоте. Рекомендую всем!',
                    comments: []
                },
                                {
                    guid: randomUUID(),
                    title: 'Сергей',
                    preview: 'Отмечали с подругами день рождения, выбрали эту кофейню из-за... ',
                    text: 'Отмечали с подругами день рождения, выбрали эту кофейню из-за хороших отзывов. Не прогадали! Персонал был внимателен и дружелюбен, быстро обслужили всю нашу компанию. Брали разные напитки — от классического капучино до экзотического бамбла, все оказались превосходными. Десерты тоже не подвели, особенно впечатлил шоколадный торт. Атмосфера располагала к общению, музыка не мешала разговаривать. Однозначно будем приходить ещё!',
                    comments: []
                },
            ]);
        }
    }
    finally {
        await mongoClient.close();
    }
}

async function getAllEntitiesAsync(collectionName) {
    const mongoClient = new MongoClient(mongoString);
    try {
        await mongoClient.connect();

        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        const entities = await collection.find().toArray();
        return entities;
    }
    finally {
        await mongoClient.close();
    }
}

async function addEntityAsync(collectionName, entity) {
    const mongoClient = new MongoClient(mongoString);
    try {
        await mongoClient.connect();

        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        await collection.insertOne(entity);
    }
    finally {
        await mongoClient.close();
    }
}

async function getBlogsAsync() {
    const collectionName = 'blogs';
    const mongoClient = new MongoClient(mongoString);
    try {
        await mongoClient.connect();

        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        const blogs = await collection.find({}).project({_id:0, id:"$guid", title: 1, preview: 1}).toArray();
        return blogs;
    }
    finally {
        await mongoClient.close();
    }
}

async function getBlogAsync(guid) {
    const collectionName = 'blogs';
    const mongoClient = new MongoClient(mongoString);
    try {
        await mongoClient.connect();

        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        const blog = await collection.findOne({guid: guid});
        return blog;
    }
    finally {
        await mongoClient.close();
    }
}

async function addCommentAsync(guid, comment) {
    const collectionName = 'blogs';
    const mongoClient = new MongoClient(mongoString);
    try {
        await mongoClient.connect();

        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        
        await collection.updateOne({guid: guid}, { $push: { comments: comment}});
    }
    finally {
        await mongoClient.close();
    }
}

export { initAsync, getAllEntitiesAsync, addEntityAsync, getBlogAsync, getBlogsAsync, addCommentAsync }