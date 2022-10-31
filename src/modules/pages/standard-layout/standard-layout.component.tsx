import { AppBar, Container, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import HideOnScroll from 'modules/common/components/hide-on-scroll/hide-on-scroll.component';
import { Box, styled } from '@mui/system';
import { ButtonLink } from 'modules/common/components/button-link/button-link.component';

const navMenuOptions = [
  { to: '/', text: 'Home' },
  { to: '/ev-stations', text: 'EV Stations' },
];

const ToolbarFill = styled('div')({ flexGrow: 1});
const PageWrapper = styled('div')((props) => ({ padding: props.theme.spacing(4) }));

export const StandardLayout = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position='sticky'>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ mr: 2 }}>
                EV Station Finder
              </Box>
              <ToolbarFill />
              {navMenuOptions.map((navOption, idx) => (
                // Elements generated as dynamic lists should have a unique `key` property value (often the index)
                // so that React can optimize which DOM elements it updates as state/props change
                <ButtonLink
                  isNavLink
                  key={idx}
                  buttonProps={{color: "secondary"}}
                  sx={{ mr: 2 }}
                  to={navOption.to}
                >
                  {navOption.text}
                </ButtonLink>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <PageWrapper>
        {/* Child route components will be rendered here */}
        <Outlet />
      </PageWrapper>
    </>
  )
}

export default StandardLayout;