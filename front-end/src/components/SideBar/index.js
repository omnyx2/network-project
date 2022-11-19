import { useEffect, useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons";
import { useRecoilState } from "recoil";
import { mapActiveSubComponent } from "../../recoils/RecoilsList.tsx";
import { MantineLogo } from "@mantine/ds";

import { Link } from "react-router-dom";
import { mainRoutesList, mainRoutesListArray } from "../../RouteManifast";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },
}));

function makeUrl(mainIdx, idx) {
  return (
    mainRoutesListArray[mainIdx].link +
    mainRoutesListArray[mainIdx].subPages[idx].link
  );
}

// <Link to={`/`} className="link">Profile</Link>
export function DoubleNavbar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("맵");
  // 현재 선택된 라우팅 객체 지정
  const [activeNavItem, setActiveItem] = useState(mainRoutesListArray[0]);
  const [activeMainRoute, setAtiveMainRoute] = useState(mainRoutesListArray[0]);

  // 현재 선택된 서브 라우팅 객체 기억
  const [activeSubPageUrls, setActiveSubPageUrls] = useState([
    makeUrl(0, 0),
    makeUrl(1, 0),
    makeUrl(2, 0),
    makeUrl(3, 0),
    makeUrl(4, 0),
    makeUrl(5, 0),
  ]);

  const baseUrl = "localhost:3000";
  const mainLinks = mainRoutesListArray.map((navItem, idx) => (
    <Tooltip
      label={navItem.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={navItem.label}
    >
      <UnstyledButton
        onClick={() => {
          setActive(navItem.label);
          setActiveItem(navItem);
        }}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: navItem.label === active,
        })}
      >
        <Link
          to={`${activeSubPageUrls[idx]}`}
          className={cx(classes.mainLink, {
            [classes.mainLinkActive]: navItem.label === active,
          })}
        >
          <navItem.icon stroke={1.5} />
        </Link>
      </UnstyledButton>
    </Tooltip>
  ));

  const links = activeNavItem.subPages.map((link, idx) => (
    <Link
      to={makeUrl(mainRoutesListArray.indexOf(activeNavItem), idx)}
      className={cx(classes.link, {
        [classes.linkActive]:
          activeSubPageUrls[mainRoutesListArray.indexOf(activeNavItem)] ===
          makeUrl(mainRoutesListArray.indexOf(activeNavItem), idx),
      })}
      onClick={(event) => {
        // 1. 현재 메인 링크 찾기
        // 2. 메인 링크의 서브링크 찾기
        // 3. 메인 링크의 서브링크 변경하기

        let mainIdx = mainRoutesListArray.indexOf(activeNavItem);
        let newActiveSubPageUrls = [...activeSubPageUrls];
        newActiveSubPageUrls[mainIdx] = makeUrl(mainIdx, idx);
        setActiveSubPageUrls(newActiveSubPageUrls);
        // event.preventDefault();
      }}
      key={link.key}
    >
      {link.label}
    </Link>
  ));

  return (
    <Navbar height={750} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {links}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
