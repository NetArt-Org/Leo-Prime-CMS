import { buildCollection } from "@firecms/core";
import { MarginEntry } from "@/app/common/types";

export const marginCollection = buildCollection<MarginEntry>({
    id: "marginRules",
    path: "marginRules",
    name: "Margin",
    singularName: "Margin Rules entry",
    icon: "article",
    group: "Content",
    description: "Margin Rules Page Content",
    defaultSize: "l",
    properties: {
        banner: {
            name: "Banner",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                    multiline: true,
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline: true,
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
        info: {
            name: "Info Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
                },
            },
            expanded: true
        },
        rulesTable: {
            name: "Rules Table Section",
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
                list: {
                    name: "Rules",
                    dataType: "string",
                    markdown:true
                },
            },
            expanded: true
        },
        margin: {
            name: "Margin Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
                },
            },
            expanded: true
        },
        leverage: {
            name: "Leverage Section",
            dataType: "map",
            properties: {
                heading: {
                    name: "Heading",
                    dataType: "string",
                },
                content: {
                    name: "Content",
                    dataType: "string",
                    multiline:true,
                },
            },
            expanded: true
        },
        steps: {
            name: "Steps Account Section",
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
                steps: {
                    dataType: "array",
                    name: "Steps",
                    of: {
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
                            imageUrl: {
                                name: "Image URL",
                                dataType: "string",
                                url: true
                            },
                            btnTxt: {
                                name: "Button Text",
                                dataType: "string",
                            },
                            link: {
                                name: "Link",
                                dataType: "string",
                                url: true
                            }
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
    },
});
