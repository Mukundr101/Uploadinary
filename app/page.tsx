import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="hero bg-base-100 px-6 py-16 text-base-content sm:px-8">
        <div className="hero-content mx-auto grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="space-y-6 max-w-xl">
            <span className="badge badge-secondary badge-lg">AI-powered video workflow</span>
            <h1 className="text-5xl font-bold leading-tight">
              Upload, manage, Compress and share video content with smart AI support.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-base-content/75">
              This web app helps creators and teams upload videos, add structured metadata, and publish social-ready content faster. Use AI-enabled tools to streamline uploads, keep everything organized, and start sharing immediately. You can also download your Compressed videos and share them with your team or on social media platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/sign-up" className="btn btn-primary btn-lg">
                Sign Up
              </Link>
              <Link
                href="https://blessed-shrimp-45.accounts.dev/sign-in"
                className="btn btn-outline btn-secondary btn-lg"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="card w-full bg-base-200 shadow-xl ring-1 ring-white/10">
            <div className="card-body rounded-3xl bg-base-200 p-8">
              <div className="mb-8 flex items-center justify-between rounded-3xl bg-base-300 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-base-content/60">Video Upload</p>
                  <p className="mt-2 text-sm font-semibold text-base-content">Drag, drop, and go live</p>
                </div>
                <div className="badge badge-outline badge-sm">Preview</div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-base-300 p-4">
                  <p className="text-sm font-semibold text-base-content">Title</p>
                  <p className="mt-1 text-sm text-base-content/70">Launch day announcement</p>
                </div>
                <div className="rounded-3xl bg-base-300 p-4">
                  <p className="text-sm font-semibold text-base-content">Description</p>
                  <p className="mt-1 text-sm text-base-content/70">Generate faster social videos with metadata and sharing tools built in.</p>
                </div>
                <div className="rounded-3xl bg-base-300 p-4">
                  <p className="text-sm font-semibold text-base-content">Status</p>
                  <p className="mt-1 text-sm text-base-content/70">Ready to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8">
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Upload videos quickly</h2>
              <p className="text-base-content/70">Add titles, descriptions, and files in one place so your team can publish without delays.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">AI smart sharing</h2>
              <p className="text-base-content/70">Use intelligent recommendations and shareable content previews to boost reach across social platforms.</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Secure account access</h2>
              <p className="text-base-content/70">Get started with a dedicated account and keep your uploads and drafts safe in one dashboard.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
