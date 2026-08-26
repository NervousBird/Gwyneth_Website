interface Props {
  gallery: { img: string; aspect: string }[];
  onHandleFocus: (e: any) => void;
}

function Gallery({ gallery, onHandleFocus }: Props) {
  return (
    <section>
      <section className="gallery-container">
        {gallery.map((img, idx) => (
          <div className={"image-container"} key={idx}>
            <img
              src={img.img}
              className={img.aspect}
              name={idx}
              onClick={onHandleFocus}
            />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Gallery;
