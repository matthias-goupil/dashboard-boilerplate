import { getImage } from '@/services/minio'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const key = url.searchParams.get('key') // Récupère le nom du fichier à partir de l'URL

  if (!key) {
    return NextResponse.json({ error: 'Missing image key' }, { status: 400 })
  }

  try {
    // Récupère l'image depuis MinIO
    const imageStream = await getImage(key)

    // Envoie l'image en réponse avec le bon type MIME
    return new NextResponse(imageStream, {
      headers: {
        'Content-Type': 'image/jpeg', // Tu peux ajuster en fonction du type d'image
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    )
  }
}
