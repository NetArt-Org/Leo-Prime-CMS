import { buildCollection } from "@firecms/core";
import { CTAEntry } from "@/app/common/types";

export const ctaCollection = buildCollection<CTAEntry>({
    id: "cta",
    path: "cta",
    name: "CTA",
    singularName: "CTA entry",
    icon: "article",
    group: "Content",
    description: "CTA Page Content",
    defaultSize: "l",
    properties: {
        cta: {
            name: "CTA",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                btnTxt: {
                    name: "Button Text",
                    dataType: "string",
                },
                btnLink: {
                    name: "Button Link",
                    dataType: "string",
                    url: true
                },
            },
            expanded: true
        }
    },
});
