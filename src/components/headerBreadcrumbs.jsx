//
"use client";
import { isString } from "lodash";
import PropTypes from "prop-types";
import NextLink from "next/link";

// mui
import {
  Box,
  Link,
  Button,
  Stack,
  Typography,
  useTheme,
  Container,
  Grid,
} from "@mui/material";
import { IoMdAdd } from "react-icons/io";

// components
import { MBreadcrumbs } from "./@material-extend";
import { createGradient } from "src/theme/palette";

export default function HeaderBreadcrumbs({ ...props }) {
  const {
    links,
    action,
    icon,
    heading,
    moreLink = "" || [],
    sx,
    admin,
    ...other
  } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        ...(admin && {
          mb: 3,
          height: "100px",
        }),
        ...(!admin && {
          p: 3,
          mt: 3,
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.dark
              : theme.palette.primary.main,
          position: "relative",
          overflow: "hidden",
          height: "300px",
          background:
            theme.palette.mode === "light"
              ? createGradient(
                  theme.palette.primary.light,
                  theme.palette.background.default,
                )
              : createGradient(
                  theme.palette.primary.dark,
                  theme.palette.background.default,
                ),

          borderRadius: "0px",
        }),
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          ...(!admin && {
            "&:before": {
              content: "''",
              position: "absolute",
              bottom: "-30%",
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main,
              height: { xs: 60, md: 80 },
              width: { xs: 60, md: 80 },
              borderRadius: "8px",
              zIndex: 0,
            },
          }),
        }}
      >
        {admin ? (
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textTransform: "capitalize",
                width: "80vw",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main,
              }}
              noWrap
            >
              {heading}
            </Typography>

            <MBreadcrumbs icon={icon} admin={admin} links={links} {...other} />
          </Box>
        ) : (
          <Container maxWidth="xl">
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Grid
                container
                md={12}
                alignItems={"center"}
                style={{
                  height: admin ? "100px" : "250px",
                }}
              >
                <Grid item md={3}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      textTransform: "capitalize",
                      width: "80vw",
                      color:
                        theme.palette.mode === "light"
                          ? theme.palette.primary.dark
                          : theme.palette.primary.main,
                    }}
                    noWrap
                  >
                    {heading}
                  </Typography>
                  <MBreadcrumbs
                    icon={icon}
                    admin={admin}
                    links={links}
                    {...other}
                  />
                </Grid>
                <Grid item md={9}>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      "-webkit-text-stroke-width": "2px",
                      "-webkit-text-stroke-color":
                        theme.palette.mode === "light"
                          ? theme.palette.primary.dark
                          : theme.palette.primary.main,
                      "-webkit-text-fill-color": "transparent",
                      fontSize: "90px",
                      position: "relative",
                      textAlign: "right",
                      color:
                        theme.palette.mode === "light"
                          ? theme.palette.primary.dark
                          : theme.palette.primary.main,
                      right: "0px",
                    }}
                  >
                    {heading}
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )}

        {action ? (
          action.href ? (
            <>
              <Box
                sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}
              >
                <Button
                  variant="contained"
                  color={
                    theme.palette.mode === "light"
                      ? theme.palette.primary.dark
                      : theme.palette.primary.main
                  }
                  component={NextLink}
                  href={action.href}
                  startIcon={
                    action.icon ? (
                      action.icon
                    ) : (
                      <IoMdAdd
                        size={20}
                        color={
                          theme.palette.mode === "light"
                            ? theme.palette.primary.dark
                            : theme.palette.primary.main
                        }
                      />
                    )
                  }
                >
                  {action.title}
                </Button>
              </Box>
            </>
          ) : (
            action
          )
        ) : null}
      </Stack>

      <Box>
        {isString(moreLink) ? (
          <Link
            href={moreLink}
            target="_blank"
            variant={"body2"}
            sx={{
              color:
                theme.palette.mode === "light"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main,
            }}
          >
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant={"body2"}
              target="_blank"
              sx={{
                display: "table",
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.dark
                    : theme.palette.primary.main,
              }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
HeaderBreadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.node,
    }),
  ).isRequired,
  action: PropTypes.oneOfType([
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.node,
    }),
    PropTypes.node,
  ]),
  icon: PropTypes.node,
  heading: PropTypes.string,
  moreLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  sx: PropTypes.object,
  admin: PropTypes.bool,
  isUser: PropTypes.bool,
};
