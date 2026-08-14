"use client";

import Link from "next/link";
import { useCallback } from "react";
import { REFERRAL_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  "aria-label"?: string;
  // Rastreamento: define o tipo de CTA (cadastro/indicacao/login/link)
  "data-cta-type"?: "cadastro" | "indicacao" | "login" | "link";
  "data-cta-location"?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  "aria-label": ariaLabel,
  "data-cta-type": ctaType,
  "data-cta-location": ctaLocation,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-surface text-text hover:bg-surface/80 border border-white/10",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const handleClick = useCallback(() => {
    if (ctaType && ctaLocation) {
      trackCtaClick(ctaType, typeof children === "string" ? children : "", ctaLocation);
    }
    onClick?.();
  }, [ctaType, ctaLocation, onClick, children]);

  const isExternal = href?.startsWith("http");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel}
        data-cta-type={ctaType}
        data-cta-location={ctaLocation}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </button>
  );
}

// ------------------------------------------------------------
// CTAButton - TODO CTA de cadastro/indicação/ganho do site.
// Centraliza o link de indicação: altere apenas REFERRAL_URL.
// ------------------------------------------------------------
export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ctaType = "cadastro",
  location = "geral",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  ctaType?: "cadastro" | "indicacao";
  location?: string;
}) {
  return (
    <Button
      href={REFERRAL_URL}
      variant={variant}
      size={size}
      className={className}
      aria-label="Cadastre-se na Flambra pelo link de indicação"
      data-cta-type={ctaType}
      data-cta-location={location}
    >
      {children}
    </Button>
  );
}
