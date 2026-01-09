import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
  type = "website",
}) => {
  useEffect(() => {
    // Optimized title with brand for better ranking
    const fullTitle = `${title} | MA Bau GmbH – Photovoltaik & Bau Dresden`;
    document.title = fullTitle;

    // Helper function to create or update meta tags
    const updateMetaTag = (
      selector: string,
      attrName: string,
      attrValue: string,
      content: string
    ) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag(
      "meta[name='description']",
      "name",
      "description",
      description
    );

    // Enhanced keywords with brand name for better ranking
    const defaultKeywords =
      "MA Bau, MA Bau GmbH, MA Bau Dresden, Photovoltaik Dresden, Solaranlage Dresden, PV-Anlage, Solarmontage, Photovoltaik Berlin, Solaranlage Deutschland, Photovoltaik Montage, Freifläche Solar, Dachmontage Solar, Industriedach Solar, Gewerbedach Solar";
    updateMetaTag(
      "meta[name='keywords']",
      "name",
      "keywords",
      keywords || defaultKeywords
    );

    // Author and brand
    updateMetaTag("meta[name='author']", "name", "author", "MA Bau GmbH");
    updateMetaTag("meta[name='publisher']", "name", "publisher", "MA Bau GmbH");

    // OpenGraph tags
    updateMetaTag(
      "meta[property='og:title']",
      "property",
      "og:title",
      fullTitle
    );
    updateMetaTag(
      "meta[property='og:description']",
      "property",
      "og:description",
      description
    );
    updateMetaTag("meta[property='og:type']", "property", "og:type", type);
    updateMetaTag(
      "meta[property='og:locale']",
      "property",
      "og:locale",
      "de_DE"
    );
    updateMetaTag(
      "meta[property='og:site_name']",
      "property",
      "og:site_name",
      "MA Bau GmbH"
    );

    if (url) {
      updateMetaTag("meta[property='og:url']", "property", "og:url", url);
      // Canonical URL
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }

    if (image) {
      updateMetaTag("meta[property='og:image']", "property", "og:image", image);
      updateMetaTag(
        "meta[property='og:image:alt']",
        "property",
        "og:image:alt",
        title
      );
    }

    // Twitter Card tags
    updateMetaTag(
      "meta[name='twitter:card']",
      "name",
      "twitter:card",
      "summary_large_image"
    );
    updateMetaTag(
      "meta[name='twitter:title']",
      "name",
      "twitter:title",
      fullTitle
    );
    updateMetaTag(
      "meta[name='twitter:description']",
      "name",
      "twitter:description",
      description
    );
    if (image) {
      updateMetaTag(
        "meta[name='twitter:image']",
        "name",
        "twitter:image",
        image
      );
    }

    // Robots - ensure indexing
    updateMetaTag(
      "meta[name='robots']",
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    updateMetaTag(
      "meta[name='googlebot']",
      "name",
      "googlebot",
      "index, follow"
    );

    // Language
    updateMetaTag(
      "meta[http-equiv='content-language']",
      "http-equiv",
      "content-language",
      "de"
    );
  }, [title, description, url, image, keywords, type]);

  return null;
};
