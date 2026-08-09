"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Notification = {
  message: string
  type: 'success' | 'error' | 'warning'
}

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const [notification, setNotification] = useState<Notification | null>(null)

    const router = useRouter()
    //max file size of 60 mb

    const MAX_FILE_SIZE = 70 * 1024 * 1024

    const showNotification = (message: string, type: Notification['type']) => {
      setNotification({ message, type })
      window.setTimeout(() => setNotification(null), 4000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            showNotification('File size too large. Please upload a smaller video.', 'warning')
            return;
        }

        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            const response = await axios.post("/api/video-upload", formData)
            if (response.status === 200) {
              showNotification('Video uploaded successfully.', 'success')
              router.push("/")
            } else {
              showNotification('Upload failed. Please try again.', 'error')
            }
        } catch (error) {
            console.error(error)
            showNotification('Upload failed. Please check your connection and try again.', 'error')
        } finally{
            setIsUploading(false)
        }

    }


    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </button>
          </form>
          {notification && (
            <div className={`mt-6 p-4 rounded-lg text-sm shadow ${
              notification.type === 'success'
                ? 'bg-emerald-100 text-emerald-900'
                : notification.type === 'warning'
                ? 'bg-amber-100 text-amber-900'
                : 'bg-red-100 text-red-900'
            }`}>
              {notification.message}
            </div>
          )}
        </div>
      );
}

export default VideoUpload
