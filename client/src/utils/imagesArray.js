import JPG from "../assets/images/*.jpg";
import JPEG from "../assets/images/*.jpeg";
import PNG from "../assets/images/*.png";

let objImage = { ...JPG, ...JPEG, ...PNG };

objImage = Object.values(objImage);

// for <img/> tag working with images directly inside project
// imagesArray.find(
//   (img) => props.value === `./src/assets/images${img.replace(/\..*\./, ".")}`
// );

export default objImage;
