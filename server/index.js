import { randomUUID } from 'node:crypto'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import multer from 'multer'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const imageDirectory = resolve(projectRoot, 'src/assets/images/products')
const allowedImageTypes = new Map([
    ['image/jpeg', '.jpg'],
    ['image/png', '.png'],
    ['image/webp', '.webp'],
    ['image/gif', '.gif']
])

mkdirSync(imageDirectory, { recursive: true })

const upload = multer({
    storage: multer.diskStorage({
        destination: imageDirectory,
        filename: (_request, file, callback) => {
            callback(null, `${randomUUID()}${allowedImageTypes.get(file.mimetype)}`)
        }
    }),
    fileFilter: (_request, file, callback) => {
        if (!allowedImageTypes.has(file.mimetype)) {
            callback(new Error('Only JPEG, PNG, WebP, and GIF images are supported.'))
            return
        }

        callback(null, true)
    },
    limits: {
        files: 5,
        fileSize: 5 * 1024 * 1024
    }
})

const app = express()

app.post('/api/uploads', upload.array('images', 5), (request, response) => {
    const images = request.files.map((file) => ({
        filename: file.filename,
        url: `/src/assets/images/products/${file.filename}`
    }))

    response.status(201).json({ images })
})

app.use((error, _request, response, next) => {
    if (response.headersSent) {
        next(error)
        return
    }

    if (error instanceof multer.MulterError || error.message === 'Only JPEG, PNG, WebP, and GIF images are supported.') {
        response.status(400).json({ error: error.message })
        return
    }

    console.error('Image upload failed:', error)
    response.status(500).json({ error: 'Image upload failed.' })
})

app.listen(3001, '127.0.0.1', () => {
    console.log('Development upload server listening on http://127.0.0.1:3001')
})
