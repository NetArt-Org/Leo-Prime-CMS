import { buildCollection } from "@firecms/core";
import { HeaderEntry } from "@/app/common/types";

export const headerCollection = buildCollection<HeaderEntry>({
    id: "header",
    path: "header",
    name: "Header",
    singularName: "Header entry",
    icon: "article",
    group: "Content",
    description: "Global Header Content",
    defaultSize: "l",
    properties: {
        header: {
            name: "Header",
            dataType: "string",
            markdown:true
        },
        menu: {
            name: "Menu",
            dataType: "string",
            markdown:true
        },
    },
});
