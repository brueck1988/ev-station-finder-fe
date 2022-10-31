import { Slide, useScrollTrigger } from '@mui/material';

interface HideOnScrollProps {
  children: React.ReactElement;
}

export const HideOnScroll = ({ children }: HideOnScrollProps) => {
  const trigger = useScrollTrigger();
    
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;