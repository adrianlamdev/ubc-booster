"use client";

import { Navbar, Text, Button, Link, Dropdown } from "@nextui-org/react";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { icons } from "./icons";

const collapseItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Help and Feedback",
    href: "/help-and-feedback",
  },
];

export default function NavbarComp() {
  return (
    <div>
      {/* <Navbar isBordered={isDark} variant="sticky"> */}
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle className="lg:hidden" aria-label="toggle navigation" />
          <Link href="/">
            <AcademicCapIcon className="mx-4 h-6 w-6 text-blue-800" />
            <Text b color="inherit" hideIn="xs">
              UBC Booster
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          activeColor="primary"
          hideIn="xs"
          variant="underline"
          enableCursorHighlight
        >
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
                iconRight={icons.chevron}
              >
                Tools
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="course_notifier"
                showFullDescription
                description="Get notifications for certain courses by text or email."
                icon={icons.scale}
              >
                <Link color="text" href="/tools/course-notifier">
                  Course Notifier
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="gpa_list"
                showFullDescription
                description="Get a yearly updated list of GPA boosters at UBC. "
                icon={icons.activity}
              >
                <Link color="text" href="/tools/gpa-boosters">
                  List of GPA Boosters
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Navbar.Link href="/">Tools</Navbar.Link> */}
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/help-and-feedback">FAQ</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="/sign-in">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color="primary" href="/sign-up">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item.title}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.href}
              >
                {item.title}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
