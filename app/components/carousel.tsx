interface Props {
  img: string | null;
  onHandleButton: (e: any) => void;
}

function Carousel({ img, onHandleButton }: Props) {
  function handleClose(e: any) {
    console.log(e.target);
    if (e.target.className === "carousel-container") {
      e.target.className = "carousel-container hidden";
    }
  }

  return (
    <section className="carousel-container hidden" onClick={handleClose}>
      <section className="carousel">
        {/* <button onClick={handleClose}>close</button> */}
        <button name="prev" onClick={onHandleButton}>
          {"<"}
        </button>
        <img src={img || ""} />
        <button name="next" onClick={onHandleButton}>
          {">"}
        </button>
      </section>
    </section>
  );
}

export default Carousel;
