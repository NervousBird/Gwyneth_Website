import { useState, useEffect } from "react";
import Gallery from "~/components/gallery";
import Carousel from "~/components/carousel";
import { gallery } from "~/util/gallery";

export default function Home() {
  const [viewedImage, setViewedImage] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  function handleFocus(e: any) {
    const images = document.querySelectorAll(".image-container");
    const carousel = document.querySelector(".carousel-container");

    if (carousel !== null) {
      carousel.className = "carousel-container";
    }
    images.forEach((img) => {
      if (img == e.target.parentElement) {
        img.className = "image-container focus";
      } else {
        img.className = "image-container";
      }
    });
    console.log(e.target);
    setViewedImage(e.target.src);
    setCount(Number(e.target.name));
  }

  function handleButton(e: any) {
    console.log(e.target, count, viewedImage);
    if (e.target.name === "next") {
      const result = count + 1 > gallery.length - 1 ? 0 : count + 1;
      setCount(result);
    } else {
      const result = count - 1 < 0 ? gallery.length - 1 : count - 1;
      setCount(result);
    }
  }

  useEffect(() => {
    setViewedImage(gallery[count].img);
  }, [count]);

  return (
    <main>
      <section className="sticky">
        <Carousel img={viewedImage} onHandleButton={handleButton} />
      </section>
      <h1>Gwyneth Walton</h1>
      <Gallery gallery={gallery} onHandleFocus={handleFocus} />
      <footer>footer</footer>
    </main>
  );
}
