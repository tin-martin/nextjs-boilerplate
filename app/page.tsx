import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

export default function Home() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Emoji Texture
    const emojiCanvas = document.createElement("canvas");
    emojiCanvas.width = 256;
    emojiCanvas.height = 256;
    const ctx = emojiCanvas.getContext("2d");
    ctx.font = "200px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("📝", emojiCanvas.width / 2, emojiCanvas.height / 2);
    const texture = new THREE.CanvasTexture(emojiCanvas);

    // Geometry and Material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-darkPurple text-offWhite">
      {/* 3D Rotating Emoji */}
      <div
        ref={mountRef}
        className="w-full h-40 sm:h-60"
        style={{ position: "relative" }}
      />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-mint">
          Position Statement: Engineering Design and My Approach
        </h1>

        <section className="text-sm sm:text-base max-w-2xl leading-relaxed">
          <p>
            To me, engineering is the application of the sciences and math to
            implement and solve real-world challenges and needs. Engineering
            design, in particular, is a dynamic, iterative, and creative process
            summarized as:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Frame:</strong> Understand the situation.
            </li>
            <li>
              <strong>Diverge:</strong> Come up with lots of ideas.
            </li>
            <li>
              <strong>Represent:</strong> Sketch, report, model, prototype, build,
              present, etc.
            </li>
            <li>
              <strong>Converge:</strong> Throw some ideas away.
            </li>
          </ul>
          <p className="mt-4">
            This process not only appeals to my logical and analytical abilities
            but also aligns with my desire to create, make an impact, and satisfy
            my innate curiosity about how things work.
          </p>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/beliefs-and-values"
            className="rounded-full border border-solid border-teal bg-mint text-darkPurple hover:bg-teal hover:text-offWhite text-sm sm:text-base py-2 px-6 sm:py-3 sm:px-8"
          >
            Beliefs and Values
          </Link>
          <Link
            href="/experiences"
            className="rounded-full border border-solid border-teal bg-mint text-darkPurple hover:bg-teal hover:text-offWhite text-sm sm:text-base py-2 px-6 sm:py-3 sm:px-8"
          >
            Experiences
          </Link>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-offWhite">
          In sum, engineering design is not only a professional pursuit for me but
          also a personal journey of creativity, collaboration, and impact. As I
          continue to develop my skills and perspectives, I am excited to further
          explore how engineering design can transform creative visions into tangible
          solutions that improve lives. My values, experiences, and passion for
          learning will continue to guide my growth as an engineering designer.
          Through each new challenge, I look forward to finding ways to merge
          creativity with practicality to make a meaningful difference in the world.
        </p>
      </main>
    </div>
  );
}
