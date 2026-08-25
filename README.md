# AI-Powered Video SaaS

Welcome to **AI-Powered Video SaaS** — a modern Next.js app that enables creators and teams to upload, compress, store, and share videos using Cloudinary, Prisma, Clerk auth, and DaisyUI.

## 🚀 What this app does

- Upload video files and store them safely with Cloudinary
- Compress videos automatically during upload
- Save upload metadata in Prisma/PostgreSQL
- Provide a polished dark-mode landing page with Clerk-hosted authentication
- Secure image uploads for future sharing or thumbnails

## ✨ Key features

- **AI-ready video workflow**: Upload, compress, and manage videos with a clean UI
- **Clerk authentication**: Sign in and sign up through hosted Clerk URLs
- **Cloudinary media storage**: Video and image uploads are handled securely in Cloudinary
- **Prisma data layer**: Video metadata is stored in PostgreSQL
- **DaisyUI styling**: Beautiful theme-ready frontend with dark mode support

## 📁 Project structure

- `app/` — Next.js App Router pages and client components
- `app/(app)/video-upload/page.tsx` — Video upload form with notifications
- `app/api/video-upload/route.ts` — Video upload endpoint with Cloudinary + Prisma
- `app/api/image-upload/route.ts` — Image upload endpoint
- `app/api/videos/route.ts` — Fetch saved videos from the database
- `app/(auth)/sign-in/[[...sign-in]]/page.tsx` — Redirects to Clerk-hosted sign-in page
- `app/(auth)/sign-up/[[...sign-up]]/page.tsx` — Redirects to Clerk-hosted sign-up page
- `prisma/schema.prisma` — Video model and database schema
- `tailwind.config.ts` — Tailwind + daisyUI dark theme config

## 🛠️ Tech stack

- `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS + daisyUI`
- `Clerk` for authentication
- `Cloudinary` for media upload and compression
- `Prisma` with PostgreSQL (NeonDB compatible)

## 🔧 Setup

1. Clone the repository

```bash
git clone <repo-url>
cd 28-ai-powered-saas
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file and add the following variables:

```env
DATABASE_URL=postgresql://username:password@host:port/database
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Configure Clerk in your app and set up the correct sign-in/sign-up URLs.

	- Ensure `NEXT_PUBLIC_APP_URL` is set in your `.env.local` (for example `http://localhost:3000`).
	- In the Clerk dashboard, add this URL to the list of allowed Redirect URLs so Clerk can redirect users back to your app after authentication.

5. Run the app locally

```bash
npm run dev
```

6. Open the browser at `http://localhost:3000`

## 🎬 How to use

1. Open the homepage and choose **Sign Up** or **Sign In**.
2. Authenticate through Clerk.
3. Visit the video upload page and upload a file.
4. After upload, video metadata is saved in PostgreSQL and the file is stored in Cloudinary.

## 🧠 Notes

- The sign-in and sign-up routes are currently redirecting to Clerk-hosted URLs so that authentication uses Clerk's polished UI.
- The app uses a `Video` model with fields like `title`, `description`, `publicId`, `originalSize`, `compressedSize`, and `duration`.

## 📌 Video model

Video metadata is stored with Prisma using this model:

- `id` — unique video ID
- `title` — video title
- `description` — optional description
- `publicId` — Cloudinary public ID
- `originalSize` — original file size in bytes
- `compressedSize` — compressed result size in bytes
- `duration` — optional video length
- `createdAt` / `updatedAt` — timestamp fields

## 💡 Tips for improvement

- Add a video gallery page to preview uploaded files
- Add a real compression dashboard showing original vs compressed size
- Add cloud storage cleanup or video deletion support

## 📚 License

This project is open for improvement and customization.
