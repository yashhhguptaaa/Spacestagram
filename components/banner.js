import Image from "next/image";
const Banner = (props) => {
    return (
      <div>
        <div >
          <Image src="/static/nasa-image.png" width={100} height={100} />
        </div>
        Spacestagram
      </div>
    );
  };
  
export default Banner;