import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_BUCKET_REGION,
  signatureVersion: "v4",
});

const s3 = new aws.S3();

export default s3;
