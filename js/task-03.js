const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryEl = document.querySelector(".gallery");

// const addFoto = images.map((image) => {
//   const fotoList = document.createElement("img");
//   fotoList.src = image.url;
//   fotoList.alt = image.alt;
//   fotoList.width = 640;
//   fotoList.style.display = "grid";
//   fotoList.style.padding = "20px";
//   return fotoList;
// });

// // galleryEl.append(...addFoto);

const galleryEl = document.querySelector(".gallery");
const galleryItemEl = images.map((element) => {
  const fotoList = `<li class = image> <img
src=${element.url} alt=${element.alt}
width = 640px>
</li>`;
  return fotoList;
});
galleryEl.style.listStyle = "none";
galleryEl.style.padding = "50px";

galleryEl.insertAdjacentHTML("beforeend", galleryItemEl.join(""));
