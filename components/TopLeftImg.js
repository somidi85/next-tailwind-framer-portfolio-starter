// next image
import Image from "next/image";


const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[2px] xl:w-[480px] opacity-50">
    <Image src='/top-left-img.png' width={400} height={480} alt='' />
    </div>;
};

export default TopLeftImg;
