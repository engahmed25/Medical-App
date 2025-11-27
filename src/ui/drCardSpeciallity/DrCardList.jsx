import DrCardModel from "./DrCardModel";

const drSpeciallityImages = import.meta.glob(
  "../../assets/DrSpecialityImgs/*.png",
  { eager: true }
);

function DrCardList() {
  const items = Object.entries(drSpeciallityImages).map(([imgPath, file]) => {
    const fileName = imgPath.split("/").pop().replace(".png", "");
    const title = fileName.charAt(0).toUpperCase() + fileName.slice(1);

    return {
      img: file.default,
      title: title,
    };
  });

  return (
    <section
      className="grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-4
        m-6"
    >
      {items.map((item, index) => (
        <DrCardModel
          key={index}
          img={item.img}
          drSpeciallityTitle={item.title}
        />
      ))}
    </section>
  );
}

export default DrCardList;
