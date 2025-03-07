import { S3Client } from "@aws-sdk/client-s3";

const USER = process.env.MINIO_ROOT_USER!;
const PASSWORD = process.env.MINIO_ROOT_PASSWORD!;
const ENDPOINT = process.env.MINIO_ENDPOINT;

export const minioClient = new S3Client({
  region: "us-east-1", // MinIO n'utilise pas vraiment les régions, mais AWS SDK en a besoin
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: USER,
    secretAccessKey: PASSWORD,
  },
  forcePathStyle: true,
});