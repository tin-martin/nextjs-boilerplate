import Image from "next/image";

export default function Experiences() {
  return (
    <div className="p-8 sm:p-20 min-h-screen bg-darkPurple text-offWhite">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-mint">Influential Experiences</h1>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        My journey into engineering design has been shaped by a combination of creative pursuits and technical interests:
      </p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ages 1–12</time>
          <h3 className="text-lg font-semibold text-mint">Creative Foundations</h3>
          <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
            As a child, I immersed myself in creative activities such as playing the violin and drawing. These experiences nurtured my creative thinking and appreciation for aesthetics.
          </p>
          <div className="flex gap-4 mt-4">
            <div>
              <Image
                src="/bear.JPG"
                alt="A bear representing creativity"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">A polar bear I drew with watercolor.</p>
            </div>
            <div>
              <Image
                src="/violin.JPG"
                alt="A violin representing musical creativity"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Me at a young age playing the violin.</p>
            </div>
          </div>
        </li>
        {/* Continue with similar structure for other experiences */}
      </ol>
      <p className="text-sm sm:text-base leading-relaxed mt-4">
        These experiences have taught me to view engineering design as an inherently creative discipline. While it is often seen as objective and structured, my background helps me approach design challenges with out-of-the-box thinking and innovative ideas.
      </p>
    </div>
  );
}
