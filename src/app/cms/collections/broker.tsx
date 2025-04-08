import { buildCollection } from "@firecms/core";
import { BrokerEntry } from "@/app/common/types";

export const brokerCollection = buildCollection<BrokerEntry>({
    id: "broker",
    path: "broker",
    name: "Introducing Broker",
    singularName: "Introducing Broker entry",
    icon: "article",
    group: "Content",
    description: "Introducing Broker Page Content",
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
                    multiline: true
                },
                imageUrl: {
                    name: "Image URL",
                    dataType: "string",
                    url: true
                },
                list: {
                    dataType: "array",
                    name: "List",
                    of: {
                        dataType: "map",
                        properties: {
                            btnTxt: {
                                name: "Button Text",
                                dataType: "string",
                            },
                        }
                    },
                    expanded: true,
                },
            },
            expanded: true
        },
        keyBenefits: {
            name: "Key Benefits Section",
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
                            iconUrl: {
                                name: "Icon Url",
                                dataType: "string",
                                url: true
                            },
                            heading: {
                                name: "Heading",
                                dataType: "string",
                                multiline: true
                            },
                            content: {
                                name: "Content",
                                dataType: "string",
                            },
                        }
                    },
                    expanded: true,
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
