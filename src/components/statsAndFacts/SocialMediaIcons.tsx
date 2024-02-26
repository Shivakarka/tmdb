import { Facebook, HomePage, Instagram, Twitter } from "../../utils/svgs";

type SocialMediaIconsProps = {
  facebook_id: string | null;
  twitter_id: string | null;
  instagram_id: string | null;
  homepage: string | null;
};

const SocialMediaIcons = ({
  facebook_id,
  twitter_id,
  instagram_id,
  homepage,
}: SocialMediaIconsProps) => {
  return (
    <div className="flex items-center gap-4">
      {facebook_id && (
        <a href={`https://www.facebook.com/${facebook_id}`} target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
      )}
      {twitter_id && (
        <a href={`https://twitter.com/${twitter_id}`} target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
      )}
      {instagram_id && (
        <a href={`https://instagram.com/${instagram_id}`} target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
      )}
      {homepage && (
        <>
          <div className="h-[25px] w-[1px] bg-gray-400"></div>
          <a href={`${homepage}`} target="_blank">
            <img src={HomePage} alt="homepage" />
          </a>
        </>
      )}
    </div>
  );
};

export default SocialMediaIcons;
