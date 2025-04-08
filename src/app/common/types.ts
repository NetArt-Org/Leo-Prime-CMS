import { EntityReference } from "@firecms/core";

export type HomeEntry = {
    banner: {
        heading: string,
        content: string;
        btnTxt: string;
        btnLink: string;
        imageUrl: string;
        coinUrl: string;
        stockUrl: string;
        graphUrl: string;
    },
    keyStats: {
        content: string;
        imageUrl: string;
    }[];
    explore: {
        heading: string;
        content: string;
        carousel:string;
    };
    trading: {
        heading: string;
        content: string;
        carousel: {
            heading: string;
            content: string;
            imageUrl: string;
            btnTxt: string;
            link: string;
        }[];
    };
    trade: {
        heading: string;
        content: string;
        list: {
            btnTxt: string;
        }[];
        imageUrl: string;
        Googlelink: string;
        AppStoreLink: string;
    };
    features: {
        heading: string;
        content: string;
        features: {
            heading: string;
            content: string;
        }[];
    };
}
export type AccountEntry = {
    pageData: {
        pageName: string,
        pageSlug: string,
    },
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
    info: {
        heading:  {
            type: "text" | "image"; // user chooses this from dropdown
            value: string; // either markdown text or image URL
        }[];
        content: string,
    },
    account: {
        heading: string,
        content: string,
        accountName: string,
        table1: string,
        table2:string,
        note: string,
    },
    steps: {
        heading: string,
        content: string,
        steps: {
            heading: string,
            content: string,
            imageUrl: string,
            btnTxt: string,
            link: string,
        }[],
    },
    beginTrading: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
}
export type ToolsEntry = {
    pageData: {
        pageName: string,
        pageSlug: string,
    },
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
    },
    
    steps: {
        heading: string,
        content: string,
        steps: {
            heading: string,
            content: string,
            imageUrl: string,
            btnTxt: string,
            link: string,
        }[],
    },
}
export type DemoAccount = {
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
    info: {
        heading:  {
            type: "text" | "image"; // user chooses this from dropdown
            value: string; // either markdown text or image URL
        }[];
        content:string,
        btnTxt: string,
        btnLink: string,
    },
    advantages: {
        heading: string,
        content: string,
        list: {
            heading: string;
            content: string;
            imageUrl:string
        }[];
    },
    keyDifference:{
        heading: string,
        content: string,
        difference:string
    }
    beginTrading: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
}
export type PlatformEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
    info: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            btnTxt: string;
        }[];
    },
    keyBenefits: {
        heading: string,
        content: string,
        list: {
            iconUrl:string;
            heading: string;
            content: string;
            imageUrl:string;
        }[];
    },
    download: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            btnTxt: string;
            btnLink: string;
        }[];
    },
    whyChooseUs: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            heading: string,
            content: string,
            imageUrl: string,
        }[],
    },
}
export type BrokerEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
    },
    info: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            btnTxt: string;
        }[];
    },
    keyBenefits: {
        heading: string,
        content: string,
        list: {
            iconUrl:string;
            heading: string;
            content: string;
        }[];
    },
    steps: {
        heading: string,
        content: string,
        steps: {
            heading: string,
            content: string,
            imageUrl: string,
            btnTxt: string,
            link: string,
        }[],
    },
    getInTouch:{
        heading: string,
        content: string,
    }
}
export type MarginEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
        imageUrl: string,
    },
    info: {
        heading: string,
        content: string,
    },
    margin: {
        heading: string,
        content: string,
    },
    leverage: {
        heading: string,
        content: string,
    },
    rulesTable: {
        heading: string,
        content: string,
        list: {
            heading: string;
            content: string;
            cent: string;
            classic: string;
            pro: string;
            ecn: string;
        }[];
    },
    steps: {
        heading: string,
        content: string,
        steps: {
            heading: string,
            content: string,
            imageUrl: string,
            btnTxt: string,
            link: string,
        }[],
    },
}
export type AboutEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
    },
    keyStats: {
        heading: string;
        content: string;
    }[];
    info: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            btnTxt: string;
        }[];
    },
    buildTrust: {
        heading: string,
        content: string,
        list: {
            iconUrl:string;
            heading: string;
            content: string;
        }[];
    },
    milestone: {
        heading: string,
        content: string,
        list: {
            imageUrl:string;
            heading: string;
        }[];
    },
    award: {
        heading: string,
        content: string,
        list: {
            imageUrl:string;
            heading: string;
            content: string;
            btnTxt: string;
            btnLink: string;
        }[];
    },
}
export type WhyLeoPrimeEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
    },
    advantages: {
        heading: string,
        content: string,
        list: {
            image1:string;
            image2:string;
            heading: string;
            content: string;
        }[];
    },
    commitment: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
        imageUrl: string,
    },
    riskInfo: {
        heading: string,
        content: string,
        list: {
            heading: string;
            content: string;
        }[];
        imageUrl:string
    },
    solutions: {
        heading: string,
        content: string,
        list: {
            imageUrl:string
            heading: string;
            content: string;
        }[];
    },
}
export type ContactEntry={
    banner: {
        heading: string,
        content: string,
        btnTxt: string,
        btnLink: string,
    },
    info: {
        heading: string,
        content: string,
        list: {
            heading: string,
            content: string,
            imageUrl: string,
            contact: string,
        }[],
        note:string
    },
    getInTouch:{
        heading: string,
        content: string,
    }
}
export type PolicyEntry={
    pageData: {
        pageName: string,
        pageSlug: string,
    },
    content:{
        content:string
    }
}
export type TradingEntry ={
    pageData: {
        pageName: string,
        pageSlug: string,
    },
    banner: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
        imageUrl: string,
    },
    info: {
        heading: string,
        content1: string,
        content2: string,
    },
    table: {
        heading: string,
        content: string,
        classic: string,
        pro: string,
        ecn: string,
        cent: string,
    },
    keyFeatures: {
        heading: string,
        content: string,
        list: {
            heading: string,
            content1: string,
            content2: string,
            imageUrl: string,
        }[],
    },
    tradingStrategy: {
        heading: string,
        content: string,
        imageUrl: string,
        list: {
            heading: string,
            content: string,
            imageUrl: string,
        }[],
    },
}
export type DepositEntry = {
    banner: {
        heading: string,
        content: string,
        btnTxt1: string,
        btnLink1: string,
        btnTxt2: string,
        btnLink2: string,
        imageUrl: string,
    },
    info: {
        heading: string,
        content: string,
        list: {
            heading: string;
            content: string;
            imageUrl: string;
        }[];
    },
    paymentOption: {
        heading: string,
        content: string,
        deposit: string,
        withdraw: string,
    },
    customerSupport: {
        heading: string,
        btnTxt: string,
        btnLink: string,
        imageUrl: string,
        list: {
            content: string,
        }[];
    }
    keyInfo: {
        heading: string,
        content: string,
    },

}
export type BlogEntry = {
    slug: string,
    name: string,
    header_image: string,
    content: string;
    created_on: Date,
    publish_date: Date,
    reviewed: boolean,
    status: string,
    tags: string[]
}

export type BlogEntryWithId = BlogEntry & { id: string };

export type BlogEntryImages = {
    type: "images";
    value: string[];
}

export type BlogEntryText = {
    type: "text";
    value: string;
}

export type BlogQuote = {
    type: "quote";
    value: string;
}
