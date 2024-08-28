import {
  Advance_Styling_with_Responsive_Design_CERTIFICATE_PNG,
  Capstone_CERTIFICATE_PNG,
  Interactivity_with_javaScript_CERTIFICATE_PNG,
  Introduction_to_CSS_CERTIFICATE_PNG,
  Introduction_to_HTML5_CERTIFICATE_PNG,
  Web_Design_Specialization_Certificate_PNG,
} from "./certificateImageConstant";
import {
  Web_Design_Specialization_Certificate,
  Introduction_to_HTML5_CERTIFICATE,
  Capstone_CERTIFICATE,
  Advance_Styling_with_Responsive_Design_CERTIFICATE,
  Interactivity_with_javaScript_CERTIFICATE,
  Introduction_to_CSS_CERTIFICATE,
} from "./certificatePDFConstant";

const CERTIFICATES = [
  {
    id: "1",
    name: "Web Design Specialization",
    VerficationLink:
      "https://www.coursera.org/verify/specialization/RDFQFZ95N59T",
    image: Web_Design_Specialization_Certificate_PNG,
    pdf: Web_Design_Specialization_Certificate,
    category: "specialization",
    platform: "coursera",
  },
  {
    id: "2",
    name: "Introduction to HTML5",
    VerficationLink:
      "https://www.coursera.org/verify/L9MD5W7PYEXZ",
    image: Introduction_to_HTML5_CERTIFICATE_PNG,
    pdf: Introduction_to_HTML5_CERTIFICATE,
    category: "specialization",
    platform: "coursera",
  },
  {
    id: "3",
    name: "Introduction to CSS",
    VerficationLink:
      "https://www.coursera.org/verify/64F3ZZ8VXEPK",
    image: Introduction_to_CSS_CERTIFICATE_PNG,
    pdf: Introduction_to_CSS_CERTIFICATE,
    category: "specialization",
    platform: "coursera",
  },
  {
    id: "4",
    name: "Interactivity with javaScript",
    VerficationLink:
      "https://www.coursera.org/verify/DTYDXGE5DEE6",
    image: Interactivity_with_javaScript_CERTIFICATE_PNG,
    pdf: Interactivity_with_javaScript_CERTIFICATE,
    category: "specialization",
    platform: "coursera",
  },
  {
    id: "5",
    name: "Advance Styling with Responsive Design",
    VerficationLink:
      "https://www.coursera.org/verify/XEVGL8TRVZ9B",
    image: Advance_Styling_with_Responsive_Design_CERTIFICATE_PNG,
    pdf: Advance_Styling_with_Responsive_Design_CERTIFICATE,
    category: "specialization",
    platform: "coursera",
  },
  {
    id: "6",
    name: "Capstone",
    VerficationLink:
      "https://www.coursera.org/verify/TL4LWQSM92A2",
    image: Capstone_CERTIFICATE_PNG,
    pdf: Capstone_CERTIFICATE,
    category: "specialization",
    platform: "coursera",
  },
];

export default CERTIFICATES;
