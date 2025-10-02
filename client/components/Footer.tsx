import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-0 py-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 gap-6">
      <div className="flex flex-col justify-center items-center md:items-start gap-3 md:ml-24">
        <h3 className="text-gray-600 font-sora text-[40px] font-bold leading-normal">
          Matt Lee
        </h3>
        <p className="text-gray-600 text-base font-normal">303-725-8828</p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <SocialLinks />
      </div>

      <div className="flex flex-col justify-center items-center md:items-end md:mr-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1fc2cce7a1d4b0c9a0a00d7e897f2e412c1b1ef7?width=616"
          alt="VerityAscent Logo"
          className="w-[308px] h-[78px]"
        />
      </div>
    </footer>
  );
}
