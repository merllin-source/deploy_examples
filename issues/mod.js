import {
  json,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.1.7/mod.ts";

serve({
  "/quotes": handleQuotes,
});
