"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { trackPhoneCall } from "@/lib/gtag";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  AlertTriangle,
  Shield,
  Bug,
  Rat,
  Bird,
  Leaf,
  Home,
  Building2,
  Zap,
  MapPin,
  ArrowRight,
} from "lucide-react";

// ─── Nav data ────────────────────────────────────────────────────

const services = [
  { label: "Rodent Control", slug: "rodent-control", icon: Rat, emergency: false },
  { label: "Termite Treatment", slug: "termite-treatment", icon: Bug, emergency: false },
  { label: "Bed Bug Removal", slug: "bed-bug-treatment", icon: Bug, emergency: false },
  { label: "Cockroach Control", slug: "cockroach-control", icon: Bug, emergency: false },
  { label: "Ant Control", slug: "ant-control", icon: Bug, emergency: false },
  { label: "Wasp & Bee Removal", slug: "wasp-bee-removal", icon: Zap, emergency: true },
  { label: "Spider Control", slug: "spider-control", icon: Bug, emergency: false },
  { label: "Mosquito Control", slug: "mosquito-control", icon: Leaf, emergency: false },
  { label: "Raccoon Removal", slug: "raccoon-removal", icon: Shield, emergency: false },
  { label: "Bat Removal", slug: "bat-removal", icon: Shield, emergency: false },
  { label: "Squirrel Removal", slug: "squirrel-removal", icon: Shield, emergency: false },
  { label: "Skunk Removal", slug: "skunk-removal", icon: Shield, emergency: false },
  { label: "Bird Control", slug: "bird-control", icon: Bird, emergency: false },
  { label: "Flea & Tick Control", slug: "flea-tick-treatment", icon: Bug, emergency: false },
  { label: "Mole & Vole Control", slug: "mole-vole-control", icon: Rat, emergency: false },
  { label: "Commercial Pest Control", slug: "commercial-pest-control", icon: Building2, emergency: false },
];

const locationRegions = [
  {
    region: "Northeast",
    states: ["New York", "New Jersey", "Pennsylvania", "Massachusetts", "Connecticut"],
  },
  {
    region: "Southeast",
    states: ["Florida", "Georgia", "North Carolina", "Virginia", "Tennessee"],
  },
  {
    region: "Midwest",
    states: ["Illinois", "Ohio", "Michigan", "Indiana", "Missouri"],
  },
  {
    region: "Southwest",
    states: ["Texas", "Arizona", "Nevada", "New Mexico", "Oklahoma"],
  },
  {
    region: "West",
    states: ["California", "Colorado", "Washington", "Oregon", "Utah"],
  },
];

// ─── Logo ─────────────────────────────────────────────────────────

function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="PestRemovalUSA, Home"
      className="flex items-center gap-2 shrink-0"
    >
      <div className="flex items-center justify-center w-9 h-9 bg-[var(--color-red)] rounded-lg shadow-sm">
        <Shield size={20} className="text-white" aria-hidden="true" />
      </div>
      {!collapsed && (
        <div className="leading-none">
          <span
            className="block text-xl font-black text-[var(--color-navy)] tracking-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            PestRemoval
            <span className="text-[var(--color-red)]">USA</span>
          </span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--color-slate-custom)] leading-none mt-0.5">
            Licensed · Insured · Nationwide
          </span>
        </div>
      )}
    </Link>
  );
}

// ─── Top Bar ─────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="bg-[var(--color-navy)] text-white py-1.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-4 text-white/70">
          <span className="flex items-center gap-1">
            <AlertTriangle size={11} className="text-[var(--color-red)]" aria-hidden="true" />
            24/7 Emergency Service Available
          </span>
          <span>·</span>
          <span>Licensed & Insured, 50 States + DC</span>
          <span>·</span>
          <span>Free Inspections & Upfront Pricing</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className="text-white/70 hover:text-white transition-colors"
          >
            About
          </Link>
          <span className="text-white/30">|</span>
          <Link
            href="/careers"
            className="text-white/70 hover:text-white transition-colors"
          >
            Careers
          </Link>
          <span className="text-white/30">|</span>
          <Link
            href="/commercial"
            className="text-white/70 hover:text-white transition-colors"
          >
            Commercial
          </Link>
          <span className="text-white/30">|</span>
          <a
            href={siteConfig.phoneTel}
            className="text-white font-semibold flex items-center gap-1 hover:text-[var(--color-red)] transition-colors"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
            onClick={() => trackPhoneCall("header_topbar")}
          >
            <Phone size={11} aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Services Mega-Menu ───────────────────────────────────────────

