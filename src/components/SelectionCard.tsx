
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SelectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const SelectionCard = ({
  title,
  description,
  icon,
  onClick,
  className,
}: SelectionCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-health-50 to-health-100 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-full bg-health-100 p-3 text-health-600">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default SelectionCard;
