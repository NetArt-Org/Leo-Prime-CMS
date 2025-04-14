import { buildCollection } from "@firecms/core";
import { FooterEntry } from "@/app/common/types";

export const footerCollection = buildCollection<FooterEntry>({
    id: "footer",
    path: "footer",
    name: "Footer",
    singularName: "Footer entry",
    icon: "article",
    group: "Content",
    description: "Global Footer Content",
    defaultSize: "l",
    properties: {
        menu: {
            name: "Footer Menu",
            dataType: "string",
            markdown:true
        },
        subscribeHeading: {
            name: "Footer Subscribe Heading",
            dataType: "string",
        },
        subscribeContent: {
            name: "Footer Subscribe Content",
            dataType: "string",
        },
        contact: {
            name: "Footer Contact Content",
            dataType: "string",
            markdown:true
        },
        companyInfo: {
            name: "Footer Content Company Info",
            dataType: "string",
            multiline:true
        },
        operation: {
            name: "Footer Content Operation Info",
            dataType: "string",
            multiline:true
        },
        disclaimer: {
            name: "Footer Content Disclaimer",
            dataType: "string",
            multiline:true
        },
        riskWarning: {
            name: "Footer Content Risk Warning",
            dataType: "string",
            multiline:true
        },
        jurisdiction: {
            name: "Footer Content Jurisdiction",
            dataType: "string",
            multiline:true
        },
        copyright: {
            name: "Footer Copyright",
            dataType: "string",
        },
    },
});


// {
//     "menu": {
//       "supportingLinks": {
//         "heading": "Supporting Links",
//         "submenu": [
//           {
//             "label": "Privacy Policy",
//             "href": "/privacy-policy"
//           },
//           {
//             "label": "AML & KYC Policy",
//             "href": "/aml-policy"
//           },
//           {
//             "label": "Security Policies",
//             "href": "/security-policies"
//           },
//           {
//             "label": "Legal Document",
//             "href": "/legal-doc"
//           },
//           {
//             "label": "Terms and conditions",
//             "href": "/terms-and-conditions"
//           }
//         ]
//       },
//       "accountTypes": {
//         "heading": "Account Types",
//         "submenu": [
//           {
//             "label": "Classic Account",
//             "href": "/classic-account"
//           },
//           {
//             "label": "Pro Account",
//             "href": "/pro-account"
//           },
//           {
//             "label": "ECN Account",
//             "href": "/ecn-account"
//           },
//           {
//             "label": "Cent Account",
//             "href": "/cent-account"
//           },
//           {
//             "label": "Demo Account",
//             "href": "/demo-account"
//           }
//         ]
//       },
//       "company": {
//         "heading": "Company",
//         "submenu": [
//           {
//             "label": "Why Leo",
//             "href": "/why-leoprime"
//           },
//           {
//             "label": "Company News",
//             "href": "https://news.leoprime.com/"
//           },
//           {
//             "label": "FAQs",
//             "href": "/contact-us"
//           },
//           {
//             "label": "Contact Us",
//             "href": "/contact-us"
//           }
//         ]
//       }
//     },
//     "subscribe": {
//       "heading": "Your Trusted Partner in Global Trading.",
//       "content": "Never miss a market move, Subscribe now!"
//     },
//     "contact": {
//       "heading": "Contact Us",
//       "email": {
//         "label": "Support@leoprime.com",
//         "href": "mailto:support@leoprime.com"
//       },
//       "social": [
//         {
//           "label": "Instagram",
//           "href": "https://www.instagram.com/leoprimefx/"
//         },
//         {
//           "label": "Twitter",
//           "href": "https://twitter.com/LeoPrimeFx"
//         },
//         {
//           "label": "Facebook",
//           "href": "https://www.facebook.com/LeoPrimeForexBrokers/"
//         },
//         {
//           "label": "LinkedIn",
//           "href": "https://www.linkedin.com/company/leo-prime"
//         }
//       ]
//     },
//     "content": {
//       "companyInfo": "Leo Inc Limited - Registration Number: 1833611, having its registered office at Flat F, 31/F, Tower 1, Bailey Garden, 23 Bailey Street, Hunghom, Kowloon, Hong Kong",
//       "operation": "Operation: #1101, 11th Floor, Westburry Business Tower, Business Bay, Dubai, UAE",
//       "disclaimer": "Disclaimer: Information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any currency or spot metals trade. Nothing in this site should be read or construed as constituting advice on the part of Leo Inc. Limited or any of its affiliates, directors, officers or employees.",
//       "riskWarning": "Risk Warning: FX and CFDs, which are leveraged products, incur a high level of risk and can result in the loss of all your invested capital. Therefore, FX and CFDs may not be suitable for all investors. You should not risk more than you are prepared to lose. Before deciding to trade, please ensure you understand the risks involved and take into account your level of experience. Seek independent advice if necessary.",
//       "jurisdiction": "Leo Inc Limited, does not offer its services to the residents of certain jurisdictions such as: USA, Belgium, North Korea, France, Australia, Israel, and Japan."
//     },
//     "copyright": {
//       "text": "© 2025, All rights reserved"
//     }
//   }
  