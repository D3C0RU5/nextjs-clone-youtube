// npm install next-connect
import { ObjectId } from 'mongodb';
import nc from 'next-connect';
import connectToDataBase from 'src/utils/mongodb';
import upload from 'src/utils/upload';

const handler = nc()
  .use(upload.single('file'))
  .post(async (req, res) => {
    const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;
    const { db } = await connectToDataBase();
    const collection = db.collection('videos');
    console.log(req);
    await collection.insertOne({
      title,
      authorId: ObjectId(authorId),
      authorName,
      authorAvatar,
      views: 0,
      thumb: req.file.location,
      videoUrl,
      updateAt: new Date(),
    });

    res.status(200).json({ ok: true });
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handler.');
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
