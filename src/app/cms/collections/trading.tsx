import { buildCollection } from "@firecms/core";
import { TradingEntry } from "@/app/common/types";

export const tradingCollection = buildCollection<TradingEntry>({
    id: "trading",
    path: "trading",
    name: "Trading",
    singularName: "Trading entry",
    icon: "article",
    group: "Content",
    description: "Trading Page Content",
    defaultSize: "l",
    properties: {
        banner: {
            name: "Banner",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                },
                btnTxt1: {
                    name: "Button Text 1",
                    dataType: "string",
                },
                btnLink1: {
                    name: "Button Link 1",
                    dataType: "string",
                    url: true
                },
                btnTxt2: {
                    name: "Button Text 2",
                    dataType: "string",
                },
                btnLink2: {
                    name: "Button Link 2",
                    dataType: "string",
                    url: true
                },
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                }
            },
            expanded: true
        },
    },
});
