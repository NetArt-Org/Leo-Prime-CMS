import { buildCollection } from "@firecms/core";
import { ContactEntry } from "@/app/common/types";

export const contactCollection = buildCollection<ContactEntry>({
    id: "contact",
    path: "contact",
    name: "Contact",
    singularName: "Contact entry",
    icon: "article",
    group: "Content",
    description: "Contact Page Content",
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
        },
        info: {
            name: "Contact Info Section",
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
                    dataType: "array",
                    name: "List",
                    of: {
                        dataType: "map",
                        properties: {
                            imageUrl: {
                                name: "Image URL",
                                dataType: "string",
                                url: true
                            },
                            heading: {
                                name: "Heading",
                                dataType: "string",
                            },
                            content: {
                                name: "Content",
                                dataType: "string",
                            },
                            contact:{
                                name: "Contact",
                                dataType: "string",
                            }
                        }
                    },
                    expanded: true,
                },
                note:{
                    name:"Note",
                    dataType:"string"
                }
            },
            expanded: true
        },
        getInTouch: {
            name: "Get In Touch Section",
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
            },
            expanded: true
        },
    },
});
