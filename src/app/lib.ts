import { getPlaiceholder } from 'plaiceholder'

export async function getBase64(imageUrl: string) {
	try {
		const res = await fetch(imageUrl)
		if (!res.ok) {
			throw new Error('Failed to fetch')
		}
		const buffer = await res.arrayBuffer()
		const { base64 } = await getPlaiceholder(Buffer.from(buffer))
		return base64
	} catch (error) {
		console.error(error)
	}
}
