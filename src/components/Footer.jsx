import { frontendTechStack, backend } from "../constants";
const Footer = () => {
  return (
    <footer className="pt-20 border-t-[1px] border-orange-600 bg-gradient-to-b from-[#F1F8E8] to bg-[#D8EFD3] py-10 font-mono">
      <div className="flex flex-row justify-around gap-4">
        <div>
          <h3 className="text-md mx-2 font-semibold mb-4">
            Front-end Tech Stack
          </h3>
          <ul className="space-y-2 ml-2">
            {frontendTechStack.map((link, index) => (
              <li key={index}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Back-end Tech Stack</h3>
          <ul className="space-y-2 ">
            {backend.map((link, index) => (
              <li key={index}>{link.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
