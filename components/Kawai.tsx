import Spline from "@splinetool/react-spline/next";

export default function Kawai() {
    return (
        <main className="relative mr-10 h-[500px] lg:h-[700px]">
            <Spline scene="https://prod.spline.design/2BdBkn667sv5tIYV/scene.splinecode" />
            <div className="absolute ml-10 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/4 p-4">
                <p className="hidden lg:block lg:text-3xl text-white font-bold">Can&apos;t wait to see you there !</p>
            </div>
        </main>
    );
}
