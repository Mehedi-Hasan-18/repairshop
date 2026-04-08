import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black bg-[url('/home-img.webp')] bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl h-dvh mx-auto">
        <div className="flex-flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-3xl font-bold">
            Mehedi's Computer <br /> Repair Shop
          </h1>
          <address>
            Rangpur
          </address>
          <p>
            Open : Daily 9AM - 5PM
          </p>
          <Link href={"tel:01626759496"} className="hover:underline">01626759496</Link>
        </div>
      </main>
    </div>
  );
}
