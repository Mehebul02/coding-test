import { ChevronDown } from 'lucide-react';

interface NavigationButtonsProps {
    text: string;
    direction: "prev" | "next";
}

const NavigationButtons = ({ text, direction }: NavigationButtonsProps) => {
  return (
    <div>
      <button className="flex-1 flex items-center justify-center cursor-pointer gap-2 px-3 py-2 bg-cyan-100 text-cyan-600 rounded font-semibold text-sm hover:bg-cyan-200 transition">
        <ChevronDown
          size={18}
          className={
            direction === "prev" ? "-rotate-90" : "rotate-90"
          }
        />
        {text}
      </button>
    </div>
  );
};

export default NavigationButtons;
