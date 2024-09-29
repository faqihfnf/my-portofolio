"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 cursor-pointer max-w-7xl mx-auto gap-4 relative  ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "mx-auto md:mx-0 relative w-[200px] h-[175px] lg:w-[290px] lg:h-[200px] md:w-[225px] md:h-[175px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden w-full h-full",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-[500px] w-[700px] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-lg h-full w-full"
                : "bg-white rounded-lg h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      {/* Overlay to detect clicks outside of the selected card */}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-transparent z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          style={{
            pointerEvents: selected ? "auto" : "none",
          }}
        />
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return <motion.img layoutId={`image-${card.id}-image`} src={card.thumbnail} height="500" width="500" className={cn("object-cover object-top absolute inset-0 h-full w-full transition duration-200")} alt="thumbnail" />;
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
