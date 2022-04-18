import nc from "next-connect";
import dbConnect from "../../../lib/db";
import s3 from "../../../lib/s3";
import { v4 as uuidv4 } from "uuid";
import Files from "../../../models/Files";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found");
  },
});

handler.get(async (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

handler.post(async (req, res) => {
  const conn = await dbConnect();
  const files = [...req.body.files];
  const filesArr = [];
  files.forEach((f) => {
    const fileName = `${uuidv4()}.${f.name.split(".")[1]}`;
    filesArr.push({ key: fileName, mimeType: f.mimeType });
    const putUrl = s3.getSignedUrl("putObject", {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName, //filename
      Expires: 600, //time to expire in seconds
    });
    f.putUrl = putUrl;
  });

  const session = await conn.startSession();
  let filesObj;
  try {
    session.startTransaction();
    filesObj = await Files.create(
      [
        {
          files: filesArr,
          createdBy: "Admin",
        },
      ],
      { session }
    );

    await session.commitTransaction();
  } catch (ex) {
    console.log(ex);
    await session.abortTransaction();
  }

  res.status(201).json({
    message: "Success",
    id: filesObj._id,
    urls: files,
  });
});

export default handler;
