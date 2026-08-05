import { Request } from "express";
export interface GraphQLContext {
    user?: any;
}
export declare const buildGraphQLContext: ({ req }: {
    req: Request;
}) => Promise<GraphQLContext>;
//# sourceMappingURL=context.d.ts.map