import { Pathnames } from "next-intl/navigation"

export const locales = ["en", "pt-BR"] as const

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    "pt-BR": "/pathname",
  },
} satisfies Pathnames<typeof locales>

export type AppPathnames = keyof typeof pathnames
