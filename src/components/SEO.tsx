import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
}) => {
  useEffect(() => {
    // Title with brand
    document.title = `${title} | MA Bau GmbH – Photovoltaik Berlin`;

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

    // Keywords
    const defaultKeywords =
      "Photovoltaik Berlin, Solaranlage, PV-Anlage, Solarmontage, MA Bau GmbH";
    updateMetaTag(
      "meta[name='keywords']",
      "name",
      "keywords",
      keywords || defaultKeywords
    );

    // OpenGraph tags
    updateMetaTag(
      "meta[property='og:title']",
      "property",
      "og:title",
      `${title} | MA Bau GmbH`
    );
    updateMetaTag(
      "meta[property='og:description']",
      "property",
      "og:description",
      description
    );
    updateMetaTag("meta[property='og:type']", "property", "og:type", "website");
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
    }
    if (image) {
      updateMetaTag("meta[property='og:image']", "property", "og:image", image);
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
      `${title} | MA Bau GmbH`
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

    // Robots
    updateMetaTag("meta[name='robots']", "name", "robots", "index, follow");
  }, [title, description, url, image, keywords]);

  return null;
};
