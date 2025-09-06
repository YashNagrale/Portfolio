import { Verified } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center gap-0.5">
      <h1
        className="text-4xl font-['Bungee'] p-5 border-r
            diagonal-lines"
      >
        YN
      </h1>

      <p className="text-3xl font-bold pl-2">Yash Nagrale</p>
      <Verified className="w-6 h-6 text-background fill-blue-500 relative top-[2px]" />
    </header>
  );
}

export default Header;
