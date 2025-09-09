import { Verified } from "lucide-react";

function Header() {
  return (
    <header>
      <div className="flex">
        <h1 className="text-6xl font-['Bungee'] p-5 border-r diagonal-lines">
          YN
        </h1>

        <div className="content-end w-full">
          <div className="flex items-center gap-0.5 py-2">
            <p className="text-3xl font-bold pl-3">Yash Nagrale</p>
            <Verified className="w-6 h-6 text-background fill-blue-500 relative top-[2px]" />
          </div>

          <p className="text-muted-foreground font-mono py-1 text-sm pl-3 border-t w-full">
            Full stack web developer.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
