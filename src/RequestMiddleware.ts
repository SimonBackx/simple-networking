import { EndpointErrors } from "@simonbackx/simple-endpoints";

import { Request } from "./Request";

export interface RequestMiddleware {
    onBeforeRequest?(request: Request<any>): Promise<void>;
    shouldRetryError?(request: Request<any>, response: Response, error: EndpointErrors): Promise<boolean>;
    shouldRetryNetworkError?(request: Request<any>, error: Error): Promise<boolean>;
}
