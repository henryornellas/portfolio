import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const keywords = [];

  for (let i = 0; i < 29; i++) {
    keywords.push(t(`metaData.keywords.${i}`));
  }

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),

    authors: {
      name: t("metaData.authors.name"),
    },
    robots: "all",
    keywords,
    icons: {
      icon: {
        url: "./assets/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      other: {
        url: "./assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren<Props>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
