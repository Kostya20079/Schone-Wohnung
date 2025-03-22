const photos = [
  { name: "Image(1)" },
  { name: "Image(2)" },
  { name: "Image(3)" },
  { name: "Image(4)" },
  { name: "Image(5)" },
  { name: "Image(6)" },
  { name: "Image(7)" },
  { name: "Image(8)" },
  { name: "Image(9)" },
  { name: "Image(10)" },
  { name: "Image(11)" },
  { name: "Image(12)" },
  { name: "Image(13)" },
  { name: "Image(14)" },
  { name: "Image(15)" },
  { name: "Image(16)" },
  { name: "Image(17)" },
  { name: "Image(18)" },
  { name: "Image(19)" },
  { name: "Image(20)" },
  { name: "Image(21)" },
  { name: "Image(22)" },
  { name: "Image(23)" },
  { name: "Image(24)" },
  { name: "Image(25)" },
  { name: "Image(26)" },
  { name: "Image(27)" },
  { name: "Image(28)" },
  { name: "Image(29)" },
  { name: "Image(30)" },
  { name: "Image(31)" },
  { name: "Image(32)" },
  { name: "Image(33)" },
  { name: "Image(34)" },
  { name: "Image(35)" },
  { name: "Image(36)" },
  { name: "Image(37)" },
  { name: "Image(38)" },
  { name: "Image(39)" },
  { name: "Image(40)" },
  { name: "Image(41)" },
  { name: "Image(42)" },
  { name: "Назва фотографії" },
];

const listForItems = document.getElementById("gallery");
// console.log(listForItems);

const photoItem = (photos) => {
  const ulList = document.createElement("ul");
  ulList.classList.add("gallery__list");
  photos.forEach((photo) => {
    const item = document.createElement("li");
    item.classList.add("gallery__item");
    const img = document.createElement("img");
    img.src = `./../img/Gallery/${photo.name}.jpg`;
    img.alt = photo.name;
    item.append(img);
    ulList.append(item);
  });
  return ulList;
};

listForItems.append(photoItem(photos));
