"use client";

import { Navbar, Text, Button, Link, Dropdown } from "@nextui-org/react";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";

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
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle className="lg:hidden" aria-label="toggle navigation" />
          <Link href="/">
            <AcademicCapIcon className="mx-4 h-6 w-6 text-blue-800" />
            <Text b color="inherit" hideIn="xs">
              UBC Booster
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content activeColor="primary" hideIn="xs" variant="highlight">
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button auto light ripple={false}>
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
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                // icon={icons.scale}
              >
                Autoscaling
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                // icon={icons.activity}
              >
                Usage Metrics
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
                // icon={icons.flash}
              >
                Production Ready
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
                // icon={icons.server}
              >
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Overcome any challenge with a supporting team ready to respond."
                // icon={icons.user}
              >
                +Supreme Support
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Navbar.Link href="/">Tools</Navbar.Link> */}
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/help-and-feedback">FAQ</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color="primary" href="#">
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
