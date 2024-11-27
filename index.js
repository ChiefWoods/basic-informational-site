import { serve } from "bun";

serve({
  port: 8080,
  static: {
    "/": new Response(await Bun.file("pages/index.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/about.html": new Response(await Bun.file("pages/about.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/contact-me.html": new Response(await Bun.file("pages/contact-me.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/assets/icons/github.svg": new Response(await Bun.file("assets/icons/github.svg").bytes(), {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    }),
    "/assets/images/scrambled_eggs.jpg": new Response(await Bun.file("assets/images/scrambled_eggs.jpg").bytes(), {
      headers: {
        "Content-Type": "image/jpeg",
      },
    }),
    "/styles.css": new Response(await Bun.file("styles.css").bytes(), {
      headers: {
        "Content-Type": "text/css",
      },
    }),
  },

  async fetch(req) {
    return new Response(await Bun.file("pages/404.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    })
  },
});