import { minioClient } from '@/config/minio.config'
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { Readable } from 'stream'

export async function uploadImageByURL(fileURL: string, newFileName?: string) {
  const response = await fetch(fileURL)
  if (!response.ok) return null

  const fileBuffer = Buffer.from(await response.arrayBuffer())
  const contentType = response.headers.get('content-type') || 'image/jpeg'

  return await minioClient.send(
    new PutObjectCommand({
      Bucket: 'images',
      Key: newFileName,
      Body: fileBuffer,
      ContentType: contentType,
    })
  )
}
export async function uploadImage(image: File, newFileName?: string) {
  const fileName = newFileName || `${Date.now()}-${image.name}`
  const fileBuffer = Buffer.from(await image.arrayBuffer())

  return await minioClient.send(
    new PutObjectCommand({
      Bucket: 'images',
      Key: fileName,
      Body: fileBuffer,
      ContentType: image.type,
    })
  )
}

export async function getImage(key: string) {
  try {
    // Crée la commande pour récupérer l'image depuis MinIO
    const command = new GetObjectCommand({
      Bucket: 'images',
      Key: key,
    })

    // Exécute la commande
    const { Body } = await minioClient.send(command)

    // Si le body existe, on renvoie l'image sous forme de stream
    if (Body instanceof Readable) {
      const chunks: Buffer[] = []
      for await (const chunk of Body) {
        chunks.push(chunk)
      }
      return Buffer.concat(chunks) // Transforme en Buffer
    }

    throw new Error('Image not found')
  } catch (error) {
    console.error('Error fetching image from MinIO:', error)
    throw error
  }
}
