"use client"

import { Navbar, Text, Button, Link } from "@nextui-org/react"
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon"

const collapseItems = ["Features", "Pricing", "Help and Feedback"]

export default function NavbarComp() {
  return (
    <div>
        {/* <Navbar isBordered={isDark} variant="sticky"> */}
        <Navbar variant="sticky">
        <Navbar.Brand>
        <Navbar.Toggle className="lg:hidden" aria-label="toggle navigation" />
            <AcademicCapIcon className="mx-4 h-6 w-6 text-blue-800" />
          <Text b color="inherit" hideIn="xs">
            UBC Booster
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="primary" hideIn="xs" variant="highlight">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
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
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}