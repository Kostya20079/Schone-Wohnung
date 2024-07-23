const facilities = [
  { name: "facility(1)", text: "Künstlerisches Design & Malerarbeiten" },
  { name: "facility(2)", text: "Trockenbauarbeiten" },
  { name: "facility(3)", text: "Renovierungsarbeiten" },
  { name: "facility(4)", text: "Bodenverlegen" },
  { name: "facility(5)", text: "Treppenrenovierung" },
  { name: "facility(6)", text: "Fliesen verlegen" },
];

const body = document.getElementById("facilities-body");

const createCard = (facilitiesData) => {
  const facilitiesList = document.createElement("div");
  facilitiesList.classList.add("facilities__list", "wow", "animate__animated", "animate__fadeIn", "animate__faster" );
  
  facilitiesData.forEach((facilityData) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("facilities__list-item");

    const itemImg = document.createElement("div");
    itemImg.classList.add("facilities__list-item-img");
    const img = document.createElement("img");
    img.src = `./../img/WebPhotos/${facilityData.name}.jpg`;
    img.alt = facilityData.text;

    // card info
    const itemInfo = document.createElement("div");
    itemInfo.classList.add("facilities__list-item-info");
    const text = document.createElement("h4");
    text.classList.add("facilities__list-item-text");
    text.textContent = facilityData.text;

    itemImg.append(img);
    itemInfo.append(text);

    itemCard.append(itemImg, itemInfo);
    facilitiesList.append(itemCard)
  });
  return facilitiesList;
};

body.append(createCard(facilities));
