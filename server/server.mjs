import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initAsync, getAllEntitiesAsync, addEntityAsync, getBlogAsync, addCommentAsync, getBlogsAsync } from './db.mjs';
import uploader from './fileStorage.mjs';

await initAsync();

const port = 4001;
const app = express();
const jsonParser = express.json();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../statics')));

app.get("/api/services", async function(_, response){
    const services = await getAllEntitiesAsync('services');

    response.json(services);
});

app.get("/api/examples", async function(_, response){
    const examples = await getAllEntitiesAsync('examples');

    response.json(examples);
});

app.get("/api/clients", async function(_, response){
    const clients = await getAllEntitiesAsync('clients');

    response.json(clients);
});

app.get("/api/subscribers", async function(_, response){
    const subscribers = await getAllEntitiesAsync('subscribers');

    response.json(subscribers);
});

app.get("/api/blogs", async function(_, response){
    const blogs = await getBlogsAsync();

    response.json(blogs);
});

app.get("/api/blogs/:id", async function(request, response){
    const id = request.params["id"];
    const blog = await getBlogAsync(id) || {};

    response.json(blog);
});

app.post("/api/services", jsonParser, async function(request, response) {
    const service = request.body;

    if(!service) return response.sendStatus(400);

    await addEntityAsync('services', service);
    response.sendStatus(200);
});

app.post("/api/examples", jsonParser, async function(request, response) {
    const example = request.body;

    if(!example) return response.sendStatus(400);

    await addEntityAsync('examples', example);
    response.sendStatus(200);
});

app.post("/api/clients", jsonParser, async function(request, response) {
    const client = request.body;

    if(!client) return response.sendStatus(400);

    await addEntityAsync('clients', client);
    response.sendStatus(200);
});

app.post("/api/subscribers", jsonParser, async function(request, response) {
    const subscriber = request.body;

    if(!subscriber) return response.sendStatus(400);

    await addEntityAsync('subscribers', subscriber);
    response.sendStatus(200);
});

app.post("/api/blogs", jsonParser, async function(request, response) {
    const blog = request.body;

    if(!blog) return response.sendStatus(400);

    await addEntityAsync('blogs', blog);
    response.sendStatus(200);
});

app.post("/api/blogs/:id", jsonParser, async function(request, response) {
    const id = request.params["id"];
    const comment = request.body;

    if(!comment || !id) return response.sendStatus(400);

    await addCommentAsync(id, comment.comment);
    response.sendStatus(200);
});

app.post('/api/upload', uploader.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Файл не загружен.');
    }
    res.json(req.file.filename);
});

app.listen(port, function() {
    console.log(`Сервер начал принимать запросы по адресу http://localhost:${port}`)
});