function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white rounded-[var(--radius-card)] shadow-2xl border border-gray-100 overflow-hidden z-50">
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-4">
          Our Services
        </p>
        <div className="grid grid-cols-2 gap-1">
          {services.map(({ label, slug, icon: Icon, emergency }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[var(--color-muted)] group transition-colors"
            >
              <Icon
                size={16}
                className="text-[var(--color-red)] shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-[var(--color-navy)] group-hover:text-[var(--color-red)] transition-colors">
                {label}
              </span>
              {emergency && (
                <span className="ml-auto text-[9px] font-bold uppercase bg-[var(--color-red)] text-white px-1.5 py-0.5 rounded">
                  24/7
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 bg-[var(--color-muted)] px-6 py-3 flex items-center justify-between">
        <span className="text-xs text-[var(--color-slate-custom)]">
          Same-day service available for all pest types
        </span>
        <Link
          href="/services"
          onClick={onClose}
          className="text-xs font-bold text-[var(--color-red)] hover:underline flex items-center gap-1"
        >
          View All Services
          <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

// ─── Locations Mega-Menu ──────────────────────────────────────────

function LocationsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[640px] bg-white rounded-[var(--radius-card)] shadow-2xl border border-gray-100 overflow-hidden z-50">
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-4">
          Service Locations
        </p>
        <div className="grid grid-cols-3 gap-4">
          {locationRegions.map(({ region, states }) => (
            <div key={region}>
              <p className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-2">
                {region}
              </p>
              <ul className="space-y-1">
                {states.map((state) => {
                  const slug = state.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <li key={state}>
                      <Link
                        href={`/locations/${slug}`}
                        onClick={onClose}
                        className="text-sm text-[var(--color-slate-custom)] hover:text-[var(--color-red)] transition-colors flex items-center gap-1 group"
                      >
                        <MapPin
                          size={11}
                          className="opacity-0 group-hover:opacity-100 text-[var(--color-red)] shrink-0 transition-opacity"
                          aria-hidden="true"
                        />
                        {state}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 bg-[var(--color-muted)] px-6 py-3 flex items-center justify-between">
        <span className="text-xs text-[var(--color-slate-custom)]">
          Serving 50 states + DC · {siteConfig.serviceAreas.citiesCount}+ cities
        </span>
        <Link
          href="/locations"
          onClick={onClose}
          className="text-xs font-bold text-[var(--color-red)] hover:underline flex items-center gap-1"
        >
          View All Locations
          <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────

type MegaMenuType = "services" | "locations" | null;

function NavItem({
  label,
  href,
  megaMenu,
  openMenu,
  onToggle,
  onClose,
  currentPath,
}: {
  label: string;
  href?: string;
  megaMenu?: MegaMenuType;
  openMenu: MegaMenuType;
  onToggle: (m: MegaMenuType) => void;
  onClose: () => void;
  currentPath: string;
}) {
  const isActive = href ? currentPath.startsWith(href) : false;
  const isOpen = megaMenu && openMenu === megaMenu;

  if (megaMenu) {
    return (
      <div className="relative">
        <button
          onClick={() => onToggle(megaMenu)}
          aria-expanded={!!isOpen}
          aria-haspopup="true"
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer",
            isOpen
              ? "text-[var(--color-red)] bg-[var(--color-muted)]"
              : "text-[var(--color-navy)] hover:text-[var(--color-red)] hover:bg-[var(--color-muted)]"
          )}
        >
          {label}
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-200", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>
        {isOpen &&
          (megaMenu === "services" ? (
            <ServicesMegaMenu onClose={onClose} />
          ) : (
            <LocationsMegaMenu onClose={onClose} />
          ))}
      </div>
    );
  }

  return (
    <Link
      href={href!}
      className={cn(
        "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
        isActive
          ? "text-[var(--color-red)]"
          : "text-[var(--color-navy)] hover:text-[var(--color-red)] hover:bg-[var(--color-muted)]"
      )}
    >
      {label}
    </Link>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[var(--color-navy)]">
          <Logo collapsed />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/80 hover:text-white p-1 rounded transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Emergency call strip */}
        <a
          href={siteConfig.phoneTel}
          onClick={() => { onClose(); trackPhoneCall("mobile_drawer_emergency"); }}
          className="flex items-center justify-center gap-2 bg-[var(--color-red)] text-white py-3 font-bold text-sm"
          aria-label={`Call emergency line ${siteConfig.phoneDisplay}`}
        >
          <Phone size={16} aria-hidden="true" />
          <span>24/7 Emergency: {siteConfig.phoneDisplay}</span>
        </a>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Mobile navigation">
          {/* Services accordion */}
          <div>
            <button
              onClick={() =>
                setOpenSection(openSection === "services" ? null : "services")
              }
              aria-expanded={openSection === "services"}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-[var(--color-navy)] rounded-lg hover:bg-[var(--color-muted)] cursor-pointer"
            >
              Services
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200 text-[var(--color-red)]",
                  openSection === "services" && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {openSection === "services" && (
              <div className="pl-4 pb-2">
                {services.map(({ label, slug }) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    onClick={onClose}
                    className="block px-4 py-2.5 text-sm text-[var(--color-slate-custom)] hover:text-[var(--color-red)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm font-bold text-[var(--color-red)] rounded-lg hover:bg-[var(--color-muted)]"
                >
                  All Services →
                </Link>
              </div>
            )}
          </div>

          {/* Locations accordion */}
          <div>
            <button
              onClick={() =>
                setOpenSection(openSection === "locations" ? null : "locations")
              }
              aria-expanded={openSection === "locations"}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-[var(--color-navy)] rounded-lg hover:bg-[var(--color-muted)] cursor-pointer"
            >
              Locations
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200 text-[var(--color-red)]",
                  openSection === "locations" && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {openSection === "locations" && (
              <div className="pl-4 pb-2">
                {locationRegions.map(({ region, states }) => (
                  <div key={region} className="mb-3">
                    <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-navy)]">
                      {region}
                    </p>
                    {states.map((state) => (
                      <Link
                        key={state}
                        href={`/locations/${state.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={onClose}
                        className="block px-4 py-2 text-sm text-[var(--color-slate-custom)] hover:text-[var(--color-red)] rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                      >
                        {state}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/locations"
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm font-bold text-[var(--color-red)] rounded-lg hover:bg-[var(--color-muted)]"
                >
                  All Locations →
                </Link>
              </div>
            )}
          </div>

          {/* Flat links */}
          {[
            { label: "Blog", href: "/blog" },
            { label: "About Us", href: "/about" },
            { label: "Reviews", href: "/reviews" },
            { label: "Contact", href: "/contact" },
            { label: "Commercial", href: "/commercial" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-bold text-[var(--color-navy)] rounded-lg hover:bg-[var(--color-muted)] hover:text-[var(--color-red)] transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Emergency */}
          <div className="px-4 py-2 mt-2">
            <Link
              href="/emergency"
              onClick={onClose}
              className="flex items-center gap-2 text-sm font-bold text-[var(--color-red)] bg-red-50 px-4 py-3 rounded-lg hover:bg-red-100 transition-colors"
            >
              <AlertTriangle size={16} aria-hidden="true" />
              Emergency Service
            </Link>
          </div>
        </nav>

        {/* Drawer footer CTA */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-[var(--color-red)] text-white font-bold text-sm py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
          >
            Get a Free Quote
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="text-center text-xs text-[var(--color-slate-custom)]">
            No obligation · Same-day response
          </p>
        </div>
      </div>
    </>
  );
}

// ─── Main Header ──────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenuType>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega-menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close mega-menu on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleMenu = (menu: MegaMenuType) =>
    setOpenMenu((prev) => (prev === menu ? null : menu));

  return (
    <header className="sticky top-0 z-40 w-full">
      <TopBar />
      <div
        ref={menuRef}
        className={cn(
          "bg-white transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              <NavItem
                label="Services"
                megaMenu="services"
                openMenu={openMenu}
                onToggle={toggleMenu}
                onClose={() => setOpenMenu(null)}
                currentPath={pathname}
              />
              <NavItem
                label="Locations"
                megaMenu="locations"
                openMenu={openMenu}
                onToggle={toggleMenu}
                onClose={() => setOpenMenu(null)}
                currentPath={pathname}
              />
              <NavItem
                label="Blog"
                href="/blog"
                openMenu={openMenu}
                onToggle={toggleMenu}
                onClose={() => setOpenMenu(null)}
                currentPath={pathname}
              />
              <NavItem
                label="Reviews"
                href="/reviews"
                openMenu={openMenu}
                onToggle={toggleMenu}
                onClose={() => setOpenMenu(null)}
                currentPath={pathname}
              />
              <NavItem
                label="About"
                href="/about"
                openMenu={openMenu}
                onToggle={toggleMenu}
                onClose={() => setOpenMenu(null)}
                currentPath={pathname}
              />
            </nav>

            {/* Desktop CTA cluster */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/emergency"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[var(--color-red)] border border-[var(--color-red)] rounded-lg hover:bg-red-50 transition-colors"
                aria-label="24/7 emergency service"
              >
                <AlertTriangle size={13} aria-hidden="true" />
                Emergency
              </Link>
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[var(--color-navy)] bg-[var(--color-muted)] rounded-lg hover:bg-gray-200 transition-colors"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
                onClick={() => trackPhoneCall("header_desktop_cta")}
              >
                <Phone size={13} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-[var(--color-red)] rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
              >
                Get Free Quote
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center justify-center w-9 h-9 bg-[var(--color-red)] rounded-lg text-white"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
                onClick={() => trackPhoneCall("header_mobile_icon")}
              >
                <Phone size={16} aria-hidden="true" />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-[var(--color-navy)] hover:bg-[var(--color-muted)] transition-colors cursor-pointer"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
