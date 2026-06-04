import type { CityLocation, ContentTemplate } from "@/types";
import CityTemplateA from "./CityTemplateA";
import CityTemplateB from "./CityTemplateB";
import CityTemplateC from "./CityTemplateC";
import CityTemplateD from "./CityTemplateD";
import CityTemplateE from "./CityTemplateE";

// Dispatches a city to one of the 5 structurally distinct templates based on the
// `contentTemplate` stored in its data record (slug-hash derived, overridable).
// This is the anti-penalty rotation. See TEMPLATE-DIVERSIFICATION-GUIDE.md.
const templates: Record<ContentTemplate, (props: { city: CityLocation }) => React.JSX.Element> = {
  A: CityTemplateA,
  B: CityTemplateB,
  C: CityTemplateC,
  D: CityTemplateD,
  E: CityTemplateE,
};

export default function CityTemplateRouter({ city }: { city: CityLocation }) {
  const Template = templates[city.contentTemplate] ?? CityTemplateA;
  return <Template city={city} />;
}
