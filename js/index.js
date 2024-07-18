const photos = [
  { name: "Image(1)", width: 100, height: 130 },
  { name: "Image(2)", width: 100, height: 130 },
  { name: "Image(3)", width: 100, height: 130 },
  { name: "Image(4)", width: 100, height: 130 },
  { name: "Image(5)", width: 100, height: 130 },
  { name: "Image(6)", width: 100, height: 130 },
  { name: "Image(7)", width: 100, height: 130 },
  { name: "Image(8)", width: 100, height: 130 },
  { name: "Image(9)", width: 100, height: 130 },
  { name: "Image(10)", width: 100, height: 130 },
  { name: "Image(11)", width: 100, height: 130 },
  { name: "Image(12)", width: 100, height: 130 },
  { name: "Image(13)", width: 100, height: 130 },
  { name: "Image(14)", width: 100, height: 130 },
  { name: "Image(15)", width: 100, height: 130 },
  { name: "Image(16)", width: 100, height: 130 },
  { name: "Image(17)", width: 100, height: 130 },
  { name: "Image(18)", width: 100, height: 130 },
  { name: "Image(19)", width: 100, height: 130 },
  { name: "Image(20)", width: 100, height: 130 },
  { name: "Image(21)", width: 100, height: 130 },
  { name: "Image(22)", width: 100, height: 130 },
  { name: "Image(23)", width: 100, height: 130 },
  { name: "Image(24)", width: 100, height: 130 },
  { name: "Image(25)", width: 100, height: 130 },
  { name: "Image(26)", width: 100, height: 130 },
  { name: "Image(27)", width: 100, height: 130 },
];

const listForItems = document.querySelector(".body");

const photoItem = (photos) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("gallery__list");
  photos.forEach((photo) => {
    const item = document.createElement("li");
    item.classList.add("gallery__item");
    const img = document.createElement("img");
    img.src = `./srs/img/Gallery/${photo.name}.jpeg`;
    img.style.width = `${photo.width}px`;
    img.style.height = `${photo.height}px`;
    item.append(img);
    ulList.append(item);
  });
  return ulList;
};

listForItems.append(photoItem(photos));
