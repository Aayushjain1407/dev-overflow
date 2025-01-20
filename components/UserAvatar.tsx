import ROUTES from "@/constants/routes";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AvatarFallback } from "./ui/avatar";

interface Props{
  id:string;
  name:string;
  imgUrl?:string | null;
  className?:string;

}
const UserAvatar = ({ id, name, imgUrl, className = "h-9 w-9" }: Props) => {
  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={name}
            width={36}
            height={36}
            quality={100}
            className="rounded-full"
          />
        ) : (
          <div className="w-full h-full bg-primary-500 rounded-full">
            <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white"></AvatarFallback>
            {initials}
          </div>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
