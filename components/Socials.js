//links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,  
  RiDribbbleLine,
  RiPinterestLine,
  RiFacebookLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-5 text-xl ">
      <Link href={"https://www.linkedin.com/company/eliyach/?viewAsMember=true"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>    
  );
};

export default Socials;
