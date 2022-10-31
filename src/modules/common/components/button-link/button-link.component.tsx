import { Button, ButtonProps, styled, StyledComponentProps, Theme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { MUIStyledCommonProps } from "@mui/system";
import React from "react";
import { Link, LinkProps, NavLink } from "react-router-dom";

const RouteLink = styled(Link)({
  textDecoration: 'none'
});

const RouteNavLink = styled(NavLink)({
  textDecoration: 'none'
});

export type ButtonLinkProps = {
  key?: any;
  buttonProps?: ButtonProps;
  isNavLink?: boolean;
}
  // & OverrideProps<ButtonTypeMap<{}, {}>
  & StyledComponentProps
  & LinkProps
  & React.RefAttributes<HTMLAnchorElement>
  & MUIStyledCommonProps<Theme>;

export const ButtonLink = (props: ButtonLinkProps) => {
  const { children, buttonProps, isNavLink, ...linkProps } = props;
  const LinkComponent = isNavLink ? RouteNavLink : RouteLink;
  const navLinkStyles = isNavLink
    ? ({isActive}: any) => ({
        background: isActive
          ? `${blueGrey[400]}`
          : '',
        borderRadius: 6
      })
    : {};
  return (
    <LinkComponent style={navLinkStyles} {...linkProps} >
      <Button {...buttonProps}>
        {children}
      </Button>
    </LinkComponent>
  );
}