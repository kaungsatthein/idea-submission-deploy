"use client";

import dynamic from "next/dynamic";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";

const AntCard = dynamic(() => import("antd").then((mod) => mod.Card), {
  ssr: false,
});

const PostBox = () => {
  const handleCardClick = () => {
    alert("Opening post modal");
  };

  const handleMediaUpload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event
    alert("Opening media upload");
  };

  const handleAttachment = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event
    alert("Opening attachment");
  };

  return (
    <AntCard
      onClick={handleCardClick}
      className="cursor-pointer rounded-2xl shadow-[0px_5px_24px_0px_#0000000D]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size={40}>U</Avatar>
          <span className="text-body-xl opacity-50">
            What do you want to share?
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            icon="wrapper"
            label="Upload Media"
            rounded
            className="text-primary"
            onClick={handleMediaUpload}
          />
          <Button icon="paperclip" rounded onClick={handleAttachment} />
        </div>
      </div>
    </AntCard>
  );
};

export default PostBox;
