interface AvatarProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

export default function Avatar({ color = "#aa3399", size = "md", className = "" }: AvatarProps) {
  return (
    <div
      className={`rounded-full border-2 border-auburn ${sizeStyles[size]} ${className}`}
      style={{
        background: color,
        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 100%)",
      }}
    />
  );
}
