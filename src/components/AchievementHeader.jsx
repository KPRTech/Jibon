import React from "react";

const AchievementHeader = ({
  achiveHeader,
  achiveDescription,
  className,
  classDesp,
}) => {
  return (
    <div>
      <div className="text-center pt-[30px]">
        <div
          className={`text-[26px] text-[#333333] uppercase font-bold tracking-[1px] font-mont mb-[10px] ${className}`}
        >
          {achiveHeader}
        </div>
        <em
          className={`text-[#999999] font-play leading-[16px] italic mb-[10px] ${classDesp}`}
        >
          {achiveDescription}
        </em>
        <div className='w-px h-[35px] bg-[#dddddd] relative my-[10px] mx-auto after:content:"" after:block after:absolute after:w-[11px] after:h-[11px] after:rounded-[50%] after:top-full after:-left-[5px] after:border-2 after:border-solid after:border-[#ff6400]'></div>
      </div>
    </div>
  );
};

export default AchievementHeader;
