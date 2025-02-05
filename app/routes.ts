import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Adding route as this is only way I get this to work.
export default [
  index("routes/home.tsx"),
  route("blog/first-blog", "routes/blog/first-blog.mdx"),
] satisfies RouteConfig;
