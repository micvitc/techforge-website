import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl text-white font-bold">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-white mt-2">
                The page you are looking for doesn’t exist.
            </p>
            <Link href={"/"} className="px-8 mt-5 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-lg font-semibold text-lg transition-all hover:bg-zinc-800 focus:ring-4 focus:ring-white/30 backdrop-blur-sm animate-fade-in-up delay-100">
                Back Home
            </Link>
        </div>
    );
}
