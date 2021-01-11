import JPG from "../assets/images/*.jpg";
import JPEG from "../assets/images/*.jpeg";
import PNG from "../assets/images/*.png";

let objImage = { ...JPG, ...JPEG, ...PNG };

objImage = Object.values(objImage);

export default objImage;
