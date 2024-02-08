import Logo2 from "../../assets/images/logo2.svg";
import footerSections from "./FooterItems";

const Footer = () => {
  return (
    <div className=" w-full bg-[rgb(3,37,65)]">
      <div className=" w-1300px mx-auto flex items-center justify-center ">
        <div className="flex flex-wrap gap-[50px] p-[5em]">
          <div className="relative bottom-8 flex flex-col items-end justify-center gap-10">
            <img
              src={Logo2}
              alt="logo"
              width={130}
              height={94}
              className="hidden lg:block"
            />
            <button className=" whitespace-nowrap rounded bg-white  px-[16px] py-[8px] text-[1.2em] font-bold uppercase text-[rgb(1,180,228)]">
              Join the community
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-white">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-lg font-bold">{section.title}</h2>
                {section.links.map((link, index) => (
                  <p key={index} className="cursor-pointer font-normal">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
