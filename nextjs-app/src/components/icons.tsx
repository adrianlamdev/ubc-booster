import React from "react";

const ChevronDownIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

const TagUserIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

const ServerIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

const FlashIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

const ActivityIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      data-name="Iconly/Curved/Activity"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

const ScaleIcon = ({ fill, size, width = 24, height = 24, ...props }: { fill: string; size?: number; width?: number; height?: number }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Path data here */}
    </svg>
  );
};

export const icons = {
  chevron: <ChevronDownIcon fill="currentColor" size={16} />,
  scale: <ScaleIcon fill="var(--nextui-colors-warning)" size={30} />,
  activity: <ActivityIcon fill="var(--nextui-colors-secondary)" size={30} />,
  flash: <FlashIcon fill="var(--nextui-colors-primary)" size={30} />,
  server: <ServerIcon fill="var(--nextui-colors-success)" size={30} />,
  user: <TagUserIcon fill="var(--nextui-colors-error)" size={30} />,
};
