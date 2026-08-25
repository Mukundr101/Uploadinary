import { redirect } from "next/navigation";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Page() {
  const url = `https://blessed-shrimp-45.accounts.dev/sign-up?redirect_url=${encodeURIComponent(
    APP_URL,
  )}`;
  redirect(url);
}
