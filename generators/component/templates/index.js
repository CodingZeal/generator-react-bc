import { <%= ComponentName %> } from "./component";
import enhance from "./enhancers";

const enhanced<%= ComponentName %> =  enhance(<%= ComponentName %>)

export { enhanced<%= ComponentName %> as <%= ComponentName %> };
