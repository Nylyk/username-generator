import { FC, PropsWithChildren } from 'react';
import { Trash2 } from 'lucide-react';

const SavedName: FC<PropsWithChildren<{ onClick: () => void }>> = ({
  children,
  onClick,
}) => {
  return (
    <p
      className="group cursor-pointer -translate-x-8 hover:text-pink  hover:translate-x-0 hover:scale-105 transition-all"
      onClick={onClick}
    >
      <Trash2 className="inline opacity-0 group-hover:opacity-100" /> {children}
    </p>
  );
};

export default SavedName;
