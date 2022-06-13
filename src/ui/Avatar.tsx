import { apiConfig } from "@/services/config";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface AvatarProps {
  username: string;
  size?: number;
  isLink?: boolean;
  image?: string;
  action?: () => void;
}

export const Avatar: FC<AvatarProps> = React.memo(
  ({ username, image, size = "56", isLink, action }) => {
    // const [data, setData] = useState<IMeQuery>();

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response: IMeQuery = await axios.get(
    //         `http://localhost:1337/api/users/${id}`
    //       );

    //       setData(response);
    //     } catch (error) {}
    //   };

    //   if (id) {
    //     fetchData();
    //   }
    // }, [id]);

    const ButtonContent = () => (
      <div
        className={`rounded-full relative overflow-hidden bg-primary ${
          isLink ? "hover:opacity-90" : ""
        }`}
        style={{ width: `${size}px`, height: `${size}px` }}
        onClick={action}
      >
        {image && (
          <Image
            className="z-20"
            src={apiConfig.url.API_URL + image}
            layout="fill"
            alt="avatar"
          />
        )}
        <span
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-2xl"
          aria-hidden={image ? true : false}
        >
          {username.charAt(0).toLocaleUpperCase()}
        </span>
      </div>
    );

    return (
      <>
        {isLink ? (
          <Link href="/" passHref>
            <button role="link">
              <ButtonContent />
            </button>
          </Link>
        ) : (
          <ButtonContent />
        )}
      </>
    );
  }
);
