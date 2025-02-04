import Head from "next/head";
import Link from "next/link";
import 'animate.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Engineering Design - My Approach</title>
        <meta name="description" content="Explore my position statement on engineering design and my approach to solving real-world challenges." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-darkPurple to-purple-800 text-offWhite">
        {/* Rotating Emoji */}
        <div
          className="text-6xl animate-spin-slow"
        >
          📝
        </div>

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl">
          <h1 className="animate__rubberBand text-2xl sm:text-3xl font-bold text-center sm:text-left text-mint">
            Position Statement: Engineering Design and My Approach
          </h1>

          <section className="text-sm sm:text-baseleading-relaxed">
            <p>
              To me, engineering is the application of the sciences and math to implement and solve real-world challenges and needs. Engineering design, in particular, is a dynamic, iterative, and creative process summarized as:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong className="text-teal">Frame:</strong> Understand the situation.
              </li>
              <li>
                <strong className="text-teal">Diverge:</strong> Come up with lots of ideas.
              </li>
              <li>
                <strong className="text-teal">Represent:</strong> Sketch, report, model, prototype, build, present, etc.
              </li>
              <li>
                <strong className="text-teal">Converge:</strong> Throw some ideas away.
              </li>
            </ul>
            <p className="mt-4">
              This process not only appeals to my logical and analytical abilities but also aligns with my desire to create, make an impact, and satisfy my innate curiosity about how things work.
            </p>
          </section>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              href="/beliefs-and-values"
              className="rounded-full border border-solid border-teal bg-mint text-darkPurple hover:bg-teal hover:text-offWhite text-sm sm:text-base py-2 px-6 sm:py-3 sm:px-8 transition-all duration-300"
            >
              Beliefs and Values
            </Link>
            <Link
              href="/experiences"
              className="rounded-full border border-solid border-teal bg-mint text-darkPurple hover:bg-teal hover:text-offWhite text-sm sm:text-base py-2 px-6 sm:py-3 sm:px-8 transition-all duration-300"
            >
              Experiences
            </Link>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-offWhite mt-6">
            In sum, engineering design is not only a professional pursuit for me but also a personal journey of creativity, collaboration, and impact. As I continue to develop my skills and perspectives, I am excited to further explore how engineering design can transform creative visions into tangible solutions that improve lives. My values, experiences, and passion for learning will continue to guide my growth as an engineering designer. Through each new challenge, I look forward to finding ways to merge creativity with practicality to make a meaningful difference in the world.
          </p>
        </main>
      </div>
    </>
  );
}
