import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Position Statement: Engineering Design and My Approach
        </h1>

        <section className="text-sm sm:text-base max-w-2xl leading-relaxed">
          <p>
            To me, engineering is the application of the sciences and math to implement and solve real-world challenges and needs. Engineering design, in particular, is a dynamic, iterative, and creative process summarized as:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Frame:</strong> Understand the situation.</li>
            <li><strong>Diverge:</strong> Come up with lots of ideas.</li>
            <li><strong>Represent:</strong> Sketch, report, model, prototype, build, present, etc.</li>
            <li><strong>Converge:</strong> Throw some ideas away.</li>
          </ul>
          <p className="mt-4">
            This process not only appeals to my logical and analytical abilities but also aligns with my desire to create, make an impact, and satisfy my innate curiosity about how things work.
          </p>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/beliefs-and-values"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Beliefs and Values
          </Link>
          <Link
            href="/experiences"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Experiences
          </Link>
        </div>

        <p className="text-sm sm:text-base leading-relaxed mt-8">
          In sum, engineering design is not only a professional pursuit for me but also a personal journey of creativity, collaboration, and impact. As I continue to develop my skills and perspectives, I am excited to further explore how engineering design can transform creative visions into tangible solutions that improve lives. My values, experiences, and passion for learning will continue to guide my growth as an engineering designer. Through each new challenge, I look forward to finding ways to merge creativity with practicality to make a meaningful difference in the world.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-xs text-center">
          © {new Date().getFullYear()} - All rights reserved.
        </p>
      </footer>
    </div>
  );
}
