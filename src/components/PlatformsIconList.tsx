import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import type { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformsIconList = ({ platforms }: Props) => {
  const platformIcons: Record<string, React.ElementType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
  };

  return (
    <div className="flex gap-2">
      {platforms.map((platform) => {
        const Icon = platformIcons[platform.slug];

        if (!Icon) return null;

        return (
          <Icon
            key={platform.id}
            title={platform.name}
            className="text-gray-500 dark:text-gray-100 text-xl"
          />
        );
      })}
    </div>
  );
};

export default PlatformsIconList;
