import * as React from 'react';
import { useLayer, useHover, Arrow } from 'react-laag';
import { motion, AnimatePresence } from 'framer-motion';
import { FC, memo } from 'react';

type Props = {
  bgColor?: any;
  text: any;
  placement?:
    | 'top-start'
    | 'top-center'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'bottom-end'
    | 'right-start'
    | 'right-center'
    | 'right-end'
    | 'left-start'
    | 'left-center'
    | 'left-end'
    | 'center';

  children: any;
  borderColor?: any;
  className?: string;
  triggerOffset?: number;
};
const Tooltip: FC<Props> = (props) => {
  const {
    children,
    text,
    className,
    triggerOffset = 10,
    placement = 'top-center',
    bgColor = '#48BB78',
    borderColor = '#48BB78'
  } = props;
  // We use `useHover()` to determine whether we should show the tooltip.
  // Notice how we're configuring a small delay on enter / leave.
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  // Tell `useLayer()` how we would like to position our tooltip
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement,
    triggerOffset // small gap between wrapped content and the tooltip
  });

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span className="tooltip-text-wrapper" {...triggerProps} {...hoverProps}>
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps
    });
  }

  // We're using framer-motion for our enter / exit animations.
  // This is why we need to wrap our actual tooltip inside `<AnimatePresence />`.
  // The only thing left is to describe which styles we would like to animate.
  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <motion.div
              className="tooltip-box z-150"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              <div
                className={
                  className ||
                  'flex justify-center items-center text-white  w-auto rounded-sm p-2 bg-purplee-500  text-sm shadow-sm '
                }
              >
                {text}
              </div>
              <Arrow
                {...arrowProps}
                backgroundColor={bgColor}
                borderColor={borderColor}
                borderWidth={1}
                size={6}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
function isReactText(children: any) {
  return ['string', 'number', 'any'].includes(typeof children);
}
export default memo(Tooltip);
