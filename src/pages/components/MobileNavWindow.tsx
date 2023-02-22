import Image from "next/image";

type Props = {
  menuVisible: boolean;
  setMenuVisible: (menuVisible: boolean) => void;
};

export default function MobileNavWindow({
  menuVisible,
  setMenuVisible,
}: Props) {
  return (
    <div className="absolute top-0 right-0 h-screen  w-3/4  flex-col bg-white  text-2xl text-gray-600 shadow-[0px_0px_1px_5000px_rgba(0,0,0,0.4)] md:hidden">
      <div className="mx-6 mt-6 mb-40 flex justify-end">
        {menuVisible && (
          <Image
            height={32}
            width={56}
            src={"/icon-menu-close.svg"}
            className="h-10 w-10 self-end md:hidden"
            alt="Close button for burger"
            onClick={() => setMenuVisible(!menuVisible)}
          />
        )}
      </div>
      <div className="ml-8 space-y-8">
        <div className="hover:text-orange-400">All</div>
        <div className="hover:text-orange-400">Coding</div>
        <div className="hover:text-orange-400">Football</div>
        <div className="hover:text-orange-400">Cooking</div>
      </div>
    </div>
  );
}
