import React from "react";

const MagicButton = ({ title, icon, position, handleCLick, otherClasses }: { title: string; icon: React.ReactNode; position: string; handleCLick?: () => void; otherClasses?: string }) => {
  return (
    // Button code
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000100,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-slate-100 hover:bg-[linear-gradient(90deg,#4F06E0,45%,#0F46E5,55%,#2F46E5)] gap-4 ">
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
