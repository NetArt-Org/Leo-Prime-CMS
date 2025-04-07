import { buildCollection } from "@firecms/core";
import { PolicyEntry } from "@/app/common/types";

export const policyCollection = buildCollection<PolicyEntry>({
    id: "policy",
    path: "policy",
    name: "Policy",
    singularName: "Policy entry",
    icon: "article",
    group: "Content",
    description: "Policy Page Content",
    defaultSize: "l",
    properties: {
        content: {
            name: "Policy Page Content",
            dataType: "map",
            properties: {
                content: {
                    name: "Content",
                    dataType: "string",
                    markdown:true
                },
            },
            expanded: true
        },
    },
});
