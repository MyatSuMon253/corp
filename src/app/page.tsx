import Image from "next/image";
import homeImg from "/public/home.jpg";

console.log(homeImg);
export default function Home() {
  return (
    <div>
      Home page
      {/* <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      {/* image size is equal to imported image  */}
      {/* <div>
        <Image src={homeImg} alt="car factory" />
        <div>Buy our product</div>
      </div> */}
      {/* image size will be given width and height */}
      {/* <div>
        <Image src={homeImg} alt="car factory" width={400} height={400} />
        <div>Buy our product</div>
      </div> */}
      {/* image will expand to fill up the parent element */}
      <div>
        <Image src={homeImg} alt="car factory" fill />
        <div>Buy our product</div>
      </div>
    </div>
  );
}
