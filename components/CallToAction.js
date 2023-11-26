// icons
import { BsArrowRight } from "react-icons/bs";

// router
import { useRouter } from "next/router";


const CallToAction = () => {
  // router
  const router = useRouter();

  // handle click
  function handleClick() {
    // go to /contact page
    router.push("/contact");
  }

  return (
      <button
        className="btn rounded-full border border-white/50 max-w-[170px] px-8  flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent"
        onClick={handleClick}
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let's talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>    
  );
};

export default CallToAction;
