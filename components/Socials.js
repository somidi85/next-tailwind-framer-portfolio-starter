//links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,  
  RiDribbbleLine,
  RiPinterestLine,
  RiFacebookLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 text-xl ">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
    </div>    
  );
};

export default Socials;
