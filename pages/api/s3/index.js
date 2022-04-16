import nc from "next-connect";
import s3 from "../../../lib/s3";

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
  const putUrl = s3.getSignedUrl("putObject", {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: req.query.file, //filename
    Expires: 300, //time to expire in seconds
  });
  res.status(200).json({
    message: "success",
    putUrl: putUrl,
  });
});

export default handler;
