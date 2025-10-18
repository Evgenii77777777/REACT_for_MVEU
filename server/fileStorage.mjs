import { randomUUID } from 'crypto';
import multer from 'multer';
import fs from 'fs';

const dirName = 'statics';
const dir = `./${dirName}`;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${dirName}/`);
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.')[1];
        cb(null, randomUUID() + '.' + extension);
    }
});

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const uploader = multer({ storage: storage });

export default uploader;
