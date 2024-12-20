import { useHover } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

const Name: FC<
  PropsWithChildren<{ position: number; onClick: () => void }>
> = ({ children, position, onClick }) => {
  const spanRef = useRef<HTMLSpanElement>();
  const [hoverRef, isHovered] = useHover<HTMLSpanElement>();

  useEffect(() => {
    if (spanRef.current) {
      const yOffset = position * 48;
      let opacityAndScale = (1 - Math.abs(position)) * 0.65 + 0.35;

      if (position === 0) {
        opacityAndScale += 0.25;
      }
      if (isHovered) {
        opacityAndScale += 0.125;
      }

      const span = spanRef.current;
      span.style.transform = `translate(-50%, ${yOffset}vh) scale(${opacityAndScale})`;
      span.style.opacity = opacityAndScale.toString();
    }
  }, [position, spanRef, isHovered]);

  return (
    <div
      className={clsx(
        'group fixed top-[42%] left-1/2 text-[6vh] hover:text-pink cursor-pointer transition-all duration-200',
        position === 0 && 'text-pink',
      )}
      ref={(element) => {
        spanRef.current = element ?? undefined;
        hoverRef(element);
      }}
      onClick={onClick}
    >
      <span
        className={clsx(
          'opacity-0 transition text-[5vh]',
          position === 0 && 'group-hover:opacity-100',
        )}
      >
        +{' '}
      </span>
      {children}
    </div>
  );
};

export default Name;
